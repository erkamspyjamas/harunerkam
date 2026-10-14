const input = document.getElementById("commandInput");
const inputLine = document.getElementById("inputLine");
const output = document.getElementById("output");
const terminalBody = document.getElementById("terminalBody");
const promptElement = document.querySelector(".prompt");

const PROFILE = {
  name: "Harun Erkam Balı",
  headline: "Full Stack Developer | DevOps Engineer | R&D Engineer",
  email: "admin@harunerkam.com",
  website: "https://harunerkam.com/",
  github: "https://github.com/erkamspyjamas",
  linkedin: "https://www.linkedin.com/in/harunerkam/"
};

const CV_FILES = {
  master: "cv/HARUN_ERKAM_BALI_CV.pdf",
  backend: "cv/HARUN_ERKAM_BALI_BACKEND_CV.pdf",
  fullstack: "cv/HARUN_ERKAM_BALI_FULLSTACK_CV.pdf"
};

let history = [];
let historyIndex = -1;
let currentPath = "/";

/* ---------------- OUTPUT ---------------- */

function print(html = "") {
  const line = document.createElement("div");
  line.className = "output-line";
  line.innerHTML = html;
  output.appendChild(line);
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function normalizeArg(value = "") {
  return value.trim().toLowerCase();
}

/* ---------------- VIRTUAL FILESYSTEM ---------------- */

const fs = {
  "/": {
    type: "dir",
    files: {
      "about.txt": {
        type: "file",
        content: `<span class="heading">Harun Erkam Balı</span>
${PROFILE.headline}

Backend-focused software engineer with 3+ years of experience designing,
building and operating production systems end-to-end.

Core focus:
• backend and API architecture
• production-grade full-stack systems
• cloud-native infrastructure and DevOps
• R&D, real-time services and AI/TTS integrations`
      },

      "skills.txt": {
        type: "file",
        content: `<span class="heading">Languages</span>
Python · Go · TypeScript · JavaScript · C# · SQL

<span class="heading">Backend</span>
Django · Django REST Framework · FastAPI · Node.js · Express.js · NestJS
REST APIs · JWT · RBAC · async/background processing

<span class="heading">Frontend</span>
React · Next.js · HTML · CSS · dashboard/admin interfaces

<span class="heading">Data</span>
PostgreSQL · Redis · MySQL · MSSQL · MongoDB · Firebase
relational modeling · migrations · indexing · query optimization

<span class="heading">DevOps & Infrastructure</span>
Docker · Docker Compose · Kubernetes/k3s · Nginx · Traefik · PgBouncer
Gunicorn/Uvicorn · Linux · GitHub Actions · CI/CD · SSL/TLS
health/readiness checks · logging · monitoring

<span class="heading">R&D / AI</span>
PyTorch · NVIDIA NeMo · ESPnet · VITS · TTS pipelines
streaming gateways · API/service integration`
      },

      "experience.txt": {
        type: "file",
        content: `<span class="heading">Neurosound Dikkat Ve Algı Geliştirme Merkezi</span>

<span class="accent">Aug 2026 — Present</span>
Full Stack Developer & DevOps Engineer — R&D
Django · FastAPI · Go · PostgreSQL · Redis · distributed systems · AI/TTS

<span class="accent">Aug 2024 — Aug 2026</span>
Full Stack Developer & DevOps Engineer
Django · FastAPI · Express.js · Node.js · Go · PostgreSQL · Redis
Docker · k3s/Kubernetes · Nginx · PgBouncer · CI/CD · monitoring

<span class="accent">Feb 2024 — Aug 2024</span>
Full Stack Developer
REST APIs · authentication · automation · integrations · SQL/ORM optimization

<span class="accent">Nov 2023 — Feb 2024</span>
Software Developer
Unity · C# · interactive educational application

<span class="heading">AutoDidactic Technologies</span>
<span class="accent">Feb 2023 — Jun 2023</span>
Research & Development Engineer
Python · Node.js · Docker · Linux · AWS EC2 · AI/R&D experiments`
      },

      "contact.txt": {
        type: "file",
        content: `<span class="heading">Contact</span>
Email    <a class="link" href="mailto:${PROFILE.email}">${PROFILE.email}</a>
Website  <a class="link" href="${PROFILE.website}" target="_blank" rel="noopener">harunerkam.com</a>
LinkedIn <a class="link" href="${PROFILE.linkedin}" target="_blank" rel="noopener">linkedin.com/in/harunerkam</a>
GitHub   <a class="link" href="${PROFILE.github}" target="_blank" rel="noopener">github.com/erkamspyjamas</a>`
      },

      "projects": {
        type: "dir",
        files: {
          "doom-team.md": {
            type: "file",
            content: `<span class="heading">Doom Team / Doom Core</span>
A self-hosted AI software engineering platform that coordinates planning, development, QA and review. Durable task graphs, isolated Git workspaces and bounded recovery keep the workflow traceable.
Focus: TypeScript · Node.js · Fastify · SQLite
Private project.`
          },
          "wireless-headphones.md": {
            type: "file",
            content: `<span class="heading">Wi-Fi / Bluetooth Headphones</span>
Wireless headphone development combining Wi-Fi and Bluetooth connectivity.
Focus: Wireless audio · Wi-Fi · Bluetooth
R&amp;D project.`
          },
          "neurosound-premium-algorithm.md": {
            type: "file",
            content: `<span class="heading">Neurosound Premium Algorithm</span>
Algorithm development for the Neurosound Premium system.
Focus: Algorithm development · R&amp;D
R&amp;D project.`
          },
          "audiogram-reverse-engineering.md": {
            type: "file",
            content: `<span class="heading">Audiogram Device Reverse Engineering</span>
Reverse engineering of an audiogram device to understand its operation and integration requirements.
Focus: Device analysis · Reverse engineering
R&amp;D project.`
          },
          "listening-test.md": {
            type: "file",
            content: `<span class="heading">Listening Test</span>
Development of a listening test and its supporting application workflow.
Focus: Audio testing · Application development
R&amp;D project.`
          },
          "nsp-crm.md": {
            type: "file",
            content: `<span class="heading">NSP CRM</span>
CRM development for the NSP platform, covering client records and operational workflows.
Focus: CRM · Client workflows
Platform project.`
          },
          "nsp-stream.md": {
            type: "file",
            content: `<span class="heading">NSP Stream</span>
Audio streaming development for the NSP platform.
Focus: Audio streaming · NSP
Platform project.`
          },
          "sustindex.md": {
            type: "file",
            content: `<span class="heading">Sustindex</span>
FinTech platform developed independently.
Stack: Django · FastAPI · React · PostgreSQL
Private project; architecture details can be shared when appropriate.`
          },
          "stock-device-tracker.md": {
            type: "file",
            content: `<span class="heading">Stock & Device Tracker</span>
Inventory, cargo and device tracking system.
Implemented with Node.js/Express.js using Firebase and MSSQL variants.`
          },
          "cognitive-booster.md": {
            type: "file",
            content: `<span class="heading">Cognitive Booster</span>
Django + JavaScript application for cognitive exercises,
user progress tracking and education workflows.`
          },
          "speed-reading.md": {
            type: "file",
            content: `<span class="heading">Speed Reading Platform</span>
High-performance PHP/MySQL reading application
extended and optimized for education users.`
          },
          "advanced-learning-unity.md": {
            type: "file",
            content: `<span class="heading">Advanced Learning Unity Program</span>
Unity/C# educational application for power learners,
combining interactive application logic with learning-oriented UX.`
          },
          "realtime-tts.md": {
            type: "file",
            content: `<span class="heading">Realtime TTS / AI Service Integration</span>
Python TTS workers connected to application backends through Go/Python
service layers with low-latency communication, retries, timeouts
and production-reliability considerations.`
          }
        }
      },

      "cv": {
        type: "dir",
        files: {
          "master.txt": {
            type: "file",
            content: `Master CV
open cv master`
          },
          "backend.txt": {
            type: "file",
            content: `Backend-focused CV
open cv backend`
          },
          "fullstack.txt": {
            type: "file",
            content: `Full Stack-focused CV
open cv fullstack`
          }
        }
      }
    }
  }
};

/* ---------------- PATH HELPERS ---------------- */

function pathParts(path) {
  return path.split("/").filter(Boolean);
}

function getNode(path = currentPath) {
  let node = fs["/"];
  for (const part of pathParts(path)) {
    if (!node.files || !node.files[part]) return null;
    node = node.files[part];
  }
  return node;
}

function resolvePath(target) {
  if (!target || target === "~") return "/";
  if (target.startsWith("/")) return target;

  const base = pathParts(currentPath);
  const incoming = target.split("/").filter(Boolean);

  for (const part of incoming) {
    if (part === ".") continue;
    if (part === "..") base.pop();
    else base.push(part);
  }

  return "/" + base.join("/");
}

function updatePrompt() {
  const displayPath = currentPath === "/" ? "/" : currentPath;
  promptElement.textContent = `harunerkam@portfolio:${displayPath}$`;
}

/* ---------------- BOOT ---------------- */

async function bootSequence() {
  inputLine.classList.add("hidden");
  input.disabled = true;

  const bootLines = [
    "Booting ekOS v2.0...",
    "Loading engineering profile...",
    "Mounting experience and project filesystem...",
    "Initializing portfolio shell..."
  ];

  for (const line of bootLines) {
    print(`<span class="muted">${line}</span>`);
    await delay(140);
  }

  print("");
  await systemScan();
  print("");
  print(`<span class="heading">${PROFILE.name}</span>`);
  print(`<span class="accent">${PROFILE.headline}</span>`);
  print("Backend-focused engineer building and operating production systems end-to-end.");
  print("");
  print(`Try <span class="accent">about</span>, <span class="accent">experience</span>, <span class="accent">projects</span>, <span class="accent">skills</span> or <span class="accent">cv</span>.`);

  inputLine.classList.remove("hidden");
  input.disabled = false;
  if (document.documentElement.dataset.mode === "terminal" && [document.body, document.getElementById("terminalView")].includes(document.activeElement)) input.focus();
}

async function systemScan() {
  const modules = [
    "Backend & API Systems",
    "Full Stack Applications",
    "DevOps & Kubernetes",
    "Data & PostgreSQL",
    "R&D / Real-time AI Services"
  ];

  for (const module of modules) {
    const line = document.createElement("div");
    line.className = "output-line muted";
    line.textContent = `Scanning ${module}...`;
    output.appendChild(line);
    terminalBody.scrollTop = terminalBody.scrollHeight;
    await delay(90);
    line.innerHTML = `<span class="accent">✔</span> ${module}`;
  }
}

/* ---------------- COMMANDS ---------------- */

const commands = {
  portfolio() { setPortfolioMode("classic", true); },
  help() {
    print(`<span class="heading">Available commands</span>

about              Profile summary
whoami             Current engineering identity
skills             Technical stack
experience         Career timeline
projects           List selected projects
contact            Contact links
portfolio           Switch to classic portfolio
cv                  List CV versions
cv backend          Open backend CV
cv fullstack        Open full stack CV
cv master           Open master CV

ls [path]           List files/directories
cd &lt;dir&gt;            Change virtual directory
cat &lt;file&gt;          Read a virtual file
pwd                 Print current path
open github         Open GitHub
open linkedin       Open LinkedIn
open cv [version]   Open a CV PDF
clear               Clear terminal

<span class="muted">Tip: use ↑/↓ for history and Tab for autocomplete.</span>`);
  },

  whoami() {
    print(`<span class="heading">${PROFILE.name}</span>
${PROFILE.headline}

Backend-focused engineer · production ownership · software + infrastructure + R&D`);
  },

  about() {
    print(fs["/"].files["about.txt"].content);
  },

  skills() {
    print(fs["/"].files["skills.txt"].content);
  },

  experience() {
    print(fs["/"].files["experience.txt"].content);
  },

  projects() {
    const projectsDir = fs["/"].files.projects;
    print(`<span class="heading">Selected projects</span>`);
    Object.keys(projectsDir.files).forEach((name) => print(`<span class="dir">projects/${name}</span>`));
    print(`<span class="muted">Use: cd projects → ls → cat &lt;filename&gt;</span>`);
  },

  contact() {
    print(fs["/"].files["contact.txt"].content);
  },

  cv(arg = "") {
    const version = normalizeArg(arg);
    if (!version) {
      print(`<span class="heading">CV versions</span>
master     Full profile / master CV
backend    Backend-focused CV
fullstack  Full Stack-focused CV

Use: <span class="accent">cv backend</span>, <span class="accent">cv fullstack</span> or <span class="accent">cv master</span>`);
      return;
    }

    if (CV_FILES[version]) {
      window.open(CV_FILES[version], "_blank", "noopener");
      print(`Opening ${escapeHtml(version)} CV...`);
      return;
    }

    print(`Unknown CV version: ${escapeHtml(version)}`);
  },

  ls(arg = "") {
    const targetPath = arg ? resolvePath(arg) : currentPath;
    const dir = getNode(targetPath);

    if (!dir || dir.type !== "dir") {
      print(`ls: cannot access '${escapeHtml(arg)}': directory not found`);
      return;
    }

    Object.entries(dir.files).forEach(([name, node]) => {
      print(node.type === "dir" ? `<span class="dir">${name}/</span>` : name);
    });
  },

  cd(arg = "") {
    const targetPath = resolvePath(arg || "/");
    const dir = getNode(targetPath);

    if (dir && dir.type === "dir") {
      currentPath = targetPath === "" ? "/" : targetPath;
      updatePrompt();
    } else {
      print(`cd: ${escapeHtml(arg)}: directory not found`);
    }
  },

  cat(arg = "") {
    if (!arg) {
      print("cat: missing file operand");
      return;
    }

    const targetPath = resolvePath(arg);
    const node = getNode(targetPath);

    if (node && node.type === "file") {
      print(node.content);
    } else {
      print(`cat: ${escapeHtml(arg)}: file not found`);
    }
  },

  pwd() {
    print(currentPath);
  },

  open(arg = "") {
    const target = normalizeArg(arg);

    if (target === "github") {
      window.open(PROFILE.github, "_blank", "noopener");
      return;
    }

    if (target === "linkedin") {
      window.open(PROFILE.linkedin, "_blank", "noopener");
      return;
    }

    if (target === "website") {
      window.open(PROFILE.website, "_blank", "noopener");
      return;
    }

    if (target === "email") {
      window.location.href = `mailto:${PROFILE.email}`;
      return;
    }

    if (target === "cv" || target === "cv master") {
      commands.cv("master");
      return;
    }

    if (target === "cv backend") {
      commands.cv("backend");
      return;
    }

    if (target === "cv fullstack") {
      commands.cv("fullstack");
      return;
    }

    print(`Unknown target: ${escapeHtml(arg)}. Try open github, open linkedin or open cv backend.`);
  },

  clear() {
    output.innerHTML = "";
  }
};

/* ---------------- COMMAND RUNNER ---------------- */

function runCommand(rawCommand) {
  const cmd = rawCommand.trim();
  if (!cmd) return;

  const firstSpace = cmd.indexOf(" ");
  const base = (firstSpace === -1 ? cmd : cmd.slice(0, firstSpace)).toLowerCase();
  const arg = firstSpace === -1 ? "" : cmd.slice(firstSpace + 1).trim();

  if (Object.prototype.hasOwnProperty.call(commands, base)) {
    commands[base](arg);
  } else {
    print(`Command not found: ${escapeHtml(base)}. Type <span class="accent">help</span>.`);
  }
}

/* ---------------- AUTOCOMPLETE ---------------- */

function autocomplete() {
  const value = input.value.trim();
  const parts = value.split(/\s+/);

  if (parts.length === 1) {
    const partial = parts[0].toLowerCase();
    const matches = Object.keys(commands).filter((name) => name.startsWith(partial));
    if (matches.length === 1) input.value = matches[0];
    return;
  }

  const base = parts[0].toLowerCase();

  if (base === "cv" && parts.length === 2) {
    const partial = parts[1].toLowerCase();
    const matches = Object.keys(CV_FILES).filter((name) => name.startsWith(partial));
    if (matches.length === 1) input.value = `cv ${matches[0]}`;
    return;
  }

  if (["cat", "cd", "ls"].includes(base) && parts.length === 2) {
    const dir = getNode(currentPath);
    if (!dir || !dir.files) return;

    const partial = parts[1];
    const matches = Object.keys(dir.files).filter((name) => name.startsWith(partial));
    if (matches.length === 1) input.value = `${base} ${matches[0]}`;
  }
}

/* ---------------- KEYBOARD ---------------- */

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const cmd = input.value.trim();

    if (cmd) {
      print(`<span class="prompt">harunerkam@portfolio:${escapeHtml(currentPath)}$</span> <span class="command-echo">${escapeHtml(cmd)}</span>`);
      runCommand(cmd);
      history.push(cmd);
      historyIndex = history.length;
    }

    input.value = "";
    return;
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    if (historyIndex > 0) {
      historyIndex -= 1;
      input.value = history[historyIndex];
    }
    return;
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    if (historyIndex < history.length - 1) {
      historyIndex += 1;
      input.value = history[historyIndex];
    } else {
      historyIndex = history.length;
      input.value = "";
    }
    return;
  }

  if (event.key === "Tab" && !event.shiftKey && input.value.trim()) {
    const previousValue = input.value;
    autocomplete();
    // Complete a partial command; the next Tab can leave the input normally.
    if (input.value !== previousValue) event.preventDefault();
  }
});

terminalBody.addEventListener("click", (event) => {
  // Links and selected output must remain usable without moving focus.
  if (!input.disabled && !event.target.closest("a, button, input") && !window.getSelection().toString()) input.focus();
});

document.querySelectorAll("[data-command]").forEach((button) => {
  button.addEventListener("click", () => {
    if (input.disabled) return;
    const command = button.dataset.command;
    print(`<span class="prompt">harunerkam@portfolio:${escapeHtml(currentPath)}$</span> ${escapeHtml(command)}`);
    runCommand(command);
    input.focus();
  });
});

updatePrompt();
