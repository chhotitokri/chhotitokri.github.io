import {JOURNAL_ARTICLES} from '../data/journal';
import {PROVISIONS} from '../data/provisions';

export const paths = {
  home: '/',
  products: '/products',
  product: (id: string) => `/products/${id}`,
  about: '/about',
  sourcing: '/our-sourcing',
  journal: '/journal',
  journalArticle: (id: string) => `/journal/${id}`,
  contact: '/contact',
  privacy: '/privacy-policy',
  terms: '/terms-and-conditions',
} as const;

export const STATIC_INDEXABLE_ROUTES = [
  paths.home,
  paths.products,
  paths.about,
  paths.sourcing,
  paths.journal,
  paths.contact,
  paths.privacy,
  paths.terms,
] as const;

export function getAllIndexableRoutes(): string[] {
  const productRoutes = PROVISIONS.map((p) => paths.product(p.id));
  const journalRoutes = JOURNAL_ARTICLES.map((a) => paths.journalArticle(a.id));
  return [...STATIC_INDEXABLE_ROUTES, ...productRoutes, ...journalRoutes];
}

export function getViewFromPath(pathname: string): string {
  if (pathname === paths.products || pathname.startsWith(`${paths.products}/`)) {
    return pathname === paths.products ? 'catalogue' : 'product-detail';
  }
  if (pathname === paths.home) return 'home';
  if (pathname === paths.about) return 'story';
  if (pathname === paths.sourcing) return 'provenance';
  if (pathname === paths.journal || pathname.startsWith(`${paths.journal}/`)) return 'journal';
  if (pathname === paths.contact) return 'contact';
  return 'home';
}