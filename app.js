// UI dictionary for EN/UA interface switching.
const translations = {
  en: {
    documentTitle: "PASUE VELO | Premium Bicycle Customization",
    navContact: "Contact",
    heroEyebrow: "Bespoke Performance Aesthetics",
    heroTitle: "Art in Motion: Custom Cervelo S5 Editions",
    heroSubtitle:
      "PASUE VELO transforms elite racing frames into collectible statements with handcrafted finishes, precision metallics, and couture-level detailing tailored to your vision.",
    collectionTitle: "Signature Collection",
    prev: "Prev",
    next: "Next",
    prevAria: "Previous slide",
    nextAria: "Next slide",
    carouselPaginationAria: "Carousel pagination",
    carouselHint: "Tap the image to open it full-screen",
    contactEyebrow: "Private Consultation",
    contactTitle: "Commission Your One-Off Masterpiece",
    contactDescription:
      "Speak with our atelier team to define palette, texture, metallic signature, and race-ready clearcoat specifications.",
    emailPrefix: "Contact Email",
    telegramPrefix: "Telegram",
    footerRights: "All rights reserved.",
    detailsButton: "Details",
    hideDetailsButton: "Hide Details",
    close: "Close",
    closePreviewAria: "Close image preview",
    lightboxImageAlt: "Expanded bike design preview",
    goToSlide: "Go to slide",
    openPreview: "Open",
    previewSuffix: "in full-screen preview",
    bikeDesignSuffix: "bike design"
  },
  ua: {
    documentTitle: "PASUE VELO | Преміальна кастомізація велосипедів",
    navContact: "Контакт",
    heroEyebrow: "Преміальна естетика швидкості",
    heroTitle: "Мистецтво в русі: кастомні Cervelo S5 Editions",
    heroSubtitle:
      "PASUE VELO перетворює елітні шосейні рами на колекційні арт-об'єкти завдяки ручному фарбуванню, точній металізації та кутюрному рівню деталізації під ваше бачення.",
    collectionTitle: "Фірмова колекція",
    prev: "Назад",
    next: "Далі",
    prevAria: "Попередній слайд",
    nextAria: "Наступний слайд",
    carouselPaginationAria: "Пагінація каруселі",
    carouselHint: "Торкніться фото, щоб відкрити на весь екран",
    contactEyebrow: "Приватна консультація",
    contactTitle: "Замовте свій унікальний шедевр",
    contactDescription:
      "Поспілкуйтеся з нашою atelier-командою, щоб визначити палітру, текстури, металеві акценти та специфікацію гоночного захисного покриття.",
    emailPrefix: "Контактний Email",
    telegramPrefix: "Телеграм",
    footerRights: "Всі права захищено.",
    detailsButton: "Деталі",
    hideDetailsButton: "Сховати деталі",
    close: "Закрити",
    closePreviewAria: "Закрити перегляд зображення",
    lightboxImageAlt: "Збільшений перегляд дизайну велосипеда",
    goToSlide: "Перейти до слайда",
    openPreview: "Відкрити",
    previewSuffix: "у повноекранному перегляді",
    bikeDesignSuffix: "дизайн велосипеда"
  }
};

// Slide content source for the carousel.
const bikeDesigns = [
  {
    edition: "VIOLET SHIFT EDITION (The Masterpiece)",
    title: "THE VIOLET SHIFT",
    shortDescription: {
      en: "A dynamic Electro Violet front fading into a deep Onyx Black rear.",
      ua: "Динамічний перед у кольорі Electro Violet, що плавно переходить у глибокий Onyx Black ззаду."
    },
    details: {
      en: "The front of the frame is finished in high-gloss Electro Violet with a dynamic chameleon pearl effect, shifting from royal purple to indigo. This transitions smoothly into a velvety Matte Onyx Black rear. The primary \"Cervélo\" logo is rendered in highly polished, sculpted Liquid Sterling Silver script, designed to look like a solid metallic inlay. Brushed satin silver accents on the inner chainstays and fork blades provide a hidden layer of sophisticated detail. This edition is a seamless blend of luxurious artistry and high-performance racing.",
      ua: "Передня частина рами виконана у високоглянцевому Electro Violet з динамічним перламутровим хамелеон-ефектом, що переливається від королівського фіолетового до індиго. Далі відтінок плавно переходить у оксамитовий Matte Onyx Black на задній частині. Основний логотип \"Cervélo\" виконаний у вигляді рельєфного Liquid Sterling Silver із дзеркальним поліруванням, наче це суцільна металева інкрустація. Брашовані сатиново-срібні акценти на внутрішніх перах і лопатях вилки додають прихований шар вишуканої деталізації. Ця версія поєднує розкішне мистецтво та гоночну продуктивність без компромісів."
    },
    coverImage: "Pictures/preview/1.png",
    lightboxImage: "Pictures/full/1-VioletShift.png"
  },
  {
    edition: "ONYX CARBON STEALTH",
    title: "FORGED ONYX STEALTH",
    shortDescription: {
      en: "An exploration of pure black textures, from matte to forged carbon.",
      ua: "Дослідження чистої чорної естетики: від мату до текстури forged carbon."
    },
    details: {
      en: "A tactical interplay between textures within the darkest spectrum. The frame features a base of Matte Midnight Black, pressing into a complex \"Forged Carbon\" texture on select panels that reveals intricate, chaotic carbon patterns under direct sunlight. All branding, including the down tube logo, is executed in a subtle Stealth-Black or dark obsidian chrome finish for a monolithic, low-visibility look. This is the ultimate, aggressive interpretation of technical performance.",
      ua: "Тактична гра текстур у найтемнішому спектрі. База рами виконана у Matte Midnight Black, а на вибраних панелях переходить у складну текстуру \"Forged Carbon\", яка під прямим світлом відкриває хаотичні, технічні карбонові візерунки. Усе брендування, включно з логотипом на даунтюбі, зроблене в стриманому Stealth-Black або темному обсидіановому хромі, формуючи монолітний, малопомітний силует. Це максимально агресивне трактування технічної продуктивності."
    },
    coverImage: "Pictures/preview/2.png",
    lightboxImage: "Pictures/full/2-ForgetOnyxStealth.png"
  },
  {
    edition: "MIDNIGHT EMERALD STEALTH",
    title: "MIDNIGHT EMERALD",
    shortDescription: {
      en: "A deep, shifting teal that reveals its emerald secrets under the sun.",
      ua: "Глибокий змінний teal-відтінок, що відкриває смарагдовий характер під сонцем."
    },
    details: {
      en: "This sophisticated Deep Matte Emerald Teal paint appears nearly black in low light. Under direct sunlight, it glows with a rich, metallic green-blue depth. All branding is executed in Glossy Dark Chrome, offering a subtle reflection that doesn't overwhelm the unique frame color. Technical markings are kept in minimal silver-grey to maintain the \"stealth\" philosophy. It is unique, powerful, and mysterious.",
      ua: "Цей вишуканий Deep Matte Emerald Teal у слабкому освітленні виглядає майже чорним. Під прямим сонцем покриття оживає насиченою металічною глибиною зеленого та синього. Усе брендування виконане у Glossy Dark Chrome, що дає делікатний відблиск і не перекриває унікальний колір рами. Технічні маркування залишені в мінімальному сріблясто-сірому тоні, щоб зберегти \"stealth\"-філософію. Дизайн одночасно унікальний, потужний і загадковий."
    },
    coverImage: "Pictures/preview/3.png",
    lightboxImage: "Pictures/full/3-MidnightEmerald.png"
  },
  {
    edition: "ROYAL AMETHYST & GOLD",
    title: "ROYAL AMETHYST",
    shortDescription: {
      en: "Deep matte purple paired with opulent polished gold accents.",
      ua: "Глибокий матовий фіолет у парі з розкішними полірованими золотими акцентами."
    },
    details: {
      en: "The frame is finished in a rich, velvety Deep Matte Purple. This royal color provides the perfect backdrop for the down tube \"Cervélo\" logo, which is reimagined in opulent, highly reflective Polished Gold. Small accents on the chainstay and pro-team logos are also rendered in fine gold ink, creating a truly regal and head-turning design.",
      ua: "Рама виконана у насиченому оксамитовому Deep Matte Purple. Цей королівський колір стає ідеальним тлом для логотипа \"Cervélo\" на даунтюбі, переосмисленого у розкішному, високо-відбивному Polished Gold. Невеликі акценти на chainstay та pro-team логотипи також нанесені тонким золотим пігментом, формуючи по-справжньому королівський дизайн, що привертає погляд."
    },
    coverImage: "Pictures/preview/4.png",
    lightboxImage: "Pictures/full/4-RoyalAmethyst.png"
  },
  {
    edition: "IONIC SILVER & VIOLET",
    title: "IONIC SILVER",
    shortDescription: {
      en: "A technical, cool contrast of satin silver on matte purple.",
      ua: "Технічний, холодний контраст сатинового срібла на матовому фіолеті."
    },
    details: {
      en: "A more technical and aggressive \"cool\" design. The frame uses the same rich Deep Matte Purple base as the Royal edition, but all down tube branding and logos are rendered in a crisp, clean Satin Ionic Silver. This silver has a slight metallic gleam that gives the bike a precise, technical look, like a piece of advanced machinery.",
      ua: "Більш технічний та агресивний \"cool\"-дизайн. Рама використовує ту саму насичену базу Deep Matte Purple, що й Royal-версія, але все брендування і логотипи на даунтюбі виконані у чіткому Satin Ionic Silver. Це срібло має легкий металічний блиск, завдяки якому велосипед виглядає точно, технологічно й майже як елемент передової інженерії."
    },
    coverImage: "Pictures/preview/5.png",
    lightboxImage: "Pictures/full/5-IonicSilver.png"
  },
  {
    edition: "ONYX SLATE & LIQUID SILVER",
    title: "INDUSTRIAL ONYX SLATE",
    shortDescription: {
      en: "The raw beauty of natural stone meets polished precious metal.",
      ua: "Сира краса природного каменю зустрічається з полірованим дорогоцінним металом."
    },
    details: {
      en: "A truly unique design, featuring a hand-painted texture that mimics Deep Slate stone, complete with a fine satiny finish. The frame appears rugged yet refined. The down tube \"Cervélo\" logo is rendered in highly polished Liquid Platinum Silver, designed to look like molten precious metal cast directly onto the stone-like surface. Brushed metal internal accents on the frame tubes reinforce the industrial-luxury soul.",
      ua: "Справді унікальний дизайн із ручною текстурою, що імітує Deep Slate-камінь і доповнена делікатним сатиновим фінішем. Рама виглядає водночас брутально та витончено. Логотип \"Cervélo\" на даунтюбі виконаний у високо-полірованому Liquid Platinum Silver, ніби розплавлений дорогоцінний метал, відлитий прямо на кам'яну поверхню. Внутрішні акценти з брашованого металу на трубах рами підкреслюють industrial-luxury характер цієї версії."
    },
    coverImage: "Pictures/preview/6.png",
    lightboxImage: "Pictures/full/6-OnyxCarbonStealth.png"
  },
  {
    edition: "MIDNIGHT GLITCH CAMO",
    title: "MIDNIGHT GLITCH KINETIC",
    shortDescription: {
      en: "A high-speed geometric digital pattern designed for the modern racer.",
      ua: "Високошвидкісний геометричний digital-патерн, створений для сучасного гонщика."
    },
    details: {
      en: "A multi-layered kinetic \"Glitch\" pattern executed in deep Midnight Blue and profound Black. Complex geometric shards and fractured lines give the frame an illusion of motion even when stationary. This complex pattern is cut by high-contrast, pure Optic White branding, making the logos razor-sharp. The bar tape features a matching black and white weave. This design is high-energy and disruptive.",
      ua: "Багатошаровий кінетичний патерн \"Glitch\" у глибоких відтінках Midnight Blue та насиченого Black. Складні геометричні фрагменти й ламані лінії створюють ілюзію руху навіть у статиці. Контрастне брендування у чистому Optic White ріже патерн, роблячи логотипи максимально чіткими. Обмотка керма має відповідне чорно-біле плетіння. Це енергійний, провокативний і сучасний дизайн."
    },
    coverImage: "Pictures/preview/7.png",
    lightboxImage: "Pictures/full/7-MidnightGlitch.png"
  },
  {
    edition: "PEARL NEBULA (Iridescent Nebula)",
    title: "PEARLESCENT FROST",
    shortDescription: {
      en: "A sophisticated white mother-of-pearl finish with shifting cosmic undertones.",
      ua: "Вишуканий білий mother-of-pearl фініш із космічними переливами."
    },
    details: {
      en: "A deep, multi-layered White Mother-of-Pearl finish. This pearlescent paint surface shifts subtly with iridescent pink, green, and blue cosmic undertones that only reveal themselves under moving light. The primary \"Cervélo\" down tube logo is rendered in fine Satin Silver to match the sophisticated aesthetic, while smaller technical decals are applied in silver ink. It is pristine, ethereal, and undeniably luxurious.",
      ua: "Глибокий багатошаровий White Mother-of-Pearl фініш. Перламутрова поверхня м'яко переливається іридисцентними рожевими, зеленими та блакитними космічними півтонами, які проявляються лише в русі світла. Основний логотип \"Cervélo\" на даунтюбі виконаний у делікатному Satin Silver, а дрібні технічні декалі нанесені срібним чорнилом. Дизайн чистий, ефірний і безумовно розкішний."
    },
    coverImage: "Pictures/preview/8.png",
    lightboxImage: "Pictures/full/8-PearlescentFrost.png"
  },
  {
    edition: "THE MUSEUM SIGNATURE (Velos Artis Special)",
    title: "MUSEUM MASTERPIECE",
    shortDescription: {
      en: "The ultimate showcase of bespoke craftsmanship and exotic materials.",
      ua: "Найвища демонстрація bespoke-майстерності та екзотичних матеріалів."
    },
    details: {
      en: "Our flagship exhibition piece. The frame features the base velvet-matte Onyx Black with strategically placed glossy Forged Carbon panels that transition seamlessly into the Electro Violet pearl-effect top tube. The primary down tube \"Cervélo\" logo is sculpted mirror-polished sterling silver. The entire bike is presented in an impeccable, clean, ultra-luxury execution, worthy of a permanent place in a design museum display.",
      ua: "Наш флагманський виставковий екземпляр. Основа рами - velvet-matte Onyx Black із стратегічно розміщеними глянцевими панелями Forged Carbon, що безшовно переходять у top tube з перламутровим ефектом Electro Violet. Основний логотип \"Cervélo\" на даунтюбі виконаний у скульптурному sterling silver з дзеркальним поліруванням. Уся збірка подана в бездоганному ultra-luxury виконанні, гідному постійної експозиції в музеї дизайну."
    },
    coverImage: "Pictures/preview/9.png",
    lightboxImage: "Pictures/full/9-MuseumMasterpiece.png"
  }
];

const defaultLocale = localStorage.getItem("velosLocale") === "en" ? "en" : "ua";

const state = {
  activeIndex: 0,
  swipeStartX: 0,
  swipeStartY: 0,
  isPointerDown: false,
  suppressTrackClick: false,
  locale: defaultLocale
};

const elements = {
  track: document.querySelector("#carouselTrack"),
  dots: document.querySelector("#carouselDots"),
  prevButton: document.querySelector("#prevSlide"),
  nextButton: document.querySelector("#nextSlide"),
  lightbox: document.querySelector("#lightbox"),
  lightboxImage: document.querySelector("#lightboxImage"),
  closeLightbox: document.querySelector("#closeLightbox"),
  navContactBtn: document.querySelector("#navContactBtn"),
  heroEyebrow: document.querySelector("#heroEyebrow"),
  heroTitle: document.querySelector("#heroTitle"),
  heroSubtitle: document.querySelector("#heroSubtitle"),
  collectionTitle: document.querySelector("#collectionTitle"),
  contactEyebrow: document.querySelector("#contactEyebrow"),
  contactTitle: document.querySelector("#contactTitle"),
  contactDescription: document.querySelector("#contactDescription"),
  emailPrefix: document.querySelector("#emailPrefix"),
  telegramPrefix: document.querySelector("#telegramPrefix"),
  telegramLink: document.querySelector("#telegramLink"),
  footerYear: document.querySelector("#footerYear"),
  footerRights: document.querySelector("#footerRights"),
  langUa: document.querySelector("#langUa"),
  langEn: document.querySelector("#langEn")
};

function t(key) {
  return translations[state.locale][key];
}

function localizeValue(value) {
  if (typeof value === "string") return value;
  return value[state.locale] ?? value.en;
}

function updateLanguageButtons() {
  const buttons = [elements.langUa, elements.langEn];
  buttons.forEach((button) => {
    if (!button) return;

    const isActive = button.dataset.lang === state.locale;
    button.classList.toggle("bg-luxeSilver", isActive);
    button.classList.toggle("text-black", isActive);
    button.classList.toggle("text-luxeSilver", !isActive);
    button.classList.toggle("hover:bg-white/10", !isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function updateStaticContent() {
  document.documentElement.lang = state.locale === "ua" ? "uk" : "en";
  document.title = t("documentTitle");

  elements.navContactBtn.textContent = t("navContact");
  elements.heroEyebrow.textContent = t("heroEyebrow");
  elements.heroTitle.textContent = t("heroTitle");
  elements.heroSubtitle.textContent = t("heroSubtitle");
  elements.collectionTitle.textContent = t("collectionTitle");

  elements.prevButton.textContent = t("prev");
  elements.nextButton.textContent = t("next");
  elements.prevButton.setAttribute("aria-label", t("prevAria"));
  elements.nextButton.setAttribute("aria-label", t("nextAria"));

  elements.dots.setAttribute("aria-label", t("carouselPaginationAria"));

  elements.contactEyebrow.textContent = t("contactEyebrow");
  elements.contactTitle.textContent = t("contactTitle");
  elements.contactDescription.textContent = t("contactDescription");
  elements.emailPrefix.textContent = t("emailPrefix");
  elements.telegramPrefix.textContent = t("telegramPrefix");
  elements.footerRights.textContent = t("footerRights");

  elements.closeLightbox.textContent = t("close");
  elements.closeLightbox.setAttribute("aria-label", t("closePreviewAria"));

  if (!elements.lightboxImage.src) {
    elements.lightboxImage.alt = t("lightboxImageAlt");
  }
}

function renderSlides() {
  elements.track.innerHTML = bikeDesigns
    .map((bike, index) => {
      const shortDescription = localizeValue(bike.shortDescription);
      const details = localizeValue(bike.details);
      const openLabel = `${t("openPreview")} ${bike.title} ${t("previewSuffix")}`;
      const imageAlt = `${bike.title} ${t("bikeDesignSuffix")}`;

      return `
        <article class="w-full shrink-0">
          <div class="rounded-3xl border border-white/10 bg-black/40 p-3 sm:p-4">
            <div class="grid gap-4 md:grid-cols-[1.4fr_1fr] md:items-stretch md:gap-6">
            <div class="h-full">
              <button
                class="group relative block h-full w-full overflow-hidden rounded-2xl border border-white/10 active:scale-[0.995]"
                data-lightbox-src="${bike.lightboxImage}"
                data-lightbox-alt="${bike.title}"
                aria-label="${openLabel}"
              >
                <img
                  src="${bike.coverImage}"
                  alt="${imageAlt}"
                  class="h-[230px] w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-[300px] md:h-[420px]"
                />
                <div class="pointer-events-none absolute right-3 top-3 rounded-full border border-luxeSilver/50 bg-black/45 p-2 text-luxeSilver backdrop-blur-sm">
                  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 3H3v5M16 3h5v5M8 21H3v-5M21 16v5h-5" />
                  </svg>
                </div>
                <div class="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 md:p-4">
                  <span class="inline-flex items-center gap-2 rounded-full border border-luxeSilver/45 bg-black/35 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-luxeSilver backdrop-blur-sm">
                    <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14 5h5v5M10 19H5v-5M19 5l-7 7M5 19l7-7" />
                    </svg>
                    ${t("carouselHint")}
                  </span>
                </div>
              </button>
            </div>

            <div class="flex min-h-[248px] flex-col rounded-2xl border border-white/10 bg-black/25 p-5 md:min-h-[420px] md:p-6">
              <p class="text-xs uppercase tracking-[0.18em] text-luxeSilver/85">${bike.edition}</p>
              <h3 class="card-title-clamp mt-3 font-display text-2xl leading-tight text-luxeText">${bike.title}</h3>
              <p class="card-short-clamp mt-3 text-sm leading-relaxed text-white/75 sm:text-base">${shortDescription}</p>

              <button
                class="details-toggle mt-auto rounded-full border border-luxeSilver/45 px-5 py-2 text-sm font-semibold tracking-wide text-luxeSilver transition hover:border-luxeSilver hover:bg-white/10"
                data-target="details-${index}"
                aria-expanded="false"
                aria-controls="details-${index}"
              >
                ${t("detailsButton")}
              </button>

              <div id="details-${index}" class="details-panel mt-4 border-t border-white/10 pt-0">
                <p class="pt-4 text-sm leading-relaxed text-white/75 sm:text-base">${details}</p>
              </div>
            </div>
          </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderDots() {
  elements.dots.innerHTML = bikeDesigns
    .map(
      (_, index) => `
        <button
          class="dot h-2.5 w-5 rounded-full border transition duration-300 sm:w-8 ${
            index === state.activeIndex
              ? "border-luxeSilver bg-luxeSilver"
              : "border-white/20 bg-transparent hover:border-luxeSilver/80"
          }"
          data-index="${index}"
          aria-label="${t("goToSlide")} ${index + 1}"
        ></button>
      `
    )
    .join("");
}

function updateCarousel() {
  elements.track.style.transform = `translateX(-${state.activeIndex * 100}%)`;
  renderDots();
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 767px)").matches;
}

function collapseExpandedDetails() {
  const expandedButtons = elements.track.querySelectorAll('.details-toggle[aria-expanded="true"]');

  expandedButtons.forEach((button) => {
    const panelId = button.dataset.target;
    const panel = document.getElementById(panelId);
    if (!panel) return;

    button.setAttribute("aria-expanded", "false");
    button.textContent = t("detailsButton");
    panel.classList.remove("expanded");
    panel.classList.add("pt-0");
  });
}

function goToSlide(index) {
  const previousIndex = state.activeIndex;
  const max = bikeDesigns.length - 1;
  if (index < 0) {
    state.activeIndex = max;
  } else if (index > max) {
    state.activeIndex = 0;
  } else {
    state.activeIndex = index;
  }

  if (state.activeIndex !== previousIndex && isMobileViewport()) {
    collapseExpandedDetails();
  }

  updateCarousel();
}

function setLanguage(locale) {
  if (locale !== "ua" && locale !== "en") return;

  state.locale = locale;
  localStorage.setItem("velosLocale", locale);

  updateLanguageButtons();
  updateStaticContent();
  renderSlides();
  updateCarousel();
}

function toggleDetails(button) {
  const panelId = button.dataset.target;
  const panel = document.getElementById(panelId);
  if (!panel) return;

  const expanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!expanded));
  button.textContent = expanded ? t("detailsButton") : t("hideDetailsButton");

  panel.classList.toggle("expanded", !expanded);
  panel.classList.toggle("pt-0", expanded);
}

function openLightbox(imageSrc, imageAlt) {
  elements.lightboxImage.src = imageSrc;
  elements.lightboxImage.alt = imageAlt;
  elements.lightbox.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  elements.lightbox.classList.add("hidden");
  elements.lightboxImage.src = "";
  elements.lightboxImage.alt = t("lightboxImageAlt");
  document.body.style.overflow = "";
}

// Single delegated click handler for details toggles and lightbox triggers.
function handleTrackClick(event) {
  // Prevent accidental tap/click after a completed swipe gesture.
  if (state.suppressTrackClick) {
    state.suppressTrackClick = false;
    return;
  }

  const detailsButton = event.target.closest(".details-toggle");
  if (detailsButton) {
    toggleDetails(detailsButton);
    return;
  }

  const imageButton = event.target.closest("[data-lightbox-src]");
  if (imageButton) {
    openLightbox(imageButton.dataset.lightboxSrc, imageButton.dataset.lightboxAlt);
  }
}

function handleDotsClick(event) {
  const dot = event.target.closest(".dot");
  if (!dot) return;

  goToSlide(Number(dot.dataset.index));
}

function addSwipeSupport() {
  const swipeThreshold = 48;
  const horizontalIntentThreshold = 12;

  elements.track.addEventListener("pointerdown", (event) => {
    if (!event.isPrimary) return;
    // Keep desktop click behavior native; swipe is only for touch/pen pointers.
    if (event.pointerType === "mouse") return;

    state.isPointerDown = true;
    state.swipeStartX = event.clientX;
    state.swipeStartY = event.clientY;

    if (elements.track.setPointerCapture) {
      elements.track.setPointerCapture(event.pointerId);
    }
  });

  elements.track.addEventListener("pointermove", (event) => {
    if (!state.isPointerDown) return;

    const deltaX = event.clientX - state.swipeStartX;
    const deltaY = event.clientY - state.swipeStartY;
    const isHorizontalIntent = Math.abs(deltaX) > horizontalIntentThreshold && Math.abs(deltaX) > Math.abs(deltaY);

    if (isHorizontalIntent && event.cancelable) {
      event.preventDefault();
    }
  });

  const completeSwipe = (event) => {
    if (!state.isPointerDown) return;
    state.isPointerDown = false;

    if (elements.track.releasePointerCapture && elements.track.hasPointerCapture?.(event.pointerId)) {
      elements.track.releasePointerCapture(event.pointerId);
    }

    const deltaX = event.clientX - state.swipeStartX;
    const deltaY = event.clientY - state.swipeStartY;
    const isHorizontalSwipe = Math.abs(deltaX) >= swipeThreshold && Math.abs(deltaX) > Math.abs(deltaY);

    if (!isHorizontalSwipe) return;

    state.suppressTrackClick = true;
    window.setTimeout(() => {
      state.suppressTrackClick = false;
    }, 0);

    if (deltaX < 0) {
      goToSlide(state.activeIndex + 1);
    } else {
      goToSlide(state.activeIndex - 1);
    }
  };

  elements.track.addEventListener("pointerup", completeSwipe);
  elements.track.addEventListener("pointercancel", () => {
    state.isPointerDown = false;
  });

  // Prevent ghost image drag on desktop, keep click-to-open reliable.
  elements.track.addEventListener("dragstart", (event) => {
    event.preventDefault();
  });
}

function bindEvents() {
  elements.prevButton.addEventListener("click", () => goToSlide(state.activeIndex - 1));
  elements.nextButton.addEventListener("click", () => goToSlide(state.activeIndex + 1));

  elements.track.addEventListener("click", handleTrackClick);
  elements.dots.addEventListener("click", handleDotsClick);

  elements.langUa.addEventListener("click", () => setLanguage("ua"));
  elements.langEn.addEventListener("click", () => setLanguage("en"));

  elements.closeLightbox.addEventListener("click", closeLightbox);

  elements.lightbox.addEventListener("click", (event) => {
    if (event.target === elements.lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") goToSlide(state.activeIndex + 1);
    if (event.key === "ArrowLeft") goToSlide(state.activeIndex - 1);
  });

  addSwipeSupport();
}

function initCarousel() {
  elements.footerYear.textContent = String(new Date().getFullYear());
  updateLanguageButtons();
  updateStaticContent();
  renderSlides();
  updateCarousel();
  bindEvents();
}

initCarousel();
