// Writes the English source strings translators work from.
//   node scripts/export-i18n-source.mjs <outDir>
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { locales, seoFeaturePages } from '../src/content.js';
import { blogPosts } from '../src/blog-content.js';

const outDir = process.argv[2];
if (!outDir) throw new Error('usage: export-i18n-source.mjs <outDir>');

const REGISTRY_FIELDS = ['label', 'shortLabel', 'htmlLang', 'hreflang', 'assetLocale', 'ogLocale', 'path', 'dir'];
const home = Object.fromEntries(
  Object.entries(locales.en).filter(([key]) => !REGISTRY_FIELDS.includes(key)),
);

const seo = Object.fromEntries(
  Object.entries(seoFeaturePages).map(([id, page]) => [id, { slug: page.slugs.en, ...page.locales.en }]),
);

const blog = Object.fromEntries(
  Object.entries(blogPosts).map(([id, post]) => [id, { slug: post.slugs.en, ...post.locales.en }]),
);

await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, 'home.en.json'), JSON.stringify(home, null, 2));
await writeFile(join(outDir, 'seo.en.json'), JSON.stringify(seo, null, 2));
await writeFile(join(outDir, 'blog.en.json'), JSON.stringify(blog, null, 2));
console.log(`home keys: ${Object.keys(home).length}, seo pages: ${Object.keys(seo).length}, blog posts: ${Object.keys(blog).length}`);
