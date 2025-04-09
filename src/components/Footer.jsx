import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Sushi-chaymae. Tous droits réservés.</p>
      <div className="footer-links">
        <a href="mailto:contact@sushi-chaymae.com">contact@sushi-chaymae.com</a>
        <span> | </span>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <span> | </span>
        <a href="/mentions-legales">Mentions légales</a>

      </div>
    </footer>
  );
};

export default Footer;
