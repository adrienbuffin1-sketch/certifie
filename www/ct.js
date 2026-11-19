/* Certifié — Certified Translator (CT) test track.
   Mock test (2 of 3 translations + 1 revision, 3.5 h), single-task drills, revision with categorisation,
   marking estimate against NAATI's CT rubric criteria, personal error log, drill banks, progress dashboard.
   All marking is an ESTIMATE produced by this app. It is not a NAATI result. */
(function(){
"use strict";
const C=window.CERT;if(!C)return;
const {esc,$}=C;
const TEXTS=window.CT_TEXTS||[],REVS=window.CT_REV||[],DR=window.CT_DRILLS||{};
const NOW=()=>Date.now();

/* ---------- NAATI reference (checked against naati.com.au, Nov 2026) ---------- */
// Criterion names as printed in the CT Assessment Rubrics (Final version 2.0, February 2024).
const CRIT={
  mt:{name:"Meaning transfer",group:"Transfer competency",pass:2},
  tn:{name:"Application of textual norms and conventions",group:"Language competency",pass:3},
  lp:{name:"Language proficiency enabling meaning transfer: English",group:"Language competency",pass:2},
  rs:{name:"Revision skills",group:"Transfer competency",pass:2},
  ec:{name:"Error categorisation",group:"Transfer competency",pass:3}
};
// NAATI List of Error Categories (LOTE into English).
const CATS={dist:"Distortion",omit:"Unjustified omission",add:"Unjustified addition",reg:"Inappropriate register",unid:"Unidiomatic expression",gram:"Error of grammar, syntax",spell:"Error of spelling",punct:"Error of punctuation"};
const CATDEF={dist:"A meaning element of the source text is altered.",omit:"A meaning element of the source text is left out.",add:"Meaning is added that the source neither states nor implies.",reg:"Language or level of formality does not suit the text type.",unid:"Sounds unnatural to a native speaker, though the meaning is clear.",gram:"Word form, verb tense or form, agreement, sentence structure.",spell:"Misspelt word or wrong capitalisation.",punct:"Wrong comma, full stop, apostrophe or quotation marks."};
// Error types used in your personal log (your spec), each mapped to a NAATI category.
const TAGS={meaning:"Meaning error",omission:"Omission",addition:"Addition",falsefriend:"False friend",calque:"Calque / unidiomatic English",register:"Register / tone",grammar:"Grammar",spelling:"Spelling / punctuation",numbers:"Numbers, dates, names",brief:"Brief not followed",smallword:"Small word misread"};
const TAG2CAT={meaning:"dist",omission:"omit",addition:"add",falsefriend:"dist",calque:"unid",register:"reg",grammar:"gram",spelling:"spell",numbers:"dist",brief:"reg",smallword:"dist"};
const CAT2TAG={dist:"meaning",omit:"omission",add:"addition",reg:"register",unid:"calque",gram:"grammar",spell:"spelling",punct:"spelling"};
const CAT2CRIT={dist:"mt",omit:"mt",add:"mt",reg:"tn",unid:"lp",gram:"lp",spell:"lp",punct:"lp"};
const TAG2BANK={falsefriend:"ff",smallword:"small",meaning:"small",calque:"verb",omission:"verb",addition:"verb",register:"reg",brief:"reg"};

/* ---------- state ---------- */
function st(){const S=C.S;S.ct=S.ct||{};const c=S.ct;
  c.seen=c.seen||[];c.seenRev=c.seenRev||[];c.hist=c.hist||[];c.errlog=c.errlog||[];c.cards=c.cards||[];
  c.drill=c.drill||{box:{},next:{}};c.set=Object.assign({spell:true,total:210,tmin:75,rmin:60},c.set||{});return c}
const save=()=>C.save();
const words=s=>(s.trim().match(/[^\s]+/g)||[]).length;
const norm=s=>String(s).replace(/[’‘]/g,"'").replace(/[“”]/g,'"').replace(/ | /g," ").replace(/\s+/g," ");
const rx=(p)=>{try{return new RegExp(p,"i")}catch(e){return /$^/}};
const fmtT=ms=>{ms=Math.max(0,ms);const s=Math.floor(ms/1000),h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60;return (h?h+":"+String(m).padStart(2,"0"):m)+":"+String(x).padStart(2,"0")};
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const byId=(arr,id)=>arr.find(x=>x.id===id);

/* unseen-first selection; a text only repeats once you've done the whole bank */
function pickTexts(n,exclude){const c=st();let pool=TEXTS.filter(t=>!c.seen.includes(t.id)&&!(exclude||[]).includes(t.id));
  if(pool.length<n){c.seen=[];pool=TEXTS.filter(t=>!(exclude||[]).includes(t.id))}
  // spread domains: prefer different domains
  const out=[];shuffle(pool).sort((a,b)=>a.diff-b.diff+(Math.random()-.5)*2).forEach(t=>{if(out.length<n&&!out.some(o=>o.domain===t.domain))out.push(t)});
  shuffle(pool).forEach(t=>{if(out.length<n&&!out.includes(t))out.push(t)});return out}
function pickRev(){const c=st();let pool=REVS.filter(r=>!c.seenRev.includes(r.id));if(!pool.length){c.seenRev=[];pool=REVS.slice()}return shuffle(pool)[0]}

/* ---------- run (an attempt in progress) ---------- */
let tick=0;
function newRun(kind){const c=st();const now=NOW();let run;
  if(kind==="mock"){const opts=pickTexts(3);run={kind,start:now,endAt:now+c.set.total*60000,phase:"pick",opts:opts.map(t=>t.id),tasks:[],cur:0}}
  else if(kind==="tdrill"){const t=pickTexts(1)[0];run={kind,start:now,endAt:now+c.set.tmin*60000,phase:"work",tasks:[{type:"t",id:t.id,text:"",spent:0}],cur:0}}
  else {const r=pickRev();run={kind:"rdrill",start:now,endAt:now+c.set.rmin*60000,phase:"work",tasks:[{type:"r",id:r.id,text:r.bad,spent:0,cats:{}}],cur:0}}
  c.run=run;save();renderTest();startTick()}
function startTick(){clearInterval(tick);tick=setInterval(()=>{const c=st();const run=c.run;if(!run||run.phase==="review"||run.phase==="done"){clearInterval(tick);return}
  if(!document.hidden&&run.tasks[run.cur])run.tasks[run.cur].spent=(run.tasks[run.cur].spent||0)+1000;
  const left=run.endAt-NOW();document.querySelectorAll(".ct-clock").forEach(el=>{el.textContent=fmtT(left);el.classList.toggle("low",left<10*60000)});
  if(left<=0){C.toast("Time is up. Your work has been saved.");finishRun()}
  if(run.tasks[run.cur]&&(run.tasks[run.cur].spent%15000===0))save()},1000)}
function finishRun(){const c=st();const run=c.run;if(!run)return;clearInterval(tick);
  run.tasks.forEach(t=>{if(t.type==="t")t.auto=autoCheck(byId(TEXTS,t.id),t.text);else t.diff=revAnalyse(byId(REVS,t.id),t.text)});
  run.phase="review";run.endedAt=NOW();save();renderTest();const m=$("main");if(m)m.scrollTop=0}

/* ---------- marking engine: translation ---------- */
const US=[["color","colour"],["favor","favour"],["behavior","behaviour"],["labor","labour"],["neighbor","neighbour"],["center","centre"],["meter","metre"],["liter","litre"],["defense","defence"],["license","licence"],["traveled","travelled"],["traveling","travelling"],["enroll","enrol"],["fulfill","fulfil"],["aging","ageing"],["gray","grey"],["catalog","catalogue"],["analyze","analyse"],["organize","organise"],["organization","organisation"],["realize","realise"],["recognize","recognise"],["apologize","apologise"],["prioritize","prioritise"],["summarize","summarise"],["criticize","criticise"],["mom","mum"],["sidewalk","footpath"],["gasoline","petrol"],["apartment building","block of flats"]];
const CALQUES=[
 ["\\bat the level of\\b","«Au niveau de» is rarely «at the level of»: try «in», «for», «regarding»."],
 ["\\bin the framework of\\b","«Dans le cadre de» → «as part of», «under»."],
 ["\\bit is (a )?question of\\b","«Il est question de» → «this is about», «the issue is»."],
 ["\\b(permits?|allows?) to \\w","«Permettre de» → «allows X to», «makes it possible to», «helps»."],
 ["\\bsince (one|two|three|four|five|six|seven|eight|nine|ten|\\d+) (years?|months?|weeks?|days?)\\b","«Depuis + durée» → «for … » (present perfect), not «since»."],
 ["\\bin function of\\b","«En fonction de» → «depending on», «based on»."],
 ["\\bthe most of the\\b","«La plupart des» → «most».."],
 ["\\bon the other side,","«D'un autre côté» → «on the other hand»."],
 ["\\bto realis(e|ed|ing) (a|the|this|their) (project|study|work|survey)\\b","«Réaliser un projet» → «carry out / complete»."],
 ["\\bproceed(ed)? to (the )?\\w+ion of\\b","«Procéder à» is usually just the verb."],
 ["\\bit acts of\\b|\\bit is about of\\b","«Il s'agit de» → «this is», «it is about»."],
 ["\\bin the aim of\\b","«Dans le but de» → «to», «in order to»."],
 ["\\bthe totality of\\b","«La totalité de» → «all», «the whole»."],
 ["\\b(a|the) (formation|stage)\\b","Check: formation = training; stage = internship."]
];
const NUMW={zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,fifteen:15,twenty:20,thirty:30,forty:40,fifty:50,hundred:100,thousand:1000,half:0.5,quarter:0.25,third:3,fortnight:14};
function numsFR(fr){const out=[];const re=/\d[\d\u00a0\u202f ]*(?:[.,]\d+)?/g;let m;
  while((m=re.exec(fr))){let x=m[0].replace(/[\u00a0\u202f ]/g,"");if(/^\d{2}(\d{2}){3,}$/.test(x))continue;
    const after=fr.slice(m.index+m[0].length,m.index+m[0].length+8);const isTime=/^\s?h(eures?\b|\s|\d|$)/.test(after)||/^h\d/.test(after);
    x=x.replace(",",".");const n=parseFloat(x);if(x.length)out.push({n:x,alt:isTime&&n>12&&n<=24?String(n-12):null})}
  const seen=new Set();return out.filter(o=>!seen.has(o.n)&&seen.add(o.n))}
function numsEN(en){const set=new Set();(en.match(/\d[\d,]*(?:\.\d+)?/g)||[]).forEach(m=>{set.add(m.replace(/,/g,""));m.split(/[.:]/).forEach(p=>set.add(p.replace(/,/g,"")))});
  const low=en.toLowerCase();Object.keys(NUMW).forEach(w=>{if(new RegExp("\\b"+w).test(low))set.add(String(NUMW[w]))});return set}
function modelBit(t,re){const m=norm(t.model).match(rx(re));return m?m[0]:""}
function autoCheck(t,text){const out=[];const u=norm(text);const W=words(text),MW=words(t.model);
  if(W<MW*0.5)out.push({k:"auto",sure:true,cat:"omit",tag:"omission",sev:"major",src:"",mine:"",note:`Your translation has ${W} words; the model has ${MW}. Large parts seem to be missing.`});
  const hit=new Set();
  t.cp.forEach((cp,i)=>{const [src,ok,cat,sev,note,traps]=cp;let trapped=false;
    (traps||[]).forEach(tr=>{const m=u.match(rx(tr[0]));if(m&&!trapped){trapped=true;hit.add(i);out.push({k:"cp",i,sure:true,cat:tr[1],tag:tr[2],sev:tr[3],src,mine:m[0],fix:modelBit(t,ok),note:tr[4]})}});
    if(!trapped&&!rx(ok).test(u)){hit.add(i);out.push({k:"cp",i,sure:false,cat,tag:cat==="dist"&&/numbers?|date|figure|time|exact/i.test(note)?"numbers":CAT2TAG[cat],sev,src,mine:"",fix:modelBit(t,ok),note})}});
  // numbers not covered by checkpoints
  const en=numsEN(u);numsFR(t.fr).forEach(o=>{const n=o.n;const nn=n.replace(/^0+(?=\d)/,"");if(en.has(n)||en.has(nn)||(o.alt&&en.has(o.alt)))return;
    const covered=out.some(o=>o.src&&o.src.replace(/[   ]/g,"").includes(n.replace(".",",")));if(covered)return;
    out.push({k:"num",sure:false,cat:"dist",tag:"numbers",sev:"major",src:n,mine:"",fix:"",note:`The number ${n} from the source does not appear in your translation. Check numbers, dates and times.`})});
  // French typography left in English
  if(/[«»]/.test(text))out.push({k:"auto",sure:true,cat:"punct",tag:"spelling",sev:"minor",src:"« »",mine:"« »",fix:"\" \"",note:"French quotation marks: use English quotation marks."});
  if(/\w ?\s[;:!?](\s|$)/.test(text.replace(/\d ?h ?\d/g,"")))out.push({k:"auto",sure:false,cat:"punct",tag:"spelling",sev:"minor",src:"",mine:" ; : ! ?",fix:"",note:"Space before ; : ! or ? follows French typography. English has no space."});
  const dc=text.match(/\b\d+,\d{1,2}\b(?!\d)/);if(dc&&!/\d,\d{3}/.test(dc[0]))out.push({k:"auto",sure:false,cat:"punct",tag:"numbers",sev:"minor",src:"",mine:dc[0],fix:dc[0].replace(",","."),note:"Decimal comma: English uses a decimal point."});
  const ts=text.match(/\b\d{1,3} \d{3}\b/);if(ts)out.push({k:"auto",sure:false,cat:"punct",tag:"numbers",sev:"minor",src:"",mine:ts[0],fix:ts[0].replace(" ",","),note:"Thousands separated by a space: Australian style uses a comma (e.g. 50,000)."});
  // spelling variety (NAATI: any variety accepted if consistent; mixing is assessed against Australian English)
  const low=u.toLowerCase();const usHits=[],auHits=[];
  US.forEach(([a,b])=>{if(new RegExp("\\b"+a).test(low))usHits.push(a);if(new RegExp("\\b"+b).test(low))auHits.push(b)});
  const ize=(low.match(/\b\w{3,}iz(e|es|ed|ing|ation|ations)\b/g)||[]).filter(w=>!/^(size|prize|seize|capsize|citizen)/.test(w));if(ize.length)usHits.push(...ize.slice(0,2));
  if(usHits.length&&auHits.length)out.push({k:"auto",sure:true,cat:"spell",tag:"spelling",sev:"minor",src:"",mine:usHits.slice(0,3).join(", ")+" / "+auHits.slice(0,3).join(", "),fix:"",note:"Mixed spelling varieties. NAATI accepts any variety used consistently; mixed texts are assessed against Australian English."});
  else if(usHits.length)out.push({k:"tip",sure:false,info:true,cat:"spell",tag:"spelling",sev:"minor",src:"",mine:usHits.slice(0,3).join(", "),fix:"",note:"US spelling. NAATI accepts it if you use it consistently. For Australian clients, use Australian spelling (Macquarie Dictionary)."});
  // calques and unidiomatic patterns
  CALQUES.forEach(([re,note])=>{const m=u.match(rx(re));if(m)out.push({k:"auto",sure:false,cat:"unid",tag:"calque",sev:"minor",src:"",mine:m[0],fix:"",note})});
  // register: contractions outside quotes
  const noQ=u.replace(/"[^"]*"/g,"");const ctr=noQ.match(/\b(don't|doesn't|can't|won't|isn't|aren't|it's|we're|they're|you're|wasn't|didn't|shouldn't|couldn't)\b/i);
  if(ctr)out.push({k:"auto",sure:false,cat:"reg",tag:"register",sev:"minor",src:"",mine:ctr[0],fix:"",note:"Contractions are usually too informal for this text type (unless quoting someone)."});
  const rep=u.match(/\b([a-z]{2,}) \1\b/i);if(rep)out.push({k:"auto",sure:true,cat:"gram",tag:"grammar",sev:"minor",src:"",mine:rep[0],fix:rep[1],note:"Repeated word."});
  return out}

/* rubric band estimates (own heuristics, mapped to NAATI's band descriptors) */
function band(p,cuts){for(let i=0;i<cuts.length;i++)if(p<=cuts[i])return i+1;return 5}
function tBands(errs,srcW){const k=250/Math.max(150,srcW);const sc={mt:{M:0,m:0},tn:{M:0,m:0},lp:{M:0,m:0}};
  errs.forEach(e=>{const cr=e.tag==="brief"?"tn":CAT2CRIT[e.cat]||"lp";sc[cr][e.sev==="major"?"M":"m"]++});
  const n=o=>({M:o.M*k,m:o.m*k});const mt=n(sc.mt),tn=n(sc.tn),lp=n(sc.lp);
  // Meaning transfer: any deviation that affects the core message (major) rules out Band 2.
  const bMT=mt.M>=4?5:mt.M>=2?4:mt.M>=1?(mt.m>6?4:3):band(mt.m,[1,4,7,11]);
  const pTN=tn.M*2+tn.m,pLP=lp.M*2+lp.m;
  const bTN=band(pTN,[1,3,6,10]),bLP=band(pLP,[2,5,9,14]);
  return {mt:{b:bMT,M:sc.mt.M,m:sc.mt.m},tn:{b:bTN,M:sc.tn.M,m:sc.tn.m},lp:{b:bLP,M:sc.lp.M,m:sc.lp.m}}}
function verdict(bands){let fail=0,edge=0;Object.keys(bands).forEach(k=>{const b=bands[k].b,p=CRIT[k].pass;if(b>p+1)fail+=2;else if(b>p)fail++;else if(b===p)edge++});
  return fail>=2?"fail":fail===1?"borderline":edge>=2?"borderline":"pass"}

/* ---------- revision: diff and scoring ---------- */
function toks(s){const out=[];const re=/\S+/g;let m;while((m=re.exec(s)))out.push({w:m[0],s:m.index,e:m.index+m[0].length});return out}
function lcs(a,b){const n=a.length,m=b.length;const dp=Array.from({length:n+1},()=>new Uint16Array(m+1));
  for(let i=n-1;i>=0;i--)for(let j=m-1;j>=0;j--)dp[i][j]=a[i].w===b[j].w?dp[i+1][j+1]+1:Math.max(dp[i+1][j],dp[i][j+1]);
  const pairs=[];let i=0,j=0;while(i<n&&j<m){if(a[i].w===b[j].w){pairs.push([i,j]);i++;j++}else if(dp[i+1][j]>=dp[i][j+1])i++;else j++}return pairs}
function hunks(orig,mine){const A=toks(orig),B=toks(mine);const P=lcs(A,B);const out=[];let pi=0,pj=0;
  const push=(i0,i1,j0,j1)=>{if(i0===i1&&j0===j1)return;
    const os=i0<i1?A[i0].s:(i0<A.length?A[i0].s:orig.length),oe=i0<i1?A[i1-1].e:os;
    out.push({os,oe,from:orig.slice(os,oe),to:j0<j1?mine.slice(B[j0].s,B[j1-1].e):"",j0,j1,i0,i1})};
  P.concat([[A.length,B.length]]).forEach(([i,j])=>{push(pi,i,pj,j);pi=i+1;pj=j+1});return {hunks:out,A,B}}
function revAnalyse(r,mine){const {hunks:H,B}=hunks(r.bad,mine);const res=r.errs.map((e,k)=>{const s=r.bad.indexOf(e.b),en=s+e.b.length;
    const touch=H.filter(h=>(h.oe>h.os?(h.os<en&&h.oe>s):(h.os>=s&&h.os<=en)));
    if(!touch.length)return {k,state:e.optional?"ok-opt":"missed",touch:[]};
    const j0=Math.max(0,Math.min(...touch.map(h=>h.j0))-4),j1=Math.min(B.length,Math.max(...touch.map(h=>h.j1))+4);
    const seg=B.length?mine.slice(B[Math.min(j0,B.length-1)].s,B[Math.max(0,j1-1)].e):"";
    const fixed=rx(e.fix).test(norm(seg));return {k,state:fixed?"fixed":"changed",touch:touch.map(h=>H.indexOf(h)),seg}});
  const used=new Set();res.forEach(x=>x.touch.forEach(i=>used.add(i)));
  const extra=H.map((h,i)=>({i,from:h.from,to:h.to})).filter(x=>!used.has(x.i)&&(x.from.trim()||x.to.trim()));
  return {res,extra,H}}
function rScore(r,run,task){const d=task.diff;let p=0,fixedN=0,catOK=0,catN=0,missed=[],changed=[];
  d.res.forEach(x=>{const e=r.errs[x.k];const w=e.sev==="major"?2:1;
    const ok=x.state==="fixed"||(x.state==="changed"&&task.judge&&task.judge["e"+x.k]==="ok");
    if(ok){fixedN++;const chosen=task.cats&&task.cats["e"+x.k];catN++;if(chosen&&e.cat.includes(chosen))catOK++}
    else if(x.state==="missed"){p+=w;missed.push(x.k)}else if(x.state==="changed"){p+=w;changed.push(x.k)}});
  const intro=d.extra.filter(x=>(task.judge||{})["x"+x.i]!=="neutral");p+=intro.length;
  const req=r.errs.filter(e=>!e.optional).length;
  const bRS=fixedN===0?5:band(p,[1,4,8,14]);const pct=catN?catOK/catN:0;const bEC=catN===0?5:pct>=.9?1:pct>=.7?2:pct>=.45?3:pct>=.2?4:5;
  const bands={rs:{b:bRS,p,fixed:fixedN,req,intro:intro.length},ec:{b:bEC,ok:catOK,n:catN}};
  return {bands,v:verdict(bands),missed,changed,intro}}

/* ---------- error log, SRS cards ---------- */
function logErr(e){const c=st();c.errlog.push(Object.assign({d:C.today()},e));if(c.errlog.length>600)c.errlog=c.errlog.slice(-600)}
function addCard(fr,en,ex){const c=st();if(!fr||!en||c.cards.some(x=>x.fr===fr))return;c.cards.push({fr,en,ex});syncCards()}
const DECK="My errors";
function syncCards(){const c=st();c.cards.forEach(m=>{if(!C.CARDS.some(x=>x[0]===DECK&&x[1]===m.fr))C.CARDS.push([DECK,m.fr,m.en,"From your Test track mistakes"]);if(m.ex&&!C.EX[m.fr])C.EX[m.fr]=m.ex})}
function sentenceOf(text,needle){const s=text.split(/(?<=[.!?:])\s+/);return s.find(x=>x.includes(needle))||""}
function topTags(n){const c=st();const cnt={};c.errlog.slice(-150).forEach(e=>{cnt[e.tag]=(cnt[e.tag]||0)+(e.sev==="major"?1.5:1)});return Object.entries(cnt).sort((a,b)=>b[1]-a[1]).slice(0,n||5)}

/* ---------- finalise an attempt ---------- */
function finalise(){const c=st();const run=c.run;const res=[];
  run.tasks.forEach((t,ti)=>{if(t.type==="t"){const tx=byId(TEXTS,t.id);const conf=(t.auto||[]).filter((a,i)=>!a.info&&(t.keep||{})[i]!=="no");
      const own=(t.own||[]);const errs=conf.concat(own);const bands=tBands(errs,words(tx.fr));const v=verdict(bands);
      const unseen=!c.seen.includes(tx.id);
      errs.forEach(e=>{logErr({kind:"t",id:tx.id,cat:e.cat,tag:e.tag||CAT2TAG[e.cat],sev:e.sev,src:e.src||"",mine:e.mine||"",fix:e.fix||"",note:e.note||""});
        if(e.k==="cp"&&e.fix){const snt=sentenceOf(tx.fr,e.src);const en=sentenceOf(tx.model,e.fix);addCard(e.src,e.fix,snt&&en?[snt,en]:null)}});
      if(!c.seen.includes(tx.id))c.seen.push(tx.id);
      t.result={bands,v,errs:errs.length,major:errs.filter(e=>e.sev==="major").length};
      res.push({type:"t",id:tx.id,v,bands:{mt:bands.mt.b,tn:bands.tn.b,lp:bands.lp.b},n:errs.length,spent:t.spent||0,w:words(t.text),src:words(tx.fr),unseen})}
    else {const r=byId(REVS,t.id);const sc=rScore(r,run,t);const unseen=!c.seenRev.includes(r.id);
      sc.missed.concat(sc.changed).forEach(k=>{const e=r.errs[k];logErr({kind:"r",id:r.id,cat:e.cat[0],tag:e.cat[0]==="dist"?"meaning":CAT2TAG[e.cat[0]],sev:e.sev,src:"",mine:e.b,fix:e.corr,note:e.note})});
      sc.intro.forEach(x=>logErr({kind:"r",id:r.id,cat:"dist",tag:"addition",sev:"minor",src:"",mine:x.to||"(deleted) "+x.from,fix:x.from,note:"Change to a part that was already correct (introduced error)."}));
      if(!c.seenRev.includes(r.id))c.seenRev.push(r.id);
      t.result=sc;res.push({type:"r",id:r.id,v:sc.v,bands:{rs:sc.bands.rs.b,ec:sc.bands.ec.b},n:sc.bands.rs.p,spent:t.spent||0,unseen})}});
  const overall=run.kind==="mock"?(res.every(x=>x.v==="pass")?"pass":res.some(x=>x.v==="fail")?"fail":"borderline"):res[0].v;
  c.hist.push({d:C.today(),ts:NOW(),kind:run.kind,overall,tasks:res,dur:(run.endedAt||NOW())-run.start});
  run.phase="done";run.overall=overall;save();renderTest();C.burst&&overall==="pass"&&C.burst()}

/* ---------- UI helpers ---------- */
const chip=v=>`<span class="ctv ${v}">${v==="pass"?"Pass (estimate)":v==="borderline"?"Borderline (estimate)":"Fail (estimate)"}</span>`;
const briefTable=b=>`<table class="ctbrief"><tbody><tr><th>Domain</th><td>${esc(b.domain)}</td></tr><tr><th>Topic</th><td>${esc(b.topic)}</td></tr><tr><th>Source text type</th><td>${esc(b.type)}</td></tr><tr><th>Purpose</th><td>${esc(b.purpose)}</td></tr><tr><th>Audience</th><td>${esc(b.audience)}</td></tr></tbody></table>`;
const catOpts=sel=>`<option value="">Choose a NAATI category</option>`+Object.keys(CATS).map(k=>`<option value="${k}" ${sel===k?"selected":""}>${CATS[k]}</option>`).join("");
const tagOpts=sel=>Object.keys(TAGS).map(k=>`<option value="${k}" ${sel===k?"selected":""}>${TAGS[k]}</option>`).join("");
const DISCL=`<p class="small ctdis">Estimate produced by Certifié from its own checks and your self-review. It is not a NAATI result and NAATI examiners may judge differently.</p>`;
function bandRow(key,b,extra){const p=CRIT[key].pass,ok=b<=p;return `<div class="ctband ${ok?"ok":"no"}"><div><b>${CRIT[key].name}</b><small>${CRIT[key].group} · NAATI pass requirement: Band ${p} or above${extra?" · "+extra:""}</small></div><span class="bnum">Band ${b}</span></div>`}

/* ---------- renderers ---------- */
function renderTest(){const z=$("ctzone");if(!z)return;const c=st();syncCards();const run=c.run;
  if(run&&run.phase!=="done")return run.phase==="pick"?renderPick(z,run):run.phase==="review"?renderReview(z,run):renderWork(z,run);
  if(run&&run.phase==="done")return renderDone(z,run);
  renderHub(z)}
function readiness(){const c=st();const seq=[];c.hist.forEach(h=>h.tasks.forEach(t=>{if(t.unseen)seq.push(t.v)}));const last=seq.slice(-3);
  let streak=0;for(let i=seq.length-1;i>=0&&seq[i]==="pass";i--)streak++;return {ready:streak>=3,streak:Math.min(streak,3),last}}
function renderHub(z){const c=st();const r=readiness();const tops=topTags(5);
  const tUsed=c.seen.length,rUsed=c.seenRev.length;
  z.innerHTML=`<div class="ctready ${r.ready?"yes":""}"><div><div class="eyebrow">Readiness</div><b class="serif">${r.ready?"Ready to book (estimate)":"Not there yet"}</b><small>Ready = 3 pass estimates in a row on texts you hadn't seen.</small></div><div class="ctdots">${[0,1,2].map(i=>`<i class="${i<r.streak?"on":""}"></i>`).join("")}</div></div>
  <div class="ctgo">
   <button class="ctbig" data-ct="mock" type="button"><b>Full mock test</b><span>Choose 2 of 3 texts, then a revision task · ${Math.round(c.set.total/60*10)/10} h for everything, like the real test</span></button>
   <button class="ctbig" data-ct="tdrill" type="button"><b>Translation drill</b><span>One ~250-word general text · ${c.set.tmin} min</span></button>
   <button class="ctbig" data-ct="rdrill" type="button"><b>Revision drill</b><span>Correct and categorise 14–18 errors · ${c.set.rmin} min</span></button>
  </div>
  <p class="small">Text bank: ${TEXTS.length-tUsed} of ${TEXTS.length} translation texts and ${REVS.length-rUsed} of ${REVS.length} revision texts left unseen. Texts only repeat once you've done them all.</p>
  <h3>Your error log</h3>${tops.length?`<div class="panel">${tops.map(([tag,n],i)=>`<div class="cttop"><span class="ctrank">${i+1}</span><div><b>${esc(TAGS[tag]||tag)}</b><small>NAATI category: ${CATS[TAG2CAT[tag]]||"—"} · ${Math.round(n)} recent</small></div>${TAG2BANK[tag]?`<button class="rb p" data-gobank="${TAG2BANK[tag]}" type="button">Drill</button>`:`<button class="rb" data-gogram type="button">Grammar</button>`}</div>`).join("")}
    <button class="linkbtn" id="ctlogall" type="button">See every logged error (${c.errlog.length})</button></div>`:`<div class="panel empty"><p class="small" style="margin:0">Every error you make in a mock or drill is saved here, ranked by how often it comes back. Recurring errors are turned into cards (Words → My errors) and drills (Grammar tab).</p></div>`}
  <div id="ctlogbox"></div>
  <h3>Progress</h3>${dash()}
  <h3>Settings for test conditions</h3>
  <div class="panel" style="padding:4px 16px">
   <div class="set"><div><b>Spellcheck in translation tasks</b><small>NAATI enables the browser's basic spellcheck for translations. Autocorrect is always off.</small></div><input type="checkbox" class="switch" id="ctspell" ${c.set.spell?"checked":""} aria-label="Spellcheck"></div>
   <div class="set"><div><b>Full mock time</b><small>NAATI: 3.5 hours for all three tasks</small></div><select id="cttotal" aria-label="Full mock time">${[150,180,210,240].map(m=>`<option value="${m}" ${c.set.total===m?"selected":""}>${m/60} h</option>`).join("")}</select></div>
   <div class="set"><div><b>Translation drill time</b></div><select id="cttmin" aria-label="Translation drill time">${[45,60,75,90].map(m=>`<option value="${m}" ${c.set.tmin===m?"selected":""}>${m} min</option>`).join("")}</select></div>
   <div class="set"><div><b>Revision drill time</b></div><select id="ctrmin" aria-label="Revision drill time">${[45,60,75].map(m=>`<option value="${m}" ${c.set.rmin===m?"selected":""}>${m} min</option>`).join("")}</select></div>
  </div>`}
function dash(){const c=st();const H=c.hist;if(!H.length)return `<div class="panel empty"><p class="small" style="margin:0">Your scores, time per text and error rate will show here after your first drill or mock.</p></div>`;
  const tr=[];H.forEach(h=>h.tasks.forEach(t=>{if(t.type==="t")tr.push(Object.assign({d:h.d},t))}));
  const avgT=tr.length?Math.round(tr.reduce((a,t)=>a+t.spent,0)/tr.length/60000):0;
  const rate=tr.length?(tr.reduce((a,t)=>a+t.n*250/Math.max(150,t.src||250),0)/tr.length):0;
  const pts=tr.slice(-12).map(t=>Math.max(t.bands.mt,t.bands.lp,t.bands.tn-1));
  const W=300,Hh=120;const xs=i=>pts.length<2?W/2:20+i*(W-40)/(pts.length-1);const ys=b=>12+(b-1)*(Hh-24)/4;
  const svg=pts.length?`<svg class="ctchart" viewBox="0 0 ${W} ${Hh}" role="img" aria-label="Translation band estimates over time"><rect x="0" y="${ys(1)-8}" width="${W}" height="${ys(2)-ys(1)+16}" class="passzone"/>${[1,2,3,4,5].map(b=>`<text x="2" y="${ys(b)+4}">${b}</text>`).join("")}<polyline points="${pts.map((b,i)=>xs(i)+","+ys(b)).join(" ")}"/>${pts.map((b,i)=>`<circle cx="${xs(i)}" cy="${ys(b)}" r="4" class="${b<=2?"ok":"no"}"/>`).join("")}</svg>`:"";
  return `<div class="panel"><div class="ctkpis"><div><b>${H.length}</b><small>attempts</small></div><div><b>${avgT}<span style="font-size:.5em"> min</span></b><small>avg time per text</small></div><div><b>${rate.toFixed(1)}</b><small>errors per 250 words</small></div></div>
   ${svg?`<p class="small" style="margin:10px 0 2px">Translation estimate over time (lower is better; shaded = pass zone)</p>${svg}`:""}
   <div class="cthist">${H.slice(-8).reverse().map(h=>`<div class="cth"><div><b>${h.kind==="mock"?"Mock test":h.kind==="tdrill"?"Translation drill":"Revision drill"}</b><small>${h.d} · ${h.tasks.map(t=>t.type==="t"?(byId(TEXTS,t.id)||{}).domain:"Revision").join(", ")}</small></div>${chip(h.overall)}</div>`).join("")}</div></div>`}
function renderPick(z,run){const c=st();const left=run.endAt-NOW();const sel=run.sel||[];
  z.innerHTML=`<div class="ctbar"><b>Mock test</b><span class="ct-clock">${fmtT(left)}</span><button class="linkbtn" data-ctquit type="button">Quit</button></div>
  <div class="panel"><p style="margin:0 0 6px"><b>Translation tasks:</b> choose two of these three texts. Translate each in full, including the title.</p><p class="small" style="margin:0">The clock is already running, as in the real test. Allowed: offline dictionaries and NAATI's whitelist of online resources. No machine translation.</p></div>
  ${run.opts.map(id=>{const t=byId(TEXTS,id);const on=sel.includes(id);return `<button class="ctopt ${on?"on":""}" data-pick="${id}" type="button">${briefTable(t.brief)}<p class="ctsnip">${esc(t.fr.split("\n")[0])}</p><span class="small">${words(t.fr)} words · ${"●".repeat(t.diff)}${"○".repeat(3-t.diff)} difficulty</span>${on?`<span class="ctsel">Selected</span>`:""}</button>`}).join("")}
  <button class="btn p wide" id="ctpickgo" type="button" ${sel.length===2?"":"disabled"}>${sel.length===2?"Start translating":"Choose "+(2-sel.length)+" more"}</button>`}
function renderWork(z,run){const c=st();const t=run.tasks[run.cur];const left=run.endAt-NOW();
  const tabs=run.tasks.length>1?`<div class="seg ctseg">${run.tasks.map((x,i)=>`<button data-ctgo="${i}" aria-pressed="${i===run.cur}" type="button">${x.type==="t"?"Translation "+(run.tasks.slice(0,i+1).filter(y=>y.type==="t").length):"Revision"}</button>`).join("")}</div>`:"";
  const head=`<div class="ctbar"><b>${run.kind==="mock"?"Mock test":run.kind==="tdrill"?"Translation drill":"Revision drill"}</b><span class="ct-clock">${fmtT(left)}</span><button class="linkbtn" data-ctquit type="button">Quit</button></div>${tabs}`;
  if(t.type==="t"){const tx=byId(TEXTS,t.id);
    z.innerHTML=`${head}${briefTable(tx.brief)}
    <details class="ctsrc" open><summary>Source text (French) · ${words(tx.fr)} words</summary><div class="ctfr">${esc(tx.fr).replace(/\n/g,"<br>")}</div></details>
    <label class="ctlab" for="cted">Your English translation</label>
    <textarea id="cted" class="cted" spellcheck="${c.set.spell?"true":"false"}" autocorrect="off" autocapitalize="off" autocomplete="off" data-gramm="false" placeholder="Translate the full text, including the title.">${esc(t.text)}</textarea>
    <div class="ctfoot"><span id="ctwc">${words(t.text)} words</span><span class="small">${c.set.spell?"Spellcheck on":"Spellcheck off"} · autocorrect off</span></div>
    ${nextBtns(run)}`}
  else {const r=byId(REVS,t.id);
    if(t.stage==="cat")return renderCat(z,run,t,r,head);
    z.innerHTML=`${head}${briefTable(r.brief)}
    <div class="panel ctnote"><p style="margin:0"><b>Revision task.</b> The translation below contains errors of meaning transfer and language (NAATI uses 14 to 18). Correct them directly in the text. Do not make changes based on style or personal preference: every unnecessary change risks introducing an error. You will then categorise each change using NAATI's error categories.</p></div>
    <details class="ctsrc"><summary>Source text (French)</summary><div class="ctfr">${esc(r.fr).replace(/\n/g,"<br>")}</div></details>
    <label class="ctlab" for="cted">Translation to revise</label>
    <textarea id="cted" class="cted" spellcheck="false" autocorrect="off" autocapitalize="off" autocomplete="off" data-gramm="false">${esc(t.text)}</textarea>
    <div class="ctfoot"><span id="ctwc">${changesCount(r,t.text)}</span><button class="linkbtn" id="ctreset" type="button">Restore original</button></div>
    <button class="btn p wide" id="ctcatgo" type="button">Next: categorise your changes</button>
    ${nextBtns(run,true)}`}}
function changesCount(r,txt){const n=hunks(r.bad,txt).hunks.length;return n?`${n} change${n>1?"s":""} so far`:"No changes yet"}
function nextBtns(run,rev){const last=run.cur===run.tasks.length-1;
  if(run.tasks.length===1)return rev?`<button class="btn wide" data-ctfinish type="button" style="margin-top:10px">Finish and mark</button>`:`<button class="btn p wide" data-ctfinish type="button">Finish and mark</button>`;
  return `<div class="ans" style="margin-top:12px">${!last?`<button class="btn ${rev?"":"p"}" data-ctgo="${run.cur+1}" type="button">Next task</button>`:""}<button class="btn ${last&&!rev?"p":""}" data-ctfinish type="button">Finish test</button></div>`}
function renderCat(z,run,t,r,head){const d=revAnalyse(r,t.text);t.cats=t.cats||{};
  const items=[];d.res.forEach(x=>{if(x.touch.length){const e=r.errs[x.k];const H=x.touch.map(i=>d.H[i]);items.push({key:"e"+x.k,from:H.map(h=>h.from).filter(Boolean).join(" … ")||e.b,to:H.map(h=>h.to).filter(Boolean).join(" … ")})}});
  d.extra.forEach(x=>items.push({key:"x"+x.i,from:x.from,to:x.to}));
  z.innerHTML=`${head}<div class="panel ctnote"><p style="margin:0">For each change, choose the NAATI error category that best describes the error you corrected. An error can fit more than one category; any appropriate one is accepted.</p></div>
  ${items.length?items.map(it=>`<div class="panel ctcat"><div class="ctdiff"><del>${esc(it.from||"(nothing)")}</del><ins>${esc(it.to||"(deleted)")}</ins></div><select data-cat="${it.key}" aria-label="Error category">${catOpts(t.cats[it.key])}</select></div>`).join(""):`<div class="panel empty"><p class="small" style="margin:0">You haven't changed anything yet.</p></div>`}
  <details class="ctsrc"><summary>NAATI error categories</summary>${Object.keys(CATS).map(k=>`<p class="small"><b>${CATS[k]}:</b> ${CATDEF[k]}</p>`).join("")}</details>
  <div class="ans"><button class="btn" id="ctback" type="button">Back to editing</button><button class="btn p" data-ctfinish type="button">${run.tasks.length>1?"Finish test":"Finish and mark"}</button></div>`}
function renderReview(z,run){const c=st();
  z.innerHTML=`<div class="ctbar"><b>Check your work</b></div><div class="panel ctnote"><p style="margin:0">The app has compared your work with the model and its checklist of key points. Confirm or dismiss each possible error, and add any it missed. Be honest: your estimate depends on it.</p></div>`+
  run.tasks.map((t,ti)=>{if(t.type==="t"){const tx=byId(TEXTS,t.id);const A=t.auto||[];t.keep=t.keep||{};t.own=t.own||[];
    return `<h3>Translation: ${esc(tx.brief.topic)}</h3>
    <details class="ctsrc"><summary>Your translation · ${words(t.text)} words</summary><div class="ctfr">${esc(t.text||"(empty)").replace(/\n/g,"<br>")}</div></details>
    <details class="ctsrc"><summary>Model translation (one acceptable version)</summary><div class="ctfr">${esc(tx.model).replace(/\n/g,"<br>")}</div></details>
    ${A.length?A.map((a,i)=>{const k=t.keep[i];const st2=a.info?"info":k==="no"?"off":"on";
      return `<div class="panel ctflag ${st2}"><div class="ctfh"><span class="ctcat2">${a.info?"Tip":CATS[a.cat]}</span>${a.info?"":`<span class="ctsev ${a.sev}">${a.sev}</span>`}${a.tag&&TAGS[a.tag]?`<span class="small">${TAGS[a.tag]}</span>`:""}${a.sure||a.info?"":`<span class="small ctposs">Possible issue: counts unless you dismiss it</span>`}</div>
      ${a.src?`<p class="ctq"><span>Source</span>${esc(a.src)}</p>`:""}${a.mine?`<p class="ctq"><span>You</span>${esc(a.mine)}</p>`:""}${a.fix?`<p class="ctq ok"><span>Model</span>${esc(a.fix)}</p>`:""}<p class="small" style="margin:6px 0 0">${esc(a.note)}</p>
      ${a.info?"":`<div class="ctyn"><button class="rb ${k==="no"?"":"p"}" data-keep="${ti}:${i}:yes" type="button">My error</button><button class="rb ${k==="no"?"p":""}" data-keep="${ti}:${i}:no" type="button">${a.sure?"My version is fine":"I covered this"}</button></div>`}</div>`}).join(""):`<p class="small">No issues found by the automatic checks. Compare with the model carefully anyway.</p>`}
    ${t.own.map((o,j)=>`<div class="panel ctflag on"><div class="ctfh"><span class="ctcat2">${CATS[o.cat]}</span><span class="ctsev ${o.sev}">${o.sev}</span><span class="small">${TAGS[o.tag]}</span><button class="linkbtn" data-delown="${ti}:${j}" type="button" style="margin-left:auto">Remove</button></div><p class="ctq"><span>You</span>${esc(o.mine)}</p>${o.fix?`<p class="ctq ok"><span>Better</span>${esc(o.fix)}</p>`:""}</div>`).join("")}
    <details class="ctadd"><summary>+ Add an error you spotted</summary><div class="ctaddf" data-addfor="${ti}">
     <input class="search" data-f="mine" placeholder="What you wrote">
     <input class="search" data-f="fix" placeholder="Better version (optional)">
     <select data-f="tag" aria-label="Error type">${tagOpts("meaning")}</select>
     <select data-f="sev" aria-label="Severity"><option value="minor">Minor: affects precision or style</option><option value="major">Major: changes the meaning or misleads the reader</option></select>
     <button class="btn" data-addown="${ti}" type="button">Add error</button></div></details>`}
  const r=byId(REVS,t.id);const d=t.diff;t.judge=t.judge||{};
  const ch=d.res.filter(x=>x.state==="changed"),ex=d.extra;
  return `<h3>Revision: ${esc(r.brief.topic)}</h3>
   <p class="small">${d.res.filter(x=>x.state==="fixed").length} errors corrected as expected, ${d.res.filter(x=>x.state==="missed").length} not touched.</p>
   ${ch.map(x=>{const e=r.errs[x.k];const j=t.judge["e"+x.k];return `<div class="panel ctflag ${j==="ok"?"off":"on"}"><div class="ctfh"><span class="ctcat2">You changed an error, but not as expected</span></div><p class="ctq"><span>Original</span>${esc(e.b)}</p><p class="ctq"><span>You</span>${esc(x.seg)}</p><p class="ctq ok"><span>Expected</span>${esc(e.corr)}</p><p class="small" style="margin:6px 0 0">${esc(e.note)}</p><div class="ctyn"><button class="rb ${j==="ok"?"p":""}" data-judge="${ti}:e${x.k}:ok" type="button">My fix is correct</button><button class="rb ${j==="ok"?"":"p"}" data-judge="${ti}:e${x.k}:bad" type="button">Not fixed</button></div></div>`}).join("")}
   ${ex.map(x=>{const j=t.judge["x"+x.i];return `<div class="panel ctflag ${j==="neutral"?"off":"on"}"><div class="ctfh"><span class="ctcat2">Change to a part that was already correct</span></div><div class="ctdiff"><del>${esc(x.from||"(nothing)")}</del><ins>${esc(x.to||"(deleted)")}</ins></div><p class="small" style="margin:6px 0 0">NAATI: do not revise for style or preference. Did this change introduce an error?</p><div class="ctyn"><button class="rb ${j==="neutral"?"":"p"}" data-judge="${ti}:x${x.i}:err" type="button">Yes, it's an error</button><button class="rb ${j==="neutral"?"p":""}" data-judge="${ti}:x${x.i}:neutral" type="button">No, same meaning</button></div></div>`}).join("")}`}).join("")+
  `<button class="btn p wide" id="ctscore" type="button" style="margin-top:14px">See my estimate</button>`}
function renderDone(z,run){const c=st();
  z.innerHTML=`<div class="ctbar"><b>Results</b><button class="linkbtn" id="ctclose" type="button">Done</button></div>
  <div class="panel ctres ${run.overall}"><div class="eyebrow">${run.kind==="mock"?"Mock test: you must pass all three tasks":"Single task"}</div>${chip(run.overall)}${DISCL}</div>`+
  run.tasks.map(t=>{if(t.type==="t"){const tx=byId(TEXTS,t.id);const R=t.result;const conf=(t.auto||[]).filter((a,i)=>!a.info&&(t.keep||{})[i]!=="no").concat(t.own||[]);
    return `<h3>Translation: ${esc(tx.brief.topic)} ${chip(R.v)}</h3><div class="panel">${bandRow("mt",R.bands.mt.b,`${R.bands.mt.M} major, ${R.bands.mt.m} minor`)}${bandRow("tn",R.bands.tn.b,`${R.bands.tn.M} major, ${R.bands.tn.m} minor`)}${bandRow("lp",R.bands.lp.b,`${R.bands.lp.M} major, ${R.bands.lp.m} minor`)}<p class="small" style="margin:8px 0 0">Time on task: ${Math.round((t.spent||0)/60000)} min · ${words(t.text)} words</p></div>
    ${conf.length?`<details class="ctsrc" open><summary>Your errors explained (${conf.length})</summary>${conf.map(e=>`<div class="cterr"><div class="ctfh"><span class="ctcat2">${CATS[e.cat]}</span><span class="ctsev ${e.sev}">${e.sev}</span><span class="small">${TAGS[e.tag]||""}</span></div>${e.src?`<p class="ctq"><span>Source</span>${esc(e.src)}</p>`:""}${e.mine?`<p class="ctq"><span>You</span>${esc(e.mine)}</p>`:""}${e.fix?`<p class="ctq ok"><span>Correct</span>${esc(e.fix)}</p>`:""}${e.note?`<p class="small">${esc(e.note)}</p>`:""}</div>`).join("")}</details>`:""}
    <details class="ctsrc"><summary>Corrected version (model translation)</summary><div class="ctfr">${esc(tx.model).replace(/\n/g,"<br>")}</div></details>`}
   const r=byId(REVS,t.id);const R=t.result;
   return `<h3>Revision: ${esc(r.brief.topic)} ${chip(R.v)}</h3><div class="panel">${bandRow("rs",R.bands.rs.b,`${R.bands.rs.fixed} of ${R.bands.rs.req} errors corrected · ${R.intro.length} introduced`)}${bandRow("ec",R.bands.ec.b,`${R.bands.ec.ok} of ${R.bands.ec.n} categorised acceptably`)}</div>
   <details class="ctsrc" open><summary>Every seeded error explained (${r.errs.length})</summary>${r.errs.map((e,k)=>{const x=t.diff.res[k];const ok=x.state==="fixed"||x.state==="ok-opt"||(x.state==="changed"&&(t.judge||{})["e"+k]==="ok");const cat=(t.cats||{})["e"+k];
     return `<div class="cterr ${ok?"good":"bad"}"><div class="ctfh"><span class="ctsev ${e.sev}">${e.sev}</span><span class="small">${ok?"Corrected":e.optional?"Optional":"Missed"}${cat?` · you said: ${CATS[cat]}${e.cat.includes(cat)?" ✓":" ✗"}`:""}</span></div><p class="ctq"><span>Error</span>${esc(e.b)}</p><p class="ctq ok"><span>Correct</span>${esc(e.corr)}</p><p class="small">${e.cat.map(k2=>CATS[k2]).join(" or ")}. ${esc(e.note)}</p></div>`}).join("")}</details>
   <details class="ctsrc"><summary>Corrected translation</summary><div class="ctfr">${esc(r.good).replace(/\n/g,"<br>")}</div></details>`}).join("")+
  `<p class="small">Errors from this attempt were added to your error log${st().cards.length?", and key terms you missed are now cards in Words → My errors":""}.</p><button class="btn p wide" id="ctclose2" type="button">Back to the Test track</button>`}

/* ---------- drills (Grammar tab) ---------- */
let D=null;
function dDue(bank){const c=st(),today=C.today();return DR[bank].items.filter(it=>{const n=c.drill.next[it[0]];return !n||n<=today}).length}
function renderDrills(){const z=$("ctdrills");if(!z)return;const c=st();const tops=topTags(5).map(x=>TAG2BANK[x[0]]).filter(Boolean);
  if(D)return renderDrillQ(z);
  z.innerHTML=`<h3 style="margin-top:4px">Translation drills</h3><div class="ctbanks">${Object.keys(DR).map(k=>{const b=DR[k],due=dDue(k),rec=tops.includes(k);return `<button class="ctbank ${rec?"rec":""}" data-bank="${k}" type="button">${rec?`<span class="ctrec">From your errors</span>`:""}<b>${b.name}</b><span>${esc(b.desc)}</span><small>${due} to do · ${b.items.length} items</small></button>`}).join("")}</div>`}
function startDrill(bank){const c=st(),today=C.today();let q=DR[bank].items.filter(it=>{const n=c.drill.next[it[0]];return !n||n<=today});if(!q.length)q=DR[bank].items.slice();
  q=shuffle(q).sort((a,b)=>(c.drill.box[a[0]]||0)-(c.drill.box[b[0]]||0)).slice(0,10);D={bank,q,i:0,ok:0,pick:null,opts:null};nextQ()}
function nextQ(){if(D.i>=D.q.length){C.toast(`Drill done: ${D.ok}/${D.q.length}`);if(D.ok===D.q.length)C.burst();D=null;save();renderDrills();return}
  const it=D.q[D.i];D.opts=shuffle([it[2]].concat(it[3]));D.pick=null;renderDrills()}
function renderDrillQ(z){const it=D.q[D.i],b=DR[D.bank];const ans=D.pick!==null;
  z.innerHTML=`<div class="panel ctdq"><div class="row between"><b>${b.name}</b><span class="small">${D.i+1}/${D.q.length}</span><button class="linkbtn" id="dquit" type="button">Stop</button></div>
  <p class="cfr" style="text-align:left">${esc(it[1])}</p><div class="gopts">${D.opts.map((o,k)=>`<button class="gopt ${ans?(o===it[2]?"ok":k===D.pick?"bad":"dim"):""}" data-dq="${k}" type="button" ${ans?"disabled":""}>${esc(o)}</button>`).join("")}</div>
  ${ans?`<p class="small" style="margin:10px 0 0">${esc(it[4])}</p><button class="btn p wide" id="dnext" type="button" style="margin-top:10px">Next</button>`:""}</div>`}
const BOX=[0,1,3,7,16,35];
function answerQ(k){const it=D.q[D.i];const ok=D.opts[k]===it[2];D.pick=k;const c=st();const id=it[0];let bx=c.drill.box[id]||0;
  bx=ok?Math.min(5,bx+1):0;c.drill.box[id]=bx;const d=new Date();d.setDate(d.getDate()+(ok?BOX[bx]:0));c.drill.next[id]=d.toLocaleDateString("en-CA");
  if(ok)D.ok++;else logErr({kind:"drill",id,cat:TAG2CAT[DR[D.bank].tag]||"dist",tag:DR[D.bank].tag,sev:"minor",src:it[1],mine:D.opts[k],fix:it[2],note:it[4]});
  C.haptic(ok?"ok":"bad");const dd=C.T();C.S.counts[dd].drill++;save();renderDrills()}

/* ---------- events ---------- */
document.addEventListener("click",e=>{const t=e.target;let b;const c=st();
  if(!t.closest("#ctzone")&&!t.closest("#ctdrills"))return;
  if(b=t.closest("[data-ct]")){C.haptic();newRun(b.dataset.ct);scrollTop();return}
  if(t.closest("[data-ctquit]")){if(confirmQuit()){c.run=null;clearInterval(tick);save();renderTest()}return}
  if(b=t.closest("[data-pick]")){const r=c.run;r.sel=r.sel||[];const id=b.dataset.pick;r.sel=r.sel.includes(id)?r.sel.filter(x=>x!==id):r.sel.concat(id).slice(-2);save();renderTest();return}
  if(t.closest("#ctpickgo")){const r=c.run;const rv=pickRev();r.tasks=r.sel.map(id=>({type:"t",id,text:"",spent:0})).concat([{type:"r",id:rv.id,text:rv.bad,spent:0,cats:{}}]);r.phase="work";r.cur=0;save();renderTest();scrollTop();return}
  if(b=t.closest("[data-ctgo]")){c.run.cur=+b.dataset.ctgo;save();renderTest();scrollTop();return}
  if(t.closest("#ctcatgo")){c.run.tasks[c.run.cur].stage="cat";save();renderTest();scrollTop();return}
  if(t.closest("#ctback")){c.run.tasks[c.run.cur].stage="";save();renderTest();return}
  if(t.closest("#ctreset")){const task=c.run.tasks[c.run.cur];task.text=byId(REVS,task.id).bad;save();renderTest();return}
  if(t.closest("[data-ctfinish]")){finishRun();return}
  if(b=t.closest("[data-keep]")){const [ti,i,v]=b.dataset.keep.split(":");const task=c.run.tasks[+ti];task.keep=task.keep||{};task.keep[i]=v;save();renderTest();return}
  if(b=t.closest("[data-judge]")){const [ti,k,v]=b.dataset.judge.split(":");const task=c.run.tasks[+ti];task.judge=task.judge||{};task.judge[k]=v;save();renderTest();return}
  if(b=t.closest("[data-addown]")){const ti=+b.dataset.addown;const f=document.querySelector(`[data-addfor="${ti}"]`);const g=n=>f.querySelector(`[data-f="${n}"]`).value.trim();
    if(!g("mine")){C.toast("Type what you wrote first");return}const tag=g("tag");c.run.tasks[ti].own.push({k:"own",cat:TAG2CAT[tag],tag,sev:g("sev"),mine:g("mine"),fix:g("fix"),src:"",note:"Added by you"});save();renderTest();return}
  if(b=t.closest("[data-delown]")){const [ti,j]=b.dataset.delown.split(":").map(Number);c.run.tasks[ti].own.splice(j,1);save();renderTest();return}
  if(t.closest("#ctscore")){finalise();scrollTop();return}
  if(t.closest("#ctclose")||t.closest("#ctclose2")){c.run=null;save();renderTest();scrollTop();return}
  if(t.closest("#ctlogall")){const box=$("ctlogbox");box.innerHTML=box.innerHTML?"":`<div class="panel">${c.errlog.slice(-60).reverse().map(e=>`<div class="cterr"><div class="ctfh"><span class="ctcat2">${CATS[e.cat]||e.cat}</span><span class="ctsev ${e.sev}">${e.sev}</span><span class="small">${TAGS[e.tag]||""} · ${e.d}</span></div>${e.src?`<p class="ctq"><span>Source</span>${esc(e.src)}</p>`:""}${e.mine?`<p class="ctq"><span>You</span>${esc(e.mine)}</p>`:""}${e.fix?`<p class="ctq ok"><span>Correct</span>${esc(e.fix)}</p>`:""}</div>`).join("")}</div>`;return}
  if(b=t.closest("[data-gobank]")){C.show("grammar");startDrill(b.dataset.gobank);return}
  if(t.closest("[data-gogram]")){C.show("grammar");return}
  if(b=t.closest("[data-bank]")){C.haptic();startDrill(b.dataset.bank);return}
  if(b=t.closest("[data-dq]")){if(D&&D.pick===null)answerQ(+b.dataset.dq);return}
  if(t.closest("#dnext")){D.i++;nextQ();return}
  if(t.closest("#dquit")){D=null;renderDrills();return}
});
function confirmQuit(){return window.confirm?window.confirm("Quit this attempt? Your work will not be marked."):true}
function scrollTop(){const m=$("main");if(m)m.scrollTop=0}
document.addEventListener("input",e=>{const t=e.target;if(t.id!=="cted")return;const c=st();const task=c.run&&c.run.tasks[c.run.cur];if(!task)return;task.text=t.value;
  const wc=$("ctwc");if(wc)wc.textContent=task.type==="t"?words(t.value)+" words":changesCount(byId(REVS,task.id),t.value);clearTimeout(input.t);input.t=setTimeout(save,800)});
function input(){}
document.addEventListener("change",e=>{const t=e.target;const c=st();
  if(t.dataset&&t.dataset.cat){const task=c.run.tasks[c.run.cur];task.cats=task.cats||{};task.cats[t.dataset.cat]=t.value;save();return}
  if(t.id==="ctspell"){c.set.spell=t.checked;save();return}
  if(t.id==="cttotal"){c.set.total=+t.value;save();renderTest();return}
  if(t.id==="cttmin"){c.set.tmin=+t.value;save();renderTest();return}
  if(t.id==="ctrmin"){c.set.rmin=+t.value;save();renderTest();return}});

window.CTX={renderTest,renderDrills,_autoCheck:autoCheck,_revAnalyse:revAnalyse,_rScore:rScore,_tBands:tBands,_verdict:verdict};
syncCards();
const c0=st();if(c0.run&&c0.run.phase!=="review"&&c0.run.phase!=="done")startTick();
if(C.view==="test")renderTest();if(C.view==="grammar")renderDrills();
})();
