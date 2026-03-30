import './PathSelector.css'

const paths = [
  {
    id: 'entrepreneur',
    icon: '👤',
    label: 'Som podnikateľ',
    problems: [
      { type: 'warning', text: 'Strata: Strácam prehľad o financiách a neviem kde sú úniky.' },
      { type: 'warning', text: 'Riziko: Dane a odvody sú chaos, bojím sa kontroly.' },
      { type: 'ok', text: 'Optimum: Chcem mať jasno a robiť lepšie rozhodnutia.' },
    ],
    cta: 'Chcem získať kontrolu',
  },
  {
    id: 'founder',
    icon: '🏢',
    label: 'Zakladám firmu',
    featured: true,
    badge: 'Najčastejší prípad',
    problems: [
      { type: 'warning', text: 'Problém: Neviem čo všetko treba zariadiť a v akom poradí.' },
      { type: 'warning', text: 'Riziko: Zakladanie trvá týždne a nerobím to po prvýkrát.' },
      { type: 'ok', text: 'Riešenie: Chcem zaregistrovať firmu rýchlo a správne.' },
    ],
    cta: 'Chcem zaregistrovať firmu',
  },
]

export default function PathSelector() {
  return (
    <section className="path" id="path">
      <div className="container">
        <p className="section-label" style={{ textAlign: 'center' }}>Ktorá cesta je Vaša?</p>
        <p className="path__sub">Vyberte si svoju situáciu a dostanete riešenie na mieru.</p>

        <div className="path__grid">
          {paths.map((p) => (
            <div key={p.id} className={`path__card ${p.featured ? 'path__card--featured' : ''}`}>
              {p.badge && <span className="path__badge">{p.badge}</span>}
              <div className="path__icon">{p.icon}</div>
              <h3 className="path__title">{p.label}</h3>
              <ul className="path__problems">
                {p.problems.map((item, i) => (
                  <li key={i} className={`path__problem path__problem--${item.type}`}>
                    <span className="path__problem-icon">
                      {item.type === 'warning' ? '⚠' : '✓'}
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
              <a href="#audit" className={p.featured ? 'btn-primary' : 'btn-outline'}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
