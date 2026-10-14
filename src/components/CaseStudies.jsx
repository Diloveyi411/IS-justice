import './CaseStudies.css'
import { t } from '../i18n'

export default function CaseStudies() {
  return (
    <section className="cases" id="cases">
      <div className="container">
        <div className="cases__header">
          <h2 className="cases__heading">{t.cases.heading}</h2>
        </div>
        <div className="cases__grid">
          {t.cases.items.map((c, i) => (
            <div key={i} className="cases__card">
              <span className="cases__tag">{c.tag}</span>
              <h3 className="cases__title">{c.title}</h3>
              <p className="cases__result">{c.result}</p>
              <p className="cases__desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
