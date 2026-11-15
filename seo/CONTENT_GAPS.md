# Content gaps — Chhoti Tokri (business input required)

**Legend:** Items marked **VERIFIED** appear in the repository today. **TODO** requires business confirmation before SEO copy or schema expansion.

## Brand and legal identity

| Topic | Status | Notes |
|-------|--------|-------|
| Legal entity name | TODO | Not in repo |
| Registered business address | TODO | Do not add LocalBusiness schema without this |
| GST / company registration | TODO | |
| Privacy policy legal text | TODO | Placeholder page only until counsel review |
| Terms and conditions legal text | TODO | Placeholder page only until counsel review |

## Contact channels

| Topic | Status | Notes |
|-------|--------|-------|
| Email chhotitokri@gmail.com | VERIFIED | `src/lib/contact.ts` |
| Phone +91 70652 05020 | VERIFIED | `src/lib/contact.ts` |
| WhatsApp business link | TODO | Not on site; required for whatsapp_enquiry GA event |
| Physical trade desk locations | TODO | Copy mentions New Delhi and Paris; verify for public use |

## Product catalogue

| Product ID | Display name | Status |
|------------|--------------|--------|
| kala-namak-rice | Kala Namak Rice | VERIFIED in `src/data/provisions.ts` |
| mustard-oil | Traditional Mustard Oil | VERIFIED |
| forest-honey | Pure Forest Honey | VERIFIED; URL slug `forest-honey` |
| turmeric | Sun-Dried Turmeric | VERIFIED |
| dehydrated-fruits | Sun-Ripened Dehydrated Fruits | VERIFIED |

## Facts that must not be invented or expanded without verification

- GI status, organic certification, lab tests, curcumin percentages beyond on-page editorial copy
- GTIN/EAN, SKU, retail pricing, stock availability
- Marketplace URLs (Amazon, Blinkit, Zepto, etc.)
- Customer reviews or aggregate ratings
- Medicinal or health treatment claims
- Freeze-dried vs sun-dried process claims (site copy says dehydration; verify per SKU)

## Photography and media

- Local assets under `/assets/aistudio/` — VERIFIED paths
- Hero and journal images from Google-hosted URLs — VERIFIED in components
- Original product photography ownership / alt-text sign-off — TODO

## Analytics and Search Console

- GA4 Measurement ID — TODO (`VITE_GA_MEASUREMENT_ID`)
- Search Console property owner and verification method — TODO (manual)

## Recommended slug decision

| Question | Recommendation until business confirms |
|----------|--------------------------------------|
| Public URL for honey | Keep `/products/forest-honey` (matches data `id`) |