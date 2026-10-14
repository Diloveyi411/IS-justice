import './Footer.css'
import logoFooter from '../assets/logo-servis-white.svg'
import { t } from '../i18n'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">

        <div className="footer__brand">
          <img src={logoFooter} alt="IS Justice" className="footer__logo-img" />
          <p className="footer__tagline">{t.footer.tagline}</p>
          <div className="footer__reg">
            <p>IS-JUSTICE Servis s.r.o.</p>
            <p>{t.footer.ids[0]}: 44 287 038</p>
            <p>{t.footer.ids[1]}: 2022667394</p>
            <p>{t.footer.ids[2]}: SK 2022667394</p>
          </div>
        </div>

        <div className="footer__col">
          <p className="footer__col-title">{t.footer.address}</p>
          <p className="footer__info">Puškinova 2474/100</p>
          <p className="footer__info">924 01 Galanta</p>
          <p className="footer__info footer__info--muted">
            {t.footer.register[0]}<br />{t.footer.register[1]}
          </p>
        </div>

        <div className="footer__col">
          <p className="footer__col-title">{t.footer.phone}</p>
          <div className="footer__person">
            <span>Ivana Stancelová</span>
            <a href="tel:+421908359990">0908 359 990</a>
          </div>
          <div className="footer__person">
            <span>Ivana Búšová</span>
            <a href="tel:+421910430321">0910 430 321</a>
          </div>
          <div className="footer__person">
            <span>Beáta Bujková</span>
            <a href="tel:+421910432321">0910 432 321</a>
          </div>
        </div>

        <div className="footer__col">
          <p className="footer__col-title">{t.footer.email}</p>
          <a href="mailto:info@isjustice.sk" className="footer__email">info@isjustice.sk</a>

          <p className="footer__col-title" style={{ marginTop: '28px' }}>{t.footer.hours}</p>
          <p className="footer__info">{t.footer.days}</p>
          <p className="footer__info">8:00 – 16:00</p>
        </div>

      </div>
      <div className="container footer__bottom">
        <p>© 2026 IS-JUSTICE Servis s.r.o. {t.footer.rights}</p>
      </div>
    </footer>
  )
}
