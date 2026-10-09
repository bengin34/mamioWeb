// Single source of truth for every site language. `code` is the URL segment
// (lowercase); `hreflang`/`htmlLang` use the BCP 47 casing search engines expect.
// The first three are authored inline in content.js / blog-content.js; the rest
// live in src/locales/<code>/ and are merged in at import time.

export const localeRegistry = [
  { code: 'en', label: 'English', shortLabel: 'EN', hreflang: 'en', ogLocale: 'en_US', assetLocale: 'en-US', dir: 'ltr', inline: true },
  { code: 'de', label: 'Deutsch', shortLabel: 'DE', hreflang: 'de', ogLocale: 'de_DE', assetLocale: 'de-DE', dir: 'ltr', inline: true },
  { code: 'tr', label: 'Türkçe', shortLabel: 'TR', hreflang: 'tr', ogLocale: 'tr_TR', assetLocale: 'tr', dir: 'ltr', inline: true },
  { code: 'es', label: 'Español', shortLabel: 'ES', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr' },
  { code: 'fr', label: 'Français', shortLabel: 'FR', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr' },
  { code: 'it', label: 'Italiano', shortLabel: 'IT', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr' },
  { code: 'pt', label: 'Português', shortLabel: 'PT', hreflang: 'pt', ogLocale: 'pt_PT', dir: 'ltr' },
  { code: 'pt-br', label: 'Português (Brasil)', shortLabel: 'PT-BR', hreflang: 'pt-BR', ogLocale: 'pt_BR', dir: 'ltr' },
  { code: 'nl', label: 'Nederlands', shortLabel: 'NL', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr' },
  { code: 'sv', label: 'Svenska', shortLabel: 'SV', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr' },
  { code: 'pl', label: 'Polski', shortLabel: 'PL', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr' },
  { code: 'cs', label: 'Čeština', shortLabel: 'CS', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr' },
  { code: 'ro', label: 'Română', shortLabel: 'RO', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr' },
  { code: 'el', label: 'Ελληνικά', shortLabel: 'EL', hreflang: 'el', ogLocale: 'el_GR', dir: 'ltr' },
  { code: 'ru', label: 'Русский', shortLabel: 'RU', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr' },
  { code: 'uk', label: 'Українська', shortLabel: 'UK', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr' },
  { code: 'ar', label: 'العربية', shortLabel: 'AR', hreflang: 'ar', ogLocale: 'ar_AR', dir: 'rtl' },
  { code: 'he', label: 'עברית', shortLabel: 'HE', hreflang: 'he', ogLocale: 'he_IL', dir: 'rtl' },
  { code: 'hi', label: 'हिन्दी', shortLabel: 'HI', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr' },
  { code: 'bn', label: 'বাংলা', shortLabel: 'BN', hreflang: 'bn', ogLocale: 'bn_BD', dir: 'ltr' },
  { code: 'th', label: 'ไทย', shortLabel: 'TH', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr' },
  { code: 'vi', label: 'Tiếng Việt', shortLabel: 'VI', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr' },
  { code: 'id', label: 'Bahasa Indonesia', shortLabel: 'ID', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr' },
  { code: 'sw', label: 'Kiswahili', shortLabel: 'SW', hreflang: 'sw', ogLocale: 'sw_KE', dir: 'ltr' },
  { code: 'ja', label: '日本語', shortLabel: 'JA', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr' },
  { code: 'ko', label: '한국어', shortLabel: 'KO', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr' },
  { code: 'zh-hans', label: '简体中文', shortLabel: 'ZH', hreflang: 'zh-Hans', ogLocale: 'zh_CN', dir: 'ltr' },
  { code: 'zh-hant', label: '繁體中文', shortLabel: 'ZH-TW', hreflang: 'zh-Hant', ogLocale: 'zh_TW', dir: 'ltr' },
];

export const localeCodes = localeRegistry.map((entry) => entry.code);
export const extraLocaleCodes = localeRegistry.filter((entry) => !entry.inline).map((entry) => entry.code);
export const localeLabelList = localeRegistry.map((entry) => entry.label);
export const getLocaleMeta = (code) => localeRegistry.find((entry) => entry.code === code);
