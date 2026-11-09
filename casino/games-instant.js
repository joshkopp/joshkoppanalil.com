/* Instant games: Crash, Dice, Coin Flip, Plinko, Mines, Tower, Horse Race */
'use strict';

/* =============================================================== CRASH */
reg((()=>{
  const G={id:'crash',name:'Rocket Crash',cat:'Instant Games',featured:true,desc:'The multiplier climbs until the rocket blows. Cash out before it does.',edge:'99% RTP',tc:'rgba(40,20,90,.95)',
    art:`<svg class="a-chart" viewBox="0 0 160 90"><path d="M4 86 Q70 84 110 50 T156 6" fill="none" stroke="#5cff9d" stroke-width="4" stroke-linecap="round"/></svg><span class="a-rocket" style="position:absolute;right:22%;top:18%;font-size:34px">🚀</span>`};
  const NAMES=['ace_high','lucky_lou','vegasvic','nightowl','queenbee','dicey','high_roller','moonboy','sevens','jackpot_jo','rivergirl','tilt'];
  let R,cv,cx,state='idle',bet=0,cp=1,m=1,t0=0,raf=0,cashed=false,hist=store.get('backroom-chist',[]),lastStep=0,crashT=0,bots=[],trail=[];
  const growth=t=>Math.exp(t*.14); // t seconds
  const tOf=x=>Math.log(x)/.14;
  function paintHist(){$('#crH').innerHTML=hist.map(x=>`<span style="background:${x<2?'rgba(255,79,109,.18)':x<10?'rgba(92,255,157,.16)':'rgba(232,196,106,.25)'};color:${x<2?'var(--lose)':x<10?'var(--win)':'var(--gold)'}">${x.toFixed(2)}×</span>`).join('')}
  function paintBots(){$('#crBots').innerHTML=bots.map(b=>`<div class="bot ${b.out?'out':''} ${b.bust?'bust':''}"><span>${b.n}</span><b>${b.out?b.at.toFixed(2)+'×':b.bust?'—':fmt(b.bet)}</b></div>`).join('')}
  function btn(){const b=$('#crGo');if(state==='run'&&!cashed){b.textContent=`Cash out ${fmt(bet*m)}`;b.className='btn big grn';}else if(state==='run'){b.textContent='Waiting…';b.className='btn big ghost'}else{b.textContent='Launch';b.className='btn big pulse'}b.disabled=state==='run'&&cashed}
  function launch(){if(state==='run')return;bet=Bet.take();if(!bet)return;
    const U=Math.random();cp=Math.max(1,Math.floor(99/(1-U))/100);
    state='run';cashed=false;m=1;t0=performance.now();lastStep=0;trail=[];banner($('#crM'),'');
    bots=shuffle(NAMES.slice()).slice(0,7).map(n=>({n,bet:[10,25,50,100,250,500,1000][rnd(7)],at:Math.max(1.05,Math.min(25,.99/(1-Math.random()*.95))),out:false,bust:false}));paintBots();
    $('.crwrap',R).classList.remove('boom');SFX.whoosh();btn();if(!raf)raf=requestAnimationFrame(frame)}
  function cash(auto){if(state!=='run'||cashed)return;cashed=true;const pay=Math.floor(bet*m*100)/100;
    const r=cv.getBoundingClientRect(),tip=tipXY();settle(bet,pay,{x:r.left+tip[0],y:r.top+tip[1]},{big:10});
    banner($('#crM'),`${auto?'Auto ':''}cashed out at ${m.toFixed(2)}× · +${fmt(pay-bet)}`,'win');btn()}
  function crash(){state='crashed';crashT=performance.now();m=cp;hist.unshift(cp);hist=hist.slice(0,14);store.set('backroom-chist',hist);paintHist();
    bots.forEach(b=>{if(!b.out)b.bust=true});paintBots();
    SFX.boom();const r=cv.getBoundingClientRect(),tip=tipXY();FX.burst(r.left+tip[0],r.top+tip[1],{n:70,type:'spark',colors:['#ff4f6d','#ff9f43','#ffd76a','#fff'],speed:12,g:.12,life:50,size:4,lift:0});
    $('.crwrap',R).classList.add('boom');
    if(!cashed){Stats.record(bet,0);banner($('#crM'),`Crashed at ${cp.toFixed(2)}× — −${fmt(bet)}`,'lose')}
    setTimeout(()=>{if(state==='crashed'){state='idle';btn()}},1400);btn()}
  let geo={};
  function tipXY(){return[geo.x(geo.t),geo.y(m)]}
  function frame(now){raf=requestAnimationFrame(frame);
    const S=cv.clientWidth,H=cv.clientHeight;if(!S)return;const d=Math.min(devicePixelRatio||1,2);if(cv.width!==Math.round(S*d)||cv.height!==Math.round(H*d)){cv.width=Math.round(S*d);cv.height=Math.round(H*d);cx.setTransform(d,0,0,d,0,0)}
    let t=0;if(state==='run'){t=(now-t0)/1000;m=growth(t);if(m>=cp){m=cp;t=tOf(cp);crash()}else{
        const step=Math.floor(m*10);if(step!==lastStep){lastStep=step;SFX.tick(.6+Math.min(1.4,m/8))}
        const au=parseFloat($('#crAuto').value);if(!cashed&&au>=1.01&&m>=au){m=au;cash(true)}
        let ch=false;bots.forEach(b=>{if(!b.out&&!b.bust&&m>=b.at){b.out=true;ch=true}});if(ch)paintBots();
        if(!cashed)$('#crGo').textContent=`Cash out ${fmt(bet*m)}`}}
    else if(state==='crashed'||state==='idle'){t=tOf(Math.max(1,m))}
    const tMax=Math.max(8,t*1.15),mMax=Math.max(2,1+(m-1)*1.2),pl=46,pb=30,pt=18,pr=20;
    geo={t,x:tt=>pl+(S-pl-pr)*(tt/tMax),y:mm=>H-pb-(H-pb-pt)*((mm-1)/(mMax-1))};
    cx.clearRect(0,0,S,H);
    // grid
    cx.strokeStyle='rgba(232,196,106,.08)';cx.lineWidth=1;cx.fillStyle='rgba(232,196,106,.45)';cx.font='600 11px DM Sans';cx.textAlign='right';cx.textBaseline='middle';
    const stepM=mMax<=3?.5:mMax<=6?1:mMax<=15?2:mMax<=40?5:mMax<=100?20:Math.pow(10,Math.floor(Math.log10(mMax)));
    for(const v of [1,...Array.from({length:Math.floor(mMax/stepM)},(_,i)=>(i+1)*stepM).filter(v=>v>1)]){const y=geo.y(v);cx.beginPath();cx.moveTo(pl,y);cx.lineTo(S-pr,y);cx.stroke();cx.fillText(v.toFixed(v<10&&stepM<1?1:0)+'×',pl-6,y)}
    cx.textAlign='center';const stepT=tMax<=12?2:tMax<=30?5:10;for(let v=0;v<=tMax;v+=stepT){const x=geo.x(v);cx.fillText(v+'s',x,H-pb+14)}
    if(state==='idle'&&!hist.length&&!bet){drawCenter(S,H,'Place a bet and launch');return}
    // curve
    const N=80,pts=[];for(let i=0;i<=N;i++){const tt=t*i/N;pts.push([geo.x(tt),geo.y(growth(tt))])}
    const col=state==='crashed'?'#ff4f6d':cashed?'#e8c46a':'#5cff9d';
    const gr=cx.createLinearGradient(0,H,0,0);gr.addColorStop(0,'rgba(0,0,0,0)');gr.addColorStop(1,state==='crashed'?'rgba(255,79,109,.28)':'rgba(92,255,157,.25)');
    cx.beginPath();cx.moveTo(pts[0][0],H-pb);pts.forEach(p=>cx.lineTo(p[0],p[1]));cx.lineTo(pts[N][0],H-pb);cx.closePath();cx.fillStyle=gr;cx.fill();
    cx.beginPath();pts.forEach((p,i)=>i?cx.lineTo(p[0],p[1]):cx.moveTo(p[0],p[1]));cx.strokeStyle=col;cx.lineWidth=4;cx.lineCap='round';cx.shadowColor=col;cx.shadowBlur=16;cx.stroke();cx.shadowBlur=0;
    // rocket
    const [x,y]=pts[N],[px,py]=pts[Math.max(0,N-3)],ang=Math.atan2(y-py,x-px);
    if(state==='run'){trail.push({x,y,l:1});if(trail.length>40)trail.shift()}
    trail.forEach(p=>{p.l-=.025;cx.fillStyle=`rgba(255,${150+rnd(80)},60,${Math.max(0,p.l)*.5})`;cx.beginPath();cx.arc(p.x+(Math.random()-.5)*6,p.y+(Math.random()-.5)*6,3+p.l*5,0,7);cx.fill()});
    if(state!=='crashed'){cx.save();cx.translate(x,y);cx.rotate(ang+Math.PI/4);cx.font='30px serif';cx.textAlign='center';cx.textBaseline='middle';cx.fillText('🚀',0,0);cx.restore()}
    else{const k=Math.min(1,(now-crashT)/500);cx.save();cx.globalAlpha=1-k;cx.translate(x,y);cx.scale(1+k*2,1+k*2);cx.font='34px serif';cx.textAlign='center';cx.textBaseline='middle';cx.fillText('💥',0,0);cx.restore()}
    // big multiplier
    cx.textAlign='center';cx.textBaseline='middle';cx.font=`900 ${Math.min(76,S*.12)}px Cinzel,serif`;cx.fillStyle=col;cx.shadowColor=col;cx.shadowBlur=24;cx.fillText(m.toFixed(2)+'×',S/2,H*.38);cx.shadowBlur=0;
    if(state==='crashed'){cx.font='800 15px DM Sans';cx.fillStyle='#ff9aac';cx.fillText('CRASHED',S/2,H*.38+Math.min(50,S*.08))}}
  function drawCenter(S,H,t){cx.textAlign='center';cx.font=`900 ${Math.min(40,S*.07)}px Cinzel,serif`;cx.fillStyle='rgba(232,196,106,.7)';cx.fillText('1.00×',S/2,H*.4);cx.font='600 14px DM Sans';cx.fillStyle='rgba(201,185,143,.7)';cx.fillText(t,S/2,H*.4+34)}
  G.init=root=>{R=root;root.innerHTML=`<div class="ghead"><div><h2 class="gtxt">Rocket Crash</h2><p>Launch the rocket and watch the multiplier climb. Cash out any time to lock in your bet × the multiplier. If it crashes first, the bet is gone. Set an auto cash-out to play it safe.</p></div></div>
    <div class="felt dark"><div class="crg"><div class="crwrap"><canvas id="crC"></canvas></div>
      <div class="crside"><div class="lbl">Live table</div><div class="bots" id="crBots"></div></div></div>
      <div class="row ctr" style="margin-top:14px"><button class="btn big pulse" id="crGo">Launch</button>
        <label class="ctlbox" style="display:flex;gap:10px;align-items:center;padding:8px 12px"><span class="lbl">Auto cash-out</span><input class="num" id="crAuto" type="number" step="0.1" min="0" value="2.00" style="width:84px"></label></div>
      <div class="banner" id="crM"></div><div class="hist" id="crH"></div></div>`;
    cv=$('#crC');cx=cv.getContext('2d');paintHist();paintBots();
    $('#crGo').onclick=()=>state==='run'?cash(false):launch();btn()};
  G.enter=()=>{if(!raf)raf=requestAnimationFrame(frame);addEventListener('keydown',G.key)};
  G.leave=()=>{removeEventListener('keydown',G.key);if(state==='run'&&!cashed)cash(false);if(state!=='run'){cancelAnimationFrame(raf);raf=0}};
  G.key=e=>{if(e.code==='Space'&&!e.target.matches('input')){e.preventDefault();$('#crGo').click()}};
  return G})());

/* =============================================================== DICE */
reg((()=>{
  const G={id:'dice',name:'Dice',cat:'Instant Games',desc:'Slide your target, roll over or under. You set the odds.',edge:'99% RTP',tc:'rgba(120,20,30,.95)',
    art:`<div class="a-dice"><span>⚄</span><span>⚂</span></div>`};
  let R,mode='under',busy=false,last=50,hist=[];
  const T=()=>+$('#dcT').value,chance=()=>mode==='under'?T():100-T(),mult=()=>99/chance();
  function paint(){const t=T(),r=$('#dcT');setRange(r);$('#dcTv').textContent=t.toFixed(0);$('#dcCh').textContent=chance().toFixed(0)+'%';$('#dcMu').textContent=mult().toFixed(4).replace(/0+$/,'').replace(/\.$/,'')+'×';
    $('#dcPay').textContent=fmt(Bet.v*mult());const tr=$('.dctrack',R);tr.style.setProperty('--t',t+'%');tr.classList.toggle('over',mode==='over');
    $$('#dcMode button').forEach(b=>b.classList.toggle('on',b.dataset.m===mode))}
  async function roll(){if(busy)return;const bet=Bet.take();if(!bet)return;busy=true;$('#dcGo').disabled=true;const t=T();
    let r=rnd(10000)/100;
    if(LUCKY&&Math.random()<.9)r=(mode==='under'?Math.floor(Math.random()*t*100):Math.floor(Math.random()*(9999-t*100))+t*100+1)/100;
    const win=mode==='under'?r<t:r>t;SFX.roll();
    const mk=$('#dcMk'),big=$('#dcBig'),D=RM?1:900,t0=performance.now(),from=last;
    mk.classList.remove('w','l');big.classList.remove('w','l');
    await new Promise(res=>{(function f(n){const k=Math.min(1,(n-t0)/D),e=1-Math.pow(1-k,3);const v=k<1?(from+(r-from)*e+(1-k)*(Math.random()-.5)*30):r;
      const c=clamp(v,0,99.99);mk.style.left=c+'%';big.textContent=c.toFixed(2);if(k<1)requestAnimationFrame(f);else res()})(t0)});
    last=r;mk.classList.add(win?'w':'l');big.classList.add(win?'w':'l');
    const pay=win?bet*mult():0;const net=settle(bet,pay,mk,{big:20});
    hist.unshift([r,win]);hist=hist.slice(0,12);$('#dcH').innerHTML=hist.map(([v,w])=>`<span style="background:${w?'rgba(92,255,157,.16)':'rgba(255,79,109,.16)'};color:${w?'var(--win)':'var(--lose)'}">${v.toFixed(2)}</span>`).join('');
    banner($('#dcM'),win?`Rolled ${r.toFixed(2)} · +${fmt(net)}`:`Rolled ${r.toFixed(2)} · −${fmt(bet)}`,win?'win':'lose');
    if(!win){const tr=$('.dctrack',R);tr.classList.remove('shake');void tr.offsetWidth;tr.classList.add('shake')}
    busy=false;$('#dcGo').disabled=false}
  G.init=root=>{R=root;root.innerHTML=`<div class="ghead"><div><h2 class="gtxt">Dice</h2><p>A number from 0.00 to 99.99 is rolled. Drag the slider to set your target, then choose roll under or over it. Lower chance pays more: 99 ÷ win chance.</p></div></div>
    <div class="felt red"><div class="dcbig" id="dcBig">50.00</div>
      <div class="dctrack"><div class="dcz"></div><input type="range" id="dcT" min="2" max="98" value="50" aria-label="Target"><div class="dcmk" id="dcMk" style="left:50%"><span></span></div>
        <div class="dcticks"><span>0</span><span>25</span><span>50</span><span>75</span><span>100</span></div></div>
      <div class="ctl"><div class="ctlbox"><div class="lbl">Mode</div><div class="seg" id="dcMode"><button data-m="under">Roll under</button><button data-m="over">Roll over</button></div></div>
        <div class="ctlbox"><div class="lbl">Target <b id="dcTv"></b></div><div class="lbl">Win chance <b id="dcCh"></b></div></div>
        <div class="ctlbox"><div class="lbl">Multiplier <b id="dcMu"></b></div><div class="lbl">Payout <b id="dcPay"></b></div></div></div>
      <div class="row ctr" style="margin-top:16px"><button class="btn big pulse" id="dcGo">Roll</button></div>
      <div class="banner" id="dcM"></div><div class="hist" id="dcH"></div></div>`;
    $('#dcT').oninput=()=>{paint();SFX.tick(.5+T()/100)};$('#dcMode').onclick=e=>{const b=e.target.closest('button');if(!b)return;mode=b.dataset.m;SFX.click();paint()};
    $('#dcGo').onclick=roll;$('#bet').addEventListener('change',paint);$('#rack').addEventListener('click',()=>setTimeout(paint));paint()};
  G.enter=()=>{paint();addEventListener('keydown',G.key)};G.leave=()=>removeEventListener('keydown',G.key);
  G.key=e=>{if(e.code==='Space'&&!e.target.matches('input')){e.preventDefault();roll()}};
  return G})());

/* =============================================================== COIN FLIP */
reg((()=>{
  const G={id:'coin',name:'Coin Flip',cat:'Instant Games',desc:'Heads or tails, 1.96×. Ride the streak.',edge:'98% RTP',tc:'rgba(130,90,20,.95)',art:`<div class="a-coin">JK</div>`};
  let R,busy=false,rot=0,streak=0,best=0,hist=[];
  async function flip(side){if(busy)return;const bet=Bet.take();if(!bet)return;busy=true;$$('.cfb',R).forEach(b=>b.disabled=true);banner($('#cfM'),'');
    const res=Math.random()<.5?'H':'T',coin=$('#cfCoin'),turns=6+rnd(3);
    const target=rot+turns*360+((res==='H'?0:180)-(((rot%360)+360)%360)+360)%360;SFX.whoosh();
    const D=RM?50:1700;
    coin.animate([{transform:`translateY(0) rotateX(${rot}deg) scale(1)`},{transform:`translateY(-180px) rotateX(${(rot+target)/2}deg) scale(1.25)`,offset:.45},{transform:`translateY(0) rotateX(${target}deg) scale(1)`}],{duration:D,easing:'cubic-bezier(.3,.6,.4,1)',fill:'forwards'});
    $('.cfshadow',R).animate([{transform:'scale(1)',opacity:.6},{transform:'scale(.45)',opacity:.2,offset:.45},{transform:'scale(1)',opacity:.6}],{duration:D,easing:'cubic-bezier(.3,.6,.4,1)'});
    await sleep(D);rot=target;SFX.coin();
    const win=res===side,pay=win?bet*1.96:0;if(win){streak++;best=Math.max(best,streak)}else streak=0;
    settle(bet,pay,coin,{big:50});const c=center(coin);if(win)FX.burst(c.x,c.y,{n:40,type:'coin',up:true,speed:9});
    hist.unshift([res,win]);hist=hist.slice(0,16);$('#cfH').innerHTML=hist.map(([r,w])=>`<span class="cfd ${r}${w?' w':''}">${r==='H'?'JK':'♠'}</span>`).join('');
    banner($('#cfM'),`${res==='H'?'Heads':'Tails'}! `+(win?`+${fmt(pay-bet)}`:`−${fmt(bet)}`),win?'win':'lose');
    $('#cfS').textContent=streak;$('#cfB').textContent=best;const s=$('#cfS');s.classList.remove('bump');void s.offsetWidth;if(win)s.classList.add('bump');
    busy=false;$$('.cfb',R).forEach(b=>b.disabled=false)}
  G.init=root=>{R=root;root.innerHTML=`<div class="ghead"><div><h2 class="gtxt">Coin Flip</h2><p>Call it in the air. Heads shows the JK crest, tails the spade. A correct call pays 1.96× your bet.</p></div></div>
    <div class="felt"><div class="cfstage"><div class="cfcoin" id="cfCoin"><div class="cfface h">JK</div><div class="cfface t">♠</div></div><div class="cfshadow"></div></div>
      <div class="row ctr"><button class="btn big cfb" data-s="H">Heads · JK</button><button class="btn big red cfb" data-s="T">Tails · ♠</button></div>
      <div class="statline"><span>Streak <b id="cfS">0</b></span><span>Best <b id="cfB">0</b></span><span>Pays <b>1.96×</b></span></div>
      <div class="banner" id="cfM"></div><div class="hist cfhist" id="cfH"></div></div>`;
    $$('.cfb',root).forEach(b=>b.onclick=()=>flip(b.dataset.s))};
  return G})());

/* =============================================================== PLINKO */
reg((()=>{
  const T={8:{low:[5.6,2.1,1.1,1,.5,1,1.1,2.1,5.6],med:[13,3,1.3,.7,.4,.7,1.3,3,13],high:[29,4,1.5,.3,.2,.3,1.5,4,29]},
    12:{low:[10,3,1.6,1.4,1.1,1,.5,1,1.1,1.4,1.6,3,10],med:[33,11,4,2,1.1,.6,.3,.6,1.1,2,4,11,33],high:[170,24,8.1,2,.7,.2,.2,.2,.7,2,8.1,24,170]},
    16:{low:[16,9,2,1.4,1.4,1.2,1.1,1,.5,1,1.1,1.2,1.4,1.4,2,9,16],med:[110,41,10,5,3,1.5,1,.5,.3,.5,1,1.5,3,5,10,41,110],high:[1000,130,26,9,4,2,.2,.2,.2,.2,.2,2,4,9,26,130,1000]}};
  const G={id:'plinko',name:'Plinko',cat:'Instant Games',featured:true,desc:'Drop the ball through the pegs. Edges pay up to 1,000×.',edge:'99% RTP',tc:'rgba(150,30,90,.95)',
    art:`<div class="a-plinko">${[[0,57],[1,45],[1,69],[2,33],[2,57],[2,81],[3,21],[3,45],[3,69],[3,93]].map(([r,x])=>`<i style="left:${x}px;top:${22+r*22}px"></i>`).join('')}<b></b></div>`};
  let R,cv,cx,rows=12,risk='med',balls=[],pegHit=new Map(),binHit=new Map(),raf=0,auto=0,autoT=0,L={};
  const table=()=>T[rows][risk];
  const binCol=m=>m>=100?'#ff3b5c':m>=10?'#ff7a2f':m>=3?'#ffb23f':m>=1.5?'#ffd76a':m>=1?'#c9e66b':'#7fd1a8';
  function layout(){const S=cv.clientWidth,H=cv.clientHeight,gap=Math.min((S-20)/(rows+2),(H-60)/(rows+1.2)),top=24;L={S,H,gap,top,cx0:S/2,binY:top+gap*(rows)+gap*.35,bw:gap*.92}}
  const pegX=(r,i)=>L.cx0+(i-(r+2)/2)*L.gap,pegY=r=>L.top+r*L.gap;
  function drop(){const bet=Bet.take();if(!bet){auto=0;paintAuto();return false}
    const path=[];let k=0;for(let r=0;r<rows;r++){const d=Math.random()<.5?0:1;path.push(d);k+=d}
    balls.push({bet,path,bin:k,r:0,u:0,x:L.cx0,y:L.top-L.gap*.7,c:`hsl(${330+rnd(40)},100%,${60+rnd(10)}%)`,tr:[],rows,risk});SFX.pop(900);if(!raf)raf=requestAnimationFrame(frame);return true}
  function land(b){const m=T[b.rows][b.risk][b.bin],pay=b.bet*m;binHit.set(b.bin,1);const r=cv.getBoundingClientRect();const x=r.left+L.cx0+(b.bin-b.rows/2)*L.gap,y=r.top+L.binY+L.gap*.3;
    SFX.pop(m>=1?500+Math.min(900,m*40):260);settle(b.bet,pay,{x,y},{big:50,silent:true});if(m>=10)FX.sparks(x,y,binCol(m),30);
    const h=$('#plH');const s=el('span','',fmtx(m));s.style.cssText=`background:${binCol(m)};color:#1a0d05`;h.prepend(s);while(h.children.length>14)h.lastChild.remove()}
  function frame(now){raf=requestAnimationFrame(frame);const S=cv.clientWidth,H=cv.clientHeight;if(!S)return;const d=Math.min(devicePixelRatio||1,2);
    if(cv.width!==Math.round(S*d)||cv.height!==Math.round(H*d)){cv.width=Math.round(S*d);cv.height=Math.round(H*d);cx.setTransform(d,0,0,d,0,0)}layout();
    if(auto>0&&now-autoT>260){autoT=now;if(drop()){auto--;paintAuto()}}
    const sp=RM?1:.075,br=Math.max(5,L.gap*.2),pr=Math.max(2.5,L.gap*.09);
    const kAt=(b,r)=>{let k=0;for(let i=0;i<r;i++)k+=b.path[i];return k};
    const P=(b,r)=>r<0?[L.cx0,L.top-L.gap*.8]:r>=b.rows?[L.cx0+(kAt(b,b.rows)-b.rows/2)*L.gap,L.binY+L.gap*.2]:[L.cx0+(kAt(b,r)-r/2)*L.gap,pegY(r)-br-pr];
    for(const b of balls){if(b.done)continue;b.u+=sp;const u=Math.min(1,b.u),s=b.r,[x0,y0]=P(b,s-1),[x1,y1]=P(b,s);
      b.x=x0+(x1-x0)*u;b.y=s===0?y0+(y1-y0)*u*u:y0+(y1-y0)*u-Math.sin(Math.PI*u)*L.gap*.42;
      b.tr.push([b.x,b.y]);if(b.tr.length>8)b.tr.shift();
      if(b.u>=1){b.u=0;if(s<b.rows){pegHit.set(s+','+(kAt(b,s)+1),1);SFX.tick(1.4+Math.random()*.4)}b.r++;if(b.r>b.rows){b.done=true;land(b)}}}
    balls=balls.filter(b=>!b.done);
    cx.clearRect(0,0,S,H);
    // pegs
    for(let r=0;r<rows;r++)for(let i=0;i<r+3;i++){const x=pegX(r,i),y=pegY(r),key=r+','+i,h=pegHit.get(key)||0;
      cx.fillStyle=h?`rgba(255,${200+55*h|0},${140+115*h|0},1)`:'#f1d488';cx.shadowColor=h?'#fff3c4':'rgba(232,196,106,.6)';cx.shadowBlur=h?16*h+4:6;cx.beginPath();cx.arc(x,y,pr+h*2,0,7);cx.fill();
      if(h){const v=h-.06;v>0?pegHit.set(key,v):pegHit.delete(key)}}
    cx.shadowBlur=0;
    // bins
    const tb=table();tb.forEach((m,i)=>{const x=L.cx0+(i-rows/2)*L.gap,h=binHit.get(i)||0,y=L.binY+h*-6+(h?Math.sin(h*12)*2:0),w=L.bw,hh=Math.max(20,L.gap*.75);
      cx.fillStyle=binCol(m);cx.shadowColor=binCol(m);cx.shadowBlur=h?24:6;roundRect(x-w/2,y,w,hh,6);cx.fill();cx.shadowBlur=0;
      cx.fillStyle='rgba(0,0,0,.25)';roundRect(x-w/2,y+hh-4,w,4,2);cx.fill();
      cx.fillStyle='#1a0d05';cx.font=`800 ${Math.max(8,Math.min(13,w*.3))}px DM Sans`;cx.textAlign='center';cx.textBaseline='middle';cx.fillText(m>=100?m.toFixed(0):m+'',x,y+hh/2);
      if(h){const v=h-.04;v>0?binHit.set(i,v):binHit.delete(i)}});
    // balls
    for(const b of balls){b.tr.forEach(([x,y],i)=>{cx.fillStyle=`rgba(255,120,170,${i/b.tr.length*.35})`;cx.beginPath();cx.arc(x,y,L.gap*.16*(i/b.tr.length),0,7);cx.fill()});
      const g=cx.createRadialGradient(b.x-2,b.y-2,1,b.x,b.y,L.gap*.2);g.addColorStop(0,'#fff');g.addColorStop(.4,b.c);g.addColorStop(1,'#a0123f');cx.fillStyle=g;cx.shadowColor=b.c;cx.shadowBlur=14;cx.beginPath();cx.arc(b.x,b.y,br,0,7);cx.fill();cx.shadowBlur=0}
    if(!balls.length&&!pegHit.size&&!binHit.size&&!auto){cancelAnimationFrame(raf);raf=0}}
  function roundRect(x,y,w,h,r){cx.beginPath();cx.moveTo(x+r,y);cx.arcTo(x+w,y,x+w,y+h,r);cx.arcTo(x+w,y+h,x,y+h,r);cx.arcTo(x,y+h,x,y,r);cx.arcTo(x,y,x+w,y,r);cx.closePath()}
  function paintAuto(){$('#plAuto').textContent=auto?`Stop (${auto})`:'Drop ×10'}
  function redraw(){if(!raf)raf=requestAnimationFrame(frame)}
  G.init=root=>{R=root;root.innerHTML=`<div class="ghead"><div><h2 class="gtxt">Plinko</h2><p>Each ball bounces left or right off every peg and lands in a bucket at the bottom. Center buckets are common, the edges are rare and pay the most. Drop as many balls as you like.</p></div></div>
    <div class="felt dark"><div class="plwrap"><canvas id="plC"></canvas></div>
      <div class="ctl"><div class="ctlbox"><div class="lbl">Rows</div><div class="seg" id="plRows"><button data-v="8">8</button><button data-v="12">12</button><button data-v="16">16</button></div></div>
        <div class="ctlbox"><div class="lbl">Risk</div><div class="seg" id="plRisk"><button data-v="low">Low</button><button data-v="med">Medium</button><button data-v="high">High</button></div></div></div>
      <div class="row ctr" style="margin-top:14px"><button class="btn big pulse" id="plGo">Drop ball</button><button class="btn ghost" id="plAuto">Drop ×10</button></div>
      <div class="hist" id="plH"></div></div>`;
    cv=$('#plC');cx=cv.getContext('2d');
    const segs=()=>{$$('#plRows button').forEach(b=>b.classList.toggle('on',+b.dataset.v===rows));$$('#plRisk button').forEach(b=>b.classList.toggle('on',b.dataset.v===risk))};
    $('#plRows').onclick=e=>{const b=e.target.closest('button');if(!b||balls.length)return toast('Wait for the balls to land');rows=+b.dataset.v;SFX.click();segs();redraw()};
    $('#plRisk').onclick=e=>{const b=e.target.closest('button');if(!b||balls.length)return toast('Wait for the balls to land');risk=b.dataset.v;SFX.click();segs();redraw()};
    $('#plGo').onclick=()=>{layout();drop()};$('#plAuto').onclick=()=>{auto=auto?0:10;paintAuto();redraw()};segs();
    addEventListener('resize',()=>{if(current===G)redraw()})};
  G.enter=()=>{setTimeout(()=>{layout();redraw()},20)};G.leave=()=>{auto=0;paintAuto()};
  return G})());

/* =============================================================== MINES */
reg((()=>{
  const G={id:'mines',name:'Mines',cat:'Instant Games',desc:'Flip tiles for gems, dodge the mines, cash out any time.',edge:'99% RTP',tc:'rgba(20,100,70,.95)',
    art:`<div class="a-grid">${Array.from({length:16},(_,i)=>`<i style="--d:${(i*.37)%3}"></i>`).join('')}</div>`};
  let R,mines=3,bombs=new Set(),open=0,bet=0,live=false;
  const mult=k=>{let m=.99;for(let i=0;i<k;i++)m*=(25-i)/(25-mines-i);return m};
  function paint(){$('#mnN').textContent=mines;setRange($('#mnR'));$('#mnNow').textContent=live?fmtx(open?mult(open):1):'—';$('#mnNext').textContent=open<25-mines?fmtx(mult(open+1)):'—';
    $('#mnGo').textContent=live?(open?`Cash out ${fmt(bet*mult(open))}`:'Pick a tile…'):'Start round';$('#mnGo').className='btn big '+(live?(open?'grn':'ghost'):'pulse');$('#mnGo').disabled=live&&!open;$('#mnR').disabled=live}
  function start(){if(live)return cash();bet=Bet.take();if(!bet)return;live=true;open=0;bombs=new Set(shuffle([...Array(25).keys()]).slice(0,mines));
    $$('.tileb',R).forEach((t,i)=>{t.className='tileb';t.innerHTML='';t.disabled=false;t.animate([{transform:'scale(.8)',opacity:.4},{transform:'none',opacity:1}],{duration:300,delay:i*14,easing:'cubic-bezier(.3,1.6,.5,1)',fill:'backwards'})});banner($('#mnM'),'Find the gems.');SFX.chip();paint()}
  function reveal(lost){$$('.tileb',R).forEach((t,i)=>{if(t.classList.contains('gem')||t.classList.contains('boom'))return;t.disabled=true;setTimeout(()=>{t.classList.add(bombs.has(i)?'boom':'gem','ghost');t.innerHTML=bombs.has(i)?'💣':'💎'},RM?0:120+i*18)})}
  function hit(i,t){if(!live||t.disabled)return;t.disabled=true;
    if(bombs.has(i)){live=false;t.classList.add('boom');t.innerHTML='💥';SFX.boom();const c=center(t);FX.burst(c.x,c.y,{n:50,type:'spark',colors:['#ff4f6d','#ff9f43','#fff'],speed:10,g:.1,life:40,size:4,lift:0});
      const f=$('.felt',R);f.classList.remove('shakeA');void f.offsetWidth;f.classList.add('shakeA');Stats.record(bet,0);banner($('#mnM'),`Boom! −${fmt(bet)}`,'lose');reveal(true);paint();return}
    open++;t.classList.add('gem');t.innerHTML='💎';SFX.gem();const c=center(t);FX.burst(c.x,c.y,{n:18,type:'gem',colors:['#5cff9d','#b9ffd6','#57c7ff'],speed:6,life:40});
    const m=$('#mnNow');m.classList.remove('bump');void m.offsetWidth;m.classList.add('bump');
    if(open===25-mines){paint();cash();return}paint()}
  function cash(){if(!live||!open)return;live=false;const pay=bet*mult(open);settle(bet,pay,$('.mgrid',R),{big:10});banner($('#mnM'),`Cashed ${fmtx(mult(open))} · +${fmt(pay-bet)}`,'win');reveal(false);paint()}
  G.init=root=>{R=root;root.innerHTML=`<div class="ghead"><div><h2 class="gtxt">Mines</h2><p>25 tiles hide gems and mines. Every gem you find raises the multiplier. Hit a mine and you lose the bet, so cash out whenever you like. More mines, faster climb.</p></div></div>
    <div class="felt"><div class="mng"><div class="mgrid">${Array.from({length:25},(_,i)=>`<button class="tileb" data-i="${i}" disabled></button>`).join('')}</div>
      <div class="mnside"><div class="ctlbox"><div class="lbl">Mines <b id="mnN"></b></div><input type="range" id="mnR" min="1" max="24" value="3"></div>
        <div class="ctlbox"><div class="lbl">Current</div><div class="mult gtxt" id="mnNow">—</div><div class="lbl" style="margin-top:8px">Next gem <b id="mnNext"></b></div></div>
        <button class="btn big pulse" id="mnGo">Start round</button></div></div>
      <div class="banner" id="mnM"></div></div>`;
    $('.mgrid',root).onclick=e=>{const t=e.target.closest('.tileb');if(t)hit(+t.dataset.i,t)};
    $('#mnR').oninput=e=>{mines=+e.target.value;SFX.tick(.5+mines/24);paint()};$('#mnGo').onclick=start;paint()};
  G.leave=()=>{if(live&&open)cash()};
  return G})());

/* =============================================================== TOWER */
reg((()=>{
  const LV={easy:{c:4,b:1,n:'Easy'},med:{c:3,b:1,n:'Medium'},hard:{c:2,b:1,n:'Hard'},xp:{c:3,b:2,n:'Expert'}},FL=8;
  const G={id:'tower',name:'Tower',cat:'Instant Games',newb:true,desc:'Climb eight floors. Each step multiplies, one wrong door and you fall.',edge:'99% RTP',tc:'rgba(90,40,120,.95)',
    art:`<div class="a-tower">${Array.from({length:5},(_,r)=>`<div>${Array.from({length:3},(_,i)=>`<i style="--d:${(r*3+i)*.21%2.6}"></i>`).join('')}</div>`).join('')}</div>`};
  let R,lv='med',floor=0,live=false,bet=0,bombs=[];
  const p=()=>(LV[lv].c-LV[lv].b)/LV[lv].c,mult=k=>k?.99/Math.pow(p(),k):1;
  function build(){const L=LV[lv];$('#twG').innerHTML=Array.from({length:FL},(_,r)=>{const f=FL-1-r;return`<div class="twrow" data-f="${f}"><span class="twm">${fmtx(mult(f+1))}</span><div class="twcells" style="--c:${L.c}">${Array.from({length:L.c},(_,i)=>`<button class="twc" data-i="${i}" disabled></button>`).join('')}</div></div>`}).join('');paint()}
  function paint(){$$('.twrow',R).forEach(r=>{const f=+r.dataset.f;r.classList.toggle('act',live&&f===floor);r.classList.toggle('done',f<floor);$$('.twc',r).forEach(c=>{if(!c.classList.contains('s')&&!c.classList.contains('x'))c.disabled=!(live&&f===floor)})});
    $('#twGo').textContent=live?(floor?`Cash out ${fmt(bet*mult(floor))}`:'Pick a door…'):'Start climb';$('#twGo').className='btn big '+(live?(floor?'grn':'ghost'):'pulse');$('#twGo').disabled=live&&!floor;
    $$('#twLv button').forEach(b=>b.classList.toggle('on',b.dataset.v===lv))}
  function start(){if(live)return cash();bet=Bet.take();if(!bet)return;live=true;floor=0;const L=LV[lv];bombs=Array.from({length:FL},()=>new Set(shuffle([...Array(L.c).keys()]).slice(0,L.b)));build();live=true;paint();banner($('#twM'),'Pick a door on the bottom floor.');SFX.chip()}
  function showRow(f){const r=$(`.twrow[data-f="${f}"]`,R);$$('.twc',r).forEach((c,i)=>{if(c.classList.contains('s')||c.classList.contains('x'))return;c.disabled=true;c.classList.add(bombs[f].has(i)?'x':'s','ghost');c.textContent=bombs[f].has(i)?'💀':'💎'})}
  function pickDoor(f,i,c){if(!live||f!==floor)return;
    if(bombs[f].has(i)){live=false;c.classList.add('x');c.textContent='💀';SFX.boom();const k=center(c);FX.burst(k.x,k.y,{n:40,type:'spark',colors:['#ff4f6d','#b47cff','#fff'],speed:9,g:.1,life:40,size:4,lift:0});
      for(let x=f;x<FL;x++)setTimeout(()=>showRow(x),RM?0:(x-f)*90);Stats.record(bet,0);banner($('#twM'),`You fell from floor ${f+1}! −${fmt(bet)}`,'lose');paint();return}
    c.classList.add('s');c.textContent='💎';SFX.gem();SFX.pop(500+f*90);const k=center(c);FX.burst(k.x,k.y,{n:20,type:'gem',colors:['#b47cff','#e7d2ff','#5cff9d'],speed:6,life:40});showRow(f);
    floor++;if(floor===FL){paint();cash();return}paint()}
  function cash(){if(!live||!floor)return;live=false;const pay=bet*mult(floor);settle(bet,pay,$('#twG'),{big:10});banner($('#twM'),`Cashed on floor ${floor} · ${fmtx(mult(floor))} · +${fmt(pay-bet)}`,'win');for(let x=floor;x<FL;x++)showRow(x);paint()}
  G.init=root=>{R=root;root.innerHTML=`<div class="ghead"><div><h2 class="gtxt">Tower</h2><p>Each floor has doors, and some hide a skull. Pick a safe door to climb a floor and grow the multiplier. Cash out any time, or reach the top for the full prize.</p></div></div>
    <div class="felt" style="background:radial-gradient(ellipse at 50% 20%,#2c1844,#150a22 60%,#08040e)"><div class="twg"><div class="tower" id="twG"></div>
      <div class="mnside"><div class="ctlbox"><div class="lbl">Difficulty</div><div class="seg" id="twLv">${Object.entries(LV).map(([k,v])=>`<button data-v="${k}">${v.n}</button>`).join('')}</div></div>
        <button class="btn big pulse" id="twGo">Start climb</button></div></div>
      <div class="banner" id="twM"></div></div>`;
    $('#twG').onclick=e=>{const c=e.target.closest('.twc');if(!c)return;pickDoor(+c.closest('.twrow').dataset.f,+c.dataset.i,c)};
    $('#twLv').onclick=e=>{const b=e.target.closest('button');if(!b||live)return;lv=b.dataset.v;SFX.click();build()};$('#twGo').onclick=start;build()};
  G.leave=()=>{if(live&&floor)cash()};
  return G})());

/* =============================================================== HORSE RACE */
reg((()=>{
  const NAMES=['Midnight Comet','Velvet Thunder','Lucky Clover','Golden Gamble','Rocket Rosie','Diamond Dust','Copper Kettle','Silver Bullet','Neon Dancer','Royal Flush','Wild Card','Dark Horse','Pocket Aces','Sugar Rush'];
  const SILK=['#d4143a','#3c8dff','#1fbf6a','#e8c46a','#b47cff','#ff8a1f'];
  const G={id:'derby',name:'Derby Dash',cat:'Instant Games',featured:true,newb:true,desc:'Six horses, live odds, a photo finish. Pick a winner.',edge:'≈93% RTP',tc:'rgba(30,110,50,.95)',
    art:`<div class="a-track">${[0,1,2].map(i=>`<i style="top:${i*28}px;--d:${i*.7}">🏇</i>`).join('')}</div>`};
  let R,field=[],pickI=-1,busy=false,raf=0;
  function newField(){const names=shuffle(NAMES.slice()).slice(0,6);let s=names.map(()=>Math.exp((Math.random()-.5)*1.6));const tot=s.reduce((a,b)=>a+b,0);
    field=names.map((n,i)=>{const p=s[i]/tot,odds=Math.max(1.3,Math.round(.93/p*10)/10);return{n,p,odds,c:SILK[i],form:Array.from({length:4},()=>1+rnd(6)).join('-')}});
    // keep probabilities exactly consistent with the odds shown: p = .93/odds (renormalised below .93 total)
    const sum=field.reduce((a,h)=>a+.93/h.odds,0);field.forEach(h=>h.pw=(.93/h.odds)/sum);
    pickI=-1;paintCard();paintTrack()}
  function paintCard(){$('#dbCard').innerHTML=field.map((h,i)=>`<button class="dbh ${pickI===i?'sel':''}" data-i="${i}" style="--c:${h.c}"><span class="no">${i+1}</span><span class="nm"><b>${h.n}</b><small>Form ${h.form}</small></span><span class="od">${h.odds.toFixed(1)}×</span></button>`).join('');
    $('#dbGo').disabled=busy||pickI<0;$('#dbGo').textContent=pickI<0?'Pick a horse':`Bet on #${pickI+1}`}
  function paintTrack(){$('#dbT').innerHTML=field.map((h,i)=>`<div class="lane"><span class="lno" style="background:${h.c}">${i+1}</span><div class="hrs" id="hr${i}" style="--c:${h.c}"><span class="hx">🏇</span><span class="bib">${i+1}</span></div></div>`).join('')+'<div class="finish"></div>'}
  function say(t){const c=$('#dbCom');c.textContent=t;c.classList.remove('in');void c.offsetWidth;c.classList.add('in')}
  async function race(){if(busy||pickI<0)return;const bet=Bet.take();if(!bet)return;busy=true;paintCard();banner($('#dbM'),'');$$('.dbh',R).forEach(b=>b.disabled=true);
    // choose the winner by probability, then script a race that ends that way
    let r=Math.random(),win=0;for(let i=0;i<6;i++){if((r-=field[i].pw)<0){win=i;break}win=i}
    const rest=shuffle([...Array(6).keys()].filter(i=>i!==win)),order=[win,...rest],T=[];order.forEach((h,k)=>T[h]=1+(k===0?0:(k===1?.004+Math.random()*.03:.03+k*.02+Math.random()*.03)));
    const prof=field.map((_,i)=>{const K=10,v=Array.from({length:K},()=>.75+Math.random()*.5);if(i===win&&Math.random()<.6){for(let k=0;k<5;k++)v[k]*=.85;for(let k=7;k<K;k++)v[k]*=1.25}
      const cum=[0];v.forEach(x=>cum.push(cum[cum.length-1]+x));return cum.map(x=>x/cum[K])});
    const pos=(i,u)=>{u=Math.min(1,u/T[i]);const K=prof[i].length-1,f=u*K,k=Math.min(K-1,Math.floor(f)),a=f-k;const e=a*a*(3-2*a);return prof[i][k]+(prof[i][k+1]-prof[i][k])*e};
    const tr=$('#dbT');tr.classList.add('run');const D=RM?600:9500,t0=performance.now();const hw=$('#hr0').offsetWidth;let leader=-1,leadT=0,said={},hoof=0;
    say('And they\'re off!');SFX.bell();
    await new Promise(res=>{(function f(now){const u=(now-t0)/D,W=tr.clientWidth-34-hw-34;
      field.forEach((_,i)=>{const p=pos(i,u),e=$('#hr'+i);e.style.transform=`translateX(${p*W}px) translateY(${Math.sin(now/70+i*1.7)*2.5}px)`});
      let L=0,bp=-1;field.forEach((_,i)=>{const p=pos(i,u);if(p>bp){bp=p;L=i}});
      if(L!==leader&&now-leadT>700&&u<.97){if(leader>=0)say(`#${L+1} ${field[L].n} takes the lead!`);leader=L;leadT=now;$$('.lane',R).forEach((l,i)=>l.classList.toggle('lead',i===L))}
      if(u>.5&&!said.h){said.h=1;say(`Halfway, ${field[L].n} in front!`)}if(u>.78&&!said.s){said.s=1;say('Into the final stretch!');SFX.whoosh()}
      if(now-hoof>110){hoof=now;SFX.tick(.35+Math.random()*.1)}
      if(u<Math.max(...T)+.04)requestAnimationFrame(f);else res()})(t0)});
    tr.classList.remove('run');const close=T[order[1]]-1<.012;
    if(close){const fl=el('div','flash');$('.dbtrackw',R).appendChild(fl);setTimeout(()=>fl.remove(),700);SFX.coin();say('Photo finish!');await sleep(RM?0:900)}
    say(`#${win+1} ${field[win].n} wins${close?' by a nose':''}!`);$$('.lane',R).forEach((l,i)=>{l.classList.toggle('won',i===win);l.classList.toggle('lead',false)});
    $('#dbRes').innerHTML=order.slice(0,3).map((h,k)=>`<span><i>${['1st','2nd','3rd'][k]}</i><b style="color:${field[h].c}">#${h+1}</b> ${field[h].n}</span>`).join('');
    const ok=pickI===win,pay=ok?bet*field[win].odds:0;const net=settle(bet,pay,$('#hr'+win),{big:10});
    banner($('#dbM'),ok?`Your horse won! ${field[win].odds.toFixed(1)}× · +${fmt(net)}`:`#${pickI+1} ${field[pickI].n} finished ${['1st','2nd','3rd','4th','5th','6th'][order.indexOf(pickI)]} · −${fmt(bet)}`,ok?'win':'lose');
    if(ok)FX.rain(50,'conf');
    await sleep(RM?0:2600);busy=false;$('#dbNext').hidden=false}
  G.init=root=>{R=root;root.innerHTML=`<div class="ghead"><div><h2 class="gtxt">Derby Dash</h2><p>Six horses, each with its own odds. Favorites win more often but pay less. Pick a horse, place your bet and watch the race. A long shot at 15× can still come from behind.</p></div></div>
    <div class="felt" style="background:radial-gradient(ellipse at 50% 20%,#1d5b2c,#0c3317 60%,#051a0b)">
      <div class="dbg"><div class="dbtrackw"><div class="dbcom" id="dbCom">Place your bets</div><div class="track" id="dbT"></div><div class="dbres" id="dbRes"></div></div>
        <div><div class="lbl">Race card</div><div class="dbcard" id="dbCard"></div><div class="row" style="margin-top:12px"><button class="btn big pulse" id="dbGo">Pick a horse</button><button class="btn ghost" id="dbNext" hidden>Next race</button></div></div></div>
      <div class="banner" id="dbM"></div></div>`;
    $('#dbCard').onclick=e=>{const b=e.target.closest('.dbh');if(!b||busy)return;pickI=+b.dataset.i;SFX.chip();paintCard()};
    $('#dbGo').onclick=race;$('#dbNext').onclick=()=>{$('#dbNext').hidden=true;$('#dbRes').innerHTML='';banner($('#dbM'),'');say('Place your bets');newField();SFX.click()};newField()};
  return G})());
