import './Footer.css'

const links = {
  'Služby': ['Účtovníctvo', 'Dane', 'Mediácia', 'Zakladanie firiem', 'Kryptomeny'],
  'Klienti': ['Pre podnikateľov', 'Pre s.r.o.', 'Pre SZCO', 'Zakladám firmu'],
  'Kontakt': ['+421 905 901 500', 'info@isjustice.sk', 'Košice, Slovensko'],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__logo">JUSTICE <span>MODERN</span></p>
          <p className="footer__tagline">Ekonomicko-podnikateľské poradenstvo od roku 2008.</p>
        </div>

        {Object.entries(links).map(([title, items]) => (
          <div key={title} className="footer__col">
            <p className="footer__col-title">{title}</p>
            <ul>
              {items.map((item, i) => (
                <li key={i}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container footer__bottom">
        <p>© 2026 IS Justice Servis s.r.o. Všetky práva vyhradené.</p>
      </div>
    </footer>
  )
}
