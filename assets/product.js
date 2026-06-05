/* ──────────────────────────────────────────────────────────────
   HAIB — Product DETAIL page logic. ?p=<product-id>
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
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l1 4v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z"/></svg>',
    flow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="6" height="5" rx="1"/><rect x="15" y="15" width="6" height="5" rx="1"/><path d="M6 9v4a3 3 0 0 0 3 3h6"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2V5Z"/><path d="M8 7h6M8 10h6"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'
  };
  const osIcon = (os) => ICON[os] || ICON.download;

  let LANG = localStorage.getItem("haib-lang") || "ko";
  const T = () => window.HAIB_I18N[LANG];
  const tr = (k) => (T() && T()[k] != null) ? T()[k] : k;
  const $ = (s, r) => (r || document).querySelector(s);
  const el = (t, c, h) => { const n = document.createElement(t); if (c) n.className = c; if (h != null) n.innerHTML = h; return n; };
  const param = new URLSearchParams(location.search);

  let PID = param.get("p") || "keyradar";
  let P = (window.HAIB_PRODUCTS || []).find(x => x.id === PID);
  if (!P) { P = window.HAIB_PRODUCTS[0]; PID = P.id; }
  const D = (window.HAIB_PRODUCT_DETAIL || {})[PID] || { what: P.desc, features: [], shots: [], faq: [] };

  function statusBadge(code) { const s = window.HAIB_STATUS[code]; return s ? `<span class="badge ${s.cls}">${s[LANG]}</span>` : ""; }

  function setAccent() {
    const root = document.documentElement;
    root.style.setProperty("--pc", `var(${P.accentVar})`);
    root.style.setProperty("--pc-soft", `color-mix(in srgb, var(${P.accentVar}) 13%, transparent)`);
  }

  function renderHero() {
    $("#pd-app-icon").innerHTML = ICON[P.icon] || "";
    $("#pd-app-icon").style.background = `var(${P.accentVar})`;
    $("#pd-cat").textContent = P.category ? P.category[LANG] : "";
    $("#pd-name").textContent = P.name;
    $("#pd-tagline").textContent = P.tagline ? P.tagline[LANG] : P.desc[LANG];

    const meta = $("#pd-meta");
    const plats = uniqueOS(P).map(os => `<span class="badge">${window.HAIB_PLATFORM_LABEL[os][LANG]}</span>`).join("");
    meta.innerHTML = statusBadge(P.status) + plats;

    // hero preview: live scaled screen if available, else image-slot stays
    if (D.screens && D.screens.length) {
      const slot = $("#pd-hero-shot");
      if (slot) slot.outerHTML = embedHTML(D.screens[0].src);
    }

    const cta = $("#pd-cta");
    const lead = leadDownload(P);
    let html = "";
    if (lead) html += `<a class="btn btn-primary" href="${lead.url}">${osIcon(lead.os)}${window.HAIB_PLATFORM_LABEL[lead.os][LANG]} · ${window.HAIB_CHANNEL_LABEL[lead.channel][LANG]}</a>`;
    if (P.pricing) html += `<a class="btn btn-ghost" href="#pricing">${P.pricing.amount}</a>`;
    if (!html) {
      const label = (window.HAIB_STATUS[P.status] || {})[LANG] || tr("common.preparing");
      html = `<a class="btn btn-ghost" href="index.html#board">${label} · ${LANG === "ko" ? "노트에서 소식 받기" : "follow in Notes"} ${ICON.arrow}</a>`;
    }
    cta.innerHTML = html;

    document.title = `${P.name} — HAIB`;
  }

  function renderWhat() {
    $("#pd-what-lead").textContent = D.what[LANG];
    const aside = $("#pd-aside");
    // pull 3 quick points from features titles
    aside.innerHTML = (D.features || []).slice(0, 4).map(f =>
      `<div class="row">${ICON.check}<span>${f.title[LANG]}</span></div>`).join("");
  }

  function renderFeatures() {
    const grid = $("#feat-grid");
    grid.innerHTML = (D.features || []).map(f => `
      <div class="feat reveal">
        <div class="fi">${ICON[f.icon] || ICON.check}</div>
        <div><h4>${f.title[LANG]}</h4><p>${f.desc[LANG]}</p></div>
      </div>`).join("");
  }

  function embedHTML(src) {
    return `<div class="screen-embed" data-embed><iframe src="${src}" scrolling="no" tabindex="-1" title="preview"></iframe></div>`;
  }
  function scaleEmbeds() {
    document.querySelectorAll(".screen-embed").forEach(box => {
      const w = box.clientWidth; if (!w) return;
      const s = w / 1440;
      const ifr = box.querySelector("iframe");
      if (!ifr) return;
      ifr.style.width = "1440px";
      ifr.style.height = (box.clientHeight / s) + "px";
      ifr.style.transform = `scale(${s})`;
    });
  }

  function renderShots() {
    const grid = $("#shots-grid");
    if (D.screens && D.screens.length) {
      grid.innerHTML = D.screens.map(s => `
        <div class="shot reveal">
          ${embedHTML(s.src)}
          <div class="cap">${s[LANG]}</div>
        </div>`).join("");
    } else {
      grid.innerHTML = (D.shots || []).map((s, i) => `
        <div class="shot reveal">
          <image-slot id="shot-${PID}-${i}" placeholder="${s[LANG]}"></image-slot>
          <div class="cap">${s[LANG]}</div>
        </div>`).join("");
    }
  }

  function renderDownload() {
    const card = $("#pd-dl-card");
    card.innerHTML = P.platforms.map(pl => {
      const live = pl.url && (pl.status === "available" || pl.status === "review" || pl.status === "internal");
      const meta = window.HAIB_CHANNEL_LABEL[pl.channel][LANG] + (pl.arch ? ` · ${pl.arch}` : "");
      const right = live ? `<span class="go">${ICON.download}</span>` : statusBadge(pl.status);
      const tag = live ? "a" : "div", href = live ? ` href="${pl.url}"` : "";
      return `<${tag} class="dl-row ${live ? "live" : "pending"}"${href}>
        <span class="plat"><span>${osIcon(pl.os)}</span>
          <span><span class="pl-name">${window.HAIB_PLATFORM_LABEL[pl.os][LANG]}</span> <span class="pl-meta">${meta}</span></span></span>
        ${right}</${tag}>`;
    }).join("");
  }

  function renderPricing() {
    const sec = $("#pd-pricing-sec");
    if (!P.pricing) { sec.style.display = "none"; return; }
    const pr = P.pricing;
    const feats = pr.features[LANG].map(f => `<li>${ICON.check}<span>${f}</span></li>`).join("");
    $("#pd-price-card").innerHTML = `
      <div class="price-amount"><span class="amt">${pr.amount}</span><span class="per">${pr.per[LANG]}</span></div>
      <p class="price-kind">${pr.tier[LANG]} · ${pr.sub[LANG]}</p>
      <ul class="price-meta">${feats}</ul>
      <a class="btn btn-primary" href="${pr.ctaUrl}">${pr.cta[LANG]}</a>
      <div class="pay-note">${pr.pay}</div>`;
  }

  function renderFaq() {
    const list = $("#faq-list");
    list.innerHTML = (D.faq || []).map(f => `
      <div class="faq-item reveal">
        <button class="faq-q">${f.q[LANG]}<span class="qmark">${ICON.plus}</span></button>
        <div class="faq-a"><p>${f.a[LANG]}</p></div>
      </div>`).join("");
    list.querySelectorAll(".faq-q").forEach(btn => {
      btn.addEventListener("click", () => {
        const item = btn.parentElement;
        const ans = item.querySelector(".faq-a");
        const open = item.classList.toggle("open");
        ans.style.maxHeight = open ? (ans.scrollHeight + "px") : "0";
      });
    });
  }

  function renderChangelog() {
    const wrap = $("#pd-cl-mini");
    const rows = (window.HAIB_CHANGELOG || []).filter(c => c.product === PID).slice(0, 3);
    if (!rows.length) { wrap.innerHTML = `<div class="row"><span class="txt">${LANG === "ko" ? "아직 공개된 릴리스가 없습니다." : "No public releases yet."}</span></div>`; return; }
    wrap.innerHTML = rows.map(c => {
      const first = c.changes[0];
      return `<div class="row"><span class="ver">v${c.version}</span><span class="txt">${first[LANG]}</span><span class="dt">${c.date}</span></div>`;
    }).join("");
  }

  function uniqueOS(p) { const s = []; p.platforms.forEach(pl => { if (s.indexOf(pl.os) < 0) s.push(pl.os); }); return s; }
  function leadDownload(p) { return p.platforms.filter(pl => pl.url && (pl.status === "available" || pl.status === "review" || pl.status === "internal"))[0] || null; }

  function applyI18n() {
    document.documentElement.lang = LANG;
    document.querySelectorAll("[data-i18n]").forEach(e => { e.textContent = tr(e.getAttribute("data-i18n")); });
    document.querySelectorAll(".lang-toggle button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === LANG)));
    renderHero(); renderWhat(); renderFeatures(); renderShots(); renderDownload(); renderPricing(); renderFaq(); renderChangelog();
    bindReveal();
    requestAnimationFrame(scaleEmbeds);
    setTimeout(scaleEmbeds, 300);
  }

  let _io;
  function bindReveal() {
    if (!_io) _io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); _io.unobserve(en.target); } }), { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    document.querySelectorAll(".reveal:not(.in)").forEach((n, i) => { if (!n.dataset.d) { n.classList.add("d" + ((i % 3) + 1)); n.dataset.d = "1"; } _io.observe(n); });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-icon]").forEach(n => { n.innerHTML = ICON[n.dataset.icon] || ""; });
    setAccent();
    document.querySelectorAll(".lang-toggle button").forEach(b => b.addEventListener("click", () => {
      LANG = b.dataset.lang; localStorage.setItem("haib-lang", LANG); applyI18n();
    }));
    const mb = $("#menu-btn"), mm = $("#m-menu");
    if (mb && mm) { mb.addEventListener("click", () => mm.classList.toggle("open")); mm.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mm.classList.remove("open"))); }
    applyI18n();
    bindReveal();
    let rt;
    window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(scaleEmbeds, 120); });
  });
})();
