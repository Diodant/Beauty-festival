import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Jury from './components/Jury';
import Winners from './components/Winners';
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
          <Route path="/jury" element={<Jury />} />
          <Route path="/winners" element={<Winners />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
