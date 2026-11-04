/* =========================
   Data
========================= */
const enemyPositions = [
  [20, 0],
  [80, 0],
  [140, 0],
  [200, 0],
  [260, 0],
  [320, 0],
  [50, 52],
  [110, 52],
  [170, 52],
  [230, 52],
  [290, 52],
  [80, 104],
  [140, 104],
  [200, 104],
  [260, 104],
];

const filters = [
  { label: "All", value: "all" },
  { label: "Full-Stack", value: "fullstack" },
  { label: "Algorithms", value: "algorithms" },
  { label: "Cybersecurity", value: "cybersecurity" },
  { label: "Frontend", value: "frontend" },
  { label: "Research", value: "research" },
  { label: "Coursework", value: "coursework" },
];

const projects = [
  {
    title: "Production Tracking Mobile App",
    type: "Industry Capstone / Group Mobile App",
    categories: ["fullstack"],
    featured: true,
    role: "Team Lead, Full-Stack Developer, DevOps, and QA Tester",
    description:
      "Led full-stack development for a role-based production tracking app that improved task visibility, time tracking, project management, and reporting across employee, manager, and executive workflows.",
    tech:
      "React Native, TypeScript, Cloudflare Workers, D1, R2, Firebase, Google SSO, Python/FastAPI, TestFlight",
    moreId: "production-more",
    more:
      "Built and connected frontend screens to backend APIs, implemented QR clock-in, employee task flows, templates, keychain session storage, push notifications, management navigation, LLM report integration, company-based data separation, UI refactors, QA testing, and deployment preparation. This is an ongoing project soon to be deployed.",
  },

  {
    title: "Algorithm Finder Website",
    type: "Deployed Web App / Algorithm Learning Tool",
    categories: ["frontend", "fullstack", "coursework", "algorithms"],
    featured: true,
    role: "Designer and Developer",
    description:
      "Built a deployed interactive website that helps users identify which algorithm to use, study algorithm concepts, view copyable C++ examples, and practice with quiz questions.",
    tech:
      "HTML, CSS, JavaScript, C++, Responsive UI",
    links: [
      {label: "View Quest", url: "https://github.com/Unknown903-dev/algorithm-finder"},
      {label: "Live Site", url: "https://algorithms.z3rø.com" }],
  },
  {
    title: "Research",
    type: "AI Security Research",
    categories: ["research", "cybersecurity"],
    description:
      "Evaluated prompt injection robustness in an open-source instruction-tuned LLM by comparing attack success rates with and without a system policy prompt.",
    links: [{ label: "View Quest", url: "https://github.com/Unknown903-dev/Research" }],
  },
  {
    title: "AI Patient Voice Tester",
    type: "Healthcare AI / Voice Automation",
    categories: ["research", "fullstack"],
    description:
      "Built a Python voice-testing system that places real outbound calls to simulate patient conversations and evaluate healthcare AI agent behavior under normal and adversarial scenarios.",
    tech: "Python, Twilio, FastAPI, WebSockets, Gemini Live, Voice AI, Healthcare Testing",
    moreId: "patient-call-more",
    more:
      "Created an automated Python voice bot for testing healthcare phone agents by placing real outbound calls and simulating realistic patient interactions using Gemini Live. The system supports multi-turn conversations, scenario-driven patient behavior, barge-in and interruption handling, persistent conversation memory, structured test completion, and recorded transcript artifacts. It was designed to evaluate both normal workflow behavior and edge-case scenarios such as identity verification failures, prompt injection attempts, and privacy/consistency issues in patient-facing AI agents.",
    links: [{ label: "View Quest", url: "https://github.com/Unknown903-dev/Ai-Automated-Patient-Call" }],
  },
  {
    title: "Time and Task Tracker Research Project",
    type: "Research / Full-Stack Collaboration",
    categories: ["research", "fullstack"],
    description:
      "Research collaboration with UC Merced faculty, students, and CSED for a time and task tracker supporting weekly team meetings, decisions, attendance, and project progress for I2G students.",
    tech: "Angular, FastAPI, MongoDB, ShareDB, Automerge, OT/CRDTs",
    moreId: "ucm-task-tracker-more",
    more:
      "Collaborated with UC Merced faculty, students, and CSED on a research-driven application for weekly team meeting minutes, tasks, decisions, attendance, and project progress for students in the I2G program. Developed and evaluated an Angular, FastAPI, and MongoDB architecture emphasizing real-time collaboration, version history, structured data collection, and secure access to team and confidential information. Researched and prototyped ShareDB operational transformation (OT), Automerge CRDTs, and MongoDB change streams for synchronization, conflict resolution, and audit-history strategies.",
    links: [{ label: "Project Page", url: "https://csed-ucm.github.io/projects/t4/" }],
  },
  {
    title: "Mock Instagram Frontend",
    type: "React / Vite Frontend",
    categories: ["frontend", "fullstack"],
    description:
      "A mock Instagram-style frontend built with React and Vite, combining the group frontend work into one project with pages, components, hooks, and routing.",
    links: [{ label: "View Quest", url: "https://github.com/eduardocastellon/mock-instagram-frontend" }],
  },
  {
    title: "Course Registration",
    type: "Deployed Web App",
    categories: ["fullstack", "coursework"],
    description:
      "A course registration project that lets users interact with a class registration system through a deployed web interface.",
    links: [
      { label: "View Quest", url: "https://github.com/Unknown903-dev/alexj_eduardo_amir" },
      { label: "Live Demo", url: "https://lab-8-course-registration-project-fall.onrender.com" },
    ],
  },
  {
    title: "CodePath Cybersecurity Capstone",
    type: "Group Cybersecurity Capstone",
    categories: ["cybersecurity", "coursework"],
    description:
      "Group capstone work from Cyber 101 and Cyber 102 covering password security, brute-force testing, MFA, password manager recommendations, CICIDS 2017 traffic analysis, Wireshark investigation, malicious IP detection, incident response, and recovery planning.",
    links: [{ label: "View Quest", url: "https://github.com/Unknown903-dev/Codepath" }],
  },
  {
    title: "UC Merced Hub / Honeypot Project",
    type: "Deployed Web / Cybersecurity Project",
    categories: ["cybersecurity", "frontend"],
    description:
      "Contributed to a deployed web project connected to UC Merced Hub, with work focused on honeypot/security experimentation and frontend functionality.",
    links: [
      { label: "View Quest", url: "https://github.com/Unknown903-dev/honeypot" },
      { label: "Live Site", url: "https://www.ucmercedhub.com" },
    ],
  },
  {
    title: "bar-chart-logs",
    type: "Data Visualization",
    categories: ["cybersecurity", "coursework"],
    description:
      "Analyzes visited endpoints and displays the top 20 endpoints in a bar chart using notebook-based analysis.",
    links: [{ label: "View Quest", url: "https://github.com/Unknown903-dev/bar-chart-logs" }],
  },
  {
    title: "email-automation-scripts",
    type: "Python Automation",
    categories: ["fullstack"],
    description:
      "A Canvas-based Python automation tool for inviting students to course communities with safer, API-driven messaging instead of fragile browser automation.",
    links: [{ label: "View Quest", url: "https://github.com/Unknown903-dev/email-automation-scripts" }],
  },
  {
    title: "Algorithms",
    type: "C++ Practice",
    categories: ["coursework"],
    description:
      "Algorithm practice repository focused on solving programming problems and strengthening C++ fundamentals.",
    links: [{ label: "View Quest", url: "https://github.com/Unknown903-dev/Algorithms" }],
  },
  {
    title: "Mobile_computing",
    type: "Java / Mobile Computing",
    categories: ["coursework"],
    description:
      "Mobile computing coursework or practice projects built with Java-based development concepts.",
    links: [{ label: "View Quest", url: "https://github.com/Unknown903-dev/Mobile_computing" }],
  },
  {
    title: "Web_Dev",
    type: "JavaScript Labs",
    categories: ["frontend", "coursework"],
    description:
      "Web development lab work focused on practicing JavaScript, frontend structure, and browser-based projects.",
    links: [{ label: "View Quest", url: "https://github.com/Unknown903-dev/Web_Dev" }],
  },
  {
    title: "CompTIA-Security+",
    type: "Cybersecurity Notes",
    categories: ["cybersecurity"],
    description:
      "Security+ focused repository for cybersecurity study material, notes, or certification preparation.",
    links: [{ label: "View Quest", url: "https://github.com/Unknown903-dev/CompTIA-Security-" }],
  },
  {
    title: "TryHackMe",
    type: "Cybersecurity Notes",
    categories: ["cybersecurity"],
    description:
      "TryHackMe notes and cybersecurity learning material from hands-on security practice.",
    links: [{ label: "View Quest", url: "https://github.com/Unknown903-dev/TryHackMe" }],
  },
];

const stats = [
  { label: "Full-Stack Development", value: 85 },
  { label: "Cybersecurity", value: 82 },
  { label: "React / React Native", value: 80 },
  { label: "Backend API Integration", value: 80 },
  { label: "Cloud / DevOps", value: 76 },
  { label: "QA Testing", value: 74 },
  { label: "Threat Analysis Tools", value: 72 },
  { label: "Team Leadership", value: 80 },
];

const inventory = [
  { title: "Languages", text: "JavaScript, TypeScript, Python, C++, Java, HTML, CSS" },
  { title: "Frontend / Mobile", text: "React, React Native, Vite, navigation flows, responsive UI, mobile app screens" },
  { title: "Backend / Cloud", text: "Cloudflare Workers, D1, R2, Firebase, FastAPI, REST APIs, Google SSO" },
  { title: "Cybersecurity", text: "Wireshark, John the Ripper, TryHackMe, prompt injection research, incident response" },
  { title: "Tools", text: "Git, GitHub, Xcode, TestFlight, VS Code, Figma, Firebase Console" },
  { title: "Professional Skills", text: "Team leadership, QA testing, debugging, documentation, deployment preparation" },
];

/* =========================
   Render Helpers
========================= */
function clearElement(element) {
  if (!element) {
    return;
  }

  element.replaceChildren();
}

function createTextElement(tagName, text, className) {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  element.textContent = text;
  return element;
}

function createStrongLabelParagraph(label, value) {
  const paragraph = document.createElement("p");
  const strong = document.createElement("strong");

  strong.textContent = `${label}:`;
  paragraph.append(strong, ` ${value}`);

  return paragraph;
}

function isSafeProjectUrl(url) {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === "https:" || parsedUrl.protocol === "mailto:";
  } catch (error) {
    return false;
  }
}

/* =========================
   Render Functions
========================= */
function renderEnemyFleet() {
  const enemyFleet = document.getElementById("enemyFleet");

  if (!enemyFleet) {
    return;
  }

  clearElement(enemyFleet);

  enemyPositions.forEach(([left, top]) => {
    const enemy = document.createElement("div");
    enemy.className = "enemy";
    enemy.style.left = `${left}px`;
    enemy.style.top = `${top}px`;
    enemyFleet.appendChild(enemy);
  });
}

function renderFilters() {
  const projectFilters = document.getElementById("projectFilters");

  if (!projectFilters) {
    return;
  }

  clearElement(projectFilters);

  filters.forEach((filter, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = index === 0 ? "filter-button active" : "filter-button";
    button.setAttribute("aria-pressed", String(index === 0));
    button.dataset.filter = filter.value;
    button.textContent = filter.label;
    projectFilters.appendChild(button);
  });
}

function renderProjects() {
  const projectList = document.getElementById("projectList");

  if (!projectList) {
    return;
  }

  clearElement(projectList);

  projects.forEach((project) => {
    projectList.appendChild(createProjectCard(project));
  });
}

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = project.featured ? "quest-card featured-project" : "quest-card";
  article.dataset.category = project.categories.join(" ");
  article.dataset.kind = project.categories[0];

  article.appendChild(createTextElement("h3", project.title));
  article.appendChild(createStrongLabelParagraph("Type", project.type));

  if (project.role) {
    article.appendChild(createStrongLabelParagraph("Role", project.role));
  }

  article.appendChild(createTextElement("p", project.description));

  if (project.tech) {
    article.appendChild(createStrongLabelParagraph("Tech", project.tech));
  }

  const actions = document.createElement("div");
  actions.className = "card-actions";

  if (project.more && project.moreId) {
    article.appendChild(createMoreDetails(project));
    actions.appendChild(createMoreButton(project));
  }

  if (Array.isArray(project.links)) {
    project.links.forEach((link) => {
      const linkElement = createProjectLink(link);

      if (linkElement) {
        actions.appendChild(linkElement);
      }
    });
  }

  if (actions.children.length) {
    article.appendChild(actions);
  }

  return article;
}

function createMoreButton(project) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "more-button";
  button.dataset.moreTarget = project.moreId;
  button.textContent = "More";
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", project.moreId);
  return button;
}

function createMoreDetails(project) {
  const container = document.createElement("div");
  container.id = project.moreId;
  container.className = "more-details hidden";

  const paragraph = createStrongLabelParagraph("Key Contributions", project.more);
  container.appendChild(paragraph);

  return container;
}

function createProjectLink(link) {
  if (!link || !isSafeProjectUrl(link.url)) {
    return null;
  }

  const anchor = document.createElement("a");
  anchor.className = /^live/i.test(link.label) ? "repo-link live" : "repo-link";
  anchor.href = link.url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.textContent = link.label;
  anchor.append(createTextElement("span", " (opens in a new tab)", "sr-only"));

  return anchor;
}

function renderStats() {
  const midpoint = Math.ceil(stats.length / 2);
  const statColumns = [stats.slice(0, midpoint), stats.slice(midpoint)];
  const statsList = document.getElementById("statsList");

  if (!statsList) {
    return;
  }

  clearElement(statsList);

  statColumns.forEach((column) => {
    const columnElement = document.createElement("div");

    column.forEach((stat) => {
      columnElement.appendChild(createStatBar(stat));
    });

    statsList.appendChild(columnElement);
  });
}

function createStatBar(stat) {
  const statWrapper = document.createElement("div");
  statWrapper.className = "stat";

  const label = document.createElement("div");
  label.className = "stat-label";

  const bar = document.createElement("div");
  bar.className = "bar";

  const fill = document.createElement("div");
  fill.className = "fill";

  const safeValue = Math.min(Math.max(Number(stat.value) || 0, 0), 100);
  fill.style.setProperty("--w", `${safeValue}%`);

  label.append(createTextElement("span", stat.label), createTextElement("b", String(safeValue)));
  bar.setAttribute("role", "img");
  bar.setAttribute("aria-label", `${stat.label}: ${safeValue} out of 100`);
  bar.appendChild(fill);
  statWrapper.append(label, bar);

  return statWrapper;
}

function renderInventory() {
  const inventoryList = document.getElementById("inventoryList");

  if (!inventoryList) {
    return;
  }

  clearElement(inventoryList);

  inventory.forEach((item) => {
    const card = document.createElement("article");
    card.className = "inventory-card";

    card.append(
      createTextElement("h3", item.title),
      createTextElement("p", item.text)
    );

    inventoryList.appendChild(card);
  });
}

/* =========================
   Interaction Functions
========================= */
function showSection(sectionId, { focus = false, updateHash = true } = {}) {
  const selectedSection = document.getElementById(sectionId);

  if (!selectedSection) {
    return;
  }

  document.querySelectorAll(".panel").forEach((section) => section.classList.add("hidden"));
  selectedSection.classList.remove("hidden");

  document.querySelectorAll("[data-section]").forEach((tab) => {
    const active = tab.dataset.section === sectionId;
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;

    if (active && focus) {
      tab.focus();
    }
  });

  if (updateHash) {
    history.replaceState(null, "", `#${sectionId}`);
    addScore(50);
  }
}

function toggleMore(detailsId) {
  const details = document.getElementById(detailsId);

  if (!details) {
    return;
  }

  const isHidden = details.classList.toggle("hidden");
  addScore(10);
  const button = document.querySelector(`[data-more-target="${detailsId}"]`);

  if (button) {
    button.textContent = isHidden ? "More" : "Less";
    button.setAttribute("aria-expanded", String(!isHidden));
  }
}

function updateResultCount() {
  const total = document.querySelectorAll(".quest-card").length;
  const shown = document.querySelectorAll(".quest-card:not(.hidden)").length;
  const counter = document.getElementById("resultCount");

  if (counter) {
    counter.textContent = `Showing ${shown} of ${total} quests`;
  }
}

function filterProjects(category, button) {
  document.querySelectorAll(".filter-button").forEach((filterButton) => {
    filterButton.classList.remove("active");
    filterButton.setAttribute("aria-pressed", "false");
  });

  button.classList.add("active");
  button.setAttribute("aria-pressed", "true");

  document.querySelectorAll(".quest-card").forEach((card) => {
    const cardCategories = card.getAttribute("data-category") || "";
    const shouldShow = category === "all" || cardCategories.split(" ").includes(category);

    card.classList.toggle("hidden", !shouldShow);
  });

  updateResultCount();
  addScore(25);
}

function setupSectionNavigation() {
  const tabs = [...document.querySelectorAll("[data-section]")];
  const moves = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => showSection(tab.dataset.section));

    tab.addEventListener("keydown", (event) => {
      let next = null;

      if (event.key in moves) {
        next = (index + moves[event.key] + tabs.length) % tabs.length;
      } else if (event.key === "Home") {
        next = 0;
      } else if (event.key === "End") {
        next = tabs.length - 1;
      }

      if (next !== null) {
        event.preventDefault();
        showSection(tabs[next].dataset.section, { focus: true });
      }
    });
  });

  const fromHash = window.location.hash.slice(1);

  if (tabs.some((tab) => tab.dataset.section === fromHash)) {
    showSection(fromHash, { updateHash: false });
  }
}

function setupProjectFilters() {
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-filter");

      if (category) {
        filterProjects(category, button);
      }
    });
  });
}

function setupMoreButtons() {
  document.querySelectorAll("[data-more-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const detailsId = button.getAttribute("data-more-target");

      if (detailsId) {
        toggleMore(detailsId);
      }
    });
  });
}

/* =========================
   Mouse Sparkle Effect
   Safe practice:
   - Uses createElement.
   - Does not read or render user input.
========================= */
const SPARKLE_AMOUNT = 3;
const SPARKLE_DISTANCE = 65;
let lastSparkleTime = 0;

function setupSparkles() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  document.addEventListener("mousemove", (event) => {
    const now = Date.now();

    if (now - lastSparkleTime < 25) {
      return;
    }

    lastSparkleTime = now;

    for (let i = 0; i < SPARKLE_AMOUNT; i++) {
      createSparkle(event.clientX, event.clientY);
    }
  });
}

function createSparkle(x, y) {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  const palette = ["#ff3b5f", "#5dff8f", "#f8f32b", "#ffffff"];
  const color = palette[Math.floor(Math.random() * palette.length)];
  sparkle.style.color = color;
  sparkle.style.background = color;

  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;

  const angle = Math.random() * Math.PI * 2;
  const distance = Math.random() * SPARKLE_DISTANCE;
  const dx = Math.cos(angle) * distance;
  const dy = Math.sin(angle) * distance;

  sparkle.style.setProperty("--start-x", "-50%");
  sparkle.style.setProperty("--start-y", "-50%");
  sparkle.style.setProperty("--end-x", `calc(-50% + ${dx}px)`);
  sparkle.style.setProperty("--end-y", `calc(-50% + ${dy}px)`);

  document.body.appendChild(sparkle);

  window.setTimeout(() => {
    sparkle.remove();
  }, 700);
}

/* =========================
   Christmas Lights
========================= */
function setupChristmasLights() {
  const wires = document.querySelectorAll(".christmas-wire");
  const colors = ["red", "green", "blue", "yellow", "pink", "orange"];

  wires.forEach((wire, wireIndex) => {
    const count = Number.parseInt(wire.dataset.lightCount || "0", 10);

    if (!Number.isFinite(count) || count <= 0) {
      return;
    }

    for (let i = 0; i < count; i++) {
      const bulb = document.createElement("span");
      const color = colors[(i + wireIndex) % colors.length];

      bulb.classList.add("christmas-bulb", color);
      bulb.style.animationDelay = `${(i % colors.length) * 0.18}s`;

      wire.appendChild(bulb);
    }
  });
}

/* =========================
   Pixel Title (5x7 bitmap letters)
   To use another letter, add its 7 rows to GLYPHS.
========================= */
const GLYPHS = {
  A: [".###.", "#...#", "#...#", "#####", "#...#", "#...#", "#...#"],
  E: ["#####", "#....", "#....", "####.", "#....", "#....", "#####"],
  L: ["#....", "#....", "#....", "#....", "#....", "#....", "#####"],
  N: ["#...#", "##..#", "#.#.#", "#..##", "#...#", "#...#", "#...#"],
  O: [".###.", "#...#", "#...#", "#...#", "#...#", "#...#", ".###."],
  P: ["####.", "#...#", "#...#", "####.", "#....", "#....", "#...."],
  R: ["####.", "#...#", "#...#", "####.", "#.#..", "#..#.", "#...#"],
  X: ["#...#", "#...#", ".#.#.", "..#..", ".#.#.", "#...#", "#...#"],
  Y: ["#...#", "#...#", ".#.#.", "..#..", "..#..", "..#..", "..#.."],
  S: [".####", "#....", "#....", ".###.", "....#", "....#", "####."],
  T: ["#####", "..#..", "..#..", "..#..", "..#..", "..#..", "..#.."],
  ":": [".", "#", "#", ".", "#", "#", "."],
};

const PIXEL_FACES = {
  xmas: { top: "#ffffff", bottom: "#ff3b5f", depth: ["#1f8a4c", "#176b3a", "#10502b", "#0a3a1e", "#052412"] },
  cyan: { top: "#ffffff", bottom: "#36f9f6", depth: ["#1fb6d8", "#166aa1", "#12497a", "#0c2f56", "#071a38"] },
  gold: { top: "#fff7a8", bottom: "#ff9f1c", depth: ["#ff6b1a", "#ff2a6d", "#c91873", "#64125d", "#160a35"] },
};

function buildPixelSvg(text, faceName, id) {
  const NS = "http://www.w3.org/2000/svg";
  const face = PIXEL_FACES[faceName] || PIXEL_FACES.cyan;
  let x = 0;
  let d = "";

  for (const ch of text.toUpperCase()) {
    const glyph = GLYPHS[ch];

    if (!glyph) {
      x += 3;
      continue;
    }

    glyph.forEach((row, y) => {
      [...row].forEach((cell, i) => {
        if (cell === "#") {
          d += `M${x + i} ${y}h1v1h-1z`;
        }
      });
    });

    x += glyph[0].length + 1;
  }

  const step = 0.5;
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", `-0.5 -0.5 ${x - 1 + step * 5 + 1} ${7 + step * 5 + 1}`);
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("class", `pixel-svg ${faceName}`);

  const gradient = document.createElementNS(NS, "linearGradient");
  gradient.id = id;
  gradient.setAttribute("x1", "0");
  gradient.setAttribute("y1", "0");
  gradient.setAttribute("x2", "0");
  gradient.setAttribute("y2", "1");

  [[0, face.top], [1, face.bottom]].forEach(([offset, color]) => {
    const stop = document.createElementNS(NS, "stop");
    stop.setAttribute("offset", offset);
    stop.setAttribute("stop-color", color);
    gradient.appendChild(stop);
  });

  svg.appendChild(gradient);

  for (let i = face.depth.length; i >= 0; i--) {
    const path = document.createElementNS(NS, "path");
    path.setAttribute("d", d);
    path.setAttribute("transform", `translate(${i * step} ${i * step})`);
    path.setAttribute("fill", i === 0 ? `url(#${id})` : face.depth[i - 1]);
    svg.appendChild(path);
  }

  return svg;
}

function renderPixelTitles() {
  document.querySelectorAll("[data-pixel]").forEach((element, index) => {
    const text = element.dataset.pixel;
    element.replaceChildren(
      createTextElement("span", text, "sr-only"),
      buildPixelSvg(text, element.dataset.face, `pixel-face-${index}`)
    );
  });
}

/* =========================
   Score, Portrait, Start Screen
========================= */
let score = 3190;

function addScore(points) {
  score += points;
  const counter = document.getElementById("score");

  if (counter) {
    counter.textContent = String(score).padStart(5, "0");
  }
}

const SPRITE = [
  ".....rrr.WW.",
  "...rrrrrrrr.",
  "..rrrrrrrrr.",
  ".wwwwwwwwwww",
  ".HsssssssssH",
  "yHsessssesHy",
  "yHssssssssHy",
  ".yssssssssy.",
  "...ssssss...",
  "..cccccccc..",
  ".cccccccccc.",
  "sccccccccccs",
  ".cccddddccc.",
  "..pppppppp..",
  "..ppp..ppp..",
  "..www..www..",
];

const SPRITE_COLORS = { H: "#7a3cff", r: "#ff3b5f", W: "#ffffff", s: "#ffcf9e", e: "#05060f", c: "#ff3b5f", d: "#c01f3f", y: "#f8f32b", p: "#2d3a9a", w: "#f4f6ff" };

function renderPortrait() {
  const host = document.getElementById("portrait");

  if (!host) {
    return;
  }

  const NS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(NS, "svg");
  const paths = {};

  svg.setAttribute("viewBox", `0 0 12 ${SPRITE.length}`);

  SPRITE.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      if (SPRITE_COLORS[ch]) {
        paths[ch] = (paths[ch] || "") + `M${x} ${y}h1v1h-1z`;
      }
    });
  });

  Object.entries(paths).forEach(([ch, d]) => {
    const path = document.createElementNS(NS, "path");
    path.setAttribute("d", d);
    path.setAttribute("fill", SPRITE_COLORS[ch]);
    svg.appendChild(path);
  });

  host.replaceChildren(svg);
}

function setupStartScreen() {
  const screen = document.getElementById("startScreen");

  if (!screen) {
    return;
  }

  let seen = false;

  try {
    seen = sessionStorage.getItem("started") === "1";
  } catch (error) {
    seen = false;
  }

  if (seen || window.location.hash) {
    screen.remove();
    return;
  }

  let started = false;
  document.body.classList.add("locked");

  const start = () => {
    if (started) {
      return;
    }

    started = true;

    try {
      sessionStorage.setItem("started", "1");
    } catch (error) {
      // Storage can be unavailable; the screen simply shows again next visit.
    }

    document.removeEventListener("keydown", onKey);
    screen.classList.add("leaving");
    document.body.classList.remove("locked");
    addScore(100);
    window.setTimeout(() => screen.remove(), 400);
  };

  const onKey = (event) => {
    if (event.key !== "Tab") {
      start();
    }
  };

  screen.addEventListener("click", start);
  document.addEventListener("keydown", onKey);
  document.getElementById("startButton").focus();
}

/* =========================
   Christmas: snowfall and countdown
========================= */
function setupSnow() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const layer = document.createElement("div");
  layer.className = "snow";
  layer.setAttribute("aria-hidden", "true");

  for (let i = 0; i < 45; i++) {
    const flake = document.createElement("i");
    const size = 2 + Math.floor(Math.random() * 3) * 2;

    flake.style.left = `${Math.random() * 100}%`;
    flake.style.width = `${size}px`;
    flake.style.height = `${size}px`;
    flake.style.opacity = String(0.5 + Math.random() * 0.5);
    flake.style.animationDuration = `${8 + Math.random() * 10}s`;
    flake.style.animationDelay = `-${Math.random() * 18}s`;
    layer.appendChild(flake);
  }

  document.body.appendChild(layer);
}

function setupCountdown() {
  const label = document.getElementById("xmas");

  if (!label) {
    return;
  }

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let christmas = new Date(now.getFullYear(), 11, 25);

  if (today > christmas) {
    christmas = new Date(now.getFullYear() + 1, 11, 25);
  }

  const days = Math.round((christmas - today) / 86400000);
  label.textContent = days === 0 ? "MERRY XMAS!" : `XMAS IN: ${days} DAYS`;
}

/* =========================
   App Start
========================= */
function initApp() {
  renderPixelTitles();
  renderPortrait();
  renderEnemyFleet();
  renderFilters();
  renderProjects();
  updateResultCount();
  renderStats();
  renderInventory();
  setupSectionNavigation();
  setupProjectFilters();
  setupMoreButtons();
  setupSparkles();
  setupChristmasLights();
  setupSnow();
  setupCountdown();
  setupStartScreen();
}

document.addEventListener("DOMContentLoaded", initApp);
