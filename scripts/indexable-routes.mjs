/** Keep in sync with src/data/provisions.ts and src/data/journal.ts */

const PRODUCT_IDS = [
  'kala-namak-rice',
  'mustard-oil',
  'forest-honey',
  'turmeric',
  'dehydrated-fruits',
];

const JOURNAL_IDS = ['scent-of-siddhartha', 'mustard-crucible', 'wild-flora-golden-dew'];

export const STATIC_ROUTES = [
  '/',
  '/products',
  '/about',
  '/our-sourcing',
  '/journal',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
];

export function getAllIndexableRoutes() {
  const productRoutes = PRODUCT_IDS.map((id) => `/products/${id}`);
  const journalRoutes = JOURNAL_IDS.map((id) => `/journal/${id}`);
  return [...STATIC_ROUTES, ...productRoutes, ...journalRoutes];
}