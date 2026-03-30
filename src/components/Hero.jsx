import './Hero.css'
import heroBg from '../assets/hero-bg.png'

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container hero__inner">
        <div className="hero__content">
<h1 className="hero__title">
            Firmy strácajú<br />
            kontrolu nad financiami.<br />
            <em>My ju vraciame naspäť.</em>
          </h1>
          <p className="hero__sub">
            Účtovníctvo, dane a právo pre podnikateľov, ktorí nechcú robiť rozhodnutia naslepo.
          </p>
          <div className="hero__actions">
            <a href="#audit" className="btn btn-primary">
              Začni 15-min audit zdarma
            </a>
            <a href="#services" className="btn btn-secondary">
              Čo ponúkame
            </a>
          </div>
          <p className="hero__note">Odpoveď do 24 hodín. Bez záväzkov.</p>
        </div>

      </div>
    </section>
  )
}
