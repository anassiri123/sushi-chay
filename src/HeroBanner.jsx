import React from 'react';
import './HeroBanner.css';
import heroImage from './assets/banier.png';


const HeroBanner = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="hero-content">
        <h1>Bienvenue chez Sushi-chaymae</h1>
        <p>Des sushis frais, préparés avec passion</p>
        <button>Commander maintenant</button>
      </div>
    </section>
  );
};

export default HeroBanner;
