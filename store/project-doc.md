# App 5 — Certifié (NAATI French→English trainer)

Built 17 Nov 2026 from Adrien's "NAATI French Coach" prototype. Preview artifact: https://claude.ai/artifact/4eVUwxXtZA2VKV8ntfdSuj (saves progress to his Claude account via the artifact db; separate from the iPhone app's progress). Repo: adrienbuffin1-sketch/certifie (public, Pages from /docs: https://adrienbuffin1-sketch.github.io/certifie/).

## Why the name
"NAATI" is a third-party trademark (App Store guideline 5.2.1), so it's out of the app name. Title "Certifié: Translator Test Prep", subtitle "French to English for NAATI". App states it's independent and not affiliated.

## Tabs
Today · Words · Grammar · Read · Work (Sentences / 10 min / 1 hour / Revision) · Test (Certified Translator test track).

## Engagement update (22 Nov)
- Progress safe: all new state is additive (S.daily, S.xpb, S.game.ind, S.game.ffw, S.tr, S.ads).
- 60 levels (12 tiers × 5, old thresholds kept, top tier Legend 32000), each tier its own colour. 36 game ranks.
- Subject of the day (one deck a day, 15 words = +100 XP), false friend of the day.
- Colour per industry; industry picker in games.
- 9 games: Speed, Pairs, In context, True or false, Flashcards, Type it, Memory, Sentence builder, Faux amis (pick the real meaning among 3; 77 false + 40 true friends).
- Work › Sentences: short sentences (649), article sentences (87), paragraphs (48); Claude marks in the preview (score /10, NAATI error types, fixed version); self-check in the iPhone app.

## Test track (19 Nov, www/ct.js + ct1–ct4.js)
- Verified against NAATI documents (Nov 2026): 3.5 h for all tasks; Task A 2 of 3 texts ~250 words; Task B 14–18 errors to correct and categorise; rubric pass bands MT B2, Textual norms B3, Language B2, Revision B2, Categorisation B3 (Candidate Instructions say Band 2 for all; app follows the rubric); 8 error categories; spellcheck allowed; any English variety if consistent.
- Original content: 12 translation texts, 4 revision texts, drill banks (false friends 25, small words 25, nouns→verbs 20, register 20).
- Mock, drills, error log, "My errors" deck, dashboard, readiness = 3 consecutive pass estimates. Claude marking in the preview only (paid API proxy declined).

## Look
- Navy #152a63 (dark #0c1838), gold foil #e7c982, action blue #2a43b8, background #eceee8. Bordeaux rejected.
- Fonts: Newsreader + Instrument Sans. Don't change fonts unless he asks.
- Guilloche engraving (img/rosette.svg, band.svg).
- Recraft art (25 Nov): 36 banknote-style engraved vignettes (navy ink, gold accents), cut from 4 Recraft 3×3 sheets (Recraft project created 25 Nov) → 192px WebP in www/img/art/. Used per deck (deck list, subject of the day), per game (games hub), KPI cards, tab headings. Also in the Spanish version.

## Ads (25 Nov, commit 0967aea)
- AdMob app "Certifié iOS" ca-app-pub-3111717712336403~4972475591. Units: interstitial "Interstitial - after game" …/4849186669 (used); banner …/6162268333 (created, unused).
- www/ads.js: init → Google consent message if required → ATT prompt. Interstitial only at natural breaks (finished game, every 2nd checked sentence), every 3rd break, ≥4 min apart, never during a timed test, none in the first 2 days. No banners (would crowd study screens and tab bar). Settings › Privacy choices.
- codemagic.yaml: GADApplicationIdentifier, NSUserTrackingUsageDescription, SKAdNetwork cstr6suwn9, UMP pod pinned ~>2.7 (as Mandala Pop).
- Certifié added to the 3 AdMob privacy messages (EU, US states, IDFA explainer), privacy URL set.
- Privacy policy (docs) and in-app About updated. ASC App Privacy published: Coarse Location, Device ID, Product Interaction, Advertising Data, Crash Data, Performance Data — Third-Party Advertising, not linked, used to track.
- Later in AdMob: link the app to its App Store listing once live; app-ads.txt.

## Tech / accounts
- Capacitor 6, iPhone only, portrait, iOS 15+. Bundle id com.certifie.app.
- Codemagic app "certifie": codemagic.io/apps → certifie → Start new build → pick "Certifié - iOS TestFlight" (dialog defaults to register bundle ID). Pushes don't auto-build.
- Builds: #10 → build 9 (Test track). #11 (0967aea: games, levels, art, ads) → build 10.
- App Store Connect app id 6835843029, version 1.0 Prepare for Submission. 25 Nov: description, promotional text, review notes rewritten (test track, 9 games, ads disclosure).
- Screenshots 25 Nov: 6 × 6.3in in store/appstore63_1..6 and on his PC (Downloads\Certifie screenshots NOV 25). Adrien drags them in.
- Remaining: Adrien uploads screenshots, tests build 10 on TestFlight, says yes before Submit for Review.

## Spanish version (22 Nov)
Certificado, Spanish→English web version for a friend: https://claude.ai/artifact/MUDsYwYArzaB8sL7g8gtqs (public). Source in repo spanish/www. 298 cards, 6 test texts, 3 revision texts, 58 false friends. Web only, no ads.
