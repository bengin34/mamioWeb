// Quick shape check for one researched article while writing it.
//   node scripts/check-article.mjs <id>
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { articleLangs } from '../src/articles/index.js';

const id = process.argv[2];
if (!id) {
  console.error('usage: node scripts/check-article.mjs <id>');
  process.exit(1);
}
const article = (await import(pathToFileURL(resolve(import.meta.dirname, '../src/articles', `${id}.js`)).href)).default;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const errors = [];
const en = article.locales?.en;
const words = (loc) => [loc.intro, ...loc.sections.flatMap((s) => [s.title, s.body, ...(s.list ?? [])]), ...loc.faq.flatMap((f) => [f.question, f.answer])]
  .join(' ').split(/\s+/).filter(Boolean).length;

if (typeof article.relatedPageId !== 'string') errors.push('relatedPageId missing');
for (const lang of articleLangs) {
  const loc = article.locales?.[lang];
  if (!loc) { errors.push(`${lang} missing`); continue; }
  if (!SLUG.test(article.slugs?.[lang] ?? '')) errors.push(`${lang} slug invalid`);
  for (const f of ['metaTitle', 'metaDescription', 'title', 'date', 'reviewed', 'intro', 'ctaText']) {
    if (typeof loc[f] !== 'string' || !loc[f].trim()) errors.push(`${lang}.${f} empty`);
  }
  if (!ISO_DATE.test(loc.date) || loc.date !== en.date) errors.push(`${lang}.date`);
  if (!ISO_DATE.test(loc.reviewed)) errors.push(`${lang}.reviewed`);
  if (loc.sections?.length !== en.sections.length) errors.push(`${lang}.sections count ${loc.sections?.length} != ${en.sections.length}`);
  if ((loc.faq?.length ?? 0) < 3) errors.push(`${lang}.faq < 3`);
  if ((loc.sources?.length ?? 0) < 3) errors.push(`${lang}.sources < 3`);
  for (const s of loc.sources ?? []) if (!/^https:\/\/\S+$/.test(s.url) || !s.publisher || !s.title) errors.push(`${lang} bad source ${s.url}`);
  if (loc.metaTitle.length > 75) errors.push(`${lang}.metaTitle ${loc.metaTitle.length} chars`);
  if (loc.metaDescription.length > 175) errors.push(`${lang}.metaDescription ${loc.metaDescription.length} chars`);
  if (/<[a-z]/i.test(JSON.stringify(loc))) errors.push(`${lang} contains HTML`);
  console.log(`${lang}: ${words(loc)} words, ${loc.sections.length} sections, ${loc.faq.length} faq, ${loc.sources.length} sources`);
}
if (errors.length) {
  errors.forEach((e) => console.error(`error ${e}`));
  process.exit(1);
}
console.log('OK');
