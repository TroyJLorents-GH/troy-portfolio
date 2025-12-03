# AI Portfolio Assistant - Quick Start

## 🚀 Get It Running in 5 Minutes

### 1. Get Your Azure OpenAI Info

Go to Azure Portal → Your OpenAI Resource → Keys and Endpoint

Copy:
- **Endpoint URL**
- **API Key**
- **Deployment Name** (e.g., "gpt-4")

### 2. Set Environment Variables

Create `.env.local` file in project root:

```bash
AZURE_OPENAI_ENDPOINT=https://YOUR_RESOURCE.openai.azure.com/openai/deployments/YOUR_DEPLOYMENT/chat/completions?api-version=2024-02-15-preview
AZURE_OPENAI_KEY=your-api-key-here
```

Replace YOUR_RESOURCE, YOUR_DEPLOYMENT, and your-api-key-here

### 3. Install & Run

```bash
# Install Netlify CLI (one time)
npm install -g netlify-cli

# Run locally
netlify dev
```

Opens at http://localhost:8888

### 4. Test

- Click the 🤖 button (bottom-right)
- Ask: "What experience does Troy have with .NET?"
- Should get a response!

### 5. Deploy to Netlify

```bash
# Push to GitHub
git add .
git commit -m "Add AI assistant"
git push

# In Netlify Dashboard:
# 1. Connect your GitHub repo
# 2. Add environment variables (Site Settings → Environment variables)
# 3. Deploy!
```

---

## ✅ What You've Got

**Floating AI chatbot** that visitors can use to ask about your:
- Experience with .NET, Python, React, etc.
- Automation tools (Blue Prism, Nintex, UiPath)
- AI/OpenAI projects
- Financial services experience
- Any project you've built

**Powered by your Azure OpenAI!**

---

## 🎯 For Your Interview

**Demo it:**
1. Show your portfolio URL
2. Click the chat button
3. Ask it questions live
4. Explain how you built it

**Talk about:**
- "I integrated Azure OpenAI into my React portfolio"
- "Serverless backend using Netlify Functions"
- "API keys secured on server-side"
- "Cost: ~$0.0003 per conversation"

**Tech stack:**
- Frontend: React, SASS
- Backend: Serverless Functions
- AI: Azure OpenAI
- Deployment: Netlify + GitHub

---

## 📝 Customize the AI

Edit `netlify/functions/chat.js` → `SYSTEM_PROMPT`

Update with YOUR:
- Real projects
- Actual experience
- Education
- Skills

I've pre-loaded it with the invoice fraud detection project and automation experience!

---

## ❓ Problems?

**Chat button doesn't appear:**
- Check console for errors
- Verify `<AIAssistant />` in App.js

**"Server configuration error":**
- Environment variables not set
- Check Netlify dashboard

**No AI response:**
- Check endpoint URL format
- Verify API key is valid
- Check Netlify function logs

---

Full details in `AI_ASSISTANT_SETUP.md`

Good luck with your interview! 🚀
