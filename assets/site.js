/* ──────────────────────────────────────────────────────────────
   HAIB website — render + interactions (vanilla)
   ────────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  /* ---------- ICONS ---------- */
  const ICON = {
    // product app-icon glyphs (drawn on colored rounded square)
    radar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><path d="M12 12 19 6"/><circle cx="17" cy="7" r="1.4" fill="currentColor" stroke="none"/></svg>',
    scrap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h8l4 4v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M14 3v4h4"/><path d="M8 12h7M8 15.5h7"/></svg>',
    voca: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16M4 5v13a1 1 0 0 0 1 1h6"/><path d="M9 5v9"/><path d="m14 19 3-8 3 8M14.8 17h4.4"/></svg>',
    movie: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M7 5 5 9M12 5l-2 4M17 5l-2 4"/><path d="m11 12.5 3 1.8-3 1.8z" fill="currentColor" stroke="none"/></svg>',
    baton: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="6.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="6.5" r="2.5"/><path d="M8.3 15.7 15.7 8.3"/><path d="M13 6.5h2M6.5 13v-2"/></svg>',

    // platform icons
    macos: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M16.4 12.7c0-2 1.6-3 1.7-3-.9-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.4 2 2.4 2 1 0 1.3-.6 2.5-.6 1.2 0 1.5.6 2.5.6s1.7-.9 2.3-1.9c.7-1.1 1-2.1 1-2.2 0 0-1.9-.7-1.9-2.8Z"/><path d="M14.5 6.3c.5-.7.9-1.6.8-2.5-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9 0 1.7-.5 2.3-1.1Z"/></svg>',
    windows: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M3 5.7 10.4 4.7V11.4H3V5.7ZM10.4 12.3V19L3 18V12.3H10.4ZM11.3 4.6 21 3.3V11.4H11.3V4.6ZM21 12.3V20.7L11.3 19.4V12.3H21Z"/></svg>',
    ios: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M16.4 12.7c0-2 1.6-3 1.7-3-.9-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.4 2 2.4 2 1 0 1.3-.6 2.5-.6 1.2 0 1.5.6 2.5.6s1.7-.9 2.3-1.9c.7-1.1 1-2.1 1-2.2 0 0-1.9-.7-1.9-2.8Z"/><path d="M14.5 6.3c.5-.7.9-1.6.8-2.5-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9 0 1.7-.5 2.3-1.1Z"/></svg>',
    android: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M6 10a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1ZM18 10a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1ZM7.5 10v7.2a1 1 0 0 0 1 1h.7v2.3a1 1 0 0 0 2 0v-2.3h1.6v2.3a1 1 0 0 0 2 0v-2.3h.7a1 1 0 0 0 1-1V10h-9Z"/><path d="M14.9 4.6 16 3.1a.4.4 0 1 0-.6-.5l-1.2 1.6A5.7 5.7 0 0 0 12 3.8c-.8 0-1.5.2-2.2.4L8.6 2.6a.4.4 0 1 0-.6.5l1 1.5A5 5 0 0 0 7.5 9h9a5 5 0 0 0-1.6-4.4ZM10 6.8a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm4 0a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Z"/></svg>',
    chrome: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.2"/><path d="M12 8.8h8.2M9.2 13.6 5.1 6.5M14.8 13.6l-4.1 7.1"/></svg>',
    edge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 13.5c.4-3.8-2.3-9-8.5-9C7 4.5 3.5 8.3 3.5 12.3c0 3.7 2.8 7.2 7.5 7.2 2.6 0 4.4-1.2 5.2-2.3"/><path d="M9 12.5c0-2 1.7-3.3 4-3.3 3.6 0 4 2.6 4 4"/></svg>',
    web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.4 2.5 15.6 0 18M12 3c-2.5 2.4-2.5 15.6 0 18"/></svg>',

    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 11l5 5 5-5M5 21h14"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l1 4v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2V5Z"/><path d="M8 7h6M8 10h6"/></svg>',
    key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="4"/><path d="m11 11 8 8M16 16l2-2M19 19l1.5-1.5"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
    flow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="6" height="5" rx="1"/><rect x="15" y="15" width="6" height="5" rx="1"/><path d="M6 9v4a3 3 0 0 0 3 3h6"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v4h4"/></svg>'
  };
  function osIcon(os) { return ICON[os] || ICON.download; }

  /* ---------- i18n ---------- */
  let LANG = localStorage.getItem("haib-lang") || "ko";
  const T = () => window.HAIB_I18N[LANG];
  function tr(key) { return (T() && T()[key] != null) ? T()[key] : key; }

  function applyI18n() {
    document.documentElement.lang = LANG;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      el.textContent = tr(el.getAttribute("data-i18n"));
    });
    // lang toggle pressed state
    document.querySelectorAll(".lang-toggle button").forEach(b => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === LANG));
    });
    renderAll(); // re-render data-driven blocks in current language
  }

  /* ---------- helpers ---------- */
  const $ = (s, r) => (r || document).querySelector(s);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  function statusBadge(code) {
    const s = window.HAIB_STATUS[code];
    if (!s) return "";
    return `<span class="badge ${s.cls}">${s[LANG]}</span>`;
  }
  function saleBadge(pr) {
    return pr && pr.sale ? `<span class="sale-badge">${pr.sale.label[LANG]}</span>` : "";
  }
  function saleNote(pr) {
    if (!pr || !pr.sale) return "";
    const detail = pr.sale.detail ? `<span>${pr.sale.detail[LANG]}</span>` : "";
    return `<p class="sale-note"><span>${pr.sale.note[LANG]}</span>${detail}</p>`;
  }
  function appIcon(p, sizeCls) {
    const c = `var(${p.accentVar})`;
    return `<div class="app-icon ${sizeCls||""}" style="background:${c}">${ICON[p.icon]||""}</div>`;
  }

  /* ---------- RENDER: product catalog (tiles + filter) ---------- */
  let FILTER = "all";
  function dotColor(scls) {
    return ({ available: "var(--valid)", review: "var(--signal-fuzzy)", testflight: "var(--dust-mauve)", preparing: "var(--ink-muted)" })[scls] || "var(--ink-muted)";
  }
  function uniqueOS(p) { const s = []; p.platforms.forEach(pl => { if (s.indexOf(pl.os) < 0) s.push(pl.os); }); return s; }
  function leadDownload(p) {
    const live = p.platforms.filter(pl => pl.url && (pl.status === "available" || pl.status === "review" || pl.status === "internal"));
    return live[0] || null;
  }
  function renderProducts() {
    const grid = $("#cat-grid"), filters = $("#cat-filters"), count = $("#cat-count");
    if (!grid) return;

    if (filters) {
      const opts = [["all", tr("catalog.all"), null]];
      ["available", "review", "testflight", "preparing"].forEach(code => {
        const s = window.HAIB_STATUS[code]; if (s) opts.push([code, s[LANG], code]);
      });
      filters.innerHTML = "";
      opts.forEach(([code, label, scls]) => {
        const chip = el("button", "filter-chip");
        chip.setAttribute("aria-pressed", String(FILTER === code));
        chip.innerHTML = (scls ? `<span class="fdot" style="background:${dotColor(scls)}"></span>` : "") + label;
        chip.onclick = () => { FILTER = code; renderProducts(); };
        filters.appendChild(chip);
      });
    }

    grid.innerHTML = "";
    let shown = 0;
    window.HAIB_PRODUCTS.forEach(p => {
      const match = FILTER === "all" || p.status === FILTER;
      if (match) shown++;
      const tile = el("article", "cat-tile reveal" + (match ? "" : " hide"));
      tile.style.setProperty("--pc", `var(${p.accentVar})`);
      tile.id = "product-" + p.id;

      const plats = uniqueOS(p).map(os =>
        `<span class="plat-chip">${osIcon(os)}${window.HAIB_PLATFORM_LABEL[os][LANG]}</span>`).join("");
      const lead = leadDownload(p);
      const dlBtn = lead
        ? `<a class="btn btn-primary btn-sm" href="${lead.url}">${osIcon(lead.os)}${window.HAIB_PLATFORM_LABEL[lead.os][LANG]}</a>`
        : "";

      tile.innerHTML = `
        <div class="tile-preview">
          <div class="glow"></div>
          <div class="mr" style="width:42%;aspect-ratio:1"></div>
          <div class="mr" style="width:68%;aspect-ratio:1"></div>
          <div class="mr" style="width:94%;aspect-ratio:1"></div>
          <div class="app-icon" style="background:var(${p.accentVar})">${ICON[p.icon]}</div>
        </div>
        <div class="tile-body">
          <p class="tile-cat">${p.category ? p.category[LANG] : ""}</p>
          <div class="tile-head"><h3>${p.name}</h3>${statusBadge(p.status)}${saleBadge(p.pricing)}</div>
          <p class="tile-desc">${p.desc[LANG]}</p>
          <div class="tile-plats">${plats}</div>
          <div class="tile-foot">
            ${dlBtn}<span class="grow"></span>
            <a class="text-link" href="product.html?p=${p.id}">${tr("common.viewProduct")} ${ICON.arrow}</a>
          </div>
        </div>`;
      grid.appendChild(tile);
    });
    if (count) count.textContent = shown + tr("catalog.count");
    bindReveal();
  }

  /* ---------- RENDER: downloads (platform matrix) ---------- */
  function renderDownloads() {
    const wrap = $("#dl-grid");
    if (!wrap) return;
    wrap.innerHTML = "";
    window.HAIB_PRODUCTS.forEach(p => {
      if (!p.platforms.length) return;
      const card = el("div", "dl-card reveal");
      let rows = p.platforms.map(pl => {
        const live = pl.url && (pl.status === "available" || pl.status === "review" || pl.status === "internal");
        const platName = window.HAIB_PLATFORM_LABEL[pl.os][LANG];
        const chan = window.HAIB_CHANNEL_LABEL[pl.channel][LANG];
        const arch = pl.arch ? ` · ${pl.arch}` : "";
        const meta = `${chan}${arch}`;
        const right = live
          ? `<span class="go">${ICON.download}</span>`
          : `${statusBadge(pl.status)}`;
        const tag = live ? "a" : "div";
        const href = live ? ` href="${pl.url}"` : "";
        return `<${tag} class="dl-row ${live ? "live" : "pending"}"${href}>
            <span class="plat">
              <span style="width:18px;height:18px;display:inline-flex">${osIcon(pl.os)}</span>
              <span><span class="pl-name">${platName}</span> <span class="pl-meta">${meta}</span></span>
            </span>
            ${right}
          </${tag}>`;
      }).join("");

      card.innerHTML = `
        <div class="dl-card-head">
          ${appIcon(p, "")}
          <h4>${p.name}</h4>
        </div>
        ${rows}
        <a class="text-link" style="margin-top:12px" href="${p.links.changelog}">${tr("common.releaseNotes")} ${ICON.arrow}</a>`;
      wrap.appendChild(card);
    });
  }

  /* ---------- RENDER: pricing ---------- */
  function renderPricing() {
    const wrap = $("#price-grid");
    if (!wrap) return;
    wrap.innerHTML = "";
    window.HAIB_PRODUCTS.forEach(p => {
      if (!p.pricing) return;
      const pr = p.pricing;
      const card = el("div", "price-card reveal" + (pr.highlight ? " highlight" : ""));
      card.style.setProperty("--pc", `var(${p.accentVar})`);
      const feats = pr.features[LANG].map(f => `<li>${ICON.check}<span>${f}</span></li>`).join("");
      card.innerHTML = `
        <div class="price-head"><span class="dot"></span><h4>${p.name}</h4>${saleBadge(pr)}</div>
        <div class="price-amount">${pr.compareAt ? `<span class="was">${pr.compareAt}</span>` : ""}<span class="amt">${pr.amount}</span><span class="per">${pr.per[LANG]}</span></div>
        <p class="price-kind">${pr.tier[LANG]} · ${pr.sub[LANG]}</p>
        ${saleNote(pr)}
        <ul class="price-meta">${feats}</ul>
        <a class="btn btn-primary" href="${pr.ctaUrl}">${pr.cta[LANG]}</a>
        <div class="pay-note">${pr.pay}</div>`;
      wrap.appendChild(card);
    });
  }

  /* ---------- RENDER: changelog ---------- */
  function renderChangelog() {
    const wrap = $("#cl-list");
    if (!wrap) return;
    wrap.innerHTML = "";
    const prodById = {};
    window.HAIB_PRODUCTS.forEach(p => prodById[p.id] = p);
    window.HAIB_CHANGELOG.forEach(c => {
      const p = prodById[c.product] || { name: c.product, accentVar: "--brand" };
      const row = el("div", "cl-row reveal");
      const changes = c.changes.map(ch =>
        `<div class="cl-change"><span class="cl-tag ${ch.tag}">${ch.tag}</span><span>${ch[LANG]}</span></div>`
      ).join("");
      row.innerHTML = `
        <div class="cl-meta">
          <span class="cl-date">${c.date}</span>
          <span class="cl-prodver"><span class="pdot" style="background:var(${p.accentVar})"></span><span class="pname">${p.name}</span><span class="pver">v${c.version}</span></span>
          ${statusBadge(c.status)}
        </div>
        <div class="cl-changes">${changes}</div>
        <div></div>`;
      wrap.appendChild(row);
    });
  }

  /* ---------- RENDER: board ---------- */
  let BOARD_FILTER = "all";
  const BOARD_CATS = {
    announce: { ko: "공지", en: "Announcements", dot: "var(--brand)" },
    release:  { ko: "릴리스 노트", en: "Release Notes", dot: "var(--valid)" },
    known:    { ko: "알려진 이슈", en: "Known Issues", dot: "var(--signal-fuzzy)" },
    support:  { ko: "지원 공지", en: "Support Notices", dot: "var(--dust-slate)" }
  };
  function renderBoard() {
    const cats = $("#board-cats");
    const list = $("#notice-list");
    if (!list) return;
    if (cats) {
      cats.innerHTML = "";
      const allChip = el("button", "cat-chip");
      allChip.setAttribute("aria-pressed", String(BOARD_FILTER === "all"));
      allChip.innerHTML = tr("board.all");
      allChip.onclick = () => { BOARD_FILTER = "all"; renderBoard(); };
      cats.appendChild(allChip);
      Object.keys(BOARD_CATS).forEach(k => {
        const c = BOARD_CATS[k];
        const chip = el("button", "cat-chip");
        chip.setAttribute("aria-pressed", String(BOARD_FILTER === k));
        chip.innerHTML = `<span class="cdot" style="background:${c.dot}"></span>${c[LANG]}`;
        chip.onclick = () => { BOARD_FILTER = k; renderBoard(); };
        cats.appendChild(chip);
      });
    }
    list.innerHTML = "";
    window.HAIB_NOTICES
      .filter(n => BOARD_FILTER === "all" || n.cat === BOARD_FILTER)
      .forEach(n => {
        const a = el("a", "notice");
        a.href = "#board";
        a.innerHTML = `<span class="ntag ${n.cat}">${BOARD_CATS[n.cat][LANG]}</span>
          <span class="ntitle">${n[LANG]}</span>
          <span class="ndate">${n.date}</span>`;
        list.appendChild(a);
      });
  }

  function renderAll() {
    renderProducts();
    renderDownloads();
    renderPricing();
    renderChangelog();
    renderBoard();
    bindReveal();
  }

  /* ---------- INTERACTIONS ---------- */
  function bindNav() {
    const nav = $("#nav");
    const onScroll = () => {
      if (window.scrollY > 24) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // lang toggle
    document.querySelectorAll(".lang-toggle button").forEach(b => {
      b.addEventListener("click", () => {
        LANG = b.dataset.lang;
        localStorage.setItem("haib-lang", LANG);
        applyI18n();
      });
    });

    // mobile menu
    const mBtn = $("#menu-btn"), mMenu = $("#m-menu");
    if (mBtn && mMenu) {
      mBtn.addEventListener("click", () => mMenu.classList.toggle("open"));
      mMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mMenu.classList.remove("open")));
    }
  }

  /* parallax on hero layers */
  function bindParallax() {
    const grid = $("#hero-grid"), radar = $("#hero-radar"), content = $("#hero-content");
    if (!grid) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let mx = 0, my = 0, sy = 0;
    function frame() {
      const sp = sy * 0.25;
      if (radar) radar.style.transform = `translate(-50%, calc(-50% + ${sy * 0.12}px)) translate(${mx*14}px, ${my*14}px)`;
      if (grid) grid.style.transform = `translate(${mx*-8}px, ${my*-8 + sp*0.2}px)`;
      if (content) content.style.transform = `translateY(${sy * -0.04}px)`;
    }
    window.addEventListener("scroll", () => { sy = window.scrollY; frame(); }, { passive: true });
    window.addEventListener("mousemove", (e) => {
      mx = (e.clientX / innerWidth - 0.5);
      my = (e.clientY / innerHeight - 0.5);
      frame();
    }, { passive: true });
  }

  /* reveal on scroll */
  let _io;
  function bindReveal() {
    if (!_io) {
      _io = new IntersectionObserver((entries) => {
        entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); _io.unobserve(en.target); } });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    }
    document.querySelectorAll(".reveal:not(.in)").forEach((n, i) => {
      if (!n.dataset.d) { n.classList.add("d" + ((i % 4) + 1)); n.dataset.d = "1"; }
      _io.observe(n);
    });
  }

  /* ---------- BOOT ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    // expose icons for inline use in HTML (footer contact etc.)
    window.HAIB_ICON = ICON;
    document.querySelectorAll("[data-icon]").forEach(n => { n.innerHTML = ICON[n.dataset.icon] || ""; });
    bindNav();
    applyI18n();   // also triggers renderAll()
    bindParallax();
    bindReveal();
  });
})();
