import React from 'react';
import './MenuSection.css';
import sushiVideo from '../assets/video-sushi.mp4'; // ✅ Import de la vidéo depuis src/assets

// ✅ Tableau des plats (hors composant)
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
    image: require('../assets/sushihd10.png'),
  },
  {
    nom: 'Sushi Végétarien',
    image: require('../assets/sushihd9.png'),
  },
  {
    nom: 'Sushi Végétarien',
    image: require('../assets/sushihd8.png'),
  },
  {
    nom: 'Sushi Végétarien',
    image: require('../assets/sushihd1.png'),
  },
  {
    nom: 'Sushi Végétarien',
    image: require('../assets/sushihd5.png'),
  },
  {
    nom: 'Sushi Végétarien',
    image: require('../assets/sushihd4.png'),
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

      {/* ✅ Vidéo insérée avec style image */}
      <div className="video-preview">
        <video
          src={sushiVideo}
          autoPlay
          loop
          muted
          playsInline
          className="video-as-image"
          onError={(e) => {
            console.error("❌ ERREUR VIDÉO :", e.target.error);
          }}
        ></video>
      </div>
    </section>
  );
};

export default MenuSection;
