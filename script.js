const input = document.getElementById("commandInput");
const inputLine = document.getElementById("inputLine");
const output = document.getElementById("output");
const promptElement = document.querySelector(".prompt");

let history = [];
let historyIndex = -1;
let currentPath = "/";

/* ---------------- PRINT ---------------- */

function print(text) {
  const line = document.createElement("div");
  line.innerHTML = text;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/* ---------------- FILESYSTEM ---------------- */

const fs = {
  "/": {
    type: "dir",
    files: {
      "about.txt": {
        type: "file",
        content: `Harun Erkam Balı
Full Stack Engineer
DevOps & AI Systems Builder`
      },

      "skills.txt": {
        type: "file",
        content: `Backend
- Python
- Django
- FastAPI
- .NET

DevOps
- Docker
- Kubernetes
- CI/CD

AI
- LLM
- RAG
- Vector DB

Frontend
- React
- Next.js`
      },

      "projects": {
        type: "dir",
        files: {
          "alfakocluk.md": {
            type: "file",
            content: `AlfaKocluk Platform

Education & coaching platform
Built with Django + PostgreSQL
Includes AI assistant`
          },

          "ai-assistant.md": {
            type: "file",
            content: `AI Documentation Assistant

RAG system
LangChain
Vector database`
          },

          "tourism-platform.md": {
            type: "file",
            content: `Tourism Recommendation System

Personalized travel platform
Built with modern web technologies`
          }
        }
      }
    }
  }
};

/* ---------------- PATH HELPERS ---------------- */

function getCurrentDir() {
  const pathParts = currentPath.split("/").filter(Boolean);
  let dir = fs["/"];

  for (const part of pathParts) {
    if (!dir.files || !dir.files[part]) {
      return null;
    }
    dir = dir.files[part];
  }

  return dir;
}

function updatePrompt() {
  promptElement.textContent = `harunerkam@portfolio:${currentPath}$`;
}

/* ---------------- BOOT ---------------- */

async function bootSequence() {
  inputLine.classList.add("hidden");
  input.disabled = true;

  const bootLines = [
    "Booting ekOS v1.0...",
    "Loading developer profile...",
    "Initializing AI modules...",
    "Mounting project filesystem..."
  ];

  for (const line of bootLines) {
    print(line);
    await delay(600);
  }

  print("");
  print("Running system scan...");
  print("");

  await systemScan();

  print("");
  print("System ready.");
  print("Type <b>help</b> to see commands.");

  inputLine.classList.remove("hidden");
  input.disabled = false;
  input.focus();
}

async function systemScan() {
  const modules = [
    "AI Systems",
    "DevOps Automation",
    "Scalable Architectures",
    "SaaS Platforms",
    "Kubernetes Infrastructure"
  ];

  for (const module of modules) {
    const line = document.createElement("div");
    line.innerHTML = `Scanning ${module}...`;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;

    await delay(400);

    line.innerHTML = `✔ ${module}`;
  }
}

bootSequence();

/* ---------------- COMMANDS ---------------- */

const commands = {
  help() {
    print(`
Available commands:

help
whoami
about
skills
ls
cd
cat
pwd
open github
open linkedin
clear
    `);
  },

  whoami() {
    print(`
Harun Erkam Balı

System Architect
Full Stack Engineer
AI Systems Builder
    `);
  },

  about() {
    print(`
Full stack engineer focused on:

• scalable backend systems
• AI agents
• DevOps automation
    `);
  },

  skills() {
    print(`
Backend
- Python
- Django
- FastAPI
- .NET

DevOps
- Docker
- Kubernetes
- CI/CD

AI
- LLM
- RAG
- Vector DB

Frontend
- React
- Next.js
    `);
  },

  ls() {
    const dir = getCurrentDir();

    if (!dir || dir.type !== "dir") {
      print("directory not found");
      return;
    }

    Object.keys(dir.files).forEach((name) => print(name));
  },

  cd(arg) {
    if (!arg) {
      currentPath = "/";
      updatePrompt();
      return;
    }

    if (arg === "..") {
      const parts = currentPath.split("/").filter(Boolean);
      parts.pop();
      currentPath = "/" + parts.join("/");
      if (currentPath === "") currentPath = "/";
      updatePrompt();
      return;
    }

    const dir = getCurrentDir();

    if (dir && dir.files[arg] && dir.files[arg].type === "dir") {
      currentPath += (currentPath === "/" ? "" : "/") + arg;
      updatePrompt();
    } else {
      print("directory not found");
    }
  },

  cat(arg) {
    if (!arg) {
      print("file not found");
      return;
    }

    const dir = getCurrentDir();

    if (dir && dir.files[arg] && dir.files[arg].type === "file") {
      print(dir.files[arg].content);
    } else {
      print("file not found");
    }
  },

  pwd() {
    print(currentPath);
  },

  open(arg) {
    if (arg === "github") {
      window.open("https://github.com/erkamspyjamas", "_blank");
    } else if (arg === "linkedin") {
      window.open("https://www.linkedin.com/in/harunerkam/", "_blank");
    } else {
      print("unknown target");
    }
  },

  clear() {
    output.innerHTML = "";
  }
};

/* ---------------- COMMAND RUNNER ---------------- */

function runCommand(cmd) {
  const parts = cmd.trim().split(" ");
  const base = parts[0];
  const arg = parts.slice(1).join(" ");

  if (!base) return;

  if (commands[base]) {
    commands[base](arg);
  } else {
    print("Command not found");
  }
}

/* ---------------- KEYBOARD ---------------- */

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim();

    print(`<span class="prompt">harunerkam@portfolio:${currentPath}$</span> ${cmd}`);

    runCommand(cmd);

    if (cmd) {
      history.push(cmd);
      historyIndex = history.length;
    }

    input.value = "";
  }

  if (e.key === "ArrowUp") {
    e.preventDefault();

    if (historyIndex > 0) {
      historyIndex--;
      input.value = history[historyIndex];
    }
  }

  if (e.key === "ArrowDown") {
    e.preventDefault();

    if (historyIndex < history.length - 1) {
      historyIndex++;
      input.value = history[historyIndex];
    } else {
      historyIndex = history.length;
      input.value = "";
    }
  }

if(e.key === "Tab"){

e.preventDefault()

const value = input.value.trim()

const parts = value.split(" ")

if(parts.length === 1){

const cmd = parts[0]

const matches = Object.keys(commands)
.filter(c => c.startsWith(cmd))

if(matches.length === 1){

input.value = matches[0]

}

}

if(parts.length === 2){

const dir = getCurrentDir()

const file = parts[1]

const matches = Object.keys(dir.files)
.filter(f => f.startsWith(file))

if(matches.length === 1){

input.value = parts[0] + " " + matches[0]

}

}

}

});

updatePrompt();
