import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import AboutAward from './components/AboutAward';
import CriteriaRating from './components/CriteriaRating';
import Jur from './components/Jur';
import Winners from './components/Winners';
import Position from './components/Position';
import Photos from './components/Photos';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './fonts/fonts.css';

import './App.css';

function App() {
  return (
    <Router>
      <div >
        <Navigation />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<AboutAward />} />
          <Route path="/ratings" element={<CriteriaRating />} />
          <Route path="/jury" element={<Jur />} />
          <Route path="/winners" element={<Winners />} />
          <Route path="/position" element={<Position />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
