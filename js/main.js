// Sorø Idræts- & Kulturby – animationer og interaktion
(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Header-skygge ved scroll ---------- */
  var header = document.querySelector('.site-header');
  var isHome = document.body.classList.contains('home');
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > (isHome ? 80 : 8));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Scrollspy (one-pager) ---------- */
  var spySections = document.querySelectorAll('section[data-nav]');
  if (spySections.length) {
    var navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    spySections.forEach(function (s) { spy.observe(s); });

    // luk mobilmenuen efter klik på et anker
    navLinks.forEach(function (a) {
      a.addEventListener('click', function () {
        document.querySelector('.main-nav').classList.remove('open');
      });
    });
  }

  if (reducedMotion) return; // respekter brugerens indstilling

  /* ---------- Scroll-reveal ---------- */
  var revealSelectors = [
    '.section-head',
    '.card',
    '.stat',
    '.quote-card',
    '.team-card',
    '.phase',
    '.day-block',
    '.timeline li',
    '.split > *',
    '.cta-band',
    '.footer-grid > div'
  ];

  var elements = document.querySelectorAll(revealSelectors.join(','));
  elements.forEach(function (el) {
    if (el.closest('.split') && el.matches('.card, .stat')) {
      // stats/kort inde i split håndteres via forælderen
    }
    el.classList.add('reveal');
  });

  // stagger: forsinkelse pr. element inden for samme forælder
  var byParent = new Map();
  elements.forEach(function (el) {
    var p = el.parentElement;
    if (!byParent.has(p)) byParent.set(p, []);
    byParent.get(p).push(el);
  });
  byParent.forEach(function (els) {
    els.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i * 90, 450) + 'ms';
    });
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(function (el) { io.observe(el); });

  /* ---------- Tællere på statistik ---------- */
  function animateCounter(el) {
    var original = el.textContent;
    var match = original.match(/\d+/); // første tal i teksten
    if (!match) return;
    var target = parseInt(match[0], 10);
    var start = null;
    var duration = 1200;
    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = Math.round(eased * target);
      el.textContent = original.replace(match[0], value);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = original;
    }
    requestAnimationFrame(step);
  }

  var counterIo = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterIo.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('.stat .num').forEach(function (el) {
    counterIo.observe(el);
  });
})();
