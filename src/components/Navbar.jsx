import { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo-servis-white.svg'
import { lang, t } from '../i18n'

const LANGS = [
  { code: 'sk', href: '/' },
  { code: 'en', href: '/en/' },
  { code: 'de', href: '/de/' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          <img src={logo} alt="IS Justice" className="navbar__logo-img" />
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>{t.nav.services}</a></li>
          <li><a href="#pricing" onClick={() => setMenuOpen(false)}>{t.nav.pricing}</a></li>
          <li><a href="#cases" onClick={() => setMenuOpen(false)}>{t.nav.cases}</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>{t.nav.about}</a></li>
          <li><a href="#path" onClick={() => setMenuOpen(false)}>{t.nav.path}</a></li>
        </ul>

        <a href="#audit" className="btn btn-primary navbar__cta">
          {t.nav.cta}
        </a>

        <div className="navbar__lang" role="group" aria-label={t.nav.language}>
          {LANGS.map((l) => (
            <a
              key={l.code}
              href={l.href}
              hrefLang={l.code}
              lang={l.code}
              aria-current={l.code === lang ? 'true' : undefined}
              className={`navbar__lang-link ${l.code === lang ? 'navbar__lang-link--active' : ''}`}
            >
              {l.code.toUpperCase()}
            </a>
          ))}
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={t.nav.menu}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
