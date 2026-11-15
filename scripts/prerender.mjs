import express from 'express';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import puppeteer from 'puppeteer';
import {getAllIndexableRoutes} from './indexable-routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'docs');
const port = 4173;
const baseUrl = `http://127.0.0.1:${port}`;

function resetPrerenderOutput() {
  const preserve = new Set(['assets', 'index.html', 'CNAME', '.nojekyll', 'robots.txt']);
  for (const entry of fs.readdirSync(outDir)) {
    if (preserve.has(entry)) continue;
    fs.rmSync(path.join(outDir, entry), {recursive: true, force: true});
  }
}

function waitForServer() {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const tick = async () => {
      try {
        const res = await fetch(`${baseUrl}/`);
        if (res.ok) return resolve();
      } catch {
        /* not ready */
      }
      if (Date.now() - start > 30000) reject(new Error('Preview server did not start'));
      setTimeout(tick, 200);
    };
    tick();
  });
}

function dedupeTag(html, pattern) {
  const matches = [...html.matchAll(pattern)];
  if (matches.length <= 1) return html;
  const keep = matches[matches.length - 1][0];
  return html.replace(pattern, '').replace(/<head>/i, `<head>\n    ${keep}`);
}

function sanitizePrerenderedHtml(html) {
  let output = html;
  output = dedupeTag(output, /<title>[^<]*<\/title>\s*/gi);
  output = dedupeTag(output, /<meta name="description" content="[^"]*"\s*\/?>\s*/gi);
  output = dedupeTag(output, /<link rel="canonical" href="[^"]*"\s*\/?>\s*/gi);
  output = dedupeTag(output, /<meta property="og:title" content="[^"]*"\s*\/?>\s*/gi);
  output = dedupeTag(output, /<meta property="og:description" content="[^"]*"\s*\/?>\s*/gi);
  output = dedupeTag(output, /<meta property="og:url" content="[^"]*"\s*\/?>\s*/gi);
  output = dedupeTag(output, /<meta name="twitter:title" content="[^"]*"\s*\/?>\s*/gi);
  output = dedupeTag(output, /<meta name="twitter:description" content="[^"]*"\s*\/?>\s*/gi);
  return output;
}

function writeHtmlForRoute(route, html) {
  const target =
    route === '/'
      ? path.join(outDir, 'index.html')
      : path.join(outDir, route.replace(/^\//, ''), 'index.html');
  fs.mkdirSync(path.dirname(target), {recursive: true});
  fs.writeFileSync(target, sanitizePrerenderedHtml(html), 'utf8');
}

resetPrerenderOutput();

const app = express();
app.use('/assets', express.static(path.join(outDir, 'assets')));
app.use((_req, res) => {
  res.sendFile(path.join(outDir, 'index.html'));
});

const server = http.createServer(app);
await new Promise((resolve) => server.listen(port, '127.0.0.1', resolve));

try {
  await waitForServer();
  const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});

  for (const route of getAllIndexableRoutes()) {
    const page = await browser.newPage();
    await page.goto(`${baseUrl}${route}`, {waitUntil: 'domcontentloaded', timeout: 60000});
    await page.waitForSelector('#root > *', {timeout: 30000});
    await page.waitForFunction(
      (expectedRoute) => window.location.pathname === expectedRoute,
      {timeout: 15000},
      route
    );
    await page.waitForFunction(
      (expectedRoute) => {
        const links = [...document.querySelectorAll('link[rel="canonical"]')];
        const canonical = links[links.length - 1]?.getAttribute('href') ?? '';
        return expectedRoute === '/'
          ? canonical.endsWith('chhotitokri.com/')
          : canonical.endsWith(expectedRoute);
      },
      {timeout: 20000},
      route
    );
    const html = await page.content();
    writeHtmlForRoute(route, html);
    await page.close();
    console.log('prerendered', route);
  }

  await browser.close();

  const rootIndex = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');
  fs.writeFileSync(path.join(outDir, '404.html'), rootIndex, 'utf8');
} finally {
  server.close();
}