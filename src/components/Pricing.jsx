import './Pricing.css'

const main = [
  {
    tag: 'Compliance základ',
    title: 'Jednoduché účtovníctvo',
    subtitle: 'Pre živnostníkov a menšie podnikanie',
    price: '50',
    unit: '/ mesiac',
    features: ['Vedenie účtovníctva', 'Pravidelné výstupy', 'Osobne alebo online'],
    cta: 'Získať presnú ponuku',
    ctaStyle: 'btn-secondary',
    featured: false,
  },
  {
    tag: 'Kontrola + Reporting',
    badge: 'Najčastejšia voľba',
    title: 'Podvojné účtovníctvo',
    subtitle: 'Pre firmy a platiteľov DPH',
    price: '80',
    unit: '/ mesiac',
    highlight: 'Pre firmy, ktoré chcú mať prehľad a robiť rozhodnutia na základe dát.',
    features: ['Kompletné vedenie agendy', 'Kvartálne výsledky', 'Konzultácie v cene'],
    note: 'Transparentný systém: vyšší objem dokladov = nižšia cena za položku.',
    cta: 'Získať presnú ponuku',
    ctaStyle: 'btn-primary',
    featured: true,
  },
  {
    tag: 'Správa zamestnancov',
    title: 'Mzdy a Personalistika',
    subtitle: 'Kompletná správa zamestnancov',
    price: '10',
    unit: '/ úkon',
    features: ['Spracovanie miezd', 'Pracovné zmluvy', 'Komunikácia so SP a ZP'],
    cta: 'Zobraziť detaily',
    ctaStyle: 'btn-secondary',
    featured: false,
  },
]

const secondary = [
  {
    title: 'Daňové a Poradenské Služby',
    subtitle: 'Odborné krytie vášho podnikania',
    price: '30',
    unit: '',
    features: ['Daňové priznania', 'Individuálne poradenstvo', 'Administratíva'],
    cta: 'Zobraziť detaily',
    ctaStyle: 'btn-secondary',
  },
  {
    title: 'Zakladanie a Predaj Firiem',
    subtitle: 'Individuálne riešenie pre komplexné prípady',
    price: 'Na mieru',
    unit: '',
    priceLabel: 'Fixné balíky',
    features: ['Zakladanie spoločností', 'Ready-made firmy', 'Likvidácia firiem'],
    cta: 'Konzultovať riešenie',
    ctaStyle: 'btn-orange-outline',
  },
]

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <p className="eyebrow">Cenník</p>
        <h2 className="pricing__title">Transparentné ceny.<br />Žiadne prekvapenia.</h2>

        <div className="pricing__main">
          {main.map((p, i) => (
            <div key={i} className={`pricing__card ${p.featured ? 'pricing__card--featured' : ''}`}>
              {p.badge && <span className="pricing__badge">{p.badge}</span>}
              <div className="pricing__tag">{p.tag}</div>
              <h3 className="pricing__name">{p.title}</h3>
              <p className="pricing__sub">{p.subtitle}</p>

              <div className="pricing__price-row">
                <span className="pricing__label">Cena od</span>
                <div className="pricing__price">
                  <span className="pricing__amount">{p.price}€</span>
                  <span className="pricing__unit">{p.unit}</span>
                </div>
              </div>

              {p.highlight && <p className="pricing__highlight">{p.highlight}</p>}

              <ul className="pricing__features">
                {p.features.map((f, j) => (
                  <li key={j}><span className="pricing__check">✓</span>{f}</li>
                ))}
              </ul>

              {p.note && <p className="pricing__note">{p.note}</p>}

              <a href="#audit" className={`btn ${p.ctaStyle} pricing__cta`}>{p.cta}</a>
            </div>
          ))}
        </div>

        <div className="pricing__secondary">
          {secondary.map((p, i) => (
            <div key={i} className="pricing__card pricing__card--secondary">
              <h3 className="pricing__name">{p.title}</h3>
              <p className="pricing__sub">{p.subtitle}</p>

              <div className="pricing__price-row">
                {p.priceLabel && <span className="pricing__label">{p.priceLabel}</span>}
                {!p.priceLabel && <span className="pricing__label">Cena od</span>}
                <div className="pricing__price">
                  <span className={`pricing__amount ${p.price === 'Na mieru' ? 'pricing__amount--custom' : ''}`}>
                    {p.price}{p.price !== 'Na mieru' ? '€' : ''}
                  </span>
                  {p.unit && <span className="pricing__unit">{p.unit}</span>}
                </div>
              </div>

              <ul className="pricing__features">
                {p.features.map((f, j) => (
                  <li key={j}><span className="pricing__check">✓</span>{f}</li>
                ))}
              </ul>

              <a href="#audit" className={`btn ${p.ctaStyle} pricing__cta`}>{p.cta}</a>
            </div>
          ))}
        </div>

        <div className="pricing__trust">
          <span>✓ Bez záväzkov</span>
          <span>✓ Odpoveď do 24h</span>
          <span>✓ Individuálny prístup</span>
        </div>

        <div className="pricing__transparency">
          <p className="pricing__transparency-text">
            Každému klientovi nastavujeme cenu individuálne podľa objemu a potrieb.
          </p>
          <p className="pricing__transparency-range">
            Väčšina klientov: 80€ – 250€ / mesačne.
          </p>
          <p className="pricing__transparency-note">
            Presná cena závisí od objemu. Pripravíme vám ponuku do 24h.
          </p>
        </div>
      </div>
    </section>
  )
}
