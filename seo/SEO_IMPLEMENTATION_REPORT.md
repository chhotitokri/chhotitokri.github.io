# SEO implementation report

**Date:** 2026-11-15  
**Property:** https://chhotitokri.com/

## Implemented and tested

- Path-based routing (`react-router-dom`) replacing hash URLs; legacy hash migration in `src/seo/legacyHash.ts`
- Central SEO config: `src/seo/site.ts`, `pages.ts`, `SeoHead.tsx`, `jsonld.ts`
- Per-route titles, descriptions, canonicals, OG/Twitter for **16 indexable routes**
- Build-time prerender (`scripts/prerender.mjs`) + `docs/404.html` for GitHub Pages
- `public/robots.txt` and generated `docs/sitemap.xml`
- Automated `npm run seo:verify` (16 routes) — **passed** locally 2026-11-15
- GA4 hooks in `src/analytics/gtag.ts` (requires `VITE_GA_MEASUREMENT_ID`)
- CI step: SEO verification in `.github/workflows/deploy-pages.yml`
- Product `view_item`, enquiry `contact_form_submit`, footer `email_click` events

## Implemented but not externally verified

- Live Search Console indexing and Rich Results on production (deploy not performed in this session)
- GA4 event delivery (no measurement ID configured)
- Field Core Web Vitals (Lighthouse/CrUX not measured post-change)

## Recommended not implemented

- WebP/AVIF build pipeline for all `public/assets` images
- Marketplace outbound links and `marketplace_click` events (no verified URLs)
- Full legal privacy/terms copy (placeholder pages with TODO)
- hreflang for EN/FR
- Removing unused `@google/genai` / `express` from production bundle audit

## Blocked by business information

See `CONTENT_GAPS.md`: phone, WhatsApp, marketplace URLs, certifications, legal text, GA4 ID.

## Manual actions after deployment

1. Push `main` and confirm GitHub Actions build + deploy succeed.
2. In Search Console: add property `https://chhotitokri.com/`, verify ownership, submit sitemap `https://chhotitokri.com/sitemap.xml`.
3. Set `VITE_GA_MEASUREMENT_ID` in GitHub Actions secrets or build env; redeploy.
4. Legal review of `/privacy-policy` and `/terms-and-conditions`.
5. Hard-refresh and spot-check product and journal URLs in browser.

## Files changed (summary)

| Area | Files |
|------|--------|
| Routing | `src/App.tsx`, `src/main.tsx`, `src/hooks/useAppNavigation.ts`, `src/pages/*` |
| SEO | `src/seo/*` |
| Analytics | `src/analytics/gtag.ts`, `.env.example` |
| Build | `vite.config.ts`, `scripts/*.mjs`, `package.json`, `index.html` |
| CI | `.github/workflows/deploy-pages.yml` |
| Crawl | `public/robots.txt`, generated `docs/sitemap.xml`, prerendered `docs/**/index.html` |
| Docs | `seo/*` |