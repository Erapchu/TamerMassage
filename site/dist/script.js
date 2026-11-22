const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
document.querySelectorAll('[data-theme-option]').forEach((button) => {
  button.addEventListener('click', () => setTheme(button.dataset.themeOption));
});
setTheme(document.documentElement.dataset.theme);

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  updateMenuLabel();
  nav.classList.toggle('open', !open);
  document.body.classList.toggle('menu-open', !open);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    updateMenuLabel();
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
  });
});

document.querySelectorAll('[data-tabs]').forEach((tabs) => {
  const tabButtons = [...tabs.querySelectorAll('[role="tab"]')];
  const panels = [...tabs.querySelectorAll('[role="tabpanel"]')];

  const activate = (nextTab) => {
    tabButtons.forEach((tab) => {
      const active = tab === nextTab;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    panels.forEach((panel) => {
      panel.hidden = panel.id !== nextTab.getAttribute('aria-controls');
    });
  };

  tabButtons.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const direction = document.documentElement.dir === 'rtl' ? -1 : 1;
      const offset = (event.key === 'ArrowRight' ? 1 : -1) * direction;
      const next = tabButtons[(index + offset + tabButtons.length) % tabButtons.length];
      activate(next);
      next.focus();
    });
  });
});

const contactButton = document.querySelector('#contact-button');
const contactDetails = document.querySelector('#contact-details');
contactButton?.addEventListener('click', (event) => {
  event.preventDefault();
  contactDetails.classList.add('visible');
  contactButton.setAttribute('aria-expanded', 'true');
  contactDetails.focus();
});

const addressButton = document.querySelector('#address-button');
const addressDetails = document.querySelector('#address-details');
addressButton?.addEventListener('click', () => {
  const visible = addressDetails.classList.toggle('visible');
  addressButton.setAttribute('aria-expanded', String(visible));
  if (visible) addressDetails.focus();
});

const showcaseVideo = document.querySelector('.showcase-video');
if (showcaseVideo) {
  // Keep the clip silent and play it only while it is on screen, so it never
  // downloads for visitors who stay on the first screen.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    showcaseVideo.controls = true;
  } else if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const playing = showcaseVideo.play();
          if (playing) playing.catch(() => {});
        } else {
          showcaseVideo.pause();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(showcaseVideo);
  } else {
    const playing = showcaseVideo.play();
    if (playing) playing.catch(() => {});
  }
}

const feedbackTrack = document.querySelector('.feedback-track');
if (feedbackTrack) {
  const feedbackButtons = [...document.querySelectorAll('[data-feedback-dir]')];
  const isRtl = () => document.documentElement.dir === 'rtl';
  const cardStep = () => {
    const card = feedbackTrack.querySelector('li');
    if (!card) return feedbackTrack.clientWidth * 0.8;
    const gap = parseFloat(getComputedStyle(feedbackTrack).columnGap) || 0;
    return card.getBoundingClientRect().width + gap;
  };
  const syncFeedbackButtons = () => {
    const max = feedbackTrack.scrollWidth - feedbackTrack.clientWidth - 1;
    const pos = Math.abs(feedbackTrack.scrollLeft);
    feedbackButtons.forEach((button) => {
      const backwards = Number(button.dataset.feedbackDir) < 0;
      button.disabled = backwards ? pos <= 1 : pos >= max;
    });
  };
  const scrollFeedback = (direction, cards) => {
    const sign = direction * (isRtl() ? -1 : 1);
    feedbackTrack.scrollBy({ left: sign * cardStep() * cards, behavior: 'smooth' });
  };
  feedbackButtons.forEach((button) => {
    button.addEventListener('click', () => {
      scrollFeedback(Number(button.dataset.feedbackDir), 2);
      restartAutoplay();
    });
  });
  feedbackTrack.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    scrollFeedback(event.key === 'ArrowRight' ? 1 : -1, 1);
    restartAutoplay();
  });
  feedbackTrack.addEventListener('scroll', syncFeedbackButtons, { passive: true });
  window.addEventListener('resize', syncFeedbackButtons);

  // Autoplay: drift one card at a time, loop back to the start, and stay out of
  // the way while the visitor is looking at, hovering or scrolling the strip.
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const AUTOPLAY_DELAY = 4500;
  let autoplayTimer = null;
  let autoplayOnScreen = false;
  let autoplayHeld = false;

  const autoplayAllowed = () => !reduceMotion.matches && !document.hidden && autoplayOnScreen && !autoplayHeld;

  const stopAutoplay = () => {
    if (autoplayTimer) window.clearInterval(autoplayTimer);
    autoplayTimer = null;
  };

  const startAutoplay = () => {
    stopAutoplay();
    if (!autoplayAllowed()) return;
    autoplayTimer = window.setInterval(() => {
      if (!autoplayAllowed()) return;
      const max = feedbackTrack.scrollWidth - feedbackTrack.clientWidth - 1;
      if (Math.abs(feedbackTrack.scrollLeft) >= max) {
        feedbackTrack.scrollTo({ left: 0, behavior: 'auto' });
        syncFeedbackButtons();
      } else {
        scrollFeedback(1, 1);
      }
    }, AUTOPLAY_DELAY);
  };

  const restartAutoplay = () => startAutoplay();

  feedbackTrack.addEventListener('pointerenter', () => {
    autoplayHeld = true;
    stopAutoplay();
  });
  feedbackTrack.addEventListener('pointerleave', () => {
    autoplayHeld = false;
    startAutoplay();
  });
  feedbackTrack.addEventListener('focusin', () => {
    autoplayHeld = true;
    stopAutoplay();
  });
  feedbackTrack.addEventListener('focusout', () => {
    autoplayHeld = false;
    startAutoplay();
  });
  feedbackTrack.addEventListener('pointerdown', restartAutoplay, { passive: true });
  feedbackTrack.addEventListener('wheel', restartAutoplay, { passive: true });
  document.addEventListener('visibilitychange', () => (document.hidden ? stopAutoplay() : startAutoplay()));
  reduceMotion.addEventListener?.('change', () => (reduceMotion.matches ? stopAutoplay() : startAutoplay()));

  if ('IntersectionObserver' in window) {
    const autoplayObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        autoplayOnScreen = entry.isIntersecting;
        if (autoplayOnScreen) startAutoplay();
        else stopAutoplay();
      });
    }, { threshold: 0.35 });
    autoplayObserver.observe(feedbackTrack);
  } else {
    autoplayOnScreen = true;
    startAutoplay();
  }

  syncFeedbackButtons();
}

document.querySelector('#year').textContent = new Date().getFullYear();
