---
project: projects/troy-portfolio
type: readme
---

# Troy Lorents - Portfolio

A modern, single-page personal portfolio for Troy Lorents (Senior Full-Stack Software Developer / AI Engineer). It showcases his bio, technical skills, work history, and projects, and includes a floating AI chat assistant that answers questions about his professional background. The assistant is backed by a serverless function that proxies requests to Azure OpenAI, keeping the API key off the client.

The app is a Create React App (CRA) project, deployed to Netlify with the chat backend running as a Netlify serverless function.

## Features

- **Single-page layout** with scroll-spy navigation. The sidebar highlights the active section (`About`, `Technical Skills`, `Work`, `Portfolio`, `Contact`) based on scroll position, and collapses into a hamburger menu on mobile.
- **Animated hero** (`Home`) built with Framer Motion: monogram avatar, staggered intro animations, social links (Email, GitHub, LinkedIn, Resume PDF), and an animated scroll indicator.
- **Skills section** presenting technical competencies.
- **Work / experience** section driven by a data file (`workExperienceData.js`).
- **Portfolio** section driven by a data file (`portfolioData.js`) listing projects with links, GitHub/package URLs, descriptions, and tag chips.
- **Contact form** using EmailJS to send messages directly from the browser (no backend), plus LinkedIn and email icon links.
- **AI Assistant** — a floating chat widget that:
  - Opens/closes via a floating button with a pulse animation.
  - Renders responses as Markdown (`react-markdown`).
  - Shows suggested starter questions, a typing indicator, and inline error handling.
  - Sends the running conversation to `/api/chat`, which a Netlify redirect maps to the `chat` serverless function. That function injects a detailed system prompt about Troy and calls Azure OpenAI's chat completions endpoint.
- **Downloadable assets** — resume and certifications PDFs served from `public/assets`.

## Architecture

```
Browser (React SPA, CRA build)
  ├── Sidebar / Home / Skills / Work / Portfolio / Contact
  ├── Contact  ──────────────► EmailJS (client-side sendForm, REACT_APP_* keys)
  └── AIAssistant
        │  POST /api/chat  { messages: [...] }
        ▼
   Netlify redirect  /api/*  ->  /.netlify/functions/:splat
        ▼
   netlify/functions/chat.js  (serverless)
        │  injects SYSTEM_PROMPT, appends max_completion_tokens etc.
        │  reads AZURE_OPENAI_ENDPOINT + AZURE_OPENAI_KEY from env
        ▼
   Azure OpenAI  (chat/completions deployment)
```

Key points:

- **Two different secret models.** EmailJS credentials are public-by-design client keys exposed via `REACT_APP_*` build-time env vars (used directly in the browser). The Azure OpenAI key is a true secret and never reaches the client — it lives only in the serverless function's environment.
- **The system prompt lives in the function** (`netlify/functions/chat.js`), embedded as the `SYSTEM_PROMPT` constant. It contains Troy's full professional background and strict guardrails (only answer questions about Troy; refuse coding help, personal advice, interview prep, etc.). See `chat-assistant-system-prompt.md` in the project root for the extracted prompt.
- **Chat backend is Azure OpenAI direct**, not an Azure AI Foundry agent. The UI labels it "Powered by Azure AI Foundry," but the function posts to a standard Azure OpenAI chat completions endpoint with `api-key` auth.
- **Routing.** `react-router-dom` wraps the app in `BrowserRouter`, but the site is effectively one page using anchor links (`#about`, `#skills`, etc.) for in-page navigation.

## Getting Started

Prerequisites: Node.js (CRA 5 / React 19) and npm.

```bash
# Install dependencies
npm install

# Run the development server (http://localhost:3000)
npm start

# Production build (outputs to ./build)
npm run build

# Run tests (CRA / React Testing Library)
npm test
```

> Note: `npm start` runs only the React dev server. The `/api/chat` endpoint is provided by the Netlify function. To exercise the AI assistant locally, run the site through the Netlify CLI (`netlify dev`) so the function and the `/api/*` redirect are available, or deploy to Netlify.

## Configuration / Environment Variables

### Serverless function (server-side secret — Netlify env)

| Variable | Purpose |
|----------|---------|
| `AZURE_OPENAI_ENDPOINT` | Full Azure OpenAI chat completions URL, e.g. `https://<resource>.openai.azure.com/openai/deployments/<deployment>/chat/completions?api-version=2024-02-15-preview` |
| `AZURE_OPENAI_KEY` | Azure OpenAI API key (sent as the `api-key` header) |

`.env.example` documents these. Copy it to `.env.local` for local use and set the real values in the Netlify dashboard for deployment.

### Client (EmailJS — build-time `REACT_APP_*` vars)

| Variable | Purpose |
|----------|---------|
| `REACT_APP_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `REACT_APP_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `REACT_APP_EMAILJS_PUBLIC_KEY` | EmailJS public key |

These are referenced in `src/components/Contact/Contact.jsx`. They are embedded in the client bundle (public by nature of EmailJS).

## Project Structure

```
troy-portfolio/
├── netlify.toml                 # Build + functions config, /api/* redirect
├── netlify/
│   └── functions/
│       └── chat.js              # Azure OpenAI proxy + SYSTEM_PROMPT
├── public/
│   ├── index.html               # CRA HTML shell
│   ├── manifest.json, robots.txt, favicon, logos
│   └── assets/                  # Resume PDF, certifications PDF, images
├── src/
│   ├── index.js                 # React entry (BrowserRouter + App)
│   ├── App.js                   # Single-page layout, section composition
│   ├── App.scss / index.css     # Global styles
│   ├── components/
│   │   ├── Sidebar/             # Scroll-spy nav + mobile hamburger
│   │   ├── Home/                # Animated hero (Framer Motion)
│   │   ├── Skills/              # Technical skills section
│   │   ├── Work/                # Work history (+ workExperienceData.js)
│   │   ├── Portfolio/           # Projects grid (+ portfolioData.js)
│   │   ├── Contact/             # EmailJS contact form
│   │   ├── AIAssistant/         # Floating chat widget
│   │   └── AnimatedLetters.jsx  # Letter animation helper
│   ├── reportWebVitals.js, setupTests.js, App.test.js
├── .env.example
├── package.json
└── README.md
```

## Notes

- **Content is data-driven.** To add/update projects or jobs, edit `src/components/Portfolio/portfolioData.js` and `src/components/Work/workExperienceData.js` — no component changes needed.
- **Updating the AI assistant's knowledge** means editing the `SYSTEM_PROMPT` string in `netlify/functions/chat.js` (and keeping the extracted prompt doc in sync).
- **Icons** come from two sources: FontAwesome (React components, used in the Contact section) and Remix Icon (`ri-*` classes, used in the Home hero — loaded via a stylesheet in `public/index.html`).
- **Debug logging.** The chat function currently emits `console.log` debug lines about credential presence and Azure response status; consider removing these for production.
- **CORS.** The chat function returns `Access-Control-Allow-Origin: *`; tighten this for production if desired.
- `eject` is available via `npm run eject` (irreversible CRA operation — not recommended).
```
