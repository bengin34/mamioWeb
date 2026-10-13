// One entry per translated language: { home, seo, blog }.
// scripts/validate-locales.mjs checks every entry against the English source.
import esHome from './es/home.js';
import esSeo from './es/seo.js';
import esBlog1 from './es/blog-1.js';
import esBlog2 from './es/blog-2.js';
import frHome from './fr/home.js';
import frSeo from './fr/seo.js';
import frBlog1 from './fr/blog-1.js';
import frBlog2 from './fr/blog-2.js';
import itHome from './it/home.js';
import itSeo from './it/seo.js';
import itBlog1 from './it/blog-1.js';
import itBlog2 from './it/blog-2.js';
import ptHome from './pt/home.js';
import ptSeo from './pt/seo.js';
import ptBlog1 from './pt/blog-1.js';
import ptBlog2 from './pt/blog-2.js';
import pt_brHome from './pt-br/home.js';
import pt_brSeo from './pt-br/seo.js';
import pt_brBlog1 from './pt-br/blog-1.js';
import pt_brBlog2 from './pt-br/blog-2.js';
import nlHome from './nl/home.js';
import nlSeo from './nl/seo.js';
import nlBlog1 from './nl/blog-1.js';
import nlBlog2 from './nl/blog-2.js';
import svHome from './sv/home.js';
import svSeo from './sv/seo.js';
import svBlog1 from './sv/blog-1.js';
import svBlog2 from './sv/blog-2.js';
import plHome from './pl/home.js';
import plSeo from './pl/seo.js';
import plBlog1 from './pl/blog-1.js';
import plBlog2 from './pl/blog-2.js';
import csHome from './cs/home.js';
import csSeo from './cs/seo.js';
import csBlog1 from './cs/blog-1.js';
import csBlog2 from './cs/blog-2.js';
import roHome from './ro/home.js';
import roSeo from './ro/seo.js';
import roBlog1 from './ro/blog-1.js';
import roBlog2 from './ro/blog-2.js';
import elHome from './el/home.js';
import elSeo from './el/seo.js';
import elBlog1 from './el/blog-1.js';
import elBlog2 from './el/blog-2.js';
import ruHome from './ru/home.js';
import ruSeo from './ru/seo.js';
import ruBlog1 from './ru/blog-1.js';
import ruBlog2 from './ru/blog-2.js';
import ukHome from './uk/home.js';
import ukSeo from './uk/seo.js';
import ukBlog1 from './uk/blog-1.js';
import ukBlog2 from './uk/blog-2.js';
import arHome from './ar/home.js';
import arSeo from './ar/seo.js';
import arBlog1 from './ar/blog-1.js';
import arBlog2 from './ar/blog-2.js';
import heHome from './he/home.js';
import heSeo from './he/seo.js';
import heBlog1 from './he/blog-1.js';
import heBlog2 from './he/blog-2.js';
import hiHome from './hi/home.js';
import hiSeo from './hi/seo.js';
import hiBlog1 from './hi/blog-1.js';
import hiBlog2 from './hi/blog-2.js';
import bnHome from './bn/home.js';
import bnSeo from './bn/seo.js';
import bnBlog1 from './bn/blog-1.js';
import bnBlog2 from './bn/blog-2.js';
import thHome from './th/home.js';
import thSeo from './th/seo.js';
import thBlog1 from './th/blog-1.js';
import thBlog2 from './th/blog-2.js';
import viHome from './vi/home.js';
import viSeo from './vi/seo.js';
import viBlog1 from './vi/blog-1.js';
import viBlog2 from './vi/blog-2.js';
import idHome from './id/home.js';
import idSeo from './id/seo.js';
import idBlog1 from './id/blog-1.js';
import idBlog2 from './id/blog-2.js';
import swHome from './sw/home.js';
import swSeo from './sw/seo.js';
import swBlog1 from './sw/blog-1.js';
import swBlog2 from './sw/blog-2.js';
import jaHome from './ja/home.js';
import jaSeo from './ja/seo.js';
import jaBlog1 from './ja/blog-1.js';
import jaBlog2 from './ja/blog-2.js';
import koHome from './ko/home.js';
import koSeo from './ko/seo.js';
import koBlog1 from './ko/blog-1.js';
import koBlog2 from './ko/blog-2.js';
import zh_hansHome from './zh-hans/home.js';
import zh_hansSeo from './zh-hans/seo.js';
import zh_hansBlog1 from './zh-hans/blog-1.js';
import zh_hansBlog2 from './zh-hans/blog-2.js';
import zh_hantHome from './zh-hant/home.js';
import zh_hantSeo from './zh-hant/seo.js';
import zh_hantBlog1 from './zh-hant/blog-1.js';
import zh_hantBlog2 from './zh-hant/blog-2.js';

export const extraLocales = {
  es: { home: esHome.home, seo: esSeo, blog: { ...esBlog1, ...esBlog2 } },
  fr: { home: frHome.home, seo: frSeo, blog: { ...frBlog1, ...frBlog2 } },
  it: { home: itHome.home, seo: itSeo, blog: { ...itBlog1, ...itBlog2 } },
  pt: { home: ptHome.home, seo: ptSeo, blog: { ...ptBlog1, ...ptBlog2 } },
  'pt-br': { home: pt_brHome.home, seo: pt_brSeo, blog: { ...pt_brBlog1, ...pt_brBlog2 } },
  nl: { home: nlHome.home, seo: nlSeo, blog: { ...nlBlog1, ...nlBlog2 } },
  sv: { home: svHome.home, seo: svSeo, blog: { ...svBlog1, ...svBlog2 } },
  pl: { home: plHome.home, seo: plSeo, blog: { ...plBlog1, ...plBlog2 } },
  cs: { home: csHome.home, seo: csSeo, blog: { ...csBlog1, ...csBlog2 } },
  ro: { home: roHome.home, seo: roSeo, blog: { ...roBlog1, ...roBlog2 } },
  el: { home: elHome.home, seo: elSeo, blog: { ...elBlog1, ...elBlog2 } },
  ru: { home: ruHome.home, seo: ruSeo, blog: { ...ruBlog1, ...ruBlog2 } },
  uk: { home: ukHome.home, seo: ukSeo, blog: { ...ukBlog1, ...ukBlog2 } },
  ar: { home: arHome.home, seo: arSeo, blog: { ...arBlog1, ...arBlog2 } },
  he: { home: heHome.home, seo: heSeo, blog: { ...heBlog1, ...heBlog2 } },
  hi: { home: hiHome.home, seo: hiSeo, blog: { ...hiBlog1, ...hiBlog2 } },
  bn: { home: bnHome.home, seo: bnSeo, blog: { ...bnBlog1, ...bnBlog2 } },
  th: { home: thHome.home, seo: thSeo, blog: { ...thBlog1, ...thBlog2 } },
  vi: { home: viHome.home, seo: viSeo, blog: { ...viBlog1, ...viBlog2 } },
  id: { home: idHome.home, seo: idSeo, blog: { ...idBlog1, ...idBlog2 } },
  sw: { home: swHome.home, seo: swSeo, blog: { ...swBlog1, ...swBlog2 } },
  ja: { home: jaHome.home, seo: jaSeo, blog: { ...jaBlog1, ...jaBlog2 } },
  ko: { home: koHome.home, seo: koSeo, blog: { ...koBlog1, ...koBlog2 } },
  'zh-hans': { home: zh_hansHome.home, seo: zh_hansSeo, blog: { ...zh_hansBlog1, ...zh_hansBlog2 } },
  'zh-hant': { home: zh_hantHome.home, seo: zh_hantSeo, blog: { ...zh_hantBlog1, ...zh_hantBlog2 } },
};
