<div align="center">

<!-- HEADER BANNER -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=🎯%20Goal%20Manager&fontSize=70&fontColor=fff&animation=twinkling&fontAlignY=35&desc=Track%20Goals.%20Crush%20Targets.%20Ship%20Code.&descAlignY=60&descSize=18"/>

<!-- BADGES -->
<p>
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-4-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white"/>
</p>

<p>
  <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square"/>
  <img src="https://img.shields.io/badge/License-Educational-orange?style=flat-square"/>
  <img src="https://img.shields.io/badge/Made%20with-❤️%20%26%20DevOps-red?style=flat-square"/>
</p>

---

*A full-stack goal tracking app built as a hands-on **CI/CD & DevOps** class project.*
*Write goals. Complete them. Watch confetti fall. Ship to production.*

</div>

---

## ✨ What This Does

> **Goal Manager** is a focused, modern single-page application that lets you create, track, and celebrate personal goals — wrapped in a complete DevOps pipeline from code commit to containerized deployment.

<table>
<tr>
<td width="50%">

### 🎨 Frontend Magic
- ⚡ **Quick Add** goals in seconds
- ✏️ **Inline edit** — no modals, just click & type
- ✅ **One-click complete** with confetti 🎉
- 🗑️ **Bulk clear** completed goals
- 📊 **Analytics dashboard** — progress + priority breakdown
- 🌙 **Dark / Light theme** toggle, persisted
- 💾 **localStorage persistence** — survives refreshes

</td>
<td width="50%">

### 🚀 DevOps Pipeline
- 🔧 **Vite** for blazing-fast dev builds
- 🐳 **Docker** containerization
- ⚙️ **GitHub Actions** CI/CD workflow
- 🏥 `/health` endpoint for container health checks
- 🧪 Automated **test → build → deploy** on every push to `main`
- 📦 **Express** server for production static serving

</td>
</tr>
</table>

---

## 🌟 Animations & Visual Effects

Every interaction has been crafted with care:

| Effect | Trigger | How it works |
|--------|---------|--------------|
| 🌅 Fade + slide-in | New goal added | CSS `@keyframes` with translate |
| 🎯 Pop animation | Goal marked complete | Scale bounce via keyframes |
| 🎊 Confetti burst | Completing any goal | `canvas-confetti` library |
| 🖱️ Hover micro-interactions | Buttons & goal cards | CSS `transform` + `transition` |
| 🔄 Smooth theme switch | Light ↔ Dark toggle | CSS variable transitions |

---

## 🗂️ Project Structure

```
goal-manager/
│
├── 📁 src/
│   └── 📁 components/       # React components
│
├── 📄 server.js              # Express server (serves dist/ + /health)
│
├── 🐳 Dockerfile             # Multi-stage container build
│
├── 📁 .github/
│   └── 📁 workflows/
│       └── cicd.yml          # GitHub Actions CI/CD pipeline
│
├── 📄 vite.config.js         # Vite configuration
├── 📄 package.json
└── 📄 README.md
```

---

## 🚦 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9
- Docker (optional, for containerized run)

---

### 💻 Development Mode

```bash
# 1. Install dependencies
npm ci

# 2. Start the Vite dev server
npm run dev
```

Open **http://localhost:5173** and start smashing goals 🎯

---

### 🏗️ Production Build

```bash
# Build the frontend
npm run build

# Serve the production build via Express
npm start
```

---

### 🐳 Docker

```bash
# Build the image (runs npm run build inside)
docker build -t goal-manager .

# Run the container
docker run -p 3000:3000 --rm goal-manager

# Verify the health endpoint
curl http://127.0.0.1:3000/health
# → { "status": "ok" }
```

---

## ⚙️ CI/CD Pipeline

This project was built as a **DevOps class exercise** to practice real-world deployment workflows.

```
┌─────────────┐     push to main     ┌──────────────────────────────────────────────┐
│  Developer  │ ──────────────────►  │           GitHub Actions Workflow             │
└─────────────┘                      │                                              │
                                     │  1. ✅  Checkout code                        │
                                     │  2. 📦  npm ci                               │
                                     │  3. 🧪  npm test                             │
                                     │  4. 🏗️  npm run build                        │
                                     │  5. 🐳  docker build                         │
                                     │  6. 🚀  docker run                           │
                                     │  7. 🏥  curl /health → { "status": "ok" }   │
                                     └──────────────────────────────────────────────┘
```

Workflow file: `.github/workflows/cicd.yml`

Every push to `main` triggers the full pipeline — **tests must pass, build must succeed, and the container must be healthy** before the workflow goes green. ✅

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| ⚛️ UI | React 18 + Vite | Component-based SPA with fast HMR |
| 🎨 Styling | CSS Modules / Vanilla CSS | Animations, theming, responsive layout |
| 🎊 Effects | canvas-confetti | Celebration when goals are completed |
| 💾 Persistence | localStorage | Goals + theme survive browser sessions |
| 🖥️ Server | Express.js | Serves `dist/` in production + `/health` |
| 🐳 Container | Docker | Reproducible, portable deployment |
| 🔄 CI/CD | GitHub Actions | Automated test → build → verify pipeline |

---

## 🧩 Key Features In Depth

### 📊 Analytics Dashboard
Get a real-time overview of your goal progress:
- Total goals vs completed
- Progress percentage bar
- Priority breakdown chart

### 🌙 Theme System
- Toggle between **Light** and **Dark** modes
- Theme preference saved to `localStorage`
- Smooth CSS variable transitions — no flash on load

### 🎯 Goal Lifecycle
```
Created → In Progress → ✅ Complete → (optionally) Deleted
              ↑               |
              └── Edit ───────┘
```

---

## 🐛 Troubleshooting

### `EPERM` errors on Windows during `npm ci`

Files may be locked by a running Node/Vite process or your editor. Run this in PowerShell:

```powershell
Stop-Process -Name node -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules
npm ci
```

### Docker container not starting?

Make sure port `3000` isn't already in use:

```bash
# Check what's on port 3000
lsof -i :3000

# Or use a different port
docker run -p 8080:3000 --rm goal-manager
```

---

## 🔮 Possible Enhancements

- [ ] 🏷️ Priority & deadline controls per goal
- [ ] 📤 CSV export / import
- [ ] 📈 Richer analytics with Chart.js or Recharts
- [ ] ☁️ GitHub Pages or cloud deployment
- [ ] 🔔 Deadline reminders (browser notifications)
- [ ] 👥 Multi-user support with a database backend

---

## 🎓 Learning Objectives

This project was created during a **DevOps & CI/CD practical class** to learn:

- ✅ Containerizing a Node.js app with **Docker**
- ✅ Writing a multi-stage **GitHub Actions** workflow
- ✅ Health checks and automated **deployment verification**
- ✅ Separating dev and production environments
- ✅ Building and serving a **React SPA** with Express in production

---

<div align="center">

---

**Practicing 👨🏻‍💻 in DevOps class.**
*Set goals. Commit code. Ship it.*

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer"/>

</div>
