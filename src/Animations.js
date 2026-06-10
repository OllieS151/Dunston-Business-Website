// Animations runtime — reveal-on-scroll, route-change safe.

(function () {
  window.__DBV_ANIM_LOADED = true;
  const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Single shared observer.
  const io = REDUCE ? null : new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // Also reveal the .reveal-stagger inside (it's keyed off its own class)
        const stagger = entry.target.querySelector(':scope > .container.reveal-stagger');
        if (stagger) stagger.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -6% 0px',
    threshold: 0.04,
  });

  function tagOne(section) {
    if (section.dataset.revealBound) return;
    if (section.dataset.noReveal) return;
    section.dataset.revealBound = '1';
    section.classList.add('reveal-prep');
    // Stagger direct children of the inner .container (if reasonable count).
    const container = section.querySelector(':scope > .container');
    if (container && container.children.length >= 2 && container.children.length <= 12) {
      container.classList.add('reveal-stagger');
    }
    if (REDUCE) {
      section.classList.add('in-view');
      if (container) container.classList.add('in-view');
      return;
    }
    // If element is ALREADY intersecting at this moment, fire immediately on next frame.
    // This handles sections that mount already in viewport (e.g. the hero).
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh && rect.bottom > 0) {
      // Already on screen — schedule activation to allow CSS transition to register.
      requestAnimationFrame(() => requestAnimationFrame(() => {
        section.classList.add('in-view');
        if (container) container.classList.add('in-view');
      }));
    } else {
      io.observe(section);
    }
  }

  function tagAll(root) {
    (root || document).querySelectorAll('section:not([data-reveal-bound])').forEach(tagOne);
  }

  // Run on initial paint and again briefly later (Babel JSX may still be compiling).
  function start() {
    tagAll(document);
    setTimeout(() => tagAll(document), 200);
    setTimeout(() => tagAll(document), 800);

    const root = document.getElementById('root');
    if (!root) return;
    let pending = false;
    const mo = new MutationObserver(() => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        tagAll(root);
      });
    });
    mo.observe(root, { childList: true, subtree: true });

    // Expose for the router to call on navigation.
    window.__DBV_RETAG = () => tagAll(document);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
