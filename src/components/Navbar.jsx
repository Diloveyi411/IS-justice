import { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.svg'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          <img src={logo} alt="IS Justice" className="navbar__logo-img" />
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Služby</a></li>
          <li><a href="#pricing" onClick={() => setMenuOpen(false)}>Cenník</a></li>
          <li><a href="#cases" onClick={() => setMenuOpen(false)}>Prípadové štúdie</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>O nás</a></li>
          <li><a href="#path" onClick={() => setMenuOpen(false)}>Podnikatelia</a></li>
        </ul>

        <a href="#audit" className="btn-primary navbar__cta">
          Začni 15-min audit zdarma
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
