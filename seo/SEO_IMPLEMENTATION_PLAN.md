# SEO implementation plan (Phases 1–14)

Aligned with approved architecture: **Vite/React**, path URLs, build-time prerender, no Next.js migration.

## Phase 1 — URLs

- Implement `react-router-dom` paths per `URL_INVENTORY.csv`.
- Legacy hash → path `replaceState` on first load.
- Add `public/404.html` copy for GitHub Pages SPA fallback (non-prerendered client navigations).

## Phase 2 — SEO config

- `src/seo/site.ts`, `pages.ts`, `routes.ts`, `SeoHead.tsx` with `react-helmet-async`.
- Unique title/description per indexable route.

## Phase 3 — Technical SEO

- `public/robots.txt`, `scripts/generate-sitemap.mjs`, Vite `base: '/'`.
- `scripts/prerender.mjs` postbuild.
- CI: `npm run seo:verify` in workflow.

## Phases 4–7

- JSON-LD in `src/seo/jsonld.ts` (no fake offers/reviews).
- Product/journal/on-page polish reusing existing components.
- Image `loading`/`decoding` attributes; hero not lazy-loaded.

## Phases 8–12

- Strategy docs: `CONTENT_STRATEGY.md`, `KEYWORD_MAP.csv`, `CONTENT_CALENDAR.csv`.
- Trust pages: `/about`, `/our-sourcing`, `/contact`, legal placeholders.
- `src/analytics/gtag.ts` + `ANALYTICS_SETUP.md`.

## Phases 13–14

- `scripts/seo-verify.mjs` + `SEO_TEST_REPORT.md`, `SEO_IMPLEMENTATION_REPORT.md`, `SEO_CHANGELOG.md`.

## Approval gates

| Gate | Status |
|------|--------|
| G0 Phase 0 complete | Delivered |
| G1–G5 | Implementation in progress (user approved full plan execution) |

## Deploy

No production deploy or GitHub Pages setting changes without explicit user approval.