import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './01-Header.scss'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">John Doe</div>
      
      {/* Bouton du menu burger */}
      <button
        className="burger-menu"
        onClick={toggleMenu}
        aria-label="Menu"
        aria-expanded={isMenuOpen}
      >
        ☰
      </button>

      {/* Navigation */}
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>ACCUEIL</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>SERVICES</NavLink></li>
          <li><NavLink to="/realisations" className={({ isActive }) => (isActive ? 'active' : '')}>RÉALISATIONS</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>CONTACT</NavLink></li>
          <li><NavLink to="/mentions-legales" className={({ isActive }) => (isActive ? 'active' : '')}>MENTIONS LÉGALES</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;