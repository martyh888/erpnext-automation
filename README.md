# SEO Site — Eleventy + Cloudflare Pages + Google Indexing

## What's here

- Eleventy static site targeting ERPNext automation keywords
- Article: `src/erpnext-automation-examples.md` (307 lines, 7 workflows)
- GitHub Actions workflow: auto-builds and deploys on every push to `main`
- Google Indexing API step: triggers indexing after deploy (<48h to show in Google)

## Local build

```
npm install
npm run build    # outputs to _site/
npm start        # dev server at localhost:8080
```

## Deploy setup (one-time, ~10 minutes)

### 1. Create GitHub repo
```
gh auth login
gh repo create erpnext-automation --public --push --source=.
```

### 2. Create Cloudflare Pages project
- Go to https://pages.cloudflare.com
- New project → Connect to Git → select erpnext-automation repo
- Build command: `npm run build`
- Output directory: `_site`
- Set custom domain if desired (free)

### 3. Add GitHub secrets (Settings → Secrets → Actions)
| Secret | Where to get |
|--------|-------------|
| `CLOUDFLARE_API_TOKEN` | dash.cloudflare.com → My Profile → API Tokens → Create Token (Cloudflare Pages: Edit) |
| `CLOUDFLARE_ACCOUNT_ID` | dash.cloudflare.com → right sidebar when logged in |
| `GCP_SERVICE_ACCOUNT_JSON` | GCP Console → IAM → Service Accounts → create key (JSON) with Indexing API enabled, then add service account as Owner in Google Search Console |

### 4. Push to main
```
git push origin main
```
GitHub Actions will build, deploy to Cloudflare Pages, then trigger Google Indexing.

## Live URL (after deploy)
https://erpnext-automation.pages.dev/erpnext-automation-examples/

## Files
```
seo-site/
  .eleventy.js             # Eleventy config
  .gitignore
  .github/workflows/deploy.yml   # CI/CD
  package.json
  src/
    index.njk              # Home page
    _layouts/post.njk      # Article layout
    erpnext-automation-examples.md   # The article
  _site/                   # Built output (gitignored)
```
