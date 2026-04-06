# E.D.I.T.H — GitHub & Production Setup Guide (Step-by-Step) 🚀

This guide will help you complete the final "GitHub-native" setup for your CA Tracker. Follow these steps exactly as shown.

---

## 1. Disconnect Vercel (Stop Ghost Deployments)
Since we’ve migrated to GitHub Actions, you no longer need Vercel. 
1. Go to [Vercel Dashboard](https://vercel.com/dashboard).
2. Click on your **Edith** project.
3. Click **Settings** (top tab) -> **Git**.
4. Scroll down to "Project Connections" and click **Disconnect**.
5. *Optional*: Delete the project from Vercel entirely to keep things clean.

---

## 2. Create a GitHub Personal Access Token (PAT)
This token allows your website to securely "talk" to your repository to backup data and trigger the AI Relay.
1. Click your profile picture (top right) on GitHub -> **Settings**.
2. Scroll to the bottom and click **Developer settings** (left sidebar).
3. Click **Personal access tokens** -> **Tokens (classic)**.
4. Click **Generate new token** -> **Generate new token (classic)**.
5. **Note**: Call it "Edith-PWA-Token".
6. **Expiration**: Select "No expiration" (for convenience) or "90 days".
7. **Scopes**: Check the following boxes:
    - [x] **repo** (full control of private repositories)
    - [x] **workflow** (update GitHub Action workflows)
    - [x] **gist** (create gists for backups)
8. Click **Generate token**.
9. ⚠️ **IMPORTANT**: Copy the token immediately (`ghp_xxxxxxxx`). You will NOT see it again. Paste it into the **Settings** tab inside your Edith app.

---

## 3. Set Up Repository Secrets
GitHub Actions needs these to access your database and AI.
1. Go to your repository link: [github.com/mirsuffu/Edith](https://github.com/mirsuffu/Edith).
2. Click **Settings** (top tab) -> **Secrets and variables** (left sidebar) -> **Actions**.
3. Click **New repository secret** for EACH of these:

| Secret Name | What to paste as the Value |
| :--- | :--- |
| `FIREBASE_SERVICE_ACCOUNT` | The ENTIRE content of your Firebase `.json` key file. |
| `NVIDIA_API_KEY` | Your AI key starting with `nvapi-xxxxxxxx`. |
| `BACKUP_GIST_TOKEN` | The same `ghp_xxxxxxxx` token you created in Step 2. |
| `BACKUP_GIST_ID` | See Step 4 below. |

---

## 4. Create a Private Gist (For Daily Backups)
1. Go to [gist.github.com](https://gist.github.com).
2. Filename: `edith_backup.json`.
3. Contents: Just put `{}` for now.
4. Click **Create private Gist**.
5. Look at the URL in your browser: `https://gist.github.com/mirsuffu/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`.
6. Copy the **last part** (the ID) and save it as the `BACKUP_GIST_ID` secret in GitHub.

---

## 5. (Finally) Enable GitHub Pages
1. Go to your repo **Settings** -> **Pages**.
2. **Build and deployment**:
    - Source: "Deploy from a branch".
    - Branch: Select **gh-pages** and folder **/(root)**.
3. Click **Save**.
4. In ~2 minutes, your app will be live at: `https://mirsuffu.github.io/Edith/`

---

## ✅ DONE!
Once these steps are complete:
- Your AI will work on GitHub Pages via the Relay.
- Your data will backup to your Gist every night at midnight.
- Your app will load lightning fast without Vercel's overhead.
