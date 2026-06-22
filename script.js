/* ═══════════════════════════════════════════════════════════
   قفّاز · Quffaz — Interactions & Media (Luxury Redesign)
   ═══════════════════════════════════════════════════════════ */

/* ---- Google Drive media IDs ---- */
const IMG_IDS = [
  "17uRfuU9D7ZM4zWqo3b9t5u6KBJsItRb_",
  "14zp3QNHa_ObxTJfIofyPyqfzh-Aum1tG",
  "142SeMsEnpPyoNtucsSAwhLtYBZ38o9bm",
  "1jmHhhtGw6MWyX2A9nymN8w0K0FI4KJZS",
  "1uh6mABucf_ZJmLy29iCJEH2POHRVsv4D",
  "1IDlNk_-eAF_PaiydDAovwr0DnbfT5NUG",
  "1VRDBefgd8ibgVXTngCsQPpCUIH9IcOER",
  "1_GpEhl8wgLP33sjZyltkYNvxKHAIcmIp",
  "1OohQKS4qSUZfdUkWirWdrnhfIkEZtq7V",
  "166qNurql8VVVQD9Nl7G_k_6__0JAkKko",
  "1l8s3Pq2yCGODET2lGoPM0LF4wvVQ-xjZ",
  "1Iee4aJ4tpgtE_3CRY-bAXtIOb1WGRn_a",
  "1hGw11wBQghsLxwHqqHfLlvLhK-bLBeyS",
  "1se1g1YutCsoKbMm0q_fChiGsK0WJSdGX"
];
const VIDEO_IDS = [
  "14zpiizgvRZmzwU5Eo_l_RE5givmHI3ph",
  "1wTORQKa_vDFSGAK6KAmlzOeGnzXID7PV",
  "1fxAvD-PmKJ8OyP0u2qsZ-R_R84qwrVjx",
  "11TsYmsOg-Ir5YXsznHsqfxcRyMpQbWYx"
];

const imgUrl   = id => `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;
const thumbUrl = id => `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
const altUrl   = id => `https://lh3.googleusercontent.com/d/${id}=w1600`;
const embedUrl = id => `https://drive.google.com/file/d/${id}/preview`;

const img  = i => IMG_IDS[i % IMG_IDS.length];
const vid  = i => VIDEO_IDS[i % VIDEO_IDS.length];

/* graceful fallback gradients when Drive blocks hotlinking */
const FALLBACKS = [
  "linear-gradient(135deg,#2a1410,#0e0e12)",
  "linear-gradient(135deg,#221a10,#0e0e12)",
  "linear-gradient(135deg,#101820,#0e0e12)",
  "linear-gradient(135deg,#1c1320,#0e0e12)",
  "linear-gradient(135deg,#101c16,#0e0e12)"
];
function withFallback(el, idx){
  el.dataset.try = "0";
  el.addEventListener("error", () => {
    const id = el.dataset.gid;
    const step = +el.dataset.try;
    if (step === 0 && id){
      el.dataset.try = "1";
      el.src = altUrl(id);
      return;
    }
    const host = el.closest(".work-card,.pf-card,figure,.svc-work-card,.wd-item") || el.parentElement;
    if (host) host.style.background = FALLBACKS[idx % FALLBACKS.length];
    el.style.visibility = "hidden";
  });
}

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

const PHOTO_SVCS = [
  { id:"photos-comm-works",   works:["روح العلامة","إضاءة المنتج","تفاصيل التفرّد","حضور يُلفت","نكهة الفاخر","ترف اللحظة","ضوء وظل","انعكاس","لمسة ذهبية","هوية المنتج","تكوين فاخر","بصمة العلامة","عمق الماركة","صورة وقصة","ألوان العلامة","فخامة التفاصيل","زاوية مختلفة","إبداع الإضاءة"] },
  { id:"photos-event-works",  works:["لحظات القمة","الحضور الملكي","ذروة الحدث","التواصل الحقيقي","خلف الكواليس","سجل الذكريات","نبض القاعة","حضور مؤثر","لقطة قيادية","طاولة القرار","تصفيق الجمهور","لحظة التكريم","همسة على الهامش","نظرة القائد","لقاء الأفكار","ضيوف الشرف","بداية الجلسة","ختام مشرف"] },
  { id:"photos-occ-works",    works:["يوم العمر","عيون الفرح","التفاصيل الصغيرة","الذكرى الخالدة","ابتسامة حقيقية","لحظة خاصة","دفء العائلة","بداية الرحلة","وقفة العروس","أزهار الفرح","اللمسة الأخيرة","ذاكرة القلب","عناق الفرح","نظرة الأب","خطوة العمر","أضواء السهرة","هدية القلب","لحظة لن تُنسى"] },
  { id:"photos-aerial-works", works:["أفق الرياض","ضاحية الضوء","شوارع تحكي","هوية المكان","ارتفاع يكشف","مدينة من فوق","خطوط المدينة","ظلال العمارة","بانوراما الليل","المربعات الخضراء","طريق يمتد","سكون الفجر","ملامح الحي","أسطح المدينة","نهر الضوء","المدى الواسع","تقاطع الحضارة","سماء الرياض"] }
];

function renderServiceRails(){
  FILM_SVCS.forEach((svc, si) => {
    const el = document.getElementById(svc.id);
    if (!el) return;
    el.innerHTML = svc.works.map((title, wi) => {
      const vId = VIDEO_IDS[(si + wi) % VIDEO_IDS.length];
      const fb  = si * 6 + wi;
      return `<article class="svc-work-card" data-video="${vId}" tabindex="0" role="button" aria-label="تشغيل ${title}">
        <img src="${thumbUrl(vId)}" alt="${title}" loading="lazy" data-gid="${vId}" data-fb="${fb}">
        <span class="play-badge">${ICON.play}</span>
        <div class="svc-work-meta"><h4>${title}</h4></div>
      </article>`;
    }).join("");
    el.querySelectorAll("img[data-fb]").forEach(e => withFallback(e, +e.dataset.fb));
  });

  PHOTO_SVCS.forEach((svc, si) => {
    const el = document.getElementById(svc.id);
    if (!el) return;
    el.innerHTML = svc.works.map((title, wi) => {
      const iId = IMG_IDS[(si * 3 + wi) % IMG_IDS.length];
      const fb  = 30 + si * 6 + wi;
      return `<figure class="svc-work-card" data-img="${iId}" tabindex="0" role="button" aria-label="عرض ${title}">
        <img src="${imgUrl(iId)}" alt="${title}" loading="lazy" data-gid="${iId}" data-fb="${fb}">
        <span class="ph-ico">${ICON.expand}</span>
        <div class="svc-work-meta"><h4>${title}</h4></div>
      </figure>`;
    }).join("");
    el.querySelectorAll("img[data-fb]").forEach(e => withFallback(e, +e.dataset.fb));
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
  // كل track يبدأ collapsed
  document.querySelectorAll(".svc-works-track").forEach(track => {
    track.classList.add("collapsed");
  });

  document.querySelectorAll(".svc-more-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const track = document.getElementById(btn.dataset.target);
      if (!track) return;
      const isExpanded = track.classList.contains("expanded");
      const label = btn.querySelector("span");
      const isPhotoGrid = track.classList.contains("photo-track");

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
          label.textContent = "اعرض المزيد";
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
              setTimeout(() => {
                track.scrollBy({ left: -Math.abs(cardWidth * 2), behavior: "smooth" });
              }, 100);
            });
          }
        } else {
          btn.classList.remove("active");
          label.textContent = "اعرض المزيد";
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

  const media = [{ kind:"video", id:vid(n) }];
  for (let k = 0; k < 5; k++) media.push({ kind:"img", id:img(n + k * 2) });

  gal.innerHTML = media.map((m, k) => {
    if (m.kind === "video"){
      return `
        <article class="wd-item" data-video="${m.id}" tabindex="0" role="button" aria-label="تشغيل الفيديو">
          <img src="${thumbUrl(m.id)}" alt="${w.t}" loading="lazy" data-gid="${m.id}" data-fb="${k}">
          <span class="play-badge">${ICON.play}</span>
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
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  const inner = lb.querySelector(".lb-inner");
  const closeBtn = lb.querySelector(".lb-close");
  let lastFocus = null;

  const open = node => {
    lastFocus = document.activeElement;
    const vId = node.dataset.video;
    const imgId = node.dataset.img;
    inner.classList.toggle("video", !!vId);
    if (vId){
      inner.querySelector(".lb-body").innerHTML =
        `<iframe src="${embedUrl(vId)}" allow="autoplay; encrypted-media; fullscreen" allowfullscreen title="مشغّل الفيديو"></iframe>`;
    } else if (imgId){
      inner.querySelector(".lb-body").innerHTML =
        `<img src="${imgUrl(imgId)}" alt="عرض الصورة">`;
    }
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  };
  const close = () => {
    lb.classList.remove("open");
    inner.querySelector(".lb-body").innerHTML = "";
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  };

  document.addEventListener("click", e => {
    const card = e.target.closest("[data-video],[data-img]");
    if (card && !e.target.closest(".lightbox")) open(card);
  });
  document.addEventListener("keydown", e => {
    const card = e.target.closest && e.target.closest("[data-video],[data-img]");
    if (card && (e.key === "Enter" || e.key === " ")){ e.preventDefault(); open(card); }
    if (e.key === "Escape" && lb.classList.contains("open")) close();
  });
  closeBtn.addEventListener("click", close);
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

function initPaletteSwitcher(){
  const btn   = document.getElementById("paletteBtn");
  const panel = document.getElementById("palettePanel");
  const root  = document.documentElement;
  if (!btn || !panel) return;

  /* فتح/إغلاق */
  btn.addEventListener("click", e => {
    e.stopPropagation();
    const isOpen = panel.classList.toggle("open");
    panel.setAttribute("aria-hidden", String(!isOpen));
  });
  document.addEventListener("click", () => {
    panel.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
  });
  panel.addEventListener("click", e => e.stopPropagation());

  /* ── اللون الأول ── */
  function applyPrimary(accent, a2, a3, soft){
    root.style.setProperty("--accent",    accent);
    root.style.setProperty("--accent-2",  a2);
    root.style.setProperty("--accent-3",  a3);
    root.style.setProperty("--gold-soft", soft);
  }

  panel.querySelectorAll(".pal-swatch.p1").forEach(sw => {
    sw.addEventListener("click", () => {
      const { accent, a2, a3, soft } = sw.dataset;
      applyPrimary(accent, a2, a3, soft);
      panel.querySelectorAll(".pal-swatch.p1").forEach(s => s.classList.remove("pal-active"));
      sw.classList.add("pal-active");
      localStorage.setItem("quffaz-primary", JSON.stringify({ accent, a2, a3, soft }));
    });
  });

  /* ── خلفية الموقع ── */
  function applyBg(preset){
    if (preset === "default"){
      document.documentElement.removeAttribute("data-bg");
    } else {
      document.documentElement.setAttribute("data-bg", preset);
    }
  }

  panel.querySelectorAll(".pal-swatch.p3").forEach(sw => {
    sw.addEventListener("click", () => {
      const preset = sw.dataset.bg;
      applyBg(preset);
      panel.querySelectorAll(".pal-swatch.p3").forEach(s => s.classList.remove("pal-active"));
      sw.classList.add("pal-active");
      localStorage.setItem("quffaz-bg", preset);
    });
  });

  /* ── اللون الثاني ── */
  function applySecondary(sec){
    if (sec === "none"){
      root.style.setProperty("--accent-sec", "var(--accent)");
    } else {
      root.style.setProperty("--accent-sec", sec);
    }
  }

  panel.querySelectorAll(".pal-swatch.p2").forEach(sw => {
    sw.addEventListener("click", () => {
      const sec = sw.dataset.sec;
      applySecondary(sec);
      panel.querySelectorAll(".pal-swatch.p2").forEach(s => s.classList.remove("pal-active"));
      sw.classList.add("pal-active");
      localStorage.setItem("quffaz-secondary", sec);
    });
  });

  /* ── استعادة المحفوظ ── */
  const savedP = localStorage.getItem("quffaz-primary");
  if (savedP){
    try {
      const { accent, a2, a3, soft } = JSON.parse(savedP);
      applyPrimary(accent, a2, a3, soft);
      panel.querySelectorAll(".pal-swatch.p1").forEach(sw => {
        sw.classList.toggle("pal-active", sw.dataset.accent === accent);
      });
    } catch(e){}
  }

  const savedBg = localStorage.getItem("quffaz-bg");
  if (savedBg){
    applyBg(savedBg);
    panel.querySelectorAll(".pal-swatch.p3").forEach(sw => {
      sw.classList.toggle("pal-active", sw.dataset.bg === savedBg);
    });
  }

  const savedS = localStorage.getItem("quffaz-secondary");
  if (savedS){
    applySecondary(savedS);
    panel.querySelectorAll(".pal-swatch.p2").forEach(sw => {
      sw.classList.toggle("pal-active", sw.dataset.sec === savedS);
    });
  }
}

function initThemeToggle(){
  const btn  = document.getElementById("themeToggle");
  const root = document.documentElement;
  const saved = localStorage.getItem("quffaz-theme");
  if (saved === "light") root.setAttribute("data-theme","light");
  else root.setAttribute("data-theme","dark");

  btn && btn.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";
    if (isLight){
      root.setAttribute("data-theme","dark");
      localStorage.setItem("quffaz-theme","dark");
    } else {
      root.setAttribute("data-theme","light");
      localStorage.setItem("quffaz-theme","light");
    }
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
  initPaletteSwitcher();
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

