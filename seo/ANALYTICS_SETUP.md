# Analytics and Search Console setup

## Google Analytics 4

1. Create or open a GA4 property for **chhotitokri.com** (India timezone).
2. Copy the Measurement ID (`G-XXXXXXXXXX`).
3. Set at build time:
   - Local: `.env` → `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
   - GitHub Actions: repository secret or vars, injected into build step env.
4. Redeploy so the ID is baked into the client bundle.

### Events implemented (no PII in parameters)

| Event | When |
|-------|------|
| `view_item` | Product route load (`item_id`) |
| `product_enquiry` | Opening trade enquiry modal |
| `contact_form_submit` | Enquiry form success (client-side) |
| `email_click` | Footer mailto click |
| `marketplace_click` | **Not wired** — add when real URLs exist |
| `whatsapp_enquiry` | **Not wired** — add when WhatsApp URL provided |

Analytics does **not** load when `VITE_GA_MEASUREMENT_ID` is empty.

## Google Search Console

1. Add property: **URL prefix** `https://chhotitokri.com/`
2. Verify via DNS TXT (recommended for custom domain) or HTML file upload to site root.
3. After deploy, submit sitemap: `https://chhotitokri.com/sitemap.xml`
4. Use URL inspection on `/`, `/products/kala-namak-rice`, and one journal article.
5. Monitor Coverage and Core Web Vitals in field data (not local Lighthouse only).

## Bing Webmaster Tools (optional)

Import site from Search Console or verify separately; submit same sitemap URL.