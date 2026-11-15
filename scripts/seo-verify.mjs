import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {getAllIndexableRoutes} from './indexable-routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const docs = path.join(root, 'docs');

function htmlPathForRoute(route) {
  return route === '/'
    ? path.join(docs, 'index.html')
    : path.join(docs, route.replace(/^\//, ''), 'index.html');
}

const errors = [];

for (const route of getAllIndexableRoutes()) {
  const file = htmlPathForRoute(route);
  if (!fs.existsSync(file)) {
    errors.push(`missing HTML for ${route}`);
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  const titles = [...html.matchAll(/<title>([^<]*)<\/title>/gi)];
  if (titles.length !== 1) errors.push(`${route}: expected 1 title, found ${titles.length}`);
  if (!/name="description"/i.test(html)) errors.push(`${route}: missing meta description`);
  if (!/<h1[\s>]/i.test(html)) errors.push(`${route}: missing H1`);
  if (!/rel="canonical"/i.test(html)) errors.push(`${route}: missing canonical`);
  if (/noindex/i.test(html)) errors.push(`${route}: accidental noindex`);
  if (/\/src\/main\.tsx/.test(html)) errors.push(`${route}: dev entry script`);
  if (html.includes('localhost') || html.includes('127.0.0.1')) {
    errors.push(`${route}: staging URL in HTML`);
  }
  for (const match of html.matchAll(
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  )) {
    try {
      JSON.parse(match[1].trim());
    } catch {
      errors.push(`${route}: invalid JSON-LD`);
    }
  }
}

const robots = path.join(docs, 'robots.txt');
const sitemap = path.join(docs, 'sitemap.xml');
if (!fs.existsSync(robots)) errors.push('missing docs/robots.txt');
if (!fs.existsSync(sitemap)) errors.push('missing docs/sitemap.xml');

if (errors.length) {
  console.error('SEO verify failed:\n' + errors.map((e) => `- ${e}`).join('\n'));
  process.exit(1);
}

console.log(`SEO verify passed (${getAllIndexableRoutes().length} routes).`);