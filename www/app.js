(function(){
"use strict";
const {CARDS,RULES,FORMATS,PASSAGES,REVS}=window.NAATI_DATA;const QUICK=window.NAATI_DATA.QUICK||[];const EX=window.NAATI_EX||{};const NEWS=window.NAATI_NEWS||[];
const VERSION="1.0";
const CAP=window.Capacitor;const NATIVE=!!(CAP&&CAP.isNativePlatform&&CAP.isNativePlatform());
const P=n=>NATIVE&&CAP.Plugins?CAP.Plugins[n]:null;
if(NATIVE)document.documentElement.classList.add("native");

const TASKS=[
  ["cards","20 flashcards","Words · reviews first, then new words"],
  ["drill","5 grammar drills","Grammar"],
  ["read","Read one news story","Read tab · translate a paragraph in your head, then check. Save 2 terms to your cards."],
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

const DI={
 "False friends":'<path d="M4.5 9h15M4.5 15h15M15.5 4.5l-7 15"/>',
 "Civil status & ID":'<rect x="3" y="5.5" width="18" height="13" rx="2.25"/><circle cx="8.5" cy="11" r="2"/><path d="M5.75 15.5c.6-1.3 1.6-2 2.75-2s2.15.7 2.75 2M13.75 10h4.5M13.75 13.5h3"/>',
 "Migration":'<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.1 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.1-3.6-8.5S9.6 5.8 12 3.5z"/>',
 "Education":'<path d="M2.75 9.25L12 5l9.25 4.25L12 13.5z"/><path d="M6.5 11v4.25c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3V11M21.25 9.25v5"/>',
 "Work":'<rect x="3.25" y="7.5" width="17.5" height="12" rx="2.25"/><path d="M9 7.5V5.75A1.25 1.25 0 0110.25 4.5h3.5A1.25 1.25 0 0115 5.75V7.5M3.25 12.75h17.5"/>',
 "Money & tax":'<rect x="2.75" y="6.5" width="18.5" height="11" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 9.75v4.5M18 9.75v4.5"/>',
 "Housing":'<path d="M3.75 11L12 4.25 20.25 11"/><path d="M5.75 9.5v10.25h12.5V9.5M10 19.75v-5.25h4v5.25"/>',
 "Building & trades":'<rect x="3.5" y="3.75" width="13.5" height="5.5" rx="1.5"/><path d="M17 6.5h2.25a1 1 0 011 1v3.25a1 1 0 01-1 1H11v2.75"/><rect x="9.5" y="14.5" width="3" height="6.25" rx="1"/>',
 "Insurance":'<path d="M12 3.25l7.5 2.9v5.6c0 4.4-3.1 7.9-7.5 9.4-4.4-1.5-7.5-5-7.5-9.4v-5.6z"/><path d="M9 12l2.1 2.1L15.25 10"/>',
 "Legal":'<path d="M12 4v15.5M7.5 19.5h9M5 7.5h14M12 4.25V7.5"/><path d="M5 7.5l-2.5 6a2.75 2.75 0 005 0zM19 7.5l-2.5 6a2.75 2.75 0 005 0z"/>',
 "Police":'<path d="M12 2.75l2.55 5.2 5.7.8-4.12 4 1 5.65L12 15.75 6.87 18.4l1-5.65-4.12-4 5.7-.8z"/>',
 "Health":'<path d="M9.5 3.75h5v5.75h5.75v5h-5.75v5.75h-5v-5.75H3.75v-5H9.5z"/>',
 "Government":'<path d="M3.5 9L12 4.25 20.5 9z"/><path d="M5.75 9v8M10 9v8M14 9v8M18.25 9v8M3.25 20h17.5M4.25 17h15.5"/>',
 "Driving":'<path d="M4 15.75v-3.5l2.1-5.25h11.8l2.1 5.25v3.5z"/><path d="M4 12.25h16"/><circle cx="7.75" cy="18" r="1.75"/><circle cx="16.25" cy="18" r="1.75"/>',
 "Connectors":'<path d="M10 14l4-4"/><path d="M8.75 7.5l1.5-1.5a3.5 3.5 0 015 5l-1.5 1.5M15.25 16.5l-1.5 1.5a3.5 3.5 0 01-5-5l1.5-1.5"/>',
 "Admin verbs":'<rect x="5" y="4" width="14" height="16.5" rx="2.25"/><path d="M9.25 2.75h5.5v2.5h-5.5zM8.5 10h7M8.5 13.5h7M8.5 17h4"/>',
 "Contracts":'<path d="M6 3.25h8.25l4 4V20.75H6z"/><path d="M14 3.25v4.25h4.25M8.5 12h7M8.5 17c1.2-1.9 2.3.9 3.5-.7s1.9.8 3.3.2"/>',
 "Manuals & products":'<path d="M3.75 7.75L12 3.75l8.25 4v8.5L12 20.25l-8.25-4z"/><path d="M3.75 7.75L12 11.75l8.25-4M12 11.75v8.5"/>',
 "Business letters":'<rect x="3" y="5.75" width="18" height="12.5" rx="2.25"/><path d="M3.75 7l8.25 6.25L20.25 7"/>',
 "My words":'<path d="M6.5 3.75h11v16.5L12 16.5l-5.5 3.75z"/>',
 "Weak words":'<circle cx="12" cy="12" r="8.25"/><circle cx="12" cy="12" r="4.25"/><circle cx="12" cy="12" r=".9"/>',
 "Environment":'<path d="M5 19c0-8 5-13.5 14.5-14.25C19.25 14 14 19 5 19z"/><path d="M5 19c3-4 6-6.5 9.5-8"/>',
 "Technology":'<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9.5 3v3M14.5 3v3M9.5 18v3M14.5 18v3M3 9.5h3M3 14.5h3M18 9.5h3M18 14.5h3"/>',
 "Agriculture":'<path d="M12 20.75V9.5"/><path d="M12 9.5c0-2.6 1.6-4.6 4-5.25.1 2.6-1.5 4.6-4 5.25zM12 9.5c0-2.6-1.6-4.6-4-5.25-.1 2.6 1.5 4.6 4 5.25zM12 14.5c0-2.6 1.6-4.6 4-5.25.1 2.6-1.5 4.6-4 5.25zM12 14.5c0-2.6-1.6-4.6-4-5.25-.1 2.6 1.5 4.6 4 5.25z"/>',
 "Tourism":'<circle cx="12" cy="12" r="3.75"/><path d="M12 3v2.25M12 18.75V21M3 12h2.25M18.75 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M5.6 18.4l1.6-1.6M16.8 7.2l1.6-1.6"/>',
 "Social services":'<path d="M12 19.5s-7.5-4.4-7.5-9.75A4.25 4.25 0 0112 7.1a4.25 4.25 0 017.5 2.65C19.5 15.1 12 19.5 12 19.5z"/>'
};
const DALIAS={Immigration:"Migration",Employment:"Work",Banking:"Money & tax",Transport:"Driving",Business:"Business letters"};
const di=k=>{const p=DI[k]||DI[DALIAS[k]];return p?`<svg class="di" viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`:""};
const CANSAY="speechSynthesis" in window;
function say(t){if(!CANSAY)return;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang="fr-FR";u.rate=.92;const v=speechSynthesis.getVoices().find(x=>/^fr(-|_)FR/i.test(x.lang));if(v)u.voice=v;speechSynthesis.speak(u)}catch(e){}}
const SPK='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 010 6M18 6.5a7.5 7.5 0 010 11"/></svg>';
const sayBtn=(t,lbl)=>CANSAY?`<button type="button" class="say" data-say="${esc(t)}" aria-label="${lbl||"Listen"}">${SPK}</button>`:"";
function hl(sent,word){const w=word.replace(/^(le |la |les |l'|l’|un |une |des |se |s'|s’)/i,"").replace(/\s*\(.*?\)\s*/g," ").trim();const e=esc(sent);if(!w)return e;
  const tries=[w,w.split(/[ \/]/)[0]];for(const t of tries){if(t.length<3)continue;const stem=t.length>6?t.slice(0,t.length-2):t;const i=sent.toLowerCase().indexOf(stem.toLowerCase());if(i>=0){let j=i+stem.length;while(j<sent.length&&/[\p{L}'’-]/u.test(sent[j]))j++;return esc(sent.slice(0,i))+"<mark>"+esc(sent.slice(i,j))+"</mark>"+esc(sent.slice(j))}}return e}
function exBlock(c,full){const x=EX[c[1]];if(!x)return "";return `<div class="ex"><div class="exfr">${sayBtn(x[0],"Listen to the example")}<span>${hl(x[0],c[1])}</span></div>${full?`<div class="exen">${esc(x[1])}</div>`:""}</div>`}
document.addEventListener("click",e=>{const b=e.target.closest(".say");if(b){e.preventDefault();say(b.dataset.say)}});

/* ---------- state ---------- */
const BASE=()=>({box:{},next:{},done:{},log:{},steps:{},drafts:{},test:"",counts:{},spot:{},marks:{},times:{},set:{theme:"auto",haptic:true,remind:false,rtime:"19:00",newday:20},onb:false,ts:0,mine:[],nread:{},ndraft:{},game:{best:{}}});
let S=BASE();
function load(raw){try{const x=typeof raw==="string"?JSON.parse(raw):raw;if(x&&typeof x==="object"){const b=BASE();S=Object.assign(b,x);S.set=Object.assign(b.set,x.set||{});return true}}catch(e){}return false}
try{load(localStorage.getItem(KEY))}catch(e){}
const bootFresh=!S.ts;
const MYDECK="My words";
function syncMine(){(S.mine||[]).forEach(m=>{if(!CARDS.some(c=>c[0]===MYDECK&&c[1]===m.fr))CARDS.push([MYDECK,m.fr,m.en,m.src?"From: "+m.src:""]);if(m.ex&&!EX[m.fr])EX[m.fr]=m.ex})}
syncMine();
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
  const cols=["#e7c982","#5f1730","#2a43b8","#c39233","#ffffff"];const ps=Array.from({length:90},()=>({x:W/2,y:H*.42,vx:(Math.random()-.5)*16*devicePixelRatio,vy:(-Math.random()*14-4)*devicePixelRatio,r:(3+Math.random()*4)*devicePixelRatio,c:cols[Math.random()*cols.length|0],a:Math.random()*6}));
  let f=0;(function step(){x.clearRect(0,0,W,H);ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.45*devicePixelRatio;p.a+=.2;x.fillStyle=p.c;x.save();x.translate(p.x,p.y);x.rotate(p.a);x.fillRect(-p.r,-p.r/2,p.r*2,p.r);x.restore()});if(++f<90)requestAnimationFrame(step);else x.clearRect(0,0,W,H)})()}

/* ---------- theme ---------- */
const mq=matchMedia("(prefers-color-scheme: dark)");
function applyTheme(){const t=S.set.theme;const dark=t==="dark"||(t==="auto"&&mq.matches);document.documentElement.classList.toggle("dark",dark);
  document.querySelector('meta[name=theme-color]').content=dark?"#3d0f1f":"#5f1730"}
mq.addEventListener?mq.addEventListener("change",applyTheme):mq.addListener(applyTheme);

/* ---------- tabs ---------- */
const TABS=[["today","Today",'<rect class="f" x="3.75" y="5" width="16.5" height="15.25" rx="3"/><path d="M3.75 9.75h16.5M8.25 3v3.5M15.75 3v3.5"/><path d="M8.6 14.6l2.2 2.1 4.6-4.6"/>'],
 ["cards","Words",'<rect x="3" y="7.25" width="13" height="13.25" rx="2.5"/><path class="f" d="M7 7.25V5.5A2.5 2.5 0 019.5 3h9A2.5 2.5 0 0121 5.5v9a2.5 2.5 0 01-2.5 2.5H16"/><path d="M6.5 12.25h6M6.5 15.75h4"/>'],
 ["grammar","Grammar",'<path class="f" d="M12 2.75l5.25 6.5L12 21.25 6.75 9.25z"/><path d="M12 9.25v6"/><circle cx="12" cy="9.6" r="1.35"/>'],
 ["read","Read",'<rect class="f" x="3" y="4.5" width="13.5" height="15.5" rx="2.25"/><path d="M16.5 8.75h2.75a1.25 1.25 0 011.25 1.25v7.75a2.25 2.25 0 01-4 1.4M6.5 8.5h6.5M6.5 12h6.5M6.5 15.5h4"/>'],
 ["practice","Practice",'<circle class="f" cx="12" cy="13.5" r="7.25"/><path d="M12 9.75v3.75l2.5 1.75M9.75 3h4.5M12 3v3.25M18.25 7l1.25-1.25"/>'],
 ["test","Test",'<circle class="f" cx="12" cy="9.5" r="6"/><path d="M8.6 14.4L7.25 21 12 18.75 16.75 21l-1.35-6.6"/><path d="M9.75 9.5l1.6 1.6 3-3.1"/>']];
$("tabs").innerHTML=TABS.map(t=>`<button data-v="${t[0]}" aria-label="${t[1]}"><span class="ic"><svg viewBox="0 0 24 24" aria-hidden="true">${t[2]}</svg></span>${t[1]}</button>`).join("");
let curView="today";
function show(v){if(!TABS.some(t=>t[0]===v))v="today";curView=v;document.querySelectorAll(".view").forEach(s=>s.classList.toggle("on",s.id==="v-"+v));
  document.querySelectorAll("#tabs button").forEach(b=>b.setAttribute("aria-current",b.dataset.v===v));
  if(location.hash.slice(1)!==v)history.replaceState(null,"","#"+v);render(v);$("main").scrollTop=0}
$("tabs").addEventListener("click",e=>{const b=e.target.closest("button");if(b){haptic();if(typeof gQuit==="function")gQuit();show(b.dataset.v)}});
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
  const xp=L*2+K*6+M*10+drills*2+passages*60+spots*40+((S.game&&S.game.xp)||0);return {decks,st,L,K,M,drills,reviews,passages,spots,xp}}
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
  let ticks="";for(let i=0;i<60;i++){const a=i*6*Math.PI/180,r2=i%5?88:84;ticks+=`<line x1="${(100+93*Math.sin(a)).toFixed(1)}" y1="${(100-93*Math.cos(a)).toFixed(1)}" x2="${(100+r2*Math.sin(a)).toFixed(1)}" y2="${(100-r2*Math.cos(a)).toFixed(1)}" stroke="rgba(231,201,130,.45)" stroke-width="1.3"/>`}
  $("stamp").innerHTML=`${ticks}<circle cx="100" cy="100" r="${R}" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="15"/>${arc(a3,a1+a2,"rgba(255,255,255,.32)")}${arc(a2,a1,"rgba(255,255,255,.82)")}${arc(a1,0,"#e7c982")}<circle cx="100" cy="100" r="56" fill="none" stroke="rgba(231,201,130,.45)" stroke-dasharray="2 4"/><text x="100" y="106" text-anchor="middle" font-size="42" font-weight="600">${pct}%</text><text x="100" y="128" text-anchor="middle" font-size="12.5" opacity=".75" font-family="Text,sans-serif">words known</text>`;
  if(S.test){const left=Math.round((new Date(S.test+"T12:00:00")-new Date(d+"T12:00:00"))/864e5);$("countdown").hidden=false;$("countdown").textContent=left>0?`${left} day${left===1?"":"s"} to your test`:left===0?"Test day. Bonne chance !":"Test date passed: set a new one"}else $("countdown").hidden=true;
  const due=dueCount();const nl=newLeft();
  $("gostudy").innerHTML=due||nl?`<svg viewBox="0 0 24 24"><path d="M7 4.5l11 7.5-11 7.5z"/></svg>${due?`Review ${due} word${due===1?"":"s"}`:`Learn ${nl} new words`}`:`<svg viewBox="0 0 24 24"><circle cx="12" cy="13.5" r="7"/><path d="M12 10v3.8l2.6 1.7"/></svg>Words done · do a timed passage`;
  const streak=streakOf();
  $("kpis").innerHTML=`<div class="kpi gold"><b>${streak}</b><span>day streak</span></div><div class="kpi"><b>${known}</b><span>of ${total} words known</span></div><div class="kpi"><b>${s.passages}</b><span>passages done</span></div><div class="kpi"><b>${s.spots}</b><span>revisions done</span></div>`;
  $("decks").innerHTML=s.decks.map(k=>{const v=s.st[k];const w=x=>(x/v.n*100).toFixed(1)+"%";return `<div class="deck" data-deck="${esc(k)}" role="button" tabindex="0"><span>${di(k)}${esc(k)}</span><div class="sb"><i class="c-m" style="width:${w(v.m)}"></i><i class="c-k" style="width:${w(v.k)}"></i><i class="c-l" style="width:${w(v.l)}"></i></div><em>${Math.round((v.m+v.k)/v.n*100)}%</em></div>`}).join("");
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
let CATS=[];const mkCats=()=>{CATS=["All","Weak words",...new Set(CARDS.map(c=>c[0]))]};mkCats();let cat="All",mode="cards",cur=null,quiz=null,chk=null,extra=false,hint=false;
const pool=()=>CARDS.filter(c=>cat==="All"||(cat==="Weak words"?isWeak(c):c[0]===cat));
const newLeft=()=>{const d=T();return Math.max(0,(+S.set.newday||20)-(S.counts[d].newc||0))};
function queue(){const p=pool();const due=p.filter(isDue);if(due.length)return due;const nw=p.filter(isNew);if(nw.length&&newLeft()>0)return nw;return []}
function pickCard(){const q=queue();const prev=cur;let c=q.length?q[Math.floor(Math.random()*q.length)]:null;if(c===prev&&q.length>1)c=q.find(x=>x!==prev);cur=c;extra=false;hint=false}
function practiceCard(){const p=pool();cur=p.length?p[Math.floor(Math.random()*p.length)]:null;extra=true;hint=false}
function record(ok){const k=idOf(cur);const wasNew=isNew(cur);let b=S.box[k]||0;b=ok?Math.min(b+1,5):0;S.box[k]=b;S.next[k]=addDays(today(),ok?(BOXDAYS[b]||1):0);const d=T();S.counts[d].cards++;if(wasNew)S.counts[d].newc=(S.counts[d].newc||0)+1;
  if(S.counts[d].cards===20&&!S.done[d].cards){S.done[d].cards=true;setTimeout(()=>{burst();haptic("win");toast("20 cards done for today")},150)}save()}
function renderCards(){syncMine();if(CATS.length!==2+new Set(CARDS.map(c=>c[0])).size)mkCats();
  $("cats").innerHTML=CATS.map(c=>{const n=c==="Weak words"?CARDS.filter(isWeak).length:c==="All"?null:CARDS.filter(x=>x[0]===c&&isDue(x)).length;return `<button class="chip" data-c="${esc(c)}" aria-pressed="${c===cat}">${di(c)}${esc(c)}${n?`<span class="n">${n}</span>`:""}</button>`}).join("");
  const p=pool();const due=p.filter(isDue).length;const nw=p.filter(isNew).length;const learnt=p.filter(c=>(S.box[idOf(c)]||0)>=3).length;
  $("due").innerHTML=`<div class="stat"><span><b>${due}</b> to review</span><span><b>${Math.min(nw,newLeft())}</b> new today</span><span><b>${learnt}</b>/${p.length} known</span></div><div class="bar"><i style="width:${p.length?learnt/p.length*100:0}%"></i></div>`;
  document.querySelectorAll("#cmode button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.m===mode));
  $("v-cards").classList.toggle("gm",mode==="game");
  if(mode==="game")return renderGame();
  if(mode==="quiz")return renderQuiz();
  if(cur&&!p.includes(cur))cur=null;
  if(!cur&&!chk)pickCard();
  if(!cur){$("cardzone").innerHTML=`<div class="panel empty"><svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="28" fill="none" stroke="var(--green)" stroke-width="3"/><path d="M20 33l8 8 16-17" fill="none" stroke="var(--green)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg><h3 style="justify-content:center;margin:0 0 6px">${p.length?"All caught up":"Nothing here yet"}</h3><p class="small" style="margin:0 0 16px">${cat==="Weak words"?"Words you miss land here.":p.length?"Your next reviews come back tomorrow. Extra practice doesn't change your schedule.":""}</p>${p.length?`<button class="btn p" id="extra">Extra practice</button>`:""}</div>`;return}
  const res=chk;
  $("cardzone").innerHTML=`<form id="ansform" autocomplete="off"><div class="flash ${res?(res.ok?"ok":"bad"):""}" id="flash"><span class="tag"><span>${di(cur[0])}${esc(cur[0])}</span>${extra?"<span>practice</span>":isNew(cur)?'<span class="new">New word</span>':""}</span><div class="hwrow"><div class="hw">${esc(cur[1])}</div>${sayBtn(cur[1])}</div>${res?`<div class="verdict ${res.ok?"ok":"bad"}">${res.ok?(res.typo?"Right · small typo":"Correct"):"Not quite"}</div>${res.typed?`<div class="yours">You wrote: <span class="${res.ok?"r":"w"}">${esc(res.typed)}</span></div>`:""}<div class="en">${esc(cur[2])}</div>${cur[3]?`<div class="note">${esc(cur[3])}</div>`:""}${exBlock(cur,true)}`:`${hint?exBlock(cur,false):EX[cur[1]]?`<button type="button" class="linkbtn exbtn" id="exhint">See it in a sentence</button>`:""}<input id="answer" class="inline" type="text" placeholder="Type the English" aria-label="Your English answer" autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" enterkeyhint="go">`}</div>
  ${res&&!res.ok?retypeBlock(res):""}<div class="ans">${res?(!res.ok&&!res.fixed?`<button class="btn p" type="submit">Check</button><button class="btn" id="flipres" type="button">I was right</button>`:`<button class="btn p" id="next" type="submit">Next</button><button class="btn" id="flipres" type="button">${res.ok?"Count as wrong":"I was right"}</button>`):`<button class="btn p" type="submit">Check</button><button class="btn" id="skip" type="button">Show answer</button>`}</div><p class="kbhint">Tap an empty spot to close the keyboard and see the decks</p></form>`;
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
  $("cardzone").innerHTML=`<div class="panel"><div class="eyebrow">${di(cur[0])}${esc(cur[0])}</div><div class="hwrow" style="justify-content:flex-start"><div class="hw" style="font-size:32px;margin:8px 0 4px">${esc(cur[1])}</div>${sayBtn(cur[1])}</div>${quiz.ans===null&&EX[cur[1]]?exBlock(cur,false):""}<div class="small">Choose the best English</div><div class="opts">${quiz.opts.map((o,i)=>`<button class="opt ${quiz.ans!==null?(o===cur?"ok":i===quiz.ans?"bad":""):""}" data-i="${i}" ${quiz.ans!==null?"disabled":""}>${esc(o[2])}</button>`).join("")}</div>${quiz.ans!==null?`${cur[3]?`<p class="small" style="margin-top:12px">${esc(cur[3])}</p>`:""}${exBlock(cur,true)}${quiz.fix?retypeBlock(quiz.fix):""}${quiz.fix&&!quiz.fix.fixed?`<button class="btn p wide" id="qcheck" style="margin-top:12px">Check</button>`:`<button class="btn p wide" id="qnext" style="margin-top:12px">Next</button>`}`:""}</div>`;const r=$("retype");if(r)r.focus({preventScroll:true})}
$("cardzone").addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.id==="retype"&&mode==="quiz"){e.preventDefault();$("qcheck")&&$("qcheck").click()}});
$("cats").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;haptic();cat=b.dataset.c;cur=null;quiz=null;chk=null;renderCards()});
$("cmode").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;haptic();gQuit();mode=b.dataset.m;cur=null;chk=null;quiz=null;renderCards()});
$("cardzone").addEventListener("submit",e=>{e.preventDefault();if(chk&&!chk.ok&&!chk.fixed){const r=$("retype");if(r&&!r.value.trim()){r.focus();return}if(r)tryRetype(chk,r.value);renderCards();return}if(chk){grade(chk.ok);return}const a=$("answer");if(!a.value.trim()){a.focus();return}chk=check(a.value);haptic(chk.ok?"ok":"bad");renderCards()});
$("cardzone").addEventListener("click",e=>{
  if(e.target.id==="exhint"){hint=true;renderCards();const a=$("answer");if(a)a.focus({preventScroll:true});return}
  if(e.target.id==="skip"){chk={ok:false,typed:""};haptic("bad");renderCards();return}
  if(e.target.id==="skipretype"){if(mode==="quiz"&&quiz){quiz.fix.fixed=true;renderQuiz()}else if(chk){chk.fixed=true;renderCards()}return}
  if(e.target.id==="qcheck"){const r=$("retype");if(r)tryRetype(quiz.fix,r.value);renderQuiz();const n=$("retype");if(n)n.focus();return}
  if(e.target.id==="flipres"){chk.ok=!chk.ok;chk.typo=false;chk.fixed=chk.ok?false:chk.fixed;renderCards();return}
  if(e.target.id==="extra"){chk=null;practiceCard();renderCards();return}
  const o=e.target.closest(".opt");if(o&&quiz&&quiz.ans===null){quiz.ans=+o.dataset.i;const ok=quiz.opts[quiz.ans]===cur;haptic(ok?"ok":"bad");if(!ok)quiz.fix={};const d=T();S.counts[d].cards++;if(!ok){const k=idOf(cur);if(!isNew(cur)){S.box[k]=0;S.next[k]=today()}}save();renderQuiz();return}
  if(e.target.id==="qnext"){quiz=null;renderCards()}});

/* ---------- games hub: levels per game, stars, XP ---------- */
const GSIZE=10,GLIMIT=8000;
const SETS=(()=>{const out=[];const decks=[...new Set(CARDS.filter(c=>c[0]!==MYDECK).map(c=>c[0]))];decks.forEach(d=>{const cs=CARDS.filter(c=>c[0]===d);const n=Math.max(1,Math.round(cs.length/GSIZE));for(let i=0;i<n;i++){const part=cs.slice(Math.round(i*cs.length/n),Math.round((i+1)*cs.length/n));out.push({deck:d,part:n>1?i+1:0,of:n,cards:part})}});return out})();
function maskEx(c){const x=EX[c[1]];if(!x)return null;const h=hl(x[0],c[1]);const m=h.match(/<mark>(.*?)<\/mark>/);if(!m)return null;return {fr:h.replace(/<mark>.*?<\/mark>/,'<span class="gap">'+"_".repeat(Math.min(10,Math.max(4,m[1].length)))+"</span>"),en:x[1],word:m[1]}}
const GAMES=[
 {id:"speed",name:"Speed",skill:"Recognition",desc:"A French word, four answers, 8 seconds each. All 10 right unlocks the next set. Speed earns stars.",
  icon:'<path d="M13 3L5 13.5h6L10 21l9-11.5h-6z"/>'},
 {id:"pairs",name:"Pairs",skill:"Association",desc:"Match 5 French words to their English, two boards per set. One slip allowed. Speed earns stars.",
  icon:'<rect x="3.5" y="4" width="7" height="7" rx="1.6"/><rect x="13.5" y="13" width="7" height="7" rx="1.6"/><path d="M10.5 7.5h3a3 3 0 013 3V13M13.5 16.5h-3a3 3 0 01-3-3V11"/>'},
 {id:"context",name:"In context",skill:"Usage",desc:"A real French sentence with a gap, the English underneath. Pick the missing word. All right unlocks the next set.",
  icon:'<path d="M4 7h16M4 12h5M15 12h5M4 17h11"/><rect x="9.5" y="10" width="5" height="4" rx="1"/>'},
 {id:"blitz",name:"True or false",skill:"Fast recall",desc:"60 seconds. Is the translation right? Every 5 in a row raises the multiplier. Words come from sets you've unlocked.",
  icon:'<circle cx="12" cy="13" r="7.5"/><path d="M12 9v4l2.5 1.6M10 2.5h4"/>',endless:true}];
const RANKS=[["Rookie",0],["Learner",300],["Word hunter",900],["Fluent player",2000],["Terminologist",3800],["Wordsmith",6500],["Master translator",10000]];
function gs(){S.game=S.game||{};const g=S.game;g.g=g.g||{};if(g.best&&!g.g.speed){g.g.speed={best:g.best};delete g.best}GAMES.forEach(x=>{g.g[x.id]=g.g[x.id]||{best:{}};g.g[x.id].best=g.g[x.id].best||{}});g.xp=g.xp||0;return g}
const gsets=id=>id==="context"?SETS.map(st=>({...st,cards:st.cards.filter(c=>maskEx(c))})).filter(st=>st.cards.length>=4):SETS;
let CSETS=null;const setsOf=id=>id==="context"?(CSETS=CSETS||gsets("context")):SETS;
const gBest=(id,i)=>gs().g[id].best[i];
const gMastered=(id,i)=>{const b=gBest(id,i);return !!(b&&b.m)};
const gOpen=(id,i)=>i===0||gMastered(id,i-1);
const gNext=id=>setsOf(id).findIndex((_,i)=>!gMastered(id,i));
const setName=s=>esc(s.deck)+(s.part?` ${s.part}/${s.of}`:"");
const starRow=n=>`<span class="stars" aria-label="${n} of 3 stars">${[1,2,3].map(i=>`<i class="${i<=n?"on":""}"></i>`).join("")}</span>`;
const gIcon=g=>`<svg viewBox="0 0 24 24" aria-hidden="true">${g.icon}</svg>`;
let GH=null,G=null,gRAF=0,gT=0;
function gQuit(){cancelAnimationFrame(gRAF);clearTimeout(gT);G=null}
function gMiss(c){const d=T();if(!isNew(c)){const id=idOf(c);S.box[id]=0;S.next[id]=today()}}
function gCount(){const d=T();S.counts[d].cards++}
function gOpts(c,field){const same=CARDS.filter(x=>x!==c&&x[0]===c[0]&&x[field]!==c[field]);const pool=same.length>=3?same:CARDS.filter(x=>x!==c&&x[field]!==c[field]);const o=[c];let g=0;while(o.length<4&&g++<300){const x=pool[Math.random()*pool.length|0];if(!o.some(y=>y[field]===x[field]))o.push(x)}return o.sort(()=>Math.random()-.5)}
function gRank(){const xp=gs().xp;let i=0;RANKS.forEach((r,k)=>{if(xp>=r[1])i=k});const nx=RANKS[i+1];return {i,name:RANKS[i][0],xp,nx,pct:nx?(xp-RANKS[i][1])/(nx[1]-RANKS[i][1]):1}}
function gAward(xp){const before=gRank().i;gs().xp+=xp;const after=gRank();return after.i>before?after.name:null}
/* finish a set-based round */
function gFinish(sum){const g=gs().g[G.id];const was=g.best[G.set]||{};const sets=setsOf(G.id);const unlock=sum.m&&!was.m&&G.set+1<sets.length;
  g.best[G.set]={m:was.m||sum.m,stars:Math.max(was.stars||0,sum.st),pts:Math.max(was.pts||0,sum.pts)};
  const xp=Math.round(sum.pts/20)+(sum.m&&!was.m?50:0)+(sum.st>(was.stars||0)?20*(sum.st-(was.stars||0)):0);const rank=gAward(xp);
  G.done=true;G.sum={...sum,unlock,xp,rank,record:sum.pts>(was.pts||0)&&!!was.pts};save();if(sum.m){burst();haptic("win")}renderGame()}
function gStart(id,i){gQuit();const sets=setsOf(id);if(id==="blitz")return bStart();const cs=sets[i].cards.slice().sort(()=>Math.random()-.5);
  G={id,set:i,cs,q:0,res:[],pick:null,done:false,t0:performance.now()};
  if(id==="speed"){G.opts=gOpts(cs[0],2);renderGame();sGo()}
  else if(id==="context"){G.opts=gOpts(cs[0],1);G.m=maskEx(cs[0]);renderGame()}
  else if(id==="pairs"){G.boards=[cs.slice(0,Math.ceil(cs.length/2)),cs.slice(Math.ceil(cs.length/2))];G.b=0;G.slips=0;G.missed=new Set();pBoard();renderGame()}}
/* speed */
function sGo(){G.t0=performance.now();G.pick=null;cancelAnimationFrame(gRAF);const tick=()=>{if(!G||G.done||G.pick!==null||G.id!=="speed")return;const el=$("gbar");const left=1-(performance.now()-G.t0)/GLIMIT;if(el)el.style.transform=`scaleX(${Math.max(0,left)})`;if(left<=0){sAnswer(-1);return}gRAF=requestAnimationFrame(tick)};gRAF=requestAnimationFrame(tick)}
function sAnswer(k){if(!G||G.pick!==null)return;const ms=Math.min(GLIMIT,performance.now()-G.t0);const c=G.cs[G.q];const ok=k>=0&&G.opts[k]===c;G.pick=k;G.res.push({c,ok,ms});haptic(ok?"ok":"bad");gCount();if(!ok)gMiss(c);
  renderGame();clearTimeout(gT);gT=setTimeout(()=>{if(!G)return;G.q++;if(G.q>=G.cs.length){const n=G.res.length,ok=G.res.filter(r=>r.ok).length,avg=G.res.reduce((a,r)=>a+r.ms,0)/n;
    return gFinish({m:ok===n,st:ok<n?0:avg<=2500?3:avg<=4000?2:1,pts:G.res.reduce((a,r)=>a+(r.ok?Math.round(100+900*(1-r.ms/GLIMIT)):0),0),line:[[`${ok}/${n}`,"correct"],[(avg/1000).toFixed(1)+"s","avg per word"]],
      hint:ok<n?`Get all ${n} right to unlock the next set.`:avg>2500?`Under ${avg>4000?"4":"2.5"}s a word for the next star.`:"Top speed.",miss:G.res.filter(r=>!r.ok).map(r=>r.c)})}
    G.opts=gOpts(G.cs[G.q],2);G.pick=null;renderGame();sGo()},ok?420:1300)}
/* context */
function cAnswer(k){if(!G||G.pick!==null)return;const ms=performance.now()-G.t0;const c=G.cs[G.q];const ok=G.opts[k]===c;G.pick=k;G.res.push({c,ok,ms});haptic(ok?"ok":"bad");gCount();if(!ok)gMiss(c);renderGame()}
function cNext(){G.q++;if(G.q>=G.cs.length){const n=G.res.length,ok=G.res.filter(r=>r.ok).length,avg=G.res.reduce((a,r)=>a+r.ms,0)/n;
    return gFinish({m:ok===n,st:ok<n?0:avg<=5000?3:avg<=9000?2:1,pts:G.res.reduce((a,r)=>a+(r.ok?Math.round(200+800*Math.max(0,1-r.ms/15000)):0),0),line:[[`${ok}/${n}`,"correct"],[(avg/1000).toFixed(1)+"s","avg per sentence"]],
      hint:ok<n?`Get all ${n} right to unlock the next set.`:avg>5000?`Under ${avg>9000?"9":"5"}s a sentence for the next star.`:"Top speed.",miss:G.res.filter(r=>!r.ok).map(r=>r.c)})}
  G.opts=gOpts(G.cs[G.q],1);G.m=maskEx(G.cs[G.q]);G.pick=null;G.t0=performance.now();renderGame()}
/* pairs */
function pBoard(){const b=G.boards[G.b];G.L=b.slice().sort(()=>Math.random()-.5);G.R=b.slice().sort(()=>Math.random()-.5);G.gone=new Set();G.sel=null;G.bad=null}
function pTap(side,i){if(!G||G.done)return;const c=(side==="L"?G.L:G.R)[i];if(G.gone.has(c))return;
  if(!G.sel||G.sel.side===side){G.sel={side,c};haptic();renderGame();return}
  const a=G.sel.c;if(a===c){G.gone.add(c);G.sel=null;haptic("ok");gCount();if(G.gone.size===G.boards[G.b].length){if(G.b+1<G.boards.length){G.b++;clearTimeout(gT);gT=setTimeout(()=>{pBoard();renderGame()},350)}else{const ms=performance.now()-G.t0,n=G.cs.length;clearTimeout(gT);gT=setTimeout(()=>gFinish({m:G.slips<=1,st:G.slips>1?0:ms<=25000?3:ms<=45000?2:1,pts:Math.max(0,Math.round(n*100+Math.max(0,60000-ms)/30-G.slips*150)),line:[[(ms/1000).toFixed(0)+"s","time"],[G.slips,G.slips===1?"slip":"slips"]],hint:G.slips>1?"One slip at most to unlock the next set.":ms>25000?`Under ${ms>45000?"45":"25"}s for the next star.`:"Top speed.",miss:[...G.missed]}),350)}}renderGame();return}
  G.slips++;const fr=side==="L"?c:a;G.missed.add(fr);gMiss(fr);haptic("bad");G.bad=[a,c];G.sel=null;renderGame();clearTimeout(gT);gT=setTimeout(()=>{if(G){G.bad=null;renderGame()}},500)}
/* blitz: 60 s true/false */
function bPool(){const out=[];SETS.forEach((st,i)=>{if(GAMES.some(g=>!g.endless&&(gOpen(g.id,i)&&g.id!=="context")))out.push(...st.cards)});return out.length?out:SETS[0].cards}
function bQ(){const pool=G.pool;const c=pool[Math.random()*pool.length|0];const truth=Math.random()<.5;let shown=c;if(!truth){const o=gOpts(c,2).filter(x=>x!==c);shown=o[0]||c}G.cur={c,shown,truth:shown===c};G.pick=null}
function bStart(){G={id:"blitz",pool:bPool(),score:0,streak:0,best:0,right:0,wrong:0,miss:[],done:false,t0:performance.now()};bQ();renderGame();cancelAnimationFrame(gRAF);
  const tick=()=>{if(!G||G.id!=="blitz"||G.done)return;const left=1-(performance.now()-G.t0)/60000;const el=$("gbar");if(el)el.style.transform=`scaleX(${Math.max(0,left)})`;const t=$("bt");if(t)t.textContent=Math.ceil(Math.max(0,left)*60)+"s";if(left<=0)return bEnd();gRAF=requestAnimationFrame(tick)};gRAF=requestAnimationFrame(tick)}
const bMult=()=>Math.min(4,1+Math.floor(G.streak/5));
function bAnswer(yes){if(!G||G.done||G.pick!==null)return;const ok=yes===G.cur.truth;G.pick=yes;gCount();
  if(ok){G.right++;G.score+=10*bMult();G.streak++;G.best=Math.max(G.best,G.streak);haptic(G.streak%5===0?"win":"ok")}else{G.wrong++;G.streak=0;haptic("bad");gMiss(G.cur.c);if(!G.miss.includes(G.cur.c))G.miss.push(G.cur.c)}
  renderGame();clearTimeout(gT);gT=setTimeout(()=>{if(G&&!G.done){bQ();renderGame()}},ok?220:900)}
function bEnd(){cancelAnimationFrame(gRAF);clearTimeout(gT);const b=gs().g.blitz;const was=b.hi||0;b.hi=Math.max(was,G.score);const st=G.right>=35?3:G.right>=25?2:G.right>=15?1:0;b.stars=Math.max(b.stars||0,st);
  const rank=gAward(Math.round(G.score/10));G.done=true;G.sum={blitz:true,st,pts:G.score,record:G.score>was&&was>0,first:!was,line:[[G.right,"right"],[G.wrong,"wrong"],["×"+Math.min(4,1+Math.floor(G.best/5)),"top multiplier"]],hint:st<3?`${[15,25,35][st]} right answers for the next star.`:"Three stars. Beat your score.",miss:G.miss,xp:Math.round(G.score/10),rank};save();if(st)burst();haptic("win");renderGame()}
function renderGame(){const z=$("cardzone");gs();
  if(!G&&!GH){const r=gRank();const tot=GAMES.filter(g=>!g.endless).reduce((a,g)=>a+setsOf(g.id).filter((_,i)=>gMastered(g.id,i)).length,0);
    z.innerHTML=`<div class="grank"><div class="gmed">${r.i+1}</div><div style="flex:1;min-width:0"><div class="eyebrow" style="color:var(--gold-soft)">Game rank</div><b class="serif">${r.name}</b><div class="gxp"><i style="width:${Math.round(r.pct*100)}%"></i></div><small>${r.xp.toLocaleString()} XP${r.nx?` · ${(r.nx[1]-r.xp).toLocaleString()} to ${r.nx[0]}`:""} · ${tot} sets mastered</small></div></div>
    <div class="ggrid">${GAMES.map(g=>{const sets=setsOf(g.id);const n=g.endless?0:sets.filter((_,i)=>gMastered(g.id,i)).length;const b=gs().g[g.id];return `<button class="gcard" data-gh="${g.id}" type="button"><span class="gic">${gIcon(g)}</span><b>${g.name}</b><span class="small">${g.skill}</span><span class="gmeta">${g.endless?(b.hi?`Best ${b.hi}`:"Not played")+" "+starRow(b.stars||0):`Set ${Math.min(n+1,sets.length)} of ${sets.length}`}</span>${g.endless?"":`<span class="gmini"><i style="width:${n/sets.length*100}%"></i></span>`}</button>`}).join("")}</div>
    <p class="small" style="margin-top:12px">Missed words go back into your reviews, so the games feed your daily cards.</p>`;return}
  if(!G){const g=GAMES.find(x=>x.id===GH);const sets=setsOf(g.id);
    if(g.endless){const b=gs().g.blitz;z.innerHTML=`<button class="back" id="ghome" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 5.5L8 12l6.5 6.5"/></svg>All games</button><div class="panel" style="text-align:center"><span class="gic big">${gIcon(g)}</span><h2 class="serif" style="margin:10px 0 6px">${g.name}</h2><p class="small">${g.desc}</p>${starRow(b.stars||0)}<p class="small">${b.hi?`Your best: <b>${b.hi}</b>`:"No score yet"} · 1★ 15 right · 2★ 25 · 3★ 35</p><p class="small">${bPool().length} words in play. Unlock more sets in the other games to add words.</p><button class="btn p wide" data-gs="0" type="button">Start · 60 seconds</button></div>`;return}
    const nxt=gNext(g.id);const n=sets.filter((_,i)=>gMastered(g.id,i)).length;
    z.innerHTML=`<button class="back" id="ghome" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 5.5L8 12l6.5 6.5"/></svg>All games</button>
    <div class="ghead"><div><b class="serif">${g.name}</b><span class="small">${g.desc}</span></div><div class="gprog"><b>${n}</b>/${sets.length}<small>mastered</small></div></div>
    ${nxt>=0?`<button class="btn p wide" data-gs="${nxt}" style="margin-bottom:14px">${gBest(g.id,nxt)?"Retry":"Play"} set ${nxt+1} · ${setName(sets[nxt])}</button>`:`<p class="small">Every set mastered. Replay any set for three stars.</p>`}
    <div class="gsets">${sets.map((st,i)=>{const b=gBest(g.id,i),open=gOpen(g.id,i);return `<button class="gset ${open?"":"locked"} ${b&&b.m?"m":""} ${i===nxt?"cur":""}" ${open?`data-gs="${i}"`:"disabled"} type="button"><span class="gn">${di(st.deck)}</span><span class="gd">${i+1}. ${setName(st)}</span>${open?(b&&b.m?starRow(b.stars):`<span class="small">${b?"Not yet":"New"}</span>`):'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5.5" y="10.5" width="13" height="9.5" rx="2"/><path d="M8.5 10.5V8a3.5 3.5 0 017 0v2.5"/></svg>'}</button>`}).join("")}</div>`;return}
  if(G.done){const s=G.sum,g=GAMES.find(x=>x.id===G.id),sets=setsOf(G.id);const nextSet=!s.blitz&&s.m&&G.set+1<sets.length;
    z.innerHTML=`<div class="panel gend ${s.m||s.st?"win":""}"><div class="eyebrow">${g.name}${s.blitz?"":` · Set ${G.set+1} · ${setName(sets[G.set])}`}</div><h2 class="serif" style="margin:8px 0 6px">${s.blitz?(s.record?"New best!":s.first?"First score":"Time"):s.m?(s.unlock?`Mastered. Set ${G.set+2} unlocked`:"Mastered"):"So close"}</h2>${starRow(s.st)}
      <div class="gstats">${s.line.map(l=>`<div><b>${l[0]}</b><small>${l[1]}</small></div>`).join("")}<div><b>${s.pts.toLocaleString()}</b><small>${s.record?"new best":"points"}</small></div></div>
      <div class="xpgain">+${s.xp} XP${s.rank?` · New rank: <b>${esc(s.rank)}</b>`:""}</div>
      <p class="small" style="margin:8px 0 0">${s.hint}</p></div>
      ${s.miss.length?`<div class="panel"><h3 style="margin-bottom:6px">To learn</h3>${s.miss.map(c=>`<div class="gmiss"><div><b>${esc(c[1])}</b> ${sayBtn(c[1])}</div><div class="en2">${esc(c[2])}</div>${exBlock(c,true)}</div>`).join("")}</div>`:""}
      <div class="ans"><button class="btn p" data-gs="${nextSet?G.set+1:(G.set||0)}" type="button">${nextSet?"Next set":"Play again"}</button><button class="btn" id="gback" type="button">${s.blitz?"All games":"All sets"}</button></div>`;return}
  const top=(lbl)=>`<div class="row between"><button class="linkbtn" id="gquit" type="button">Quit</button><span class="small">${lbl}</span><span class="small">${G.id==="blitz"?`<b id="bt">60s</b>`:G.id==="pairs"?`${G.slips} slip${G.slips===1?"":"s"}`:G.res.filter(r=>r.ok).length+" ✓"}</span></div>`;
  const dots=()=>`<div class="gdots">${G.cs.map((_,i)=>{const r=G.res[i];return `<i class="${r?(r.ok?"ok":"bad"):i===G.q?"now":""}"></i>`}).join("")}</div>`;
  if(G.id==="speed"){const c=G.cs[G.q];
    z.innerHTML=`<div class="gplay">${top(`Set ${G.set+1} · ${G.q+1}/${G.cs.length}`)}<div class="gtrack"><i id="gbar" style="transform:scaleX(${G.pick===null?1:Math.max(0,1-G.res[G.res.length-1].ms/GLIMIT)})"></i></div>${dots()}
    <div class="gword serif">${esc(c[1])}</div><div class="gopts">${G.opts.map((o,k)=>`<button class="gopt ${G.pick!==null?(o===c?"ok":k===G.pick?"bad":"dim"):""}" data-gk="${k}" type="button" ${G.pick!==null?"disabled":""}>${esc(o[2])}</button>`).join("")}</div>${G.pick===-1?`<p class="small" style="text-align:center;color:var(--red)">Time's up</p>`:""}</div>`;return}
  if(G.id==="context"){const c=G.cs[G.q],m=G.m;const ans=G.pick!==null;
    z.innerHTML=`<div class="gplay">${top(`Set ${G.set+1} · ${G.q+1}/${G.cs.length}`)}${dots()}
    <div class="panel csent"><p class="cfr">${ans?hl(EX[c[1]][0],c[1]):m.fr}</p><p class="cen">${esc(m.en)}</p>${ans?sayBtn(EX[c[1]][0],"Listen"):""}</div>
    <div class="gopts two">${G.opts.map((o,k)=>`<button class="gopt ${ans?(o===c?"ok":k===G.pick?"bad":"dim"):""}" data-ck="${k}" type="button" ${ans?"disabled":""}>${esc(o[1])}</button>`).join("")}</div>
    ${ans?`<p class="small" style="text-align:center;margin:12px 0 0"><b>${esc(c[1])}</b> = ${esc(c[2])}</p><button class="btn p wide" id="cnext" type="button" style="margin-top:12px">${G.q+1<G.cs.length?"Next":"See result"}</button>`:""}</div>`;
    if(ans){const nb=$("cnext");if(nb)nb.focus({preventScroll:true})}return}
  if(G.id==="pairs"){const cell=(side,arr)=>arr.map((c,i)=>{const gone=G.gone.has(c),sel=G.sel&&G.sel.side===side&&G.sel.c===c,bad=G.bad&&G.bad.includes(c);return `<button class="pcell ${side} ${gone?"gone":""} ${sel?"sel":""} ${bad?"bad shake":""}" data-p="${side}${i}" type="button" ${gone?"disabled":""}>${esc(side==="L"?c[1]:c[2])}</button>`}).join("");
    z.innerHTML=`<div class="gplay">${top(`Set ${G.set+1} · board ${G.b+1}/${G.boards.length}`)}<div class="gtrack"><i style="transform:scaleX(${(G.b*G.boards[0].length+G.gone.size)/G.cs.length})"></i></div>
    <p class="small" style="text-align:center;margin:4px 0 10px">Tap a French word, then its English</p><div class="pgrid"><div>${cell("L",G.L)}</div><div>${cell("R",G.R)}</div></div></div>`;return}
  if(G.id==="blitz"){const q=G.cur,a=G.pick!==null,ok=a&&G.pick===q.truth;
    z.innerHTML=`<div class="gplay">${top(`Score <b>${G.score}</b>`)}<div class="gtrack"><i id="gbar"></i></div>
    <div class="bmult"><span class="${G.streak>=5?"hot":""}">×${bMult()}</span><small>${G.streak} in a row</small></div>
    <div class="panel bcard ${a?(ok?"ok":"bad"):""}"><div class="gword serif" style="padding:8px 0 6px">${esc(q.c[1])}</div><div class="bsep">means</div><div class="bshown">${esc(q.shown[2])}</div>${a&&!ok?`<div class="small" style="margin-top:10px">${q.truth?"It was right.":`Right answer: <b>${esc(q.c[2])}</b>`}</div>`:""}</div>
    <div class="bbtns"><button class="bno" data-b="0" type="button" aria-label="False">✕</button><button class="byes" data-b="1" type="button" aria-label="True">✓</button></div></div>`;
    const el=$("gbar");if(el)el.style.transform=`scaleX(${Math.max(0,1-(performance.now()-G.t0)/60000)})`;return}}
$("cardzone").addEventListener("pointerdown",e=>{if(!G||G.done)return;let b;
  if((b=e.target.closest("[data-gk]"))&&G.pick===null){e.preventDefault();sAnswer(+b.dataset.gk)}
  else if((b=e.target.closest("[data-b]"))){e.preventDefault();bAnswer(b.dataset.b==="1")}
  else if((b=e.target.closest("[data-p]"))){e.preventDefault();pTap(b.dataset.p[0],+b.dataset.p.slice(1))}});
$("cardzone").addEventListener("click",e=>{let b;
  if(b=e.target.closest("[data-gh]")){haptic();GH=b.dataset.gh;renderGame();$("main").scrollTop=0;return}
  if(b=e.target.closest("[data-gs]")){haptic();gStart(GH||G&&G.id,+b.dataset.gs);$("main").scrollTop=0;return}
  if(b=e.target.closest("[data-ck]")){cAnswer(+b.dataset.ck);return}
  if(e.target.closest("#cnext")){cNext();return}
  if(e.target.closest("#ghome")){GH=null;renderGame();return}
  if(e.target.closest("#gquit")||e.target.closest("#gback")){if(G)GH=G.id;gQuit();if(GH==="blitz"&&e.target.closest("#gback"))GH=null;renderGame();return}});
window.addEventListener("keydown",e=>{if(!G||G.done||curView!=="cards"||mode!=="game")return;if(G.id==="blitz"&&(e.key==="ArrowLeft"||e.key==="ArrowRight")){bAnswer(e.key==="ArrowRight")}});
document.addEventListener("visibilitychange",()=>{if(document.hidden&&G&&!G.done){const id=G.id;gQuit();GH=id;if(curView==="cards"&&mode==="game")renderGame()}});

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

/* tap anywhere that isn't a control to close the keyboard */
$("main").addEventListener("pointerdown",e=>{const a=document.activeElement;if(!a||!/INPUT|TEXTAREA/.test(a.tagName))return;if(e.target.closest("input,textarea,button,label,select,a,.opt,.chip,summary"))return;a.blur()});
/* ---------- read: news stories + live headlines ---------- */
const RD={tab:"stories",open:null,dom:"All",show:{},tr:{},live:null,liveErr:"",loading:false,ltr:{}};
const FEEDS=[["France 24","https://www.france24.com/fr/rss","https://www.france24.com/en/"],["RFI","https://www.rfi.fr/fr/rss","https://www.rfi.fr/en/"]];
const strip=h=>{const d=document.createElement("div");d.innerHTML=h||"";return (d.textContent||"").replace(/\s+/g," ").trim()};
async function loadLive(){if(RD.loading)return;RD.loading=true;RD.liveErr="";renderRead();const out=[];
  await Promise.all(FEEDS.map(async f=>{try{const ctl=new AbortController();const tm=setTimeout(()=>ctl.abort(),9000);const r=await fetch(f[1],{signal:ctl.signal});clearTimeout(tm);const x=new DOMParser().parseFromString(await r.text(),"text/xml");
    x.querySelectorAll("item").forEach((it,i)=>{if(i>=12)return;const g=t=>{const n=it.querySelector(t);return n?n.textContent:""};const t=strip(g("title"));if(!t)return;out.push({src:f[0],en:f[2],t,d:strip(g("description")).slice(0,320),l:g("link").trim(),ts:Date.parse(g("pubDate"))||0})})}catch(e){}}));
  RD.loading=false;if(out.length){out.sort((a,b)=>b.ts-a.ts);RD.live=out}else RD.liveErr=NATIVE?"Couldn't reach the news feeds. Check your connection and try again.":"Live headlines load in the iPhone app. The browser preview blocks the feeds.";renderRead()}
function termAdded(fr){return (S.mine||[]).some(m=>m.fr===fr)||CARDS.some(c=>c[1]===fr)}
function addTerm(st,t){if(termAdded(t[0]))return;const sents=x=>x.match(/[^.!?]+[.!?]+|[^.!?]+$/g)||[x];let ex=null;const w=t[0].replace(/\(.*?\)/g,"").split(/[\s'’-]+/).sort((p,q)=>q.length-p.length)[0]||t[0];const stem=w.slice(0,Math.max(4,w.length-2)).toLowerCase();
  st.p.some(pp=>{const fs=sents(pp[0]).map(z=>z.trim()),es=sents(pp[1]).map(z=>z.trim());const i=fs.findIndex(z=>z.toLowerCase().includes(stem));if(i<0)return false;ex=[fs[i],fs.length===es.length?es[i]:pp[1]];return true});
  S.mine=S.mine||[];S.mine.push({fr:t[0],en:t[1],src:st.t,ex:ex||undefined});syncMine();save();updateBadge()}
function renderRead(){const z=$("readzone");if(!z)return;document.querySelectorAll("#rtab button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.r===RD.tab));
  const head=$("readhead");if(head)head.style.display=RD.open?"none":"";
  if(RD.open){const st=NEWS.find(n=>n.id===RD.open);const allShown=st.p.every((_,i)=>RD.show[st.id+":"+i]);
    z.innerHTML=`<button class="back" id="rback" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 5.5L8 12l6.5 6.5"/></svg>All stories</button>
    <article class="story"><div class="eyebrow">${di(st.dom)}${esc(st.dom)}</div><div class="hwrow" style="justify-content:flex-start;align-items:flex-start"><h2 class="stt">${esc(st.t)}</h2>${sayBtn(st.t)}</div>${allShown?`<p class="ste">${esc(st.te)}</p>`:""}
    ${st.p.map((pp,i)=>{const k=st.id+":"+i,on=RD.show[k],tr=RD.tr[k],dk=k;return `<div class="para ${on?"on":""}"><p class="pfr">${esc(pp[0])}</p>
      ${tr?`<textarea class="ptr" data-d="${dk}" rows="4" placeholder="Your English version" aria-label="Your translation of paragraph ${i+1}">${esc(S.ndraft[dk]||"")}</textarea>`:""}
      ${on?`<p class="pen">${esc(pp[1])}</p>`:""}
      <div class="pact">${sayBtn(pp[0],"Listen to the paragraph")}${tr?"":`<button type="button" class="rb" data-tr="${k}">Translate it</button>`}<button type="button" class="rb ${on?"":"p"}" data-show="${k}">${on?"Hide English":"Show English"}</button></div></div>`}).join("")}
    </article>
    <div class="panel"><h3 style="margin-bottom:4px">Key terms</h3><p class="small" style="margin:0 0 10px">Add them to your cards. The sentence from this story becomes the example.</p>
    ${st.terms.map((t,i)=>{const a=termAdded(t[0]);return `<div class="term"><div><b>${esc(t[0])}</b><span>${esc(t[1])}</span></div><button type="button" class="rb ${a?"done":"p"}" data-add="${i}" ${a?"disabled":""}>${a?"Added":"+ Cards"}</button></div>`}).join("")}
    ${st.terms.some(t=>!termAdded(t[0]))?`<button type="button" class="linkbtn" id="addall" style="margin-top:10px">Add all</button>`:""}</div>
    <button class="btn p wide" id="rdone" type="button">${S.nread[st.id]?"Read · back to stories":"Done reading"}</button>`;return}
  if(RD.tab==="live"){if(!RD.live&&!RD.liveErr&&!RD.loading){loadLive();return}
    z.innerHTML=`<p class="small" style="margin:0 0 12px">Today's French headlines. No model answer here: write your English, then open the article or check the English edition, which often runs the same story.</p>
    ${RD.loading?`<div class="panel empty"><div class="spin"></div><p class="small">Fetching headlines…</p></div>`:RD.liveErr?`<div class="panel empty"><p class="small" style="margin:0 0 12px">${esc(RD.liveErr)}</p>${NATIVE?`<button class="btn p" id="lretry">Try again</button>`:""}</div>`:
    RD.live.map((it,i)=>`<div class="panel live"><div class="row between"><span class="eyebrow">${esc(it.src)}${it.ts?" · "+new Date(it.ts).toLocaleTimeString("en-AU",{hour:"numeric",minute:"2-digit"}):""}</span>${sayBtn(it.t+". "+it.d)}</div><b class="serif lt">${esc(it.t)}</b>${it.d?`<p class="ld">${esc(it.d)}</p>`:""}
      ${RD.ltr[i]!==undefined?`<textarea class="ltr" data-i="${i}" rows="3" placeholder="Your English headline and summary" aria-label="Your translation">${esc(RD.ltr[i])}</textarea>`:""}
      <div class="pact">${RD.ltr[i]===undefined?`<button type="button" class="rb p" data-ltr="${i}">Translate it</button>`:""}${it.l?`<a class="rb" href="${esc(it.l)}" target="_blank" rel="noopener">Article</a>`:""}<a class="rb" href="${esc(it.en)}" target="_blank" rel="noopener">English edition</a></div></div>`).join("")+`<button class="btn wide" id="lretry" type="button">Refresh</button>`}`;return}
  const doms=["All",...new Set(NEWS.map(n=>n.dom))];const list=NEWS.filter(n=>RD.dom==="All"||n.dom===RD.dom);const done=NEWS.filter(n=>S.nread[n.id]).length;
  z.innerHTML=`<div class="chips" id="rdoms">${doms.map(d=>`<button class="chip" data-dom="${esc(d)}" aria-pressed="${d===RD.dom}">${esc(d)}</button>`).join("")}</div>
  <div class="stat"><span><b>${done}</b>/${NEWS.length} read</span><span><b>${(S.mine||[]).length}</b> terms saved</span></div>
  <div class="stories">${list.map(n=>`<button class="srow ${S.nread[n.id]?"read":""}" data-open="${n.id}" type="button"><span class="eyebrow">${di(n.dom)}${esc(n.dom)}${S.nread[n.id]?' · <span class="ok">read</span>':""}</span><b class="serif">${esc(n.t)}</b><small>${n.p.length} paragraphs · ${n.terms.length} key terms</small></button>`).join("")}</div>`}
$("v-read").addEventListener("click",e=>{const t=e.target;let b;
  if(b=t.closest("#rtab button")){haptic();RD.tab=b.dataset.r;RD.open=null;renderRead();return}
  if(b=t.closest("[data-dom]")){haptic();RD.dom=b.dataset.dom;renderRead();return}
  if(b=t.closest("[data-open]")){haptic();RD.open=b.dataset.open;renderRead();$("main").scrollTop=0;return}
  if(t.closest("#rback")){RD.open=null;renderRead();$("main").scrollTop=0;return}
  if(b=t.closest("[data-show]")){const k=b.dataset.show;RD.show[k]=!RD.show[k];haptic();renderRead();return}
  if(b=t.closest("[data-tr]")){RD.tr[b.dataset.tr]=true;renderRead();const a=document.querySelector(`.ptr[data-d="${b.dataset.tr}"]`);if(a)a.focus();return}
  if(b=t.closest("[data-add]")){const st=NEWS.find(n=>n.id===RD.open);addTerm(st,st.terms[+b.dataset.add]);haptic("ok");toast("Added to My words");renderRead();return}
  if(t.closest("#addall")){const st=NEWS.find(n=>n.id===RD.open);st.terms.forEach(x=>addTerm(st,x));haptic("ok");toast("Added to My words");renderRead();return}
  if(t.closest("#rdone")){const st=RD.open;const first=!S.nread[st];S.nread[st]=today();const d=T();const was=S.done[d].read;S.done[d].read=true;save();RD.open=null;renderRead();$("main").scrollTop=0;if(first&&!was){haptic("win");toast(dayComplete(d)?"Day complete. Streak +1":"Reading done for today");if(dayComplete(d))burst()}return}
  if(t.closest("#lretry")){RD.live=null;RD.liveErr="";loadLive();return}
  if(b=t.closest("[data-ltr]")){RD.ltr[+b.dataset.ltr]="";renderRead();const a=document.querySelector(`.ltr[data-i="${b.dataset.ltr}"]`);if(a)a.focus();return}});
$("v-read").addEventListener("input",e=>{const t=e.target;if(t.classList.contains("ptr")){S.ndraft[t.dataset.d]=t.value;save()}else if(t.classList.contains("ltr"))RD.ltr[+t.dataset.i]=t.value});

/* ---------- boot ---------- */
function render(v){if(v==="read")renderRead();if(v==="today")renderToday();if(v==="cards")renderCards();if(v==="grammar")renderGrammar();if(v==="practice")renderPractice();if(v==="test")renderSteps();updateBadge()}
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
