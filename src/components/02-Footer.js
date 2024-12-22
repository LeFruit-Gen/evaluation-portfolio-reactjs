import React from 'react';
import './02-Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>John Doe</h3>
        <p>123 Rue de l'Exemple<br />75001 Paris</p>
        <p>Tél : <a href="tel:+33123456789">+33 1 23 45 67 89</a></p>
        <div className="social-icons">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="icon github">
                <i className="bi bi-github"></i>
            </a>
            <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="icon twitter">
                <i className="bi bi-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="icon linkedin">
                <i className="bi bi-linkedin"></i>
            </a>
        </div>
      </div>
      <div className="footer-column">
        <h3>Liens</h3>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/realisations">Réalisations</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/mentions-legales">Mentions légales</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Dernières réalisations</h3>
        <ul>
          <li><a href="https://www.sante-forme.com/brand/3-sante-forme" target="_blank" rel="noopener noreferrer">Projet 1</a></li>
          <li><a href="https://www.akirabackparis.com/fr/" target="_blank" rel="noopener noreferrer">Projet 2</a></li>
          <li><a href="https://www.figma.com/design/FNZvL052NymrWl9ReB4VkH/maquette-probeats-cef?node-id=3-2&p=f&t=v6WYAy7z0d93O82o-0" target="_blank" rel="noopener noreferrer">Projet 3</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;