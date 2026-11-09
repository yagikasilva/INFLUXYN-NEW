
/* INFLUXYN site assistant — left-side chat box. Answers common questions from the site's own content.
   Edit the INTENTS list below to change or add answers. */
(function () {
  'use strict';
  var WA = 'https://wa.me/94750348396';
  var NAME = 'INFLUXYN Assistant';

  /* ---------- knowledge base ---------- */
  /* ---------- knowledge base: grounded in the website pages ---------- */
  var INTENTS = [
    { k: ['hi', 'hello', 'hey', 'hola', 'good morning', 'good evening', 'ayubowan'], greet: true,
      a: 'Hi! 👋 Welcome to INFLUXYN. I can help you explore our services, website plans, add-ons, project timelines, payment process and live demos. What are you planning to build?' },
    { k: ['thanks', 'thank you', 'thx', 'great', 'ok thanks'], thanks: true,
      a: 'You’re welcome! 😊 If you have a project in mind, I can help you find the right service or plan.' },

    { k: ['price', 'pricing', 'cost', 'how much', 'plan', 'plans', 'package', 'packages', 'rate', 'rates', 'charge', 'fee', 'budget', 'cheap', 'website cost'],
      a: '<b>Website development plans</b><br>• <b>Basic – Rs. 15,000:</b> 1–3 pages, responsive design, basic SEO, contact form and 1 month support.<br>• <b>Professional – Rs. 25,000:</b> 5–10 pages, custom design, advanced SEO, blog and social integrations, analytics and 3 months support.<br>• <b>Business – Rs. 60,000:</b> unlimited pages, e-commerce for up to 50 products, payment gateway integration, priority support and 6 months support.<br>• <b>Enterprise – Rs. 100,000:</b> large custom solutions, unlimited e-commerce / multi-vendor marketplace, custom development, dedicated manager and 12 months support.<br><br><b>All plans include free hosting and domain.</b> The listed price is for the full build, with no hidden setup fees. <a href="/pricing/">Compare plans</a>.' },

    { k: ['add-on', 'addon', 'add on', 'extras', 'extra service', 'security hardening', 'email marketing setup'],
      a: '<b>Available add-ons</b><br>• AI Chatbot – $15/month<br>• Video Production – $30/video<br>• Brand Identity Package – $20 one-time<br>• Advanced SEO Package – $25/month<br>• Email Marketing Setup – $20 one-time<br>• Security Hardening – $15/month<br><a href="/pricing/">View pricing and add-on details</a>.' },

    { k: ['service', 'services', 'what do you do', 'what you do', 'offer', 'offers', 'help with'],
      a: 'INFLUXYN offers seven main services:<br>• <a href="/services/web-development/">Web Development</a> – websites, e-commerce and web apps<br>• <a href="/services/ai-automation/">AI Automation</a> – chatbots and workflow automation<br>• <a href="/services/video-production/">Video Production &amp; Editing</a><br>• <a href="/services/branding/">Branding &amp; Identity</a><br>• <a href="/services/ui-ux-design/">UI/UX Design</a><br>• <a href="/services/digital-marketing/">Digital Marketing &amp; SEO</a><br>• <a href="/services/pos-applications/">POS Applications</a><br>Tell me what you need and I can point you to the most relevant service.' },

    { k: ['website', 'web development', 'web design', 'wordpress', 'woocommerce', 'react', 'firebase', 'elementor', 'build a site', 'build website', 'mobile friendly', 'responsive website'],
      a: 'We create responsive, mobile-first, SEO-ready websites, online stores and web applications. Our listed technologies include WordPress, WooCommerce, Elementor, custom themes, React and Firebase. Web deliverables can include on-page SEO, schema markup, payment or booking integrations, secure coding, backups and speed tuning. <a href="/services/web-development/">Web development details</a> · <a href="/projects/">View projects</a>.' },

    { k: ['shop', 'store', 'ecommerce', 'e-commerce', 'online store', 'sell online', 'payment gateway', 'product management', 'shipping setup'],
      a: 'Yes. We build online stores with product management, payment gateway and shipping setup. The <b>Business plan (Rs. 60,000)</b> includes e-commerce for up to 50 products. Enterprise supports unlimited e-commerce or a multi-vendor marketplace. <a href="/services/web-development/">E-commerce service</a>.' },

    { k: ['chatbot', 'ai chatbot', 'website bot', 'whatsapp bot', 'artificial intelligence'],
      a: 'Our AI Automation service includes website and WhatsApp chatbots, workflow automation for orders, leads and reports, AI-assisted content, analytics and process integrations. The website lists the AI Chatbot add-on from <b>$15/month</b>, and it can be added to any website plan. The assistant can be tuned to your content and customer language needs, including Sinhala or Tamil requirements discussed during consultation. <a href="/services/ai-automation/">AI Automation details</a>.' },

    { k: ['automation', 'automate', 'workflow', 'repetitive task', 'business process', 'reports automation', 'lead automation'],
      a: 'We can help automate repetitive business workflows such as handling orders, leads and reports. Our AI Automation service also covers chatbots, AI-assisted content, analytics dashboards and process optimisation. The exact workflow and integrations are scoped during consultation. <a href="/services/ai-automation/">Explore AI Automation</a>.' },

    { k: ['video', 'reel', 'reels', 'editing', 'motion graphics', 'promo video', 'film', 'colour grading', 'color grading', 'captions'],
      a: 'Our video service covers corporate and brand films, short-form social content, motion graphics, animated explainers, product demos and post-production. We can also edit footage you already have, including colour grading and captions. The listed promotional video add-on starts at <b>$30 per video</b>; complex shoots are quoted individually. <a href="/services/video-production/">Video Production details</a>.' },

    { k: ['logo', 'branding', 'brand identity', 'brand guidelines', 'colour palette', 'color palette', 'typography', 'business card', 'brochure'],
      a: 'Our Branding &amp; Identity service can include a unique logo, colour palette, typography, brand guidelines, brand strategy, positioning, messaging and printed collateral such as business cards and brochures. The listed Brand Identity add-on is <b>$20 one-time</b> for logo design, colour palette and brand guidelines. Final approved deliverables belong to you once payment is complete. <a href="/services/branding/">Branding details</a>.' },

    { k: ['ui', 'ux', 'ui ux', 'user experience', 'design', 'redesign', 'prototype', 'wireframe', 'figma', 'dashboard', 'admin panel', 'usability'],
      a: 'We design user-focused websites, dashboards, admin panels, login flows and landing pages. The process can include user research, wireframes, layout planning, interactive prototypes, visual design systems and usability testing. We can also audit and redesign an existing website. <a href="/services/ui-ux-design/">UI/UX Design details</a>.' },

    { k: ['seo', 'google ranking', 'rank', 'search engine', 'google search', 'organic traffic'],
      a: 'Website plans include SEO setup. Our web-development deliverables include titles, meta descriptions, clean URLs, sitemap, schema markup and speed optimisation. For ongoing work, the Advanced SEO add-on is listed from <b>$25/month</b> and includes ongoing on-page and technical SEO with monthly performance reports. The site notes that early movement often takes 6–12 weeks, while stronger results may take 3–6 months depending on competition; rankings are not guaranteed. <a href="/services/digital-marketing/">Digital Marketing &amp; SEO</a>.' },

    { k: ['social media', 'facebook marketing', 'instagram marketing', 'content strategy', 'email marketing', 'email campaign', 'sem', 'analytics report'],
      a: 'Our Digital Marketing service covers SEO and SEM, social media management, content strategy, email marketing automation, analytics and monthly reporting. <a href="/services/digital-marketing/">Digital Marketing details</a>. For email newsletter signup and automation setup, see the $20 one-time add-on on our <a href="/pricing/">pricing page</a>.' },

    { k: ['pos', 'point of sale', 'inventory', 'billing', 'cashier', 'retail', 'stock management'],
      a: 'We develop custom POS applications for shops, cafés, restaurants and service counters. Listed capabilities include Windows POS systems, real-time inventory management, sales analytics and reports, multi-location support and integrations with existing tools where APIs are available. <a href="/services/pos-applications/">POS details</a>.' },

    { k: ['restaurant', 'restaurant ordering', 'food ordering', 'table order', 'kitchen order', 'menu system'],
      a: 'Our Restaurant Ordering demo shows a mobile menu, table-based dine-in ordering and a kitchen-ready order flow for cafés, restaurants, hotels and food courts. We also build custom POS applications. <a href="/demos/">Try the live demos</a> · <a href="/services/pos-applications/">POS Applications</a>.' },

    { k: ['how long', 'timeline', 'time', 'duration', 'days', 'weeks', 'deadline', 'turnaround', 'deliver', 'when will', 'project take'],
      a: '<b>Typical website timelines</b><br>• Basic website: 3–5 days<br>• Professional website: 1–2 weeks<br>• Business / e-commerce project: 2–4 weeks<br>These depend on the agreed scope and how quickly content and feedback are provided. INFLUXYN typically starts within 3–5 business days after the initial consultation and agreement.' },

    { k: ['start project', 'when can you start', 'project start', 'start work', 'begin work'],
      a: 'INFLUXYN typically starts a project within <b>3–5 business days</b> after the initial consultation and agreement. First, the team discusses your goals, scope, plan and timeline. <a href="/contact/">Request a free consultation</a>.' },

    { k: ['payment', 'pay', 'paying', 'bank', 'transfer', 'cash', 'card', 'credit card', 'deposit', 'advance', 'invoice', 'installment'],
      a: 'The listed payment methods are <b>cash in hand for local clients in Colombo and nearby areas</b> and <b>online bank transfer</b>. Credit cards are not accepted at this time. A <b>50% deposit</b> is required to begin work; the balance is due before final delivery. Bank transfers typically clear in 1–2 business days, and invoices are payable within 7 days unless agreed otherwise.' },

    { k: ['hosting', 'domain', 'host', 'free domain', 'website hosting', '.lk', '.com'],
      a: 'The pricing page states that <b>free hosting and a domain are included in every website plan</b> (Basic, Professional, Business and Enterprise). Third-party services, plugins or integrations may have their own terms and fees. <a href="/pricing/">Compare plans</a>.' },

    { k: ['support', 'maintenance', 'update', 'updates', 'backup', 'backups', 'bug', 'fix', 'after launch', 'technical assistance'],
      a: '<b>Included support periods</b><br>• Basic: 1 month<br>• Professional: 3 months<br>• Business: 6 months<br>• Enterprise: 12 months<br>Support covers bug fixes, minor updates, technical assistance and guidance. Monthly maintenance can cover updates, backups and security monitoring. <a href="/blog/website-maintenance-what-it-covers/">What website maintenance covers</a>.' },

    { k: ['satisfaction guarantee', 'revision', 'revisions', 'not satisfied', 'design changes'],
      a: 'The pricing page lists a <b>100% Satisfaction Guarantee</b> for the initial design: if you are not completely satisfied with the initial design, INFLUXYN will revise it until you are, at no extra cost. Significant changes beyond the agreed project scope may be quoted separately under the Terms of Service.' },

    { k: ['upgrade', 'change plan', 'switch plan'],
      a: 'Yes. You can upgrade your plan later and pay only the difference between your current plan and the new plan. <a href="/pricing/">Compare plans</a>.' },

    { k: ['custom', 'quote', 'estimate', 'proposal', 'free quote', 'consultation', 'get started', 'hire'],
      a: 'INFLUXYN offers a free consultation and custom quote if your project does not fit a standard plan. You can request a consultation through the <a href="/contact/">contact form</a> or <a href="' + WA + '?text=Hi%20INFLUXYN" target="_blank" rel="noopener">WhatsApp</a>. The website says the team aims to respond within 24 hours.' },

    { k: ['contact', 'phone', 'call', 'number', 'email', 'mail', 'whatsapp', 'reach', 'talk to', 'speak', 'human', 'person'],
      a: '<b>Contact INFLUXYN</b><br>📞 <a href="tel:+94750348396">+94 75 034 8396</a><br>✉️ <a href="mailto:yagiinfluxsolutions@gmail.com">yagiinfluxsolutions@gmail.com</a><br>💬 <a href="' + WA + '?text=Hi%20INFLUXYN" target="_blank" rel="noopener">WhatsApp us</a><br>Or use the <a href="/contact/">contact form</a>. The team aims to respond within 24 hours.' },

    { k: ['hours', 'open', 'opening', 'closed', 'office hours', 'working hours', 'sunday', 'saturday'],
      a: '<b>Business hours (Sri Lanka Time, UTC+5:30)</b><br>Monday–Thursday: 9:00 AM–6:00 PM<br>Friday: 9:00 AM–5:00 PM<br>Saturday: 10:00 AM–2:00 PM<br>Sunday: Closed.' },

    { k: ['where', 'location', 'address', 'office', 'colombo', 'visit', 'map'],
      a: '📍 <b>92/38, St Mary’s Lane, Mattakkuliya, Colombo 15, Sri Lanka.</b><br>Office visits are by appointment only. INFLUXYN also works with clients across Sri Lanka and worldwide through email, video calls and messaging.' },

    { k: ['international', 'abroad', 'overseas', 'worldwide', 'foreign', 'usa', 'uk', 'australia', 'dubai'],
      a: 'Yes. INFLUXYN works with clients worldwide through email, video calls and messaging. The company is based in Colombo, Sri Lanka. <a href="/contact/">Contact the team</a> to discuss your location and project.' },

    { k: ['portfolio', 'projects', 'work', 'examples', 'previous', 'clients', 'case study', 'sample'],
      a: 'The Projects page lists work across education, travel and tourism, food and beverage, logistics, IT solutions, eco and sustainability, and professional services. Featured examples include Fairy’s Educational, Deep Sri Lanka, Personal Portfolio, Supersun Vege Foods, SLR Cargo, YAGI Influx Solution, Eco Creation and United Professional. <a href="/projects/">Explore the portfolio</a>.' },

    { k: ['demo', 'demos', 'invitation', 'invitations', 'queue', 'queueflow', 'photo sharing', 'event photos'],
      a: 'You can try four live demos:<br>• Online Invitations – digital invitations with shareable links, countdowns, galleries and RSVP-ready flows<br>• QueueFlow – queue position and estimated wait-time display<br>• Restaurant Ordering – mobile menu, table orders and kitchen flow<br>• Event Photo Sharing – a shared event photo gallery<br><a href="/demos/">Open the live demos page</a>.' },

    { k: ['process', 'how do you work', 'how it works', 'steps', 'workflow', 'what happens after contact'],
      a: 'Our process is collaborative:<br><b>1. Discovery:</b> Understand your business, goals and audience.<br><b>2. Design &amp; Plan:</b> Agree the solution, designs, scope and roadmap.<br><b>3. Build &amp; Test:</b> Develop and test on real devices and browsers, sharing progress for review.<br><b>4. Launch &amp; Grow:</b> Go live with analytics, SEO and support.<br>A free 20–30 minute demo call can be arranged. <a href="/how-we-work/">Read how we work</a>.' },

    { k: ['about', 'who are you', 'company', 'founder', 'yagi', 'team', 'yagika'],
      a: 'INFLUXYN is the digital solutions brand of <b>YAGI Influx Solutions</b>, founded in 2024 and based in Colombo, Sri Lanka. The website identifies Asantha Yagika Silva as Founder &amp; Lead Developer. The company serves clients in Sri Lanka and worldwide. <a href="/about/">About INFLUXYN</a>.' },

    { k: ['blog', 'article', 'articles', 'guide', 'guides', 'tips'],
      a: 'The INFLUXYN blog shares practical guides about website costs, WordPress vs custom websites, digital invitations, SEO, Google Business Profile, website maintenance, choosing a web developer, online stores and AI automation. <a href="/blog/">Browse the blog</a>.' },

    { k: ['privacy', 'terms', 'policy', 'refund', 'ownership', 'own the', 'intellectual property', 'confidential'],
      a: 'The <a href="/terms/">Terms of Service</a> explain project scope, revisions, payments, ownership and other service terms. The <a href="/privacy/">Privacy Policy</a> explains how enquiry and website information is handled. Approved final deliverables transfer to the client once full payment is complete.' },

    { k: ['not listed', 'other service', 'something else', 'custom software', 'custom system', 'integrate', 'integration'],
      a: 'If your requirement is not listed, tell us what you want to achieve. INFLUXYN can assess custom development and integrations during a free consultation. <a href="/contact/">Share your project details</a> or <a href="' + WA + '?text=Hi%20INFLUXYN" target="_blank" rel="noopener">message the team on WhatsApp</a>.' }
  ];

  var CHIPS = ['Pricing', 'Services', 'Website timeline', 'Live demos', 'Payment methods', 'Contact'];
  var FALLBACK = 'I\'m not certain based on the information published on our website. For an accurate answer, please message the team — <a href="' + WA + '?text=" target="_blank" rel="noopener" data-wa>ask on WhatsApp</a> or use the <a href="/contact/">contact form</a>. You can also ask about website plans, e-commerce, AI chatbots, SEO, branding, POS systems, timelines or live demos.';

  /* ---------- matching ---------- */
  function norm(s) { return ' ' + s.toLowerCase().replace(/[^a-z0-9.\-+ ]+/g, ' ').replace(/\s+/g, ' ').trim() + ' '; }
  function answer(q) {
    var n = norm(q), best = null, bestScore = 0;
    for (var i = 0; i < INTENTS.length; i++) {
      var sc = 0, ks = INTENTS[i].k;
      for (var j = 0; j < ks.length; j++) {
        var key = ks[j];
        if (n.indexOf(' ' + key + ' ') > -1 || (key.length > 4 && n.indexOf(key) > -1)) { sc += key.indexOf(' ') > -1 ? 2 : 1; }
      }
      if (INTENTS[i].greet && sc && n.trim().split(' ').length > 3) sc = 0; /* "hi" inside a long question is not a greeting */
      if (sc > bestScore) { bestScore = sc; best = INTENTS[i]; }
    }
    return best ? best.a : FALLBACK.replace('?text=', '?text=' + encodeURIComponent('Hi INFLUXYN, ' + q));
  }
  if (typeof window !== 'undefined') window.__ixAnswer = answer;

  /* ---------- UI ---------- */
  var CSS = '#ixAI,#ixAI *{box-sizing:border-box}' +
    '#ixAI{position:fixed;left:18px;bottom:18px;z-index:96;font-family:Inter,Arial,sans-serif;--ai-blue:#3d8fc4;--ai-navy:#1b2f4b}' +
    '#ixAI .ai-fab{display:flex;align-items:center;gap:10px;height:56px;padding:0 20px 0 16px;border:0;border-radius:999px;background:var(--ai-navy);color:#fff;font:600 14px Inter,Arial,sans-serif;cursor:pointer;box-shadow:0 10px 30px rgba(0,0,0,.28);transition:transform .2s ease}' +
    '#ixAI .ai-fab:hover{transform:translateY(-2px)}' +
    '#ixAI .ai-fab svg{color:var(--ai-blue);flex-shrink:0}' +
    '#ixAI .ai-fab .ai-dot{width:9px;height:9px;border-radius:50%;background:#2ecc71;box-shadow:0 0 0 3px rgba(46,204,113,.25)}' +
    '#ixAI .ai-panel{position:absolute;left:0;bottom:70px;width:min(370px,calc(100vw - 28px));height:min(540px,calc(100vh - 110px));display:flex;flex-direction:column;background:var(--surface,#fff);color:var(--ink,#0b1424);border:1px solid var(--line,#dfe6ef);border-radius:18px;box-shadow:0 24px 60px rgba(0,0,0,.35);overflow:hidden;opacity:0;visibility:hidden;transform:translateY(14px) scale(.98);transform-origin:bottom left;transition:opacity .22s,transform .22s,visibility .22s}' +
    '#ixAI.open .ai-panel{opacity:1;visibility:visible;transform:none}' +
    '#ixAI .ai-head{display:flex;align-items:center;gap:12px;padding:14px 16px;background:var(--ai-navy);color:#fff;flex-shrink:0}' +
    '#ixAI .ai-av{width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.12);display:grid;place-items:center;color:var(--ai-blue)}' +
    '#ixAI .ai-title{flex:1;line-height:1.25}#ixAI .ai-title b{display:block;font-size:15px}#ixAI .ai-title small{font-size:12px;opacity:.75}' +
    '#ixAI .ai-x{width:32px;height:32px;border:0;border-radius:50%;background:rgba(255,255,255,.12);color:#fff;font-size:18px;cursor:pointer}' +
    '#ixAI .ai-log{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;background:var(--bg,#f6f8fb)}' +
    '#ixAI .ai-msg{max-width:86%;padding:10px 13px;border-radius:14px;font-size:14px;line-height:1.5;word-wrap:break-word;animation:aiIn .2s ease both}' +
    '#ixAI .ai-msg a{color:var(--ai-blue);font-weight:600;text-decoration:underline}' +
    '#ixAI .ai-bot{align-self:flex-start;background:var(--surface,#fff);border:1px solid var(--line,#dfe6ef);border-bottom-left-radius:4px}' +
    '#ixAI .ai-me{align-self:flex-end;background:var(--ai-blue);color:#fff;border-bottom-right-radius:4px}' +
    '#ixAI .ai-typing{display:inline-flex;gap:4px;padding:13px 14px}#ixAI .ai-typing span{width:6px;height:6px;border-radius:50%;background:var(--muted,#8a98ab);animation:aiDot 1s infinite ease-in-out}' +
    '#ixAI .ai-typing span:nth-child(2){animation-delay:.15s}#ixAI .ai-typing span:nth-child(3){animation-delay:.3s}' +
    '#ixAI .ai-chips{display:flex;flex-wrap:wrap;gap:7px;padding:0 16px 12px;background:var(--bg,#f6f8fb)}' +
    '#ixAI .ai-chips button{padding:7px 12px;border:1px solid var(--ai-blue);border-radius:999px;background:transparent;color:var(--ai-blue);font:600 12.5px Inter,Arial,sans-serif;cursor:pointer}' +
    '#ixAI .ai-chips button:hover{background:var(--ai-blue);color:#fff}' +
    '#ixAI .ai-form{display:flex;gap:8px;padding:12px;border-top:1px solid var(--line,#dfe6ef);background:var(--surface,#fff);flex-shrink:0}' +
    '#ixAI .ai-form input{flex:1;min-width:0;height:42px;padding:0 14px;border:1px solid var(--line,#dfe6ef);border-radius:999px;background:var(--bg,#f6f8fb);color:var(--ink,#0b1424);font:14px Inter,Arial,sans-serif;outline:0}' +
    '#ixAI .ai-form input:focus{border-color:var(--ai-blue)}' +
    '#ixAI .ai-form button{width:42px;height:42px;border:0;border-radius:50%;background:var(--ai-blue);color:#fff;font-size:15px;cursor:pointer;flex-shrink:0}' +
    '@keyframes aiIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}' +
    '@keyframes aiDot{0%,80%,100%{opacity:.3;transform:scale(.8)}40%{opacity:1;transform:scale(1)}}' +
    '@media (max-width:480px){#ixAI{left:12px;bottom:12px}#ixAI .ai-fab span.ai-lbl{display:none}#ixAI .ai-fab{width:52px;height:52px;padding:0;justify-content:center}#ixAI .ai-fab .ai-dot{display:none}#ixAI .ai-panel{bottom:64px}}';

  function init() {
    if (document.getElementById('ixAI')) return;
    var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    var root = document.createElement('div'); root.id = 'ixAI';
    root.innerHTML =
      '<div class="ai-panel" role="dialog" aria-label="' + NAME + '" aria-hidden="true">' +
        '<div class="ai-head"><div class="ai-av"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="8" width="16" height="11" rx="3"/><path d="M12 8V4M9 13h.01M15 13h.01"/></svg></div>' +
        '<div class="ai-title"><b>' + NAME + '</b><small>Ask about pricing, services &amp; timelines</small></div>' +
        '<button type="button" class="ai-x" aria-label="Close chat">&times;</button></div>' +
        '<div class="ai-log" aria-live="polite"></div><div class="ai-chips"></div>' +
        '<form class="ai-form" autocomplete="off"><input type="text" maxlength="200" placeholder="Type your question…" aria-label="Your question"><button type="submit" aria-label="Send"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/></svg></button></form>' +
      '</div>' +
      '<button type="button" class="ai-fab" aria-label="Open chat assistant" aria-expanded="false"><span class="ai-dot"></span><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"/></svg><span class="ai-lbl">Ask us</span></button>';
    document.body.appendChild(root);

    var panel = root.querySelector('.ai-panel'), log = root.querySelector('.ai-log'), chips = root.querySelector('.ai-chips'),
        form = root.querySelector('form'), input = form.querySelector('input'), fab = root.querySelector('.ai-fab'), started = false;

    function add(html, me) {
      var d = document.createElement('div'); d.className = 'ai-msg ' + (me ? 'ai-me' : 'ai-bot');
      if (me) d.textContent = html; else d.innerHTML = html;
      log.appendChild(d); log.scrollTop = log.scrollHeight; return d;
    }
    function ask(q) {
      q = (q || '').trim(); if (!q) return;
      add(q, true);
      var t = add('<span class="ai-typing"><span></span><span></span><span></span></span>', false);
      setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); add(answer(q), false); }, 450);
    }
    function open(o) {
      root.classList.toggle('open', o); panel.setAttribute('aria-hidden', o ? 'false' : 'true'); fab.setAttribute('aria-expanded', o ? 'true' : 'false');
      if (o) {
        if (!started) { started = true; add(INTENTS[0].a, false); }
        setTimeout(function () { input.focus(); }, 250);
      }
    }
    CHIPS.forEach(function (c) {
      var b = document.createElement('button'); b.type = 'button'; b.textContent = c;
      b.addEventListener('click', function () { ask(c); }); chips.appendChild(b);
    });
    fab.addEventListener('click', function () { open(!root.classList.contains('open')); });
    root.querySelector('.ai-x').addEventListener('click', function () { open(false); });
    form.addEventListener('submit', function (e) { e.preventDefault(); var v = input.value; input.value = ''; ask(v); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && root.classList.contains('open')) open(false); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
})();
