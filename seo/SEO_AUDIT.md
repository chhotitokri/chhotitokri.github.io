# SEO audit — Chhoti Tokri (Phase 0)

**Audit date:** 2026-11-15  
**Property:** https://chhotitokri.com/  
**Repository:** chhotitokri/chhotitokri.github.io  
**Market:** India (organic search)

## Verified facts (repository + live checks)

| Item | Finding |
|------|---------|
| Framework | React 19, Vite 8, TypeScript, Tailwind 4 (**not Next.js**) |
| Hosting | GitHub Pages + custom domain `chhotitokri.com` |
| Routing | Client-side **hash** URLs in `src/App.tsx` |
| Crawl files | **No** `robots.txt` or `sitemap.xml` (live 404) |
| Metadata | Single static title/description in `index.html` |
| Structured data | None |
| Analytics | None in source |
| Contact | `mailto:liaison@chhotitokri.com` only |
| Products in data | 5 (`provisions.ts`) |
| Journal articles | 3 (`journal.ts`), modal-only |

## Critical issues

1. **Hash-only navigation** — Product and catalogue URLs use `#product/...` fragments; not aligned with path-based SEO targets.
2. **One global title/description** — All logical pages share the same metadata; duplicate intent for crawlers.
3. **Missing robots.txt and sitemap.xml** — Live returns 404 for both.
4. **Client-rendered body** — Production `index.html` exposes empty `#root` until JavaScript runs; prerender required for reliable indexing.
5. **No canonical URLs** — Risk of duplicate signals if `/docs/` or hash variants remain reachable.

## High-priority issues

1. No JSON-LD (Organization, Product, Article, BreadcrumbList).
2. Journal articles lack dedicated URLs.
3. No indexable privacy policy or terms pages.
4. Enquiry form does not POST to a backend (`EnquiryModal`); track as events only.
5. Product copy may include marketing details needing business sign-off (pack sizes, percentages) — see `CONTENT_GAPS.md`.

## Medium-priority issues

1. Large raster images in `public/assets/aistudio/`; no WebP/AVIF pipeline.
2. No explicit `width`/`height` on images; CLS risk.
3. JS bundle ~351 KB (gzip ~102 KB) plus Google Fonts and Material Symbols.
4. No automated SEO test suite in CI.
5. Dependencies (`@google/genai`, `express`) may inflate bundle if imported — audit tree-shaking.

## Low-priority improvements

1. EN/FR toggle without `hreflang`.
2. `og:image` and `twitter:image` missing.
3. Editorial “desk” author names — do not map to Person schema without verification.

## Assumptions (not verified externally)

- GitHub Actions deploy publishes build artifact at site **root** (not `/docs/` on live host).
- `chhotitokri.com` uses HTTPS with valid certificate.

## Recommendations (post Phase 0)

- Migrate to path URLs + build-time prerender (approved architecture).
- Central SEO config + per-route metadata via `react-helmet-async`.
- Generate sitemap at build; ship `robots.txt` from `public/`.
- Add GA4 via env var; document Search Console steps.
- Legal pages as placeholders pending counsel review.

## Functionality at risk

- External links using legacy hash URLs need client-side hash → path migration.
- Changing Vite `base` affects `src/lib/assets.ts` and asset URLs.

## Severity summary

| Level | Count |
|-------|-------|
| Critical | 5 |
| High | 5 |
| Medium | 5 |
| Low | 3 |