import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../img/olimp_3-03.svg'

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={LogoImg} alt="Logo" />
      </div>
      <div className="nav-links">
        <Link to="/" className="link">Главная</Link>
        <Link to="/ratings" className="link">Критерии оценки</Link>
        <Link to="/jury" className="link">Жюри</Link>
        <Link to="/winners" className="link">Победители</Link>
        <Link to="/position" className="link">Положение</Link>
        <Link to="/photos" className="link">Фото</Link>
        <Link to="/contacts" className="link">Контакты</Link>
      </div>
    </nav>
  );
};

export default Navigation;
