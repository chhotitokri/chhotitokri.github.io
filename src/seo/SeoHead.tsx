import React from 'react';
import {Helmet} from 'react-helmet-async';
import {useLocation} from 'react-router-dom';
import {getPageSeo} from './pages';
import {getJsonLdForPath} from './jsonld';
import {DEFAULT_OG_IMAGE, SITE_LOCALE, SITE_NAME} from './site';

export const SeoHead: React.FC = () => {
  const {pathname} = useLocation();
  const seo = getPageSeo(pathname);
  const jsonLd = getJsonLdForPath(pathname, seo);

  return (
    <Helmet key={pathname}>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.canonical} />
      {seo.robots && <meta name="robots" content={seo.robots} />}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={SITE_LOCALE} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:type" content={seo.ogType ?? 'website'} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      {jsonLd.map((entry, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  );
};