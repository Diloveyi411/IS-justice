import './PathSelector.css'
import { User, Building2, AlertTriangle, CheckCircle } from 'lucide-react'
import { t } from '../i18n'

// Icons and styling per path, in the order of t.path.items; each path's problems are warning, warning, ok
const paths = [
  { id: 'entrepreneur', icon: User, featured: false },
  { id: 'founder', icon: Building2, featured: true },
]
const problemTypes = ['warning', 'warning', 'ok']

export default function PathSelector() {
  return (
    <section className="path" id="path">
      <div className="container">
        <div className="path__header">
          <h2 className="path__title">{t.path.title}</h2>
          <p className="path__sub">{t.path.sub}</p>
        </div>

        <div className="path__grid">
          {paths.map((p, n) => (
            <div key={p.id} className={`path__card ${p.featured ? 'path__card--featured' : ''}`}>
              {t.path.items[n].badge && <span className="path__badge">{t.path.items[n].badge}</span>}
              <div className="path__icon"><p.icon size={28} strokeWidth={1.5} /></div>
              <h3 className="path__title-card">{t.path.items[n].label}</h3>
              <ul className="path__problems">
                {t.path.items[n].problems.map((text, i) => (
                  <li key={i} className={`path__problem path__problem--${problemTypes[i]}`}>
                    <span className="path__problem-icon">
                      {problemTypes[i] === 'warning'
                        ? <AlertTriangle size={14} strokeWidth={2} />
                        : <CheckCircle size={14} strokeWidth={2} />}
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
              <a href="#audit" className={`btn ${p.featured ? 'btn-primary' : 'btn-secondary'}`}>
                {t.path.items[n].cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
