import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {getAllIndexableRoutes} from './indexable-routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outFile = path.join(root, 'docs', 'sitemap.xml');
const site = 'https://chhotitokri.com';
const lastmod = new Date().toISOString().slice(0, 10);

const urls = getAllIndexableRoutes()
  .map(
    (route) => `  <url>
    <loc>${site}${route === '/' ? '/' : route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

fs.writeFileSync(outFile, xml, 'utf8');
console.log(`wrote ${outFile} (${getAllIndexableRoutes().length} URLs)`);