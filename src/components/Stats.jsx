import './Stats.css'

const stats = [
  { value: '15+', label: 'rokov praxe', desc: 'Na slovenskom a medzinárodnom podnikateľskom trhu.' },
  { value: '450+', label: 'klientov', desc: 'Pomohli sme im zvýšiť zisky a znížiť daňové riziko.' },
  { value: '1,2M €', label: 'spravených financií', desc: 'Ročne prechádzajú naším systémom.' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {stats.map((s, i) => (
          <div key={i} className="stats__item">
            <div className="stats__value">{s.value}</div>
            <div className="stats__label">{s.label}</div>
            <p className="stats__desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
