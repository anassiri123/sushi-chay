import React from 'react';
import './MenuSection.css';

const plats = [
  {
    nom: 'Sushi Saumon',
    image: require('../assets/sushi1.jpg'),
  },
  {
    nom: 'Sushi Thon',
    image: require('../assets/sushi2.jpg'),
  },
  {
    nom: 'Sushi Mixte',
    image: require('../assets/sushi3.jpg'),
  },
  {
    nom: 'Sushi Végétarien',
    image: require('../assets/sushi4.jpg'),
  },
  {
    nom: 'Sushi Végétarien',
    image: require('../assets/sushi4.jpg'),
  },
  {
    nom: 'Sushi Végétarien',
    image: require('../assets/sushi4.jpg'),
  },
  {
    nom: 'Sushi Végétarien',
    image: require('../assets/sushi4.jpg'),
  },
  {
    nom: 'Sushi Végétarien',
    image: require('../assets/sushi4.jpg'),
  },
  {
    nom: 'Sushi Végétarien',
    image: require('../assets/sushi4.jpg'),
  },
  {
    nom: 'Sushi Végétarien',
    image: require('../assets/sushi4.jpg'),
  },
];

const MenuSection = () => {
  return (
    <section className="menu-section">
      <h2>Nos Plats</h2>
      <div className="menu-grid">
        {plats.map((plat, index) => (
          <div className="card" key={index}>
            <img src={plat.image} alt={plat.nom} />
            <h3>{plat.nom}</h3>
            <button>Commander</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
