import './Hero.css'
import heroBg from '../assets/hero-rook.png'

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            Majte pod kontrolou{' '}<br />
            financie <em className="metal-text metal-text--dark">aj právne riziká</em>{' '}<br />
            svojho podnikania.
          </h1>
          <p className="hero__sub">
            Účtovníctvo, dane a právo pre podnikateľov, ktorí nechcú robiť rozhodnutia naslepo.
          </p>
          <div className="hero__actions">
            <a href="#audit" className="btn btn-primary">
              15-minútová konzultácia zdarma
            </a>
            <a href="#services" className="btn hero__btn-ghost">
              Naše služby
            </a>
          </div>
          <p className="hero__note">Odpoveď do 24 hodín. Bez záväzkov.</p>
        </div>
      </div>
    </section>
  )
}
