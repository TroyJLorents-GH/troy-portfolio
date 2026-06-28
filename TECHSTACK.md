---
project: projects/troy-portfolio
type: techstack
---

# Tech Stack — troy-portfolio

## Languages

- **JavaScript (ES6+ / JSX)** — primary language for the React app and components.
- **SCSS / Sass** — component and global styling (`.scss` files compiled via the `sass` package).
- **CSS** — global `index.css`.
- **HTML** — CRA shell (`public/index.html`).
- **Node.js (CommonJS)** — the Netlify serverless function (`netlify/functions/chat.js`).

## Frameworks & Core Libraries

| Library | Version | Purpose |
|---------|---------|---------|
| **React** | ^19.1.1 | UI framework / component model. |
| **react-dom** | ^19.1.1 | DOM renderer (`createRoot`). |
| **react-scripts (Create React App)** | 5.0.1 | Build tooling, dev server, test runner, bundling (webpack/Babel under the hood). |
| **react-router-dom** | ^7.7.1 | Provides `BrowserRouter`; app is single-page with anchor nav. |
| **framer-motion** | ^12.40.0 | Animations in the hero / Home section (intro transitions, hover/tap, scroll indicator). |
| **react-markdown** | ^10.1.0 | Renders AI assistant chat responses as Markdown. |
| **sass** | ^1.89.2 | Compiles SCSS stylesheets. |

## UI / Icons

| Library | Version | Purpose |
|---------|---------|---------|
| **@fortawesome/react-fontawesome** | ^0.2.3 | FontAwesome icon React component. |
| **@fortawesome/free-solid-svg-icons** | ^7.0.0 | Solid icons (e.g. envelope) used in Contact. |
| **@fortawesome/free-brands-svg-icons** | ^7.0.0 | Brand icons (e.g. LinkedIn) used in Contact. |
| **Remix Icon** (`ri-*` classes) | via CSS in `public/index.html` | Icons in the Home hero (mail, github, linkedin, arrows). Loaded by stylesheet, not an npm dep. |

## Email / Forms

| Library | Version | Purpose |
|---------|---------|---------|
| **@emailjs/browser** | ^4.4.1 | Client-side email sending from the Contact form (`emailjs.sendForm`), no backend required. |

## Testing

| Library | Version | Purpose |
|---------|---------|---------|
| **@testing-library/react** | ^16.3.0 | Component testing. |
| **@testing-library/dom** | ^10.4.1 | DOM testing utilities. |
| **@testing-library/jest-dom** | ^6.6.4 | Custom Jest DOM matchers. |
| **@testing-library/user-event** | ^13.5.0 | Simulated user interactions in tests. |
| **Jest** | (bundled with react-scripts) | Test runner via `react-scripts test`. |

## Performance / Misc

| Library | Version | Purpose |
|---------|---------|---------|
| **web-vitals** | ^2.1.4 | Core Web Vitals measurement (`reportWebVitals`). |

## Build Tools & Tooling

- **Create React App / react-scripts 5** — `start`, `build`, `test`, `eject` scripts. Wraps webpack, Babel, ESLint, Jest.
- **ESLint** — configured via `eslintConfig` in `package.json` (`react-app`, `react-app/jest` presets).
- **Browserslist** — production/development target config in `package.json`.
- **Netlify build** — `netlify.toml` sets `command = "npm run build"`, `publish = "build"`, and `functions = "netlify/functions"`.
- **deno.lock** present in the repo root (Deno lockfile), likely from tooling; the app build itself is Node/npm-based.

## External APIs / Services

- **Azure OpenAI** (chat completions REST endpoint) — called server-side from `netlify/functions/chat.js` using `api-key` auth. Powers the AI assistant. Endpoint and key supplied via `AZURE_OPENAI_ENDPOINT` / `AZURE_OPENAI_KEY` env vars.
- **EmailJS** — third-party email delivery service invoked from the client (Contact form).
- **Netlify Functions** — serverless runtime hosting the `chat` backend; `/api/*` is redirected to `/.netlify/functions/:splat`.

## Plugins / Config Files

- `netlify.toml` — build, functions directory, and API redirect.
- `.env.example` — documents Azure OpenAI env vars.
- `package.json` — eslintConfig + browserslist.
