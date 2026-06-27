/* ═══════════════════════════════════════════════════════════
   قفّاز · Quffaz — Interactions & Media (Luxury Redesign)
   ═══════════════════════════════════════════════════════════ */

/* ---- الصور المحلية (images/1.png … images/117.png) ---- */
const IMG_IDS = Array.from({length: 30}, (_, i) => i + 1);
// [1, 2, 3, ..., 30]

/* ---- YouTube video IDs (فيديوهات القناة) ---- */
const YT_IDS = [
  "OWYhlBX0NZ4",
  "YMrE6DHoa0U",
  "W2dc2vc7b6A",
  "fcuxbYrnW5w",
  "BxK7cfPS56E",
  "31_xo2KYK8c"
];

const imgUrl   = id => `images/${id}.png`;
const thumbUrl = id => `images/${id}.png`;

const img = i => IMG_IDS[i % IMG_IDS.length];
const vid = i => YT_IDS[i % YT_IDS.length];

/* ---- YouTube helpers ---- */
const ytThumb   = id => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
const ytThumbMq = id => `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
const ytEmbed   = id => `https://www.youtube.com/embed/${id}?autoplay=1&controls=1&modestbranding=1&rel=0&iv_load_policy=3&loop=1&playlist=${id}`;

/* الصور محلية الآن — لا حاجة لـ fallback */
function withFallback(){ /* no-op */ }

/* ── YouTube logo SVG compact ── */
const YT_LOGO = `<svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="13" rx="3" fill="#FF0000"/><polygon points="7,3.5 7,9.5 13,6.5" fill="white"/></svg>`;

/* ---------- icons ---------- */
const ICON = {
  play:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  expand:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>'
};

/* =========================================================
   PORTFOLIO DATA (shared with work detail page)
   ========================================================= */
const PORTFOLIO = [
  { t:"بين الأيدي",        type:"فيلم وثائقي · وزارة الثقافة",   dur:"٤٢ دقيقة", cat:"doc",   badge:"وثائقي",   b:"b-doc",  id:"bayn-alaydi", client:"وزارة الثقافة", desc:"وثائقيٌّ يرصد الحِرف اليدوية السعودية بين أنامل صنّاعها، ويوثّق إرثاً يُنقل من جيلٍ إلى جيل." },
  { t:"ألوان الصحراء",     type:"فيلم وثائقي · أرامكو السعودية",  dur:"٢٨ دقيقة", cat:"doc",   badge:"وثائقي",   b:"b-doc",  wide:true, id:"alwan-alsahra", client:"أرامكو السعودية", desc:"رحلةٌ بصرية في تضاريس الجزيرة وألوانها، تُبرز التنوّع الطبيعي بعينٍ سينمائية متأنّية." },
  { t:"أفق",               type:"فيلم قصير · إنتاج مستقل",        dur:"١٨ دقيقة", cat:"short", badge:"فيلم قصير", b:"b-short", id:"ufuq", client:"إنتاج مستقل", desc:"فيلمٌ قصير يتأمّل الحلم والمسافة، بلغةٍ بصرية شاعرية ومونتاجٍ هادئ." },
  { t:"رؤية تتشكّل",       type:"فيلم مؤسسي · نيوم",             dur:"٦ دقائق",  cat:"corp",  badge:"شركات",    b:"b-corp", id:"ruya", client:"نيوم", desc:"فيلمٌ مؤسسي يحكي تحوّل الرؤية إلى عمران، عبر تصويرٍ معماري وجوّي يُبرز ضخامة المشروع." },
  { t:"رائحة المكان",      type:"إعلان تجاري · دار العود",        dur:"٦٠ ثانية", cat:"ad",    badge:"إعلان",    b:"b-ad",   id:"raehat-almakan", client:"دار العود", desc:"إعلانٌ حسّي يترجم عبق العود إلى صورة، بإضاءةٍ دافئة وإيقاعٍ أنيق." },
  { t:"صيّادو البحر الأحمر", type:"فيلم وثائقي · وزارة البيئة",   dur:"٣٥ دقيقة", cat:"doc",   badge:"وثائقي",   b:"b-doc",  id:"sayyadu", client:"وزارة البيئة", desc:"وثائقيٌّ يلازم صيّادي البحر الأحمر في يومهم، ويكشف علاقتهم العميقة بالماء." },
  { t:"موسم الرياض",       type:"تغطية فعالية · هيئة الترفيه",    dur:"١٢ دقيقة", cat:"event", badge:"فعالية",   b:"b-event", id:"mawsim", client:"هيئة الترفيه", desc:"تغطيةٌ شاملة لأجواء الموسم وزخمه، بكاميراتٍ متعددة تنقل نبض الحدث لحظةً بلحظة." },
  { t:"مائدة",             type:"إعلان تجاري · مطاعم الحضراء",    dur:"٤٥ ثانية", cat:"ad",    badge:"إعلان",    b:"b-ad",   id:"maeda", client:"مطاعم الحضراء", desc:"إعلانٌ يقدّم الطبق كقطعةٍ فنية، بتصويرٍ قريب يُشهّي ويُبهر." },
  { t:"أرض وماء",          type:"فيلم قصير · مهرجان أفلام السعودية", dur:"٢٢ دقيقة", cat:"short", badge:"فيلم قصير", b:"b-short", id:"ard-wama", client:"مهرجان أفلام السعودية", desc:"فيلمٌ قصير عن التشبّث بالأرض والحنين للماء، شارك في مهرجان أفلام السعودية." },
  { t:"إرث البنيان",       type:"فيلم مؤسسي · بنك الرياض",       dur:"٤ دقائق",  cat:"corp",  badge:"شركات",    b:"b-corp", id:"irth", client:"بنك الرياض", desc:"فيلمٌ مؤسسي يوثّق العمارة الداخلية لفروع المصرفية الخاصة، بعينٍ تُبرز فخامة التفاصيل." },
  { t:"قيادة الطموح",      type:"إعلان تجاري · تويوتا السعودية",  dur:"٩٠ ثانية", cat:"ad",    badge:"إعلان",    b:"b-ad",   id:"qiyada", client:"تويوتا السعودية", desc:"إعلانٌ يقرن الطموح بالطريق، بتصويرٍ ديناميكي ومعالجةٍ لونية حيّة." },
  { t:"التقنية تتكلم",     type:"فيلم مؤسسي · STC",              dur:"٥ دقائق",  cat:"corp",  badge:"شركات",    b:"b-corp", wide:true, id:"taqniya", client:"STC", desc:"فيلمٌ مؤسسي يجسّد حضور التقنية في الحياة اليومية، بأسلوبٍ سرديّ معاصر." }
];

const WD_TAGS = {
  doc:   ["تصوير وثائقي","مونتاج","تعليق صوتي","تلوين"],
  ad:    ["إخراج إعلاني","تصوير","موشن جرافيك","معالجة لونية"],
  corp:  ["فيلم مؤسسي","تصوير معماري","تصوير جوي","معالجة رقمية"],
  short: ["إخراج","سيناريو","تصوير سينمائي","مونتاج"],
  event: ["تغطية حدث","تعدد كاميرات","بثّ مباشر","مونتاج سريع"]
};

function renderPortfolio(){
  const grid = document.getElementById("pfGrid");
  if (!grid) return;
  grid.innerHTML = PORTFOLIO.map((p, i) => {
    return `
      <a class="pf-card${p.wide ? " wide" : ""} reveal" href="work.html?id=${p.id}" data-cat="${p.cat}" aria-label="عرض تفاصيل ${p.t}">
        <img src="${imgUrl(img(i))}" alt="${p.t}" loading="lazy" data-gid="${img(i)}" data-fb="${i}">
        <span class="pf-badge ${p.b}">${p.badge}</span>
        <span class="pf-play">${ICON.play}</span>
        <div class="pf-info">
          <div class="pf-type">${p.type}</div>
          <h3>${p.t}</h3>
          <div class="pf-dur">${p.dur}</div>
        </div>
      </a>`;
  }).join("");
  grid.querySelectorAll("img[data-fb]").forEach(el => withFallback(el, +el.dataset.fb));
  const count = document.getElementById("pfCount");
  if (count) count.textContent = `${PORTFOLIO.length} عمل`;
}

function initPortfolioFilters(){
  const btns = document.querySelectorAll("#pfFilters .filter-btn");
  if (!btns.length) return;
  btns.forEach(btn => btn.addEventListener("click", () => {
    btns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    let shown = 0;
    document.querySelectorAll("#pfGrid .pf-card").forEach(c => {
      const ok = f === "all" || c.dataset.cat === f;
      c.style.display = ok ? "" : "none";
      if (ok) shown++;
    });
    const count = document.getElementById("pfCount");
    if (count) count.textContent = `${shown} عمل`;
  }));
}

/* =========================================================
   HOME — photo gallery (masonry)
   ========================================================= */
function renderPhotos(){
  const m = document.getElementById("photoMasonry");
  if (!m) return;
  const order = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,2,5];
  m.innerHTML = order.map((i, k) => `
    <figure data-img="${img(i)}" tabindex="0" role="button" aria-label="عرض الصورة">
      <img src="${imgUrl(img(i))}" alt="من أعمال قفّاز" loading="lazy" data-gid="${img(i)}" data-fb="${k}">
      <span class="ph-ico">${ICON.expand}</span>
    </figure>`).join("");
  m.querySelectorAll("img[data-fb]").forEach(el => withFallback(el, +el.dataset.fb));
}

/* =========================================================
   HOME — service works rails (film + photo)
   ========================================================= */
const FILM_SVCS = [
  { id:"films-ad-works",    works:["رائحة المكان","قيادة الطموح","نكهة الديار","بريق العود","لحظة الاختيار","شغف الإبداع"] },
  { id:"films-doc-works",   works:["بين الأيدي","ألوان الصحراء","صيّادو البحر الأحمر","إرث البنيان","أرض وماء","جذور"] },
  { id:"films-event-works", works:["موسم الرياض","ليالي التأسيس","قمة المستقبل","نبض الحدث","منتدى الإعلام","ملتقى الابتكار"] },
  { id:"films-occ-works",   works:["ليلة العمر","فرحٌ وذكرى","لمسة وفاء","ضيافة الكرام","ذكرى لا تُنسى","فرح الأسرة"] }
];

const PHOTO_PROJECTS = {
  "photos-comm-works": [
    { name:"وزارة الرياضة",  logo:"assets/logos/1.svg",  imgs:[0,1,2,3,4,5,6,7] },
    { name:"نيوم",            logo:"assets/logos/2.svg",  imgs:[2,3,4,5,6,7,8,9] },
    { name:"أرامكو",          logo:"assets/logos/3.svg",  imgs:[4,5,6,7,8,9,10,11] },
    { name:"stc",             logo:"assets/logos/4.svg",  imgs:[6,7,8,9,10,11,12,13] },
  ],
  "photos-event-works": [
    { name:"قمة المستقبل",   logo:"assets/logos/5.svg",  imgs:[1,2,3,4,5,6,7,8] },
    { name:"منتدى الإعلام",  logo:"assets/logos/6.svg",  imgs:[0,3,4,5,6,7,8,9] },
    { name:"موسم الرياض",    logo:"assets/logos/7.svg",  imgs:[2,4,5,6,7,8,9,10] },
    { name:"ليالي التأسيس",  logo:"assets/logos/8.svg",  imgs:[3,5,6,7,8,9,10,11] },
  ],
  "photos-occ-works": [
    { name:"آل الشمري",       logo:"assets/logos/9.svg",  imgs:[0,1,2,3,4,5,6,7] },
    { name:"آل القحطاني",     logo:"assets/logos/10.svg", imgs:[1,3,4,5,6,7,8,9] },
    { name:"حفل التخرج",      logo:"assets/logos/1.svg",  imgs:[2,4,5,6,7,8,9,10] },
  ],
  "photos-aerial-works": [
    { name:"الرياض",          logo:"assets/logos/2.svg",  imgs:[0,1,2,3,4,5,6,7] },
    { name:"نيوم",            logo:"assets/logos/3.svg",  imgs:[2,3,4,5,6,7,8,9] },
    { name:"جدة",             logo:"assets/logos/4.svg",  imgs:[4,5,6,7,8,9,10,11] },
  ],
};

const PHOTO_SVCS = [
  { id:"photos-comm-works"   },
  { id:"photos-event-works"  },
  { id:"photos-occ-works"    },
  { id:"photos-aerial-works" }
];

function pfcLogo(name){
  const palette = ["#C8923A","#4A8FA3","#7B5EA7","#4A7C59","#B85B4A","#5B6DB8","#A07B3F","#3A7FC8"];
  const hue = name.split("").reduce((a,c) => a + c.charCodeAt(0), 0) % palette.length;
  const color = palette[hue];
  const label = name.replace(/\s+/g,"").slice(0,2);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'>`+
    `<rect width='48' height='48' rx='10' fill='${color}' fill-opacity='.12'/>`+
    `<rect width='48' height='48' rx='10' fill='none' stroke='${color}' stroke-width='1.2' stroke-opacity='.45'/>`+
    `<text x='50%' y='54%' dominant-baseline='middle' text-anchor='middle' `+
      `font-family='system-ui,Arial' font-size='13' font-weight='700' fill='${color}'>${label}</text>`+
  `</svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function renderPhotoTrack(track, imgs){
  track.innerHTML = imgs.map((imgIdx, k) => {
    const iId = IMG_IDS[imgIdx % IMG_IDS.length];
    return `<figure class="svc-work-card" data-img="${iId}" tabindex="0" role="button" aria-label="عرض الصورة">
      <img src="${imgUrl(iId)}" alt="" loading="lazy" data-gid="${iId}" data-fb="${k}">
      <span class="ph-ico">${ICON.expand}</span>
    </figure>`;
  }).join("");
  track.querySelectorAll("img[data-fb]").forEach(e => withFallback(e, +e.dataset.fb));
}

function renderServiceRails(){
  FILM_SVCS.forEach((svc, si) => {
    const el = document.getElementById(svc.id);
    if (!el) return;
    el.innerHTML = svc.works.map((title, wi) => {
      const ytId = YT_IDS[(si * 6 + wi) % YT_IDS.length];
      return `<article class="svc-work-card yt-card" data-ytvideo="${ytId}" data-title="${title}" tabindex="0" role="button" aria-label="تشغيل ${title}">
        <img src="${ytThumb(ytId)}" alt="${title}" loading="lazy" onerror="this.src='${ytThumbMq(ytId)}'">
        <span class="play-badge">${ICON.play}</span>
        <span class="yt-badge">${YT_LOGO}</span>
        <div class="svc-work-meta"><h4>${title}</h4></div>
      </article>`;
    }).join("");
  });

  PHOTO_SVCS.forEach(svc => {
    const track = document.getElementById(svc.id);
    if (!track) return;
    const projects = PHOTO_PROJECTS[svc.id] || [];
    if (!projects.length) return;



    const carousel = document.createElement("div");
    carousel.className = "photo-filter-chain pfc-carousel";

    const prevBtn = document.createElement("button");
    prevBtn.className = "pfc-arrow";
    prevBtn.setAttribute("aria-label", "السابق");
    prevBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M15 18l-6-6 6-6"/></svg>`;

    const nextBtn = document.createElement("button");
    nextBtn.className = "pfc-arrow";
    nextBtn.setAttribute("aria-label", "التالي");
    nextBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg>`;

    const viewport = document.createElement("div");
    viewport.className = "pfc-viewport";

    const pfcTrack = document.createElement("div");
    pfcTrack.className = "pfc-track";

    const N = projects.length;
    const GHOST = 2;
    // ghost cards: last 2 projects prepended, first 2 appended — for visual wrap-around
    const allProjs = [...projects.slice(N - GHOST), ...projects, ...projects.slice(0, GHOST)];
    pfcTrack.innerHTML = allProjs.map((p, domIdx) => {
      const isGhost = domIdx < GHOST || domIdx >= GHOST + N;
      const realI = isGhost ? (domIdx < GHOST ? N - GHOST + domIdx : domIdx - GHOST - N) : domIdx - GHOST;
      return `<button class="pfc-card${isGhost ? " pfc-ghost" : ""}" data-proj="${realI}" aria-selected="false" aria-label="${p.name}">` +
        `<span class="pfc-logo-wrap"><img class="pfc-logo-img" src="${p.logo || pfcLogo(p.name)}" alt="${p.name}" onerror="this.src='${pfcLogo(p.name)}'"></span>` +
        `<span class="pfc-name">${p.name}</span>` +
      `</button>`;
    }).join("");

    viewport.appendChild(pfcTrack);
    carousel.appendChild(prevBtn);
    carousel.appendChild(viewport);
    carousel.appendChild(nextBtn);
    track.parentElement.insertBefore(carousel, track);

    let realIdx = 0;

    function updateCarousel(){
      const domActive = realIdx + GHOST;
      const cards = pfcTrack.querySelectorAll(".pfc-card");
      const gap = 16;
      let offsets = [], x = 0;
      cards.forEach(card => { offsets.push(x); x += card.offsetWidth + gap; });

      // حساب عرض الـ viewport تلقائياً = 4 × متوسط STRIDE
      const totalStride = x - gap; // إجمالي العرض بدون الـ gap الأخيرة
      const avgStride = (totalStride + gap) / cards.length;
      const idealVpW = Math.round(avgStride * 4);
      const maxVpW = Math.round(window.innerWidth * 0.88);
      viewport.style.width = Math.min(idealVpW, maxVpW) + "px";

      const vpW = viewport.offsetWidth;
      const activeCard = cards[domActive];
      const cardCenter = offsets[domActive] + (activeCard ? activeCard.offsetWidth / 2 : 0);
      pfcTrack.style.transform = `translateX(${vpW / 2 - cardCenter}px)`;
      cards.forEach((card, domIdx) => {
        card.dataset.pos = String(domIdx - domActive);
        card.setAttribute("aria-selected", domIdx === domActive ? "true" : "false");
      });
      prevBtn.disabled = realIdx <= 0;
      nextBtn.disabled = realIdx >= N - 1;
    }

    function selectProject(idx){
      realIdx = Math.max(0, Math.min(idx, N - 1));
      updateCarousel();
      const proj = projects[realIdx];
      if (!proj) return;
      track.classList.remove("expanded");
      track.classList.add("collapsed");
      const moreBtn = track.parentElement.querySelector(".photo-more-btn");
      if (moreBtn) {
        moreBtn.classList.remove("active");
        const lbl = moreBtn.querySelector("span");
        if (lbl) lbl.textContent = "عرض المزيد";
      }
      renderPhotoTrack(track, proj.imgs);
    }

    prevBtn.addEventListener("click", () => selectProject(realIdx - 1));
    nextBtn.addEventListener("click", () => selectProject(realIdx + 1));

    let touchStartX = 0;
    viewport.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    viewport.addEventListener("touchend", e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) selectProject(realIdx + (dx < 0 ? 1 : -1));
    }, { passive: true });
    pfcTrack.querySelectorAll(".pfc-card").forEach((card, domIdx) => {
      const realI = parseInt(card.dataset.proj);
      card.addEventListener("click", () => { if (realI !== realIdx) selectProject(realI); });
    });

    renderPhotoTrack(track, projects[0].imgs);
    updateCarousel();
    window.addEventListener("load", updateCarousel, { once: false });
    // إعادة الحساب بعد تحميل أي لوقو في الكاروسيل
    pfcTrack.querySelectorAll("img.pfc-logo-img").forEach(img => {
      if (!img.complete) img.addEventListener("load", updateCarousel, { once: true });
    });
  });
}

function initSvcNumWatermarks(){
  document.querySelectorAll(".svc-svc-header").forEach(header => {
    const num = header.querySelector(".svc-svc-num");
    if (num) header.dataset.num = num.textContent.trim();
    // الزر يبقى داخل الـ header — يتحكم فيه CSS order:-1
  });
}

function initSvcMoreBtns(){
  const mobile = () => window.innerWidth <= 900;

  function applyMobileCollapse(track){
    if (track.classList.contains("photo-track")) return;
    const cards = track.querySelectorAll(".svc-work-card");
    cards.forEach((c, i) => { c.style.display = i < 2 ? "" : "none"; });
  }

  document.querySelectorAll(".svc-works-track").forEach(track => {
    track.classList.add("collapsed");
    if (mobile()) applyMobileCollapse(track);
  });

  document.querySelectorAll(".svc-more-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const track = document.getElementById(btn.dataset.target);
      if (!track) return;
      const isExpanded = track.classList.contains("expanded");
      const label = btn.querySelector("span");
      const isPhotoGrid = track.classList.contains("photo-track");

      if (mobile() && !isPhotoGrid) {
        const cards = track.querySelectorAll(".svc-work-card");
        if (!isExpanded) {
          const scrollY = window.scrollY;
          track.classList.remove("collapsed");
          track.classList.add("expanded");
          cards.forEach(c => { c.style.display = ""; });
          btn.classList.add("active");
          label.textContent = "عرض أقل";
          // نثبّت موضع التمرير حتى لا يقفز للأسفل
          requestAnimationFrame(() => window.scrollTo({ top: scrollY, behavior: "instant" }));
        } else {
          const scrollY = window.scrollY;
          track.classList.remove("expanded");
          track.classList.add("collapsed");
          applyMobileCollapse(track);
          btn.classList.remove("active");
          label.textContent = "عرض المزيد";
          requestAnimationFrame(() => window.scrollTo({ top: scrollY, behavior: "instant" }));
        }
        return;
      }

      // ديسكتوب
      if (isPhotoGrid) {
        if (!isExpanded) {
          track.classList.remove("collapsed");
          track.classList.add("expanded");
          btn.classList.add("active");
          label.textContent = "عرض أقل";
        } else {
          track.classList.remove("expanded");
          track.classList.add("collapsed");
          btn.classList.remove("active");
          label.textContent = "عرض المزيد";
        }
      } else {
        if (!isExpanded) {
          track.classList.remove("collapsed");
          track.classList.add("expanded");
          btn.classList.add("active");
          label.textContent = "عرض أقل";
          const cards = track.querySelectorAll(".svc-work-card");
          if (cards.length > 4) {
            const cardWidth = cards[0].offsetWidth + 4;
            requestAnimationFrame(() => {
              setTimeout(() => track.scrollBy({ left: -Math.abs(cardWidth * 2), behavior: "smooth" }), 100);
            });
          }
        } else {
          btn.classList.remove("active");
          label.textContent = "عرض المزيد";
          track.scrollTo({ left: 0, behavior: "smooth" });
          setTimeout(() => {
            track.classList.remove("expanded");
            track.classList.add("collapsed");
          }, 500);
        }
      }
    });
  });
}

/* =========================================================
   WORK DETAIL PAGE
   ========================================================= */
function renderWorkDetail(){
  const gal = document.getElementById("wdGallery");
  if (!gal) return;
  const id = new URLSearchParams(location.search).get("id");
  const n  = Math.max(0, PORTFOLIO.findIndex(p => p.id === id));
  const w  = PORTFOLIO[n] || PORTFOLIO[0];

  const titleEl = document.getElementById("wdTitle");
  if (titleEl) titleEl.innerHTML = `${w.t}<span class="wd-client"> | ${w.client}</span>`;
  const descEl = document.getElementById("wdDesc");
  if (descEl) descEl.textContent = w.desc;
  document.title = `${w.t} · قفّاز`;

  const numEl = document.getElementById("wdNum");
  if (numEl) numEl.textContent = String(n + 1).padStart(2, "0");

  const logo = document.getElementById("wdLogo");
  if (logo){
    const im = new Image();
    im.src = `assets/logos/${w.id}.svg`;
    im.alt = w.client;
    im.onerror = () => { logo.classList.add("is-text"); logo.textContent = w.client; };
    logo.innerHTML = "";
    logo.appendChild(im);
  }

  const tagsEl = document.getElementById("wdTags");
  if (tagsEl) tagsEl.innerHTML = (WD_TAGS[w.cat] || []).map(t => `<span>${t}</span>`).join("");

  const media = [{ kind:"ytvideo", id:vid(n) }];
  for (let k = 0; k < 5; k++) media.push({ kind:"img", id:img(n + k * 2) });

  gal.innerHTML = media.map((m, k) => {
    if (m.kind === "ytvideo"){
      return `
        <article class="wd-item yt-card" data-ytvideo="${m.id}" tabindex="0" role="button" aria-label="تشغيل الفيديو">
          <img src="${ytThumb(m.id)}" alt="${w.t}" loading="lazy" onerror="this.src='${ytThumbMq(m.id)}'">
          <span class="play-badge">${ICON.play}</span>
          <span class="yt-badge">${YT_LOGO}</span>
        </article>`;
    }
    return `
      <figure class="wd-item" data-img="${m.id}" tabindex="0" role="button" aria-label="عرض الصورة">
        <img src="${imgUrl(m.id)}" alt="${w.t}" loading="lazy" data-gid="${m.id}" data-fb="${k}">
        <span class="wd-ico">${ICON.expand}</span>
      </figure>`;
  }).join("");
  gal.querySelectorAll("img[data-fb]").forEach(el => withFallback(el, +el.dataset.fb));
}

/* =========================================================
   LIGHTBOX
   ========================================================= */
function initLightbox(){
  const lb       = document.getElementById("lightbox");
  if (!lb) return;
  const inner      = lb.querySelector(".lb-inner");
  const body       = lb.querySelector(".lb-body");
  const closeBtn   = lb.querySelector("#lbClose");
  const prevBtn    = lb.querySelector("#lbPrev");
  const nextBtn    = lb.querySelector("#lbNext");
  const titleEl    = lb.querySelector("#lbTitle");
  const counter    = lb.querySelector("#lbCounter");
  const hints      = lb.querySelector("#lbHints");
  const filmstrip  = lb.querySelector("#lbFilmstrip");
  const filmTrack  = lb.querySelector("#lbFilmTrack");

  let allCards = [], curIdx = 0, lastFocus = null;

  /* ── شريط الصور المصغرة ── */
  const buildFilmstrip = () => {
    if (!filmTrack) return;
    const multi = allCards.length > 1;
    lb.classList.toggle("has-strip", multi);
    if (!multi){ filmTrack.innerHTML = ""; return; }

    filmTrack.innerHTML = allCards.map((card, i) => {
      const ytId  = card.dataset.ytvideo;
      const imgId = card.dataset.img;
      let src = ytId ? ytThumb(ytId) : imgId ? thumbUrl(imgId) : "";
      const active = i === curIdx ? " active" : "";
      return `<button class="lb-film-item${active}" data-idx="${i}" aria-label="انتقل إلى ${i + 1}">
        ${src ? `<img src="${src}" alt="" loading="lazy"${ytId ? ` onerror="this.src='${ytThumbMq(ytId)}'"` : ""}>` : `<span class="lb-film-num">${i + 1}</span>`}
        ${ytId ? `<span class="lb-film-yt"></span>` : ""}
      </button>`;
    }).join("");

    filmTrack.querySelectorAll(".lb-film-item").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        curIdx = parseInt(btn.dataset.idx);
        renderCard(allCards[curIdx]);
        syncFilmstrip();
      });
    });
    scrollFilmstripToActive();
  };

  const syncFilmstrip = () => {
    if (!filmTrack) return;
    filmTrack.querySelectorAll(".lb-film-item").forEach((btn, i) => btn.classList.toggle("active", i === curIdx));
    scrollFilmstripToActive();
  };

  const scrollFilmstripToActive = () => {
    if (!filmTrack) return;
    const active = filmTrack.querySelector(".lb-film-item.active");
    if (active) active.scrollIntoView({ block:"nearest", inline:"center", behavior:"smooth" });
  };

  /* ── رسم محتوى الكارت ── */
  const renderCard = node => {
    const ytId  = node.dataset.ytvideo;
    const imgId = node.dataset.img;
    const title = node.dataset.title || node.querySelector("h4,h3")?.textContent?.trim() || "";

    inner.classList.toggle("video",   !!ytId);
    inner.classList.toggle("yt-mode", !!ytId);
    body.innerHTML = "";

    if (titleEl) titleEl.textContent = title;
    if (counter) counter.textContent = allCards.length > 1 ? `${curIdx + 1} / ${allCards.length}` : "";
    const showNav = allCards.length > 1;
    if (prevBtn) prevBtn.style.opacity = showNav ? "1" : "0";
    if (nextBtn) nextBtn.style.opacity = showNav ? "1" : "0";

    if (ytId){
      body.innerHTML = `
        <div class="yt-cinema">
          <iframe id="ytIframe"
            src="${ytEmbed(ytId)}"
            allow="autoplay; encrypted-media; fullscreen"
            allowfullscreen>
          </iframe>
          <div class="yt-overlay" id="ytOverlay">
            <button class="yt-ctrl-btn" id="ytFs" aria-label="شاشة كاملة (F)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
            </button>
          </div>
        </div>`;

      setTimeout(() => {
        const overlay = document.getElementById("ytOverlay");
        const fsBtn   = document.getElementById("ytFs");
        const cinema  = body.querySelector(".yt-cinema");
        if (!overlay) return;
        overlay.classList.add("vis");
        fsBtn?.addEventListener("click", e => {
          e.stopPropagation();
          document.fullscreenElement ? document.exitFullscreen() : cinema.requestFullscreen();
        });
      }, 150);

    } else if (imgId){
      body.innerHTML = `<img src="${imgUrl(imgId)}" alt="عرض الصورة">`;
    }

    syncFilmstrip();
  };

  /* ── فتح ── */
  const open = node => {
    lastFocus = document.activeElement;
    const track = node.closest(".svc-works-track,#wdGallery,#photoMasonry,#pfGrid");
    allCards = track
      ? [...track.querySelectorAll("[data-img],[data-ytvideo]")]
      : [node];
    curIdx = Math.max(0, allCards.indexOf(node));
    renderCard(node);
    buildFilmstrip();
    lb.classList.add("open");
    lb.setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden";
    if (hints) { hints.classList.add("vis"); setTimeout(() => hints.classList.remove("vis"), 3000); }
    closeBtn?.focus();
  };

  /* ── تنقل ── */
  const navigate = dir => {
    curIdx = (curIdx + dir + allCards.length) % allCards.length;
    renderCard(allCards[curIdx]);
  };

  /* ── إغلاق ── */
  const close = () => {
    lb.classList.remove("open","has-strip");
    lb.setAttribute("aria-hidden","true");
    body.innerHTML = "";
    if (filmTrack) filmTrack.innerHTML = "";
    document.body.style.overflow = "";
    allCards = []; curIdx = 0;
    if (lastFocus) lastFocus.focus();
  };

  /* ── سحب باللمس ── */
  let tx = 0;
  lb.addEventListener("touchstart", e => { tx = e.changedTouches[0].clientX; }, {passive:true});
  lb.addEventListener("touchend",   e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50 && allCards.length > 1) navigate(dx > 0 ? 1 : -1);
  });

  /* ── أحداث ── */
  document.addEventListener("click", e => {
    const card = e.target.closest("[data-img],[data-ytvideo]");
    if (card && !e.target.closest(".lightbox")) open(card);
  });

  document.addEventListener("keydown", e => {
    const card = e.target.closest && e.target.closest("[data-img],[data-ytvideo]");
    if (card && (e.key === "Enter" || e.key === " ")){ e.preventDefault(); open(card); return; }
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape")     { close(); return; }
    if (e.key === "ArrowLeft")  { e.preventDefault(); navigate(1); return; }
    if (e.key === "ArrowRight") { e.preventDefault(); navigate(-1); return; }
    if (e.key === "f" || e.key === "F") { document.getElementById("ytFs")?.click(); }
  });

  prevBtn?.addEventListener("click",  () => navigate(-1));
  nextBtn?.addEventListener("click",  () => navigate(1));
  closeBtn?.addEventListener("click", close);
  lb.addEventListener("click", e => { if (e.target === lb) close(); });
}

/* =========================================================
   HEADER / NAV / REVEAL / FORM / THEME
   ========================================================= */

function initStoryAnimations(){
  const sec = document.getElementById("story");
  if (!sec) return;

  /* count-up عند الدخول فقط */
  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    sec.querySelectorAll(".count-up").forEach(el => {
      const to = +el.dataset.to, dur = 1600, t0 = performance.now();
      (function tick(now){
        const p = Math.min((now - t0) / dur, 1);
        el.textContent = Math.round((1 - Math.pow(1-p, 3)) * to);
        if (p < 1) requestAnimationFrame(tick);
      })(performance.now());
    });
    io.disconnect();
  }, { threshold: 0.3 });
  io.observe(sec);
}


function initThemeToggle(){
  const btn  = document.getElementById("themeToggle");
  const root = document.documentElement;
  const cycle = ["dark","light"];
  const saved = localStorage.getItem("quffaz-theme");
  const initial = cycle.includes(saved) ? saved : "dark";
  root.setAttribute("data-theme", initial);

  btn && btn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = cycle[(cycle.indexOf(current) + 1) % cycle.length];
    root.setAttribute("data-theme", next);
    localStorage.setItem("quffaz-theme", next);
  });
}

function initHeader(){
  const header  = document.querySelector(".site-header");
  const headerH = () => header?.offsetHeight || 80;
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive:true });

  const burger = document.querySelector(".burger");
  const body   = document.body;
  if (burger){
    burger.addEventListener("click", () => body.classList.toggle("nav-open"));
    // Close mobile nav when a top-level nav link is clicked,
    // but NOT when a dropdown sub-link is clicked (those are handled in initNavDropdowns)
    // and NOT when the caret button is clicked.
    document.querySelectorAll(".nav-links > li > a").forEach(a =>
      a.addEventListener("click", () => body.classList.remove("nav-open")));
  }

  // انتقال ذكي لروابط الناف مع تعويض الهيدر
  document.querySelectorAll(".nav-links a[href^='#']").forEach(a => {
    a.addEventListener("click", e => {
      const hash = a.getAttribute("href");
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      // للـ services نتخطى padding العلوي ونظهر المحتوى مباشرة
      const extraOffset = hash === "#services"
        ? parseFloat(getComputedStyle(target).paddingTop) * 1.1
        : (hash === "#films" || hash === "#photos") ? 40 : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH() + extraOffset - 8;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  /* Scroll Spy */
  const navLinks  = document.querySelectorAll(".nav-links a");
  const sectionMap = [];
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    const id   = href === "index.html" ? "home" : href.startsWith("#") ? href.slice(1) : null;
    if (!id) return;
    const el = document.getElementById(id);
    if (el) sectionMap.push({ el, link });
  });

  if (sectionMap.length){
    const spy = () => {
      const mid = window.scrollY + window.innerHeight * 0.38;
      let current = sectionMap[0];
      for (const item of sectionMap){
        if (item.el.getBoundingClientRect().top + window.scrollY <= mid) current = item;
      }
      navLinks.forEach(l => l.classList.remove("active"));
      current.link.classList.add("active");
    };
    window.addEventListener("scroll", spy, { passive:true });
    spy();
  }
}

function initReveal(){
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)){ els.forEach(e => e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en, i) => {
      if (en.isIntersecting){
        setTimeout(() => en.target.classList.add("in"), (i % 4) * 80);
        io.unobserve(en.target);
      }
    });
  }, { threshold:.12, rootMargin:"0px 0px -8% 0px" });
  els.forEach(e => io.observe(e));

  // animation عناوين الخدمات عند التمرير
  const blockIo = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting){
        en.target.classList.add("block-in");
        blockIo.unobserve(en.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll(".svc-service-block").forEach(b => blockIo.observe(b));
}

function initForm(){
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const note = document.getElementById("formNote");
    note.classList.add("show");
    note.textContent = "تم استلام طلبك — سنعاود التواصل معك قريباً.";
    form.reset();
    setTimeout(() => note.classList.remove("show"), 6000);
  });
}

function initHeroReveal(){
  const hero = document.querySelector(".hero");
  if (!hero) return;
  requestAnimationFrame(() => {
    setTimeout(() => hero.classList.add("loaded"), 100);
  });
}

function initPhotoBgParallax(){
  if(window.innerWidth > 900) return;
  const sections = document.querySelectorAll('.mob-bg-section');
  if(!sections.length) return;
  let ticking = false;
  const run = () => {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      const progress = -rect.top / (window.innerHeight + sec.offsetHeight);
      const shift = progress * 60;
      sec.style.setProperty('--mob-parallax', shift + 'px');
    });
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if(!ticking){ requestAnimationFrame(run); ticking=true; }
  }, {passive:true});
  window.addEventListener('resize', () => {
    if(window.innerWidth > 900){
      sections.forEach(s => s.style.removeProperty('--mob-parallax'));
    } else run();
  });
  run();
}

function initNavDropdowns() {
  const headerH = () => document.getElementById("siteHeader")?.offsetHeight || 80;
  const isMobile = () => window.innerWidth <= 900;
  const items = document.querySelectorAll(".nav-has-drop");

  items.forEach(item => {
    const caretBtn = item.querySelector(".nav-caret-btn");
    const dropdown = item.querySelector(".nav-dropdown");

    // السهم يفتح/يغلق القائمة على الجهازين
    caretBtn.addEventListener("click", e => {
      e.stopPropagation();
      const isOpen = item.classList.contains("open");
      // على سطح المكتب نغلق بقية القوائم، على الجوال نتيح فتح أكثر من قائمة
      if (!isMobile()) items.forEach(i => i.classList.remove("open"));
      if (!isOpen) {
        item.classList.add("open");
      } else {
        item.classList.remove("open");
      }
    });

    // روابط القائمة الفرعية — تنتقل مع offset الهيدر
    dropdown.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        item.classList.remove("open");

        // على الجوال نغلق القائمة العلوية كذلك
        if (isMobile()) {
          document.body.classList.remove("nav-open");
        }

        const track = document.querySelector(link.getAttribute("href"));
        if (track) {
          // parentElement هو svc-service-block الذي يحتوي العنوان والأعمال معاً
          const block = track.parentElement || track;
          const top = block.getBoundingClientRect().top + window.scrollY - headerH() - 16;
          window.scrollTo({ top, behavior: "smooth" });
        }
      });
    });
  });

  // على سطح المكتب فقط — النقر خارج القائمة يغلقها
  document.addEventListener("click", e => {
    if (!isMobile() && !e.target.closest(".nav-has-drop")) {
      items.forEach(i => i.classList.remove("open"));
    }
  });

  // عند تغيير حجم الشاشة من الجوال لسطح المكتب أغلق القوائم المفتوحة
  window.addEventListener("resize", () => {
    if (!isMobile()) items.forEach(i => i.classList.remove("open"));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initHeroReveal();
  renderPortfolio();
  initPortfolioFilters();
  renderWorkDetail();
  renderServiceRails();
  initSvcNumWatermarks();
  initSvcMoreBtns();
  initLightbox();
  initStoryAnimations();
  initHeader();
  initForm();
  initReveal();
  initPhotoBgParallax();
  initNavDropdowns();
});

