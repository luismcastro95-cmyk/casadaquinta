// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

/**
 * Componente Footer
 * Rodapé consistente com links de navegação, informações e redes sociais.
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Seção 1: Sobre */}
        <div className="footer-section">
          <h3>Casa da Quintã 1717</h3>
          <p>
            Centro equestre dedicado ao bem-estar através da equitação, terapia e conexão com a natureza. 
            Especialistas em aulas, terapia equestre e festas de aniversário desde 1985.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/casa1717" target="_blank" rel="noopener noreferrer" title="Facebook">f</a>
            <a href="https://www.instagram.com/casadaquinta_1717/" target="_blank" rel="noopener noreferrer" title="Instagram">📷</a>
          </div>
        </div>

        {/* Seção 2: Links Rápidos */}
        <div className="footer-section">
          <h3>Links Rápidos</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre Nós</Link></li>
            <li><Link to="/eventos">Atividades</Link></li>
            <li><Link to="/galeria">Galeria</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>

        {/* Seção 3: Serviços */}
        <div className="footer-section">
          <h3>Serviços</h3>
          <ul className="footer-links">
            <li><a href="#aulas">Aulas de Equitação</a></li>
            <li><a href="#terapeutica">Equitação Terapêutica</a></li>
            <li><a href="#adaptada">Equitação Adaptada</a></li>
            <li><a href="#aniversario">Festas de Aniversário</a></li>
            <li><a href="#passeios">Passeios a Cavalo</a></li>
          </ul>
        </div>

        {/* Seção 4: Contato */}
        <div className="footer-section">
          <h3>Contacte-nos</h3>
          <ul className="contact-list">
            <li>
              <span className="icon">📞</span>
              <a href="tel:933363859">933 363 859</a>
            </li>
            <li>
              <span className="icon">📧</span>
              <a href="mailto:casadaquinta1717@gmail.com">casadaquinta1717@gmail.com</a>
            </li>
            <li>
              <span className="icon">📍</span>
              <span>R. Da Quintão, 4795-812 Vilarinho</span>
            </li>
            <li>
              <span className="icon">🕐</span>
              <span>Seg-Sab: 09:00-21:00 | Dom: 09:00-13:00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divisor */}
      <hr className="footer-divider" />

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p className="copyright">
          © {currentYear} Casa da Quinta. Todos os direitos reservados.
        </p>
        <ul className="footer-legal">
          <li><a href="#privacy">Política de Privacidade</a></li>
          <li><a href="#terms">Termos de Serviço</a></li>
          <li><a href="#cookies">Cookies</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
