# Kawah Systems — Website

Single-page React site (Vite). Self-contained CSS, no Tailwind, no backend,
no environment variables or secrets. Runtime deps: react, react-dom, lucide-react.

## Run locally
    npm install
    npm run dev        # http://localhost:5173

## Build
    npm run build      # outputs static files to /dist

## Deploy to Railway (direct — no StackBlitz needed)

Option A — GitHub + Railway dashboard
1. Push this folder to a new GitHub repo.
2. Railway -> New Project -> Deploy from GitHub repo -> pick the repo.
3. Railway auto-detects Node. Confirm:
     Build command:  npm run build
     Start command:  npm run start
4. Deploy. Railway sets PORT automatically; "serve" binds to it.

Option B — Railway CLI (from this folder)
    npm i -g @railway/cli
    railway login
    railway init
    railway up

The start script serves the built /dist on Railway's $PORT via `serve`.
