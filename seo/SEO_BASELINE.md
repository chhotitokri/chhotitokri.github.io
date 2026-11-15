# SEO baseline measurements

**Recorded:** 2026-11-15 (Phase 0)

## Commands

```bash
npm ci
npm run build
npm run lint
```

## Results

| Check | Result |
|-------|--------|
| `npm ci` | OK (0 vulnerabilities) |
| `npm run build` | OK — `docs/index.html`, `docs/assets/index-BD5KPXdd.js` (351 KB), `docs/assets/index-BWW_Crti.css` (61.5 KB) |
| `npm run lint` (`tsc --noEmit`) | OK |
| Vite `base` (pre-implementation) | `./` (relative assets) |

## Live site probes (2026-11-15)

| URL | Status | Notes |
|-----|--------|-------|
| `https://chhotitokri.com/` | 200 | Built SPA shell; single global meta |
| `https://chhotitokri.com/robots.txt` | 404 | |
| `https://chhotitokri.com/sitemap.xml` | 404 | |

## Live homepage head (excerpt)

- **Title:** Chhoti Tokri — Culinary Monograph & Portfolio
- **Description:** Portfolio/monograph positioning (not India retail-focused draft)
- **OG:** title, description, type=website; **no** og:url, og:image
- **Twitter:** summary_large_image; **no** image
- **Canonical:** absent

## Performance baseline (local build artifact only)

| Asset | Size (approx.) |
|-------|----------------|
| Main JS | 344 KB |
| Main CSS | 64 KB |

**Limitation:** Lighthouse / CrUX not run in Phase 0. Local scores do **not** represent field Core Web Vitals.

## Post-implementation (2026-11-15)

| Check | Result |
|-------|--------|
| `npm run build` + postbuild | ~413 KB JS; 16 prerendered HTML routes |
| `npm run seo:verify` | Pass (16 routes) |
| `docs/sitemap.xml` | Generated at build |
| `docs/robots.txt` | Copied from `public/robots.txt` |

## Known limitations

- No GA4 property ID in repository.
- Live production not re-verified in a browser after this implementation (deploy pending).