import React, { useState, useEffect } from 'react';
import data from './datawin';
import BubbleImg from '../img/prem.svg'

function Win() {

    useEffect(() => {
      const replaceName = () => {
  
        const elements = document.querySelectorAll('[data-translate-custom="true"]');
        elements.forEach((el) => {
          if (document.documentElement.lang !== 'ru') {
            el.textContent = 'Daria Makhinia';
          }
        });
      };
  
      const observer = new MutationObserver(() => {
        replaceName();
      });
  
      observer.observe(document.body, { childList: true, subtree: true });
  
      return () => observer.disconnect();
    }, []);

  const [year, setYear] = useState(2019);

  const handleYearChange = (newYear) => {
    setYear(newYear);
  };

  const selectedYearData = data.find((item) => item.year === year);

  return (
    <div>
    <div className="main-content">

    <div className="content-overlay">
    <div className='logo-cont'>
    <div className="logo-image"></div>
    </div>
      <h1 className="main-title">Победители</h1>
      <h1 className="main-title">Международной премии «Олимп красоты»</h1>

    </div>
    </div>
    <div className='win'>
        <div className="jury-buttons">
          {data.map((item) => (
            <button key={item.year} onClick={() => handleYearChange(item.year)}>
              {item.year}
            </button>
          ))}
        </div>
        {selectedYearData && (
          <div>
            <h2 className='year-title'>Победители: {year}</h2>
            <div className="win-card">
              {selectedYearData.items.map((item, index) => (
                <div key={index} className="win-item">
                    <div className='title-w'>{item.title}</div>
                    <div className='win-title'>«Инновации в процедурах» - <span className='win-sub-title' data-translate-custom={item.name === "Дарья Махиня" ? "true" : "false"}>{item.name} ({item.country})</span><img src={BubbleImg} alt="Bubble" /></div>
                    <div className='win-title'>«Прорыв года» - <span className='win-sub-title'>{item.name2} ({item.country2})</span><img src={BubbleImg} alt="Bubble" /></div>
                </div>
              ))}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Win;
