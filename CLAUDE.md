# troy-portfolio

Troy's personal portfolio site. CRA (React), hosted on Netlify (credits low; a Vercel migration was assessed as easy ~30 min if credits run out). One Netlify function: `chat.js` (Azure OpenAI proxy).

## Verify loop

`CI=true npm run build 2>&1 | grep -Ei "compiled|fail|error"` after every edit batch (this exact loop ran 14 times in one session; it is the standard). Before committing visual work, run the design-review skill against the local dev server; Troy uses it as a commit gate.

## Conventions

- Styling changes must not change behavior. When Troy pastes a 21st.dev/shadcn-style component to integrate, take the LOOK only; keep existing interactions exactly as they are (two full reverts happened when behavior changed).
- Match the existing theme; check any new color/effect against it before showing.
- No em dashes in any site copy or project descriptions.
- Project blurbs (Agent OS, useknockout, SAMS) must match the canonical descriptions in memory (`project_agent_os_canonical.md`, `user_professional_positioning.md`), not be re-invented.
- Resume PDF: the filename on disk in `public/` must EXACTLY match the href in `Home.jsx` (a space-vs-underscore mismatch 404'd once). After swapping the resume, verify the link serves.
- Troy decides when to commit and push.
