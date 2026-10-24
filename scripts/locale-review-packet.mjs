// Side-by-side review packet for one site language: English source, the
// German and Turkish versions as reference, and the target translation.
//   node scripts/locale-review-packet.mjs <code> [pageId ...]
//   pageIds default to every landing page; pass "home" to include home copy.
import { locales, seoFeaturePages } from '../src/content.js';
import { localeCodes } from '../src/locale-registry.js';

const [code, ...requested] = process.argv.slice(2);
if (!code || !localeCodes.includes(code)) {
  console.error(`usage: node scripts/locale-review-packet.mjs <code> [pageId ...]\ncodes: ${localeCodes.join(' ')}`);
  process.exit(1);
}

const pageIds = requested.filter((id) => id !== 'home');
const ids = pageIds.length ? pageIds : Object.keys(seoFeaturePages);
const unknown = ids.filter((id) => !seoFeaturePages[id]);
if (unknown.length) {
  console.error(`unknown page id(s): ${unknown.join(', ')}`);
  process.exit(1);
}

const packet = {
  locale: code,
  dir: locales[code].dir,
  pages: Object.fromEntries(ids.map((id) => {
    const page = seoFeaturePages[id];
    return [id, {
      source: { slug: page.slugs.en, ...page.locales.en },
      reference: {
        de: { slug: page.slugs.de, ...page.locales.de },
        tr: { slug: page.slugs.tr, ...page.locales.tr },
      },
      target: { slug: page.slugs[code], ...page.locales[code] },
    }];
  })),
};

if (requested.includes('home')) {
  const strip = ({ label, shortLabel, htmlLang, hreflang, assetLocale, ogLocale, path, dir, ...rest }) => rest;
  packet.home = { source: strip(locales.en), target: strip(locales[code]) };
}

console.log(JSON.stringify(packet, null, 2));
