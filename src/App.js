import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import AboutAward from './components/AboutAward';
import CriteriaRating from './components/CriteriaRating';
import Jur from './components/Jur';
import Win from './components/Win';
import Position from './components/Position';
import Photos from './components/Photos';
import Form from './components/Form';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './fonts/fonts.css';

import './App.css';

function App() {
  // const [accessAllowed, setAccessAllowed] = useState(false); // Управление доступом

  // useEffect(() => {
  //   fetch('https://ipapi.co/json/')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.country === 'US') {
  //         setAccessAllowed(true); // Разрешить доступ только пользователям из США
  //       } else {
  //         window.location.href = 'https://example.com/access-denied'; // Перенаправление
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching location:', error);
  //       window.location.href = 'https://example.com/access-denied'; // Перенаправление в случае ошибки
  //     });
  // }, []);

  // if (!accessAllowed) {
  //   // Пока идет проверка или пользователь не из США, ничего не отображаем
  //   return null;
  // }

  return (
    <Router>
      <div >
        <Navigation />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<AboutAward />} />
          <Route path="/ratings" element={<CriteriaRating />} />
          <Route path="/jury" element={<Jur />} />
          <Route path="/winners" element={<Win />} />
          <Route path="/position" element={<Position />} />
          <Route path="/form" element={<Form />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
