import React from 'react';
import Partner1 from '../img/partner1.png';
import Partner2 from '../img/partner2.png';
import Partner3 from '../img/partner3.png';
import Partner4 from '../img/partner4.png';
import Partner5 from '../img/partner5.png';
import Partner6 from '../img/partner6.png';
import Partner7 from '../img/partner7.png';
import Partner8 from '../img/partner8.png';
import Partner9 from '../img/partner9.png';

function Contacts() {
  return (
    <div className="contacts-section">
      <div className="contacts-content">
      <h1 className="contacts-title">Контакты</h1>
        <div className="contact-container">
        <div className="contact-info">
          <p>Адрес:</p>
          <span>Москва, Большая Якиманка, 32 м.Октябрьская</span>
        </div>
        <div className="contact-info">
          <p>Телефон:</p>
          <span>+7 977 495 5525</span>
        </div>
        <div className="contact-info">
          <p>E-mail:</p>
          <a href="iabc.association@gmail.com" class="contact-info">beautyolymp@gmail.com</a>
        </div>
      </div>
        <h1 className="contacts-title">Партнеры</h1>
        <div className="partner-images">
          <div className="partner-card">
            <img src={Partner1} alt="Partner1" className="partner-image" />
          </div>
          <div className="partner-card">
            <img src={Partner2} alt="Partner2" className="partner-image" />
          </div>
          <div className="partner-card">
            <img src={Partner3} alt="Partner3" className="partner-image" />
          </div>
        </div>
        <div className="partner-images">
          <div className="partner-card">
            <img src={Partner4} alt="Partner1" className="partner-image" />
          </div>
          <div className="partner-card">
            <img src={Partner5} alt="Partner2" className="partner-image" />
          </div>
          <div className="partner-card">
            <img src={Partner6} alt="Partner3" className="partner-image" />
          </div>
        </div>
        <div className="partner-images">
          <div className="partner-card">
            <img src={Partner7} alt="Partner1" className="partner-image" />
          </div>
          <div className="partner-card">
            <img src={Partner8} alt="Partner2" className="partner-image" />
          </div>
          <div className="partner-card">
            <img src={Partner9} alt="Partner3" className="partner-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
