(function(){var d=document,b=d.body,s=localStorage;try{if(s.getItem('ix-theme')==='dark'||(!s.getItem('ix-theme')&&matchMedia('(prefers-color-scheme:dark)').matches))b.classList.add('dark-theme')}catch(e){}
var t=d.getElementById('themeBtn');if(t){t.innerHTML=b.classList.contains('dark-theme')?'<i class="fa-solid fa-sun" aria-hidden="true"></i>':'<i class="fa-solid fa-moon" aria-hidden="true"></i>';} if(t){t.onclick=function(){b.classList.toggle('dark-theme');var dark=b.classList.contains('dark-theme');t.innerHTML=dark?'<i class="fa-solid fa-sun" aria-hidden="true"></i>':'<i class="fa-solid fa-moon" aria-hidden="true"></i>';try{s.setItem('ix-theme',dark?'dark':'light')}catch(e){}}}
var hd=d.querySelector('header');function setHH(){if(hd)d.documentElement.style.setProperty('--hh',hd.offsetHeight+'px')}setHH();addEventListener('resize',setHH,{passive:true});
var m=d.getElementById('menuBtn');
function setMenu(open){b.classList.toggle('menu-open',open);if(m)m.setAttribute('aria-expanded',open?'true':'false');if(m)m.innerHTML=open?'<i class="fa-solid fa-xmark" aria-hidden="true"></i>':'<i class="fa-solid fa-bars" aria-hidden="true"></i>'}
if(m){m.setAttribute('aria-expanded','false');m.onclick=function(){setMenu(!b.classList.contains('menu-open'))}}
d.querySelectorAll('.main-nav a').forEach(function(a){a.onclick=function(){setMenu(false)}});
addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false)});
addEventListener('resize',function(){if(innerWidth>1100)setMenu(false)},{passive:true});
(function(){var nav=d.querySelector('.main-nav');if(!nav||!m)return;var hdr=d.querySelector('header');
nav.id=nav.id||'siteNav';m.setAttribute('aria-controls',nav.id);
var links=nav.querySelectorAll('a');links.forEach(function(a,i){a.classList.add('nv');a.style.setProperty('--i',i)});
var first=(links[0]&&links[0].getAttribute('href'))||'';var mm=first.match(/^(\/|\.\/|(?:\.\.\/)+)/),pre=mm?mm[1]:'./';
var br=d.querySelector('header .brand');var head=d.createElement('div');head.className='nav-head';
head.innerHTML='<div class="brand nav-brand">'+(br?br.innerHTML:'INFLUXYN')+'</div><button type="button" class="nav-close" aria-label="Close menu"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>';
nav.insertBefore(head,nav.firstChild);
var more=d.createElement('div');more.className='nav-more';
var ML=[['Help center','help'],['Support','contact'],['How we work','how-we-work'],['Community','community'],['Privacy policy','privacy'],['Terms of service','terms']];
more.innerHTML=ML.map(function(x){return '<a href="'+pre+x[1]+'/index.html">'+x[0]+'</a>'}).join('');
nav.appendChild(more);
var cta=d.querySelector('.head-actions .btn.primary');var foot=d.createElement('div');foot.className='nav-foot';
foot.innerHTML='<a class="btn nav-cta" href="'+(cta?cta.getAttribute('href'):pre+'contact/index.html')+'">Get a free quote <i class="fa-solid fa-angle-right" aria-hidden="true"></i></a><a class="btn nav-wa" href="https://wa.me/94750348396?text=Hi%20INFLUXYN" target="_blank" rel="noopener">Chat on WhatsApp</a>';
nav.appendChild(foot);
var bd=d.createElement('div');bd.className='nav-backdrop';bd.setAttribute('aria-hidden','true');(hdr||b).appendChild(bd);
var cb=head.querySelector('.nav-close');
function shut(){setMenu(false);m.focus()}
cb.onclick=shut;bd.onclick=shut;
m.addEventListener('click',function(){setTimeout(function(){if(b.classList.contains('menu-open'))cb.focus()},80)});
more.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){setMenu(false)})});
foot.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){setMenu(false)})});
})();
var sb=d.getElementById('scrollBar');function updateScroll(){if(!sb)return;var h=d.documentElement,max=h.scrollHeight-h.clientHeight;var p=max>0?(h.scrollTop/max)*100:0;sb.style.width=Math.max(0,Math.min(100,p))+'%'}addEventListener('scroll',updateScroll,{passive:true});addEventListener('resize',updateScroll,{passive:true});updateScroll();
if('IntersectionObserver'in window){var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.05,rootMargin:'0px 0px -4% 0px'});d.querySelectorAll('.reveal').forEach(function(e){io.observe(e)})}else d.querySelectorAll('.reveal').forEach(function(e){e.classList.add('in')});
d.querySelectorAll('[data-cur]').forEach(function(btn){btn.onclick=function(){var c=btn.dataset.cur;d.querySelectorAll('[data-cur]').forEach(function(x){x.classList.toggle('on',x===btn)});d.querySelectorAll('[data-lkr]').forEach(function(p){p.textContent=c==='lkr'?'Rs. '+p.dataset.lkr:'$'+p.dataset.usd})}});
d.querySelectorAll('[data-filter]').forEach(function(btn){btn.onclick=function(){var f=btn.dataset.filter;d.querySelectorAll('[data-filter]').forEach(function(x){x.classList.toggle('on',x===btn)});d.querySelectorAll('[data-cat]').forEach(function(c){c.style.display=(f==='all'||c.dataset.cat===f)?'':'none'})}});
var tw=d.getElementById('typed');if(tw&&!matchMedia('(prefers-reduced-motion:reduce)').matches){var L=tw.dataset.t.split('|'),i=0,j=0,del=0;(function tick(){var w=L[i];tw.textContent=w.slice(0,j);if(!del&&j++===w.length){del=1;return setTimeout(tick,1600)}if(del&&j--===0){del=0;i=(i+1)%L.length}setTimeout(tick,del?35:70)})()}
var f=d.getElementById('contactForm');if(f)f.onsubmit=function(e){e.preventDefault();var v=function(n){return f.elements[n].value.trim()};var msg='Hi INFLUXYN, I am '+v('name')+'.\nService: '+v('service')+'\nEmail: '+v('email')+'\n\n'+v('message');open('https://wa.me/94750348396?text='+encodeURIComponent(msg),'_blank','noopener')};
var q=new URLSearchParams(location.search);var cf=document.getElementById('contactForm');if(cf){var sv={basic:'Web Development',professional:'Web Development',business:'Web Development',enterprise:'Web Development'},pl=q.get('plan'),dm=q.get('demo'),sel=cf.elements.service,ms=cf.elements.message;
if(pl&&sv[pl.toLowerCase()]&&ms&&!ms.value){sel&&(sel.value=sv[pl.toLowerCase()]);ms.value='I am interested in the '+pl.charAt(0).toUpperCase()+pl.slice(1).toLowerCase()+' plan. '}
if(dm&&ms&&!ms.value){ms.value='I would like to request a demo of '+dm+'. '}}

/* scroll-to-top + WhatsApp composer */
(function(){var TEL='94750348396';
var up=d.createElement('button');up.type='button';up.className='to-top';up.setAttribute('aria-label','Back to top');up.innerHTML='<i class="fa-solid fa-arrow-up" aria-hidden="true"></i>';b.appendChild(up);
function ts(){up.classList.toggle('show',(window.pageYOffset||d.documentElement.scrollTop)>400)}addEventListener('scroll',ts,{passive:true});ts();
up.onclick=function(){var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;window.scrollTo({top:0,behavior:rm?'auto':'smooth'})};
var fab=d.querySelector('.cta-fab');if(!fab)return;
var demos=['Online Invitations','QueueFlow','Restaurant Ordering','Event Photo Sharing'],plans=['Not sure yet','Basic (Rs. 15,000)','Professional (Rs. 25,000)','Business (Rs. 40,000)','Enterprise (Rs. 80,000)'];
var mode='web',edited=false;
var pop=d.createElement('div');pop.className='wa-pop';pop.id='waPop';pop.setAttribute('role','dialog');pop.setAttribute('aria-label','Chat with INFLUXYN on WhatsApp');
pop.innerHTML='<div class="wa-head"><span class="wa-ic"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></span><div><b>INFLUXYN</b><span>Typically replies within 24 hours</span></div><button type="button" id="waClose" aria-label="Close"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button></div>'
+'<div class="wa-body"><label>How can we help?</label><div class="wa-opts"><button type="button" data-m="web" class="on"><i class="fa-solid fa-globe" aria-hidden="true"></i>Develop a website</button><button type="button" data-m="demo"><i class="fa-solid fa-play" aria-hidden="true"></i>Request a demo</button></div>'
+'<div><label for="waSel" id="waSelL">Plan</label><select id="waSel"></select></div><div><label for="waMsg">Your message</label><textarea id="waMsg" rows="4"></textarea></div>'
+'<button type="button" class="wa-send" id="waSend"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i>Send on WhatsApp</button></div>';
b.appendChild(pop);
var sel=pop.querySelector('#waSel'),msg=pop.querySelector('#waMsg'),selL=pop.querySelector('#waSelL');
function build(){var v=sel.value;if(mode==='web'){return 'Hi INFLUXYN, I found your website (influxyn.online) and I would like to develop a website for my business.'+(v&&v.indexOf('Not sure')!==0?' I am interested in the '+v+' plan.':'')+' Could you please share the details and a free quote?'}
return 'Hi INFLUXYN, I saw your live demos on influxyn.online and I would like to request a demo of '+v+'. Could you please arrange it?'}
function fill(){var list=mode==='web'?plans:demos;selL.textContent=mode==='web'?'Plan':'Which demo?';sel.innerHTML=list.map(function(x){return '<option>'+x+'</option>'}).join('');msg.value=build();edited=false}
fill();
pop.querySelectorAll('[data-m]').forEach(function(x){x.onclick=function(){mode=x.dataset.m;pop.querySelectorAll('[data-m]').forEach(function(y){y.classList.toggle('on',y===x)});fill()}});
sel.onchange=function(){msg.value=build();edited=false};msg.oninput=function(){edited=true};
function open(o){pop.classList.toggle('open',o);fab.classList.toggle('open',o);fab.setAttribute('aria-expanded',o?'true':'false');if(o)setTimeout(function(){msg.focus()},120)}
fab.setAttribute('aria-haspopup','dialog');fab.setAttribute('aria-controls','waPop');fab.setAttribute('aria-expanded','false');
fab.onclick=function(e){e.preventDefault();open(!pop.classList.contains('open'))};
pop.querySelector('#waClose').onclick=function(){open(false);fab.focus()};
addEventListener('keydown',function(e){if(e.key==='Escape'&&pop.classList.contains('open')){open(false);fab.focus()}});
d.addEventListener('click',function(e){if(pop.classList.contains('open')&&!pop.contains(e.target)&&!fab.contains(e.target))open(false)});
pop.querySelector('#waSend').onclick=function(){var t=msg.value.trim()||build();window.open('https://wa.me/'+TEL+'?text='+encodeURIComponent(t),'_blank','noopener');open(false)};
})();
})();
