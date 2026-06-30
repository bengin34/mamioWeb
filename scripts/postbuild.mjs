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
import {
  blogLangs,
  blogPostIds,
  blogPosts,
  featureBlogPostIds,
  getBlogPostAlternates,
  getBlogPostPath,
} from '../src/blog-content.js';

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

const fallbackLabels = {
  en: {
    homes: 'Localized home pages',
    trackers: 'Mamio trackers',
    guides: 'Baby care guides',
    legal: 'Support and legal',
  },
  de: {
    homes: 'Lokalisierte Startseiten',
    trackers: 'Mamio-Tracker',
    guides: 'Babycare-Guides',
    legal: 'Support und Rechtliches',
  },
  tr: {
    homes: 'Yerelleştirilmiş ana sayfalar',
    trackers: 'Mamio takip sayfaları',
    guides: 'Bebek bakım rehberleri',
    legal: 'Destek ve yasal sayfalar',
  },
};

const legalLinks = {
  en: [
    { href: '/privacy/', label: 'Privacy Policy' },
    { href: '/terms/', label: 'Terms of Use' },
    { href: '/support/', label: 'Support' },
  ],
  de: [
    { href: '/privacy/', label: 'Datenschutz' },
    { href: '/terms/', label: 'Nutzungsbedingungen' },
    { href: '/support/', label: 'Support' },
    { href: '/impressum/', label: 'Impressum' },
  ],
  tr: [
    { href: '/privacy/', label: 'Gizlilik Politikası' },
    { href: '/terms/', label: 'Kullanım Şartları' },
    { href: '/support/', label: 'Destek' },
  ],
};

function renderFallbackSection(title, links) {
  if (!links.length) return '';

  const items = links
    .map((link) => `          <li><a href="${escapeAttribute(link.href)}">${escapeHtml(link.label)}</a></li>`)
    .join('\n');

  return `        <section>
          <h2>${escapeHtml(title)}</h2>
          <ul>
${items}
          </ul>
        </section>`;
}

function renderFallbackLinks(route) {
  const lang = route.lang ?? 'en';
  const content = locales[lang] ?? locales.en;
  const labels = fallbackLabels[lang] ?? fallbackLabels.en;
  const title = route.kind === 'seoPage'
    ? seoFeaturePages[route.pageId].locales[lang].title
    : content.metaTitle;
  const homeLinks = route.isRoot
    ? localeKeys.map((locale) => ({
      href: locales[locale].path,
      label: locales[locale].label,
    }))
    : [{ href: content.path, label: content.label }];
  const trackerLinks = seoPageIds
    .map((pageId) => ({
      href: getSeoPagePath(pageId, lang),
      label: seoFeaturePages[pageId].locales[lang]?.shortTitle,
    }))
    .filter((link) => link.href && link.label);
  const guidePostIds = route.kind === 'seoPage'
    ? featureBlogPostIds[route.pageId] ?? blogPostIds
    : blogPostIds;
  const guideLinks = guidePostIds
    .map((postId) => ({
      href: getBlogPostPath(postId, lang),
      label: blogPosts[postId].locales[lang]?.title,
    }))
    .filter((link) => link.href && link.label);

  return `
    <nav class="seo-fallback" aria-label="Mamio internal links">
      <h1>${escapeHtml(title)}</h1>
${renderFallbackSection(labels.homes, homeLinks)}
${renderFallbackSection(labels.trackers, trackerLinks)}
${renderFallbackSection(labels.guides, guideLinks)}
${renderFallbackSection(labels.legal, legalLinks[lang] ?? legalLinks.en)}
    </nav>
  `;
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
  next = setTag(next, /<div id="root">\s*<\/div>/, `<div id="root">${renderFallbackLinks(route)}</div>`);

  return next;
}

function renderSitemap(routes) {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = routes.map((route) => {
    if (route.kind === 'static') {
      return `  <url>\n    <loc>${escapeXml(route.loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
    }

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

function renderBlogHtml(postId, lang) {
  const post = blogPosts[postId];
  const locale = post.locales[lang];
  const siteLocale = locales[lang];
  const canonical = `${DOMAIN}${getBlogPostPath(postId, lang)}`;
  const alternates = getBlogPostAlternates(postId)
    .map((a) => `  <link rel="alternate" hreflang="${escapeAttribute(a.lang)}" href="${escapeAttribute(a.href)}" />`)
    .join('\n');

  const articleLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: locale.title,
    description: locale.metaDescription,
    url: canonical,
    datePublished: locale.date,
    inLanguage: lang,
    publisher: {
      '@type': 'Organization',
      name: 'Mamio',
      url: DOMAIN,
    },
    about: {
      '@type': 'SoftwareApplication',
      name: 'Mamio',
      applicationCategory: 'HealthApplication',
    },
  }, null, 2);

  const faqLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: locale.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }, null, 2);

  const sectionsHtml = locale.sections
    .map((s) => `    <section class="article-section">
      <h2>${escapeHtml(s.title)}</h2>
      <p>${escapeHtml(s.body)}</p>
    </section>`)
    .join('\n');

  const faqHtml = locale.faq
    .map((item) => `      <details class="faq-item">
        <summary>${escapeHtml(item.question)}</summary>
        <p>${escapeHtml(item.answer)}</p>
      </details>`)
    .join('\n');

  const faqHeading = lang === 'de' ? 'Häufige Fragen' : lang === 'tr' ? 'Sık Sorulan Sorular' : 'Frequently Asked Questions';
  const backLabel = lang === 'de' ? '← Zurück zur Startseite' : lang === 'tr' ? '← Ana sayfaya dön' : '← Back to home';
  const disclaimer = lang === 'de'
    ? 'Dieser Artikel dient nur zu Informationszwecken und ersetzt keinen medizinischen Rat.'
    : lang === 'tr'
      ? 'Bu makale yalnızca bilgilendirme amaçlıdır ve tıbbi tavsiyenin yerini tutmaz.'
      : 'This article is for informational purposes only and does not constitute medical advice.';

  return `<!doctype html>
<html lang="${escapeAttribute(siteLocale.htmlLang)}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(locale.metaTitle)}</title>
  <meta name="description" content="${escapeAttribute(locale.metaDescription)}" />
  <link rel="canonical" href="${escapeAttribute(canonical)}" />
${alternates}
  <meta property="og:type" content="article" />
  <meta property="og:title" content="${escapeAttribute(locale.metaTitle)}" />
  <meta property="og:description" content="${escapeAttribute(locale.metaDescription)}" />
  <meta property="og:url" content="${escapeAttribute(canonical)}" />
  <meta property="og:image" content="${escapeAttribute(DOMAIN)}/assets/og-mamio.png" />
  <meta property="og:locale" content="${escapeAttribute(siteLocale.ogLocale)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeAttribute(locale.metaTitle)}" />
  <meta name="twitter:description" content="${escapeAttribute(locale.metaDescription)}" />
  <meta name="twitter:image" content="${escapeAttribute(DOMAIN)}/assets/og-mamio.png" />
  <link rel="icon" type="image/png" href="/assets/icon-192.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <script type="application/ld+json">${articleLd}</script>
  <script type="application/ld+json">${faqLd}</script>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    :root {
      --bg: #071224; --surface: rgba(255,255,255,0.04); --border: rgba(255,255,255,0.08);
      --text: #f4f8ff; --muted: rgba(255,255,255,0.52); --accent: #45c8f2;
    }
    body { margin: 0; background: var(--bg); color: var(--text); font: 16px/1.7 Inter, ui-sans-serif, system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
    a { color: var(--accent); text-decoration: none; }
    a:hover { text-decoration: underline; }
    .site-header { border-bottom: 1px solid var(--border); padding: 16px 24px; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
    .site-logo { font-size: 1.2rem; font-weight: 800; color: var(--text); }
    .btn { display: inline-block; background: var(--accent); color: #071224; font-weight: 700; font-size: 0.875rem; padding: 10px 20px; border-radius: 8px; white-space: nowrap; }
    .btn:hover { text-decoration: none; opacity: 0.9; }
    main { max-width: 760px; margin: 0 auto; padding: 40px 24px 80px; }
    .back-link { font-size: 0.875rem; color: var(--muted); display: inline-block; margin-bottom: 32px; }
    .back-link:hover { color: var(--accent); text-decoration: none; }
    h1 { font-size: clamp(1.6rem, 4vw, 2.4rem); font-weight: 800; line-height: 1.2; margin: 0 0 20px; }
    .article-intro { font-size: 1.1rem; color: rgba(244,248,255,0.8); margin-bottom: 40px; border-left: 3px solid var(--accent); padding-left: 20px; }
    .article-section { margin-bottom: 36px; }
    .article-section h2 { font-size: 1.25rem; font-weight: 700; margin: 0 0 10px; color: var(--text); }
    .article-section p { margin: 0; color: rgba(244,248,255,0.85); }
    .faq-block { margin-top: 48px; padding-top: 40px; border-top: 1px solid var(--border); }
    .faq-block h2 { font-size: 1.3rem; font-weight: 700; margin-bottom: 20px; }
    .faq-item { border: 1px solid var(--border); border-radius: 10px; padding: 16px 20px; margin-bottom: 12px; background: var(--surface); }
    .faq-item summary { font-weight: 600; cursor: pointer; list-style: none; }
    .faq-item summary::-webkit-details-marker { display: none; }
    .faq-item p { margin: 12px 0 0; color: var(--muted); }
    .disclaimer { margin-top: 40px; padding: 16px 20px; background: var(--surface); border-radius: 10px; font-size: 0.85rem; color: var(--muted); border-left: 3px solid var(--accent); }
    .cta-block { margin-top: 56px; background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 32px; text-align: center; }
    .cta-block p { margin: 0 0 20px; color: var(--muted); }
    footer { border-top: 1px solid var(--border); padding: 24px; text-align: center; font-size: 0.8rem; color: var(--muted); }
    footer a { color: var(--muted); }
  </style>
</head>
<body>
  <header class="site-header">
    <a class="site-logo" href="/${lang}/">Mamio</a>
    <a class="btn" href="${escapeAttribute(APP_STORE_URL)}" target="_blank" rel="noopener">${escapeHtml(siteLocale.download.cta)}</a>
  </header>
  <main>
    <a class="back-link" href="/${lang}/">${escapeHtml(backLabel)}</a>
    <h1>${escapeHtml(locale.title)}</h1>
    <p class="article-intro">${escapeHtml(locale.intro)}</p>
${sectionsHtml}
    <div class="faq-block">
      <h2>${escapeHtml(faqHeading)}</h2>
${faqHtml}
    </div>
    <p class="disclaimer">${escapeHtml(disclaimer)}</p>
    <div class="cta-block">
      <p>${escapeHtml(locale.ctaText)}</p>
      <a class="btn" href="${escapeAttribute(APP_STORE_URL)}" target="_blank" rel="noopener">${escapeHtml(siteLocale.download.cta)}</a>
    </div>
  </main>
  <footer>
    <a href="/${lang}/">Mamio</a> &nbsp;·&nbsp;
    <a href="/privacy/">Privacy</a> &nbsp;·&nbsp;
    <a href="/support/">Support</a>
  </footer>
</body>
</html>`;
}

const blogRoutes = blogPostIds.flatMap((postId) =>
  blogLangs.map((lang) => ({ postId, lang, loc: `${DOMAIN}${getBlogPostPath(postId, lang)}` })),
);

await Promise.all(
  blogRoutes.map(async ({ postId, lang }) => {
    const slug = blogPosts[postId].slugs[lang];
    const pageDir = join(distDir, lang, 'blog', slug);
    await mkdir(pageDir, { recursive: true });
    await writeFile(join(pageDir, 'index.html'), renderBlogHtml(postId, lang));
  }),
);

const staticRoutes = ['/privacy/', '/support/', '/terms/'].map((path) => ({
  kind: 'static',
  loc: `${DOMAIN}${path}`,
}));

const blogSitemapRoutes = blogRoutes.map((r) => ({ kind: 'static', loc: r.loc }));

await writeFile(join(distDir, 'sitemap.xml'), renderSitemap([rootRoute, ...homeRoutes, ...seoRoutes, ...blogSitemapRoutes, ...staticRoutes]));
