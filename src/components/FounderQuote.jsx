import './FounderQuote.css'

export default function FounderQuote() {
  return (
    <section className="founder" id="about">
      <div className="container founder__inner">
        <div className="founder__content">
          <p className="section-label">Zakladatelka hovoří</p>
          <blockquote className="founder__quote">
            "Riešila som stovky firiem, ktoré strácali kontrolu nad financiami. Dnes viem, že problém nie sú čísla. Problém je, že ich nikto včas neukáže."
          </blockquote>
          <div className="founder__bio">
            <strong>JUDr. Ivana Stancelová</strong>
            <span>Founder a Strategy Advisor</span>
          </div>
          <p className="founder__desc">
            Právnička a mediátorka s praxou od roku 2003. Pôsobila na Úrade práce, v zdravotníctve aj obchodných spoločnostiach. Od roku 2012 zapísaná mediátorka.
          </p>
        </div>

        <div className="founder__visual">
          <div className="placeholder-img founder__photo">
            Foto zakladateľky
          </div>
        </div>
      </div>
    </section>
  )
}
