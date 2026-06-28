---
project: projects/troy-portfolio
type: services
---

# Hosted Services — troy-portfolio

## Netlify (hosting + serverless functions)

Detected from `netlify.toml` in the project root.

- **Static site hosting** — serves the Create React App production build.
  - Build command: `npm run build`
  - Publish directory: `build`
- **Netlify Functions (serverless)** — functions directory: `netlify/functions`.
  - `chat.js` — the AI assistant backend that proxies to Azure OpenAI.
- **Redirect rule** — `/api/*` → `/.netlify/functions/:splat` (status 200), so the client calls `/api/chat`.
- **Environment variables** (set in the Netlify dashboard for the deployed function):
  - `AZURE_OPENAI_ENDPOINT`
  - `AZURE_OPENAI_KEY`

The Portfolio data references a Netlify-hosted deployment of a related project (`pjf-ai-commandcenter.netlify.app`), confirming Netlify is the deploy target for this account.

## Third-party APIs consumed (not hosting, but external dependencies)

These are external services the app calls, not where the site is hosted:

- **Azure OpenAI** — chat completions, called from the Netlify function (server-side).
- **EmailJS** — client-side email delivery for the Contact form.

---

No other external hosting providers (Vercel, Cloudflare, GitHub Pages, etc.) detected for this project. Netlify is the sole hosting/deployment service.
