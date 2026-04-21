// UI dictionary for EN/UA interface switching.
const translations = {
  en: {
    documentTitle: "PASUE VELO | Premium Bicycle Customization",
    navContact: "Contact",
    heroEyebrow: "Bespoke Performance Aesthetics",
    heroTitleTemplate: "Art in Motion: Custom {model} Editions",
    heroSubtitle:
      "PASUE VELO transforms elite racing frames into collectible statements with handcrafted finishes, precision metallics, and couture-level detailing tailored to your vision.",
    collectionTitle: "Signature Collection",
    prev: "Prev",
    next: "Next",
    prevAria: "Previous slide",
    nextAria: "Next slide",
    tabsAria: "Bike model tabs",
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
    heroTitleTemplate: "Мистецтво в русі: кастомні {model} Editions",
    heroSubtitle:
      "PASUE VELO перетворює елітні шосейні рами на колекційні арт-об'єкти завдяки ручному фарбуванню, точній металізації та кутюрному рівню деталізації під ваше бачення.",
    collectionTitle: "Фірмова колекція",
    prev: "Назад",
    next: "Далі",
    prevAria: "Попередній слайд",
    nextAria: "Наступний слайд",
    tabsAria: "Таби моделей велосипедів",
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
  },
  {
    edition: "MOLTEN EMBER",
    title: "MOLTEN EMBER",
    shortDescription: {
      en: "Velvet-matte ember red with a molten silver logo and fiery glitch internals.",
      ua: "Оксамитовий ember-red із «рідким» срібним логотипом та вогняним glitch усередині рами."
    },
    details: {
      en: "A deep matte ember-red finish gives the frame a dense, heat-soaked presence. Inner fork, stays, and seat-tube surfaces feature a lava-style glitch mix of orange, charcoal black, and deep red. The main \"Cervélo\" logo is rendered in polished liquid silver for high-contrast impact against the matte body. Darkened blue bar tape and tan-wall tires complete the race-limited character.",
      ua: "Глибокий матовий ember-red надає рамі ефекту щільного розпеченого металу. Внутрішні поверхні вилки, пір'їв і підсідельної труби отримали lava-style glitch мікс із помаранчевого, вугільно-чорного та глибокого червоного. Основний логотип \"Cervélo\" виконаний у полірованому рідкому сріблі для максимального контрасту з матовою основою. Темніша синя обмотка керма та tan-wall покришки завершують образ лімітованого гоночного дизайну."
    },
    coverImage: "Pictures/preview/10.png",
    lightboxImage: "Pictures/full/10-MoltenEmber.png"
  },
  {
    edition: "NARDO SPECTER",
    title: "NARDO SPECTER",
    shortDescription: {
      en: "Stealth matte Nardo Grey with liquid silver branding and ghost-speed attitude.",
      ua: "Стелс-матовий Nardo Grey із liquid-silver брендингом та характером «невидимої швидкості»."
    },
    details: {
      en: "This concept is built around a rich matte Nardo Grey that absorbs light and emphasizes silent speed. The down-tube \"Cervélo\" mark appears in polished liquid silver, creating a sharp technical contrast over the dark body. Accents stay restrained: deeper blue bar tape and warm tan-wall tires balance the cold-metal look. The final effect is clean, elusive, and highly performance-focused.",
      ua: "Концепт побудований навколо насиченого матового Nardo Grey, що поглинає світло й підкреслює «тиху» швидкість. Логотип \"Cervélo\" на даунтюбі виконаний у полірованому liquid silver, формуючи чіткий технологічний контраст на темній рамі. Акценти стримані: темніша синя обмотка керма та теплі tan-wall покришки балансують холодний металевий характер. У підсумку дизайн виглядає чисто, невловимо й максимально гоночно."
    },
    coverImage: "Pictures/preview/11.png",
    lightboxImage: "Pictures/full/11-NardoSpecter.png"
  },
  {
    edition: "VISMA LEASE A BIKE TDF EDITION",
    title: "RENAISSANCE YELLOW",
    shortDescription: {
      en: "Tour de France team concept in race yellow with stealth black aero contrast.",
      ua: "Командний TDF-концепт у race-yellow з контрастними stealth-black аеро-зонами."
    },
    details: {
      en: "Designed as a special concept for Team Visma | Lease a Bike, this edition combines high-energy race yellow with deep matte black architecture for maximum peloton visibility and speed-focused presence. The primary \"Cervélo\" branding is rendered in polished silver for crisp contrast, while technical zones stay restrained and performance-clean. The final look is bold, elite, and unmistakably Grand Tour.",
      ua: "Спеціально розроблений концепт для Team Visma | Lease a Bike: поєднання енергійного race-yellow із глибокою матово-чорною аеро-архітектурою для максимальної видимості в пелотоні та відчуття швидкості. Основний брендинг \"Cervélo\" виконаний у полірованому сріблі для чіткого контрасту, а технічні зони залишені стриманими й «чистими». У підсумку дизайн сміливий, елітний і безпомилково рівня Grand Tour."
    },
    coverImage: "Pictures/preview/12.png",
    lightboxImage: "Pictures/full/12-Renaissance.png"
  }
];

const pinarelloDesigns = [
  {
    edition: "DOGMA F ATELIER",
    title: "ARGENTO CORSA",
    shortDescription: {
      en: "Satin race silver over a stealth base with refined pro-level contrast.",
      ua: "Сатинове race-silver на стелс-базі з вивіреним pro-level контрастом."
    },
    details: {
      en: "A restrained silver-forward concept tuned for modern race geometry. Satin metallic surfaces alternate with deep graphite zones, while core branding is finished in liquid-bright silver. The result is precise, technical, and unmistakably premium.",
      ua: "Стримана silver-концепція, адаптована під сучасну гоночну геометрію. Сатинові металічні площини чергуються з глибокими графітовими зонами, а ключовий брендинг виконаний у рідкому яскравому сріблі. У результаті дизайн точний, технічний і однозначно преміальний."
    },
    coverImage: "Pictures/preview/3.png",
    lightboxImage: "Pictures/full/3-MidnightEmerald.png"
  },
  {
    edition: "DOGMA F SHADOW",
    title: "CARBON NOIR",
    shortDescription: {
      en: "Matte black architecture with forged texture accents and stealth graphics.",
      ua: "Матовий чорний силует із forged-текстурою та stealth-графікою."
    },
    details: {
      en: "Built around layered blacks and low-visibility detailing, this theme emphasizes speed through texture, not color noise. Forged-style inserts appear under directional light, while dark chrome marks keep the frame monolithic and aggressive.",
      ua: "Побудований на багатошаровому чорному й low-visibility деталях, цей варіант підкреслює швидкість текстурою, а не шумом кольору. Вставки у forged-стилі проявляються в направленому світлі, а темний хром брендингу зберігає монолітний агресивний характер рами."
    },
    coverImage: "Pictures/preview/6.png",
    lightboxImage: "Pictures/full/6-OnyxCarbonStealth.png"
  },
  {
    edition: "DOGMA F ART LINE",
    title: "VIOLET PULSE",
    shortDescription: {
      en: "Electro-violet motion fade with polished silver script and race intent.",
      ua: "Рухомий electro-violet fade із полірованим silver script та гоночним характером."
    },
    details: {
      en: "A high-energy violet gradient shifts from rich purple to dark graphite at the rear triangle. Mirror-polished silver branding adds a jewelry-grade highlight, while inner-frame accents stay subtle to keep the silhouette race-clean.",
      ua: "Енергійний violet-градієнт переходить від насиченого фіолетового до темного графіту на задньому трикутнику. Дзеркально-полірований срібний брендинг додає ювелірний акцент, а внутрішні елементи залишаються стриманими, зберігаючи чистий гоночний силует."
    },
    coverImage: "Pictures/preview/1.png",
    lightboxImage: "Pictures/full/1-VioletShift.png"
  }
];

const sWorksDesigns = [
  {
    edition: "SL8 FACTORY SERIES",
    title: "STEALTH TITANIUM",
    shortDescription: {
      en: "Graphite-steel blend with satin silver detailing and wind-cut precision.",
      ua: "Суміш graphite-steel із сатиновими silver-деталями та аеродинамічною точністю."
    },
    details: {
      en: "A cool technical palette designed to emphasize the SL8 silhouette. The matte graphite body is balanced by titanium-silver accents on logo zones and cockpit details, delivering a surgical and ultra-modern finish.",
      ua: "Холодна технічна палітра, що підкреслює силует SL8. Матове graphite-покриття врівноважене titanium-silver акцентами в логотипних зонах та на деталях кокпіта, створюючи максимально сучасний і «точний» фініш."
    },
    coverImage: "Pictures/preview/11.png",
    lightboxImage: "Pictures/full/11-NardoSpecter.png"
  },
  {
    edition: "SL8 NIGHT RACE",
    title: "EMERALD SHADOW",
    shortDescription: {
      en: "Dark emerald matte with chrome-black branding for stealth race presence.",
      ua: "Темний emerald matte із chrome-black брендингом для stealth-гоночного образу."
    },
    details: {
      en: "Nearly black indoors, alive with emerald depth in sunlight. Branding is treated in dark chrome to preserve the stealth character, while selective silver technical marks keep visual hierarchy clear at speed.",
      ua: "У приміщенні майже чорний, а на сонці розкриває глибину emerald-відтінку. Брендинг виконаний у темному хромі для збереження stealth-стилю, а точкові срібні технічні мітки тримають чітку візуальну ієрархію на швидкості."
    },
    coverImage: "Pictures/preview/10.png",
    lightboxImage: "Pictures/full/10-MoltenEmber.png"
  },
  {
    edition: "SL8 ICON EDITION",
    title: "PEARL VELOCITY",
    shortDescription: {
      en: "Iridescent pearl white with subtle cosmic undertones and clean silver marks.",
      ua: "Іридисцентний перламутровий білий із космічними півтонами та чистим silver-маркуванням."
    },
    details: {
      en: "A layered pearl finish creates dynamic pink-green-blue shifts under motion. Satin silver branding keeps the bike elegant and controlled, while the bright body tone delivers immediate visual distinction in a race group.",
      ua: "Багатошаровий перламутровий фініш формує динамічні рожево-зелено-блакитні переливи в русі. Сатиновий срібний брендинг зберігає елегантність і контроль, а світлий корпус миттєво виділяє велосипед у гоночній групі."
    },
    coverImage: "Pictures/preview/8.png",
    lightboxImage: "Pictures/full/8-PearlescentFrost.png"
  }
];

const comingSoonImage = "Pictures/placeholders/coming-soon.svg";

for (const design of [...pinarelloDesigns, ...sWorksDesigns]) {
  design.coverImage = comingSoonImage;
  design.lightboxImage = comingSoonImage;
}

// Add new bike tabs by appending another object to this list.
const bikeCollections = [
  { id: "cervelo-s5", label: "Cervelo S5", designs: bikeDesigns },
  { id: "pinarello-dogma-f", label: "Pinarello Dogma F", designs: pinarelloDesigns },
  { id: "s-works-sl8", label: "S-Works SL8", designs: sWorksDesigns }
];

const bikeCollectionsById = Object.fromEntries(bikeCollections.map((collection) => [collection.id, collection]));

const defaultLocale = localStorage.getItem("velosLocale") === "en" ? "en" : "ua";

const state = {
  activeModelId: bikeCollections[0].id,
  activeIndex: 0,
  swipeStartX: 0,
  swipeStartY: 0,
  isPointerDown: false,
  suppressTrackClick: false,
  locale: defaultLocale
};

const elements = {
  bikeTabs: document.querySelector("#bikeTabs"),
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

function getActiveCollection() {
  return bikeCollectionsById[state.activeModelId] ?? bikeCollections[0];
}

function getActiveDesigns() {
  return getActiveCollection().designs;
}

function getHeroTitle() {
  const modelLabel = getActiveCollection().label;
  return t("heroTitleTemplate").replace("{model}", modelLabel);
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

function renderBikeTabs() {
  elements.bikeTabs.innerHTML = bikeCollections
    .map((collection) => {
      const isActive = collection.id === state.activeModelId;

      return `
        <button
          class="bike-tab rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.12em] transition sm:px-5 ${
            isActive
              ? "border-luxeSilver bg-luxeSilver text-black"
              : "border-luxeSilver/40 text-luxeSilver hover:border-luxeSilver hover:bg-white/10"
          }"
          type="button"
          role="tab"
          aria-selected="${isActive}"
          data-model-id="${collection.id}"
        >
          ${collection.label}
        </button>
      `;
    })
    .join("");
}

function updateStaticContent() {
  document.documentElement.lang = state.locale === "ua" ? "uk" : "en";
  document.title = t("documentTitle");

  elements.navContactBtn.textContent = t("navContact");
  elements.heroEyebrow.textContent = t("heroEyebrow");
  elements.heroTitle.textContent = getHeroTitle();
  elements.heroSubtitle.textContent = t("heroSubtitle");
  elements.collectionTitle.textContent = t("collectionTitle");

  elements.prevButton.textContent = t("prev");
  elements.nextButton.textContent = t("next");
  elements.prevButton.setAttribute("aria-label", t("prevAria"));
  elements.nextButton.setAttribute("aria-label", t("nextAria"));

  elements.bikeTabs.setAttribute("aria-label", t("tabsAria"));
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
  const activeDesigns = getActiveDesigns();

  elements.track.innerHTML = activeDesigns
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
  const activeDesigns = getActiveDesigns();

  elements.dots.innerHTML = activeDesigns
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
  const activeDesigns = getActiveDesigns();
  const previousIndex = state.activeIndex;
  const max = activeDesigns.length - 1;
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

function setActiveModel(modelId) {
  if (!bikeCollectionsById[modelId] || modelId === state.activeModelId) return;

  state.activeModelId = modelId;
  state.activeIndex = 0;
  closeLightbox();
  collapseExpandedDetails();

  updateStaticContent();
  renderBikeTabs();
  renderSlides();
  updateCarousel();
}

function setLanguage(locale) {
  if (locale !== "ua" && locale !== "en") return;

  state.locale = locale;
  localStorage.setItem("velosLocale", locale);

  updateLanguageButtons();
  updateStaticContent();
  renderBikeTabs();
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

function handleBikeTabsClick(event) {
  const tab = event.target.closest(".bike-tab");
  if (!tab) return;

  setActiveModel(tab.dataset.modelId);
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

  elements.bikeTabs.addEventListener("click", handleBikeTabsClick);
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
  renderBikeTabs();
  renderSlides();
  updateCarousel();
  bindEvents();
}

initCarousel();
