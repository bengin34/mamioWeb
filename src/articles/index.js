import babyFirstDentistVisit from './baby-first-dentist-visit.js';
import babyMassageGuide from './baby-massage-guide.js';
import babyMilestonesByAge from './baby-milestones-by-age.js';
import brushingBabyTeethFluorideByAge from './brushing-baby-teeth-fluoride-by-age.js';
import firstWordsLanguageDevelopment from './first-words-language-development.js';
import growthPercentilesExplained from './growth-percentiles-explained.js';
import teethingFeverOrIllness from './teething-fever-or-illness.js';
import teethingRemediesWhatToAvoid from './teething-remedies-what-to-avoid.js';
import teethingTimeline from './teething-timeline.js';
import twinsFeedingSleepRoutine from './twins-feeding-sleep-routine.js';

// Researched long-form guides. Each article lives in its own file and carries
// every language it is published in (en, de, fr, pt-br, tr) plus its sources.
// They are merged into blogPosts; languages without a translation simply have
// no URL, and hreflang/sitemap/related links skip them.
//
// Article shape (see scripts/validate-locales.mjs for the checks):
// {
//   relatedPageId,                     // seoFeaturePages id for the tracker CTA
//   slugs: { en, de, fr, 'pt-br', tr },
//   locales: {
//     <lang>: {
//       metaTitle, metaDescription, title, date, reviewed, intro,
//       sections: [{ title, body, list? }],   // body: paragraphs split by a blank line
//       faq: [{ question, answer }],
//       ctaText,
//       sources: [{ publisher, title, url }], // official health bodies only
//     },
//   },
// }

export const articleLangs = ['en', 'de', 'fr', 'pt-br', 'tr'];

export const sourceLabels = {
  en: { sources: 'Sources', reviewed: 'Last reviewed', author: 'Mamio Editorial Team' },
  de: { sources: 'Quellen', reviewed: 'Zuletzt geprüft', author: 'Mamio-Redaktion' },
  fr: { sources: 'Sources', reviewed: 'Dernière vérification', author: 'Équipe éditoriale Mamio' },
  'pt-br': { sources: 'Fontes', reviewed: 'Última revisão', author: 'Equipe editorial Mamio' },
  tr: { sources: 'Kaynaklar', reviewed: 'Son inceleme', author: 'Mamio Editör Ekibi' },
};

export const articles = {
  'baby-first-dentist-visit': babyFirstDentistVisit,
  'baby-massage-guide': babyMassageGuide,
  'baby-milestones-by-age': babyMilestonesByAge,
  'brushing-baby-teeth-fluoride-by-age': brushingBabyTeethFluorideByAge,
  'first-words-language-development': firstWordsLanguageDevelopment,
  'growth-percentiles-explained': growthPercentilesExplained,
  'teething-fever-or-illness': teethingFeverOrIllness,
  'teething-remedies-what-to-avoid': teethingRemediesWhatToAvoid,
  'teething-timeline': teethingTimeline,
  'twins-feeding-sleep-routine': twinsFeedingSleepRoutine,
};
