(function(){
"use strict";
const {CARDS,RULES,FORMATS,PASSAGES,REVS}=window.NAATI_DATA;const QUICK=window.NAATI_DATA.QUICK||[];
const VERSION="1.0";
const CAP=window.Capacitor;const NATIVE=!!(CAP&&CAP.isNativePlatform&&CAP.isNativePlatform());
const P=n=>NATIVE&&CAP.Plugins?CAP.Plugins[n]:null;
if(NATIVE)document.documentElement.classList.add("native");

const TASKS=[
  ["cards","20 flashcards","Words · reviews first, then new words"],
  ["drill","5 grammar drills","Grammar"],
  ["read","Read one French news story, then its English version","France 24 publishes both. Note 3 phrases they put better than you would."],
  ["write","One 10-minute translation","Practice · a full 1-hour passage 2–3 times a week"]
];
const STEPS=[
  "Check your English proficiency evidence with NAATI (info@naati.com.au)",
  "Complete a NAATI-endorsed qualification or recognised translation training",
  "Apply to NAATI to sit the Certified Translator test",
  "Sit the ethics and intercultural tests if NAATI asks for them",
  "Try the free CT preparation module on NAATI Learn",
  "Book the French → English Certified Translator test ($605)",
  "Pass, then set up your digital stamp and join AUSIT"
];
const BOXDAYS=[0,1,3,7,16,35];
const LEVELS=[["Beginner",0],["Apprentice",400],["Practitioner",1200],["Advanced",2600],["Test-ready",4200],["Certified level",6000]];
const KEY="naati-fr-en-v1";
const today=()=>new Date().toLocaleDateString("en-CA");
const addDays=(d,n)=>{const x=new Date(d+"T12:00:00");x.setDate(x.getDate()+n);return x.toLocaleDateString("en-CA")};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const $=id=>document.getElementById(id);

/* ---------- state ---------- */
const BASE=()=>({box:{},next:{},done:{},log:{},steps:{},drafts:{},test:"",counts:{},spot:{},marks:{},times:{},set:{theme:"auto",haptic:true,remind:false,rtime:"19:00",newday:20},onb:false,ts:0});
let S=BASE();
function load(raw){try{const x=typeof raw==="string"?JSON.parse(raw):raw;if(x&&typeof x==="object"){const b=BASE();S=Object.assign(b,x);S.set=Object.assign(b.set,x.set||{});return true}}catch(e){}return false}
try{load(localStorage.getItem(KEY))}catch(e){}
const bootFresh=!S.ts;
let saveT=null;
const save=()=>{S.ts=Date.now();const raw=JSON.stringify(S);try{localStorage.setItem(KEY,raw)}catch(e){}
  const pref=P("Preferences");if(pref){clearTimeout(saveT);saveT=setTimeout(()=>pref.set({key:KEY,value:raw}).catch(()=>{}),300)}
  if(cloud){clearTimeout(cloudT);cloudT=setTimeout(push,1200)}};
/* web preview inside Claude: keep progress in the artifact's private per-person store */
let cloud=null,cloudT=null,writing=false,dirty=false;
async function push(){if(!cloud)return;if(writing){dirty=true;return}writing=true;
  try{await cloud.set({raw:JSON.stringify(S),ts:S.ts||Date.now()})}catch(e){if(e&&e.code==="unavailable"){setTimeout(push,1500+Math.random()*1000)}else if(e&&(e.code==="invalid_argument"||e.code==="revoked"||e.code==="quota_exceeded"))cloud=null}
  writing=false;if(dirty){dirty=false;push()}}
const T=()=>{const d=today();S.counts[d]=S.counts[d]||{cards:0,drill:0,newc:0};S.done[d]=S.done[d]||{};return d};

/* ---------- feedback ---------- */
function haptic(kind){if(!S.set.haptic)return;const h=P("Haptics");if(h){if(kind==="ok")h.impact({style:"LIGHT"}).catch(()=>{});else if(kind==="bad")h.notification({type:"WARNING"}).catch(()=>{});else if(kind==="win")h.notification({type:"SUCCESS"}).catch(()=>{});else h.selectionChanged&&h.selectionChanged().catch(()=>{})}}
let toastT;function toast(msg){const t=$("toast");t.textContent=msg;t.classList.add("on");clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove("on"),2200)}
function burst(){if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;const c=$("burst"),x=c.getContext("2d");const W=c.width=innerWidth*devicePixelRatio,H=c.height=innerHeight*devicePixelRatio;
  const cols=["#f0b34c","#2340c8","#1d7a52","#8ea4ff","#ffffff"];const ps=Array.from({length:90},()=>({x:W/2,y:H*.42,vx:(Math.random()-.5)*16*devicePixelRatio,vy:(-Math.random()*14-4)*devicePixelRatio,r:(3+Math.random()*4)*devicePixelRatio,c:cols[Math.random()*cols.length|0],a:Math.random()*6}));
  let f=0;(function step(){x.clearRect(0,0,W,H);ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.45*devicePixelRatio;p.a+=.2;x.fillStyle=p.c;x.save();x.translate(p.x,p.y);x.rotate(p.a);x.fillRect(-p.r,-p.r/2,p.r*2,p.r);x.restore()});if(++f<90)requestAnimationFrame(step);else x.clearRect(0,0,W,H)})()}

/* ---------- theme ---------- */
const mq=matchMedia("(prefers-color-scheme: dark)");
function applyTheme(){const t=S.set.theme;const dark=t==="dark"||(t==="auto"&&mq.matches);document.documentElement.classList.toggle("dark",dark);
  document.querySelector('meta[name=theme-color]').content=dark?"#0a0e22":"#16204a"}
mq.addEventListener?mq.addEventListener("change",applyTheme):mq.addListener(applyTheme);

/* ---------- tabs ---------- */
const TABS=[["today","Today",'<circle cx="12" cy="12" r="8.5"/><path d="M8.3 12.4l2.6 2.6 4.8-5.2"/>'],["cards","Words",'<rect x="3.5" y="5" width="17" height="14" rx="2.5"/><path d="M7.5 10h9M7.5 14h5.5"/>'],["grammar","Grammar",'<path d="M4.5 19l5-14 5 14M6.8 13.5h5.4M16 9.5l3.5 3-3.5 3"/>'],["practice","Practice",'<circle cx="12" cy="13.5" r="7"/><path d="M12 10v3.8l2.6 1.7M10 3h4"/>'],["test","Test",'<path d="M6.5 3.5h11v17l-5.5-3.4-5.5 3.4z"/>']];
$("tabs").innerHTML=TABS.map(t=>`<button data-v="${t[0]}" aria-label="${t[1]}"><svg viewBox="0 0 24 24" aria-hidden="true">${t[2]}</svg>${t[1]}</button>`).join("");
let curView="today";
function show(v){if(!TABS.some(t=>t[0]===v))v="today";curView=v;document.querySelectorAll(".view").forEach(s=>s.classList.toggle("on",s.id==="v-"+v));
  document.querySelectorAll("#tabs button").forEach(b=>b.setAttribute("aria-current",b.dataset.v===v));
  if(location.hash.slice(1)!==v)history.replaceState(null,"","#"+v);render(v);$("main").scrollTop=0}
$("tabs").addEventListener("click",e=>{const b=e.target.closest("button");if(b){haptic();show(b.dataset.v)}});
window.addEventListener("hashchange",()=>show(location.hash.slice(1)));

/* ---------- stats ---------- */
const idOf=c=>c[0]+"|"+c[1];
const isNew=c=>S.next[idOf(c)]===undefined;
const isDue=c=>!isNew(c)&&S.next[idOf(c)]<=today();
const isWeak=c=>!isNew(c)&&(S.box[idOf(c)]||0)<=1;
function stats(){const decks=[...new Set(CARDS.map(c=>c[0]))];const st={};decks.forEach(d=>st[d]={n:0,l:0,k:0,m:0});let L=0,K=0,M=0;
  CARDS.forEach(c=>{const s=st[c[0]];s.n++;if(isNew(c))return;const b=S.box[idOf(c)]||0;if(b>=5){s.m++;M++}else if(b>=3){s.k++;K++}else{s.l++;L++}});
  let drills=0,reviews=0;Object.values(S.counts).forEach(c=>{drills+=c.drill||0;reviews+=c.cards||0});
  const passages=Object.keys(S.drafts).filter(k=>k.startsWith("done_")&&S.drafts[k]).length;
  const spots=Object.values(S.spot).filter(x=>x&&x.complete).length;
  const xp=L*2+K*6+M*10+drills*2+passages*60+spots*40;return {decks,st,L,K,M,drills,reviews,passages,spots,xp}}
function autoTicks(){const d=T();const c=S.counts[d];if(c.cards>=20)S.done[d].cards=true;if(c.drill>=5)S.done[d].drill=true}
const dayComplete=d=>{const x=S.done[d]||{};return x.cards&&x.drill&&x.read};
function streakOf(){let streak=0,x=today();if(!dayComplete(x))x=addDays(x,-1);while(dayComplete(x)){streak++;x=addDays(x,-1)}return streak}
const dueCount=()=>CARDS.filter(isDue).length;

/* ---------- today ---------- */
function renderToday(){autoTicks();const d=T();const done=S.done[d];const c=S.counts[d];
  $("todaydate").textContent=new Date().toLocaleDateString("en-AU",{weekday:"long",day:"numeric",month:"long"});
  $("tasks").innerHTML=TASKS.map(t=>{const m=t[0]==="cards"?`${Math.min(c.cards,20)}/20`:t[0]==="drill"?`${Math.min(c.drill,5)}/5`:"";return `<label class="task"><input type="checkbox" data-t="${t[0]}" ${done[t[0]]?"checked":""}><span><b>${esc(t[1])}</b><small>${esc(t[2])}</small></span>${m?`<span class="meter">${m}</span>`:""}</label>`}).join("");
  const s=stats();const total=CARDS.length;const known=s.K+s.M;const pct=Math.round(known/total*100);
  let li=0;LEVELS.forEach((l,i)=>{if(s.xp>=l[1])li=i});const nxt=LEVELS[li+1];const into=nxt?(s.xp-LEVELS[li][1])/(nxt[1]-LEVELS[li][1]):1;
  $("lvnum").textContent=`Level ${li+1} of ${LEVELS.length}`;$("lvname").textContent=LEVELS[li][0];$("hdr").textContent=LEVELS[li][0];
  $("xpbar").style.width=Math.round(into*100)+"%";$("xptext").textContent=nxt?`${s.xp.toLocaleString()} XP · ${(nxt[1]-s.xp).toLocaleString()} to ${nxt[0]}`:`${s.xp.toLocaleString()} XP · top level`;
  $("ladder").innerHTML=LEVELS.map((l,i)=>`<span class="${i<=li?"on":""}" title="${l[0]}"></span>`).join("");
  const R=74,C=2*Math.PI*R,a1=s.M/total,a2=s.K/total,a3=s.L/total;
  const arc=(f,off,col)=>f>0?`<circle cx="100" cy="100" r="${R}" fill="none" stroke="${col}" stroke-width="15" stroke-dasharray="${C*f} ${C}" stroke-dashoffset="${-C*off}" transform="rotate(-90 100 100)"/>`:"";
  let ticks="";for(let i=0;i<60;i++){const a=i*6*Math.PI/180,r2=i%5?88:84;ticks+=`<line x1="${(100+93*Math.sin(a)).toFixed(1)}" y1="${(100-93*Math.cos(a)).toFixed(1)}" x2="${(100+r2*Math.sin(a)).toFixed(1)}" y2="${(100-r2*Math.cos(a)).toFixed(1)}" stroke="rgba(255,255,255,.32)" stroke-width="1.3"/>`}
  $("stamp").innerHTML=`${ticks}<circle cx="100" cy="100" r="${R}" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="15"/>${arc(a3,a1+a2,"rgba(255,255,255,.4)")}${arc(a2,a1,"#8ea4ff")}${arc(a1,0,"#4fcf98")}<circle cx="100" cy="100" r="56" fill="none" stroke="rgba(255,255,255,.3)" stroke-dasharray="2 4"/><text x="100" y="106" text-anchor="middle" font-size="42" font-weight="600">${pct}%</text><text x="100" y="128" text-anchor="middle" font-size="12.5" opacity=".75" font-family="Inst,sans-serif">words known</text>`;
  if(S.test){const left=Math.round((new Date(S.test+"T12:00:00")-new Date(d+"T12:00:00"))/864e5);$("countdown").hidden=false;$("countdown").textContent=left>0?`${left} day${left===1?"":"s"} to your test`:left===0?"Test day. Bonne chance !":"Test date passed: set a new one"}else $("countdown").hidden=true;
  const due=dueCount();const nl=newLeft();
  $("gostudy").innerHTML=due||nl?`<svg viewBox="0 0 24 24"><path d="M7 4.5l11 7.5-11 7.5z"/></svg>${due?`Review ${due} word${due===1?"":"s"}`:`Learn ${nl} new words`}`:`<svg viewBox="0 0 24 24"><circle cx="12" cy="13.5" r="7"/><path d="M12 10v3.8l2.6 1.7"/></svg>Words done · do a timed passage`;
  const streak=streakOf();
  $("kpis").innerHTML=`<div class="kpi gold"><b>${streak}</b><span>day streak</span></div><div class="kpi"><b>${known}</b><span>of ${total} words known</span></div><div class="kpi"><b>${s.passages}</b><span>passages done</span></div><div class="kpi"><b>${s.spots}</b><span>revisions done</span></div>`;
  $("decks").innerHTML=s.decks.map(k=>{const v=s.st[k];const w=x=>(x/v.n*100).toFixed(1)+"%";return `<div class="deck" data-deck="${esc(k)}" role="button" tabindex="0"><span>${esc(k)}</span><div class="sb"><i class="c-m" style="width:${w(v.m)}"></i><i class="c-k" style="width:${w(v.k)}"></i><i class="c-l" style="width:${w(v.l)}"></i></div><em>${Math.round((v.m+v.k)/v.n*100)}%</em></div>`}).join("");
  const mk=Object.entries(S.marks).filter(([k,v])=>v&&v.date).sort((a,b)=>a[1].date<b[1].date?-1:1);
  if(mk.length){const avg=v=>{const xs=RUB.map(r=>v[r[0]]).filter(Boolean);return xs.length?xs.reduce((a,b)=>a+b,0)/xs.length:0};const last=mk.slice(-6);
    const per=RUB.map(r=>{const xs=mk.map(([k,v])=>v[r[0]]).filter(Boolean).slice(-5);return [r[1],xs.length?(xs.reduce((a,b)=>a+b,0)/xs.length):0]});
    $("markspanel").innerHTML=`<h3>Your self-marks <small>last 5 passages</small></h3><div class="panel">${per.map(([n,v])=>`<div class="deck" style="cursor:default"><span>${esc(n)}</span><div class="sb"><i class="c-k" style="width:${v/5*100}%"></i></div><em>${v?v.toFixed(1):"–"}</em></div>`).join("")}<div class="small" style="margin-top:8px">Your weakest line is where your next passage should focus.</div></div>`}else $("markspanel").innerHTML="";
  let mx=1;const days=[];for(let i=13;i>=0;i--){const dd=addDays(d,-i);const v=(S.counts[dd]||{}).cards||0;mx=Math.max(mx,v);days.push([dd,v])}
  $("act").innerHTML=days.map(([dd,v])=>`<div class="${dd===d?"t":""}" title="${dd}: ${v}"><i class="${v?"":"z"}" style="height:${v?Math.max(6,v/mx*100):3}%"></i><small>${"SMTWTFS"[new Date(dd+"T12:00:00").getDay()]}</small></div>`).join("");
  const start=addDays(d,-34);let cells="";for(let i=0;i<35;i++){const dd=addDays(start,i);const some=Object.values(S.done[dd]||{}).some(Boolean);cells+=`<i class="${dayComplete(dd)?"d":some?"p":""} ${dd===d?"t":""}" title="${dd}"></i>`}
  $("ribbon").innerHTML=cells;
  updateBadge();
}
function updateBadge(){const b=document.querySelector('#tabs button[data-v=cards]');if(!b)return;const n=dueCount();let dot=b.querySelector(".dot");if(n){if(!dot){dot=document.createElement("span");dot.className="dot";b.appendChild(dot)}dot.textContent=n>99?"99+":n}else if(dot)dot.remove()}
$("gostudy").addEventListener("click",()=>{haptic();if(dueCount()||newLeft()){cat="All";cur=null;quiz=null;chk=null;show("cards")}else show("practice")});
function openDeck(r){cat=r.dataset.deck;cur=null;quiz=null;chk=null;mode="cards";show("cards")}
$("decks").addEventListener("click",e=>{const r=e.target.closest(".deck");if(r)openDeck(r)});
$("decks").addEventListener("keydown",e=>{const r=e.target.closest(".deck");if(r&&(e.key==="Enter"||e.key===" ")){e.preventDefault();openDeck(r)}});
$("tasks").addEventListener("change",e=>{const t=e.target.dataset.t;if(!t)return;const d=T();S.done[d][t]=e.target.checked;save();haptic(e.target.checked?"ok":"");if(e.target.checked&&dayComplete(d)){burst();haptic("win");toast("Day complete. Streak +1")}renderToday()});

/* ---------- cards ---------- */
const CATS=["All","Weak words",...new Set(CARDS.map(c=>c[0]))];let cat="All",mode="cards",cur=null,quiz=null,chk=null,extra=false;
const pool=()=>CARDS.filter(c=>cat==="All"||(cat==="Weak words"?isWeak(c):c[0]===cat));
const newLeft=()=>{const d=T();return Math.max(0,(+S.set.newday||20)-(S.counts[d].newc||0))};
function queue(){const p=pool();const due=p.filter(isDue);if(due.length)return due;const nw=p.filter(isNew);if(nw.length&&newLeft()>0)return nw;return []}
function pickCard(){const q=queue();const prev=cur;let c=q.length?q[Math.floor(Math.random()*q.length)]:null;if(c===prev&&q.length>1)c=q.find(x=>x!==prev);cur=c;extra=false}
function practiceCard(){const p=pool();cur=p.length?p[Math.floor(Math.random()*p.length)]:null;extra=true}
function record(ok){const k=idOf(cur);const wasNew=isNew(cur);let b=S.box[k]||0;b=ok?Math.min(b+1,5):0;S.box[k]=b;S.next[k]=addDays(today(),ok?(BOXDAYS[b]||1):0);const d=T();S.counts[d].cards++;if(wasNew)S.counts[d].newc=(S.counts[d].newc||0)+1;
  if(S.counts[d].cards===20&&!S.done[d].cards){S.done[d].cards=true;setTimeout(()=>{burst();haptic("win");toast("20 cards done for today")},150)}save()}
function renderCards(){
  $("cats").innerHTML=CATS.map(c=>{const n=c==="Weak words"?CARDS.filter(isWeak).length:c==="All"?null:CARDS.filter(x=>x[0]===c&&isDue(x)).length;return `<button class="chip" data-c="${esc(c)}" aria-pressed="${c===cat}">${esc(c)}${n?`<span class="n">${n}</span>`:""}</button>`}).join("");
  const p=pool();const due=p.filter(isDue).length;const nw=p.filter(isNew).length;const learnt=p.filter(c=>(S.box[idOf(c)]||0)>=3).length;
  $("due").innerHTML=`<div class="stat"><span><b>${due}</b> to review</span><span><b>${Math.min(nw,newLeft())}</b> new today</span><span><b>${learnt}</b>/${p.length} known</span></div><div class="bar"><i style="width:${p.length?learnt/p.length*100:0}%"></i></div>`;
  document.querySelectorAll("#cmode button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.m===mode));
  if(mode==="quiz")return renderQuiz();
  if(cur&&!p.includes(cur))cur=null;
  if(!cur&&!chk)pickCard();
  if(!cur){$("cardzone").innerHTML=`<div class="panel empty"><svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="28" fill="none" stroke="var(--green)" stroke-width="3"/><path d="M20 33l8 8 16-17" fill="none" stroke="var(--green)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg><h3 style="justify-content:center;margin:0 0 6px">${p.length?"All caught up":"Nothing here yet"}</h3><p class="small" style="margin:0 0 16px">${cat==="Weak words"?"Words you miss land here.":p.length?"Your next reviews come back tomorrow. Extra practice doesn't change your schedule.":""}</p>${p.length?`<button class="btn p" id="extra">Extra practice</button>`:""}</div>`;return}
  const res=chk;
  $("cardzone").innerHTML=`<form id="ansform" autocomplete="off"><div class="flash ${res?(res.ok?"ok":"bad"):""}" id="flash"><span class="tag"><span>${esc(cur[0])}</span>${extra?"<span>practice</span>":isNew(cur)?'<span class="new">NEW</span>':""}</span><div class="hw">${esc(cur[1])}</div>${res?`<div class="verdict ${res.ok?"ok":"bad"}">${res.ok?(res.typo?"Right · small typo":"Correct"):"Not quite"}</div>${res.typed?`<div class="yours">You wrote: <span class="${res.ok?"r":"w"}">${esc(res.typed)}</span></div>`:""}<div class="en">${esc(cur[2])}</div>${cur[3]?`<div class="note">${esc(cur[3])}</div>`:""}`:`<input id="answer" class="inline" type="text" placeholder="Type the English" aria-label="Your English answer" autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" enterkeyhint="go">`}</div>
  ${res&&!res.ok?retypeBlock(res):""}<div class="ans">${res?(!res.ok&&!res.fixed?`<button class="btn p" type="submit">Check</button><button class="btn" id="flipres" type="button">I was right</button>`:`<button class="btn p" id="next" type="submit">Next</button><button class="btn" id="flipres" type="button">${res.ok?"Count as wrong":"I was right"}</button>`):`<button class="btn p" type="submit">Check</button><button class="btn" id="skip" type="button">Show answer</button>`}</div></form>`;
  const inp=$("answer")||$("retype");if(inp){inp.focus({preventScroll:true})}else{const nb=$("next");if(nb)nb.focus({preventScroll:true})}
}
const norm=s=>s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/['’`]/g,"").replace(/[^a-z0-9 ]+/g," ").replace(/\b(a|an|the|to)\b/g," ").replace(/\s+/g," ").trim();
function lev(a,b){const m=a.length,n=b.length;if(!m)return n;if(!n)return m;let p=[...Array(n+1).keys()];for(let i=1;i<=m;i++){const c=[i];for(let j=1;j<=n;j++)c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1));p=c}return p[n]}
function answers(en){const out=new Set();const full=en.replace(/\(.*?\)/g,"");out.add(norm(full));out.add(norm(en));full.split(/[\/;,]| or /).forEach(x=>{const t=norm(x);if(t)out.add(t)});return [...out].filter(Boolean)}
function check(typed){const t=norm(typed);if(!t)return {ok:false,typed};const as=answers(cur[2]);if(as.includes(t))return {ok:true,typed};const close=as.some(a=>lev(a,t)<=Math.max(1,Math.floor(a.length/7)));return {ok:close,typo:close,typed}}
function retypeBlock(r){if(r.fixed)return `<div class="retype done"><span class="verdict ok">Locked in</span><div class="small" style="margin-top:6px">It comes back later today, then tomorrow.</div></div>`;
  return `<div class="retype ${r.shake?"shake":""}"><label for="retype"><b>Write it correctly to lock it in</b><span class="small">Typing the right answer once helps it stick.</span></label><input id="retype" class="inline" type="text" placeholder="Type it here" aria-label="Type the correct English" autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" enterkeyhint="done">${r.tries?`<div class="small" style="color:var(--red);margin-top:6px">Not yet: copy it from above.</div>`:""}<button class="linkbtn" id="skipretype" type="button">Skip</button></div>`}
function tryRetype(r,val){const t=norm(val);const as=answers(cur[2]);const ok=!!t&&(as.includes(t)||as.some(a=>lev(a,t)<=Math.max(1,Math.floor(a.length/7))));
  if(ok){r.fixed=true;r.shake=false;haptic("ok")}else{r.tries=(r.tries||0)+1;r.shake=true;haptic("bad")}return ok}
function grade(ok){if(!extra)record(ok);else{const d=T();S.counts[d].cards++;save()}chk=null;if(extra)practiceCard();else pickCard();renderCards();updateBadge()}
function newQuiz(){practiceCard();if(!cur)return;const same=CARDS.filter(c=>c!==cur&&c[0]===cur[0]&&c[2]!==cur[2]);const others=same.length>=3?same:CARDS.filter(c=>c!==cur&&c[2]!==cur[2]);const opts=[cur];let g=0;while(opts.length<4&&g++<200){const o=others[Math.floor(Math.random()*others.length)];if(!opts.some(x=>x[2]===o[2]))opts.push(o)}quiz={opts:opts.sort(()=>Math.random()-.5),ans:null}}
function renderQuiz(){if(!quiz)newQuiz();if(!cur){$("cardzone").innerHTML=`<div class="panel empty"><b>No cards here yet.</b></div>`;return}
  $("cardzone").innerHTML=`<div class="panel"><div class="eyebrow">${esc(cur[0])}</div><div class="hw" style="font-size:32px;margin:8px 0 4px">${esc(cur[1])}</div><div class="small">Choose the best English</div><div class="opts">${quiz.opts.map((o,i)=>`<button class="opt ${quiz.ans!==null?(o===cur?"ok":i===quiz.ans?"bad":""):""}" data-i="${i}" ${quiz.ans!==null?"disabled":""}>${esc(o[2])}</button>`).join("")}</div>${quiz.ans!==null?`${cur[3]?`<p class="small" style="margin-top:12px">${esc(cur[3])}</p>`:""}${quiz.fix?retypeBlock(quiz.fix):""}${quiz.fix&&!quiz.fix.fixed?`<button class="btn p wide" id="qcheck" style="margin-top:12px">Check</button>`:`<button class="btn p wide" id="qnext" style="margin-top:12px">Next</button>`}`:""}</div>`;const r=$("retype");if(r)r.focus({preventScroll:true})}
$("cardzone").addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.id==="retype"&&mode==="quiz"){e.preventDefault();$("qcheck")&&$("qcheck").click()}});
$("cats").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;haptic();cat=b.dataset.c;cur=null;quiz=null;chk=null;renderCards()});
$("cmode").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;haptic();mode=b.dataset.m;cur=null;chk=null;quiz=null;renderCards()});
$("cardzone").addEventListener("submit",e=>{e.preventDefault();if(chk&&!chk.ok&&!chk.fixed){const r=$("retype");if(r&&!r.value.trim()){r.focus();return}if(r)tryRetype(chk,r.value);renderCards();return}if(chk){grade(chk.ok);return}const a=$("answer");if(!a.value.trim()){a.focus();return}chk=check(a.value);haptic(chk.ok?"ok":"bad");renderCards()});
$("cardzone").addEventListener("click",e=>{
  if(e.target.id==="skip"){chk={ok:false,typed:""};haptic("bad");renderCards();return}
  if(e.target.id==="skipretype"){if(mode==="quiz"&&quiz){quiz.fix.fixed=true;renderQuiz()}else if(chk){chk.fixed=true;renderCards()}return}
  if(e.target.id==="qcheck"){const r=$("retype");if(r)tryRetype(quiz.fix,r.value);renderQuiz();const n=$("retype");if(n)n.focus();return}
  if(e.target.id==="flipres"){chk.ok=!chk.ok;chk.typo=false;chk.fixed=chk.ok?false:chk.fixed;renderCards();return}
  if(e.target.id==="extra"){chk=null;practiceCard();renderCards();return}
  const o=e.target.closest(".opt");if(o&&quiz&&quiz.ans===null){quiz.ans=+o.dataset.i;const ok=quiz.opts[quiz.ans]===cur;haptic(ok?"ok":"bad");if(!ok)quiz.fix={};const d=T();S.counts[d].cards++;if(!ok){const k=idOf(cur);if(!isNew(cur)){S.box[k]=0;S.next[k]=today()}}save();renderQuiz();return}
  if(e.target.id==="qnext"){quiz=null;renderCards()}});

/* ---------- grammar ---------- */
let dr=null,lastRule=-1,rq="";
function newDrill(){let i;do{i=Math.floor(Math.random()*RULES.length)}while(i===lastRule&&RULES.length>1);lastRule=i;const r=RULES[i];const flip=Math.random()<.5;dr={r,opts:flip?[r[2],r[1]]:[r[1],r[2]],ans:null}}
function renderGrammar(){if(!dr)newDrill();const d=T();const n=Math.min(S.counts[d].drill,5);
  $("drill").innerHTML=`<div class="row between"><span class="eyebrow">Which is correct?</span><span class="small">${n}/5 today</span></div><div class="bar" style="margin:8px 0 10px"><i style="width:${n/5*100}%"></i></div><b class="serif" style="font-size:20px">${esc(dr.r[0])}</b><div class="opts">${dr.opts.map((o,i)=>`<button class="opt ${dr.ans!==null?(o===dr.r[2]?"ok":i===dr.ans?"bad":""):""}" data-i="${i}" ${dr.ans!==null?"disabled":""}>${esc(o)}</button>`).join("")}</div>${dr.ans!==null?`${dr.r[3]?`<p class="small" style="margin-top:12px">${esc(dr.r[3])}</p>`:""}<button class="btn p wide" id="dnext" style="margin-top:12px">Next drill</button>`:""}`;
  const q=norm(rq);const list=RULES.filter(r=>!q||norm(r.join(" ")).includes(q));
  $("rulecount").textContent=`${list.length} of ${RULES.length}`;
  $("rules").innerHTML=list.length?list.map(r=>`<div class="rule"><b>${esc(r[0])}</b><span class="w">${esc(r[1])}</span><br><span class="r">${esc(r[2])}</span>${r[3]?`<div class="small" style="margin-top:3px">${esc(r[3])}</div>`:""}</div>`).join(""):`<div class="small">No rule matches.</div>`;
}
$("rulesearch").addEventListener("input",e=>{rq=e.target.value;renderGrammar()});
$("drill").addEventListener("click",e=>{const o=e.target.closest(".opt");if(o&&dr.ans===null){dr.ans=+o.dataset.i;const ok=dr.opts[dr.ans]===dr.r[2];haptic(ok?"ok":"bad");const d=T();S.counts[d].drill++;if(S.counts[d].drill===5&&!S.done[d].drill){S.done[d].drill=true;setTimeout(()=>{burst();haptic("win");toast("5 drills done for today")},150)}save();renderGrammar();return}if(e.target.id==="dnext"){dr=null;renderGrammar()}});

/* ---------- practice ---------- */
const RUB=[["meaning","Meaning","Nothing added, missed or distorted"],["norms","Conventions","Dates, numbers, names, layout, terms of address"],["lang","English","Grammar, idiom, register: reads like it was written in English"],["tech","Accuracy","Spelling, punctuation, capitals, copied figures"]];
const DUR={q:600,p:3600,r:3000};
const ITEMS=[...QUICK.map((p,i)=>({kind:"q",key:"q"+i,...p})),...PASSAGES.map((p,i)=>({kind:"p",key:"p"+i,...p})),...REVS.map((r,i)=>({kind:"r",key:"r"+i,...r}))];
let pkind="q",pi=0,left=600,tick=null,endAt=0,rmode="spot";
const fmt=s=>`${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`;
const words=t=>(t.trim().match(/\S+/g)||[]).length;
const kindItems=()=>ITEMS.filter(x=>x.kind===pkind);
function spans(it){const out=[];it.errs.forEach((e,i)=>{let s=e[0];let at=it.bad.indexOf(s);if(at<0&&s.includes("…")){s=s.split("…")[0].trim();at=it.bad.indexOf(s)}
  if(at<0)return;let from=0;while(at>=0&&out.some(o=>at<o.e&&at+s.length>o.s)){from=at+1;at=it.bad.indexOf(s,from)}if(at>=0)out.push({s:at,e:at+s.length,i})});return out.sort((a,b)=>a.s-b.s)}
function renderSpot(it){const st=S.spot[it.key]||{found:[],miss:[],complete:false};S.spot[it.key]=st;const sp=spans(it);const reveal=st.reveal;
  let html="",pos=0,w=0;const tok=(text,e)=>text.split(/(\s+)/).map(p=>{if(!p)return"";if(/^\s+$/.test(p))return p;const id=w++;let cls="t";if(e>=0&&st.found.includes(e))cls+=" f";else if(e>=0&&reveal)cls+=" rv";else if(st.miss.includes(id))cls+=" m";return `<span class="${cls}" data-w="${id}" data-e="${e}">${esc(p)}</span>`}).join("");
  sp.forEach(o=>{html+=tok(it.bad.slice(pos,o.s),-1)+tok(it.bad.slice(o.s,o.e),o.i);pos=o.e});html+=tok(it.bad.slice(pos),-1);
  const n=it.errs.length,f=st.found.length;
  const list=it.errs.map((e,i)=>({e,i})).filter(x=>st.found.includes(x.i)||reveal);
  return `<div class="panel"><span class="eyebrow">French source</span><div class="src" style="margin-top:8px">${esc(it.fr)}</div></div>
  <div class="panel"><div class="row between"><span class="eyebrow">Tap every error in the English</span>${st.complete?'<span class="pill done-pill">Done</span>':""}</div>
  <div class="score"><span><b>${f}</b>/${n} found</span><span><b style="color:${st.miss.length?"var(--red)":"inherit"}">${st.miss.length}</b> false alarms</span></div>
  <div class="bar"><i style="width:${f/n*100}%"></i></div>
  <div class="spot" id="spot">${html}</div>
  ${list.length?`<ul class="fixes">${list.map(x=>`<li class="${st.found.includes(x.i)?"":"rv"}"><span class="w">${esc(x.e[0])}</span> → <span class="r">${esc(x.e[1])}</span></li>`).join("")}</ul>`:""}
  <div class="row" style="margin-top:14px">${f<n&&!reveal?`<button class="btn" id="reveal">Show what I missed</button>`:""}<button class="btn ghost" id="spotreset">Start again</button></div>
  ${(f===n||reveal)?`<details open><summary>Good translation</summary><div class="src" style="margin-top:8px">${esc(it.good)}</div></details>`:""}
  <p class="small" style="margin-top:12px">In the test you also write your corrections and justify them. Switch to <b>Rewrite</b> to practise that.</p></div>`}
function renderPractice(){
  document.querySelectorAll("#pkind button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.k===pkind));
  const list=kindItems();if(pi>=list.length)pi=0;
  $("ptabs").innerHTML=list.map((t,i)=>{const done=t.kind==="p"?S.drafts["done_"+t.key]:(S.spot[t.key]||{}).complete;return `<button class="chip" data-p="${i}" aria-pressed="${i===pi}">${done?"✓ ":""}${esc(t.t.replace(/^Revision \d+: /,""))}</button>`}).join("");
  const it=list[pi];const isRev=it.kind==="r";
  const timer=`<div class="panel"><div class="row between"><div><div class="timer ${left<Math.min(300,DUR[pkind]/5)?"low":""}" id="clock">${fmt(left)}</div><div class="small" style="margin-top:4px">${isRev?"Budget about 50 minutes in the test.":it.kind==="q"?"Short drill: same care as the test, in 10 minutes.":"About 50–60 minutes per text in the test."}</div></div><div class="row"><button class="btn p" id="tgo">${tick?"Pause":"Start"}</button><button class="btn" id="treset" aria-label="Reset timer">Reset</button></div></div></div>`;
  const head=`<div class="row" style="margin-bottom:10px;gap:8px"><span class="pill">${esc(it.dom||"General")}</span>${isRev?`<span class="small">${it.errs.length} errors</span>`:`<span class="small">${words(it.fr)} words</span>`}</div>`;
  if(isRev){
    const seg=`<div class="seg" id="rmode"><button data-r="spot" aria-pressed="${rmode==="spot"}">Spot the errors</button><button data-r="edit" aria-pressed="${rmode==="edit"}">Rewrite</button></div>`;
    if(rmode==="spot"){$("pzone").innerHTML=head+seg+renderSpot(it);return}
    const draft=S.drafts[it.key]??it.bad;
    $("pzone").innerHTML=head+seg+timer+`<div class="panel"><span class="eyebrow">French source</span><div class="src" style="margin-top:8px">${esc(it.fr)}</div>
    <p style="margin:16px 0 6px"><b>This translation has ${it.errs.length} errors.</b> Fix them below.</p>
    <textarea id="draft" aria-label="Your corrected translation" autocapitalize="sentences" spellcheck="false">${esc(draft)}</textarea>
    <div class="row" style="margin-top:10px"><button class="btn" id="copy">Copy for marking</button><span class="small" id="copied"></span></div>
    <details><summary>Show the ${it.errs.length} errors</summary><ol class="err">${it.errs.map(e=>`<li><span class="w">${esc(e[0])}</span> → <span class="r">${esc(e[1])}</span></li>`).join("")}</ol><div class="src">${esc(it.good)}</div></details></div>`;
    return}
  const draft=S.drafts[it.key]??"";const done=S.drafts["done_"+it.key];const mk=S.marks[it.key]||{};
  $("pzone").innerHTML=head+timer+`<div class="panel"><span class="eyebrow">Translate into English</span><div class="src" style="margin-top:8px">${esc(it.fr)}</div>
  <div class="row between" style="margin:16px 0 6px"><b>Your translation</b><span class="small" id="wc">${words(draft)} words · saved on this phone</span></div>
  <textarea id="draft" aria-label="Your translation" autocapitalize="sentences" spellcheck="false" placeholder="Write your English here. Spellcheck is off, like in the test.">${esc(draft)}</textarea>
  <div class="row" style="margin-top:10px"><button class="btn ${done?"":"g"}" id="finish">${done?"Done ✓":"Finish and compare"}</button><button class="btn" id="copy">Copy for marking</button><span class="small" id="copied"></span></div>
  ${done?`<details open><summary>Compare with a model</summary><div class="cmp" style="margin-top:8px"><div><div class="eyebrow" style="margin-bottom:6px">Yours</div><div class="src">${esc(draft||"(empty)")}</div></div><div><div class="eyebrow" style="margin-bottom:6px">Model</div><div class="src">${esc(it.en)}</div></div></div><h3>Watch for</h3><ul style="margin:0;padding-left:20px">${it.notes.map(x=>`<li style="margin-bottom:5px">${esc(x)}</li>`).join("")}</ul></details>
  <details open><summary>Mark yourself</summary><p class="small" style="margin:4px 0 8px">1 = many problems · 5 = no problems. Be strict: the test is.</p><div class="rub">${RUB.map(r=>`<div class="q"><span>${r[1]} <small>· ${r[2]}</small></span><div class="sc" data-k="${r[0]}">${[1,2,3,4,5].map(n=>`<button aria-pressed="${mk[r[0]]===n}" data-n="${n}">${n}</button>`).join("")}</div></div>`).join("")}</div>${S.times[it.key]?`<p class="small" style="margin-top:10px">Time used: ${fmt(S.times[it.key])}</p>`:""}</details>`
  :`<details><summary>Peek at the model</summary><p class="small">Better to finish first. The comparison and self-marking open when you tap Finish.</p><div class="src" style="margin-top:8px">${esc(it.en)}</div></details>`}
  <details><summary>Self-check before you finish</summary><ul style="margin:6px 0 0;padding-left:20px"><li>Nothing left out, nothing added</li><li>Every number, date and name copied exactly</li><li>No false friends (actuellement, éventuellement, important…)</li><li>Read it aloud: would an Australian have written it?</li><li>Spelling and capitals checked by eye</li></ul></details></div>
  <p class="small">Practice texts written for this app in the style of test passages. The model is one good version, not the only one.</p>`;
}
$("pkind").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;haptic();pkind=b.dataset.k;pi=0;stopTimer();left=DUR[pkind];renderPractice()});
$("ptabs").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;haptic();pi=+b.dataset.p;if(!tick)left=DUR[pkind];renderPractice()});
$("pzone").addEventListener("input",e=>{if(e.target.id==="draft"){const it=kindItems()[pi];S.drafts[it.key]=e.target.value;save();const wc=$("wc");if(wc)wc.textContent=`${words(e.target.value)} words · saved on this phone`}});
function stopTimer(){if(tick)left=Math.max(0,Math.round((endAt-Date.now())/1000));clearInterval(tick);tick=null}
$("pzone").addEventListener("click",async e=>{
  const it=kindItems()[pi];const id=e.target.id;
  const rb=e.target.closest("#rmode button");if(rb){haptic();rmode=rb.dataset.r;renderPractice();return}
  const t=e.target.closest("#spot .t");if(t){const st=S.spot[it.key];const ei=+t.dataset.e,wi=+t.dataset.w;
    if(ei>=0){if(!st.found.includes(ei)){st.found.push(ei);haptic("ok")}}else{if(!st.miss.includes(wi)){st.miss.push(wi);haptic("bad")}else{st.miss=st.miss.filter(x=>x!==wi)}}
    if(st.found.length===it.errs.length&&!st.complete){st.complete=true;const d=T();S.done[d].write=true;setTimeout(()=>{burst();haptic("win");toast(st.miss.length?`All ${it.errs.length} found, ${st.miss.length} false alarm${st.miss.length>1?"s":""}`:"Every error found. Clean sweep.")},120)}
    save();const y=$("main").scrollTop;renderPractice();$("main").scrollTop=y;return}
  if(id==="reveal"){S.spot[it.key].reveal=true;S.spot[it.key].complete=true;const d=T();S.done[d].write=true;save();renderPractice();return}
  if(id==="spotreset"){S.spot[it.key]={found:[],miss:[],complete:false};save();renderPractice();return}
  if(id==="tgo"){if(tick)stopTimer();else{endAt=Date.now()+left*1000;tick=setInterval(()=>{left=Math.max(0,Math.round((endAt-Date.now())/1000));const c=$("clock");if(c){c.textContent=fmt(left);c.classList.toggle("low",left<Math.min(300,DUR[pkind]/5))}if(!left){stopTimer();haptic("win");toast("Time's up");const b=$("tgo");if(b)b.textContent="Start"}},500)}e.target.textContent=tick?"Pause":"Start";haptic();return}
  if(id==="treset"){stopTimer();left=DUR[pkind];renderPractice();return}
  if(id==="finish"){if(!S.drafts["done_"+it.key]){S.drafts["done_"+it.key]=true;S.times[it.key]=DUR[pkind]-left;stopTimer();const d=T();S.done[d].write=true;save();burst();haptic("win")}renderPractice();return}
  const sc=e.target.closest(".sc button");if(sc){const k=sc.parentElement.dataset.k;S.marks[it.key]=Object.assign(S.marks[it.key]||{},{[k]:+sc.dataset.n,date:today()});save();haptic();const y=$("main").scrollTop;renderPractice();$("main").scrollTop=y;return}
  if(id==="copy"){const txt=`Please mark my practice translation like a NAATI Certified Translator examiner (French into English). List every error by type (meaning, conventions, language, spelling), suggest the fix, and tell me if it would pass.\n\nFRENCH SOURCE:\n${it.fr}\n\nMY ENGLISH:\n${$("draft").value}`;
    const sh=P("Share");if(sh){try{await sh.share({title:"My translation",text:txt});return}catch(err){}}
    try{await navigator.clipboard.writeText(txt);$("copied").textContent="Copied. Paste it to your tutor or AI marker."}catch(err){$("copied").textContent="Couldn't copy. Select the text and copy it."}}
});

/* ---------- test ---------- */
$("formats").innerHTML=FORMATS.map(f=>`<tr><td>${esc(f[0])}</td><td>${esc(f[1])}</td></tr>`).join("");
function renderSteps(){const n=STEPS.filter((s,i)=>S.steps[i]).length;$("stepcount").textContent=`${n} of ${STEPS.length}`;$("steps").innerHTML=STEPS.map((s,i)=>`<label class="task"><input type="checkbox" data-s="${i}" ${S.steps[i]?"checked":""}><span><b>${esc(s)}</b></span></label>`).join("")}
$("steps").addEventListener("change",e=>{const i=e.target.dataset.s;if(i==null)return;S.steps[i]=e.target.checked;save();haptic(e.target.checked?"ok":"");renderSteps()});

/* ---------- settings ---------- */
const sheet=$("settings");
function openSettings(){$("testdate").value=S.test||"";$("theme").value=S.set.theme;$("haptic").checked=!!S.set.haptic;$("remon").checked=!!S.set.remind;$("remtime").value=S.set.rtime;$("newday").value=String(S.set.newday);
  $("remrow").style.display=$("remtimerow").style.display=NATIVE?"":"none";$("remtimerow").style.opacity=S.set.remind?1:.45;sheet.classList.add("on")}
function closeSettings(){sheet.classList.remove("on");render(curView)}
$("opensettings").addEventListener("click",()=>{haptic();openSettings()});
sheet.addEventListener("click",e=>{if(e.target===sheet||e.target.closest("[data-close]"))closeSettings()});
$("testdate").addEventListener("change",e=>{S.test=e.target.value;save()});
$("theme").addEventListener("change",e=>{S.set.theme=e.target.value;save();applyTheme()});
$("haptic").addEventListener("change",e=>{S.set.haptic=e.target.checked;save();haptic("ok")});
$("newday").addEventListener("change",e=>{S.set.newday=+e.target.value;save()});
$("remon").addEventListener("change",async e=>{S.set.remind=e.target.checked;save();$("remtimerow").style.opacity=S.set.remind?1:.45;const ok=await schedule();if(S.set.remind&&!ok){S.set.remind=false;e.target.checked=false;save();$("remnote").textContent="Allow notifications for Certifié in iPhone Settings first"}else if(S.set.remind)toast(`Reminder set for ${S.set.rtime} every day`)});
$("remtime").addEventListener("change",e=>{S.set.rtime=e.target.value||"19:00";save();if(S.set.remind)schedule().then(()=>toast(`Reminder moved to ${S.set.rtime}`))});
const NUDGES=["Your words are waiting. 10 minutes keeps the streak.","Quick one: 20 cards and 5 drills.","Un petit effort ? Today's reviews take about 10 minutes.","Keep the stamp in sight: today's session is ready."];
async function schedule(){const ln=P("LocalNotifications");if(!ln)return false;try{await ln.cancel({notifications:[{id:1}]}).catch(()=>{});if(!S.set.remind)return true;
  let perm=await ln.checkPermissions();if(perm.display!=="granted")perm=await ln.requestPermissions();if(perm.display!=="granted")return false;
  const [h,m]=S.set.rtime.split(":").map(Number);await ln.schedule({notifications:[{id:1,title:"Certifié",body:NUDGES[Math.floor(Math.random()*NUDGES.length)],schedule:{on:{hour:h,minute:m},allowWhileIdle:true}}]});return true}catch(err){return false}}
$("exportbtn").addEventListener("click",async()=>{const raw=JSON.stringify(S);const name=`certifie-backup-${today()}.json`;
  const fs=P("Filesystem"),sh=P("Share");if(fs&&sh){try{const r=await fs.writeFile({path:name,data:raw,directory:"CACHE",encoding:"utf8"});await sh.share({title:"Certifié backup",url:r.uri});return}catch(err){}}
  const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([raw],{type:"application/json"}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),2000)});
$("importfile").addEventListener("change",e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const x=JSON.parse(r.result);if(!x||typeof x.box!=="object")throw 0;if(confirm("Replace your current progress with this backup?")){load(x);save();applyTheme();toast("Progress restored");closeSettings()}}catch(err){toast("That file isn't a Certifié backup")}};r.readAsText(f);e.target.value=""});
$("resetbtn").addEventListener("click",()=>{if(confirm("Delete all your progress on this phone? This can't be undone.")){const keep={set:S.set,onb:true};S=BASE();Object.assign(S,keep);save();toast("Progress reset");closeSettings()}});
$("ver").textContent="Version "+VERSION;

/* ---------- onboarding ---------- */
function maybeOnboard(){if(S.onb)return;$("onb").classList.add("on")}
$("onbgo").addEventListener("click",()=>{S.test=$("onbdate").value||S.test;S.onb=true;save();haptic("win");$("onb").classList.remove("on");render(curView)});


/* keyboard: keep the field in view */
const kbOn=()=>{document.documentElement.classList.add("kb")};
const kbOff=()=>{document.documentElement.classList.remove("kb")};
const reveal=()=>{const a=document.activeElement;if(a&&/INPUT|TEXTAREA/.test(a.tagName)&&a.type!=="date"&&a.type!=="time"){const box=a.closest(".flash,.retype,.panel")||a;box.scrollIntoView({block:a.tagName==="TEXTAREA"?"start":"center",behavior:"smooth"})}};
document.addEventListener("focusin",e=>{if(/INPUT|TEXTAREA/.test(e.target.tagName)&&!/date|time|checkbox|file/.test(e.target.type)){if(!NATIVE&&matchMedia("(pointer:coarse)").matches)kbOn();setTimeout(reveal,350)}});
document.addEventListener("focusout",()=>{if(!NATIVE)setTimeout(()=>{const a=document.activeElement;if(!a||!/INPUT|TEXTAREA/.test(a.tagName))kbOff()},150)});
if(window.visualViewport&&!NATIVE)visualViewport.addEventListener("resize",()=>setTimeout(reveal,50));
/* ---------- boot ---------- */
function render(v){if(v==="today")renderToday();if(v==="cards")renderCards();if(v==="grammar")renderGrammar();if(v==="practice")renderPractice();if(v==="test")renderSteps();updateBadge()}
applyTheme();
show(location.hash.slice(1)||"today");
maybeOnboard();
document.addEventListener("visibilitychange",()=>{if(!document.hidden&&curView!=="practice")render(curView)});
if(!NATIVE)(async()=>{try{
  for(let i=0;i<30&&!(window.claude&&window.claude.use);i++)await new Promise(r=>setTimeout(r,100));
  if(!(window.claude&&window.claude.use))return;
  const [db,u]=await Promise.all([window.claude.use("db"),window.claude.use("user")]);if(!db||!u)return;
  const id=await u.id();if(!id)return;
  const ref=db.doc("data/users/"+id+"/progress");const snap=await ref.get();
  const d=snap.exists?snap.data():null;
  if(d&&d.raw&&(bootFresh||(d.ts||0)>(S.ts||0))){load(d.raw);try{localStorage.setItem(KEY,d.raw)}catch(e){}applyTheme();if(S.onb)$("onb").classList.remove("on");render(curView)}
  cloud=ref;if(!d||(d.ts||0)<(S.ts||0))push();
  document.addEventListener("visibilitychange",()=>{if(document.hidden&&cloudT){clearTimeout(cloudT);cloudT=null;push()}});
}catch(e){}})();
if(NATIVE){
  const kb=P("Keyboard");if(kb){kb.setAccessoryBarVisible({isVisible:false}).catch(()=>{});kb.addListener("keyboardWillShow",kbOn);kb.addListener("keyboardDidShow",()=>setTimeout(reveal,30));kb.addListener("keyboardWillHide",kbOff)}
  const pref=P("Preferences");if(pref)pref.get({key:KEY}).then(r=>{if(!r||!r.value)return save();try{const x=JSON.parse(r.value);if((x.ts||0)>(S.ts||0)){load(x);applyTheme();render(curView);if(S.onb)$("onb").classList.remove("on")}else save()}catch(e){}}).catch(()=>{});
  const sb=P("StatusBar");if(sb)sb.setStyle({style:"DARK"}).catch(()=>{});
  const ss=P("SplashScreen");if(ss)setTimeout(()=>ss.hide().catch(()=>{}),200);
  const app=P("App");if(app)app.addListener("appStateChange",s=>{if(s.isActive&&curView!=="practice")render(curView)});
  if(S.set.remind)schedule();
}
})();
