import './Services.css'

const services = [
  { name: 'Účtovníctvo', desc: 'Jednoduché aj podvojné, mzdová agenda, podklady pre banky.' },
  { name: 'Dane', desc: 'Daňové priznania, optimalizácia, zastupovanie pri kontrole.' },
  { name: 'Reporting', desc: 'Prehľadné reporty, ktoré vám dávajú kontrolu nad podnikaním.' },
  { name: 'Zakladanie firiem', desc: 'S.R.O., SZČO, predaj firiem. Od A po Z.' },
  { name: 'Mediácia', desc: 'Riešenie obchodných a pracovných sporov mimosúdnou cestou.' },
  { name: 'Kryptomeny a blockchain', desc: 'Konzultácie, semináre a integrácia kryptomien do biznisu. Účtovné, daňové aj právne aspekty pod jednou strechou.' },
  { name: 'Realitná činnosť', desc: 'Kompletný servis pri predaji, kúpe a prenájme nehnuteľností vrátane vybavenia úveru z bankových inštitúcií.' },
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
            <div key={i} className="services__card">
              <div className="services__number">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="services__name">{s.name}</h3>
              <p className="services__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
