# Deployment Log — SEO Site

## Status: READY TO PUSH (awaiting 3 secrets + GitHub repo creation)

## Completed by Nova (2026-06-01)

### What was built
- Eleventy 3.x static site at: /home/mhillman/mission-control/projects/business-ideas/seo-site/
- Article formatted and deployed: ERPNext Automation Examples (307 lines, 7 Python workflows)
- Local Eleventy build: PASSED (2 files: index.html + article page)
- Git repo initialized on branch `main` with initial commit: 54fa65d
- GitHub Actions workflow: .github/workflows/deploy.yml
  - Stage 1: npm ci → eleventy build → cloudflare/pages-action deploy
  - Stage 2 (after deploy): google-indexing-script targeting https://erpnext-automation.pages.dev/

### Target URL
https://erpnext-automation.pages.dev/erpnext-automation-examples/

### Remaining manual steps (cannot be automated without credentials)

1. CREATE GITHUB REPO (5 min)
   Install gh: sudo apt install gh
   Then: cd seo-site && gh auth login && gh repo create erpnext-automation --public --source=. --push

2. CREATE CLOUDFLARE PAGES PROJECT (5 min)
   - https://pages.cloudflare.com → New project → Connect Git → select erpnext-automation
   - Build command: npm run build
   - Output dir: _site
   - Note your Account ID from the Cloudflare dashboard sidebar

3. ADD GITHUB SECRETS (Settings → Secrets → Actions)
   - CLOUDFLARE_API_TOKEN: dash.cloudflare.com → API Tokens → Create Token (Cloudflare Pages: Edit)
   - CLOUDFLARE_ACCOUNT_ID: visible in Cloudflare dashboard right sidebar
   - GCP_SERVICE_ACCOUNT_JSON: GCP Console → full JSON of service account with Indexing API enabled
     Then: add service account email as Owner in Google Search Console for the site

4. PUSH TO MAIN
   cd /home/mhillman/mission-control/projects/business-ideas/seo-site
   git push -u origin main
   → GitHub Actions fires automatically
   → Cloudflare Pages deploys in ~60s
   → Google Indexing API called → page indexed in <48h

### Verification
After push, check:
- GitHub Actions tab for workflow status
- https://erpnext-automation.pages.dev/ for live site
- Google Search Console → URL Inspection for indexing status
