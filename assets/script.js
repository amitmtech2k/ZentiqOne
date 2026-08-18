(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var serviceRows = document.querySelectorAll('.service-row');
    if (serviceRows.length) {
      if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        var rowObserver = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.4 });
        serviceRows.forEach(function (el) { rowObserver.observe(el); });
      } else {
        serviceRows.forEach(function (el) { el.classList.add('in-view'); });
      }
    }

    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');
    if (!toggle || !links) return;

    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    var navAnchors = links.querySelectorAll('a');
    for (var i = 0; i < navAnchors.length; i++) {
      navAnchors[i].addEventListener('click', function () {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    }

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var revealEls = document.querySelectorAll('.reveal');
      if ('IntersectionObserver' in window && revealEls.length) {
        var revealObserver = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15 });
        revealEls.forEach(function (el) { revealObserver.observe(el); });
      } else {
        revealEls.forEach(function (el) { el.classList.add('is-visible'); });
      }
    } else {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
    }
  });
})();
