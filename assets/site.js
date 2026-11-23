/* Shared homepage feel for the project pages: terminal windows, spring-in, sparks, progress, clock */
(()=>{const RM=matchMedia('(prefers-reduced-motion: reduce)').matches,DPR=Math.min(2,devicePixelRatio||1),root=document.documentElement;
const page=location.pathname.split('/').filter(Boolean)[0]||'';
const slug=t=>t.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const MAP={
  digits:[['.lab>.card','draw','input'],['.verdict','predict','output'],['.side>.box','confidence','softmax'],['section.box','network','layers'],['.how .box','how-it-works','']],
  lds:[['#stage','viewer',''],['#quiz','quiz',''],['.ptw','periodic-table',''],['#ecard','element','']],
  sorting:[['.lab>.card.glow','visualizer',''],['#info','info',''],['.race','race','']],
  calc:[['.stage','output','']],
  allproj:[['.card.glass',null,'']]
};
const tw=(el,path,tag)=>{if(el.dataset.tw)return;el.dataset.tw=1;const cs=getComputedStyle(el);if(cs.position==='static')el.style.position='relative';
  el.style.paddingTop=(parseFloat(cs.paddingTop)+38)+'px';
  const b=document.createElement('div');b.className='tw-tb';b.setAttribute('aria-hidden','true');b.innerHTML=`<i></i><i></i><i></i><span>josh@austin: ${path}</span>${tag?`<em>${tag}</em>`:''}`;el.prepend(b)};
(MAP[page]||[]).forEach(([sel,name,tag])=>document.querySelectorAll(sel).forEach((el,i,all)=>{
  if(name===null){const h=el.querySelector('h3,h2');tw(el,`~/projects/${h?slug(h.textContent):'item'}`,tag);return}
  tw(el,`~/${page}/${name}${all.length>1?'-'+(i+1):''}`,tag)}));

// sparks
const fx=document.createElement('canvas');fx.className='tw-fx';fx.setAttribute('aria-hidden','true');document.body.append(fx);const c=fx.getContext('2d');let P=[],raf=0;
const CL=['#4fd1ff','#ff6b35','#7dffb0','#f4f8fc','#ffc857'],G='+*✦·×';
const size=()=>{fx.width=innerWidth*DPR;fx.height=innerHeight*DPR};size();addEventListener('resize',size);
const loop=()=>{c.setTransform(DPR,0,0,DPR,0,0);c.clearRect(0,0,innerWidth,innerHeight);c.textAlign='center';c.textBaseline='middle';P=P.filter(p=>p.l>0);
  P.forEach(p=>{p.vx*=.96;p.vy=p.vy*.96+.22;p.x+=p.vx;p.y+=p.vy;p.l--;c.globalAlpha=Math.min(1,p.l/25);c.fillStyle=p.c;c.font=`700 ${p.s}px "JetBrains Mono",monospace`;c.fillText(p.g,p.x,p.y)});c.globalAlpha=1;raf=P.length?requestAnimationFrame(loop):0};
const sparks=window.jkSparks=(x,y,n=16,pow=1)=>{if(RM)return;for(let i=0;i<n;i++){const a=Math.random()*6.283,v=(2+Math.random()*5)*pow;P.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-2*pow,l:35+Math.random()*30|0,c:CL[Math.random()*5|0],g:G[Math.random()*5|0],s:9+Math.random()*9})}if(!raf)raf=requestAnimationFrame(loop)};
addEventListener('click',e=>{const b=e.target.closest('button,.btn,a.pill,a.card');if(!b||e.detail===0)return;sparks(e.clientX,e.clientY,b.matches('a.card')?22:12,b.matches('a.card')?1.1:.8)},true);

// progress bar
const pg=document.createElement('div');pg.className='tw-prog';pg.innerHTML='<i></i>';document.body.append(pg);const bar=pg.firstChild;
const sc=()=>{const m=Math.max(1,root.scrollHeight-innerHeight);bar.style.transform=`scaleX(${Math.min(1,scrollY/m)})`};addEventListener('scroll',sc,{passive:true});sc();

// Austin clock where the page doesn't have one
if(!document.querySelector('.clock')){const k=document.createElement('span');k.className='tw-clock';k.innerHTML='Austin <b>--:--</b>';
  const pill=document.querySelector('nav .pill');if(pill)pill.before(k);else{k.classList.add('fixed');document.body.append(k)}
  const t=()=>{k.lastChild.textContent=new Date().toLocaleTimeString('en-US',{timeZone:'America/Chicago',hour:'numeric',minute:'2-digit'})};t();setInterval(t,15000)}

// windows spring in as they scroll into view
if(RM)return;root.classList.add('tw-m');
const typePath=el=>{const t=el.textContent;el.textContent='';let i=0;const s=()=>{el.textContent=t.slice(0,++i);if(i<t.length)setTimeout(s,14)};s()};
const io=new IntersectionObserver(es=>{let k=0;es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target;io.unobserve(el);const d=Math.min(k++,6)*.1;el.style.setProperty('--twd',d+'s');el.classList.add('tw-on');
  const sp=el.querySelector('.tw-tb span');if(sp)setTimeout(()=>typePath(sp),d*1000+250);setTimeout(()=>el.classList.add('tw-done'),d*1000+1200)})},{threshold:.08});
document.querySelectorAll('[data-tw]').forEach(el=>io.observe(el));
})();
