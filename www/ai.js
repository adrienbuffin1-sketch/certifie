/* Certifié — AI marker.
   Marks a French→English translation like a NAATI CT examiner and returns structured errors and band estimates.
   Backends: (1) claude.ai preview: claude.use("sample"); (2) iPhone app: HTTPS proxy to the Claude API (AI_URL below).
   Results are estimates, never NAATI results. */
(function(){
"use strict";
// Set after the proxy is deployed (see worker/ai-proxy.js). Empty = not available in the native app yet.
const AI_URL="";
const AI_TOKEN="";
const NATIVE=!!(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform());
let samp=null,sampTried=false;
async function getSample(){if(sampTried)return samp;sampTried=true;try{if(window.claude&&window.claude.use)samp=await Promise.race([window.claude.use("sample"),new Promise(r=>setTimeout(()=>r(null),10000))])}catch(e){samp=null}return samp}
async function available(){if(AI_URL)return true;return !!(await getSample())}
function parseJSON(t){if(t&&typeof t==="object")return t;const s=String(t||"");const a=s.indexOf("{"),b=s.lastIndexOf("}");if(a<0||b<a)throw new Error("No JSON in answer");return JSON.parse(s.slice(a,b+1))}
async function ask(system,user,maxTokens){
  if(AI_URL){const r=await fetch(AI_URL,{method:"POST",headers:{"content-type":"application/json","x-app-token":AI_TOKEN},body:JSON.stringify({system,user,max_tokens:maxTokens||4000})});
    if(!r.ok)throw new Error("Marking service error "+r.status);const j=await r.json();return parseJSON(j.text)}
  const s=await getSample();if(!s)throw new Error("unavailable");
  const prompt=system+"\n\n"+user;
  try{if(typeof s.json==="function"){const v=await s.json(prompt,{modelTier:"complex"});return parseJSON(v)}}catch(e){if(e&&e.code==="not_granted")throw e}
  const res=await s(prompt,{modelTier:"complex"});return parseJSON(res.text)}

const RUBRIC=`NAATI Certified Translator rubric (paraphrased). Bands: 1 = best, 5 = lowest.
Meaning transfer (pass: Band 2 or better)
 B1: conveys the intent and consistently translates the content accurately, with minimal or no distortions, omissions or additions.
 B2: conveys the intent and mostly translates accurately; deviations have a minor effect on precision but not on the core message.
 B3: distortions, omissions or additions together significantly affect precision, and/or one or more affect the core message.
 B4: frequent distortions, omissions or additions. B5: excessive.
Application of textual norms and conventions (pass: Band 3 or better): register, style, text structure and terminology suited to the genre, the audience (educated non-expert) and English norms (number, date and time formats, punctuation conventions, headings).
 B1 accomplished, B2 mostly appropriate, B3 some ability but appropriate and consistent, B4 limited, B5 minimal.
Language proficiency enabling meaning transfer: English (pass: Band 2 or better): idiomatic writing; lexicon, grammar, syntax, spelling, punctuation.
 B1: errors or unidiomatic usage are isolated and do not affect overall quality. B2: errors have a minor effect on quality and do not hinder understanding.
 B3: errors significantly affect quality and/or one or more impede understanding. B4: errors frequently impede understanding. B5: constantly.
NAATI error categories: distortion, omission (unjustified), addition (unjustified), register (inappropriate), unidiomatic (expression), grammar (grammar, syntax), spelling (incl. capitalisation), punctuation.
English variety: any variety is accepted if used consistently; if varieties are mixed, judge against Australian English (Macquarie Dictionary).`;

const SYS_T=`You are a strict but fair NAATI examiner marking a French-into-English practice translation for the Certified Translator test. ${RUBRIC}
Rules:
- The reference translation is ONE acceptable version, not the only one. Accept any accurate, natural rendering. Do not penalise legitimate stylistic choices or synonyms.
- Check every sentence of the source against the candidate's text: meaning, omissions, additions, numbers, dates, times, names, negations, connectors and modality (e.g. French conditional for reported claims).
- An error is "major" if it changes the meaning, misleads the reader, omits or adds a meaningful element, or impedes understanding. Otherwise "minor".
- Each error must quote the candidate's exact words ("quote", copied verbatim from the candidate text) except omissions, where "quote" is "" and "source" gives the French that was left out.
- If the candidate text is empty or mostly missing, say so and give Band 5.
- Write explanations in plain English for a French speaker, max 25 words each. Give the correction as English words that would replace the quote.
- "corrected": the candidate's own translation with only the necessary corrections applied (keep their wording where it is acceptable).
Answer with ONLY a JSON object, no prose before or after:
{"errors":[{"quote":"","source":"","category":"distortion|omission|addition|register|unidiomatic|grammar|spelling|punctuation","type":"meaning|omission|addition|falsefriend|calque|register|grammar|spelling|numbers|brief|smallword","severity":"major|minor","correction":"","explanation":""}],
"bands":{"meaning":1,"conventions":1,"language":1},
"reasons":{"meaning":"one sentence","conventions":"one sentence","language":"one sentence"},
"strengths":"one sentence","advice":"one or two sentences: the most useful thing to work on","corrected":"..."}`;

const CMAP={distortion:"dist",omission:"omit",addition:"add",register:"reg",unidiomatic:"unid",grammar:"gram",spelling:"spell",punctuation:"punct"};
const TYPES=["meaning","omission","addition","falsefriend","calque","register","grammar","spelling","numbers","brief","smallword"];
const CAT2TAG={dist:"meaning",omit:"omission",add:"addition",reg:"register",unid:"calque",gram:"grammar",spell:"spelling",punct:"spelling"};
const clampB=b=>Math.min(5,Math.max(1,Math.round(+b||5)));

async function markTranslation(o){
  const user=`TASK BRIEF
Domain: ${o.brief&&o.brief.domain||"General"}
Topic: ${o.brief&&o.brief.topic||""}
Source text type: ${o.brief&&o.brief.type||""}
Purpose: ${o.brief&&o.brief.purpose||"Informative"}
Audience: Educated non-expert reader

FRENCH SOURCE TEXT
${o.fr}

REFERENCE TRANSLATION (one acceptable version)
${o.model||"(none)"}
${o.notes&&o.notes.length?"\nKNOWN PITFALLS IN THIS TEXT\n- "+o.notes.slice(0,25).join("\n- "):""}

CANDIDATE TRANSLATION
${o.text&&o.text.trim()?o.text:"(empty)"}`;
  const j=await ask(SYS_T,user,5000);
  const text=o.text||"";
  const errs=(Array.isArray(j.errors)?j.errors:[]).map(e=>{const cat=CMAP[String(e.category||"").toLowerCase()]||"dist";let tag=String(e.type||"").toLowerCase();if(!TYPES.includes(tag))tag=CAT2TAG[cat];
    return {k:"ai",cat,tag,sev:e.severity==="major"?"major":"minor",mine:String(e.quote||""),src:String(e.source||""),fix:String(e.correction||""),note:String(e.explanation||""),found:!e.quote||text.includes(e.quote)}}).filter(e=>e.note||e.fix||e.mine);
  const b=j.bands||{};let mt=clampB(b.meaning),tn=clampB(b.conventions),lp=clampB(b.language);
  // keep bands consistent with NAATI descriptors: an error affecting the core message rules out Band 2 for meaning transfer
  const majMT=errs.filter(e=>e.sev==="major"&&["dist","omit","add"].includes(e.cat)).length;
  if(majMT>=1&&mt<3)mt=3;if(majMT>=4&&mt<4)mt=4;if(!errs.some(e=>["dist","omit","add"].includes(e.cat))&&mt>2)mt=2;
  const majLP=errs.filter(e=>e.sev==="major"&&["unid","gram","spell","punct"].includes(e.cat)).length;if(majLP>=1&&lp<3)lp=3;
  const r=j.reasons||{};
  return {errs,bands:{mt:{b:mt,why:String(r.meaning||"")},tn:{b:tn,why:String(r.conventions||"")},lp:{b:lp,why:String(r.language||"")}},
    strengths:String(j.strengths||""),advice:String(j.advice||""),corrected:String(j.corrected||""),at:Date.now(),by:AI_URL?"api":"claude"}}

const SYS_R=`You are a NAATI examiner checking a candidate's revision of an English translation (French source). ${RUBRIC}
For each item below, decide fairly. Accept any correction that fixes the error and reads naturally, even if it differs from the expected correction.
Answer with ONLY JSON: {"changed":[{"id":"","ok":true,"why":"max 20 words"}],"extra":[{"id":"","error":false,"why":"max 20 words"}]}
"changed": the candidate edited a known error. ok=true if the edit correctly fixes it without creating a new error.
"extra": the candidate edited a part that was already acceptable. error=true if the edit introduced an error (meaning, grammar, idiom, spelling, punctuation or register); false if the result is still correct.`;
async function judgeRevision(o){
  if(!o.changed.length&&!o.extra.length)return {changed:{},extra:{}};
  const user=`FRENCH SOURCE
${o.fr}

ORIGINAL (FLAWED) TRANSLATION
${o.bad}

CANDIDATE'S REVISED TRANSLATION
${o.mine}

KNOWN ERRORS THE CANDIDATE EDITED
${o.changed.map(c=>`id=${c.id} | error: "${c.b}" | expected fix: "${c.corr}" | candidate's version of this passage: "${c.seg}" | why it was wrong: ${c.note}`).join("\n")||"(none)"}

OTHER CHANGES (to text that was acceptable)
${o.extra.map(x=>`id=${x.id} | original: "${x.from||"(nothing)"}" | candidate: "${x.to||"(deleted)"}"`).join("\n")||"(none)"}`;
  const j=await ask(SYS_R,user,2500);const ch={},ex={};
  (j.changed||[]).forEach(c=>{ch[String(c.id)]={ok:!!c.ok,why:String(c.why||"")}});(j.extra||[]).forEach(x=>{ex[String(x.id)]={error:!!x.error,why:String(x.why||"")}});
  return {changed:ch,extra:ex}}

const SYS_W=`You are a NAATI examiner marking a practice revision: the candidate was given a flawed English translation and asked to correct it. ${RUBRIC}
Compare the candidate's version with the list of known errors. Accept any natural correction. Also report any NEW errors the candidate introduced.
Answer with ONLY JSON: {"fixed":["wrong text of each known error that is correctly fixed"],"missed":["wrong text of each known error still wrong"],"introduced":[{"quote":"","explanation":"max 20 words"}],"band":1,"advice":"one sentence"}`;
async function markRewrite(o){
  const user=`FRENCH SOURCE
${o.fr}

FLAWED TRANSLATION GIVEN TO THE CANDIDATE
${o.bad}

KNOWN ERRORS (wrong → right)
${o.errs.map(e=>`"${e[0]}" → "${e[1]}"`).join("\n")}

CANDIDATE'S CORRECTED VERSION
${o.mine}`;
  const j=await ask(SYS_W,user,2500);return {fixed:j.fixed||[],missed:j.missed||[],introduced:(j.introduced||[]).map(x=>({quote:String(x.quote||""),note:String(x.explanation||"")})),band:clampB(j.band),advice:String(j.advice||""),at:Date.now()}}

const SYS_S=`You are a NAATI Certified Translator examiner giving quick feedback on a practice translation of a short French passage into English. ${RUBRIC}
Judge the candidate's English against the French source. The reference translation is only one acceptable version: accept any accurate, natural rendering. Use Australian or British spelling as consistent.
Error types: Distortion, Unjustified omission, Unjustified addition, Inappropriate register, Unidiomatic expression, Error of grammar/syntax, Error of spelling, Error of punctuation.
Answer with ONLY JSON: {"score":0-10,"verdict":"max 12 words","errors":[{"quote":"exact words from the candidate","type":"one error type","fix":"better wording","why":"max 18 words"}],"better":"the candidate's translation with only the errors fixed","tip":"one practical tip, max 20 words"}
Score: 10 = test-quality, 8-9 = minor slips, 6-7 = meaning kept but clumsy or one real error, 3-5 = a meaning error, 0-2 = largely wrong. Empty errors list if none.`;
async function markSentence(o){
  const user=`FRENCH SOURCE${o.ctx?` (from: ${o.ctx})`:""}
${o.fr}

REFERENCE TRANSLATION
${o.model}

CANDIDATE'S TRANSLATION
${o.mine}`;
  const j=await ask(SYS_S,user,1800);const sc=Math.max(0,Math.min(10,Math.round(+j.score||0)));
  return {score:sc,verdict:String(j.verdict||""),errors:(j.errors||[]).map(e=>({quote:String(e.quote||""),type:String(e.type||""),fix:String(e.fix||""),why:String(e.why||"")})),better:String(j.better||""),tip:String(j.tip||""),ai:true}}
window.AIM={available,markTranslation,judgeRevision,markRewrite,markSentence,get native(){return NATIVE},get configured(){return !!AI_URL}};
})();
