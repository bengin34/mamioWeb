import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Baby,
  Bell,
  ChartColumn,
  Check,
  ChevronRight,
  Clock,
  Download,
  HeartPulse,
  Languages,
  LockKeyhole,
  Milk,
  Moon,
  ShieldCheck,
  Timer,
  Trophy,
} from 'lucide-react';
import {
  APP_STORE_URL,
  GOOGLE_PLAY_URL,
  DOMAIN,
  getRouteAlternates,
  getRouteCanonical,
  getRouteFromPath,
  getSeoPagePath,
  localeKeys,
  locales,
  seoFeaturePages,
  seoPageIds,
  seoPageLangs,
  screenshotFiles,
} from './content';
import {
  blogPostIds,
  blogPosts,
  featureBlogPostIds,
  getBlogPostPath,
} from './blog-content';

const featureIcons = [Milk, Clock, HeartPulse, Bell, ChartColumn, ShieldCheck];
const proofIcons = [Moon, Timer, LockKeyhole, Languages];

/* ─────────────────────────────────────────
   Intersection observer for fade-in anims
───────────────────────────────────────── */
function useReveal(ref, options) {
  useEffect(() => {
    const targets = ref.current?.querySelectorAll?.('.anim') ?? [];
    if (!targets.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, ...(options ?? {}) },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ref, options]);
}

/* ─────────────────────────────────────────
   SEO helpers
───────────────────────────────────────── */
function upsertMeta(selector, attr, value) {
  const node = document.head.querySelector(selector);
  if (node) node.setAttribute(attr, value);
}

function updateAlternates(alternates) {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((node) => node.remove());
  const icon = document.head.querySelector('link[rel="icon"]');
  alternates.forEach((alternate) => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = alternate.lang;
    link.href = alternate.href;
    document.head.insertBefore(link, icon);
  });
}

function updateHead(route) {
  const content = locales[route.lang];
  const page = route.kind === 'seoPage'
    ? seoFeaturePages[route.pageId].locales[route.lang]
    : null;
  const title = page?.metaTitle ?? content.metaTitle;
  const description = page?.metaDescription ?? content.metaDescription;
  const canonical = getRouteCanonical(route);
  document.documentElement.lang = content.htmlLang;
  document.title = title;
  upsertMeta('meta[name="description"]', 'content', description);
  upsertMeta('link[rel="canonical"]', 'href', canonical);
  upsertMeta('meta[property="og:title"]', 'content', title);
  upsertMeta('meta[property="og:description"]', 'content', description);
  upsertMeta('meta[property="og:url"]', 'content', canonical);
  upsertMeta('meta[property="og:locale"]', 'content', content.ogLocale);
  upsertMeta('meta[name="twitter:title"]', 'content', title);
  upsertMeta('meta[name="twitter:description"]', 'content', description);
  updateAlternates(getRouteAlternates(route));

  const sd = document.getElementById('structured-data');
  if (sd) {
    sd.textContent = JSON.stringify(
      createStructuredData(route, title, description, canonical),
      null,
      2,
    );
  }
}

function createStructuredData(route, title, description, canonical) {
  const inLanguage = route.kind === 'seoPage' ? seoPageLangs : localeKeys;
  const software = {
    '@type': 'SoftwareApplication',
    name: 'Mamio',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS, Android',
    description,
    url: canonical,
    image: `${DOMAIN}/assets/og-mamio.png`,
    sameAs: [APP_STORE_URL],
    installUrl: APP_STORE_URL,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
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
        name: title,
        description,
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

function screenshotPath(content, file) {
  return `/assets/screenshots/${content.assetLocale}/${file}.jpg`;
}

/* ─────────────────────────────────────────
   HEADER
───────────────────────────────────────── */
function Header({ content, currentLang, isHome, languageOptions, onLanguageChange }) {
  const homePath = locales[currentLang].path;
  const sectionHref = (section) => (isHome ? `#${section}` : `${homePath}#${section}`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-ink/88 text-white backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          className="flex min-w-0 items-center gap-2.5"
          href={isHome ? '#top' : homePath}
          aria-label="Mamio home"
        >
          <img
            className="h-9 w-9 shrink-0 rounded-xl shadow-md shadow-black/30"
            src="/assets/icon-192.png"
            alt=""
          />
          <span className="text-[1.05rem] font-black tracking-tight">Mamio</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-[0.875rem] font-bold md:flex">
          <a href={sectionHref('features')} className="nav-link">{content.nav.features}</a>
          <a href={sectionHref('screens')} className="nav-link">{content.nav.screens}</a>
          <a href={sectionHref('privacy')} className="nav-link">{content.nav.privacy}</a>
          <a href={sectionHref('pro')} className="nav-link">{content.nav.pro}</a>
        </nav>

        {/* Language switcher (desktop) */}
        <div className="hidden h-9 items-center overflow-hidden rounded-lg border border-white/12 bg-white/6 p-0.5 sm:flex">
          {languageOptions.map((lang) => (
            <button
              key={lang}
              type="button"
              className={`h-8 min-w-[2.4rem] rounded-md px-2 text-xs font-black transition ${
                currentLang === lang
                  ? 'bg-cyan text-ink shadow-sm'
                  : 'text-white/60 hover:bg-white/10 hover:text-white'
              }`}
              onClick={() => onLanguageChange(lang)}
              aria-pressed={currentLang === lang}
            >
              {locales[lang].shortLabel}
            </button>
          ))}
        </div>

        {/* Language switcher (mobile) */}
        <select
          className="fixed left-32 top-[1.125rem] z-[60] h-9 w-20 rounded-lg border border-white/12 bg-ink px-2 text-sm font-black text-white outline-none sm:hidden"
          value={currentLang}
          onChange={(e) => onLanguageChange(e.target.value)}
          aria-label="Language"
        >
          {languageOptions.map((lang) => (
            <option key={lang} value={lang}>
              {locales[lang].shortLabel}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function Hero({ content }) {
  const [heroActive, setHeroActive] = useState(0);
  const ref = useRef(null);
  useReveal(ref);

  useEffect(() => {
    const id = setInterval(
      () => setHeroActive((p) => (p + 1) % screenshotFiles.length),
      3000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[92svh] items-center overflow-hidden bg-ink pt-16 text-white"
    >
      {/* Gradient orbs */}
      <div aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>
      <div className="hero-noise" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        {/* Copy */}
        <div className="max-w-2xl">
          <div className="eyebrow-pill anim">
            <span className="eyebrow-dot" aria-hidden="true" />
            {content.hero.eyebrow}
          </div>

          <h1 className="mt-6 text-[4rem] font-black leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl anim anim-d1">
            Mamio
          </h1>

          <p className="mt-7 max-w-xl text-[1.15rem] leading-8 text-white/68 sm:text-xl anim anim-d2">
            {content.hero.lead}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row anim anim-d3">
            <a
              className="button-primary"
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
            >
              {content.hero.primaryCta}
              <ChevronRight aria-hidden="true" size={18} />
            </a>
            <a
              className="button-secondary"
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noreferrer"
            >
              Google Play
              <ChevronRight aria-hidden="true" size={18} />
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-2 anim anim-d4">
            {content.hero.badges.map((badge) => (
              <span key={badge} className="trust-badge">
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* 3D coverflow — auto-cycling screenshots */}
        <div className="hero-cflow-stage hidden lg:flex anim anim-d2">
          {screenshotFiles.map((file, index) => {
            const offset = wrappedOffset(index, heroActive, screenshotFiles.length);
            if (Math.abs(offset) > 1) return null;
            return (
              <div
                key={file}
                className={`hero-cflow-item${offset === 0 ? ' is-active' : ''}`}
                style={heroCflowStyle(offset)}
              >
                <div className="hero-cflow-phone">
                  <img
                    src={screenshotPath(content, file)}
                    alt={offset === 0 ? content.hero.imageAlt : ''}
                    width="736"
                    height="1600"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PROOF STRIP
───────────────────────────────────────── */
function ProofStrip({ content }) {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="bg-sun px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-4">
        {content.proof.map((item, index) => {
          const Icon = proofIcons[index];
          return (
            <div
              key={item.label}
              className={`proof-card anim anim-d${index + 1}`}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink text-cyan">
                <Icon aria-hidden="true" size={20} />
              </span>
              <div className="min-w-0">
                <p className="text-[1.05rem] font-black leading-snug text-ink">
                  {item.value}
                </p>
                <p className="mt-0.5 text-xs font-bold leading-snug text-ink/52">
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION INTRO
───────────────────────────────────────── */
function SectionIntro({ eyebrow, title, body, align = 'left', dark = false }) {
  return (
    <div className={`mx-auto max-w-3xl ${align === 'center' ? 'text-center' : ''}`}>
      {eyebrow ? (
        <p
          className={`section-eyebrow ${dark ? 'text-cyan/70' : 'text-coral'}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-black leading-tight sm:text-4xl lg:text-5xl ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`mt-5 text-lg leading-8 ${
            dark ? 'text-white/58' : 'text-ink/58'
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

/* ─────────────────────────────────────────
   FEATURES
───────────────────────────────────────── */
function Features({ content }) {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section
      id="features"
      ref={ref}
      className="bg-paper px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="anim">
          <SectionIntro {...content.intro} />
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <article
                key={feature.title}
                className={`feature-card anim anim-d${Math.min(index + 1, 5)}`}
              >
                <div className="feature-icon">
                  <Icon aria-hidden="true" size={22} />
                </div>
                <h3 className="text-[1.0625rem] font-black text-ink">
                  {feature.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-7 text-ink/60">
                  {feature.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SeoFeatureLinks({ content, currentLang }) {
  const ref = useRef(null);
  useReveal(ref);

  if (!content.seoLinks || !seoPageLangs.includes(currentLang)) return null;

  const links = seoPageIds
    .map((pageId) => ({
      id: pageId,
      path: getSeoPagePath(pageId, currentLang),
      page: seoFeaturePages[pageId].locales[currentLang],
    }))
    .filter((item) => item.path && item.page);

  return (
    <section ref={ref} className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="anim">
          <SectionIntro align="center" {...content.seoLinks} />
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {links.map(({ id, path, page }, index) => (
            <a
              key={id}
              href={path}
              className={`seo-link-card anim anim-d${Math.min(index + 1, 5)}`}
            >
              <span className="text-sm font-black text-ink">{page.shortTitle}</span>
              <span className="mt-3 block text-xs font-bold leading-5 text-ink/54">
                {page.metaDescription}
              </span>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-black text-cyan-deep">
                {content.download.cta}
                <ChevronRight aria-hidden="true" size={15} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function getBlogLinks(lang, postIds = blogPostIds) {
  return postIds
    .map((postId) => ({
      id: postId,
      path: getBlogPostPath(postId, lang),
      post: blogPosts[postId]?.locales?.[lang],
    }))
    .filter((item) => item.path && item.post);
}

function BlogGuideCards({ content, links }) {
  return links.map(({ id, path, post }, index) => (
    <a
      key={id}
      href={path}
      className={`guide-link-card anim anim-d${Math.min(index + 1, 5)}`}
    >
      <span className="guide-card-kicker">Mamio Blog</span>
      <span className="text-sm font-black leading-5 text-ink">
        {post.title}
      </span>
      <span className="mt-3 block text-xs font-bold leading-5 text-ink/54">
        {post.metaDescription}
      </span>
      <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-black text-cyan-deep">
        {content.guides.readMore}
        <ChevronRight aria-hidden="true" size={15} />
      </span>
    </a>
  ));
}

function BlogGuideLinks({ content, currentLang }) {
  const ref = useRef(null);
  useReveal(ref);
  const links = getBlogLinks(currentLang);

  if (!content.guides || !links.length) return null;

  return (
    <section ref={ref} className="bg-paper px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="anim">
          <SectionIntro align="center" {...content.guides} />
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <BlogGuideCards content={content} links={links} />
        </div>
      </div>
    </section>
  );
}

function FeaturePage({ homeContent, currentLang, pageId }) {
  const ref = useRef(null);
  useReveal(ref);
  const page = seoFeaturePages[pageId].locales[currentLang];
  const feature = seoFeaturePages[pageId];
  const relatedGuides = getBlogLinks(currentLang, featureBlogPostIds[pageId] ?? []);
  const related = seoPageIds
    .filter((id) => id !== pageId)
    .map((id) => ({
      id,
      path: getSeoPagePath(id, currentLang),
      page: seoFeaturePages[id].locales[currentLang],
    }))
    .filter((item) => item.path && item.page)
    .slice(0, 4);

  return (
    <main ref={ref}>
      <section className="relative isolate overflow-hidden bg-ink px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
        <div aria-hidden="true">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
        </div>
        <div className="hero-noise" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_300px] lg:items-center">
          <div className="max-w-3xl">
            <a
              href={locales[currentLang].path}
              className="inline-flex items-center gap-2 text-sm font-black text-cyan/72 transition hover:text-cyan"
            >
              Mamio
              <ChevronRight aria-hidden="true" size={16} />
            </a>
            <p className="section-eyebrow mt-8 text-cyan/70 anim">
              {page.eyebrow}
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl anim anim-d1">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/64 sm:text-xl anim anim-d2">
              {page.lead}
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3 anim anim-d3">
              {page.bullets.map((bullet) => (
                <li key={bullet} className="feature-bullet">
                  <Check aria-hidden="true" size={17} />
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row anim anim-d4">
              <a
                className="button-primary"
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
              >
                {homeContent.download.cta}
                <ChevronRight aria-hidden="true" size={18} />
              </a>
              <a className="button-secondary" href="#details">
                {homeContent.nav.features}
              </a>
            </div>
          </div>

          <div className="phone-frame-wrap hidden lg:flex anim anim-d2">
            <div className="phone-frame">
              <img
                src={screenshotPath(homeContent, feature.image)}
                alt={page.imageAlt}
                width="736"
                height="1600"
                loading="eager"
                decoding="async"
                className="hero-screen-active"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="details" className="bg-paper px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {page.sections.map((section, index) => (
            <article
              key={section.title}
              className={`feature-card anim anim-d${Math.min(index + 1, 5)}`}
            >
              <div className="feature-icon">
                <Check aria-hidden="true" size={22} />
              </div>
              <h2 className="text-xl font-black leading-snug text-ink">
                {section.title}
              </h2>
              <p className="mt-4 text-[0.9375rem] leading-7 text-ink/60">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="anim">
            <p className="section-eyebrow text-coral">FAQ</p>
            <h2 className="text-3xl font-black leading-tight text-ink sm:text-4xl">
              {page.shortTitle}
            </h2>
          </div>
          <div className="grid gap-4">
            {page.faq.map((item, index) => (
              <article
                key={item.question}
                className={`faq-card anim anim-d${Math.min(index + 1, 5)}`}
              >
                <h3 className="text-base font-black leading-6 text-ink">
                  {item.question}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-7 text-ink/60">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {relatedGuides.length ? (
        <section className="bg-paper px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="anim">
              <SectionIntro
                align="center"
                eyebrow={homeContent.guides.eyebrow}
                title={homeContent.guides.relatedTitle}
                body={homeContent.guides.relatedBody}
              />
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <BlogGuideCards content={homeContent} links={relatedGuides} />
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-paper px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {related.map(({ id, path, page: relatedPage }, index) => (
              <a
                key={id}
                href={path}
                className={`seo-link-card anim anim-d${Math.min(index + 1, 5)}`}
              >
                <span className="text-sm font-black text-ink">{relatedPage.shortTitle}</span>
                <span className="mt-3 block text-xs font-bold leading-5 text-ink/54">
                  {relatedPage.metaDescription}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <DownloadBlock content={homeContent} />
    </main>
  );
}

/* ─────────────────────────────────────────
   HERO COVERFLOW helpers
───────────────────────────────────────── */
function wrappedOffset(index, active, count) {
  let d = index - active;
  if (d > count / 2) d -= count;
  if (d < -count / 2) d += count;
  return d;
}

function heroCflowStyle(offset) {
  if (offset === 0) {
    return { transform: 'translateX(0px) rotateY(0deg) scale(1)', opacity: 1, zIndex: 10 };
  }
  const dir = offset < 0 ? -1 : 1;
  return {
    transform: `translateX(${dir * 200}px) rotateY(${-dir * 40}deg) scale(0.76)`,
    opacity: 0.52,
    zIndex: 5,
  };
}

function Screens({ content }) {
  const [active, setActive] = useState(0);
  const count = screenshotFiles.length;
  const ref = useRef(null);
  const resumeTimer = useRef(null);
  const [paused, setPaused] = useState(false);
  useReveal(ref);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((p) => (p + 1) % count), 4000);
    return () => clearInterval(id);
  }, [count, paused]);

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  function goTo(index) {
    setActive(index);
    setPaused(true);
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), 8000);
  }

  const currentScreen = content.screens[active];

  return (
    <section
      id="screens"
      ref={ref}
      className="overflow-hidden bg-ink py-20 text-white lg:py-28"
    >
      {/* Section heading */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="anim">
          <p className="section-eyebrow text-cyan/65 text-center">
            {content.nav.screens}
          </p>
        </div>
      </div>

      {/* Sliding track */}
      <div className="screens-viewport mt-12">
        <div className="screens-track" style={{ '--active': active }}>
          {screenshotFiles.map((file, index) => {
            const screen = content.screens[index];
            return (
              <div
                key={file}
                className={`screen-slide${index === active ? ' is-active' : ''}`}
                onClick={() => index !== active && goTo(index)}
                aria-label={screen.title}
              >
                <img
                  src={screenshotPath(content, file)}
                  alt={`${screen.title}. ${screen.body}`}
                  width="736"
                  height="1600"
                  loading={index < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Caption */}
      <div className="screen-caption mx-auto mt-8 max-w-md px-4">
        <h3 className="text-center text-base font-black text-white">
          {currentScreen.title}
        </h3>
        <p className="mt-2 text-center text-sm leading-6 text-white/52">
          {currentScreen.body}
        </p>
      </div>

      {/* Dot indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {screenshotFiles.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`carousel-dot${i === active ? ' is-active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={content.screens[i].title}
          />
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PRIVACY
───────────────────────────────────────── */
function Privacy({ content }) {
  const icons = [ShieldCheck, LockKeyhole, Download];
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section
      id="privacy"
      ref={ref}
      className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="anim">
          <SectionIntro {...content.privacy} />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {content.privacy.points.map((point, index) => {
            const Icon = icons[index];
            return (
              <div
                key={point}
                className={`privacy-point anim anim-d${index + 1}`}
              >
                <div className="privacy-icon">
                  <Icon aria-hidden="true" size={22} />
                </div>
                <p className="mt-4 text-[0.875rem] font-black leading-6 text-ink">
                  {point}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PLANS
───────────────────────────────────────── */
function Plans({ content }) {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section
      id="pro"
      ref={ref}
      className="bg-paper px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="anim">
          <SectionIntro align="center" {...content.plans} />
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* Free */}
          <article className="plan-free anim anim-d2">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-rose/10 text-rose">
                <Baby aria-hidden="true" size={22} />
              </span>
              <h3 className="text-2xl font-black text-ink">
                {content.plans.freeTitle}
              </h3>
            </div>
            <ul className="mt-7 space-y-4">
              {content.plans.free.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[0.9375rem] leading-7 text-ink/62"
                >
                  <Check
                    className="mt-[0.2rem] shrink-0 text-cyan-deep"
                    aria-hidden="true"
                    size={18}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          {/* Pro */}
          <article className="plan-pro anim anim-d3">
            <div className="relative z-10 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan/14 text-cyan">
                <Trophy aria-hidden="true" size={22} />
              </span>
              <h3 className="text-2xl font-black text-white">
                {content.plans.proTitle}
              </h3>
              <span className="plan-badge ml-auto">Pro</span>
            </div>
            <ul className="relative z-10 mt-7 space-y-4">
              {content.plans.pro.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[0.9375rem] leading-7 text-white/70"
                >
                  <Check
                    className="mt-[0.2rem] shrink-0 text-cyan"
                    aria-hidden="true"
                    size={18}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   LANGUAGES
───────────────────────────────────────── */
function LanguagesBlock({ content, currentLang, onLanguageChange }) {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section
      ref={ref}
      className="bg-white px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div className="anim">
          <p className="section-eyebrow text-coral">{content.nav.features}</p>
          <h2 className="text-3xl font-black text-ink sm:text-4xl">
            {content.languages.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-ink/58">
            {content.languages.body}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 lg:justify-end anim anim-d2">
          {localeKeys.map((lang) => (
            <button
              key={lang}
              type="button"
              className={`rounded-xl border px-5 py-3 text-sm font-black transition ${
                currentLang === lang
                  ? 'border-ink bg-ink text-white shadow-lg shadow-ink/12'
                  : 'border-ink/10 bg-paper text-ink hover:border-cyan-deep hover:bg-cyan-pale'
              }`}
              onClick={() => onLanguageChange(lang)}
            >
              {locales[lang].label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   DOWNLOAD CTA
───────────────────────────────────────── */
function DownloadBlock({ content }) {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="download-bg px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32">
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="section-eyebrow text-cyan/65 anim">
          {content.download.eyebrow}
        </p>
        <h2 className="mt-2 text-4xl font-black leading-tight sm:text-5xl lg:text-[3.25rem] anim anim-d1">
          {content.download.title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/58 anim anim-d2">
          {content.download.body}
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center anim anim-d3">
          <a
            className="button-download text-base"
            href={APP_STORE_URL}
            target="_blank"
            rel="noreferrer"
          >
            {content.download.cta}
            <ChevronRight aria-hidden="true" size={20} />
          </a>
          <a
            className="button-download text-base"
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noreferrer"
          >
            Google Play
            <ChevronRight aria-hidden="true" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */
function Footer({ content }) {
  const year = new Date().getFullYear();
  const showGermanLegal = content.htmlLang === 'de';

  return (
    <footer className="bg-ink px-4 pb-10 pt-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-[1fr_auto_auto] lg:gap-20">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                className="h-10 w-10 rounded-xl shadow shadow-black/30"
                src="/assets/icon-192.png"
                alt="Mamio"
              />
              <div>
                <p className="font-black text-white">Mamio</p>
                <p className="text-sm text-white/48">{content.footer.tagline}</p>
              </div>
            </div>
            {showGermanLegal ? (
              <p className="mt-6 text-sm leading-7 text-white/32">
                &copy; {year} Mendi Tekstilwaren<br />
                Fauststrasse 44a · 81827 München
              </p>
            ) : (
              <p className="mt-6 text-sm leading-7 text-white/32">
                &copy; {year} Mamio
              </p>
            )}
          </div>

          {/* App */}
          <div>
            <p className="mb-4 text-[0.7rem] font-black uppercase tracking-[0.1em] text-white/38">
              App
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                App Store
              </a>
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Google Play
              </a>
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                className="footer-link"
              >
                {content.footer.eula}
              </a>
              <a
                href="https://mamio-baby-tracker.com"
                className="footer-link"
              >
                mamio-baby-tracker.com
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="mb-4 text-[0.7rem] font-black uppercase tracking-[0.1em] text-white/38">
              Legal
            </p>
            <div className="flex flex-col gap-3">
              <a href="/privacy/" className="footer-link">Privacy Policy</a>
              <a href="/terms/" className="footer-link">Terms of Use</a>
              <a href="/support/" className="footer-link">Support</a>
              {showGermanLegal ? (
                <a href="/impressum/" className="footer-link">Impressum</a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <p className="text-[0.8rem] text-white/28">
          {showGermanLegal
            ? 'Simple. Quiet. Trustworthy. — Made with care in Munich.'
            : content.footer.tagline}
        </p>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────
   APP ROOT
───────────────────────────────────────── */
export default function App() {
  const [route, setRoute] = useState(() => getRouteFromPath(window.location.pathname));
  const currentLang = route.lang;
  const content = useMemo(() => locales[currentLang], [currentLang]);
  const isHome = route.kind === 'home';
  const languageOptions = isHome ? localeKeys : seoPageLangs;

  useEffect(() => {
    const onPop = () => setRoute(getRouteFromPath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    updateHead(route);
  }, [route]);

  function handleLanguageChange(nextLang) {
    const nextPath = route.kind === 'seoPage'
      ? getSeoPagePath(route.pageId, nextLang) ?? locales[nextLang].path
      : locales[nextLang].path;
    window.history.pushState({}, '', nextPath);
    setRoute(getRouteFromPath(nextPath));
    window.scrollTo({ top: 0 });
  }

  return (
    <>
      <Header
        content={content}
        currentLang={currentLang}
        isHome={isHome}
        languageOptions={languageOptions}
        onLanguageChange={handleLanguageChange}
      />
      {isHome ? (
        <main>
          <Hero content={content} />
          <ProofStrip content={content} />
          <Features content={content} />
          <SeoFeatureLinks content={content} currentLang={currentLang} />
          <BlogGuideLinks content={content} currentLang={currentLang} />
          <Screens content={content} />
          <Privacy content={content} />
          <Plans content={content} />
          <LanguagesBlock
            content={content}
            currentLang={currentLang}
            onLanguageChange={handleLanguageChange}
          />
          <DownloadBlock content={content} />
        </main>
      ) : (
        <FeaturePage
          homeContent={content}
          currentLang={currentLang}
          pageId={route.pageId}
        />
      )}
      <Footer content={content} />
    </>
  );
}
