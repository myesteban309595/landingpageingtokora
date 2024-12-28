// Footer.js

import React from 'react';
import './Footer.css'; // Si tienes un archivo de CSS asociado

const Footer = () => {
  return (
    <footer className="main-page__footer">
      <div className="main-page__footer-content">
        <div className="main-page__footer-links">
          <ul>
            <li><a href="#about">Acerca de</a></li>
            <li><a href="#privacy">Política de privacidad</a></li>
            <li><a href="#terms">Términos y condiciones</a></li>
            <li><a href="#contact">Contáctanos</a></li>
          </ul>
        </div>

        <div className="main-page__footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-twitter-logo-vector-png-image_9183353.png" alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" alt="Instagram" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="YouTube" />
          </a>
        </div>

        <div className="main-page__footer-info">
          <p>&copy; 2024 Tu Nombre. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
