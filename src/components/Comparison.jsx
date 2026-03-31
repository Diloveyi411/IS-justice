import './Comparison.css'

const rows = [
  { label: 'Výkazy', old: 'Raz ročne, papierovo, neskoro', new: 'Real-time prehľad kedykoľvek' },
  { label: 'Dane', old: 'Reaktívne, keď je problém', new: 'Proaktívne, pred termínom' },
  { label: 'Komunikácia', old: 'Email, čakáte dni', new: 'Odpoveď do 24h, dedikovaný kontakt' },
  { label: 'Reporting', old: 'Žiadny', new: 'Mesačné reporty pre Váš biznis' },
  { label: 'Zakladanie', old: 'Sami na úradoch', new: 'My zariadime všetko' },
]

export default function Comparison() {
  return (
    <section className="comparison">
      <div className="container">
        <div className="comparison__header">
          <p className="eyebrow comparison__eyebrow">Náš pohľad na vec</p>
          <h2 className="comparison__title">
            Prečo väčšina firiem robí<br />chyby v účtovníctve
          </h2>
          <p className="comparison__sub">Väčšina účtovníkov rieši vaše doklady. Nie váš biznis.</p>
        </div>

        <div className="comparison__table">
          <div className="comparison__head">
            <div className="comparison__head-cell"></div>
            <div className="comparison__head-cell comparison__head-cell--old">Tradičný prístup</div>
            <div className="comparison__head-cell comparison__head-cell--new">IS Justice</div>
          </div>
          {rows.map((row, i) => (
            <div key={i} className="comparison__row">
              <div className="comparison__label">{row.label}</div>
              <div className="comparison__cell comparison__cell--old">
                <span className="comparison__x">✕</span>{row.old}
              </div>
              <div className="comparison__cell comparison__cell--new">
                <span className="comparison__check">✓</span>{row.new}
              </div>
            </div>
          ))}
        </div>

        <div className="comparison__footer">
          <span className="comparison__tag">Strácate prehľad</span>
          <span className="comparison__tag">Rastúce daňové riziko</span>
          <span className="comparison__tag">Neskoré rozhodovanie</span>
        </div>
      </div>
    </section>
  )
}
