// Slovak site copy. en.js and de.js mirror this shape exactly: same keys, same array lengths and order.
// Optional per-language extras: stats[i].prefix / stats[i].suffix override the number formatting in Stats.jsx.
// Prices, icons, photos and styling flags stay in the components and are matched to these arrays by index.
export default {
  nav: {
    services: 'Služby',
    pricing: 'Cenník',
    cases: 'Prípadové štúdie',
    about: 'O nás',
    path: 'Vaša situácia',
    cta: '15-min konzultácia zdarma',
    menu: 'Menu',
    language: 'Jazyk',
  },

  hero: {
    // [line 1, line 2 before the highlight, highlight, line 3]
    title: ['Majte pod kontrolou', 'financie', 'aj právne riziká', 'svojho podnikania.'],
    sub: 'Účtovníctvo, dane a právo pre podnikateľov, ktorí nechcú robiť rozhodnutia naslepo.',
    cta: '15-minútová konzultácia zdarma',
    secondary: 'Naše služby',
    note: 'Odpoveď do 24 hodín. Bez záväzkov.',
    // Exactly 3 words: the scroll timing in Hero.jsx is matched by index
    words: ['Financie.', 'Dane.', 'Právo.'],
    final: ['Jeden partner.', 'Všetko pod kontrolou.'],
    hint: 'Scrollujte',
  },

  comparison: {
    title: ['Prečo väčšina firiem robí', 'chyby v účtovníctve'],
    sub: 'Väčšina účtovníkov rieši vaše doklady. Nie váš biznis.',
    old: 'Tradičný prístup',
    rows: [
      { label: 'Výkazy', old: 'Raz ročne, papierovo, neskoro', new: 'Real-time prehľad kedykoľvek' },
      { label: 'Dane', old: 'Reaktívne, keď je problém', new: 'Proaktívne, pred termínom' },
      { label: 'Komunikácia', old: 'Email, čakáte dni', new: 'Odpoveď do 24h, dedikovaný kontakt' },
      { label: 'Reporting', old: 'Žiadny', new: 'Mesačné reporty pre Váš biznis' },
      { label: 'Zakladanie', old: 'Sami na úradoch', new: 'My zariadime všetko' },
    ],
    tags: ['Strácate prehľad', 'Rastúce daňové riziko', 'Neskoré rozhodovanie'],
  },

  services: {
    heading: ['Končí éra', 'rozhodovania naslepo.'],
    cta: 'Zistiť viac',
    items: [
      { name: 'Účtovníctvo', desc: 'Jednoduché aj podvojné, mzdová agenda, podklady pre banky.' },
      { name: 'Dane', desc: 'Daňové priznania, optimalizácia, zastupovanie pri kontrole.' },
      { name: 'Reporting', desc: 'Prehľadné reporty, ktoré vám dávajú kontrolu nad podnikaním.' },
      { name: 'Zakladanie firiem', desc: 'S.R.O., SZČO, predaj firiem. Od A po Z.' },
      { name: 'Mediácia', desc: 'Riešenie obchodných a pracovných sporov mimosúdnou cestou.' },
      { name: 'Kryptomeny a blockchain', desc: 'Konzultácie, semináre a integrácia kryptomien do biznisu. Účtovné, daňové aj právne aspekty pod jednou strechou.' },
      { name: 'Realitná činnosť', desc: 'Kompletný servis pri predaji, kúpe a prenájme nehnuteľností vrátane vybavenia úveru z bankových inštitúcií.' },
    ],
  },

  stats: [
    { label: 'rokov praxe', desc: 'Na slovenskom a medzinárodnom podnikateľskom trhu.' },
    { label: 'klientov', desc: 'Pomohli sme im zvýšiť zisky a znížiť daňové riziko.' },
    { label: 'ročné tržby klientov', desc: 'Súhrnné tržby firiem, ktorým vedieme účtovníctvo.' },
  ],

  pricing: {
    title: ['Transparentné ceny.', 'Žiadne prekvapenia.'],
    from: 'Cena od',
    main: [
      {
        tag: 'Compliance základ',
        title: 'Jednoduché účtovníctvo',
        subtitle: 'Pre živnostníkov a menšie podnikanie',
        unit: '/ mesiac',
        features: ['Vedenie účtovníctva', 'Pravidelné výstupy', 'Osobne alebo online'],
        cta: 'Získať presnú ponuku',
      },
      {
        tag: 'Kontrola + Reporting',
        badge: 'Najčastejšia voľba',
        title: 'Podvojné účtovníctvo',
        subtitle: 'Pre firmy a platiteľov DPH',
        unit: '/ mesiac',
        highlight: 'Pre firmy, ktoré chcú mať prehľad a robiť rozhodnutia na základe dát.',
        features: ['Kompletné vedenie agendy', 'Kvartálne výsledky', 'Konzultácie v cene'],
        note: 'Transparentný systém: vyšší objem dokladov = nižšia cena za položku.',
        cta: 'Získať presnú ponuku',
      },
      {
        tag: 'Správa zamestnancov',
        title: 'Mzdy a Personalistika',
        subtitle: 'Kompletná správa zamestnancov',
        unit: '/ úkon',
        features: ['Spracovanie miezd', 'Pracovné zmluvy', 'Komunikácia so SP a ZP'],
        cta: 'Zobraziť detaily',
      },
    ],
    secondary: [
      {
        title: 'Daňové a Poradenské Služby',
        subtitle: 'Odborné krytie vášho podnikania',
        features: ['Daňové priznania', 'Konzultácie 75 € / hod', 'Administratíva'],
        cta: 'Zobraziť detaily',
      },
      {
        title: 'Zakladanie a Predaj Firiem',
        subtitle: 'Individuálne riešenie pre komplexné prípady',
        price: 'Na mieru',
        priceLabel: 'Fixné balíky',
        features: ['Zakladanie spoločností', 'Ready-made firmy', 'Likvidácia firiem'],
        cta: 'Konzultovať riešenie',
      },
    ],
    partner: {
      tag: 'Odporúčaný partner',
      title: 'Potrebujete americkú firmu?',
      text: 'Založenie US LLC pre slovenských podnikateľov odporúčame cez usfirma.sk.',
    },
    trust: ['✓ Bez záväzkov', '✓ Odpoveď do 24h', '✓ Individuálny prístup'],
    individual: 'Každému klientovi nastavujeme cenu individuálne podľa objemu a potrieb.',
    range: 'Väčšina klientov: 80 € – 450 € / mesačne.',
    meter: ['80 € · základ', '450 € · širší rozsah'],
    dependsOn: 'Cena závisí od počtu účtovných zápisov a rozsahu služieb:',
    extras: [
      'Evidencia a spracovanie zálohových odberateľských faktúr',
      'Evidencia a spracovanie zálohových dodávateľských faktúr',
      'Kalkulácia dane z finančných transakcií (DFT)',
      'Spracovanie a podanie podkladov k DFT',
      'Evidencia a tvorba dokladov vo VRP',
    ],
    offer: 'Pripravíme vám presnú ponuku do 24h.',
  },

  cases: {
    heading: 'Výsledky, ktoré hovoria za nás',
    items: [
      {
        tag: 'E-commerce',
        title: 'Z chaosu k prehľadu za 3 mesiace',
        result: '+18% marža, -23% daňová záťaž',
        desc: 'Klient nevedel kde mu unikajú peniaze. Nastavili sme reporting a daňovú optimalizáciu.',
      },
      {
        tag: 'S.R.O.',
        title: 'Zakladanie s.r.o. rýchlo a operatívne',
        result: 'Žiadne fronty na úradoch',
        desc: 'Zaregistrovali sme spoločnosť, zriadili účtovníctvo a nastavili mzdovú agendu.',
      },
      {
        tag: 'Mediácia',
        title: 'Obchodný spor vyriešený mimosúdne',
        result: 'Úspora na súdnych trovách',
        desc: 'Mediáciou sme vyriešili spor medzi obchodnými partnermi bez súdu.',
      },
      {
        tag: 'Mediácia · Rodinné právo',
        title: 'Úprava styku s maloletými deťmi',
        result: 'Dobrá dohoda vytvára duševnú pohodu',
        desc: 'Mediáciou sme pomohli rodičom dohodnúť sa na úprave styku s deťmi bez súdneho sporu.',
      },
    ],
  },

  founder: [
    {
      eyebrow: 'Zakladateľka hovorí',
      quote: '"Riešila som stovky firiem, ktoré strácali kontrolu nad financiami. Problém nie je v číslach. Problém je, že ich nikto včas neukáže."',
      role: 'Zakladateľka a strategická poradkyňa',
      desc: 'Právnička a mediátorka s praxou od roku 2003. Pôsobila na Úrade práce, v zdravotníctve aj obchodných spoločnostiach. Od roku 2012 zapísaná mediátorka.',
    },
    {
      eyebrow: 'Konzultant hovorí',
      quote: '"Firmy robia v kryptomenách rozhodnutia bez dát a bez systému. Výsledkom je zbytočné riziko a straty. Kryptomeny nemajú byť experiment. Majú byť riadená súčasť biznisu."',
      role: 'Konzultant pre kryptomeny a digitálne aktíva',
      desc: 'Pomáha klientom pochopiť a implementovať kryptomeny tak, aby boli bezpečné, legálne a prehľadne integrované do ich podnikania. Prepája technológiu s reálnym finančným a právnym fungovaním firmy.',
    },
  ],

  path: {
    title: 'Vyberte svoju situáciu',
    sub: 'Dostanete riešenie na mieru.',
    items: [
      {
        label: 'Som podnikateľ',
        problems: [
          'Neviem, kam miznú peniaze každý mesiac.',
          'Bojím sa daňovej kontroly, lebo neviem, či je všetko v poriadku.',
          'Chcem mať konečne jasno a rozhodovať sa s istotou.',
        ],
        cta: 'Chcem získať kontrolu',
      },
      {
        label: 'Zakladám firmu',
        badge: 'Najčastejší prípad',
        problems: [
          'Neviem, kde začať - každý mi hovorí niečo iné.',
          'Strácam týždne behom po úradoch a stále nič.',
          'Chcem mať firmu hotovú rýchlo a bez zbytočného stresu.',
        ],
        cta: 'Chcem zaregistrovať firmu',
      },
    ],
  },

  lead: {
    heading: ['Pripravení na kontrolu', 'nad biznisom?'],
    sub: 'Zanechajte kontakt a do 24 hodín sa vám ozveme s termínom konzultácie.',
    sentTitle: 'Odoslané!',
    sentText: 'Ozveme sa vám do 24 hodín.',
    name: 'Vaše meno',
    company: 'Názov firmy',
    type: 'Typ podnikania',
    types: { szco: 'SZČO', sro: 'S.R.O.', new: 'Zakladám firmu' },
    email: 'Email',
    phone: 'Telefón',
    sending: 'Odosielam…',
    submit: '15-minútová konzultácia zdarma',
    error: 'Odoslanie sa nepodarilo. Skúste to prosím znova.',
    disclaimer: 'Bez záväzkov. Vaše údaje nezdieľame s tretími stranami.',
  },

  footer: {
    tagline: 'Ekonomicko-podnikateľské poradenstvo od roku 2008.',
    ids: ['IČO', 'DIČ', 'IČ DPH'],
    address: 'Adresa',
    register: ['Zapísaná v OR Okresného súdu Trnava,', 'oddiel: Sro, vložka 22350/T'],
    phone: 'Telefón',
    email: 'Email',
    hours: 'Úradné hodiny',
    days: 'Pondelok – Piatok',
    rights: 'Všetky práva vyhradené.',
  },
}
