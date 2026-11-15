# SEO changelog

## 2026-11-15

### Added
- Path URLs: `/`, `/products`, `/products/{id}`, `/about`, `/our-sourcing`, `/journal`, `/journal/{id}`, `/contact`, `/privacy-policy`, `/terms-and-conditions`
- `react-router-dom`, `react-helmet-async`, prerender via Puppeteer postbuild
- `robots.txt`, `sitemap.xml` (16 URLs)
- JSON-LD Organization, WebSite, Product, Article, BreadcrumbList (where applicable)
- `npm run seo:verify` and CI integration

### Changed
- Vite `base` from `./` to `/` for absolute asset URLs on nested prerender paths
- `index.html` shell defers metadata to React SEO head
- Navigation components use path navigation (hash compatibility on first load only)

### Redirect / compatibility
- Legacy `#catalogue` → `/products`, `#product/{id}` → `/products/{id}`, etc. via `migrateLegacyHash()`
- No server-side 301 for hash URLs (GitHub Pages limitation)