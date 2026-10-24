# el locale review: 2026-10-24 (original pages)

Scope: breastfeeding feeding bottleFeeding pumping mixedFeeding tummyTime reminders reports diaper sleep health careTimeline, home. Reviewer: site-locale-review skill (model-based; no human native review).

| Page.field | Severity | Before | After | Why |
|---|---|---|---|---|
| home.hero.lead | Major | …ανάπτυξη, υγεία, εμβόλια, επισκέψεις στον γιατρό και υπενθυμίσεις… | …ανάπτυξη, ορόσημα, δόντια, υγεία, εμβόλια και επισκέψεις στον γιατρό… | Dropped milestones + teeth, added reminders not in EN |
| home.features[2].body | Major | …επισκέψεις στον γιατρό και τις γρήγορες σημειώσεις. | …την ανάπτυξη, τα ορόσημα, τις πρώτες λέξεις, τα δόντια, … τις επισκέψεις στον γιατρό. | Dropped milestones, first words, teeth; added "quick notes" |
| home.metaDescription | Minor | …ανάπτυξη, εμβόλια… | …ανάπτυξη, αρχεία υγείας, εμβόλια… | Dropped health records |
| breastfeeding/feeding/mixedFeeding.faq answers (3x) | Major | Το Mamio λειτουργεί πρώτα χωρίς σύνδεση | Το Mamio είναι σχεδιασμένο πρωτίστως για χρήση χωρίς σύνδεση | Calque of "offline-first"; read as "works offline at first" |
| home.privacy.title | Major | Πρώτα χωρίς σύνδεση. | Πρωτίστως χωρίς σύνδεση. | Same calque |
| tummyTime.title | Major | …χωρίς να γίνονται project. | …χωρίς να τις κάνετε ολόκληρη υπόθεση. | English word in running Greek |
| reports.sections[1].body | Major | …πριν από check-up… | …πριν από προληπτικούς ελέγχους… | English word in running Greek |
| bottleFeeding.metaDescription | Minor | (missed entries omitted) | …καταχωρίσεις που ξεχάσατε… | Restore dropped item |
| home.plans.pro[3] | Minor | …ανάπτυξης του WHO | …ανάπτυξης του ΠΟΥ | File uses ΠΟΥ everywhere else |
| home.intro.title | Minor | …πριν γίνουν πνευματική φασαρία. | …πριν σας φορτώσουν το μυαλό. | Unnatural calque of "mental clutter" |
| pumping.sections[2].body | Minor | ένα σπρώξιμο | ένα μικρό σκούντημα | "σπρώξιμο" = push/shove |
| breastfeeding.title | Minor | …για νυσταγμένα, πραγματικά ταΐσματα. | …για τα νυσταγμένα ταΐσματα της πραγματικής ζωής. | Awkward adjective stacking |

Checked and kept: safety negations, Pro-only PDF, offline/no-account claims, "εντελώς χωρίς σύνδεση" kept per open product question. Formal "εσείς" consistent. `{languages}` intact.
Slugs: all 12 live el slugs are the English slugs (e.g. `breastfeeding-tracker`). Not misleading, so unchanged; Greek-intent search would benefit from Greeklish slugs, but that breaks live URLs (needs redirects): owner decision.

Unfixed / needs a human: slug localization decision (above)
Verdict: ready after fixes
