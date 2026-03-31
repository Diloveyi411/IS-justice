import './PathSelector.css'
import { User, Building2, AlertTriangle, CheckCircle } from 'lucide-react'

const paths = [
  {
    id: 'entrepreneur',
    icon: User,
    label: 'Som podnikateľ',
    problems: [
      { type: 'warning', text: 'Neviem, kam miznú peniaze každý mesiac.' },
      { type: 'warning', text: 'Bojím sa daňovej kontroly, lebo neviem, či je všetko v poriadku.' },
      { type: 'ok', text: 'Chcem mať konečne jasno a rozhodovať sa s istotou.' },
    ],
    cta: 'Chcem získať kontrolu',
    featured: false,
  },
  {
    id: 'founder',
    icon: Building2,
    label: 'Zakladám firmu',
    badge: 'Najčastejší prípad',
    problems: [
      { type: 'warning', text: 'Neviem, kde začať - každý mi hovorí niečo iné.' },
      { type: 'warning', text: 'Strácam týždne behom po úradoch a stále nič.' },
      { type: 'ok', text: 'Chcem mať firmu hotovú rýchlo a bez zbytočného stresu.' },
    ],
    cta: 'Chcem zaregistrovať firmu',
    featured: true,
  },
]

export default function PathSelector() {
  return (
    <section className="path" id="path">
      <div className="container">
        <div className="path__header">
          <p className="eyebrow">Ktorá cesta je Vaša?</p>
          <h2 className="path__title">Vyberte svoju situáciu</h2>
          <p className="path__sub">Dostanete riešenie na mieru.</p>
        </div>

        <div className="path__grid">
          {paths.map((p) => (
            <div key={p.id} className={`path__card ${p.featured ? 'path__card--featured' : ''}`}>
              {p.badge && <span className="path__badge">{p.badge}</span>}
              <div className="path__icon"><p.icon size={28} strokeWidth={1.5} /></div>
              <h3 className="path__title-card">{p.label}</h3>
              <ul className="path__problems">
                {p.problems.map((item, i) => (
                  <li key={i} className={`path__problem path__problem--${item.type}`}>
                    <span className="path__problem-icon">
                      {item.type === 'warning'
                        ? <AlertTriangle size={14} strokeWidth={2} />
                        : <CheckCircle size={14} strokeWidth={2} />}
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
              <a href="#audit" className={`btn ${p.featured ? 'btn-primary' : 'btn-secondary'}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
