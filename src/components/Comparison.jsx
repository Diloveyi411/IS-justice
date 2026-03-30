import './Comparison.css'

const rows = [
  {
    label: 'Účtovné výkazy',
    old: 'Raz ročne, papierovo, neskoro',
    new: 'Real-time prehľad kedykoľvek online',
  },
  {
    label: 'Daňové poradenstvo',
    old: 'Reaktívne — keď je problém, riešime',
    new: 'Proaktívne — optimalizujeme pred termínom',
  },
  {
    label: 'Komunikácia',
    old: 'Emailom, čakáte dni na odpoveď',
    new: 'Dedikovaný kontakt, odpoveď do 24h',
  },
  {
    label: 'Reporting',
    old: 'Žiadny — musíte si to robiť sami',
    new: 'Mesačné reporty nastavené na váš biznis',
  },
  {
    label: 'Zakladanie firmy',
    old: 'Sami na úradoch, strácate čas',
    new: 'My zariadime všetko od A po Z',
  },
]

export default function Comparison() {
  return (
    <section className="comparison">
      <div className="container">
        <p className="section-label" style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>
          Nas pohlad na vec
        </p>
        <h2 className="section-title comparison__title">
          Prečo väčšina firiem robí chyby<br />v účtovníctve
        </h2>
        <p className="comparison__sub">
          Väčšina účtovníkov vám váš biznis nerieši. Riešia len vaše doklady.
        </p>

        <div className="comparison__table">
          <div className="comparison__header">
            <div />
            <div className="comparison__col-label comparison__col-label--old">
              Tradičný prístup (chyby)
            </div>
            <div className="comparison__col-label comparison__col-label--new">
              Justice Modern (víťaz)
            </div>
          </div>
          {rows.map((row, i) => (
            <div key={i} className="comparison__row">
              <div className="comparison__row-label">{row.label}</div>
              <div className="comparison__cell comparison__cell--old">
                <span className="comparison__x">✕</span> {row.old}
              </div>
              <div className="comparison__cell comparison__cell--new">
                <span className="comparison__check">✓</span> {row.new}
              </div>
            </div>
          ))}
        </div>

        <div className="comparison__bottom">
          <p className="comparison__bottom-text">
            Kým tradičné účtovníctvo nefunguje
          </p>
          <div className="comparison__tags">
            <span>Strácate prehľad</span>
            <span>Rastúce daňové riziko</span>
            <span>Neskoré rozhodovanie</span>
          </div>
        </div>
      </div>
    </section>
  )
}
