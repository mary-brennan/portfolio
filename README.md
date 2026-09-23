# Portfolio

My portfolio site, built with **Next.js 16**, **Tailwind CSS 4** and TypeScript. The whole site is static: no database, no server code, no forms. That keeps it fast, free to host, and gives attackers very little to go after.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. **All the text on the site lives in `src/data/site.ts`:** name, links, projects and experience. Search for `TODO` to find the placeholders.

## 1. Put it on GitHub

1. On github.com, click **New repository**, name it `portfolio`, leave it empty (don't add a README), then click **Create**.
2. In this folder, run:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

## 2. Deploy for free on Vercel

1. Go to vercel.com and choose **Sign up with GitHub**. Pick the free **Hobby** plan, which covers personal, non-commercial projects like a portfolio.
2. Click **Add New → Project**, import the `portfolio` repo, and click **Deploy**. You don't need to change any settings.
3. You'll get a free URL like `your-name.vercel.app`. You can rename it under **Settings → Domains**.

After that, every `git push` to `main` redeploys the site automatically, and each pull request gets its own preview URL.

## 3. (Optional) Custom domain: about $10–15 a year

A domain like `yourname.dev` or `yourname.com` looks more professional than `*.vercel.app`, but you don't need one. Buy it from a registrar (Cloudflare Registrar, Porkbun, Namecheap, or Vercel itself). Then go to **Settings → Domains → Add** in Vercel and follow the DNS instructions. Vercel sets up HTTPS for you.

## Security

Already set up in this repo:

- **Static site:** there's no login, database, API route or contact form, so the site itself has nothing to break into.
- **Security headers** in `next.config.ts`: a Content-Security-Policy that blocks injected scripts, clickjacking protection, HSTS (forces HTTPS), `nosniff`, and a strict referrer policy. The `X-Powered-By` header is turned off.
- **Self-hosted fonts:** the site makes no third-party requests.
- **Dependabot** (`.github/dependabot.yml`) opens pull requests when your dependencies get security fixes.
- `.env*` files are git-ignored, so secrets never get committed.

Things to do on your accounts. Attackers usually go after accounts, not the site:

- Turn on **two-factor authentication** on GitHub, Vercel and your domain registrar. Use an authenticator app or a passkey, not SMS.
- On GitHub, go to **Settings → Code security** and turn on Dependabot alerts and secret scanning.
- (Optional) Protect the `main` branch under **Settings → Branches**.
- Turn on **registrar lock** (domain lock) so no one can transfer your domain away.
- Run `npm audit` now and then, and keep Next.js up to date (`npm install next@latest`).
- Think about using a separate email address for the public "Say hello" link to cut down on spam.

If you add analytics or external images later, add their domains to the CSP in `next.config.ts`. Otherwise the browser will block them.
