# ja locale review: 2026-10-24 (original pages)

Scope: breastfeeding feeding bottleFeeding pumping mixedFeeding tummyTime reminders reports diaper sleep health careTimeline + home. Reviewer: site-locale-review skill (model-based; no human native review).

| Page.field | Severity | Before | After | Why |
|---|---|---|---|---|
| home.hero.lead | Major | 授乳、おむつ、睡眠、搾乳、成長、健康、予防接種、通院、リマインダーを… | 授乳、おむつ、睡眠、搾乳、成長、発達、歯、健康、予防接種、通院まで… | EN lists milestones + teeth, not reminders; list now matches EN |
| home.features.2.body | Major | 成長、症状、体温、お薬、予防接種、通院、ちょっとしたメモ… | 成長、発達、初めての言葉、歯、症状、体温、お薬、予防接種、通院… | Dropped milestones, first words, teeth; added "memo" not in EN |
| home.intro.eyebrow | Minor | 本当の夜のために | リアルな夜中の育児のために | Literal calque of "real nights" |
| breastfeeding.lead | Minor | 夜の授乳が表計算のようになることはありません。 | 夜の授乳を表計算のような作業にする必要はありません。 | Unnatural phrasing |
| reports.sections.2.body | Minor | 診断をしたり、…代わるものではありません。 | 診断をするものではなく、…代わるものでもありません。 | Unpaired 〜たり; negation now explicit on both clauses |

Checked OK: です/ます consistent; Pro = PDF exports only; offline/no-account/on-device claims intact ("完全オフライン" kept per open product question); safety negations (not diagnosis / not medical advice / ask pediatrician) intact; 助産師 for "consultant" is a fitting local role. Slugs are English (live) — left unchanged; not misleading. `{languages}` placeholder present.

Unfixed / needs a human: none
Verdict: ready after fixes
