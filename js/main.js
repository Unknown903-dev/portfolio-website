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
      "Built and connected frontend screens to backend APIs, implemented QR clock-in, employee task flows, templates, keychain session storage, push notifications, management navigation, LLM report integration, company-based data separation, UI refactors, QA testing, and deployment preparation.",
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
      "A collection of automation projects, including scripts that practice workflow automation concepts.",
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

  article.appendChild(createTextElement("h3", project.title));
  article.appendChild(createStrongLabelParagraph("Type", project.type));

  if (project.role) {
    article.appendChild(createStrongLabelParagraph("Role", project.role));
  }

  article.appendChild(createTextElement("p", project.description));

  if (project.tech) {
    article.appendChild(createStrongLabelParagraph("Tech", project.tech));
  }

  if (project.more && project.moreId) {
    article.appendChild(createMoreButton(project));
    article.appendChild(createMoreDetails(project));
  }

  if (Array.isArray(project.links)) {
    project.links.forEach((link) => {
      const linkElement = createProjectLink(link);

      if (linkElement) {
        article.appendChild(linkElement);
      }
    });
  }

  return article;
}

function createMoreButton(project) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "more-button";
  button.dataset.moreTarget = project.moreId;
  button.textContent = "More";
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
  anchor.className = "repo-link";
  anchor.href = link.url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.textContent = link.label;

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

  const label = document.createElement("label");
  label.textContent = stat.label;

  const bar = document.createElement("div");
  bar.className = "bar";

  const fill = document.createElement("div");
  fill.className = "fill";

  const safeValue = Math.min(Math.max(Number(stat.value) || 0, 0), 100);
  fill.style.width = `${safeValue}%`;

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
function showSection(sectionId) {
  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("hidden");
  });

  const selectedSection = document.getElementById(sectionId);

  if (selectedSection) {
    selectedSection.classList.remove("hidden");
  }
}

function toggleMore(detailsId) {
  const details = document.getElementById(detailsId);

  if (details) {
    details.classList.toggle("hidden");
  }
}

function filterProjects(category, button) {
  document.querySelectorAll(".filter-button").forEach((filterButton) => {
    filterButton.classList.remove("active");
  });

  button.classList.add("active");

  document.querySelectorAll(".quest-card").forEach((card) => {
    const cardCategories = card.getAttribute("data-category") || "";
    const shouldShow = category === "all" || cardCategories.split(" ").includes(category);

    card.classList.toggle("hidden", !shouldShow);
  });
}

function setupSectionNavigation() {
  document.querySelectorAll("[data-section]").forEach((button) => {
    button.addEventListener("click", () => {
      const sectionId = button.getAttribute("data-section");
      showSection(sectionId);
    });
  });
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

  const hue = Math.floor(Math.random() * 360);
  const color = `hsl(${hue}, 100%, 70%)`;
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
   App Start
========================= */
function initApp() {
  renderEnemyFleet();
  renderFilters();
  renderProjects();
  renderStats();
  renderInventory();
  setupSectionNavigation();
  setupProjectFilters();
  setupMoreButtons();
  setupSparkles();
  setupChristmasLights();
}

document.addEventListener("DOMContentLoaded", initApp);
