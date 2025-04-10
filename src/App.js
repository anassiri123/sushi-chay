import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeroBanner from './HeroBanner';
import MenuSection from './components/MenuSection';
import About from './components/About';
import Footer from './components/Footer';
import LegalMentions from './components/LegalMentions';
import Menu from './components/Menu';

function App() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        {/* Page d'accueil */}
        <Route
          path="/"
          element={
            <>
              <HeroBanner />
              <MenuSection />
              <About />
              <About />
            </>
          }
        />

        {/* Autres pages */}
        <Route path="/mentions-legales" element={<LegalMentions />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;
