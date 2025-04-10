import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';
import sushiIcon from '../assets/sushi-icon.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Ferme le menu après changement de langue
  };

  return (
    <div className="header mobile-header">
      <div className="logo">
        <img src={sushiIcon} alt="logo sushi" />
        Sushi-chaymae
      </div>

      <div className="burger" onClick={toggleMenu}>
        ☰
      </div>

      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <a href="/" className="link" onClick={() => setIsOpen(false)}>
          {t('home')}
        </a>
        <a href="/menu" className="link" onClick={() => setIsOpen(false)}>
          {t('menu')}
        </a>
        <a href="/contact" className="link" onClick={() => setIsOpen(false)}>
          {t('contact')}
        </a>

        <div className="language-switcher">
          <button onClick={() => changeLanguage('fr')} className="lang-btn">🇫🇷</button>
          <button onClick={() => changeLanguage('nl')} className="lang-btn">🇳🇱</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
