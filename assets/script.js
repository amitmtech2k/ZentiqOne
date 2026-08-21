(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.site-header');
    if (header) {
      var setScrolled = function () {
        if (window.scrollY > 8) { header.classList.add('is-scrolled'); }
        else { header.classList.remove('is-scrolled'); }
      };
      setScrolled();
      window.addEventListener('scroll', setScrolled, { passive: true });
    }

    var countEls = document.querySelectorAll('[data-count-to]');
    if (countEls.length) {
      var runCount = function (el) {
        var target = parseInt(el.getAttribute('data-count-to'), 10) || 0;
        var suffix = el.getAttribute('data-count-suffix') || '';
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          el.textContent = target + suffix;
          return;
        }
        var duration = 1200;
        var start = null;
        var step = function (ts) {
          if (start === null) start = ts;
          var progress = Math.min((ts - start) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (progress < 1) { requestAnimationFrame(step); }
        };
        requestAnimationFrame(step);
      };
      if ('IntersectionObserver' in window) {
        var countObserver = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              runCount(entry.target);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.6 });
        countEls.forEach(function (el) { countObserver.observe(el); });
      } else {
        countEls.forEach(runCount);
      }
    }

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

    var dropdown = document.querySelector('.nav-dropdown');
    var dropdownToggle = dropdown ? dropdown.querySelector('.nav-dropdown-toggle') : null;
    if (dropdown && dropdownToggle) {
      dropdownToggle.addEventListener('click', function () {
        var isOpen = dropdown.classList.toggle('is-open');
        dropdownToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
      document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('is-open');
          dropdownToggle.setAttribute('aria-expanded', 'false');
        }
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          dropdown.classList.remove('is-open');
          dropdownToggle.setAttribute('aria-expanded', 'false');
        }
      });
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
        if (dropdown) {
          dropdown.classList.remove('is-open');
          if (dropdownToggle) dropdownToggle.setAttribute('aria-expanded', 'false');
        }
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
