import './FounderQuote.css'
import ivana from '../assets/ivana.png'
import david from '../assets/david.png'

const members = [
  {
    eyebrow: 'Zakladateľka hovorí',
    quote: '"Riešila som stovky firiem, ktoré strácali kontrolu nad financiami. Problém nie je v číslach. Problém je, že ich nikto včas neukáže."',
    name: 'JUDr. Ivana Stancelová',
    role: 'Zakladateľka a strategická poradkyňa',
    desc: 'Právnička a mediátorka s praxou od roku 2003. Pôsobila na Úrade práce, v zdravotníctve aj obchodných spoločnostiach. Od roku 2012 zapísaná mediátorka.',
    photo: ivana,
    alt: 'JUDr. Ivana Stancelová',
  },
  {
    eyebrow: 'Konzultant hovorí',
    quote: '"Firmy robia v kryptomenách rozhodnutia bez dát a bez systému. Výsledkom je zbytočné riziko a straty. Kryptomeny nemajú byť experiment. Majú byť riadená súčasť biznisu."',
    name: 'MSc. David Stancel',
    role: 'Konzultant pre kryptomeny a digitálne aktíva',
    desc: 'Pomáha klientom pochopiť a implementovať kryptomeny tak, aby boli bezpečné, legálne a prehľadne integrované do ich podnikania. Prepája technológiu s reálnym finančným a právnym fungovaním firmy.',
    photo: david,
    alt: 'MSc. David Stancel',
  },
]

export default function FounderQuote() {
  return (
    <section className="founder" id="about">
      <div className="container">
        <p className="eyebrow">Náš tím</p>

        <div className="founder__grid">
          {members.map((m, i) => (
            <div key={i} className="founder__card">
              <div className="founder__photo-wrap">
                <img src={m.photo} alt={m.alt} className="founder__photo" />
              </div>
              <div className="founder__body">
                <p className="eyebrow founder__eyebrow">{m.eyebrow}</p>
                <blockquote className="founder__quote">{m.quote}</blockquote>
                <div className="founder__meta">
                  <p className="founder__name">{m.name}</p>
                  <p className="founder__role">{m.role}</p>
                </div>
                <p className="founder__desc">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
