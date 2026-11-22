/* Certifié — sentence translation exercise (Work tab › Sentences).
   Sources: example sentences on every card (short), news-style practice stories split into sentences (article) and whole paragraphs.
   Marking: Claude when available (claude.ai preview), otherwise a reference translation + self-check. */
(function(){
"use strict";
const C=window.CERT;if(!C)return;
const {esc,$}=C;
const NEWS=window.NAATI_NEWS||[];
const LV=[["short","Short sentences","Everyday admin sentences from your word decks"],["article","Article sentences","One sentence at a time from news-style articles"],["para","Paragraphs","A whole paragraph of an article"]];
const splitS=t=>t.replace(/\s+/g," ").trim().split(/(?<=[.!?…])\s+(?=[A-ZÀ-ÖÉÈÊ«"“])/).map(x=>x.trim()).filter(Boolean);
let ITEMS=null;
function build(){if(ITEMS)return ITEMS;const out=[];
  const deckOf={};C.CARDS.forEach(c=>{if(!deckOf[c[1]])deckOf[c[1]]=c[0]});
  Object.entries(C.EX).forEach(([w,x])=>{if(!x||!x[0]||!x[1])return;out.push({id:"e|"+w,lv:"short",fr:x[0],en:x[1],topic:deckOf[w]||"General",word:w})});
  NEWS.forEach(n=>{(n.p||[]).forEach((p,i)=>{out.push({id:`${n.id}.${i}`,lv:"para",fr:p[0],en:p[1],topic:n.dom,ctx:n.t,terms:n.terms});
    const a=splitS(p[0]),b=splitS(p[1]);if(a.length===b.length&&a.length>1)a.forEach((s,k)=>out.push({id:`${n.id}.${i}.${k}`,lv:"article",fr:s,en:b[k],topic:n.dom,ctx:n.t,terms:n.terms}));
    else if(a.length===1)out.push({id:`${n.id}.${i}.0`,lv:"article",fr:p[0],en:p[1],topic:n.dom,ctx:n.t,terms:n.terms})})});
  return ITEMS=out}
function st(){const S=C.S;S.tr=S.tr||{};const t=S.tr;t.seen=t.seen||{};t.lv=t.lv||"article";t.topic=t.topic||"";return t}
let cur=null,res=null,busy=false,mine="",showTerms=false;
function pool(){const t=st();return build().filter(x=>x.lv===t.lv&&(!t.topic||x.topic===t.topic))}
function pick(){const p=pool();if(!p.length){cur=null;return}const t=st();const fresh=p.filter(x=>t.seen[x.id]===undefined);const weak=p.filter(x=>t.seen[x.id]!==undefined&&t.seen[x.id]<6);
  const src=fresh.length?fresh:weak.length?weak:p;let n=src[Math.random()*src.length|0];if(cur&&n.id===cur.id&&src.length>1)n=src.find(x=>x.id!==cur.id);cur=n;res=null;mine="";showTerms=false}
const norm=s=>s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[’']/g,"'").replace(/[^a-z0-9' ]+/g," ").replace(/\s+/g," ").trim();
const STOP=new Set("a an the of to in on at for and or but is are was were be been by with as from that this these those it its their his her they he she we you your our will would can could has have had not no do does did which who whom than then there here into out up so if".split(" "));
const stem=w=>w.replace(/(ies|ied)$/,"y").replace(/(ing|ed|es|s)$/,"");
function overlap(mine,model){const m=new Set(norm(mine).split(" ").filter(w=>w&&!STOP.has(w)).map(stem));const k=norm(model).split(" ").filter(w=>w&&!STOP.has(w)).map(stem);if(!k.length)return 0;return Math.round(k.filter(w=>m.has(w)).length/k.length*100)}
function termsIn(it){const out=[];const f=norm(it.fr);(it.terms||[]).forEach(t=>{const w=norm(t[0]);if(w&&f.includes(w))out.push(t)});
  if(it.lv==="short"&&it.word){const c=C.CARDS.find(x=>x[1]===it.word);if(c)out.push([c[1],c[2]])}return out}
function award(score){const S=C.S,t=st();const d=C.T();const first=t.seen[cur.id]===undefined;t.seen[cur.id]=t.seen[cur.id]===undefined?score:Math.max(score,t.seen[cur.id]);
  t.n=(t.n||0)+1;t.sum=(t.sum||0)+score;S.counts[d].tr=(S.counts[d].tr||0)+1;if(S.counts[d].tr===5&&!S.done[d].write){S.done[d].write=true;setTimeout(()=>{C.burst();C.toast("5 translations done today")},150)}
  const base=cur.lv==="short"?4:cur.lv==="article"?8:16;const xp=Math.round(base*(score>=6?1:.5)*(first?1:.5));S.xpb=(S.xpb||0)+xp;res.xp=xp;C.save()}
async function check(){const ta=$("trin");mine=ta?ta.value:"";if(!mine.trim()){ta&&ta.focus();return}if(busy)return;
  const ov=overlap(mine,cur.en);res={ov,pending:true};busy=true;render();C.haptic();
  let ai=null;try{if(window.AIM&&await AIM.available())ai=await AIM.markSentence({fr:cur.fr,model:cur.en,mine,ctx:cur.ctx||cur.topic})}catch(e){ai=null}
  busy=false;if(!cur)return;if(ai){res={ov,ai,pending:false};award(ai.score);C.haptic(ai.score>=8?"win":ai.score>=6?"ok":"bad");if(ai.score>=9)C.burst()}else{res={ov,pending:false,self:true}}render()}
function selfMark(v){if(!res||!res.self||res.score!==undefined)return;res.score=v;award(v);C.haptic(v>=8?"ok":"bad");render()}
function headStats(){const t=st();const p=pool();const done=p.filter(x=>t.seen[x.id]!==undefined).length;return `<div class="stat"><span><b>${done}</b>/${p.length} translated</span><span><b>${t.n?(t.sum/t.n).toFixed(1):"–"}</b> avg /10</span><span><b>${(C.S.counts[C.T()]||{}).tr||0}</b> today</span></div><div class="bar"><i style="width:${p.length?done/p.length*100:0}%"></i></div>`}
function render(z){z=z||$("pzone");if(!z)return;const t=st();if(!cur||!pool().includes(cur))pick();
  const topics=[...new Set(build().filter(x=>x.lv===t.lv).map(x=>x.topic))];
  const lvl=`<div class="chips trlv">${LV.map(l=>`<button class="chip" data-trl="${l[0]}" aria-pressed="${t.lv===l[0]}">${l[1]}</button>`).join("")}</div>`;
  const tp=`<div class="chips trtp">${["",...topics].map(x=>`<button class="chip" data-trt="${esc(x)}" aria-pressed="${t.topic===x}">${x?C.di(x)+esc(x):"All topics"}</button>`).join("")}</div>`;
  if(!cur){z.innerHTML=lvl+tp+`<div class="panel small">Nothing here for this topic. Pick another.</div>`;return}
  const terms=termsIn(cur);const col=C.icol(cur.topic);
  const R=res;let out="";
  if(R&&R.pending)out=`<div class="panel ctmarking"><div class="spin"></div><p class="small">Claude is checking your translation…</p></div>`;
  else if(R&&R.ai){const a=R.ai;out=`<div class="panel trres ${a.score>=8?"good":a.score>=6?"mid":"low"}"><div class="trsc"><b>${a.score}</b><small>/10</small></div><div><b>${esc(a.verdict)}</b>${R.xp?`<span class="xpgain">+${R.xp} XP</span>`:""}</div>
    ${a.errors.length?`<ul class="err trerr">${a.errors.map(e=>`<li><span class="w">${esc(e.quote)}</span>${e.fix?` → <span class="r">${esc(e.fix)}</span>`:""}<div class="small"><b>${esc(e.type)}</b>${e.why?` · ${esc(e.why)}`:""}</div></li>`).join("")}</ul>`:`<p class="small" style="margin:8px 0 0">No errors found.</p>`}
    ${a.better&&a.errors.length?`<p class="small" style="margin:10px 0 2px"><b>Your version, fixed</b></p><p class="trbetter">${esc(a.better)}</p>`:""}
    <p class="small" style="margin:10px 0 2px"><b>Another good translation</b></p><p class="trmodel">${esc(cur.en)}</p>${a.tip?`<p class="small" style="margin-top:8px"><b>Tip:</b> ${esc(a.tip)}</p>`:""}<p class="small" style="margin-top:6px;opacity:.75">Marked by Claude (AI). An estimate.</p></div>`}
  else if(R&&R.self){out=`<div class="panel trres"><p class="small" style="margin:0 0 4px"><b>A good translation</b></p><p class="trmodel">${esc(cur.en)}</p><p class="small">Key words in common with it: <b>${R.ov}%</b>. Different wording can still be right: check the meaning, not the words.</p>
    ${R.score===undefined?`<p class="small" style="margin:10px 0 6px"><b>How did you do?</b></p><div class="trself"><button class="btn" data-trs="10" type="button">Same meaning</button><button class="btn" data-trs="6" type="button">Small slips</button><button class="btn" data-trs="2" type="button">Missed something</button></div>`:`<p class="small" style="margin-top:8px">Saved${res.xp?` · +${res.xp} XP`:""}.</p>`}
    <p class="small" style="margin-top:10px;opacity:.75">Automatic marking by Claude works in the Claude version of the app.</p></div>`}
  z.innerHTML=lvl+tp+headStats()+`<div class="panel trsrc" style="--ic:${col}"><div class="trctx">${C.di(cur.topic)}<span>${esc(cur.topic)}${cur.ctx?` · <i>${esc(cur.ctx)}</i>`:""}</span></div>
    <p class="trfr">${esc(cur.fr)}</p><div class="row" style="gap:8px">${C.sayBtn(cur.fr,"Listen")}${terms.length?`<button class="linkbtn" id="trterms" type="button">${showTerms?"Hide":"Show"} key words (${terms.length})</button>`:""}</div>
    ${showTerms&&terms.length?`<div class="trterms">${terms.map(x=>`<div><b>${esc(x[0])}</b> ${esc(x[1])}</div>`).join("")}</div>`:""}</div>
    <textarea id="trin" class="trin" placeholder="Your English translation" spellcheck="true" autocorrect="off" autocapitalize="sentences" ${R&&!R.pending?"readonly":""}>${esc(mine)}</textarea>
    ${out}
    <div class="ans">${!R?`<button class="btn p" id="trcheck" type="button">Check my translation</button><button class="btn" id="trskip" type="button">Skip</button>`:R.pending?"":`<button class="btn p" id="trnext" type="button">Next</button><button class="btn" id="trretry" type="button">Try again</button>`}</div>`;
  const ta=$("trin");if(ta&&!R){ta.style.minHeight=cur.lv==="para"?"200px":"110px"}}
document.addEventListener("click",e=>{if(!e.target.closest("#pzone"))return;let b;const t=st();
  if(b=e.target.closest("[data-trl]")){C.haptic();t.lv=b.dataset.trl;t.topic="";cur=null;C.save();render();return}
  if(b=e.target.closest("[data-trt]")){C.haptic();t.topic=b.dataset.trt;cur=null;C.save();render();return}
  if(e.target.closest("#trterms")){showTerms=!showTerms;const ta=$("trin");if(ta)mine=ta.value;render();return}
  if(e.target.closest("#trcheck")){check();return}
  if(e.target.closest("#trskip")||e.target.closest("#trnext")){C.haptic();pick();render();const z=$("main");if(z)z.scrollTop=0;return}
  if(e.target.closest("#trretry")){res=null;render();const ta=$("trin");if(ta)ta.focus();return}
  if(b=e.target.closest("[data-trs]")){selfMark(+b.dataset.trs);return}});
window.TRX={render,_items:build};
})();
