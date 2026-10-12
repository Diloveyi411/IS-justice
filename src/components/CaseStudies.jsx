import './CaseStudies.css'

const cases = [
  {
    tag: 'E-commerce',
    title: 'Z chaosu k prehľadu za 3 mesiace',
    result: '+18% marža, -23% daňová záťaž',
    desc: 'Klient nevedel kde mu unikajú peniaze. Nastavili sme reporting a daňovú optimalizáciu.',
  },
  {
    tag: 'S.R.O.',
    title: 'Zakladanie s.r.o. rýchlo a operatívne',
    result: 'Žiadne fronty na úradoch',
    desc: 'Zaregistrovali sme spoločnosť, zriadili účtovníctvo a nastavili mzdovú agendu.',
  },
  {
    tag: 'Mediácia',
    title: 'Obchodný spor vyriešený mimosúdne',
    result: 'Úspora na súdnych trovách',
    desc: 'Mediáciou sme vyriešili spor medzi obchodnými partnermi bez súdu.',
  },
  {
    tag: 'Mediácia · Rodinné právo',
    title: 'Úprava styku s maloletými deťmi',
    result: 'Dobrá dohoda vytvára duševnú pohodu',
    desc: 'Mediáciou sme pomohli rodičom dohodnúť sa na úprave styku s deťmi bez súdneho sporu.',
  },
]

export default function CaseStudies() {
  return (
    <section className="cases" id="cases">
      <div className="container">
        <div className="cases__header">
          <h2 className="cases__heading">Výsledky, ktoré hovoria za nás</h2>
        </div>
        <div className="cases__grid">
          {cases.map((c, i) => (
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
