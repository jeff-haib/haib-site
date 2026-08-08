/* ──────────────────────────────────────────────────────────────
   HAIB — shared logic for secondary pages.
   Renders whichever blocks exist on the page (downloads/pricing/
   changelog/board) + nav/lang/reveal. Support page is static HTML.
   ────────────────────────────────────────────────────────────── */
(function () {
  "use strict";
  const ICON = {
    radar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><path d="M12 12 19 6"/><circle cx="17" cy="7" r="1.4" fill="currentColor" stroke="none"/></svg>',
    scrap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h8l4 4v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M14 3v4h4"/><path d="M8 12h7M8 15.5h7"/></svg>',
    voca: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16M4 5v13a1 1 0 0 0 1 1h6"/><path d="M9 5v9"/><path d="m14 19 3-8 3 8M14.8 17h4.4"/></svg>',
    movie: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M7 5 5 9M12 5l-2 4M17 5l-2 4"/><path d="m11 12.5 3 1.8-3 1.8z" fill="currentColor" stroke="none"/></svg>',
    baton: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="6.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="6.5" r="2.5"/><path d="M8.3 15.7 15.7 8.3"/><path d="M13 6.5h2M6.5 13v-2"/></svg>',
    macos: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M16.4 12.7c0-2 1.6-3 1.7-3-.9-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.4 2 2.4 2 1 0 1.3-.6 2.5-.6 1.2 0 1.5.6 2.5.6s1.7-.9 2.3-1.9c.7-1.1 1-2.1 1-2.2 0 0-1.9-.7-1.9-2.8Z"/><path d="M14.5 6.3c.5-.7.9-1.6.8-2.5-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9 0 1.7-.5 2.3-1.1Z"/></svg>',
    windows: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M3 5.7 10.4 4.7V11.4H3V5.7ZM10.4 12.3V19L3 18V12.3H10.4ZM11.3 4.6 21 3.3V11.4H11.3V4.6ZM21 12.3V20.7L11.3 19.4V12.3H21Z"/></svg>',
    ios: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M16.4 12.7c0-2 1.6-3 1.7-3-.9-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.4 2 2.4 2 1 0 1.3-.6 2.5-.6 1.2 0 1.5.6 2.5.6s1.7-.9 2.3-1.9c.7-1.1 1-2.1 1-2.2 0 0-1.9-.7-1.9-2.8Z"/><path d="M14.5 6.3c.5-.7.9-1.6.8-2.5-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9 0 1.7-.5 2.3-1.1Z"/></svg>',
    android: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M6 10a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1ZM18 10a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1ZM7.5 10v7.2a1 1 0 0 0 1 1h.7v2.3a1 1 0 0 0 2 0v-2.3h1.6v2.3a1 1 0 0 0 2 0v-2.3h.7a1 1 0 0 0 1-1V10h-9Z"/><path d="M14.9 4.6 16 3.1a.4.4 0 1 0-.6-.5l-1.2 1.6A5.7 5.7 0 0 0 12 3.8c-.8 0-1.5.2-2.2.4L8.6 2.6a.4.4 0 1 0-.6.5l1 1.5A5 5 0 0 0 7.5 9h9a5 5 0 0 0-1.6-4.4ZM10 6.8a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Zm4 0a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Z"/></svg>',
    chrome: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.2"/><path d="M12 8.8h8.2M9.2 13.6 5.1 6.5M14.8 13.6l-4.1 7.1"/></svg>',
    edge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 13.5c.4-3.8-2.3-9-8.5-9C7 4.5 3.5 8.3 3.5 12.3c0 3.7 2.8 7.2 7.5 7.2 2.6 0 4.4-1.2 5.2-2.3"/><path d="M9 12.5c0-2 1.7-3.3 4-3.3 3.6 0 4 2.6 4 4"/></svg>',
    web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.4 2.5 15.6 0 18M12 3c-2.5 2.4-2.5 15.6 0 18"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 11l5 5 5-5M5 21h14"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg>',
    apple: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M16.4 12.7c0-2 1.6-3 1.7-3-.9-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.4 2 2.4 2 1 0 1.3-.6 2.5-.6 1.2 0 1.5.6 2.5.6s1.7-.9 2.3-1.9c.7-1.1 1-2.1 1-2.2 0 0-1.9-.7-1.9-2.8Z"/><path d="M14.5 6.3c.5-.7.9-1.6.8-2.5-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9 0 1.7-.5 2.3-1.1Z"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l1 4v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2V5Z"/><path d="M8 7h6M8 10h6"/></svg>',
    key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="4"/><path d="m11 11 8 8M16 16l2-2M19 19l1.5-1.5"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v4h4"/></svg>',
    receipt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3v18l2-1.2 2 1.2 2-1.2 2 1.2 2-1.2 2 1.2V3l-2 1.2L14 3l-2 1.2L10 3 8 4.2 5 3Z"/><path d="M9 8h6M9 12h6"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'
  };
  const osIcon = (os) => ICON[os] || ICON.download;

  let LANG = localStorage.getItem("haib-lang") || "ko";
  const T = () => window.HAIB_I18N[LANG];
  const tr = (k) => (T() && T()[k] != null) ? T()[k] : k;
  const $ = (s, r) => (r || document).querySelector(s);
  const el = (t, c, h) => { const n = document.createElement(t); if (c) n.className = c; if (h != null) n.innerHTML = h; return n; };
  function statusBadge(code) { const s = window.HAIB_STATUS[code]; return s ? `<span class="badge ${s.cls}">${s[LANG]}</span>` : ""; }
  function saleBadge(pr) { return pr && pr.sale ? `<span class="sale-badge">${pr.sale.label[LANG]}</span>` : ""; }
  function saleNote(pr) {
    if (!pr || !pr.sale) return "";
    const detail = pr.sale.detail ? `<span>${pr.sale.detail[LANG]}</span>` : "";
    return `<p class="sale-note"><span>${pr.sale.note[LANG]}</span>${detail}</p>`;
  }
  function appIcon(p) { return `<div class="app-icon" style="background:var(${p.accentVar})">${ICON[p.icon] || ""}</div>`; }
  function uniqueOS(p) { const s = []; p.platforms.forEach(pl => { if (s.indexOf(pl.os) < 0) s.push(pl.os); }); return s; }

  /* ---- DOWNLOADS ---- */
  function renderDownloads() {
    const wrap = $("#dl-grid"); if (!wrap) return;
    wrap.innerHTML = "";
    window.HAIB_PRODUCTS.forEach(p => {
      if (!p.platforms.length) return;
      const card = el("div", "dl-card reveal");
      card.id = "dl-" + p.id;
      const rows = p.platforms.map(pl => {
        const live = pl.url && (pl.status === "available" || pl.status === "review" || pl.status === "internal");
        const meta = window.HAIB_CHANNEL_LABEL[pl.channel][LANG] + (pl.arch ? ` · ${pl.arch}` : "");
        const right = live ? `<span class="go">${ICON.download}</span>` : statusBadge(pl.status);
        const tag = live ? "a" : "div", href = live ? ` href="${pl.url}"` : "";
        return `<${tag} class="dl-row ${live ? "live" : "pending"}"${href}>
          <span class="plat"><span>${osIcon(pl.os)}</span>
            <span><span class="pl-name">${window.HAIB_PLATFORM_LABEL[pl.os][LANG]}</span> <span class="pl-meta">${meta}</span></span></span>
          ${right}</${tag}>`;
      }).join("");
      card.innerHTML = `
        <div class="dl-card-head">${appIcon(p)}
          <div><h3>${p.name}</h3><span class="cat">${p.category ? p.category[LANG] : ""}</span></div>
          <a class="text-link" style="margin-left:auto" href="product.html?p=${p.id}">${tr("common.viewProduct")} ${ICON.arrow}</a>
        </div>
        ${rows}`;
      wrap.appendChild(card);
    });
  }

  /* ---- PRICING ---- */
  function renderPricing() {
    const wrap = $("#price-grid"); if (!wrap) return;
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

  /* ---- CHANGELOG (full, product filter) ---- */
  let CL_FILTER = "all";
  function renderChangelog() {
    const wrap = $("#cl-list"); if (!wrap) return;
    const filters = $("#cl-filters"), count = $("#cl-count");
    const prodById = {}; window.HAIB_PRODUCTS.forEach(p => prodById[p.id] = p);

    if (filters) {
      filters.innerHTML = "";
      const opts = [["all", tr("catalog.all")]].concat(window.HAIB_PRODUCTS.map(p => [p.id, p.name]));
      opts.forEach(([id, label]) => {
        const chip = el("button", "filter-chip");
        chip.setAttribute("aria-pressed", String(CL_FILTER === id));
        const pc = id !== "all" && prodById[id] ? `<span class="fdot" style="background:var(${prodById[id].accentVar})"></span>` : "";
        chip.innerHTML = pc + label;
        chip.onclick = () => { CL_FILTER = id; renderChangelog(); };
        filters.appendChild(chip);
      });
    }

    wrap.innerHTML = "";
    let shown = 0;
    window.HAIB_CHANGELOG.forEach(c => {
      const match = CL_FILTER === "all" || c.product === CL_FILTER;
      if (match) shown++;
      const p = prodById[c.product] || { name: c.product, accentVar: "--brand" };
      const row = el("div", "cl-row reveal" + (match ? "" : " hide"));
      const changes = c.changes.map(ch => `<div class="cl-change"><span class="cl-tag ${ch.tag}">${ch.tag}</span><span>${ch[LANG]}</span></div>`).join("");
      row.innerHTML = `
        <div class="cl-meta">
          <span class="cl-date">${c.date}</span>
          <span class="cl-prodver"><span class="pdot" style="background:var(${p.accentVar})"></span><span class="pname">${p.name}</span><span class="pver">v${c.version}</span></span>
          ${statusBadge(c.status)}
        </div>
        <div class="cl-changes">${changes}</div>`;
      wrap.appendChild(row);
    });
    if (count) count.textContent = shown + (LANG === "ko" ? "개 릴리스" : " releases");
    bindReveal();
  }

  /* ---- BOARD (category filter) ---- */
  let BOARD_FILTER = "all";
  const BOARD_CATS = {
    announce: { ko: "공지", en: "Announcements", dot: "var(--brand)" },
    release: { ko: "릴리스 노트", en: "Release Notes", dot: "var(--valid)" },
    known: { ko: "알려진 이슈", en: "Known Issues", dot: "var(--signal-fuzzy)" },
    support: { ko: "지원 공지", en: "Support Notices", dot: "var(--dust-slate)" }
  };
  function renderBoard() {
    const list = $("#notice-list"); if (!list) return;
    const filters = $("#board-filters"), count = $("#board-count");
    if (filters) {
      filters.innerHTML = "";
      const allChip = el("button", "filter-chip");
      allChip.setAttribute("aria-pressed", String(BOARD_FILTER === "all"));
      allChip.textContent = tr("catalog.all");
      allChip.onclick = () => { BOARD_FILTER = "all"; renderBoard(); };
      filters.appendChild(allChip);
      Object.keys(BOARD_CATS).forEach(k => {
        const c = BOARD_CATS[k];
        const chip = el("button", "filter-chip");
        chip.setAttribute("aria-pressed", String(BOARD_FILTER === k));
        chip.innerHTML = `<span class="fdot" style="background:${c.dot}"></span>${c[LANG]}`;
        chip.onclick = () => { BOARD_FILTER = k; renderBoard(); };
        filters.appendChild(chip);
      });
    }
    list.innerHTML = "";
    let shown = 0;
    window.HAIB_NOTICES.forEach(n => {
      const match = BOARD_FILTER === "all" || n.cat === BOARD_FILTER;
      if (match) shown++;
      const a = el("a", "notice reveal" + (match ? "" : " hide"));
      a.href = "#";
      a.innerHTML = `<span class="ntag ${n.cat}">${BOARD_CATS[n.cat][LANG]}</span><span class="ntitle">${n[LANG]}</span><span class="ndate">${n.date}</span>`;
      list.appendChild(a);
    });
    if (count) count.textContent = shown + (LANG === "ko" ? "건" : " notices");
    bindReveal();
  }

  function applyI18n() {
    document.documentElement.lang = LANG;
    document.querySelectorAll("[data-i18n]").forEach(e => { e.textContent = tr(e.getAttribute("data-i18n")); });
    document.querySelectorAll(".lang-toggle button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === LANG)));
    renderDownloads(); renderPricing(); renderChangelog(); renderBoard();
    bindReveal();
  }

  let _io;
  function bindReveal() {
    if (!_io) _io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); _io.unobserve(en.target); } }), { threshold: 0.08, rootMargin: "0px 0px -5% 0px" });
    document.querySelectorAll(".reveal:not(.in)").forEach((n, i) => { if (!n.dataset.d) { n.classList.add("d" + ((i % 4) + 1)); n.dataset.d = "1"; } _io.observe(n); });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-icon]").forEach(n => { n.innerHTML = ICON[n.dataset.icon] || ""; });
    document.querySelectorAll(".lang-toggle button").forEach(b => b.addEventListener("click", () => {
      LANG = b.dataset.lang; localStorage.setItem("haib-lang", LANG); applyI18n();
    }));
    const mb = $("#menu-btn"), mm = $("#m-menu");
    if (mb && mm) { mb.addEventListener("click", () => mm.classList.toggle("open")); mm.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mm.classList.remove("open"))); }
    applyI18n();
    bindReveal();
  });
})();
