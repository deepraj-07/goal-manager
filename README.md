# Goal Manager

Goal Manager is a focused, modern single-page application to manage and track personal goals. It ships with a polished UI, local persistence, goal CRUD (create/read/update/delete), analytics, theming, and a CI/CD pipeline for automated builds and verification.

This repository includes:
- A React + Vite frontend (components in `src/components`)
- A tiny Express server (`server.js`) used to serve production static assets and a `/health` endpoint used in CI
- Dockerfile and GitHub Actions workflow for CI/CD

Key features
- Add goals quickly using the Quick Add input
- Inline edit and update goal text (Edit → Save / Cancel)
- Mark a goal as complete (explicit button or click the icon)
- Delete goals
- Clear all completed goals
- Persistent storage via `localStorage` (keeps your goals across browser sessions)
- Analytics dashboard with progress summary and priority breakdown
- Light/dark theme toggle persisted to `localStorage`
- Confetti celebration when marking goals complete (using `canvas-confetti`)
- Responsive UI with subtle CSS animations and transitions for a modern feel

User-facing animations & effects
- New goal appear animation (fade + slight translate)
- Completed goal pop animation when marked complete
- Smooth hover/press micro-interactions on buttons
- Confetti effect when completing a goal

Getting started (development)
1. Install dependencies:

```bash
npm ci
```

2. Run development server (Vite):

```bash
npm run dev
```

Open `http://localhost:5173` (or the address printed by Vite) to view the app.

Building for production

```bash
npm run build
```

This generates a `dist/` directory that the Express server serves in production. To run the built site locally:

```bash
npm start
```

Docker

Build and run the Docker image locally (the Docker build step runs the frontend build):

```bash
docker build -t goal-manager .
docker run -p 3000:3000 --rm goal-manager
curl http://127.0.0.1:3000/health
```

CI/CD

This repo includes a GitHub Actions workflow at `.github/workflows/cicd.yml`. On `push` to `main`, the workflow:
- checks out code
- installs dependencies (`npm ci`)
- runs tests (`npm test`)
- runs `npm run build`
- builds a Docker image
- starts a container and verifies the `/health` endpoint returns a JSON status `{ "status": "ok" }`

Notes & troubleshooting
- If you hit `EPERM` errors on Windows during `npm ci` (file locked), close any running Node/Vite processes or editors that may lock files, delete `node_modules`, and retry. Example on PowerShell (run from repo root):

```powershell
Stop-Process -Name node -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules
npm ci
```

- The Dockerfile includes a `npm run build` step to ensure the container serves production assets. CI also runs the build explicitly to fail fast on build errors.

Contributing
- Open an issue for feature requests or bugs
- Fork the repo and open a PR with focused changes

License
- This project is provided as-is for educational/demo use. Add your license file as needed.

Enjoy improving your focus and tracking your wins! If you want, I can:
- Add priority/deadline editable controls
- Add CSV export/import for goals
- Integrate a small charting library for richer analytics (e.g., Chart.js or Recharts)
- Wire up GitHub Pages or a cloud deployment

