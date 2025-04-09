import React, { useState } from 'react';
import './Header.css';
import sushiIcon from '../assets/sushi-icon.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={sushiIcon} alt="logo sushi" />
        Sushi-chaymae
      </div>

      <div className="burger" onClick={toggleMenu}>
        ☰
      </div>

      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <a href="/" className="link" onClick={() => setIsOpen(false)}>Accueil</a>
        <a href="/menu" className="link" onClick={() => setIsOpen(false)}>Menu</a>
        <a href="/contact" className="link" onClick={() => setIsOpen(false)}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
