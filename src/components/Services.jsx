import './Services.css'
import { t } from '../i18n'

// Grid width per card, in the order of t.services.items
const spans = [2, 1, 1, 1, 1, 2, 1]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <h2 className="services__heading">
            {t.services.heading[0]}<br />{t.services.heading[1]}
          </h2>
          <a href="#audit" className="btn btn-primary services__cta">{t.services.cta}</a>
        </div>
        <div className="services__grid">
          {t.services.items.map((s, i) => (
              <div
                key={i}
                className="services__card"
                style={{ gridColumn: spans[i] === 2 ? 'span 2' : 'span 1' }}
              >
                <h3 className="services__name">{s.name}</h3>
                <p className="services__desc">{s.desc}</p>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}
