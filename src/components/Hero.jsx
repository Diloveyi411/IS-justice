import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="section-label">System pre kontrolu</p>
          <h1 className="hero__title">
            Firmy strácajú kontrolu<br />
            nad financiami.<br />
            <span>My ju vraciame naspäť.</span>
          </h1>
          <p className="hero__sub">
            Účtovníctvo, dane a právo pre podnikateľov,<br />
            ktorí nechcú robiť rozhodnutia naslepo.
          </p>
          <div className="hero__actions">
            <a href="#audit" className="btn-primary">
              Začnite — 15-min audit zdarma
            </a>
            <p className="hero__note">Odpoveď do 24 hodín. Bez záväzkov.</p>
          </div>
        </div>

        <div className="hero__visual">
          <div className="placeholder-img hero__placeholder">
            Vizualizácia dashboardu
          </div>
        </div>
      </div>
    </section>
  )
}
