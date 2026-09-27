import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { sections, motion, heroContent } from './sections';

gsap.registerPlugin(ScrollTrigger, SplitText);

const el = (tag, className, html = '') => {
  const node = document.createElement(tag);
  node.className = className;
  node.innerHTML = html;
  return node;
};

export function initBlueprint() {
  if (document.documentElement.dataset.portfolioBlueprint !== 'true') return;
  const shell = document.querySelector('.page-shell');
  if (!shell || shell.dataset.blueprintReady) return;
  shell.dataset.blueprintReady = 'true';
  document.body.classList.add('blueprint');
  const oldMain = shell.querySelector('main');
  const hero = document.querySelector('#hero');
  const introCopy = hero.querySelector('.engineering-intro-copy');
  const about = el('section', 'bp-about', `<p class="eyebrow">ABOUT</p><h2>Troy Lorents</h2><p class="bp-about-role">Senior Full-Stack &amp; AI Engineer · Founder, useKnockout &amp; Automate Flows</p><div class="bp-about-body"></div>`);
  about.id = 'about';
  about.querySelector('.bp-about-body').append(introCopy);
  const build = el('section', 'bp-build');
  build.id = 'build';
  build.append(hero.querySelector('.engineering-story'));
  oldMain.append(about, build);
  const oldNav = shell.querySelector('nav');
  const social = oldNav.querySelector('.flex.items-center.gap-4');
  const footer = oldMain.querySelector('footer');
  const experience = el('main', 'bp-experience');
  experience.id = 'blueprint';
  const viewport = el('div', 'bp-viewport');
  const fit = el('div', 'bp-fit');
  const world = el('div', 'bp-world');
  const backing = el('div', 'bp-backing');
  const intro = el('section', 'bp-intro', `<header class="bp-header"><a href="#hero" class="bp-wordmark" aria-label="Troy Lorents, home">Troy<span>.</span></a><nav aria-label="Introduction"><a href="#about">About</a><a href="#skills">Skills</a><a href="#work">Work</a><a href="#contact">Let’s talk ↗</a></nav></header><div class="bp-hero-copy"><p class="eyebrow">SENIOR FULL-STACK &amp; AI ENGINEER</p><h1>${heroContent.headline}<br><span>${heroContent.continuation}</span></h1><div class="bp-hero-bottom"><p>I’m Troy Lorents. From the database to the interface, <br>and the AI systems in between.<br><span>Founder, useKnockout &amp; Automate Flows · 8+ years</span></p><a href="#about">Explore the portfolio <span>↓</span></a></div></div>`);
  hero.remove();
  intro.id = 'hero';
  world.append(backing, intro);

  // Existing nodes are moved, not cloned: form state, IDs, and project links
  // retain one source of truth. Additional selected work stays with Work.
  const panels = sections.map((config, index) => {
    const panel = el('div', 'bp-panel');
    panel.dataset.section = config.id;
    const preview = el('a', 'bp-preview', `<span class="bp-small">${config.label}</span><h2>${config.title}</h2><p>${config.description}</p><span class="bp-arrow" aria-hidden="true">↗</span>`);
    preview.href = `#${config.id}`;
    preview.setAttribute('aria-label', `Explore ${config.label}`);
    if (config.art === 'signature') preview.append(el('div', 'bp-signature', 'Troy.'));
    if (config.art === 'stack') preview.append(el('div', 'bp-mini-stack', '<span>Interface</span><i></i><span>Application</span><i></i><span>Data</span>'));
    if (config.art === 'work') preview.append(el('div', 'bp-preview-art', '<img src="/assets/blueprint/useknockout-homepage.png" alt=""><img src="/assets/blueprint/peptideiq-hero.png" alt="">'));
    const detail = el('div', 'bp-detail');
    detail.append(el('div', 'bp-section-top', `<a href="#hero" class="bp-wordmark">Troy<span>.</span></a><span class="bp-small">${config.label}</span>`));
    [config.id, ...(config.includes || [])].forEach(id => detail.append(document.getElementById(id)));
    // The section bar above carries the number; body eyebrows keep only their label.
    const eyebrow = detail.querySelector(`#${config.id} .eyebrow`);
    if (eyebrow) eyebrow.textContent = eyebrow.textContent.replace(/^\d+\s*\/\s*/, '');
    const next = sections[index + 1];
    detail.append(el('div', 'bp-section-footer', `<span>TROY LORENTS / FULL-STACK &amp; AI ENGINEERING</span><a href="#${next?.id || 'hero'}">${next ? `Continue to ${next.label.toLowerCase()} ↓` : 'Back to the beginning ↑'}</a>`));
    panel.append(preview, detail);
    world.append(panel);
    // Stepped sections replace the long pan with a pinned, layer-by-layer walkthrough.
    const steps = config.steps && {
      items: [...detail.querySelectorAll(config.steps.items)],
      tabs: [...detail.querySelectorAll(config.steps.tabs)],
      progress: detail.querySelector(config.steps.progress),
    };
    if (steps) detail.classList.add('bp-stepped');
    return { config, panel, preview, detail, steps };
  });
  fit.append(world);
  viewport.append(fit);
  experience.append(viewport);
  oldNav.remove();
  oldMain.remove();
  shell.append(experience, footer);
  document.querySelector('.scroll-progress')?.remove();
  const skip = document.querySelector('#skip-content');
  skip.href = '#about';
  skip.textContent = 'Skip animation and read portfolio';
  const toolbar = el('div', 'bp-toolbar', `<a href="#hero" aria-label="Back to the beginning">TL.</a><span class="bp-chapter">Scroll to explore</span><details><summary>Sections</summary><nav aria-label="Portfolio sections">${sections.map(s => `<a href="#${s.id}">${s.label}</a>`).join('')}<a href="/assets/Lorents%20Troy%20-%20Resume.pdf" target="_blank" rel="noopener noreferrer">Resume ↗</a></nav></details><button type="button" class="bp-simplify" aria-pressed="false">Simple view</button>`);
  if (social) toolbar.append(social);
  shell.append(toolbar);

  let context, timeline, trigger, frame, restoreFrame, disposed = false, rebuilding = false;
  let manualSimple = new URLSearchParams(window.location.search).get('view') === 'simple';
  let ranges = [], activeId = 'hero';
  const media = window.matchMedia(motion.desktop);
  const simplify = toolbar.querySelector('.bp-simplify');
  const chapter = toolbar.querySelector('.bp-chapter');
  const stepItems = panels.flatMap(p => p.steps?.items || []);
  const activeStep = (id, time) => {
    let active = 0;
    ranges.find(r => r.id === id)?.stepTimes.forEach((t, k) => { if (time >= t - .5) active = k; });
    return active;
  };
  const clean = () => {
    context?.revert();
    context = timeline = trigger = null;
    document.body.classList.remove('bp-motion');
    [intro, ...panels.flatMap(p => [p.panel, p.detail, p.preview]), ...stepItems].forEach(n => { n.inert = false; n.removeAttribute('aria-hidden'); });
    fit.style.transform = '';
  };
  const scrollTime = time => {
    if (!trigger || !timeline) return;
    window.scrollTo({ top: trigger.start + time / timeline.duration() * (trigger.end - trigger.start), behavior: 'instant' });
    ScrollTrigger.update();
  };
  const setAccessible = (node, enabled) => {
    if (node.inert === !enabled) return;
    if (!enabled && node.contains(document.activeElement)) toolbar.querySelector('summary').focus({ preventScroll: true });
    node.inert = !enabled;
    node.setAttribute('aria-hidden', String(!enabled));
  };
  const setup = (restore = true) => {
    if (disposed) return;
    const oldRange = ranges.find(r => r.id === activeId);
    const readingProgress = oldRange && timeline ? Math.max(0, Math.min(1, (timeline.time() - oldRange.read) / oldRange.duration)) : 0;
    const wasMotion = !!timeline;
    const readingPanel = wasMotion ? null : panels.find(({ panel }) => {
      const rect = panel.getBoundingClientRect();
      return rect.top <= window.innerHeight * .4 && rect.bottom > window.innerHeight * .4;
    });
    const previousId = readingPanel?.config.id || activeId;
    simplify.hidden = !media.matches;
    simplify.textContent = manualSimple ? 'Motion view' : 'Simple view';
    simplify.setAttribute('aria-pressed', String(manualSimple));
    rebuilding = true;
    clean();
    activeId = previousId;
    if (manualSimple || !media.matches) {
      rebuilding = false;
      if (restore && wasMotion) {
        cancelAnimationFrame(restoreFrame);
        restoreFrame = requestAnimationFrame(() => document.getElementById(previousId)?.scrollIntoView({ behavior: 'instant' }));
      }
      return;
    }
    document.body.classList.add('bp-motion');
    const scale = Math.min(window.innerWidth / motion.width, (window.innerHeight - 60) / motion.height, 1.15);
    fit.style.transform = `translate(-50%, -50%) scale(${scale})`;
    const slot = i => ({ x: 44 + (i % 3) * 412, y: 480 - (i % 3) * 38, z: 150 + (i % 3) * 95, scale: .2875 });
    ranges = [];
    context = gsap.context(() => {
      gsap.set(world, { rotationX: 0, rotationY: 0, rotation: 0, scale: 1, x: 0, y: 0 });
      gsap.set([intro, backing], { autoAlpha: 1, z: 0 });
      panels.forEach(({ panel, preview, detail }, i) => {
        gsap.set(panel, { x: 44 + (i % 3) * 412, y: 502, z: 0, scale: .2875, height: 800, autoAlpha: i < 3 ? 1 : 0 });
        gsap.set(preview, { autoAlpha: 1 });
        gsap.set(detail, { autoAlpha: 0 });
      });
      const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
      timeline = tl;
      tl.to(world, { ...motion.tilt, duration: 1.5 }, .6)
        .to(backing, { autoAlpha: 1, borderColor: '#2b3f4f', boxShadow: '0 40px 110px #0f1b2666', duration: 1 }, .8)
        .to(intro, { z: 50, duration: 1.3 }, 1.8);
      panels.slice(0, 3).forEach(({ panel }, i) => tl.to(panel, { ...slot(i), boxShadow: '0 30px 80px #0f1b2640', duration: 1.3 }, 1.8 + i * .18));
      let cursor = 4.2;
      let previous = null;
      panels.forEach(({ config, panel, preview, detail, steps }, i) => {
        const height = steps ? motion.height : Math.max(motion.height, detail.offsetHeight);
        const overflow = height - motion.height;
        // After the opening lift, sections hand off directly unless tiltBetween restores the full return.
        const direct = previous && !motion.tiltBetween;
        const read = cursor + (direct ? motion.handoff : 1.25);
        const duration = steps
          ? motion.readHold + (steps.items.length - 1) * motion.stepDuration
          : motion.readHold + overflow * scale / motion.pixelsPerUnit;
        const stepTimes = steps ? [read] : [];
        ranges.push({ id: config.id, start: cursor, read, duration, end: read + duration, overflow, stepTimes });
        tl.addLabel(config.id, read);
        if (direct) {
          // The finished sheet lifts away while the next one slides up flat into place.
          tl.set(panel, { x: 0, y: motion.height, z: 0, scale: 1, height, autoAlpha: 1, boxShadow: '0 -30px 60px #0f1b261f' }, cursor)
            .set(preview, { autoAlpha: 0 }, cursor)
            .set(detail, { autoAlpha: 1 }, cursor)
            .to(previous.panel, { y: -previous.overflow - 160, autoAlpha: 0, duration: motion.handoff, ease: 'power2.in' }, cursor)
            .to(panel, { y: 0, boxShadow: '0 0 0 #0000', duration: motion.handoff, ease: 'power3.out' }, cursor);
        } else {
          tl.to(world, { rotationX: 0, rotationY: 0, rotation: 0, scale: 1, x: 0, y: 0, duration: 1.2 }, cursor)
            .to([intro, backing], { autoAlpha: 0, duration: .65 }, cursor)
            .to(panel, { x: 0, y: 0, z: 0, scale: 1, height, autoAlpha: 1, boxShadow: '0 0 0 #0000', duration: 1.2 }, cursor)
            .to(preview, { autoAlpha: 0, duration: .35 }, cursor + .55)
            .to(detail, { autoAlpha: 1, duration: .45 }, cursor + .8);
          panels.filter(p => p.panel !== panel).forEach(p => tl.to(p.panel, { autoAlpha: 0, duration: .5 }, cursor));
        }
        if (steps) {
          // Each layer slides over the last, which settles back like a stacked sheet.
          const count = steps.items.length;
          gsap.set(steps.items, { autoAlpha: j => (j ? 0 : 1), y: j => (j ? 90 : 0), scale: 1, transformOrigin: '50% 0%' });
          gsap.set(steps.progress, { scaleX: 1 / count, transformOrigin: '0 50%' });
          steps.items.forEach((item, k) => {
            if (!k) return;
            const t = read + motion.readHold / 2 + (k - 1) * motion.stepDuration;
            tl.to(steps.items[k - 1], { y: -26, scale: .95, autoAlpha: .4, duration: .8 }, t)
              .fromTo(item, { y: 90, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .8, immediateRender: false }, t)
              .to(steps.progress, { scaleX: (k + 1) / count, duration: .8 }, t);
            if (k > 1) tl.to(steps.items[k - 2], { autoAlpha: 0, duration: .5 }, t);
            // Diagram nodes and fact rows assemble after their sheet lands.
            const parts = item.querySelectorAll('.case-node, .case-diagram > i, .case-anatomy > div');
            if (parts.length) tl.fromTo(parts, { y: 14, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .4, stagger: .04, immediateRender: false }, t + .35);
            stepTimes.push(t + 1.05);
          });
        } else {
          tl.to(panel, { y: -overflow, ease: 'none', duration: Math.max(.01, duration - motion.readHold) }, read + motion.readHold / 2);
        }
        tl.to({}, { duration: motion.readHold / 2 }, read + duration - motion.readHold / 2);
        cursor = read + duration;
        previous = { panel, overflow };
        if (i < panels.length - 1 && motion.tiltBetween) {
          tl.to(world, { ...motion.tilt, duration: 1 }, cursor)
            .to(intro, { autoAlpha: .9, duration: .8 }, cursor)
            .to(backing, { autoAlpha: 1, duration: .8 }, cursor)
            .to(detail, { autoAlpha: 0, duration: .35 }, cursor)
            .to(preview, { autoAlpha: 1, duration: .5 }, cursor + .3);
          const group = Math.floor((i + 1) / 3);
          panels.forEach((p, j) => tl.to(p.panel, { ...slot(j), height: 800, autoAlpha: Math.floor(j / 3) === group ? 1 : 0, duration: 1 }, cursor));
          cursor += 1.3;
        }
      });
      const update = () => {
        if (rebuilding || !media.matches) return;
        const time = tl.time();
        const range = ranges.find(r => time >= r.read - .01 && time <= r.end + .01);
        activeId = range?.id || (time < ranges[0].read ? 'hero' : activeId);
        // During a direct handoff the label keeps the section being left instead of flashing the intro label.
        if (range) chapter.textContent = sections.find(s => s.id === range.id).label;
        else if (time < 2.5) chapter.textContent = 'Scroll to explore';
        else if (time < ranges[0].read || motion.tiltBetween) chapter.textContent = 'The page, in layers';
        setAccessible(intro, time < 2.5);
        panels.forEach((p, i) => {
          const canRead = range?.id === p.config.id;
          setAccessible(p.detail, canRead);
          setAccessible(p.preview, time < .6 && i < 3);
          if (!p.steps) return;
          const active = activeStep(p.config.id, time);
          p.steps.items.forEach((item, k) => setAccessible(item, canRead && k === active));
          p.steps.tabs.forEach((tab, k) => {
            tab.setAttribute('aria-selected', String(k === active));
            tab.tabIndex = k === active ? 0 : -1;
          });
          if (canRead) chapter.textContent = `${p.config.label} · ${p.steps.tabs[active]?.querySelector('strong')?.textContent || ''}`;
        });
      };
      tl.eventCallback('onUpdate', update);
      rebuilding = false;
      trigger = ScrollTrigger.create({ id: 'portfolio-blueprint', trigger: experience, pin: viewport, animation: tl, start: 'top top', end: () => `+=${tl.duration() * motion.pixelsPerUnit}`, scrub: true, invalidateOnRefresh: true });
      update();
    }, experience);
    ScrollTrigger.refresh();
    if (restore && previousId !== 'hero') {
      const range = ranges.find(r => r.id === previousId);
      if (range) scrollTime(range.read + readingProgress * range.duration);
    }
  };
  const schedule = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => setup());
  };
  const onMediaChange = () => setup();
  const go = (id, focus = false) => {
    const node = document.getElementById(id);
    const panel = node?.closest('.bp-panel');
    const range = ranges.find(r => r.id === (panel?.dataset.section || id));
    activeId = panel?.dataset.section || id;
    if (timeline) scrollTime(range ? range.read : 0);
    else node?.scrollIntoView({ behavior: 'instant', block: 'start' });
    if (focus && node) { node.tabIndex = -1; node.focus({ preventScroll: true }); }
    toolbar.querySelector('details').open = false;
  };
  const onClick = event => {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const id = anchor.getAttribute('href').slice(1) || 'hero';
    if (!document.getElementById(id)) return;
    event.preventDefault();
    if (anchor === skip) { manualSimple = true; setup(false); }
    window.history.pushState(null, '', `#${id}`);
    go(id, true);
  };
  const onSimplify = () => { manualSimple = !manualSimple; setup(); };
  const onHash = () => go(window.location.hash.slice(1) || 'hero');
  const onFocus = event => {
    if (!timeline) return;
    const range = ranges.find(r => r.id === event.target.closest('.bp-panel')?.dataset.section);
    if (!range || range.stepTimes.length || !range.overflow) return;
    const rect = event.target.getBoundingClientRect();
    if (rect.top >= 65 && rect.bottom <= window.innerHeight - 65) return;
    const scale = Math.min(window.innerWidth / motion.width, (window.innerHeight - 60) / motion.height, 1.15);
    const delta = (rect.top - window.innerHeight * .4) / scale;
    const currentY = -Number(gsap.getProperty(event.target.closest('.bp-panel'), 'y'));
    const ratio = Math.max(0, Math.min(1, (currentY + delta) / range.overflow));
    scrollTime(range.read + motion.readHold / 2 + ratio * (range.duration - motion.readHold));
  };
  // Layer tabs seek the walkthrough; arrow keys, Home, and End follow the tablist pattern.
  const onTab = event => {
    const tab = event.target.closest?.('[role="tab"]');
    const owner = tab && panels.find(p => p.steps?.tabs.includes(tab));
    if (!owner || !timeline) return;
    const tabs = owner.steps.tabs;
    const current = tabs.indexOf(tab);
    let next = current;
    if (event.type === 'keydown') {
      const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
      if (event.key in keys) next = (current + keys[event.key] + tabs.length) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      tabs[next].focus({ preventScroll: true });
    }
    scrollTime(ranges.find(r => r.id === owner.config.id).stepTimes[next]);
  };
  document.addEventListener('click', onTab);
  document.addEventListener('keydown', onTab);
  document.addEventListener('click', onClick);
  document.addEventListener('focusin', onFocus);
  document.querySelectorAll('details').forEach(d => { if (!toolbar.contains(d)) d.addEventListener('toggle', schedule); });
  const observer = new ResizeObserver(schedule);
  panels.forEach(p => observer.observe(p.detail));
  simplify.addEventListener('click', onSimplify);
  window.addEventListener('resize', schedule);
  window.addEventListener('hashchange', onHash);
  media.addEventListener('change', onMediaChange);
  // Existing filtering/widget hooks use this single batched layout refresh.
  const previousRefresh = window.refreshPortfolioLayout;
  window.refreshPortfolioLayout = schedule;
  // Opening reveal: masked headline lines, then the supporting copy. Without it the content is already visible.
  let split, revealTween, revealTimer;
  const canReveal = window.scrollY < 10 && !window.location.hash && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (canReveal) {
    intro.classList.add('is-revealing');
    revealTimer = setTimeout(() => intro.classList.remove('is-revealing'), 1500);
    (document.fonts?.ready || Promise.resolve()).then(() => {
      if (disposed || !intro.classList.contains('is-revealing')) return;
      clearTimeout(revealTimer);
      split = SplitText.create(intro.querySelector('h1'), { type: 'lines', mask: 'lines' });
      intro.classList.remove('is-revealing');
      revealTween = gsap.timeline({ onComplete: () => { split?.revert(); split = null; } })
        .from(split.lines, { yPercent: 110, duration: 1.1, ease: 'power4.out', stagger: .12 })
        .from(intro.querySelectorAll('.bp-header, .bp-hero-copy > .eyebrow, .bp-hero-bottom > *'), { y: 18, autoAlpha: 0, duration: .8, ease: 'power3.out', stagger: .08 }, .25);
    });
  }
  setup(false);
  document.fonts?.ready.then(() => { if (!disposed) schedule(); });
  // The browser's own anchor jump runs at load and would override an earlier seek.
  const seekInitialHash = () => requestAnimationFrame(onHash);
  if (window.location.hash) {
    if (document.readyState === 'complete') seekInitialHash();
    else window.addEventListener('load', seekInitialHash, { once: true });
  }
  return () => {
    disposed = true;
    cancelAnimationFrame(frame); cancelAnimationFrame(restoreFrame);
    observer.disconnect();
    document.removeEventListener('click', onClick);
    document.removeEventListener('click', onTab);
    document.removeEventListener('keydown', onTab);
    clearTimeout(revealTimer);
    revealTween?.kill();
    split?.revert();
    intro.classList.remove('is-revealing');
    document.removeEventListener('focusin', onFocus);
    document.querySelectorAll('details').forEach(d => d.removeEventListener('toggle', schedule));
    simplify.removeEventListener('click', onSimplify);
    window.removeEventListener('resize', schedule);
    window.removeEventListener('hashchange', onHash);
    window.removeEventListener('load', seekInitialHash);
    media.removeEventListener('change', onMediaChange);
    window.refreshPortfolioLayout = previousRefresh;
    clean();
  };
}
