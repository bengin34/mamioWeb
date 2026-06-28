import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import {
  APP_STORE_URL,
  DOMAIN,
  getRouteAlternates,
  getRouteCanonical,
  getSeoPagePath,
  localeKeys,
  locales,
  seoFeaturePages,
  seoPageIds,
  seoPageLangs,
} from '../src/content.js';

const distDir = 'dist';
const baseHtml = await readFile(join(distDir, 'index.html'), 'utf8');

function escapeAttribute(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
}

function escapeHtml(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function escapeXml(value) {
  return escapeAttribute(value).replaceAll("'", '&apos;');
}

function setTag(html, pattern, replacement) {
  return html.replace(pattern, replacement);
}

function getRouteMeta(route) {
  const content = locales[route.lang];
  const page = route.kind === 'seoPage'
    ? seoFeaturePages[route.pageId].locales[route.lang]
    : null;

  return {
    htmlLang: content.htmlLang,
    ogLocale: content.ogLocale,
    title: page?.metaTitle ?? content.metaTitle,
    description: page?.metaDescription ?? content.metaDescription,
  };
}

function createStructuredData(route, meta, canonical) {
  const inLanguage = route.kind === 'seoPage' ? seoPageLangs : localeKeys;
  const software = {
    '@type': 'SoftwareApplication',
    name: 'Mamio',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS, Android',
    description: meta.description,
    url: canonical,
    image: `${DOMAIN}/assets/og-mamio.png`,
    sameAs: [APP_STORE_URL],
    installUrl: APP_STORE_URL,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    inLanguage,
  };

  if (route.kind !== 'seoPage') {
    return {
      '@context': 'https://schema.org',
      ...software,
    };
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      software,
      {
        '@type': 'WebPage',
        name: meta.title,
        description: meta.description,
        url: canonical,
        isPartOf: {
          '@type': 'WebSite',
          name: 'Mamio',
          url: DOMAIN,
        },
        about: {
          '@type': 'SoftwareApplication',
          name: 'Mamio',
          applicationCategory: 'HealthApplication',
        },
        inLanguage: route.lang,
      },
    ],
  };
}

function renderAlternates(route) {
  return getRouteAlternates(route)
    .map((alternate) => `<link rel="alternate" hreflang="${alternate.lang}" href="${alternate.href}" />`)
    .join('\n    ');
}

function localizeHtml(html, route) {
  const meta = getRouteMeta(route);
  const canonical = getRouteCanonical(route);
  const jsonLd = JSON.stringify(
    createStructuredData(route, meta, canonical),
    null,
    8,
  );

  let next = html;
  next = setTag(next, /<html lang="[^"]*">/, `<html lang="${meta.htmlLang}">`);
  next = setTag(next, /<title>.*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`);
  next = setTag(next, /<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${escapeAttribute(meta.description)}" />`);
  next = setTag(next, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`);
  next = setTag(next, /    <link rel="alternate"[\s\S]*?    <link rel="icon"/, `    ${renderAlternates(route)}\n    <link rel="icon"`);
  next = setTag(next, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeAttribute(meta.title)}" />`);
  next = setTag(next, /<meta\s+property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${escapeAttribute(meta.description)}" />`);
  next = setTag(next, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`);
  next = setTag(next, /<meta property="og:locale" content="[^"]*" \/>/, `<meta property="og:locale" content="${meta.ogLocale}" />`);
  next = setTag(next, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escapeAttribute(meta.title)}" />`);
  next = setTag(next, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${escapeAttribute(meta.description)}" />`);
  next = setTag(next, /<script type="application\/ld\+json" id="structured-data">[\s\S]*?<\/script>/, `<script type="application/ld+json" id="structured-data">\n      ${jsonLd}\n    </script>`);

  return next;
}

function renderSitemap(routes) {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = routes.map((route) => {
    const alternates = getRouteAlternates(route)
      .map((alternate) => `    <xhtml:link rel="alternate" hreflang="${escapeXml(alternate.lang)}" href="${escapeXml(alternate.href)}" />`)
      .join('\n');

    return `  <url>
    <loc>${escapeXml(getRouteCanonical(route))}</loc>
    <lastmod>${lastmod}</lastmod>
${alternates}
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
}

const rootRoute = { kind: 'home', lang: 'en', isRoot: true };
const homeRoutes = localeKeys.map((lang) => ({ kind: 'home', lang, isRoot: false }));
const seoRoutes = seoPageIds.flatMap((pageId) =>
  seoPageLangs
    .filter((lang) => getSeoPagePath(pageId, lang))
    .map((lang) => ({ kind: 'seoPage', lang, pageId })),
);

await writeFile(join(distDir, 'index.html'), localizeHtml(baseHtml, rootRoute));

await Promise.all(
  homeRoutes.map(async (route) => {
    const lang = route.lang;
    const localeDir = join(distDir, lang);
    await mkdir(localeDir, { recursive: true });
    await writeFile(join(localeDir, 'index.html'), localizeHtml(baseHtml, route));
  }),
);

await Promise.all(
  seoRoutes.map(async (route) => {
    const slug = seoFeaturePages[route.pageId].slugs[route.lang];
    const pageDir = join(distDir, route.lang, slug);
    await mkdir(pageDir, { recursive: true });
    await writeFile(join(pageDir, 'index.html'), localizeHtml(baseHtml, route));
  }),
);

await writeFile(join(distDir, 'sitemap.xml'), renderSitemap([rootRoute, ...homeRoutes, ...seoRoutes]));
