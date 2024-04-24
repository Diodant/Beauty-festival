import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div>
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="nav-links">
        <Link to="/" className="link">Главная</Link>
        <Link to="/ratings" className="link">Критерии оценки</Link>
        <Link to="/jury" className="link">Жюри</Link>
        <Link to="/winners" className="link">Победители</Link>
        <Link to="/photos" className="link">Фото</Link>
        <Link to="/contacts" className="link">Контакты</Link>
      </div>
    </nav>
  );
};

export default Navigation;
