import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          JUSTICE <span>MODERN</span>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li><a href="#path" onClick={() => setMenuOpen(false)}>Podnikatelia</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Sluzby</a></li>
          <li><a href="#cases" onClick={() => setMenuOpen(false)}>Pripadove studie</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>O nas</a></li>
        </ul>

        <a href="#audit" className="btn-primary navbar__cta">
          Zacni 15-min audit zdarma
        </a>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
