// Structural check of src/locales/<code>/*.js against the English source.
//   node scripts/validate-locales.mjs [code ...]   (default: every directory in src/locales)
import { readdir, access } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { locales, seoFeaturePages } from '../src/content.js';
import { blogPosts } from '../src/blog-content.js';
import { extraLocaleCodes } from '../src/locale-registry.js';

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
