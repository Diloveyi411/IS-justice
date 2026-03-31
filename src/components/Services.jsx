import './Services.css'
const services = [
  { name: 'Účtovníctvo', desc: 'Jednoduché aj podvojné, mzdová agenda, podklady pre banky.', span: 2 },
  { name: 'Dane', desc: 'Daňové priznania, optimalizácia, zastupovanie pri kontrole.', span: 1 },
  { name: 'Reporting', desc: 'Prehľadné reporty, ktoré vám dávajú kontrolu nad podnikaním.', span: 1 },
  { name: 'Zakladanie firiem', desc: 'S.R.O., SZČO, predaj firiem. Od A po Z.', span: 1 },
  { name: 'Mediácia', desc: 'Riešenie obchodných a pracovných sporov mimosúdnou cestou.', span: 1 },
  { name: 'Kryptomeny a blockchain', desc: 'Konzultácie, semináre a integrácia kryptomien do biznisu. Účtovné, daňové aj právne aspekty pod jednou strechou.', span: 2 },
  { name: 'Realitná činnosť', desc: 'Kompletný servis pri predaji, kúpe a prenájme nehnuteľností vrátane vybavenia úveru z bankových inštitúcií.', span: 1 },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <p className="eyebrow">Naše služby</p>
          <h2 className="services__heading">
            Končí éra<br />rozhodovania naslepo.
          </h2>
          <a href="#audit" className="btn btn-primary services__cta">Zistiť viac</a>
        </div>
        <div className="services__grid">
          {services.map((s, i) => (
              <div
                key={i}
                className="services__card"
                style={{ gridColumn: s.span === 2 ? 'span 2' : 'span 1' }}
              >
                <h3 className="services__name">{s.name}</h3>
                <p className="services__desc">{s.desc}</p>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}
