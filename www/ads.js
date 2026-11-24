/* Certifié — Google AdMob (iPhone app only; the web preview never shows ads).
   Full-screen ads only at natural breaks: after a game, after every 6th checked sentence.
   Never during a timed test, never in the first 2 days of use, never twice within 4 minutes. */
(function(){
"use strict";
const CAP=window.Capacitor;const NATIVE=!!(CAP&&CAP.isNativePlatform&&CAP.isNativePlatform());
const P=()=>CAP&&CAP.Plugins&&CAP.Plugins.AdMob;
const UNIT="ca-app-pub-3111717712336403/4849186669";      // Interstitial - after game
const TEST_UNIT="ca-app-pub-3940256099942544/4411468910"; // Google's test interstitial
const GAP=240000,EVERY=3,GRACE_DAYS=2;
let ready=false,busy=false,shownAt=0,breaks=0;
const C=()=>window.CERT;
function S(){return C()&&C().S}
function st(){const s=S();if(!s)return {};s.ads=s.ads||{};if(!s.ads.first)s.ads.first=Date.now();return s.ads}
async function init(){if(!NATIVE||!P())return;
  try{await P().initialize({initializeForTesting:!!st().test});ready=true}catch(e){ready=false;return}
  try{const ci=await P().requestConsentInfo({});if(ci&&ci.isConsentFormAvailable&&ci.status==="REQUIRED")await P().showConsentForm()}catch(e){}
  try{const t=await P().trackingAuthorizationStatus();if(t&&t.status==="notDetermined")await P().requestTrackingAuthorization()}catch(e){}
}
async function privacy(){if(!NATIVE||!P())return;try{await P().resetConsentInfo()}catch(e){}
  try{const ci=await P().requestConsentInfo({});if(ci&&ci.isConsentFormAvailable)await P().showConsentForm();else C()&&C().toast("No privacy choices needed where you are")}catch(e){}}
function inTest(){const s=S();return !!(s&&s.ct&&s.ct.run&&!s.ct.run.done)}
/* call at a natural break; kind is just for counting */
async function brk(kind){if(!ready||busy||!P())return;const a=st();breaks++;
  if(Date.now()-a.first<GRACE_DAYS*864e5&&!a.test)return;
  if(inTest())return;
  if(breaks%EVERY!==0)return;
  if(Date.now()-shownAt<GAP)return;
  busy=true;try{await P().prepareInterstitial({adId:a.test?TEST_UNIT:UNIT,isTesting:!!a.test,npa:false});await P().showInterstitial();shownAt=Date.now();a.n=(a.n||0)+1;C()&&C().save()}catch(e){}
  busy=false}
window.ADS={init,privacy,brk,native:NATIVE};
if(NATIVE)setTimeout(init,1500);
})();
