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
    links: [{ 
      label: "View Quest", url: "https://github.com/Unknown903-dev/algorithm-finder",
      label: "Live Site", url: "https://algorithms.z3rø.com" }],
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
   Render Functions
========================= */
function renderEnemyFleet() {
  const enemyFleet = document.getElementById("enemyFleet");

  enemyFleet.innerHTML = enemyPositions
    .map(([left, top]) => `<div class="enemy" style="left: ${left}px; top: ${top}px;"></div>`)
    .join("");
}

function renderFilters() {
  const projectFilters = document.getElementById("projectFilters");

  projectFilters.innerHTML = filters
    .map((filter, index) => {
      const activeClass = index === 0 ? " active" : "";
      return `<button type="button" class="filter-button${activeClass}" data-filter="${filter.value}">${filter.label}</button>`;
    })
    .join("");
}

function renderProjects() {
  const projectList = document.getElementById("projectList");
  projectList.innerHTML = projects.map(createProjectCard).join("");
}

function createProjectCard(project) {
  const featuredClass = project.featured ? " featured-project" : "";
  const categories = project.categories.join(" ");
  const roleMarkup = project.role ? `<p><strong>Role:</strong> ${project.role}</p>` : "";
  const techMarkup = project.tech ? `<p><strong>Tech:</strong> ${project.tech}</p>` : "";
  const moreMarkup = project.more ? createMoreMarkup(project) : "";
  const linksMarkup = project.links ? createProjectLinks(project.links) : "";

  return `
    <article class="quest-card${featuredClass}" data-category="${categories}">
      <h3>${project.title}</h3>
      <p><strong>Type:</strong> ${project.type}</p>
      ${roleMarkup}
      <p>${project.description}</p>
      ${techMarkup}
      ${moreMarkup}
      ${linksMarkup}
    </article>
  `;
}

function createMoreMarkup(project) {
  return `
    <button type="button" class="more-button" data-more-target="${project.moreId}">More</button>
    <div id="${project.moreId}" class="more-details hidden">
      <p><strong>Key Contributions:</strong> ${project.more}</p>
    </div>
  `;
}

function createProjectLinks(links) {
  return links
    .map(
      (link) =>
        `<a class="repo-link" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`
    )
    .join("");
}

function renderStats() {
  const midpoint = Math.ceil(stats.length / 2);
  const statColumns = [stats.slice(0, midpoint), stats.slice(midpoint)];
  const statsList = document.getElementById("statsList");

  statsList.innerHTML = statColumns
    .map((column) => `<div>${column.map(createStatBar).join("")}</div>`)
    .join("");
}

function createStatBar(stat) {
  return `
    <div class="stat">
      <label>${stat.label}</label>
      <div class="bar">
        <div class="fill" style="width: ${stat.value}%;"></div>
      </div>
    </div>
  `;
}

function renderInventory() {
  const inventoryList = document.getElementById("inventoryList");

  inventoryList.innerHTML = inventory
    .map(
      (item) => `
        <article class="inventory-card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
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
    const shouldShow = category === "all" || cardCategories.includes(category);

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
      filterProjects(category, button);
    });
  });
}

function setupMoreButtons() {
  document.querySelectorAll("[data-more-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const detailsId = button.getAttribute("data-more-target");
      toggleMore(detailsId);
    });
  });
}
//sparkles -----------------------------
// Mouse sparkle effect
const SPARKLE_AMOUNT = 3;
const SPARKLE_DISTANCE = 65;
let lastSparkleTime = 0;

document.addEventListener("mousemove", (event) => {
  const now = Date.now();

  // Prevents creating too many sparkles and slowing the page down
  if (now - lastSparkleTime < 25) {
    return;
  }

  lastSparkleTime = now;

  for (let i = 0; i < SPARKLE_AMOUNT; i++) {
    createSparkle(event.clientX, event.clientY);
  }
});

function createSparkle(x, y) {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  const hue = Math.floor(Math.random() * 360);
  sparkle.style.color = `hsl(${hue}, 100%, 70%)`;
  sparkle.style.background = `hsl(${hue}, 100%, 70%)`;

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

  setTimeout(() => {
    sparkle.remove();
  }, 700);
}
/* =========================
   App Start
========================= */
renderEnemyFleet();
renderFilters();
renderProjects();
renderStats();
renderInventory();
setupSectionNavigation();
setupProjectFilters();
setupMoreButtons();