// Structural check of src/locales/<code>/*.js against the English source.
//   node scripts/validate-locales.mjs [code ...]   (default: every directory in src/locales)
import { readdir, access } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { locales, seoFeaturePages } from '../src/content.js';
import { blogPosts } from '../src/blog-content.js';
import { extraLocaleCodes } from '../src/locale-registry.js';
import { articles, articleLangs, sourceLabels } from '../src/articles/index.js';

const root = resolve('src/locales');
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const REGISTRY_FIELDS = ['label', 'shortLabel', 'htmlLang', 'hreflang', 'assetLocale', 'ogLocale', 'path', 'dir'];
const errors = [];
const warnings = [];

function compareShape(expected, actual, path, report) {
  if (Array.isArray(expected)) {
    if (!Array.isArray(actual)) return report(`${path}: expected array`);
    if (expected.length !== actual.length) report(`${path}: expected ${expected.length} items, got ${actual.length}`);
    expected.forEach((item, i) => {
      if (actual[i] !== undefined) compareShape(item, actual[i], `${path}[${i}]`, report);
    });
  } else if (expected && typeof expected === 'object') {
    if (!actual || typeof actual !== 'object' || Array.isArray(actual)) return report(`${path}: expected object`);
    for (const key of Object.keys(expected)) {
      if (!(key in actual)) report(`${path}.${key}: missing`);
      else compareShape(expected[key], actual[key], `${path}.${key}`, report);
    }
    for (const key of Object.keys(actual)) {
      if (!(key in expected)) report(`${path}.${key}: unexpected key`);
    }
  } else if (typeof expected === 'string') {
    if (typeof actual !== 'string' || !actual.trim()) report(`${path}: expected non-empty string`);
  } else if (typeof actual !== typeof expected) {
    report(`${path}: wrong type`);
  }
}

async function load(code, file) {
  const full = resolve(root, code, file);
  try {
    await access(full);
  } catch {
    return null;
  }
  return (await import(pathToFileURL(full).href)).default;
}

async function loadBlog(code) {
  const merged = {};
  for (const file of ['blog-1.js', 'blog-2.js']) {
    const part = await load(code, file);
    if (part) Object.assign(merged, part);
  }
  return merged;
}

async function validate(code) {
  const err = (msg) => errors.push(`[${code}] ${msg}`);
  const warn = (msg) => warnings.push(`[${code}] ${msg}`);

  const homeFile = await load(code, 'home.js');
  const seo = await load(code, 'seo.js');
  const blog = await loadBlog(code);
  if (!homeFile) return err('home.js missing');
  if (!seo) return err('seo.js missing');

  const enHome = Object.fromEntries(Object.entries(locales.en).filter(([k]) => !REGISTRY_FIELDS.includes(k)));
  compareShape(enHome, homeFile.home, 'home', err);
  if (!homeFile.home?.languages?.body?.includes('{languages}')) err('home.languages.body must contain {languages}');
  if (homeFile.home?.metaTitle?.length > 75) warn(`home.metaTitle is ${homeFile.home.metaTitle.length} chars`);
  if (homeFile.home?.metaDescription?.length > 175) warn(`home.metaDescription is ${homeFile.home.metaDescription.length} chars`);

  const slugs = new Set();
  const checkSlug = (where, slug) => {
    if (!SLUG.test(slug ?? '')) err(`${where}.slug "${slug}" must be lowercase ASCII words joined by hyphens`);
    if (slugs.has(slug)) err(`${where}.slug "${slug}" duplicates another slug`);
    slugs.add(slug);
  };

  for (const [id, page] of Object.entries(seoFeaturePages)) {
    const expected = { slug: page.slugs.en, ...page.locales.en };
    const actual = seo[id];
    if (!actual) { err(`seo.${id} missing`); continue; }
    compareShape(expected, actual, `seo.${id}`, err);
    checkSlug(`seo.${id}`, actual.slug);
    if (actual.metaTitle?.length > 75) warn(`seo.${id}.metaTitle is ${actual.metaTitle.length} chars`);
    if (actual.metaDescription?.length > 175) warn(`seo.${id}.metaDescription is ${actual.metaDescription.length} chars`);
  }
  for (const id of Object.keys(seo)) if (!seoFeaturePages[id]) err(`seo.${id} is not a known page`);

  for (const [id, post] of Object.entries(blogPosts)) {
    if (articles[id]) continue; // researched articles carry their own languages; checked below
    // Beikost/YMYL guides cite one country's health authorities and are published
    // per country, so they are deliberately not present in every language.
    if (!post.locales.en) continue;
    const expected = { slug: post.slugs.en, ...post.locales.en };
    const actual = blog[id];
    if (!actual) { err(`blog.${id} missing`); continue; }
    compareShape(expected, actual, `blog.${id}`, err);
    checkSlug(`blog.${id}`, actual.slug);
    if (actual.date !== post.locales.en.date) err(`blog.${id}.date must equal ${post.locales.en.date}`);
    if (actual.metaTitle?.length > 75) warn(`blog.${id}.metaTitle is ${actual.metaTitle.length} chars`);
    if (actual.metaDescription?.length > 175) warn(`blog.${id}.metaDescription is ${actual.metaDescription.length} chars`);
  }
  for (const id of Object.keys(blog)) if (!blogPosts[id]) err(`blog.${id} is not a known post`);
}

// Researched articles: every language in articleLangs, same section count, real sources.
const ARTICLE_FIELDS = ['metaTitle', 'metaDescription', 'title', 'date', 'reviewed', 'intro', 'ctaText'];
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const allSlugs = new Map();
for (const post of Object.values(blogPosts)) {
  for (const [lang, slug] of Object.entries(post.slugs)) allSlugs.set(`${lang}/${slug}`, (allSlugs.get(`${lang}/${slug}`) ?? 0) + 1);
}

function validateArticle(id, article) {
  const err = (msg) => errors.push(`[article ${id}] ${msg}`);
  const warn = (msg) => warnings.push(`[article ${id}] ${msg}`);
  if (!seoFeaturePages[article.relatedPageId]) err(`relatedPageId "${article.relatedPageId}" is not a known page`);
  const en = article.locales.en;
  for (const lang of articleLangs) {
    const loc = article.locales[lang];
    const slug = article.slugs[lang];
    if (!loc) { err(`${lang} missing`); continue; }
    if (!SLUG.test(slug ?? '')) err(`${lang}.slug "${slug}" must be lowercase ASCII words joined by hyphens`);
    if (allSlugs.get(`${lang}/${slug}`) > 1) err(`${lang}.slug "${slug}" duplicates another post`);
    for (const field of ARTICLE_FIELDS) {
      if (typeof loc[field] !== 'string' || !loc[field].trim()) err(`${lang}.${field} must be a non-empty string`);
    }
    if (!ISO_DATE.test(loc.date ?? '') || loc.date !== en?.date) err(`${lang}.date must equal en.date (${en?.date})`);
    if (!ISO_DATE.test(loc.reviewed ?? '')) err(`${lang}.reviewed must be YYYY-MM-DD`);
    if (!Array.isArray(loc.sections) || loc.sections.length !== en?.sections?.length) err(`${lang}.sections must have ${en?.sections?.length} items`);
    loc.sections?.forEach((section, i) => {
      if (!section.title?.trim() || !section.body?.trim()) err(`${lang}.sections[${i}] needs title and body`);
      if (section.list && (!Array.isArray(section.list) || section.list.some((item) => !item?.trim()))) err(`${lang}.sections[${i}].list must be non-empty strings`);
    });
    if (!Array.isArray(loc.faq) || loc.faq.length < 3) err(`${lang}.faq needs at least 3 items`);
    loc.faq?.forEach((item, i) => {
      if (!item.question?.trim() || !item.answer?.trim()) err(`${lang}.faq[${i}] needs question and answer`);
    });
    if (!Array.isArray(loc.sources) || loc.sources.length < 3) err(`${lang}.sources needs at least 3 entries`);
    loc.sources?.forEach((source, i) => {
      if (!source.publisher?.trim() || !source.title?.trim()) err(`${lang}.sources[${i}] needs publisher and title`);
      if (!/^https:\/\/[^\s]+$/.test(source.url ?? '')) err(`${lang}.sources[${i}].url must be https`);
    });
    if (!sourceLabels[lang]) err(`no sourceLabels for ${lang}`);
    if (loc.metaTitle?.length > 75) warn(`${lang}.metaTitle is ${loc.metaTitle.length} chars`);
    if (loc.metaDescription?.length > 175) warn(`${lang}.metaDescription is ${loc.metaDescription.length} chars`);
  }
  for (const lang of Object.keys(article.locales)) if (!articleLangs.includes(lang)) err(`unexpected language ${lang}`);
}

for (const [id, article] of Object.entries(articles)) validateArticle(id, article);

const requested = process.argv.slice(2);
const codes = requested.length
  ? requested
  : (await readdir(root, { withFileTypes: true })).filter((d) => d.isDirectory()).map((d) => d.name);

for (const code of codes) {
  if (!extraLocaleCodes.includes(code)) { errors.push(`[${code}] not a registered extra locale`); continue; }
  await validate(code);
}

warnings.forEach((w) => console.warn(`warn  ${w}`));
errors.forEach((e) => console.error(`error ${e}`));
console.log(`${codes.length} locale(s) checked: ${errors.length} error(s), ${warnings.length} warning(s)`);
process.exit(errors.length ? 1 : 0);
