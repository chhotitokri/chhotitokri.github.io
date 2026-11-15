import {JOURNAL_ARTICLES} from '../data/journal';
import {PROVISIONS} from '../data/provisions';
import {SITE_NAME, SITE_URL} from './site';
import {paths} from './routes';

export interface PageSeo {
  title: string;
  description: string;
  canonical: string;
  robots?: string;
  ogType?: string;
}

function clampDescription(text: string, max = 160): string {
  const plain = text.replace(/\s+/g, ' ').trim();
  if (plain.length <= max) return plain;
  return `${plain.slice(0, max - 1).trim()}…`;
}

const HOME_SEO: PageSeo = {
  title: 'Chhoti Tokri – Discover Quality Indian Foods',
  description: clampDescription(
    'Discover thoughtfully sourced Indian food products at Chhoti Tokri. Explore traditional grains, honey, spices and more.'
  ),
  canonical: `${SITE_URL}${paths.home}`,
  ogType: 'website',
};

const STATIC_PAGES: Record<string, PageSeo> = {
  [paths.products]: {
    title: 'Our Products | Chhoti Tokri',
    description: clampDescription(
      'Explore Chhoti Tokri’s curated Indian provisions: heirloom rice, mustard oil, forest honey, turmeric, and dehydrated fruits.'
    ),
    canonical: `${SITE_URL}${paths.products}`,
  },
  [paths.about]: {
    title: 'Our Story | Chhoti Tokri',
    description: clampDescription(
      'Learn how Chhoti Tokri celebrates Indian culinary heritage, ancestral terroirs, and mindful provisioning.'
    ),
    canonical: `${SITE_URL}${paths.about}`,
  },
  [paths.sourcing]: {
    title: 'Our Sourcing & Quality | Chhoti Tokri',
    description: clampDescription(
      'See how Chhoti Tokri approaches origin traceability, seasonal harvesting, and gentle preservation across India.'
    ),
    canonical: `${SITE_URL}${paths.sourcing}`,
  },
  [paths.journal]: {
    title: 'The Tokri Journal | Chhoti Tokri',
    description: clampDescription(
      'Read editorial notes on Indian foodways, rare harvests, and everyday nourishment from Chhoti Tokri.'
    ),
    canonical: `${SITE_URL}${paths.journal}`,
  },
  [paths.contact]: {
    title: 'Contact & Trade Enquiries | Chhoti Tokri',
    description: clampDescription(
      'Contact Chhoti Tokri for product information, wholesale dossiers, and partnership enquiries.'
    ),
    canonical: `${SITE_URL}${paths.contact}`,
  },
  [paths.privacy]: {
    title: 'Privacy Policy | Chhoti Tokri',
    description: 'Privacy policy for visitors to chhotitokri.com. Business legal review pending.',
    canonical: `${SITE_URL}${paths.privacy}`,
  },
  [paths.terms]: {
    title: 'Terms and Conditions | Chhoti Tokri',
    description: 'Terms and conditions for use of chhotitokri.com. Business legal review pending.',
    canonical: `${SITE_URL}${paths.terms}`,
  },
};

export function getPageSeo(pathname: string): PageSeo {
  const normalized = pathname.replace(/\/$/, '') || '/';

  if (normalized in STATIC_PAGES) {
    return STATIC_PAGES[normalized];
  }

  const productMatch = normalized.match(/^\/products\/([^/]+)$/);
  if (productMatch) {
    const product = PROVISIONS.find((p) => p.id === productMatch[1]);
    if (product) {
      return {
        title: `${product.name} | ${SITE_NAME}`,
        description: clampDescription(product.shortDescription),
        canonical: `${SITE_URL}${paths.product(product.id)}`,
        ogType: 'product',
      };
    }
  }

  const journalMatch = normalized.match(/^\/journal\/([^/]+)$/);
  if (journalMatch) {
    const article = JOURNAL_ARTICLES.find((a) => a.id === journalMatch[1]);
    if (article) {
      return {
        title: `${article.title} | ${SITE_NAME}`,
        description: clampDescription(article.excerpt),
        canonical: `${SITE_URL}${paths.journalArticle(article.id)}`,
        ogType: 'article',
      };
    }
  }

  return HOME_SEO;
}