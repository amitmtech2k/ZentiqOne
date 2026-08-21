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
      var timelineEl = document.querySelector('.service-timeline');
      var lineEl = document.querySelector('.service-timeline-line');
      var fillEl = lineEl ? lineEl.querySelector('.service-timeline-line-fill') : null;
      var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reducedMotion) {
        serviceRows.forEach(function (el) { el.classList.add('in-view'); });
        if (fillEl) fillEl.style.height = '100%';
      } else {
        // Desktop: one continuous line whose fill height and every row's
        // active state are derived from a single scroll-progress value, so
        // the line, the icon highlight, and the content reveal can never
        // fall out of sync. Mobile (line hidden, row-reverse layout): a
        // simple one-time per-row IntersectionObserver reveal instead.
        var desktopQuery = window.matchMedia('(min-width: 901px)');
        var scrollHandler = null;
        var resizeHandler = null;
        var rowObserver = null;

        var teardown = function () {
          if (scrollHandler) { window.removeEventListener('scroll', scrollHandler); scrollHandler = null; }
          if (resizeHandler) {
            window.removeEventListener('resize', resizeHandler);
            window.removeEventListener('load', resizeHandler);
            resizeHandler = null;
          }
          if (rowObserver) { rowObserver.disconnect(); rowObserver = null; }
        };

        var startMobileReveal = function () {
          teardown();
          serviceRows.forEach(function (el) { el.classList.remove('in-view'); });
          if ('IntersectionObserver' in window) {
            rowObserver = new IntersectionObserver(function (entries, observer) {
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
        };

        var startDesktopLine = function () {
          teardown();
          if (!timelineEl || !lineEl || !fillEl) { startMobileReveal(); return; }
          serviceRows.forEach(function (el) { el.classList.remove('in-view'); });

          var iconOffsets = [];
          var lineHeightPx = 0;
          var ticking = false;

          var measure = function () {
            var firstIcon = serviceRows[0].querySelector('.service-icon');
            var lastIcon = serviceRows[serviceRows.length - 1].querySelector('.service-icon');
            if (!firstIcon || !lastIcon) return;
            var timelineRect = timelineEl.getBoundingClientRect();
            var firstRect = firstIcon.getBoundingClientRect();
            var lastRect = lastIcon.getBoundingClientRect();
            var topOffset = (firstRect.top + firstRect.height / 2) - timelineRect.top;
            var bottomOffset = timelineRect.bottom - (lastRect.top + lastRect.height / 2);
            lineEl.style.top = topOffset + 'px';
            lineEl.style.bottom = Math.max(bottomOffset, 0) + 'px';

            var lineRect = lineEl.getBoundingClientRect();
            lineHeightPx = lineRect.height;
            iconOffsets = [];
            serviceRows.forEach(function (row) {
              var icon = row.querySelector('.service-icon');
              var iconRect = icon.getBoundingClientRect();
              iconOffsets.push((iconRect.top + iconRect.height / 2) - lineRect.top);
            });
          };

          var update = function () {
            ticking = false;
            var lineRect = lineEl.getBoundingClientRect();
            var refY = window.innerHeight * 0.5;
            var filledPx = Math.max(0, Math.min(refY - lineRect.top, lineHeightPx));
            var progress = lineHeightPx ? filledPx / lineHeightPx : 0;
            fillEl.style.height = (progress * 100) + '%';
            serviceRows.forEach(function (row, i) {
              if (filledPx >= iconOffsets[i]) { row.classList.add('in-view'); }
              else { row.classList.remove('in-view'); }
            });
          };

          scrollHandler = function () {
            if (!ticking) { ticking = true; requestAnimationFrame(update); }
          };
          resizeHandler = function () { measure(); update(); };

          measure();
          update();
          window.addEventListener('scroll', scrollHandler, { passive: true });
          window.addEventListener('resize', resizeHandler);
          window.addEventListener('load', resizeHandler);
        };

        var applyTimelineMode = function () {
          if (desktopQuery.matches) { startDesktopLine(); }
          else { startMobileReveal(); }
        };

        applyTimelineMode();
        if (desktopQuery.addEventListener) {
          desktopQuery.addEventListener('change', applyTimelineMode);
        } else if (desktopQuery.addListener) {
          desktopQuery.addListener(applyTimelineMode);
        }
      }
    }

    var islandPanels = document.querySelectorAll('.island-panel');
    islandPanels.forEach(function (panel) {
      var trigger = panel.querySelector('.island-trigger');
      if (!trigger) return;
      trigger.addEventListener('click', function () {
        var isOpen = panel.classList.toggle('is-open');
        trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    });

    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
      var trigger = item.querySelector('.faq-trigger');
      if (!trigger) return;
      trigger.addEventListener('click', function () {
        var isOpen = item.classList.toggle('is-open');
        trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    });

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
