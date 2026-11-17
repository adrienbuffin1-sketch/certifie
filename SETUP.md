# Certifié — from this folder to the App Store

Same pipeline as Lumen Deep and Mandala Pop: GitHub → Codemagic (builds on a cloud Mac) → TestFlight → App Store. No Mac needed.

## What's in here
- `www/` the app (index.html, app.js, data.js + data2.js = all study content, fonts/)
- `assets/` icon (1024) and splash (2732); Codemagic turns them into every iOS size
- `capacitor.config.json`, `package.json` native wrapper (Capacitor 6: haptics, local notifications, preferences, share, filesystem, status bar, splash)
- `codemagic.yaml` the iOS build, same API key as your games (`LumenDeepKey`)
- `docs/` website with the privacy policy and support section (GitHub Pages)
- `store/` 6 App Store screenshots (1290×2796) and `listing.md` (all the text to paste)

## Steps (about 45 minutes of clicking, then waiting on Apple)
1. **GitHub:** create a public repo `certifie` under adrienbuffin1-sketch and upload everything in this folder (keep the folder structure). Then Settings → Pages → Branch `main`, folder `/docs` → Save. After a minute, https://adrienbuffin1-sketch.github.io/certifie/ is live.
2. **Support email:** support goes to mandalapop.support@gmail.com (change it in `docs/index.html` if you make a dedicated address).
3. **Apple Developer → Identifiers → +** App ID, bundle ID `com.certifie.app`. No extra capabilities needed (the reminder is a local notification, not push).
4. **App Store Connect → Apps → +** new iOS app named "Certifié: Translator Test Prep", bundle ID `com.certifie.app`. Open App Information, copy the **Apple ID** number into `codemagic.yaml` (`APP_STORE_APPLE_ID: 0` → your number) and commit.
5. **Codemagic → Add application →** the `certifie` repo → it finds `codemagic.yaml` → run **Certifié - iOS TestFlight**. Pushing to `main` also starts it.
6. **TestFlight on your phone, check:** onboarding, header under the notch, typing a card (no zoom), daily reminder asks for permission and fires, Back up opens the share sheet, haptics, dark mode.
7. **Fill the listing** from `store/listing.md`, upload the 6 screenshots, App Privacy = Data Not Collected, add the build, **Submit for Review**.

## Name note
"NAATI" is a third-party trademark, so it's kept out of the app name and used only in the subtitle and description to say what the app prepares for, with a not-affiliated line. If review rejects under 5.2.1, swap the subtitle for the fallback in `listing.md` and resubmit; nothing in the build needs to change.

## Updating content
All study content is in `www/data.js` and `www/data2.js`. Add cards as `["French","English","note"]` rows, passages as `{t,dom,fr,en,notes}`, revision tasks as `{t,dom,fr,bad,errs:[[wrong,right]],good}` (every `wrong` must appear word for word in `bad` so the tap-the-error mode can find it). Progress keys are the deck name + French word, so editing an English answer keeps progress; renaming a French headword resets that one card.
