import './Services.css'

const services = [
  {
    name: 'Účtovníctvo',
    desc: 'Jednoduché aj podvojné účtovníctvo, mzdová a personálna agenda, podklady pre banky.',
  },
  {
    name: 'Dane',
    desc: 'Daňové priznania, optimalizácia daní, zastupovanie pri daňovej kontrole.',
  },
  {
    name: 'Reporting',
    desc: 'Prehľadné reporty, ktoré vám dávajú do rúk kontrolu nad podnikaním. Nie spätne.',
  },
  {
    name: 'Mediácia',
    desc: 'Riešenie obchodných, rodinných a pracovných sporov mimosúdnou cestou.',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container services__inner">
        <div className="services__left">
          <p className="section-label">Finanční Modern</p>
          <h2 className="section-title">
            Končí éra rozhodovania<br />naslepo.
          </h2>
          <a href="#audit" className="btn-outline" style={{ marginTop: '28px' }}>
            Zistiť viac o službách
          </a>
        </div>
        <div className="services__list">
          {services.map((s, i) => (
            <div key={i} className="services__item">
              <div className="services__number">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3 className="services__name">{s.name}</h3>
                <p className="services__desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
