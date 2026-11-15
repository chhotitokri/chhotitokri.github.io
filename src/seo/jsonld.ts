import {JOURNAL_ARTICLES} from '../data/journal';
import {PROVISIONS} from '../data/provisions';
import {assetUrl} from '../lib/assets';
import {ORGANIZATION, SITE_NAME, SITE_URL} from './site';
import {paths} from './routes';
import type {PageSeo} from './pages';

function absoluteAsset(pathOrUrl: string): string {
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
  const resolved = assetUrl(pathOrUrl);
  if (/^https?:\/\//.test(resolved)) return resolved;
  return `${SITE_URL}${resolved.startsWith('/') ? resolved : `/${resolved}`}`;
}

export function getJsonLdForPath(pathname: string, seo: PageSeo): Record<string, unknown>[] {
  const graphs: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: ORGANIZATION.name,
      url: ORGANIZATION.url,
      email: ORGANIZATION.email,
      telephone: ORGANIZATION.telephone,
      description: ORGANIZATION.description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  ];

  const productMatch = pathname.match(/^\/products\/([^/]+)$/);
  if (productMatch) {
    const product = PROVISIONS.find((p) => p.id === productMatch[1]);
    if (product) {
      graphs.push({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.shortDescription,
        image: absoluteAsset(product.mainImage),
        brand: {
          '@type': 'Brand',
          name: SITE_NAME,
        },
      });
      graphs.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}${paths.products}` },
          {
            '@type': 'ListItem',
            position: 3,
            name: product.name,
            item: `${SITE_URL}${paths.product(product.id)}`,
          },
        ],
      });
    }
  }

  const journalMatch = pathname.match(/^\/journal\/([^/]+)$/);
  if (journalMatch) {
    const article = JOURNAL_ARTICLES.find((a) => a.id === journalMatch[1]);
    if (article) {
      graphs.push({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        image: article.coverImage,
        author: {
          '@type': 'Organization',
          name: article.author,
        },
        articleSection: article.categoryTag,
      });
    }
  }

  return graphs;
}