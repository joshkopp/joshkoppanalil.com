/* The Back Room — core engine: bank, bets, sound, particles, cards, router. Fake money only. */
'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const LUCKY=new URLSearchParams(location.search).get('luck')==='1'||(()=>{try{return sessionStorage.getItem('br-x')==='1'}catch(e){return false}})(),KEY=LUCKY?'backroom-lucky':'backroom';
/* lucky mode (?luck=1, the "dam" code): most rounds get quietly tilted your way */
const LUCK=LUCKY?.7:0,lucky=()=>Math.random()<LUCK;
function bestOf(n,gen,score){let b=gen(),bs=score(b);for(let i=1;i<n;i++){const x=gen(),s=score(x);if(s>bs){b=x;bs=s}}return b}
const fmt=n=>(n<0?'-$':'$')+Math.round(Math.abs(n)).toLocaleString('en-US');
const fmtx=m=>(m>=100?m.toFixed(0):m>=10?m.toFixed(1):m.toFixed(2))+'×';
const rnd=n=>Math.floor(Math.random()*n);
const pick=a=>a[rnd(a.length)];
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const store={get(k,d){try{const v=localStorage.getItem(k);return v===null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=rnd(i+1);[a[i],a[j]]=[a[j],a[i]]}return a}
function el(tag,cls,html){const e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e}
function center(e){const r=e.getBoundingClientRect();return{x:r.left+r.width/2,y:r.top+r.height/2}}
function setRange(r){r.style.setProperty('--p',((r.value-r.min)/(r.max-r.min)*100)+'%')}

/* ------------------------------------------------------------ sound (synthesized, no files) */
const SFX=(()=>{
  let ac=null,on=store.get('backroom-sound',true),master=null;
  const ctx=()=>{if(!on)return null;if(!ac){try{ac=new(window.AudioContext||window.webkitAudioContext)();master=ac.createGain();master.gain.value=.5;master.connect(ac.destination)}catch(e){return null}}if(ac.state==='suspended')ac.resume();return ac};
  function tone(f,d=.12,type='triangle',vol=.18,when=0,slide=0){const a=ctx();if(!a)return;const t=a.currentTime+when,o=a.createOscillator(),g=a.createGain();o.type=type;o.frequency.setValueAtTime(f,t);if(slide)o.frequency.exponentialRampToValueAtTime(Math.max(30,f*slide),t+d);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g).connect(master);o.start(t);o.stop(t+d+.02)}
  function noise(d=.08,vol=.2,freq=2000,type='bandpass',when=0){const a=ctx();if(!a)return;const t=a.currentTime+when,n=Math.floor(a.sampleRate*d),b=a.createBuffer(1,n,a.sampleRate),x=b.getChannelData(0);for(let i=0;i<n;i++)x[i]=(Math.random()*2-1)*(1-i/n);const s=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain();s.buffer=b;f.type=type;f.frequency.value=freq;g.gain.value=vol;s.connect(f).connect(g).connect(master);s.start(t)}
  return{
    get on(){return on},toggle(){on=!on;store.set('backroom-sound',on);if(on)this.chip();return on},
    click(){tone(880,.05,'square',.05)},
    chip(){noise(.05,.35,3800,'bandpass');tone(2200,.04,'triangle',.06,.01)},
    card(){noise(.09,.25,5000,'highpass')},
    flip(){noise(.05,.2,2600,'bandpass');tone(1400,.03,'sine',.04)},
    tick(p=1){tone(1200*p,.025,'square',.04);noise(.02,.15,6000,'highpass')},
    reel(){tone(320+Math.random()*80,.03,'square',.03)},
    stop(){tone(180,.08,'sine',.2,0,.6);noise(.05,.2,900)},
    pop(f=660){tone(f,.09,'sine',.14,0,1.5)},
    gem(){[1318,1760,2637].forEach((f,i)=>tone(f,.18,'sine',.09,i*.05))},
    win(m=2){const base=m>=10?392:523;[0,4,7,12,16].slice(0,m>=5?5:m>=2?4:3).forEach((s,i)=>tone(base*Math.pow(2,s/12),.22,'triangle',.14,i*.08));if(m>=5)[0,4,7,12].forEach((s,i)=>tone(base*2*Math.pow(2,s/12),.3,'sine',.07,.4+i*.06))},
    big(){[0,4,7,12,7,12,16,19,24].forEach((s,i)=>tone(392*Math.pow(2,s/12),.28,'triangle',.15,i*.11));[0,7,12].forEach(s=>tone(196*Math.pow(2,s/12),1.2,'sawtooth',.05,.9))},
    lose(){tone(220,.28,'sine',.14,0,.55);tone(165,.35,'triangle',.08,.08,.6)},
    boom(){noise(.7,.6,600,'lowpass');tone(90,.5,'sine',.3,0,.3)},
    roll(){for(let i=0;i<6;i++)noise(.04,.18,1800+i*200,'bandpass',i*.05)},
    whoosh(){noise(.35,.25,1200,'bandpass')},
    coin(){tone(1975,.07,'square',.04);tone(2637,.12,'square',.04,.06)},
    bell(){[1046,1318,1568].forEach((f,i)=>tone(f,.5,'sine',.08,i*.02))},
  };
})();

/* ------------------------------------------------------------ particles */
const FX=(()=>{
  const cv=$('#fx'),g=cv.getContext('2d');let P=[],running=false,W=0,H=0,dpr=1;
  function fit(){dpr=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr;g.setTransform(dpr,0,0,dpr,0,0)}
  addEventListener('resize',fit);fit();
  const GOLD=['#fff3c4','#f1d488','#e8c46a','#c99a3a'],CONF=['#e8c46a','#d4143a','#5cff9d','#57c7ff','#b47cff','#fff3c4','#ff8fa5'];
  function add(p){P.push(p);if(!running){running=true;requestAnimationFrame(loop)}}
  function burst(x,y,o={}){if(RM)return;const n=o.n||40,type=o.type||'coin';for(let i=0;i<n;i++){const a=o.up?(-Math.PI/2+(Math.random()-.5)*(o.spread||1.6)):Math.random()*Math.PI*2,s=(o.speed||8)*(.4+Math.random()*.8);
    add({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-(o.lift||3),g:o.g??.32,life:0,max:(o.life||70)+rnd(30),type,c:o.colors?pick(o.colors):type==='conf'?pick(CONF):pick(GOLD),sz:(o.size||7)*(.6+Math.random()*.8),r:Math.random()*6,vr:(Math.random()-.5)*.4})}}
  function rain(n=80,type='coin'){if(RM)return;for(let i=0;i<n;i++)add({x:Math.random()*W,y:-20-Math.random()*H*.6,vx:(Math.random()-.5)*2,vy:2+Math.random()*4,g:.12,life:0,max:220,type,c:type==='conf'?pick(CONF):pick(GOLD),sz:7+Math.random()*7,r:Math.random()*6,vr:(Math.random()-.5)*.3})}
  function sparks(x,y,c='#ffd76a',n=24){burst(x,y,{n,type:'spark',colors:[c,'#fff'],speed:9,g:.05,life:30,size:3,lift:0})}
  function loop(){
    g.clearRect(0,0,W,H);
    P=P.filter(p=>p.life<p.max&&p.y<H+60);
    for(const p of P){p.life++;p.vy+=p.g;p.vx*=.99;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;const a=Math.min(1,(p.max-p.life)/25);g.globalAlpha=a;
      if(p.type==='coin'){const w=Math.abs(Math.cos(p.r))*p.sz+1.2;const gr=g.createLinearGradient(p.x-w,p.y,p.x+w,p.y);gr.addColorStop(0,'#8c5e1c');gr.addColorStop(.5,p.c);gr.addColorStop(1,'#7a5418');g.fillStyle=gr;g.beginPath();g.ellipse(p.x,p.y,w,p.sz,0,0,7);g.fill();g.strokeStyle='rgba(90,60,12,.6)';g.lineWidth=1;g.stroke()}
      else if(p.type==='conf'){g.save();g.translate(p.x,p.y);g.rotate(p.r);g.fillStyle=p.c;g.fillRect(-p.sz/2,-p.sz/4,p.sz,p.sz/2*Math.abs(Math.cos(p.r*2))+1);g.restore()}
      else if(p.type==='gem'){g.save();g.translate(p.x,p.y);g.rotate(p.r);g.fillStyle=p.c;g.beginPath();g.moveTo(0,-p.sz);g.lineTo(p.sz*.7,0);g.lineTo(0,p.sz);g.lineTo(-p.sz*.7,0);g.closePath();g.fill();g.restore()}
      else{g.fillStyle=p.c;g.shadowColor=p.c;g.shadowBlur=10;g.beginPath();g.arc(p.x,p.y,p.sz,0,7);g.fill();g.shadowBlur=0}}
    g.globalAlpha=1;
    if(P.length)requestAnimationFrame(loop);else{running=false;g.clearRect(0,0,W,H)}
  }
  return{burst,rain,sparks,clear(){P=[]}};
})();

/* ------------------------------------------------------------ toast / floaters */
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('on'),2000)}
function floater(text,x,y,lose){const f=el('div','floater'+(lose?' l':''),text);f.style.left=x+'px';f.style.top=y+'px';document.body.appendChild(f);setTimeout(()=>f.remove(),1500)}
function flyChips(from,n=8){if(RM)return;const a=from.getBoundingClientRect?center(from):from,b=center($('#purse'));const cls=['c5','c25','c100','c500','c1k'];
  for(let i=0;i<n;i++){const c=el('div','chip '+pick(cls));c.style.cssText=`position:fixed;left:0;top:0;width:26px;height:26px;z-index:88;pointer-events:none`;document.body.appendChild(c);
    const sx=a.x-13+(Math.random()-.5)*60,sy=a.y-13+(Math.random()-.5)*40,mx=(sx+b.x)/2+(Math.random()-.5)*160,my=Math.min(sy,b.y)-80-Math.random()*80;
    c.animate([{transform:`translate(${sx}px,${sy}px) scale(.4)`,opacity:0},{transform:`translate(${mx}px,${my}px) scale(1.1) rotate(180deg)`,opacity:1,offset:.45},{transform:`translate(${b.x-13}px,${b.y-13}px) scale(.5) rotate(360deg)`,opacity:.9}],{duration:800+i*55,easing:'cubic-bezier(.5,0,.4,1)',delay:i*45}).onfinish=()=>c.remove()}}

/* ------------------------------------------------------------ bank + stats */
const Stats=(()=>{const s=store.get(KEY+'-stats',{played:0,wagered:0,won:0,biggest:0,best:0});
  return{s,record(bet,payout){s.played++;s.wagered+=bet;s.won+=payout;const net=payout-bet;if(net>s.biggest)s.biggest=net;if(bet>0&&payout/bet>s.best)s.best=payout/bet;store.set(KEY+'-stats',s);paintStats()}}})();
const Bank=(()=>{
  let bal=Number(store.get(KEY,1000));if(!isFinite(bal)||bal<0)bal=1000;let shown=bal,anim=0;
  function paint(){$('#bal').textContent=fmt(shown);$('#refill').hidden=bal>=1;const l=$('#lbal');if(l)l.textContent=fmt(bal)}
  function to(v){const from=shown,t0=performance.now(),D=RM?1:700;cancelAnimationFrame(anim);(function f(t){const k=Math.min(1,(t-t0)/D),e=1-Math.pow(1-k,3);shown=from+(v-from)*e;paint();if(k<1)anim=requestAnimationFrame(f)})(t0)}
  function set(v){const up=v>bal;bal=Math.max(0,Math.round(v*100)/100);store.set(KEY,bal);to(bal);const p=$('#purse');p.classList.remove('up','dn','spin');void p.offsetWidth;p.classList.add(up?'up':'dn','spin')}
  return{get bal(){return bal},set,paint,
    take(x){if(x<=0||x>bal+1e-9)return false;set(bal-x);return true},
    give(x,src,quiet){if(x<=0)return;set(bal+x);const p=center($('#purse'));if(!quiet)floater('+'+fmt(x),p.x,p.y+22);if(src)flyChips(src,Math.min(14,4+Math.round(Math.log2(1+x/50))))},
    refill(){set(1000);toast('Topped up to $1,000. Good luck!');FX.rain(60)}};
})();

/* ------------------------------------------------------------ bet bar */
const Bet=(()=>{
  let v=Number(store.get('backroom-bet',50))||50,mode='add',minB=1;
  const inp=()=>$('#bet');
  function show(){inp().value=v;$$('.rack .chip').forEach(c=>c.classList.toggle('sel',mode==='chip'&&+c.dataset.v===v))}
  function set(x){v=Math.max(minB,Math.round(x));store.set('backroom-bet',v);show();$('#betnote').textContent=''}
  return{get v(){return v},set,show,
    mode(m,min=1){mode=m;minB=min;if(v<min)v=min;show()},
    chip(x){SFX.chip();if(mode==='chip')set(x);else set(v+x)},
    /* returns the stake and removes it from the bank, or 0 with a message */
    take(x){const s=x??v;if(!(s>=minB)){note(`Minimum bet is ${fmt(minB)}.`);return 0}if(s>Bank.bal){note(Bank.bal<minB?'Out of chips. Grab a free refill up top.':`Not enough chips for ${fmt(s)}. Lower your bet.`);$('#purse').classList.add('dn');return 0}Bank.take(s);return s}};
  function note(m){$('#betnote').textContent=m;const b=$('.betbar .in');b.classList.remove('shake');void b.offsetWidth;b.classList.add('shake')}
})();

/* ------------------------------------------------------------ result helper */
function banner(e,text,kind=''){e.className='banner '+kind;e.innerHTML=text}
/** pays out and runs the matching celebration. Returns net. */
function settle(bet,payout,src,opts={}){
  payout=Math.round(payout*100)/100;Stats.record(bet,payout);const net=payout-bet,m=bet?payout/bet:0;
  if(payout>0)Bank.give(payout,opts.fx===false?null:src,opts.fx===false);
  if(net>0){if(!opts.mute)SFX.win(m);if(src&&opts.fx!==false){const c=src.getBoundingClientRect?center(src):src;FX.burst(c.x,c.y,{n:Math.min(90,20+m*8),up:true,speed:10})}
    if(m>=(opts.big||10)&&!opts.quiet)bigWin(payout,m)}
  else if(net<0&&!opts.silent){SFX.lose()}
  return net;
}
function bigWin(amount,m){
  SFX.big();FX.rain(m>=50?160:110,'coin');setTimeout(()=>FX.rain(60,'conf'),300);
  const tier=m>=100?'Epic Win':m>=25?'Mega Win':'Big Win';
  const o=el('div','',`<div class="rays"></div><div class="bw"><h3>${tier}</h3><div class="amt">$0</div><div class="x">${fmtx(m)}</div><div class="tap">tap to continue</div></div>`);o.id='bigwin';document.body.appendChild(o);
  const a=$('.amt',o),t0=performance.now();(function f(t){const k=Math.min(1,(t-t0)/1600),e=1-Math.pow(1-k,4);a.textContent=fmt(amount*e);if(k<1&&o.isConnected)requestAnimationFrame(f)})(t0);
  const close=()=>{o.style.transition='opacity .4s';o.style.opacity=0;setTimeout(()=>o.remove(),400)};o.onclick=close;setTimeout(close,3800);
}

/* ------------------------------------------------------------ playing cards */
const SUITS=['♠','♥','♦','♣'],RANKS=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
function deck(n=1){const d=[];for(let k=0;k<n;k++)for(const s of SUITS)for(const r of RANKS)d.push({r,s});return shuffle(d)}
const rankVal=c=>RANKS.indexOf(c.r)+1;               // A=1 .. K=13
function cardHTML(c){const red=c.s==='♥'||c.s==='♦',face=['J','Q','K'].includes(c.r);
  return`<div class="ci"><div class="f"><div class="ix tl">${c.r}<small>${c.s}</small></div>${face?`<div class="face">${c.r}<small>${c.s}</small></div>`:`<div class="pip">${c.s}</div>`}<div class="ix br">${c.r}<small>${c.s}</small></div></div><div class="b"></div></div>`}
function cardEl(c,up=true){const e=el('div','cardz'+((c.s==='♥'||c.s==='♦')?' red':'')+(up?' up':''),cardHTML(c));e.card=c;return e}
/** deals a card into container with a flight from the shoe (or top-right of the felt) */
async function dealCard(box,c,{up=true,from,delay=0}={}){
  if(delay)await sleep(delay);
  const e=cardEl(c,false);box.appendChild(e);SFX.card();
  if(!RM){const src=from?center(from):{x:innerWidth-80,y:120},dst=center(e);
    await e.animate([{transform:`translate(${src.x-dst.x}px,${src.y-dst.y}px) rotate(-40deg) scale(.6)`,opacity:.2},{transform:'none',opacity:1}],{duration:420,easing:'cubic-bezier(.2,.8,.2,1)'}).finished.catch(()=>{})}
  if(up){e.classList.add('up');SFX.flip();await sleep(RM?0:200)}
  return e;
}
function flipCard(e){e.classList.add('up');SFX.flip()}

/* ------------------------------------------------------------ games registry + router */
const GAMES=[];function reg(g){GAMES.push(g)}
let current=null;
function openGame(id,push=true){
  const g=GAMES.find(x=>x.id===id);if(!g)return;
  if(current&&current.leave)current.leave();
  $$('.game').forEach(s=>s.classList.toggle('on',s.id==='g-'+id));
  $('#lobby').hidden=true;$('#stage').hidden=false;$('.betbar').hidden=!!g.noBet;document.body.classList.add('ingame');
  $('#gtitle').textContent=g.name;current=g;Bet.mode(g.betMode||'add',g.minBet||1);
  if(!g._init){g._init=true;g.init($('#g-'+id))}
  g.enter&&g.enter();scrollTo({top:0,behavior:RM?'auto':'smooth'});
  if(push)history.pushState({g:id},'','#'+id);SFX.click();
}
function openLobby(push=true){if(current&&current.leave)current.leave();current=null;$('#lobby').hidden=false;$('#stage').hidden=true;$('.betbar').hidden=true;document.body.classList.remove('ingame');$$('.game').forEach(s=>s.classList.remove('on'));if(push)history.pushState({},'',location.pathname+location.search);}
addEventListener('popstate',()=>{const h=location.hash.slice(1);h?openGame(h,false):openLobby(false)});

/* ------------------------------------------------------------ lobby chrome */
function paintStats(){const s=Stats.s;const set=(id,v)=>{const e=$(id);if(e)e.textContent=v};set('#st-played',s.played.toLocaleString());set('#st-big',fmt(s.biggest));set('#st-best',s.best?fmtx(s.best):'—')}
function buildLobby(){
  const CATS=[['Featured','Hot right now'],['Table Games','Cards and wheels'],['Slots & Wheels','Spin to win'],['Instant Games','One click, instant result']];
  const box=$('#cats');box.innerHTML='';let k=0;
  for(const[c,sub]of CATS){const list=GAMES.filter(g=>c==='Featured'?g.featured:(g.cat===c&&!g.featured));if(!list.length)continue;
    box.appendChild(el('div','cat',`<h2>${c}</h2><span class="n">${sub}</span>`));const t=el('div','tiles');
    list.forEach(g=>{const b=el('button','tile'+(c==='Featured'?' feat':''),`<div class="tin"><div class="art" style="--tc:${g.tc||'rgba(13,74,53,.9)'}">${g.newb?'<span class="ribbon">NEW</span>':''}<span class="rtp">${g.edge||''}</span>${g.art}</div><div class="meta"><h3>${g.name}</h3><p>${g.desc}</p></div></div>`);
      b.style.setProperty('--i',k++);b.onclick=()=>openGame(g.id);
      b.onpointermove=e=>{if(e.pointerType!=='mouse')return;const r=b.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;b.style.setProperty('--ry',(x-.5)*10+'deg');b.style.setProperty('--rx',(.5-y)*10+'deg');b.style.setProperty('--gx',x*100+'%');b.style.setProperty('--gy',y*100+'%')};
      b.onpointerleave=()=>{b.style.setProperty('--rx','0deg');b.style.setProperty('--ry','0deg')};
      t.appendChild(b)});box.appendChild(t)}
  $('#ngames').textContent=GAMES.length;
}
function bulbs(){const m=$('.marquee');if(!m)return;const s=$('.bulbs',m),w=m.clientWidth-16,h=m.clientHeight-16;s.setAttribute('viewBox',`0 0 ${w} ${h}`);s.innerHTML=['off','on','on on2','on on3'].map(c=>`<rect class="${c}" x="6" y="6" width="${w-12}" height="${h-12}" rx="20"/>`).join('')}
function dust(){const cv=$('#dust');if(RM||!cv)return;const g=cv.getContext('2d');let W,H;const P=Array.from({length:46},()=>({x:Math.random(),y:Math.random(),r:.6+Math.random()*2.4,s:.0002+Math.random()*.0006,ph:Math.random()*6}));
  const fit=()=>{const d=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;cv.width=W*d;cv.height=H*d;g.setTransform(d,0,0,d,0,0)};fit();addEventListener('resize',fit);
  (function f(t){g.clearRect(0,0,W,H);for(const p of P){p.y-=p.s;if(p.y<-.05){p.y=1.05;p.x=Math.random()}const a=.25+.25*Math.sin(t/900+p.ph);g.fillStyle=`rgba(255,220,140,${a})`;g.shadowColor='rgba(255,200,90,.9)';g.shadowBlur=8;g.beginPath();g.arc(p.x*W+Math.sin(t/2000+p.ph)*20,p.y*H,p.r,0,7);g.fill()}g.shadowBlur=0;requestAnimationFrame(f)})(0)}

function boot(){
  Bank.paint();paintStats();buildLobby();bulbs();addEventListener('resize',bulbs);dust();
  // bet bar
  $('#rack').innerHTML=[[1,'c1'],[5,'c5'],[25,'c25'],[100,'c100'],[500,'c500'],[1000,'c1k'],[5000,'c5k']].map(([v,c])=>`<button class="chip ${c}" data-v="${v}" aria-label="${v} chip">${v>=1000?v/1000+'K':v}</button>`).join('');
  $('#rack').onclick=e=>{const c=e.target.closest('.chip');if(c)Bet.chip(+c.dataset.v)};
  $('#bet').onchange=()=>Bet.set(+$('#bet').value||1);
  $('#half').onclick=()=>{SFX.click();Bet.set(Bet.v/2)};$('#dbl').onclick=()=>{SFX.click();Bet.set(Bet.v*2)};$('#max').onclick=()=>{SFX.click();Bet.set(Math.max(1,Math.floor(Bank.bal)))};$('#clr').onclick=()=>{SFX.click();Bet.set(1)};
  Bet.show();
  $('#refill').onclick=()=>Bank.refill();
  $('#back').onclick=()=>{openLobby();SFX.click()};
  $('#snd').textContent=SFX.on?'🔊':'🔇';$('#snd').onclick=()=>{$('#snd').textContent=SFX.toggle()?'🔊':'🔇'};
  addEventListener('pointermove',e=>{document.body.style.setProperty('--mx',e.clientX+'px');document.body.style.setProperty('--my',e.clientY+'px')},{passive:true});
  const h=location.hash.slice(1);if(h&&GAMES.some(g=>g.id===h))openGame(h,false);else openLobby(false);
}
