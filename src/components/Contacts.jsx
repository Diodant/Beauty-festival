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
      <div className="contact-page">
      <div className="contact-header">
        <h1>Международная премия «Олимп красоты» инициирована Международной Ассоциацией Красоты и Ухода IABC (International Association of Beauty and Care)</h1>
      </div>

        <div className="contact-block">
          <h2>Юридический адрес:</h2>
          <p>Адрес: Адрес: 121500, г. Москва, ул. Василия Ботылева, дом 6, офис 14</p>
          <p>Телефон: 8 (800) 551-48-76</p>
          <p>Email: <a href="mailto:iabc.association@gmail.com">iabc.association@gmail.com</a></p>
          <p>Сайт: <a href="https://iabc-association.com">iabc-association.com</a></p>
        </div>
        <div className="contact-block">
          <h2>Международная премия «Олимп красоты»</h2>
          <p>Сайт: <a href="https://beauty-olymp.com">beauty-olymp.com</a></p>
          <p>Email: <a href="mailto:beautyolymp@gmail.com">beautyolymp@gmail.com</a></p>
          <p>Телефон: +7 977 495 5525</p>
          <p>По всем вопросам участия в Международной премии “Олимп красоты” звоните по тел: +7 977 495 5525</p>
        </div>
    </div>
        <h1 className="title text-center">Партнеры</h1>
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
