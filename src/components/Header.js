// src/components/Header.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

/**
 * Componente Header
 * Contém o logotipo e a navegação principal do site.
 */
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logotipo que leva para a página inicial */}
        <Link to="/" className="header-logo">
          <img src="/logo.jpg" alt="Casa da Quintã 1717" className="logo-image" />
          <span className="logo-text">Casa da Quintã 1717</span>
        </Link>

        {/* Botão de menu para mobile */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menu">
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        {/* Menu de navegação */}
        <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/sobre" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre Nós
          </NavLink>
          <NavLink 
            to="/eventos" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Atividades
          </NavLink>
          <NavLink 
            to="/galeria" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Galeria
          </NavLink>
          <NavLink 
            to="/contato" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contato
          </NavLink>
          <a 
            href="https://buk.pt/casa-da-quinta-1717"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link cta-book"
            onClick={() => setIsMenuOpen(false)}
          >
            Marcar Aula
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
