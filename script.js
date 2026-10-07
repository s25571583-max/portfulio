/* =========================================================================
   Abdo Elmasry — Portfolio
   Vanilla JS. No frameworks.
   ========================================================================= */

(function () {
  'use strict';

  const projects = window.PROJECTS || [];
  const CATEGORIES = ['All', 'Automotive', 'Product', 'Campaign', 'Commercial', 'Brand Film'];

  /* ---------------- helpers ---------------- */
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const pad = (n) => String(n).padStart(2, '0');

  function driveThumb(id) {
    return `https://drive.google.com/thumbnail?id=${id}&sz=w1920`;
  }
  function drivePreview(id) {
    return `https://drive.google.com/file/d/${id}/preview`;
  }
  function localThumb(id) {
    return `assets/thumbnails/${id}.jpg`;
  }

  /* Create <img> element with fallback chain:
     1) local thumbnail    → 2) drive thumbnail → 3) placeholder text bg */
  function makeThumb(project, indexLabel) {
    const wrap = document.createElement('div');
    wrap.className = 'thumb-wrap';
    wrap.style.width = '100%';
    wrap.style.height = '100%';
    wrap.style.position = 'absolute';
    wrap.style.inset = '0';

    const fb = document.createElement('span');
    fb.className = 'fallback';
    fb.textContent = indexLabel;

    const img = document.createElement('img');
    img.alt = `${project.title} — ${project.category} still`;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.src = localThumb(project.id);

    let stage = 0; // 0=local, 1=drive, 2=fail
    img.addEventListener('error', () => {
      if (stage === 0) {
        stage = 1;
        img.src = driveThumb(project.driveId);
      } else {
        stage = 2;
        img.remove();
      }
    });

    wrap.appendChild(fb);
    wrap.appendChild(img);
    return wrap;
  }

  /* ---------------- Header scroll ---------------- */
  const header = $('#siteHeader');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------- Mobile nav ---------------- */
  const navToggle = $('#navToggle');
  const mobileNav = $('#mobileNav');
  navToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    mobileNav.setAttribute('aria-hidden', String(!open));
  });
  $$('a', mobileNav).forEach(a => a.addEventListener('click', () => {
    mobileNav.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
  }));

  /* ---------------- Hero counter + slideshow ---------------- */
  $('#heroCount').textContent = `${pad(1)} / ${pad(projects.length)}`;

  const slidesEl = $('#heroSlides');
  const heroSet = projects.filter(p => p.featured).length ? projects.filter(p => p.featured) : projects.slice(0, 5);
  heroSet.forEach((p, i) => {
    const s = document.createElement('div');
    s.className = 'hero-slide is-fallback';
    s.dataset.label = String(p.title || '').split(' ').slice(0, 2).join(' ');
    // Try to load drive thumb (no local check for hero to keep flow simple; local
    // still works if you drop the file at assets/thumbnails/{id}.jpg — we test
    // local first via a preflight Image()):
    const test = new Image();
    test.onload = () => {
      s.style.backgroundImage = `url("${test.src}")`;
      s.classList.remove('is-fallback');
    };
    test.onerror = () => {
      const drv = new Image();
      drv.onload = () => {
        s.style.backgroundImage = `url("${drv.src}")`;
        s.classList.remove('is-fallback');
      };
      drv.onerror = () => { /* keep fallback text bg */ };
      drv.src = driveThumb(p.driveId);
    };
    test.src = localThumb(p.id);
    if (i === 0) s.classList.add('is-active');
    slidesEl.appendChild(s);
  });

  // Rotate every 5.5s
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && heroSet.length > 1) {
    let idx = 0;
    setInterval(() => {
      const slides = $$('.hero-slide', slidesEl);
      slides[idx].classList.remove('is-active');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add('is-active');
    }, 5500);
  }

  /* ---------------- Selected Work ---------------- */
  const selectedGrid = $('#selectedGrid');
  const selectedList = projects.filter(p => p.featured).slice(0, 3);
  selectedList.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'sel-card' + (i === 0 ? ' wide' : '');
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${p.title} — open project`);

    const thumb = document.createElement('div');
    thumb.className = 'sel-thumb';
    thumb.appendChild(makeThumb(p, pad(i + 1)));
    card.appendChild(thumb);

    const play = document.createElement('div');
    play.className = 'sel-play';
    play.innerHTML = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6 4l10 6-10 6V4z" fill="#EDEBE7"/></svg>';
    card.appendChild(play);

    const meta = document.createElement('div');
    meta.className = 'sel-meta';
    meta.innerHTML = `<h3>${p.title}</h3><span class="cat">${p.category}</span>`;
    card.appendChild(meta);

    const openIt = () => openProjectById(p.id);
    card.addEventListener('click', openIt);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openIt(); }
    });
    selectedGrid.appendChild(card);
  });

  /* ---------------- Grid ---------------- */
  const grid = $('#grid');
  const workNote = $('#workNote');
  workNote.textContent = `${pad(projects.length)} projects · Filter by category`;
  document.title = `Abdo Elmasry — ${projects.length} AI Films & Commercials`;

  projects.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.category = p.category;
    card.dataset.id = p.id;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${p.title} — ${p.category} — open project`);

    const thumb = document.createElement('div');
    thumb.className = 'card-thumb';
    thumb.appendChild(makeThumb(p, pad(i + 1)));

    const play = document.createElement('div');
    play.className = 'card-play';
    play.innerHTML = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6 4l10 6-10 6V4z" fill="#EDEBE7"/></svg>';
    thumb.appendChild(play);

    const meta = document.createElement('div');
    meta.className = 'card-meta';
    meta.innerHTML = `
      <div class="left">
        <span class="card-num">${pad(i + 1)} / ${pad(projects.length)}</span>
        <h3 class="card-title">${p.title}</h3>
        ${p.subtitle ? `<p class="card-sub">${p.subtitle}</p>` : ''}
      </div>
      <span class="card-cat">${p.category}</span>
    `;

    card.appendChild(thumb);
    card.appendChild(meta);

    const openIt = () => openProjectById(p.id);
    card.addEventListener('click', openIt);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openIt(); }
    });
    grid.appendChild(card);
  });

  /* ---------------- Filters ---------------- */
  $$('.filter').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.filter;
      $$('.filter').forEach(b => {
        const on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-selected', String(on));
      });
      $$('.card', grid).forEach(c => {
        const show = cat === 'All' || c.dataset.category === cat;
        c.classList.toggle('is-hidden', !show);
      });
    });
  });

  /* ---------------- Modal ---------------- */
  const modal = $('#modal');
  const modalIframe = $('#modalIframe');
  const modalTitle = $('#modalTitle');
  const modalSub = $('#modalSub');
  const modalDesc = $('#modalDesc');
  const modalRole = $('#modalRole');
  const modalCat = $('#modalCat');
  const modalCounter = $('#modalCounter');
  const modalSwitch = $('#modalSwitch');
  const mPrev = $('#mPrev');
  const mNext = $('#mNext');

  let currentIdx = -1;
  let currentVariant = 'primary';
  let lastFocused = null;

  function openProjectById(id) {
    const i = projects.findIndex(p => p.id === id);
    if (i === -1) return;
    openIndex(i);
  }
  function openIndex(i) {
    currentIdx = i;
    currentVariant = 'primary';
    renderModal();
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
    lastFocused = document.activeElement;
    // Focus trap: focus close button first
    setTimeout(() => $('.modal-close', modal).focus(), 50);
  }
  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
    modalIframe.src = '';   // stop the video
    if (lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus();
    }
    currentIdx = -1;
  }

  function renderModal() {
    const p = projects[currentIdx];
    if (!p) return;
    const total = projects.length;

    modalCounter.textContent = `${pad(currentIdx + 1)} / ${pad(total)}`;
    modalCat.textContent = p.category;
    modalTitle.textContent = p.title;
    modalSub.textContent = p.subtitle || '';
    modalDesc.textContent = p.desc || '';
    modalRole.textContent = p.role || '—';

    const activeId = (currentVariant === 'alt' && p.altDriveId) ? p.altDriveId : p.driveId;
    modalIframe.src = drivePreview(activeId);

    // Variant switch
    if (p.altDriveId) {
      modalSwitch.hidden = false;
      modalSwitch.innerHTML = `
        <button data-variant="primary" class="${currentVariant === 'primary' ? 'is-active' : ''}">${p.primaryLabel || 'EN'}</button>
        <button data-variant="alt" class="${currentVariant === 'alt' ? 'is-active' : ''}">${p.altLabel || 'AR'}</button>
      `;
      $$('button', modalSwitch).forEach(b => {
        b.addEventListener('click', () => {
          currentVariant = b.dataset.variant;
          renderModal();
        });
      });
    } else {
      modalSwitch.hidden = true;
      modalSwitch.innerHTML = '';
    }
  }

  mPrev.addEventListener('click', () => {
    if (currentIdx > 0) { currentVariant = 'primary'; currentIdx--; renderModal(); }
  });
  mNext.addEventListener('click', () => {
    if (currentIdx < projects.length - 1) { currentVariant = 'primary'; currentIdx++; renderModal(); }
  });

  $$('[data-close]', modal).forEach(el => el.addEventListener('click', closeModal));

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('is-open')) return;
    if (e.key === 'Escape') { closeModal(); return; }
    if (e.key === 'ArrowLeft') mPrev.click();
    if (e.key === 'ArrowRight') mNext.click();
    if (e.key === 'Tab') {
      // Focus trap
      const focusables = $$('button, [href], iframe, [tabindex]:not([tabindex="-1"])', modal)
        .filter(el => !el.hasAttribute('disabled') && !el.hidden);
      if (!focusables.length) return;
      const first = focusables[0];
      const last  = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------------- Reveal on scroll ---------------- */
  const io = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            en.target.classList.add('is-in');
            io.unobserve(en.target);
          }
        });
      }, { rootMargin: '0px 0px -60px 0px', threshold: 0.06 })
    : null;

  if (io) {
    $$('.reveal').forEach(el => io.observe(el));
  } else {
    $$('.reveal').forEach(el => el.classList.add('is-in'));
  }

  /* ---------------- Year ---------------- */
  $('#footYear').textContent = new Date().getFullYear();
})();
