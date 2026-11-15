# SEO test report

**Run date:** 2026-11-15

## Commands

```bash
npm ci
npm run lint
npm run build          # includes postbuild prerender + sitemap
npm run seo:verify
```

## Results

| Check | Outcome |
|-------|---------|
| `npm run lint` | Pass |
| `npm run build` | Pass (Vite bundle + 16 prerendered HTML files) |
| `npm run seo:verify` | **Pass** — 16 routes |
| `docs/robots.txt` | Present (from `public/robots.txt`) |
| `docs/sitemap.xml` | 16 URLs |

## Per-route checks (`seo-verify.mjs`)

- Exactly one `<title>` in document (after prerender sanitization)
- `meta description` present
- At least one `<h1>`
- `link rel="canonical"` present
- No `noindex`, no `/src/main.tsx`, no localhost in HTML
- JSON-LD blocks parse as JSON

## Not run in this session

- Playwright visual regression
- Lighthouse performance scores
- Live production curl after deploy
- Rich Results Test on deployed URLs

## Remaining risks

- Duplicate helmet tags during hydration on client navigation (mitigated in static HTML via dedupe in prerender)
- Legal placeholders not reviewed by counsel
- Business data gaps for marketplace and structured product offers