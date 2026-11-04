/* INFLUXYN motion: scroll-reveal animations, page-leave transition, scroll-to-top polish, terminal typing.
   Runs on every page. Tweak the timings in the CSS string / CFG below. */
(function () {
  'use strict';
  var d = document, de = d.documentElement, CFG = { stagger: 0.09, maxStagger: 8 };

  var CSS =
    /* scroll reveal (forced with !important so it also works when the OS has "reduce motion" on) */
    'html.ix-on .ix-a{opacity:0!important;transition:opacity .85s cubic-bezier(.2,.7,.2,1) var(--ixd,0s),transform .85s cubic-bezier(.2,.7,.2,1) var(--ixd,0s)!important}' +
    'html.ix-on .ix-a.ix-up{transform:translate3d(0,36px,0)!important}' +
    'html.ix-on .ix-a.ix-left{transform:translate3d(-44px,0,0)!important}' +
    'html.ix-on .ix-a.ix-right{transform:translate3d(44px,0,0)!important}' +
    'html.ix-on .ix-a.ix-zoom{transform:scale(.93)!important}' +
    'html.ix-on .ix-a.ix-in{opacity:1!important;transform:none!important}' +
    'html.ix-on{scroll-behavior:smooth}' +
    /* header slide-in when the page appears */
    '@keyframes ixHeadIn{from{transform:translateY(-100%);opacity:0}to{transform:none;opacity:1}}' +
    'html.ix-ready header{animation:ixHeadIn .7s cubic-bezier(.2,.7,.2,1) backwards!important}' +
    /* page leave overlay (same navy as the loader, so it flows into it) */
    '#ixPageOut{position:fixed;inset:0;background:#0d1522;z-index:2147483646;opacity:0;visibility:hidden;pointer-events:none;transition:opacity .3s ease,visibility .3s ease!important}' +
    '#ixPageOut.go{opacity:1;visibility:visible;pointer-events:all}' +
    /* terminal typing cursor */
    '.ixcur{display:inline-block;width:8px;height:1.05em;margin-left:2px;background:#3d8fc4;vertical-align:-3px;animation:ixBlink2 .9s steps(1) infinite!important}' +
    '@keyframes ixBlink2{50%{opacity:0}}' +
    '.term .ixl{min-height:1.8em}.term .ixl .g{margin-right:.4em}.term .ixl .y{margin-right:.4em}' +
    /* scroll-to-top: moved above the chat button, always animated */
    '.to-top{left:18px!important;bottom:calc(86px + env(safe-area-inset-bottom,0px))!important;transition:opacity .3s ease,transform .3s ease,visibility .3s ease,background .2s ease,color .2s ease!important}' +
    '.to-top.show{animation:ixPop .45s cubic-bezier(.2,.9,.3,1.4) both!important}' +
    '.to-top:hover i{animation:ixUp .6s ease infinite!important}' +
    '@keyframes ixPop{from{transform:translateY(14px) scale(.6);opacity:0}to{transform:none;opacity:1}}' +
    '@keyframes ixUp{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}' +
    '@media (max-width:480px){.to-top{left:12px!important;bottom:calc(76px + env(safe-area-inset-bottom,0px))!important}}';

  var st = d.createElement('style'); st.id = 'ixMotionCSS'; st.textContent = CSS; (d.head || de).appendChild(st);

  /* ---------- wait until the loading screen has gone ---------- */
  function afterLoader(cb) {
    var t = Date.now();
    (function poll() {
      var l = d.getElementById('airLoader');
      if (!l || l.classList.contains('al-hide') || de.classList.contains('al-timeout') || Date.now() - t > 7500) cb();
      else setTimeout(poll, 80);
    })();
  }

  /* ---------- scroll reveal ---------- */
  var supportsIO = 'IntersectionObserver' in window;
  function isGroup(el) {
    if (!el.children || el.children.length < 2 || el.children.length > 14) return false;
    var disp = getComputedStyle(el).display;
    return disp === 'grid' || disp === 'flex' || /grid|cards|plans|row|list/.test(el.className || '');
  }
  var targets = [];
  function add(el, kind, i) { if (el && !el.classList.contains('ix-a') && !el.closest('.ix-a')) { targets.push([el, kind, i || 0]); el.classList.add('ix-a'); } }
  function collect(block, depth) {
    if (!block || block.nodeType !== 1) return;
    var tag = block.tagName;
    if (/^(SCRIPT|STYLE|LINK|NAV|HEADER)$/.test(tag)) return;
    if (block.classList.contains('term') || block.tagName === 'IMG' || block.tagName === 'FIGURE') { add(block, 'zoom'); return; }
    if (depth < 2 && isGroup(block)) {
      var n = block.children.length, two = n === 2;
      for (var i = 0; i < n; i++) {
        var c = block.children[i];
        if (c.children.length >= 3 && depth < 1 && c.tagName === 'DIV' && !/card|plan/.test(c.className || '')) collect(c, depth + 1);
        else add(c, two ? (i === 0 ? 'left' : 'right') : 'up', i);
      }
      return;
    }
    if (depth < 1 && block.tagName === 'DIV' && block.children.length >= 3 && block.closest('.hero')) { collect2(block); return; }
    add(block, 'up', 0);
  }
  function collect2(block) { for (var i = 0; i < block.children.length; i++) add(block.children[i], 'up', i); }

  function setupReveal() {
    if (!supportsIO) return;
    var main = d.querySelector('main');
    if (main) {
      var hold = main.querySelectorAll(':scope > section, :scope > article');
      if (!hold.length) hold = [main];
      for (var i = 0; i < hold.length; i++) {
        var kids = hold[i].children;
        for (var j = 0; j < kids.length; j++) collect(kids[j], 0);
      }
    }
    var ft = d.querySelector('.site-footer');
    if (ft) { var inner = ft.querySelector('.container') || ft; for (var k = 0; k < inner.children.length; k++) collect(inner.children[k], 0); }

    de.classList.add('ix-on');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var el = e.target;
        if (!(e.isIntersecting || e.boundingClientRect.top < 0)) return;
        io.unobserve(el);
        var above = !e.isIntersecting; /* already scrolled past: show without animating */
        el.classList.add('ix-in');
        setTimeout(function () { el.classList.remove('ix-a', 'ix-up', 'ix-left', 'ix-right', 'ix-zoom', 'ix-in'); el.style.removeProperty('--ixd'); }, above ? 50 : 1400 + parseFloat(el.style.getPropertyValue('--ixd') || 0) * 1000);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    targets.forEach(function (t) {
      var el = t[0];
      el.classList.add('ix-' + t[1]);
      el.style.setProperty('--ixd', (Math.min(t[2], CFG.maxStagger) * CFG.stagger).toFixed(2) + 's');
    });
    /* start observing after the browser has painted the hidden state, so the first screen animates too */
    requestAnimationFrame(function () { requestAnimationFrame(function () { targets.forEach(function (t) { io.observe(t[0]); }); }); });
  }

  /* ---------- terminal typing ---------- */
  function setupTerminal() {
    var term = d.querySelector('.term'); if (!term) return;
    var pre = term.querySelector('pre'); if (!pre) return;
    var typedEl = pre.querySelector('#typed');
    var words = (typedEl && typedEl.getAttribute('data-t') ? typedEl.getAttribute('data-t') : 'your website|your online store|your brand|your AI chatbot|your POS app').split('|');
    pre.style.minHeight = pre.offsetHeight + 'px';
    var lines = [
      { m: '$', c: 'y', t: 'influxyn deploy --client you', s: 42 },
      { m: '\u2713', c: 'g', t: 'responsive layout ready', s: 26 },
      { m: '\u2713', c: 'g', t: 'SEO + schema configured', s: 26 },
      { m: '\u2713', c: 'g', t: 'hosting & domain connected', s: 26 },
      { m: '\u25B6', c: 'y', t: 'building ', s: 34, last: true }
    ];
    var started = false;
    function run() {
      if (started) return; started = true;
      pre.innerHTML = '';
      var cur = d.createElement('span'); cur.className = 'ixcur';
      var idx = 0;
      function nextLine() {
        if (idx >= lines.length) return;
        var L = lines[idx++], row = d.createElement('div'); row.className = 'ixl';
        var mk = d.createElement('span'); mk.className = L.c; mk.textContent = L.m;
        var tx = d.createElement('span'); row.appendChild(mk); row.appendChild(d.createTextNode(' ')); row.appendChild(tx); row.appendChild(cur); pre.appendChild(row);
        var i = 0;
        (function type() {
          tx.textContent = L.t.slice(0, ++i);
          if (i < L.t.length) return setTimeout(type, L.s + Math.random() * 28);
          if (L.last) { rotate(row); } else setTimeout(nextLine, 380);
        })();
      }
      function rotate(row) {
        var w = d.createElement('span'); row.insertBefore(w, cur);
        var wi = 0, ci = 0, del = false;
        (function tick() {
          var word = words[wi];
          w.textContent = word.slice(0, ci);
          if (!del && ci === word.length) { del = true; return setTimeout(tick, 1700); }
          if (del && ci === 0) { del = false; wi = (wi + 1) % words.length; return setTimeout(tick, 350); }
          ci += del ? -1 : 1;
          setTimeout(tick, del ? 38 : 80);
        })();
      }
      nextLine();
    }
    if (supportsIO) {
      var o = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { o.disconnect(); setTimeout(run, 650); } }, { threshold: 0.35 });
      o.observe(term);
    } else run();
  }

  /* ---------- page leave transition ---------- */
  function setupPageOut() {
    var ov = d.createElement('div'); ov.id = 'ixPageOut'; d.body.appendChild(ov);
    addEventListener('pageshow', function () { ov.classList.remove('go'); });
    d.addEventListener('click', function (e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest && e.target.closest('a[href]');
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) === '#' || /^(mailto:|tel:|javascript:|sms:|https:\/\/wa\.me)/i.test(href)) return;
      var u; try { u = new URL(a.href, location.href); } catch (x) { return; }
      if (u.origin !== location.origin || (u.pathname === location.pathname && u.search === location.search)) return;
      e.preventDefault();
      ov.classList.add('go');
      setTimeout(function () { location.href = u.href; }, 300);
      setTimeout(function () { ov.classList.remove('go'); }, 3000); /* safety if navigation is blocked */
    });
  }

  /* ---------- scroll to top: always smooth ---------- */
  function setupToTop() {
    d.addEventListener('click', function (e) {
      var b = e.target.closest && e.target.closest('.to-top');
      if (!b) return;
      e.preventDefault(); e.stopImmediatePropagation();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, true);
  }

  function boot() {
    setupPageOut(); setupToTop();
    afterLoader(function () {
      de.classList.add('ix-ready');
      setupReveal();
      setupTerminal();
    });
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', boot, { once: true }); else boot();
})();
