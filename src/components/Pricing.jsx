import './Pricing.css'
import { lang, t } from '../i18n'

const money = (amount) => (lang === 'en' ? `€${amount}` : `${amount}€`)

// Prices and card styling, in the order of t.pricing.main / t.pricing.secondary
const main = [
  { price: '50', ctaStyle: 'btn-secondary', featured: false },
  { price: '80', ctaStyle: 'btn-primary', featured: true },
  { price: '12', ctaStyle: 'btn-secondary', featured: false },
]

const secondary = [
  { price: '60', ctaStyle: 'btn-secondary' },
  { custom: true, ctaStyle: 'btn-accent-outline' },
]

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2 className="pricing__title">{t.pricing.title[0]}<br />{t.pricing.title[1]}</h2>

        <div className="pricing__main">
          {t.pricing.main.map((p, i) => (
            <div key={i} className={`pricing__card ${main[i].featured ? 'pricing__card--featured' : ''}`}>
              {p.badge && <span className="pricing__badge">{p.badge}</span>}
              <div className="pricing__tag">{p.tag}</div>
              <h3 className="pricing__name">{p.title}</h3>
              <p className="pricing__sub">{p.subtitle}</p>

              <div className="pricing__price-row">
                <span className="pricing__label">{t.pricing.from}</span>
                <div className="pricing__price">
                  <span className="pricing__amount">{money(main[i].price)}</span>
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

              <a href="#audit" className={`btn ${main[i].ctaStyle} pricing__cta`}>{p.cta}</a>
            </div>
          ))}
        </div>

        <div className="pricing__secondary">
          {t.pricing.secondary.map((p, i) => (
            <div key={i} className="pricing__card pricing__card--secondary">
              <h3 className="pricing__name">{p.title}</h3>
              <p className="pricing__sub">{p.subtitle}</p>

              <div className="pricing__price-row">
                {p.priceLabel && <span className="pricing__label">{p.priceLabel}</span>}
                {!p.priceLabel && <span className="pricing__label">{t.pricing.from}</span>}
                <div className="pricing__price">
                  <span className={`pricing__amount ${secondary[i].custom ? 'pricing__amount--custom' : ''}`}>
                    {secondary[i].custom ? p.price : money(secondary[i].price)}
                  </span>
                </div>
              </div>

              <ul className="pricing__features">
                {p.features.map((f, j) => (
                  <li key={j}><span className="pricing__check">✓</span>{f}</li>
                ))}
              </ul>

              <a href="#audit" className={`btn ${secondary[i].ctaStyle} pricing__cta`}>{p.cta}</a>
            </div>
          ))}
        </div>

        <a href="https://usfirma.sk/" target="_blank" rel="noopener" className="pricing__card pricing__card--secondary pricing__partner">
          <div className="pricing__partner-body">
            <span className="pricing__tag">{t.pricing.partner.tag}</span>
            <p className="pricing__name">{t.pricing.partner.title}</p>
            <p className="pricing__partner-text">{t.pricing.partner.text}</p>
          </div>
          <span className="btn btn-accent-outline pricing__partner-cta">usfirma.sk <span aria-hidden="true">→</span></span>
        </a>

        <div className="pricing__trust">
          {t.pricing.trust.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="pricing__transparency">
          <p className="pricing__transparency-text">
            {t.pricing.individual}
          </p>
          <p className="pricing__transparency-range metal-text">
            {t.pricing.range}
          </p>
          <div className="pricing__meter" aria-hidden="true">
            <div className="pricing__meter-track"><div className="pricing__meter-fill" /></div>
            <div className="pricing__meter-labels">
              <span>{t.pricing.meter[0]}</span>
              <span>{t.pricing.meter[1]}</span>
            </div>
          </div>
          <p className="pricing__transparency-text">
            {t.pricing.dependsOn}
          </p>
          <ul className="pricing__transparency-list">
            {t.pricing.extras.map((e, i) => (
              <li key={i}><span className="pricing__check">✓</span>{e}</li>
            ))}
          </ul>
          <p className="pricing__transparency-note">
            {t.pricing.offer}
          </p>
        </div>
      </div>
    </section>
  )
}
