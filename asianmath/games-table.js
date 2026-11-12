/* Table games: Blackjack, Baccarat, Video Poker, Hi-Lo, Roulette */
'use strict';
function chipStack(amount){const D=[[5000,'c5k'],[1000,'c1k'],[500,'c500'],[100,'c100'],[25,'c25'],[5,'c5'],[1,'c1']],out=[];let a=Math.round(amount);
  for(const[v,c]of D){while(a>=v&&out.length<7){out.push(c);a-=v}}if(!out.length)out.push('c1');
  return`<div class="stackc">${out.reverse().map((c,i)=>`<div class="chip ${c}" style="top:${-i*5}px"></div>`).join('')}<span class="stk">${fmt(amount)}</span></div>`}

/* =============================================================== BLACKJACK */
reg((()=>{
  const G={id:'bj',name:'Blackjack',cat:'Table Games',desc:'Beat the dealer to 21. Blackjack pays 3 to 2.',edge:'99.5% RTP',tc:'rgba(13,90,60,.95)',
    art:`<div class="a-cards"><div class="mc">A</div><div class="mc">K</div><div class="mc">♥</div></div>`};
  let R,shoe=[],dealer=[],hands=[],act=0,phase='bet',dEl,dTot,pBox,msg,btn={};
  const draw=(...want)=>{if(shoe.length<60){shoe=deck(6);toast('Fresh 6-deck shoe shuffled')}
    if(want.length&&lucky())for(const f of want){const i=shoe.findLastIndex((c,k)=>k>shoe.length-40&&f(c));if(i>=0){[shoe[i],shoe[shoe.length-1]]=[shoe[shoe.length-1],shoe[i]];break}}
    else if(want.length&&unlucky()){const i=shoe.findLastIndex((c,k)=>k>shoe.length-40&&!want.some(f=>f(c)));if(i>=0)[shoe[i],shoe[shoe.length-1]]=[shoe[shoe.length-1],shoe[i]]}
    return shoe.pop()};
  const cv=c=>c.r==='A'?11:['K','Q','J','10'].includes(c.r)?10:+c.r;
  function val(cs){let t=0,a=0;for(const c of cs){t+=cv(c);if(c.r==='A')a++}while(t>21&&a){t-=10;a--}return{t,soft:a>0}}
  const isBJ=cs=>cs.length===2&&val(cs).t===21;
  function paintTot(e,cs,hide){if(!cs.length){e.textContent='';e.className='tot';return}const v=hide?val([cs[0]]):val(cs);e.textContent=hide?v.t+' + ?':(v.soft&&v.t<21?`${v.t-10}/${v.t}`:v.t);e.className='tot'+(v.t>21?' bust':isBJ(cs)&&!hide?' bj':'')}
  function ui(){const h=hands[act],p=phase==='play';
    btn.deal.hidden=p;btn.hit.hidden=btn.stand.hidden=btn.dbl.hidden=btn.split.hidden=!p;
    if(p){btn.dbl.disabled=!(h.cards.length===2&&Bank.bal>=h.bet);btn.split.disabled=!(hands.length===1&&h.cards.length===2&&cv(h.cards[0])===cv(h.cards[1])&&Bank.bal>=h.bet)}
    hands.forEach((x,i)=>x.box.classList.toggle('act',p&&i===act&&hands.length>1))}
  function newHand(bet,cards=[]){const box=el('div','bjh',`<div class="lbl">You <span class="tot"></span></div><div class="hand"></div><div class="bspot">${chipStack(bet)}</div>`);pBox.appendChild(box);return{bet,cards,box,hand:$('.hand',box),tot:$('.tot',box),done:false,dbl:false}}
  async function deal(){
    if(phase==='busy')return;const bet=Bet.take();if(!bet)return;phase='busy';ui();banner(msg,'');
    dealer=[];hands=[];act=0;$('#bjD').innerHTML='';pBox.innerHTML='';paintTot(dTot,[]);
    const h=newHand(bet);hands.push(h);const shoeEl=$('.shoe',R);
    for(let i=0;i<2;i++){const c=draw(c=>cv(c)>=10||(i===1&&val([...h.cards,c]).t>=19));h.cards.push(c);await dealCard(h.hand,c,{from:shoeEl});paintTot(h.tot,h.cards);
      const d=draw(c=>cv(c)>=2&&cv(c)<=6);dealer.push(d);await dealCard($('#bjD'),d,{from:shoeEl,up:i===0});paintTot(dTot,dealer,true)}
    const up=cv(dealer[0]);
    if(isBJ(dealer)&&(up>=10)){await sleep(300);await reveal();return finish()}
    if(isBJ(h.cards)){h.done=true;await reveal();return finish()}
    phase='play';ui();
  }
  async function reveal(){const e=$('#bjD').children[1];if(e&&!e.classList.contains('up')){flipCard(e);await sleep(450)}paintTot(dTot,dealer)}
  async function hit(){if(phase!=='play')return;phase='busy';const h=hands[act],c=draw(c=>{const t=val([...h.cards,c]).t;return t>=19&&t<=21},c=>val([...h.cards,c]).t<=21);h.cards.push(c);await dealCard(h.hand,c,{from:$('.shoe',R)});paintTot(h.tot,h.cards);
    const t=val(h.cards).t;if(t>21){h.done=true;h.box.classList.add('bust');SFX.lose();$('.hand',h.box).classList.add('shake');return next()}if(t===21||h.split&&h.cards[0].r==='A'){h.done=true;return next()}phase='play';ui()}
  function stand(){if(phase!=='play')return;hands[act].done=true;next()}
  async function dbl(){if(phase!=='play')return;const h=hands[act];if(h.cards.length!==2||!Bet.take(h.bet))return;h.bet*=2;h.dbl=true;$('.bspot',h.box).innerHTML=chipStack(h.bet);SFX.chip();phase='busy';
    const c=draw(c=>{const t=val([...h.cards,c]).t;return t>=19&&t<=21},c=>val([...h.cards,c]).t<=21);h.cards.push(c);const e=await dealCard(h.hand,c,{from:$('.shoe',R)});e.style.transform='rotate(90deg)';paintTot(h.tot,h.cards);h.done=true;if(val(h.cards).t>21){h.box.classList.add('bust');SFX.lose()}next()}
  async function split(){if(phase!=='play'||hands.length>1)return;const h=hands[0];if(h.cards.length!==2||!Bet.take(h.bet))return;phase='busy';SFX.chip();
    const c2=h.cards.pop();h.hand.lastChild.remove();const h2=newHand(h.bet,[c2]);h.split=h2.split=true;hands.push(h2);h2.hand.appendChild(cardEl(c2));paintTot(h.tot,h.cards);paintTot(h2.tot,h2.cards);
    for(const x of hands){const c=draw();x.cards.push(c);await dealCard(x.hand,c,{from:$('.shoe',R)});paintTot(x.tot,x.cards);if(x.cards[0].r==='A'||val(x.cards).t===21)x.done=true}
    act=hands.findIndex(x=>!x.done);if(act<0){act=0;return next()}phase='play';ui()}
  async function next(){while(act<hands.length&&hands[act].done)act++;if(act<hands.length){phase='play';ui();return}
    phase='busy';ui();await reveal();
    if(hands.some(x=>val(x.cards).t<=21)){while(val(dealer).t<17){await sleep(350);const c=draw(c=>val([...dealer,c]).t>21);dealer.push(c);await dealCard($('#bjD'),c,{from:$('.shoe',R)});paintTot(dTot,dealer)}}
    finish()}
  function finish(){
    const d=val(dealer).t,dBJ=isBJ(dealer);let tb=0,pay=0;const parts=[];
    for(const h of hands){tb+=h.bet;const p=val(h.cards).t,bj=isBJ(h.cards)&&hands.length===1;let r,k;
      if(p>21){r=0;k='Bust'}else if(bj&&!dBJ){r=h.bet*2.5;k='Blackjack!'}else if(dBJ&&!bj){r=0;k='Dealer blackjack'}else if(bj&&dBJ){r=h.bet;k='Push'}
      else if(d>21||p>d){r=h.bet*2;k=d>21?'Dealer busts':'You win'}else if(p===d){r=h.bet;k='Push'}else{r=0;k='Dealer wins'}
      pay+=r;parts.push(k);h.box.classList.add(r>h.bet?'won':r===h.bet?'push':'lost');
      if(r<h.bet&&!RM){const s=$('.stackc',h.box);s&&s.animate([{transform:'none',opacity:1},{transform:'translateY(-180px) scale(.6)',opacity:0}],{duration:700,easing:'ease-in',fill:'forwards'})}}
    const net=settle(tb,pay,pBox,{big:2.4});
    banner(msg,(parts.length>1?parts.join(' · ')+' — ':parts[0]+' — ')+(net>0?`+${fmt(net)}`:net<0?`−${fmt(-net)}`:'money back'),net>0?'win':net<0?'lose':'push');
    phase='bet';ui();btn.deal.textContent='Deal again';
  }
  G.init=root=>{R=root;root.innerHTML=`<div class="ghead"><div><h2 class="gtxt">Blackjack</h2><p>Get closer to 21 than the dealer without going over. Double on any two cards, split pairs once. Blackjack pays 3:2, dealer stands on all 17s.</p></div></div>
    <div class="felt bjt"><div class="shoe"></div>
      <div class="zone"><div class="lbl">Dealer <span class="tot" id="bjDT"></span></div><div class="hand" id="bjD"></div></div>
      <div class="arc">BLACKJACK PAYS 3 TO 2 · DEALER STANDS ON ALL 17s · INSURANCE NOT OFFERED</div>
      <div class="bjp" id="bjP"><div class="zone"><div class="lbl">You</div><div class="hand"></div></div></div>
      <div class="banner" id="bjM"></div>
      <div class="row ctr"><button class="btn big pulse" id="bjDeal">Deal</button><button class="btn" id="bjHit" hidden>Hit</button><button class="btn red" id="bjStand" hidden>Stand</button><button class="btn ghost" id="bjDbl" hidden>Double</button><button class="btn ghost" id="bjSplit" hidden>Split</button></div>
    </div>`;
    dEl=$('#bjD');dTot=$('#bjDT');pBox=$('#bjP');msg=$('#bjM');
    btn={deal:$('#bjDeal'),hit:$('#bjHit'),stand:$('#bjStand'),dbl:$('#bjDbl'),split:$('#bjSplit')};
    btn.deal.onclick=deal;btn.hit.onclick=hit;btn.stand.onclick=stand;btn.dbl.onclick=dbl;btn.split.onclick=split;shoe=deck(6)};
  G.enter=()=>{};
  return G})());

/* =============================================================== BACCARAT */
reg((()=>{
  const G={id:'bacc',name:'Baccarat',cat:'Table Games',newb:true,desc:'Player, Banker or Tie. The high rollers\' favorite.',edge:'98.9% RTP',tc:'rgba(120,14,38,.95)',
    art:`<div class="a-cards"><div class="mc">9</div><div class="mc">B</div><div class="mc">8</div></div>`};
  let R,shoe=[],side='P',busy=false,road=[];
  const bv=c=>['10','J','Q','K'].includes(c.r)?0:c.r==='A'?1:+c.r,tot=cs=>cs.reduce((a,c)=>a+bv(c),0)%10;
  const draw=()=>{if(shoe.length<20)shoe=deck(8);return shoe.pop()};
  function sim(sh){const s=sh.slice(),d=()=>s.pop(),P=[d()],B=[d()];P.push(d());B.push(d());const pt=tot(P),bt=tot(B);
    if(!(pt>=8||bt>=8)){let p3=null;if(pt<=5){p3=d();P.push(p3)}const b=tot(B),v=p3?bv(p3):null;
      if(p3===null?b<=5:(b<=2||(b===3&&v!==8)||(b===4&&v>=2&&v<=7)||(b===5&&v>=4&&v<=7)||(b===6&&(v===6||v===7))))B.push(d())}
    const fp=tot(P),fb=tot(B);return fp>fb?'P':fb>fp?'B':'T'}
  async function play(){if(busy)return;const bet=Bet.take();if(!bet)return;busy=true;$('#bcGo').disabled=true;banner($('#bcM'),'');
    if(shoe.length<20)shoe=deck(8);if(lucky())for(let k=0;k<80&&sim(shoe)!==side;k++)shuffle(shoe);else if(unlucky())for(let k=0;k<80&&sim(shoe)===side;k++)shuffle(shoe);
    const P=[],B=[],pb=$('#bcP'),bb=$('#bcB'),sh=$('.shoe',R);pb.innerHTML=bb.innerHTML='';$$('.bcz',R).forEach(z=>z.classList.remove('wz'));
    const t=(id,cs)=>{$(id).textContent=tot(cs)};
    for(let i=0;i<2;i++){P.push(draw());await dealCard(pb,P[i],{from:sh});t('#bcPT',P);B.push(draw());await dealCard(bb,B[i],{from:sh});t('#bcBT',B)}
    const pt=tot(P),bt=tot(B);
    if(!(pt>=8||bt>=8)){let p3=null;
      if(pt<=5){await sleep(300);p3=draw();P.push(p3);await dealCard(pb,p3,{from:sh});t('#bcPT',P)}
      const b=tot(B),v=p3?bv(p3):null;
      const bDraw=p3===null?b<=5:(b<=2||(b===3&&v!==8)||(b===4&&v>=2&&v<=7)||(b===5&&v>=4&&v<=7)||(b===6&&(v===6||v===7)));
      if(bDraw){await sleep(300);const c=draw();B.push(c);await dealCard(bb,c,{from:sh});t('#bcBT',B)}}
    const fp=tot(P),fb=tot(B),w=fp>fb?'P':fb>fp?'B':'T';
    await sleep(250);$(w==='P'?'#bcZP':w==='B'?'#bcZB':'#bcZT').classList.add('wz');
    let pay=0;if(side===w)pay=w==='P'?bet*2:w==='B'?bet*1.95:bet*9;else if(w==='T'&&side!=='T')pay=bet;
    const net=settle(bet,pay,$('#bcZ'+(w==='T'?'T':w)),{big:8});
    const nm={P:'Player',B:'Banker',T:'Tie'}[w];
    banner($('#bcM'),`${nm} ${w==='T'?fp+'–'+fb:'wins '+Math.max(fp,fb)+' to '+Math.min(fp,fb)}`+(net>0?` · +${fmt(net)}`:net<0?` · −${fmt(-net)}`:' · push'),net>0?'win':net<0?'lose':'push');
    road.push(w);if(road.length>30)road.shift();$('#bcRoad').innerHTML=road.map(x=>`<i class="rd ${x}">${x}</i>`).join('');
    busy=false;$('#bcGo').disabled=false;}
  G.init=root=>{R=root;root.innerHTML=`<div class="ghead"><div><h2 class="gtxt">Baccarat</h2><p>Bet on the hand that ends closest to 9. Cards are dealt by the classic third-card rules. Player pays 1:1, Banker pays 0.95:1, Tie pays 8:1.</p></div></div>
    <div class="felt red"><div class="shoe"></div>
      <div class="bacg"><div class="bcz" id="bcZP"><div class="lbl">Player <span class="tot" id="bcPT">0</span></div><div class="hand" id="bcP"></div></div>
      <div class="bcz tie" id="bcZT"><div class="lbl">Tie</div><b>8:1</b></div>
      <div class="bcz" id="bcZB"><div class="lbl">Banker <span class="tot" id="bcBT">0</span></div><div class="hand" id="bcB"></div></div></div>
      <div class="banner" id="bcM"></div>
      <div class="row ctr"><div class="seg" id="bcSide"><button data-s="P" class="on">Player 1:1</button><button data-s="B">Banker 0.95:1</button><button data-s="T">Tie 8:1</button></div><button class="btn big pulse" id="bcGo">Deal</button></div>
      <div class="road" id="bcRoad"></div>
    </div>`;
    $('#bcSide').onclick=e=>{const b=e.target.closest('button');if(!b||busy)return;side=b.dataset.s;SFX.chip();$$('#bcSide button').forEach(x=>x.classList.toggle('on',x===b))};
    $('#bcGo').onclick=play;shoe=deck(8)};
  return G})());

/* =============================================================== VIDEO POKER */
reg((()=>{
  const PT=[['Royal Flush',800],['Straight Flush',50],['Four of a Kind',25],['Full House',9],['Flush',6],['Straight',4],['Three of a Kind',3],['Two Pair',2],['Jacks or Better',1]];
  const G={id:'vpoker',name:'Video Poker',cat:'Table Games',newb:true,desc:'Jacks or Better. Hold, draw, chase the royal.',edge:'99.5% RTP',tc:'rgba(25,60,130,.95)',
    art:`<div class="a-cards" style="width:150px"><div class="mc" style="left:10px;transform:rotate(-16deg)">10</div><div class="mc" style="left:32px;transform:rotate(-8deg)">J</div><div class="mc" style="left:54px">Q</div><div class="mc" style="left:76px;transform:rotate(8deg);color:#111">K</div><div class="mc" style="left:98px;transform:rotate(16deg)">A</div></div>`};
  let R,cards=[],held=[false,false,false,false,false],phase='deal',bet=0,dk=[];
  function evalHand(cs){
    const v=cs.map(c=>rankVal(c)).map(x=>x===1?14:x),cnt={};v.forEach(x=>cnt[x]=(cnt[x]||0)+1);const c=Object.values(cnt).sort((a,b)=>b-a);
    const fl=cs.every(x=>x.s===cs[0].s),u=[...new Set(v)].sort((a,b)=>a-b);
    const st=u.length===5&&(u[4]-u[0]===4||u.join()==='2,3,4,5,14');
    if(st&&fl)return u[0]===10?0:1;if(c[0]===4)return 2;if(c[0]===3&&c[1]===2)return 3;if(fl)return 4;if(st)return 5;if(c[0]===3)return 6;if(c[0]===2&&c[1]===2)return 7;
    if(c[0]===2){const p=+Object.keys(cnt).find(k=>cnt[k]===2);if(p>=11)return 8}return -1}
  function paintPT(hit){$('#vpPT').innerHTML=PT.map(([n,m],i)=>`<div class="ptr${i===hit?' hit':''}"><span>${n}</span><b>${m}×</b><em>${fmt(m*Math.max(1,bet||Bet.v))}</em></div>`).join('')}
  async function go(){
    const slots=$$('.vps',R);
    if(phase==='deal'){bet=Bet.take();if(!bet)return;phase='busy';banner($('#vpM'),'Hold the cards you want to keep, then draw.');paintPT(-1);dk=tilt(14,()=>deck(1),d=>{const h=evalHand(d.slice(-5));return h<0?0:PT[h][1]+Math.random()*.5});held=[false,false,false,false,false];cards=[];
      slots.forEach(s=>{s.querySelector('.cslot').innerHTML='';s.classList.remove('held')});
      for(let i=0;i<5;i++){cards.push(dk.pop());await dealCard($('.cslot',slots[i]),cards[i],{from:$('#vpGo'),delay:0})}
      const h=evalHand(cards);paintPT(h);phase='hold';$('#vpGo').textContent='Draw';return}
    if(phase==='hold'){phase='busy';
      {const fin=d=>{const s=d.slice(),f=cards.map((c,i)=>held[i]?c:s.pop()),h=evalHand(f);return h<0?0:PT[h][1]+Math.random()*.5};dk=tilt(30,()=>shuffle(dk.slice()),fin)}
      for(let i=0;i<5;i++)if(!held[i]){const s=$('.cslot',slots[i]);const old=s.firstChild;old.classList.remove('up');SFX.flip();await sleep(160);s.innerHTML='';cards[i]=dk.pop();await dealCard(s,cards[i],{from:$('#vpGo')})}
      const h=evalHand(cards);paintPT(h);const pay=h>=0?bet*PT[h][1]:0;
      if(h>=0)slots.forEach(s=>s.querySelector('.cardz').classList.add('hl'));
      const net=settle(bet,pay,$('#vpHand'),{big:25});
      banner($('#vpM'),h>=0?`${PT[h][0]}! ${pay>bet?'+'+fmt(net):'Money back'}`:'No win. Deal again?',h>=0?(pay>bet?'win':'push'):'lose');
      phase='deal';$('#vpGo').textContent='Deal';}
  }
  G.init=root=>{R=root;root.innerHTML=`<div class="ghead"><div><h2 class="gtxt">Video Poker</h2><p>Jacks or Better, full-pay 9/6. Deal five cards, tap the ones to hold, draw once. A pair of jacks or higher gets your bet back.</p></div></div>
    <div class="felt navy vpm"><div class="ptab" id="vpPT"></div>
      <div class="vphand" id="vpHand">${[0,1,2,3,4].map(i=>`<div class="vps" data-i="${i}"><div class="cslot"></div><span class="held">HELD</span></div>`).join('')}</div>
      <div class="banner" id="vpM">Press Deal to start.</div>
      <div class="row ctr"><button class="btn big pulse" id="vpGo">Deal</button></div></div>`;
    paintPT(-1);$('#vpGo').onclick=go;
    $('#vpHand').onclick=e=>{const s=e.target.closest('.vps');if(!s||phase!=='hold')return;const i=+s.dataset.i;held[i]=!held[i];s.classList.toggle('held',held[i]);SFX.click()};};
  G.enter=()=>paintPT(-1);
  return G})());

/* =============================================================== ROULETTE */
reg((()=>{
  const G={id:'roul',name:'Roulette',cat:'Table Games',desc:'European single zero. Splits, corners, streets, the works.',edge:'97.3% RTP',betMode:'chip',tc:'rgba(110,20,20,.95)',
    art:`<div class="a-wheel" style="--c:#0f7a4a 0 10deg,#b3122e 10deg 20deg,#141414 20deg 30deg,#b3122e 30deg 40deg,#141414 40deg 50deg,#b3122e 50deg 60deg,#141414 60deg 70deg,#b3122e 70deg 80deg,#141414 80deg 90deg,#b3122e 90deg 100deg,#141414 100deg 110deg,#b3122e 110deg 120deg,#141414 120deg 130deg,#b3122e 130deg 140deg,#141414 140deg 150deg,#b3122e 150deg 160deg,#141414 160deg 170deg,#b3122e 170deg 180deg,#141414 180deg 190deg,#b3122e 190deg 200deg,#141414 200deg 210deg,#b3122e 210deg 220deg,#141414 220deg 230deg,#b3122e 230deg 240deg,#141414 240deg 250deg,#b3122e 250deg 260deg,#141414 260deg 270deg,#b3122e 270deg 280deg,#141414 280deg 290deg,#b3122e 290deg 300deg,#141414 300deg 310deg,#b3122e 310deg 320deg,#141414 320deg 330deg,#b3122e 330deg 340deg,#141414 340deg 350deg,#b3122e 350deg 360deg"></div>`};
  const RED=new Set([1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]),col=n=>n===0?'g':RED.has(n)?'r':'k';
  const ORD=[0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26],STEP=Math.PI*2/37;
  let R,busy=false,RB={},RH=[],RL={},hist=store.get('backroom-rhist',[]),cv,cx,W={a:0,sp:null,rest:-1,last:0},raf=0,lastTick=-1;
  const CW=100/14,RHT=46,nn=(c,r)=>3*c+3-r,abbr=n=>n>=1000?(n/1000).toFixed(n%1000?1:0)+'k':Math.round(n);
  function render(){$('#rChips').innerHTML=Object.values(RB).map(b=>`<div class="rc${b.win?' w':''}" style="left:${b.x}%;top:${b.y}px">${abbr(b.stake)}</div>`).join('');
    const t=Object.values(RB).reduce((a,b)=>a+b.stake,0),k=Object.keys(RB).length;$('#rTot').textContent=t?`On the table: ${fmt(t)} · ${k} bet${k>1?'s':''}`:'Tap the table to place chips';}
  function place(key,nums,pay,x,y){if(busy)return;const u=Bet.take();if(!u)return;SFX.chip();const b=RB[key]||(RB[key]={nums,pay,stake:0,x,y});b.stake+=u;RH.push([key,u]);render();
    const c=$('#rChips').lastChild;if(c&&!RM)c.animate([{transform:'translate(-50%,-50%) translateY(-30px) scale(1.6)',opacity:0},{transform:'translate(-50%,-50%)',opacity:1}],{duration:280,easing:'cubic-bezier(.3,1.6,.5,1)'})}
  function cell(label,cls,c0,r0,cs,rs,key,nums,pay){const b=el('button','c '+cls,label);b.style.gridColumn=`${c0}/span ${cs}`;b.style.gridRow=`${r0}/span ${rs}`;b.dataset.nums=nums.join(',');b.onclick=()=>place(key,nums,pay,(c0-1+cs/2)*CW,(r0-1+rs/2)*RHT);$('#rTab').insertBefore(b,$('#rChips'))}
  function hot(key,nums,pay,x,y,label){const h=el('button','hs');h.style.left=x+'%';h.style.top=y+'px';h.title=label;h.setAttribute('aria-label',label);h.onclick=e=>{e.stopPropagation();place(key,nums,pay,x,y)};h.onmouseenter=()=>hl(nums,true);h.onmouseleave=()=>hl(nums,false);$('#rTab').insertBefore(h,$('#rChips'))}
  function hl(nums,on){$$('#rTab .c').forEach(c=>{if(!c.dataset.nums)return;const n=c.dataset.nums.split(',');if(n.length===1&&nums.includes(+n[0]))c.classList.toggle('hov',on)})}
  function buildTable(){const T=$('#rTab');
    cell(0,'g',1,1,1,3,'n:0',[0],36);
    for(let c=0;c<12;c++)for(let r=0;r<3;r++){const n=nn(c,r);cell(n,col(n),c+2,r+1,1,1,'n:'+n,[n],36)}
    for(let r=0;r<3;r++){const m=[0,2,1][r];cell('2:1','o',14,r+1,1,1,'col'+r,Array.from({length:36},(_,k)=>k+1).filter(n=>n%3===m),3)}
    [['1st 12',1,2],['2nd 12',13,6],['3rd 12',25,10]].forEach(([l,a,c0])=>cell(l,'o',c0,4,4,1,'doz'+a,Array.from({length:12},(_,k)=>a+k),3));
    [['1–18',n=>n<=18,''],['Even',n=>n%2===0,''],['◆',n=>RED.has(n),'r'],['◆',n=>n>0&&!RED.has(n),'k'],['Odd',n=>n%2===1,''],['19–36',n=>n>=19,'']].forEach(([l,f,cl],k)=>cell(l,cl||'o',2+k*2,5,2,1,'out'+k,Array.from({length:36},(_,q)=>q+1).filter(f),2));
    for(let c=0;c<12;c++)for(let r=0;r<3;r++){const n=nn(c,r);
      if(c<11)hot('s:'+n+'-'+(n+3),[n,n+3],18,(c+2)*CW,r*RHT+RHT/2,`Split ${n}/${n+3}`);
      if(r<2)hot('s:'+n+'-'+(n-1),[n,n-1],18,(c+1.5)*CW,(r+1)*RHT,`Split ${n}/${n-1}`);
      if(c<11&&r<2)hot('c:'+n,[n,n+3,n-1,n+2],9,(c+2)*CW,(r+1)*RHT,`Corner ${n-1}-${n+3}`);
      if(r===2){hot('st:'+c,[3*c+1,3*c+2,3*c+3],12,(c+1.5)*CW,3*RHT,`Street ${3*c+1}-${3*c+3}`);if(c<11)hot('sx:'+c,[1,2,3,4,5,6].map(k=>3*c+k),6,(c+2)*CW,3*RHT,`Six line ${3*c+1}-${3*c+6}`)}}
    for(let r=0;r<3;r++)hot('s:0-'+nn(0,r),[0,nn(0,r)],18,CW,r*RHT+RHT/2,`Split 0/${nn(0,r)}`);
    hot('t:023',[0,2,3],12,CW,RHT,'Trio 0-2-3');hot('t:012',[0,1,2],12,CW,2*RHT,'Trio 0-1-2')}
  function spin(){if(busy)return;if(!Object.keys(RB).length){banner($('#rM'),'Place a chip on the table first.','push');return}
    busy=true;banner($('#rM'),'No more bets…','push');$('#rSpin').disabled=true;SFX.whoosh();
    let n=rnd(37);
    if(lucky()){const bs=Object.values(RB),t=bs.reduce((a,b)=>a+b.stake,0),ret=x=>bs.reduce((a,b)=>a+(b.nums.includes(x)?b.stake*b.pay:0),0),good=[...Array(37).keys()].filter(x=>ret(x)>t);n=good.length?pick(good):[...Array(37).keys()].sort((a,b)=>ret(b)-ret(a))[0]}
    else if(unlucky()){const bs=Object.values(RB),t=bs.reduce((a,b)=>a+b.stake,0),bad=[...Array(37).keys()].filter(x=>bs.reduce((a,b)=>a+(b.nums.includes(x)?b.stake*b.pay:0),0)<t);if(bad.length)n=pick(bad)}
    RL=JSON.parse(JSON.stringify(RB));W.rest=-1;W.sp={t0:performance.now(),D:RM?400:6200,a0:W.a,n,idx:ORD.indexOf(n),bets:RB}}
  function done(sp){const n=sp.n,bets=Object.values(sp.bets);let tot=0,ret=0;bets.forEach(b=>{tot+=b.stake;b.win=b.nums.includes(n);if(b.win)ret+=b.stake*b.pay});render();
    hist.unshift(n);hist=hist.slice(0,14);store.set('backroom-rhist',hist);paintHist();
    const big=$('#rNum');big.textContent=n;big.className='rnum '+col(n);void big.offsetWidth;big.classList.add('show');
    $$('#rTab .c').forEach(c=>{if(c.dataset.nums===String(n))c.classList.add('lit')});
    const net=settle(tot,ret,cv,{big:15});const nm=n===0?'Green':RED.has(n)?'Red':'Black';
    banner($('#rM'),`${n} ${nm} — `+(net>0?`you win ${fmt(net)}`:net<0?`you lose ${fmt(-net)}`:'you break even'),net>0?'win':net<0?'lose':'push');
    setTimeout(()=>{RB={};RH=[];render();busy=false;$('#rSpin').disabled=false;$$('#rTab .c.lit').forEach(c=>c.classList.remove('lit'))},2600)}
  function paintHist(){$('#rHist').innerHTML=hist.map((n,i)=>`<span class="rh ${col(n)}" style="opacity:${1-i*.05}">${n}</span>`).join('')}
  const sm=x=>x<=0?0:x>=1?1:x*x*(3-2*x);
  function frame(now){raf=requestAnimationFrame(frame);const dt=Math.min(.05,(now-W.last)/1000||0);W.last=now;
    const S=cv.clientWidth;if(!S)return;const d=Math.min(devicePixelRatio||1,2);if(cv.width!==Math.round(S*d)){cv.width=cv.height=Math.round(S*d);cx.setTransform(d,0,0,d,0,0)}
    const c=S/2,R0=S/2-6;let ba=null,br=0;const sp=W.sp;
    if(sp){const u=Math.min(1,(now-sp.t0)/sp.D),e=1-Math.pow(1-u,3),aEnd=sp.a0+Math.PI*2*3.4;W.a=sp.a0+(aEnd-sp.a0)*e;
      const Ta=aEnd-Math.PI/2+sp.idx*STEP,e2=1-Math.pow(1-u,2.3);ba=Ta+Math.PI*2*7*(1-e2);
      const k=sm((u-.5)/.38);br=(.86+(.63-.86)*k+(u>.88?(1-u)*.8*Math.sin((u-.88)*70):0))*R0;
      const slot=Math.floor((((ba-W.a+Math.PI/2)%(Math.PI*2))+Math.PI*2)%(Math.PI*2)/STEP);if(slot!==lastTick&&u>.45){lastTick=slot;SFX.tick(.7+Math.random()*.3)}
      if(u>=1){W.a=aEnd;W.sp=null;W.rest=sp.idx;done(sp)}}
    else{W.a+=dt*.16;if(W.rest>=0){ba=W.a-Math.PI/2+W.rest*STEP;br=.63*R0}}
    const R=R0;cx.clearRect(0,0,S,S);
    let gr=cx.createRadialGradient(c,c,R*.75,c,c,R);gr.addColorStop(0,'#6b3a14');gr.addColorStop(.6,'#3a1c08');gr.addColorStop(1,'#1a0a03');cx.fillStyle=gr;cx.beginPath();cx.arc(c,c,R,0,7);cx.fill();
    cx.strokeStyle='#e8c46a';cx.lineWidth=R*.02;cx.beginPath();cx.arc(c,c,R*.985,0,7);cx.stroke();
    gr=cx.createRadialGradient(c,c,R*.7,c,c,R*.93);gr.addColorStop(0,'#2a1608');gr.addColorStop(1,'#120803');cx.fillStyle=gr;cx.beginPath();cx.arc(c,c,R*.93,0,7);cx.fill();
    for(let i=0;i<8;i++){const a=i*Math.PI/4+W.a*.0;cx.fillStyle='#e8c46a';cx.beginPath();cx.arc(c+Math.cos(a)*R*.88,c+Math.sin(a)*R*.88,R*.018,0,7);cx.fill()}
    const r1=.5*R,r2=.76*R,PC={r:'#b3122e',k:'#141414',g:'#0f7a4a'};
    for(let i=0;i<37;i++){const n=ORD[i],a0=W.a-Math.PI/2+i*STEP-STEP/2,a1=a0+STEP;cx.fillStyle=PC[col(n)];cx.beginPath();cx.arc(c,c,r2,a0,a1);cx.arc(c,c,r1,a1,a0,true);cx.closePath();cx.fill();
      cx.strokeStyle='#c99a3a';cx.lineWidth=1.2;cx.stroke();cx.save();cx.translate(c,c);cx.rotate(a0+STEP/2+Math.PI/2);cx.fillStyle='#fff7e0';cx.font=`700 ${R*.07}px Cinzel,serif`;cx.textAlign='center';cx.textBaseline='middle';cx.fillText(n,0,-.68*R);cx.restore()}
    cx.strokeStyle='#e8c46a';cx.lineWidth=R*.012;cx.beginPath();cx.arc(c,c,r2,0,7);cx.stroke();cx.beginPath();cx.arc(c,c,r1,0,7);cx.stroke();
    gr=cx.createRadialGradient(c-r1*.3,c-r1*.3,0,c,c,r1);gr.addColorStop(0,'#7a4a1c');gr.addColorStop(1,'#2a1406');cx.fillStyle=gr;cx.beginPath();cx.arc(c,c,r1-1,0,7);cx.fill();
    cx.lineCap='round';for(let k=0;k<4;k++){const a=W.a+k*Math.PI/2,ex=c+Math.cos(a)*r1*.82,ey=c+Math.sin(a)*r1*.82;const lg=cx.createLinearGradient(c,c,ex,ey);lg.addColorStop(0,'#fff3c4');lg.addColorStop(1,'#b6862f');cx.strokeStyle=lg;cx.lineWidth=R*.03;cx.beginPath();cx.moveTo(c,c);cx.lineTo(ex,ey);cx.stroke();cx.fillStyle='#f1d488';cx.beginPath();cx.arc(ex,ey,R*.035,0,7);cx.fill()}
    gr=cx.createRadialGradient(c-R*.03,c-R*.03,0,c,c,R*.11);gr.addColorStop(0,'#fff7d6');gr.addColorStop(1,'#9c6d22');cx.fillStyle=gr;cx.beginPath();cx.arc(c,c,R*.1,0,7);cx.fill();
    if(!W.sp&&W.rest>=0){const a0=W.a-Math.PI/2+W.rest*STEP-STEP/2;cx.globalAlpha=.55+.45*Math.sin(now/180);cx.strokeStyle='#fff3c4';cx.shadowColor='#ffd76a';cx.shadowBlur=18;cx.lineWidth=3;cx.beginPath();cx.arc(c,c,r2,a0,a0+STEP);cx.arc(c,c,r1,a0+STEP,a0,true);cx.closePath();cx.stroke();cx.shadowBlur=0;cx.globalAlpha=1}
    if(ba!==null){const bx=c+Math.cos(ba)*br,by=c+Math.sin(ba)*br;cx.fillStyle='rgba(0,0,0,.45)';cx.beginPath();cx.arc(bx+2,by+3,R*.036,0,7);cx.fill();gr=cx.createRadialGradient(bx-R*.012,by-R*.012,0,bx,by,R*.036);gr.addColorStop(0,'#fff');gr.addColorStop(1,'#bdb6a6');cx.fillStyle=gr;cx.beginPath();cx.arc(bx,by,R*.034,0,7);cx.fill()}}
  G.init=root=>{R=root;root.innerHTML=`<div class="ghead"><div><h2 class="gtxt">Roulette</h2><p>Pick a chip in the bet bar, then tap the table: a number for a straight bet, or the lines and corners between numbers for splits, streets, corners and six lines. Stack as many bets as you like, then spin.</p></div></div>
    <div class="felt rl"><div class="rtop"><div class="rwrap"><canvas id="rWheel"></canvas><div class="rnum" id="rNum"></div></div>
      <div class="rside"><div class="lbl">Last numbers</div><div class="rhist" id="rHist"></div><div class="paytab" style="justify-content:flex-start"><span>Straight <b>35:1</b></span><span>Split <b>17:1</b></span><span>Street <b>11:1</b></span><span>Corner <b>8:1</b></span><span>Six line <b>5:1</b></span><span>Dozen / column <b>2:1</b></span><span>Even money <b>1:1</b></span></div>
      <div class="row" style="margin-top:14px"><button class="btn big pulse" id="rSpin">Spin</button><button class="btn ghost sm" id="rUndo">Undo</button><button class="btn ghost sm" id="rClear">Clear</button><button class="btn ghost sm" id="rRebet">Rebet</button></div><div class="lbl" style="margin-top:10px" id="rTot"></div></div></div>
      <div class="banner" id="rM"></div>
      <div class="rscroll"><div class="rtab" id="rTab"><div id="rChips"></div></div></div></div>`;
    cv=$('#rWheel');cx=cv.getContext('2d');buildTable();render();paintHist();
    cv.onclick=spin;$('#rSpin').onclick=spin;
    $('#rUndo').onclick=()=>{if(busy||!RH.length)return;const[k,u]=RH.pop(),b=RB[k];b.stake-=u;if(b.stake<=0)delete RB[k];Bank.set(Bank.bal+u);render()};
    $('#rClear').onclick=()=>{if(busy)return;const t=Object.values(RB).reduce((a,b)=>a+b.stake,0);if(t)Bank.set(Bank.bal+t);RB={};RH=[];render()};
    $('#rRebet').onclick=()=>{if(busy)return;let miss=false;Object.entries(RL).forEach(([k,b])=>{if(Bank.bal>=b.stake){Bank.take(b.stake);const e=RB[k]||(RB[k]={nums:b.nums,pay:b.pay,stake:0,x:b.x,y:b.y});e.stake+=b.stake;RH.push([k,b.stake])}else miss=true});render();if(miss)toast('Not enough chips to repeat every bet')}};
  G.enter=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(frame)};
  G.leave=()=>{if(busy)return;cancelAnimationFrame(raf);if(Object.keys(RB).length){const t=Object.values(RB).reduce((a,b)=>a+b.stake,0);Bank.set(Bank.bal+t);RB={};RH=[];render()}};
  return G})());
