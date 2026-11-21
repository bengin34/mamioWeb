import babyFeverWhenToCallDoctor from './baby-fever-when-to-call-doctor.js';
import babySpitUpVsVomitingReflux from './baby-spit-up-vs-vomiting-reflux.js';
import howMuchSleepBabyNeedsByAge from './how-much-sleep-baby-needs-by-age.js';
import babyFirstDentistVisit from './baby-first-dentist-visit.js';
import babyLedWeaningVsPurees from './baby-led-weaning-vs-purees.js';
import babyMassageGuide from './baby-massage-guide.js';
import babyMilestonesByAge from './baby-milestones-by-age.js';
import bottleAmountsByAge from './bottle-amounts-by-age.js';
import brushingBabyTeethFluorideByAge from './brushing-baby-teeth-fluoride-by-age.js';
import firstWordsLanguageDevelopment from './first-words-language-development.js';
import growthPercentilesExplained from './growth-percentiles-explained.js';
import howLongBreastfeedingSession from './how-long-breastfeeding-session.js';
import howToPottyTrainToddler from './how-to-potty-train-toddler.js';
import nightTimePottyTraining from './night-time-potty-training.js';
import pottyTrainingReadiness from './potty-training-readiness.js';
import pumpingSchedule from './pumping-schedule.js';
import solidFoodAmountsByAge from './solid-food-amounts-by-age.js';
import teethingFeverOrIllness from './teething-fever-or-illness.js';
import teethingRemediesWhatToAvoid from './teething-remedies-what-to-avoid.js';
import teethingTimeline from './teething-timeline.js';
import twinsFeedingSleepRoutine from './twins-feeding-sleep-routine.js';
import whenToStartSolids from './when-to-start-solids.js';

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
  'baby-fever-when-to-call-doctor': babyFeverWhenToCallDoctor,
  'baby-spit-up-vs-vomiting-reflux': babySpitUpVsVomitingReflux,
  'how-much-sleep-baby-needs-by-age': howMuchSleepBabyNeedsByAge,
  'baby-first-dentist-visit': babyFirstDentistVisit,
  'baby-led-weaning-vs-purees': babyLedWeaningVsPurees,
  'baby-massage-guide': babyMassageGuide,
  'baby-milestones-by-age': babyMilestonesByAge,
  'bottle-amounts-by-age': bottleAmountsByAge,
  'brushing-baby-teeth-fluoride-by-age': brushingBabyTeethFluorideByAge,
  'first-words-language-development': firstWordsLanguageDevelopment,
  'growth-percentiles-explained': growthPercentilesExplained,
  'how-long-breastfeeding-session': howLongBreastfeedingSession,
  'how-to-potty-train-toddler': howToPottyTrainToddler,
  'night-time-potty-training': nightTimePottyTraining,
  'potty-training-readiness': pottyTrainingReadiness,
  'pumping-schedule': pumpingSchedule,
  'solid-food-amounts-by-age': solidFoodAmountsByAge,
  'teething-fever-or-illness': teethingFeverOrIllness,
  'teething-remedies-what-to-avoid': teethingRemediesWhatToAvoid,
  'teething-timeline': teethingTimeline,
  'twins-feeding-sleep-routine': twinsFeedingSleepRoutine,
  'when-to-start-solids': whenToStartSolids,
};
