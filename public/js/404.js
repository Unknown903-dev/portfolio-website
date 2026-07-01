(() => {
  const logo = document.getElementById("dvdLogo");
  const root = document.documentElement;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!logo) {
    return;
  }

  const colors = [
    ["#36f9f6", "rgba(54, 249, 246, 0.58)"],
    ["#ff2a6d", "rgba(255, 42, 109, 0.58)"],
    ["#f8f32b", "rgba(248, 243, 43, 0.55)"],
    ["#7cff6b", "rgba(124, 255, 107, 0.55)"],
    ["#b967ff", "rgba(185, 103, 255, 0.58)"],
    ["#ff9f1c", "rgba(255, 159, 28, 0.55)"],
  ];

  const cornerRoute = ["top-left", "bottom-right", "top-right", "bottom-left"];
  const state = {
    animationId: null,
    colorIndex: 0,
    cornerIndex: 0,
    lastTime: performance.now(),
    maxX: 0,
    maxY: 0,
    targetCorner: "bottom-right",
    x: 0,
    y: 0,
  };

  function measureStage() {
    state.maxX = Math.max(0, window.innerWidth - logo.offsetWidth);
    state.maxY = Math.max(0, window.innerHeight - logo.offsetHeight);
  }

  function getCornerPosition(corner) {
    return {
      x: corner.includes("right") ? state.maxX : 0,
      y: corner.includes("bottom") ? state.maxY : 0,
    };
  }

  function drawLogo() {
    logo.style.transform = `translate3d(${state.x}px, ${state.y}px, 0)`;
  }

  function changeColor() {
    state.colorIndex = (state.colorIndex + 1) % colors.length;
    const [color, glow] = colors[state.colorIndex];

    root.style.setProperty("--dvd-color", color);
    root.style.setProperty("--dvd-glow", glow);
  }

  function playCornerHitAnimation() {
    logo.classList.remove("hit");
    void logo.offsetWidth;
    logo.classList.add("hit");
  }

  function setNextCorner() {
    state.cornerIndex = (state.cornerIndex + 1) % cornerRoute.length;
    state.targetCorner = cornerRoute[state.cornerIndex];
  }

  function moveLogo(now) {
    const secondsPassed = Math.min(0.032, Math.max(0.001, (now - state.lastTime) / 1000));
    state.lastTime = now;

    const destination = getCornerPosition(state.targetCorner);
    const deltaX = destination.x - state.x;
    const deltaY = destination.y - state.y;
    const distance = Math.hypot(deltaX, deltaY);
    const speed = Math.min(700, Math.max(240, Math.hypot(state.maxX, state.maxY) * 0.24));
    const step = speed * secondsPassed;

    if (distance <= step || distance < 0.75) {
      state.x = destination.x;
      state.y = destination.y;
      drawLogo();
      changeColor();
      playCornerHitAnimation();
      setNextCorner();
    } else {
      state.x += (deltaX / distance) * step;
      state.y += (deltaY / distance) * step;
      drawLogo();
    }

    state.animationId = requestAnimationFrame(moveLogo);
  }

  function stopAnimation() {
    if (state.animationId) {
      cancelAnimationFrame(state.animationId);
      state.animationId = null;
    }
  }

  function centerLogo() {
    stopAnimation();
    logo.style.transform = "translate(-50%, -50%)";
  }

  function startAnimation() {
    stopAnimation();
    measureStage();

    state.x = 0;
    state.y = 0;
    state.cornerIndex = 0;
    state.targetCorner = "bottom-right";
    state.lastTime = performance.now();

    drawLogo();
    state.animationId = requestAnimationFrame(moveLogo);
  }

  function handleResize() {
    measureStage();
    state.x = Math.min(state.x, state.maxX);
    state.y = Math.min(state.y, state.maxY);
    drawLogo();
  }

  function handleMotionPreferenceChange() {
    if (prefersReducedMotion.matches) {
      centerLogo();
    } else {
      startAnimation();
    }
  }

  window.addEventListener("resize", handleResize);
  prefersReducedMotion.addEventListener("change", handleMotionPreferenceChange);

  handleMotionPreferenceChange();
})();