Deployment options for `discord-oauth` server

GitHub setup
- From `C:\Users\leoaz\Desktop\aza`, initialize Git and commit the repo.
- Create a GitHub repository and add it as the remote.
- Push the code to GitHub.

Example commands:
```powershell
cd C:\Users\leoaz\Desktop\aza
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Important:
- Do not commit `.env` files.
- `discord-oauth/.env.example` is safe to commit.
- `node_modules/` is ignored by `.gitignore`.

1) Railway (recommended for quick deploy)
- Create a Railway project and connect GitHub repo (or deploy from local folder).
- Add environment variables from `discord-oauth/.env.example` in Railway's Environment tab.
- Start deployment; Railway will assign a public URL. Update `DISCORD_REDIRECT_URI` in Discord Developer Portal and `window.AURA_DISCORD_OAUTH_API` in `auth.js`.

2) Render
- Create a new Web Service, connect GitHub repo, specify `discord-oauth` as the root directory.
- Set environment variables in Render's dashboard.
- Deploy and update redirect URIs as above.

3) Heroku
- Create an app, set buildpack to Node.js.
- Set config vars in the dashboard (`DISCORD_CLIENT_ID`, etc.).
- Deploy from GitHub or push via Heroku CLI. Update redirect URIs.

4) VPS (manual)
- Copy files to server, run `npm install` and use `pm2` or `systemd` to run `node index.js`.
- Ensure HTTPS via a reverse proxy (nginx + Let's Encrypt) and update redirect URIs.

Remember
- After deployment update Discord OAuth Redirect URI to the public `/callback` URL.
- Make sure `auth.js` points to the base server URL, not `/callback`.
- Use GitHub Secrets to store credentials if you plan to use CI/CD.
