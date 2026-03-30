import './PathSelector.css'

const paths = [
  {
    id: 'entrepreneur',
    icon: '👤',
    label: 'Som podnikateľ',
    problems: [
      { type: 'warning', text: 'Strácam prehľad o financiách a neviem kde sú úniky.' },
      { type: 'warning', text: 'Dane a odvody sú chaos, bojím sa kontroly.' },
      { type: 'ok', text: 'Chcem mať jasno a robiť lepšie rozhodnutia.' },
    ],
    cta: 'Chcem získať kontrolu',
    featured: false,
  },
  {
    id: 'founder',
    icon: '🏢',
    label: 'Zakladám firmu',
    badge: 'Najčastejší prípad',
    problems: [
      { type: 'warning', text: 'Neviem čo všetko treba zariadiť a v akom poradí.' },
      { type: 'warning', text: 'Zakladanie trvá týždne, strácam čas na úradoch.' },
      { type: 'ok', text: 'Chcem zaregistrovať firmu rýchlo a správne.' },
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
              <div className="path__icon">{p.icon}</div>
              <h3 className="path__title-card">{p.label}</h3>
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
