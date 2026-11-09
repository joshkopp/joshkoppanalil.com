/* Slots & wheels: Slots, Money Wheel, Keno, Scratch Cards */
'use strict';

/* =============================================================== SLOTS */
reg((()=>{
  const SY=[['🍒',24,[5.8,15.5,44]],['🍋',24,[5.8,15.5,44]],['🍇',18,[8.7,26,63]],['🔔',12,[15.5,53,136]],['⭐',9,[26,87,265]],['7️⃣',6,[44,160,630]],['💎',4,[87,320,1550]]];
  const WILD='💎',TOTW=SY.reduce((a,s)=>a+s[1],0),PAY=Object.fromEntries(SY.map(s=>[s[0],s[2]]));
  const LINES=[[1,1,1,1,1],[0,0,0,0,0],[2,2,2,2,2],[0,1,2,1,0],[2,1,0,1,2],[0,0,1,2,2],[2,2,1,0,0],[1,0,0,0,1],[1,2,2,2,1],[1,0,1,2,1]];
  const LC=['#ffd76a','#5cff9d','#57c7ff','#ff6b9a','#b47cff','#ff9f43','#00e5c7','#ff5d5d','#c6ff5c','#ffffff'];
  const G={id:'slots',name:'Golden Sevens',cat:'Slots & Wheels',featured:true,desc:'5 reels, 10 paylines, diamond wilds and a 1,550× line jackpot.',edge:'≈96% RTP',tc:'rgba(150,20,40,.95)',
    art:`<div class="a-reels"><div><span>🍒<br>7️⃣<br>💎<br>🔔<br>🍒</span></div><div><span>7️⃣<br>💎<br>🍒<br>⭐<br>7️⃣</span></div><div><span>💎<br>🔔<br>7️⃣<br>🍋<br>💎</span></div></div>`};
  let R,grid=[],busy=false,auto=0,SH=86;
  const rs=()=>{let r=Math.random()*TOTW;for(const s of SY){if((r-=s[1])<0)return s[0]}return SY[0][0]};
  function evalGrid(g){const wins=[];LINES.forEach((L,li)=>{const seq=L.map((r,c)=>g[c][r]),base=seq.find(s=>s!==WILD)||WILD;let k=0;for(const s of seq){if(s===base||s===WILD)k++;else break}
      if(k>=3){let p=PAY[base][k-3];let kw=0;for(const s of seq){if(s===WILD)kw++;else break}if(kw>=3&&PAY[WILD][kw-3]>p)p=PAY[WILD][kw-3],k=Math.max(k,kw);wins.push({li,k,p,sym:base})}});return wins}
  function fillStrip(strip,final,len){strip.innerHTML='';const syms=[];for(let i=0;i<len;i++)syms.push(rs());syms.push(...final);strip.innerHTML=syms.map(s=>`<div class="sym">${s}</div>`).join('');return syms.length}
  async function spin(){
    if(busy)return;const bet=Bet.take();if(!bet){auto=0;paintAuto();return}busy=true;$('#slSpin').disabled=true;
    $('#slLines').innerHTML='';$$('.sym.win',R).forEach(s=>s.classList.remove('win'));$('#slWin').textContent='GOOD LUCK';$('#slWin').className='sldisp';
    const lv=$('#slLever');lv.classList.add('pull');setTimeout(()=>lv.classList.remove('pull'),380);SFX.whoosh();
    grid=Array.from({length:5},()=>[rs(),rs(),rs()]);
    const hot=grid.slice(0,3).flat().filter(s=>s===WILD||s==='7️⃣').length>=3;
    const reels=$$('.reel',R),jobs=[];let ticking=setInterval(()=>SFX.reel(),70);
    reels.forEach((r,i)=>{const st=$('.strip',r),extra=i>=3&&hot?14:0,n=fillStrip(st,grid[i],18+i*5+extra);
      const D=RM?60:(900+i*260+(i>=3&&hot?1200:0));st.classList.add('blur');if(i>=3&&hot)setTimeout(()=>r.classList.add('tension'),900+2*260);
      const a=st.animate([{transform:'translateY(0)'},{transform:`translateY(${-(n-3)*SH-SH*.18}px)`,offset:.92},{transform:`translateY(${-(n-3)*SH}px)`}],{duration:D,easing:'cubic-bezier(.35,.05,.25,1)',fill:'forwards'});
      jobs.push(a.finished.then(()=>{st.classList.remove('blur');r.classList.remove('tension');SFX.stop();const c=center(r);FX.sparks(c.x,r.getBoundingClientRect().bottom-10,'#ffd76a',10)}))});
    await Promise.all(jobs);clearInterval(ticking);
    const wins=evalGrid(grid),lb=bet/10,pay=wins.reduce((a,w)=>a+w.p*lb,0);
    if(wins.length)await showWins(wins);
    const net=settle(bet,pay,$('.reels',R),{big:15});
    const d=$('#slWin');if(pay>0){d.className='sldisp win';countUp(d,pay)}else{d.textContent='NO WIN';d.className='sldisp'}
    busy=false;$('#slSpin').disabled=false;
    if(auto>0){auto--;paintAuto();if(auto>0&&!(pay/bet>=15))setTimeout(spin,pay?1300:500);else{auto=0;paintAuto()}}
  }
  function countUp(d,v){const t0=performance.now();(function f(t){const k=Math.min(1,(t-t0)/900);d.textContent='WIN '+fmt(v*k);if(k<1)requestAnimationFrame(f)})(t0)}
  async function showWins(wins){const svg=$('#slLines'),box=$('.reels',R).getBoundingClientRect(),w=box.width-20,h=box.height-20,cw=w/5;svg.setAttribute('viewBox',`0 0 ${w} ${h}`);
    for(const x of wins){const L=LINES[x.li],pts=L.map((r,c)=>`${c*cw+cw/2},${r*(h/3)+h/6}`).join(' ');svg.insertAdjacentHTML('beforeend',`<polyline points="${pts}" style="color:${LC[x.li]};stroke:${LC[x.li]}"/>`);
      for(let c=0;c<x.k;c++){const strip=$$('.strip',R)[c],n=strip.children.length;strip.children[n-3+L[c]].classList.add('win')}SFX.pop(600+x.li*40);await sleep(RM?0:260)}}
  function paintAuto(){$('#slAuto').textContent=auto?`Stop (${auto})`:'Auto ×10'}
  G.init=root=>{R=root;root.innerHTML=`<div class="ghead"><div><h2 class="gtxt">Golden Sevens</h2><p>Your bet is spread over 10 paylines. Three or more matching symbols from the left reel pay. 💎 is wild and stands in for anything. Three hot symbols on the first reels and the last two spin slower…</p></div></div>
    <div class="cab"><svg class="bulbs lights" aria-hidden="true"></svg><div class="cabtop gtxt">★ GOLDEN SEVENS ★</div>
      <div class="reels" style="--sh:${SH}px">${[0,1,2,3,4].map(()=>`<div class="reel"><div class="strip">${[rs(),rs(),rs()].map(s=>`<div class="sym">${s}</div>`).join('')}</div></div>`).join('')}<svg class="paylines" id="slLines"></svg></div>
      <div class="sldisp" id="slWin">PULL THE LEVER</div>
      <div class="row ctr"><button class="btn big pulse" id="slSpin">Spin</button><button class="btn ghost" id="slAuto">Auto ×10</button></div>
      <div class="lever" id="slLever"><div class="rod"><div class="knob"></div></div><div class="base"></div></div></div>
    <div class="paytab">${SY.map(s=>`<span>${s[0]} <b>${s[2].join(' / ')}</b></span>`).join('')}<span>×line bet for 3 / 4 / 5</span></div>`;
    $('#slSpin').onclick=spin;$('#slLever').onclick=spin;$('#slAuto').onclick=()=>{auto=auto?0:10;paintAuto();if(auto&&!busy)spin()};
    const fitB=()=>{const c=$('.cab',R),s=$('.lights',R),w=c.clientWidth-12,h=c.clientHeight-12;if(!w)return;s.setAttribute('viewBox',`0 0 ${w} ${h}`);s.innerHTML=['off','on','on on2','on on3'].map(k=>`<rect class="${k}" x="6" y="6" width="${w-12}" height="${h-12}" rx="24"/>`).join('')};
    G.fitB=fitB;addEventListener('resize',()=>{if(current===G)fitB()});
    if(matchMedia('(max-width:640px)').matches){SH=64;$('.reels',R).style.setProperty('--sh',SH+'px')}};
  G.enter=()=>{setTimeout(G.fitB,30);addEventListener('keydown',G.key)};
  G.leave=()=>{auto=0;paintAuto();removeEventListener('keydown',G.key)};
  G.key=e=>{if(e.code==='Space'&&!e.target.matches('input')){e.preventDefault();spin()}};
  return G})());

/* =============================================================== MONEY WHEEL (Big Six) */
reg((()=>{
  const KINDS={1:{n:24,pay:1,c:'#f1d488',t:'#3a2406'},2:{n:15,pay:2,c:'#3c8dff',t:'#fff'},5:{n:7,pay:5,c:'#a35cff',t:'#fff'},10:{n:4,pay:10,c:'#1fbf6a',t:'#fff'},20:{n:2,pay:20,c:'#ff8a1f',t:'#fff'},J:{n:1,pay:45,c:'#d4143a',t:'#fff'},L:{n:1,pay:45,c:'#111',t:'#e8c46a'}};
  const LAB={1:'$1',2:'$2',5:'$5',10:'$10',20:'$20',J:'★',L:'JK'};
  // spread segments evenly around the wheel
  const SEG=(()=>{const slots=[];Object.entries(KINDS).forEach(([k,v])=>{for(let i=0;i<v.n;i++)slots.push({k,pos:(i+.5)/v.n+Math.random()*.0001})});slots.sort((a,b)=>a.pos-b.pos||(KINDS[a.k].n-KINDS[b.k].n));
    const out=[];const by={};slots.forEach(s=>(by[s.k]=by[s.k]||[]).push(s));const order=[];for(let i=0;i<54;i++){let best=null,bv=1e9;for(const k in by){if(!by[k].length)continue;const v=by[k][0].pos*54-i;if(v<bv){bv=v;best=k}}order.push(best);by[best].shift()}return order})();
  const N=SEG.length,STEP=Math.PI*2/N;
  const G={id:'wheel',name:'Money Wheel',cat:'Slots & Wheels',newb:true,desc:'The Big Six. Bet a box, watch the clapper tick down.',edge:'≈92% RTP',betMode:'chip',tc:'rgba(160,110,20,.95)',
    art:`<div class="a-wheel" style="--c:#f1d488 0 30deg,#3c8dff 30deg 55deg,#f1d488 55deg 85deg,#a35cff 85deg 105deg,#f1d488 105deg 135deg,#1fbf6a 135deg 155deg,#f1d488 155deg 185deg,#3c8dff 185deg 210deg,#ff8a1f 210deg 230deg,#f1d488 230deg 260deg,#d4143a 260deg 275deg,#3c8dff 275deg 300deg,#f1d488 300deg 330deg,#a35cff 330deg 345deg,#111 345deg 360deg"></div>`};
  let R,cv,cx,bets={},busy=false,ang=0,sp=null,raf=0,flap=0,lastSeg=-1,hist=[];
  function paintBets(){$$('.mwb',R).forEach(b=>{const v=bets[b.dataset.k]||0;$('.st',b).innerHTML=v?chipStack(v):'';b.classList.toggle('has',!!v)});const t=Object.values(bets).reduce((a,b)=>a+b,0);$('#mwTot').textContent=t?`On the table: ${fmt(t)}`:'Tap a box to bet'}
  function spin(){if(busy)return;const t=Object.values(bets).reduce((a,b)=>a+b,0);if(!t){banner($('#mwM'),'Place a bet on a box first.','push');return}
    busy=true;$('#mwSpin').disabled=true;banner($('#mwM'),'');const idx=rnd(N);
    const target=-Math.PI/2-(idx*STEP+STEP/2)+(Math.random()-.5)*STEP*.6,turns=Math.PI*2*(5+rnd(2));let end=target;while(end<ang+turns)end+=Math.PI*2;
    sp={t0:performance.now(),D:RM?400:7000,a0:ang,a1:end,idx}}
  function done(idx){const k=SEG[idx];let tot=0,ret=0;for(const[b,v]of Object.entries(bets)){tot+=v;if(b===k)ret+=v*(KINDS[k].pay+1)}
    hist.unshift(k);hist=hist.slice(0,12);$('#mwHist').innerHTML=hist.map(x=>`<span class="hs2" style="background:${KINDS[x].c};color:${KINDS[x].t}">${LAB[x]}</span>`).join('');
    $$('.mwb',R).forEach(b=>b.classList.toggle('lit',b.dataset.k===k));
    const net=settle(tot,ret,cv,{big:15});banner($('#mwM'),`${LAB[k]} pays ${KINDS[k].pay} to 1 — `+(net>0?`+${fmt(net)}`:`−${fmt(-net)}`),net>0?'win':'lose');
    setTimeout(()=>{bets={};paintBets();busy=false;$('#mwSpin').disabled=false;$$('.mwb.lit',R).forEach(b=>b.classList.remove('lit'))},2400)}
  function frame(now){raf=requestAnimationFrame(frame);
    if(sp){const u=Math.min(1,(now-sp.t0)/sp.D),e=1-Math.pow(1-u,4);ang=sp.a0+(sp.a1-sp.a0)*e;if(u>=1){const i=sp.idx;sp=null;done(i)}}
    const seg=Math.floor(((((-Math.PI/2-ang)%(Math.PI*2))+Math.PI*2)%(Math.PI*2))/STEP);if(seg!==lastSeg){if(lastSeg>=0&&(busy||sp)){flap=1;SFX.tick(.8+Math.random()*.4)}lastSeg=seg}flap*=.82;
    const S=cv.clientWidth;if(!S)return;const d=Math.min(devicePixelRatio||1,2);if(cv.width!==Math.round(S*d)){cv.width=cv.height=Math.round(S*d);cx.setTransform(d,0,0,d,0,0)}
    const c=S/2,Rr=S/2-14;cx.clearRect(0,0,S,S);
    cx.save();cx.translate(c,c);cx.rotate(ang);
    let gr=cx.createRadialGradient(0,0,Rr*.9,0,0,Rr+10);gr.addColorStop(0,'#3a2610');gr.addColorStop(1,'#120a04');cx.fillStyle=gr;cx.beginPath();cx.arc(0,0,Rr+8,0,7);cx.fill();
    for(let i=0;i<N;i++){const k=SEG[i],a0=i*STEP,a1=a0+STEP;cx.fillStyle=KINDS[k].c;cx.beginPath();cx.moveTo(0,0);cx.arc(0,0,Rr,a0,a1);cx.closePath();cx.fill();cx.strokeStyle='rgba(60,38,10,.9)';cx.lineWidth=1.5;cx.stroke();
      cx.save();cx.rotate(a0+STEP/2);cx.fillStyle=KINDS[k].t;cx.font=`900 ${Rr*.07}px Cinzel,serif`;cx.textAlign='right';cx.textBaseline='middle';cx.fillText(LAB[k],Rr*.93,0);cx.restore();
      cx.fillStyle='#fff3c4';cx.beginPath();cx.arc(Math.cos(a0)*(Rr+2),Math.sin(a0)*(Rr+2),3,0,7);cx.fill()}
    gr=cx.createRadialGradient(-Rr*.05,-Rr*.05,0,0,0,Rr*.24);gr.addColorStop(0,'#fff7d6');gr.addColorStop(.5,'#e8c46a');gr.addColorStop(1,'#7a5418');cx.fillStyle=gr;cx.beginPath();cx.arc(0,0,Rr*.22,0,7);cx.fill();
    cx.fillStyle='#3a2406';cx.font=`900 ${Rr*.1}px Cinzel,serif`;cx.textAlign='center';cx.textBaseline='middle';cx.fillText('JK',0,2);cx.restore();
    cx.save();cx.translate(c,10);cx.rotate((flap*.5)*(Math.random()>.5?1:1));cx.fillStyle='#d4143a';cx.strokeStyle='#fff3c4';cx.lineWidth=2;cx.beginPath();cx.moveTo(-12,-6);cx.lineTo(12,-6);cx.lineTo(0,30);cx.closePath();cx.fill();cx.stroke();cx.restore()}
  G.init=root=>{R=root;root.innerHTML=`<div class="ghead"><div><h2 class="gtxt">Money Wheel</h2><p>The classic Big Six wheel. Pick a chip size, then tap the boxes to bet on where the clapper stops. Bigger prizes have fewer slots: $1 pays 1:1, ★ and JK pay 45:1.</p></div></div>
    <div class="felt" style="background:radial-gradient(ellipse at 50% 30%,#3a2a10,#140d05 70%)"><div class="mwg"><div class="mwwrap"><canvas id="mwC"></canvas></div>
      <div><div class="mwbets">${Object.entries(KINDS).map(([k,v])=>`<button class="mwb" data-k="${k}" style="--c:${v.c};--t:${v.t}"><b>${LAB[k]}</b><small>${v.pay}:1 · ${v.n}/54</small><div class="st"></div></button>`).join('')}</div>
      <div class="row" style="margin-top:14px"><button class="btn big pulse" id="mwSpin">Spin</button><button class="btn ghost sm" id="mwClr">Clear</button></div><div class="lbl" id="mwTot" style="margin-top:10px"></div>
      <div class="lbl" style="margin-top:14px">History</div><div class="hist" id="mwHist" style="justify-content:flex-start"></div></div></div>
      <div class="banner" id="mwM"></div></div>`;
    cv=$('#mwC');cx=cv.getContext('2d');
    $('.mwbets',R).onclick=e=>{const b=e.target.closest('.mwb');if(!b||busy)return;const u=Bet.take();if(!u)return;SFX.chip();bets[b.dataset.k]=(bets[b.dataset.k]||0)+u;paintBets()};
    $('#mwClr').onclick=()=>{if(busy)return;const t=Object.values(bets).reduce((a,b)=>a+b,0);if(t)Bank.set(Bank.bal+t);bets={};paintBets()};
    $('#mwSpin').onclick=spin;cv.onclick=spin;paintBets()};
  G.enter=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(frame)};
  G.leave=()=>{if(!busy){cancelAnimationFrame(raf);const t=Object.values(bets).reduce((a,b)=>a+b,0);if(t)Bank.set(Bank.bal+t);bets={};paintBets()}};
  return G})());

/* =============================================================== KENO */
reg((()=>{
  const PAYS={1:[0,3.8],2:[0,1.8,4.9],3:[0,0,2.7,48],4:[0,0,1.7,9.7,97],5:[0,0,1.4,3.9,14,378],6:[0,0,0,2.9,8.7,175,690],7:[0,0,0,1.9,6.8,29,388,776],8:[0,0,0,1.9,3.9,11,65,388,873],9:[0,0,0,1.9,2.4,4.9,15,97,485,970],10:[0,0,0,1.6,1.9,3.9,6.8,25,97,485,970]};
  const G={id:'keno',name:'Keno',cat:'Slots & Wheels',newb:true,desc:'Pick up to 10 numbers. Ten balls drop. Hit big.',edge:'≈96% RTP',tc:'rgba(20,90,140,.95)',
    art:`<div class="a-balls"><i style="--b:#ffd76a;--d:0">7</i><i style="--b:#ff6b9a;--d:1">19</i><i style="--b:#57c7ff;--d:2">23</i><i style="--b:#5cff9d;--d:3">40</i></div>`};
  let R,picks=new Set(),busy=false;
  function paint(){const k=picks.size,p=PAYS[k]||[];$('#knPay').innerHTML=k?p.map((m,h)=>m?`<span class="kp" data-h="${h}"><small>${h} hit${h>1?'s':''}</small><b>${fmtx(m)}</b></span>`:'').join(''):'<span class="kp"><small>Pick 1 to 10 numbers</small><b>—</b></span>';
    $('#knCount').textContent=`${k}/10 picked`;$$('.kc',R).forEach(c=>c.classList.toggle('pk',picks.has(+c.dataset.n)))}
  async function play(){if(busy)return;if(!picks.size){banner($('#knM'),'Pick at least one number.','push');return}const bet=Bet.take();if(!bet)return;busy=true;$('#knGo').disabled=true;banner($('#knM'),'');
    $$('.kc',R).forEach(c=>c.classList.remove('hit','miss','drawn'));$('#knBalls').innerHTML='';$$('.kp',R).forEach(x=>x.classList.remove('on'));
    const pool=shuffle(Array.from({length:40},(_,i)=>i+1)).slice(0,10);let hits=0;
    for(const n of pool){const hit=picks.has(n);if(hit)hits++;
      const b=el('i','kb'+(hit?' h':''),n);$('#knBalls').appendChild(b);const c=$(`.kc[data-n="${n}"]`,R);c.classList.add(hit?'hit':'drawn');
      if(hit){SFX.gem();const p=center(c);FX.burst(p.x,p.y,{n:14,type:'gem',colors:['#5cff9d','#fff3c4','#57c7ff'],speed:6,life:40})}else SFX.pop(380+n*6);
      $$('.kp',R).forEach(x=>x.classList.toggle('on',+x.dataset.h===hits));await sleep(RM?0:330)}
    const m=(PAYS[picks.size]||[])[hits]||0,pay=bet*m;const net=settle(bet,pay,$('#knGrid'),{big:20});
    banner($('#knM'),`${hits} hit${hits===1?'':'s'} of ${picks.size} — `+(m?`${fmtx(m)} · ${net>=0?'+':'−'}${fmt(Math.abs(net))}`:'no prize'),net>0?'win':net===0?'push':'lose');busy=false;$('#knGo').disabled=false}
  G.init=root=>{R=root;root.innerHTML=`<div class="ghead"><div><h2 class="gtxt">Keno</h2><p>Choose up to 10 numbers from 1 to 40. Ten balls are drawn. The more of your numbers come up, the bigger the multiplier.</p></div></div>
    <div class="felt navy"><div class="kng"><div><div class="kgrid" id="knGrid">${Array.from({length:40},(_,i)=>`<button class="kc" data-n="${i+1}">${i+1}</button>`).join('')}</div>
      <div class="row" style="margin-top:12px"><button class="btn big pulse" id="knGo">Draw</button><button class="btn ghost sm" id="knQuick">Quick pick</button><button class="btn ghost sm" id="knClr">Clear</button><span class="lbl" id="knCount"></span></div></div>
      <div><div class="lbl">Drawn balls</div><div class="kballs" id="knBalls"></div><div class="lbl" style="margin-top:12px">Payouts</div><div class="kpay" id="knPay"></div></div></div>
      <div class="banner" id="knM"></div></div>`;
    $('#knGrid').onclick=e=>{const c=e.target.closest('.kc');if(!c||busy)return;const n=+c.dataset.n;if(picks.has(n))picks.delete(n);else if(picks.size<10)picks.add(n);else{toast('Max 10 numbers');return}SFX.click();paint()};
    $('#knQuick').onclick=()=>{if(busy)return;picks=new Set(shuffle(Array.from({length:40},(_,i)=>i+1)).slice(0,Math.max(5,picks.size||8)));SFX.chip();paint()};
    $('#knClr').onclick=()=>{if(busy)return;picks.clear();paint()};$('#knGo').onclick=play;paint()};
  return G})());

/* =============================================================== SCRATCH CARDS */
reg((()=>{
  const PR=[['💎',100,.001],['👑',25,.006],['🍀',10,.02],['🔔',5,.04],['🍒',2,.08],['⭐',1,.12]];
  const G={id:'scratch',name:'Scratch Cards',cat:'Slots & Wheels',newb:true,desc:'Scratch the foil. Match three symbols to win up to 100×.',edge:'≈93% RTP',tc:'rgba(70,70,70,.95)',
    art:`<div class="a-scratch">SCRATCH!</div>`};
  let R,cv,cx,ticket=null,bet=0,scratching=false,done=true,last=0,lp=null;
  function makeTicket(){let r=Math.random(),win=null;for(const p of PR){if((r-=p[2])<0){win=p;break}}
    const cells=[];const syms=PR.map(p=>p[0]);
    if(win){cells.push(win[0],win[0],win[0])}
    const cnt={};cells.forEach(s=>cnt[s]=(cnt[s]||0)+1);
    while(cells.length<9){const s=pick(syms);if((cnt[s]||0)>=2||(win&&s===win[0]))continue;cnt[s]=(cnt[s]||0)+1;cells.push(s)}
    return{cells:shuffle(cells),win}}
  function paintFoil(){const W=cv.clientWidth,H=cv.clientHeight,d=Math.min(devicePixelRatio||1,2);cv.width=W*d;cv.height=H*d;cx.setTransform(d,0,0,d,0,0);
    cx.globalCompositeOperation='source-over';const g=cx.createLinearGradient(0,0,W,H);g.addColorStop(0,'#9b9b9b');g.addColorStop(.3,'#e9e9e9');g.addColorStop(.5,'#a8a8a8');g.addColorStop(.7,'#dedede');g.addColorStop(1,'#8f8f8f');cx.fillStyle=g;cx.fillRect(0,0,W,H);
    for(let i=0;i<900;i++){cx.fillStyle=`rgba(${Math.random()>.5?255:60},${Math.random()>.5?255:60},${Math.random()>.5?255:60},.08)`;cx.fillRect(Math.random()*W,Math.random()*H,2,2)}
    cx.fillStyle='rgba(60,60,60,.55)';cx.font=`900 ${Math.max(16,W*.06)}px Cinzel,serif`;cx.textAlign='center';cx.textBaseline='middle';
    for(let r=0;r<3;r++)for(let c=0;c<3;c++){cx.fillText('★',W*(c+.5)/3,H*(r+.5)/3)}
    cx.fillStyle='rgba(40,40,40,.7)';cx.font=`900 ${Math.max(14,W*.045)}px Cinzel,serif`;cx.fillText('SCRATCH HERE',W/2,H/2)}
  function scratch(x,y){const w=Math.max(16,cv.clientWidth*.045);cx.globalCompositeOperation='destination-out';cx.lineCap='round';cx.lineWidth=w*2;cx.beginPath();if(lp){cx.moveTo(lp[0],lp[1]);cx.lineTo(x,y);cx.stroke()}else{cx.arc(x,y,w,0,7);cx.fill()}lp=[x,y];const n=performance.now();if(n-last>45){last=n;SFX.card()}}
  function cleared(){const W=cv.width,H=cv.height,d=cx.getImageData(0,0,W,H).data;let c=0,t=0;for(let i=3;i<d.length;i+=4*37){t++;if(d[i]<40)c++}return c/t}
  function buy(){if(!done)return;bet=Bet.take();if(!bet)return;done=false;ticket=makeTicket();$('#scCells').innerHTML=ticket.cells.map(s=>`<div class="scc">${s}</div>`).join('');
    paintFoil();cv.style.opacity=1;cv.style.pointerEvents='auto';$('#scBuy').hidden=true;$('#scAll').hidden=false;banner($('#scM'),'Scratch all nine squares. Three of a kind wins.');SFX.chip();
    const t=$('.sct',R);t.classList.remove('dealt');void t.offsetWidth;t.classList.add('dealt')}
  function reveal(){if(done)return;done=true;cv.style.transition='opacity .6s';cv.style.opacity=0;cv.style.pointerEvents='none';setTimeout(()=>cv.style.transition='',700);
    const w=ticket.win,pay=w?bet*w[1]:0;
    if(w)$$('.scc',R).forEach(c=>{if(c.textContent===w[0])c.classList.add('win')});
    const net=settle(bet,pay,$('#scCells'),{big:10});banner($('#scM'),w?`Three ${w[0]}! ${fmtx(w[1])} · ${net>=0?'+':'−'}${fmt(Math.abs(net))}`:'No match this time.',w?(net>0?'win':'push'):'lose');
    $('#scBuy').hidden=false;$('#scAll').hidden=true;$('#scBuy').textContent='Buy another ticket'}
  G.init=root=>{R=root;root.innerHTML=`<div class="ghead"><div><h2 class="gtxt">Scratch Cards</h2><p>Each ticket costs your bet. Scratch the silver foil with your mouse or finger. Find three matching symbols to win the prize printed on the ticket.</p></div></div>
    <div class="felt" style="background:radial-gradient(ellipse at 50% 30%,#3a1a2a,#140812 70%)">
      <div class="sct dealt"><div class="sch"><b class="gtxt">LUCKY SEVENS</b><span>Match 3 to win</span></div>
        <div class="scwrap"><div class="sccells" id="scCells">${'<div class="scc">?</div>'.repeat(9)}</div><canvas id="scC"></canvas></div>
        <div class="scprize">${PR.map(p=>`<span>${p[0]}${p[0]}${p[0]} <b>${p[1]}×</b></span>`).join('')}</div></div>
      <div class="banner" id="scM">Buy a ticket to start.</div>
      <div class="row ctr"><button class="btn big pulse" id="scBuy">Buy ticket</button><button class="btn ghost" id="scAll" hidden>Reveal all</button></div></div>`;
    cv=$('#scC');cx=cv.getContext('2d',{willReadFrequently:true});cv.style.pointerEvents='none';cv.style.opacity=0;
    const pos=e=>{const r=cv.getBoundingClientRect();return[e.clientX-r.left,e.clientY-r.top]};
    cv.onpointerdown=e=>{if(done)return;scratching=true;lp=null;cv.setPointerCapture(e.pointerId);scratch(...pos(e))};
    cv.onpointermove=e=>{if(!scratching||done)return;const ev=e.getCoalescedEvents?e.getCoalescedEvents():[e];for(const x of ev)scratch(...pos(x))};
    cv.onpointerup=cv.onpointercancel=()=>{scratching=false;if(!done&&cleared()>.62)reveal()};
    $('#scBuy').onclick=buy;$('#scAll').onclick=reveal};
  return G})());
