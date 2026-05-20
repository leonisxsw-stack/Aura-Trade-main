# Aura Trade (Frontend + Discord OAuth)

This repository contains the Aura Trade frontend and a small Discord OAuth server used to link Discord accounts to Supabase profiles.

Quick start
1. Do not commit secrets. Add `.env` files to `discord-oauth/` and any other server folders; `.gitignore` already ignores `.env`.
2. Serve the frontend locally (example):

```powershell
python -m http.server 8000
```

3. Run Discord OAuth server:

```powershell
cd discord-oauth
npm install
npm start
```

Security
- Never commit `SUPABASE_SERVICE_KEY` or `BOT_TOKEN` to the repo. Use GitHub Secrets for CI/deploy.

Deploy
- You can deploy the `discord-oauth` server to Railway, Render, Heroku, or any VPS. Add environment variables via your provider's dashboard.
- If you deploy on Render, update `window.AURA_DISCORD_OAUTH_API` in `auth.js` to your Render service URL (for example `https://aura-trade-main.onrender.com`).

Files of interest
- `index.html` — frontend entry
- `script.js` — main frontend logic (includes `openDiscordOAuthLink()`)
- `auth.js` — Google auth + Supabase client init
- `discord-oauth/` — small Express server handling Discord OAuth and updating Supabase

If you want, I can also create a GitHub Actions workflow to automatically deploy `discord-oauth` to Heroku or to run checks on push.
