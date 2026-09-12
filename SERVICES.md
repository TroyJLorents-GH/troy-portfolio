---
project: projects/troy-portfolio
type: services
---

# Hosted Services — troy-portfolio

## Vercel (hosting + serverless function)

- **Static site hosting** — serves the Create React App production build from `build`.
- **Vercel Function** — `api/chat.js` handles `/api/chat` and proxies to Azure OpenAI.
- **Server environment variables** (set in the Vercel project settings):
  - `AZURE_OPENAI_ENDPOINT`
  - `AZURE_OPENAI_KEY`
- **Build-time EmailJS variables** (set for Production and Preview):
  - `REACT_APP_EMAILJS_PUBLIC_KEY`
  - `REACT_APP_EMAILJS_SERVICE_ID`
  - `REACT_APP_EMAILJS_TEMPLATE_ID`

## Third-party APIs consumed (not hosting, but external dependencies)

These are external services the app calls, not where the site is hosted:

- **Azure OpenAI** — chat completions, called from the Vercel Function (server-side).
- **EmailJS** — client-side email delivery for the Contact form.

---

Netlify is not required for this portfolio's hosting or backend.
