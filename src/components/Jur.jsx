import React, { useState } from 'react';
import data from './data';
import data2 from './data2';
import data3 from './data3';
import ArrowImg from '../img/arrow.svg';

function Jur() {
  const [year, setYear] = useState(2019);

  const handleYearChange = (newYear) => {
    setYear(newYear);
  };

  const selectedYearData = data.find((item) => item.year === year);
  const selectedYearData2 = data2.find((item) => item.year === year);
  const selectedYearData3 = data3.find((item) => item.year === year);

  return (
    <div>
      <div className="jury-content">
        <div className="content-overlay">
          <h1 className="main-title">Критерии отбора членов жюри для престижной</h1>
          <h1 className="main-title">Международной Премии "Олимп красоты" по номинациям</h1>
        </div>
      </div>
      <section className='main-section'>
        <div className='wrapper'>
          <div className='title'>Парикмахеры, стилисты, мейк-ап артисты</div>
          <div className='text'>Премия "Олимп красоты" является значимым событием в мире красоты и эстетической медицины, представляя собой первую независимую Международную награду, призванную отметить выдающиеся достижения и инновации в этой области. Премия была создана для того, чтобы выявлять, поощрять и публично признавать профессионалов, которые вносят значительный вклад в развитие индустрии, улучшая качество жизни и внешний вид своих клиентов.</div>
        </div>
        <div className="jury-image"></div>
        <ul className="styled-list">
          <li><span className="big-number">1</span> Опыт работы на международном уровне с известными брендами и ведущими стилистами;</li>
          <li><span className="big-number">2</span> Участие в значимых мероприятиях, таких как Fashion Week, и создание тенденций в индустрии;</li>
          <li><span className="big-number">3</span> Преподавательский или наставнический опыт в области парикмахерского искусства.</li>
        </ul>
      </section>
      <div>
        <div className="jury-buttons">
          {data.map((item) => (
            <button key={item.year} onClick={() => handleYearChange(item.year)}>
              {item.year}
            </button>
          ))}
        </div>
        {selectedYearData && (
          <div>
            <h2 className='year-title'>Жюри: {year}</h2>
            <div className="jury-card">
              {selectedYearData.items.map((item, index) => (
                <div key={index} className="jury-item">
                  <div className="image-container">
                    <img className='jury-img' src={item.image} alt={`${year}_${index + 1}`} />
                  </div>
                  <div className="text-container">
                    <div className='jury-title'>{item.name}</div>
                    <div className='jury-country'>{item.country}</div>
                    <ul className="jury-details-list">
                      <li>
                        <span className="arrow-icon-wrapper">
                          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
                        </span>
                        {item.text1}
                      </li>
                      <li>
                        <span className="arrow-icon-wrapper">
                          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
                        </span>
                        {item.text2}
                      </li>
                      <li>
                        <span className="arrow-icon-wrapper">
                          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
                        </span>
                        {item.text3}
                      </li>
                      <li>
                        <span className="arrow-icon-wrapper">
                          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
                        </span>
                        {item.text4}
                      </li>
                      <li>
                        <span className="arrow-icon-wrapper">
                          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
                        </span>
                        {item.text5}
                      </li>
                      <li>
                        <span className="arrow-icon-wrapper">
                          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
                        </span>
                        {item.text6}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <section className='main-section'>
        <div className='wrapper'>
          <div className='title'>Мастера маникюра и педикюра</div>
        </div>
        <div className="jury-image"></div>
        <ul className="styled-list">
          <li><span className="big-number">1</span>Инновации в техниках ногтевого дизайна и ухода за ногтями;</li>
          <li><span className="big-number">2</span>Участие и победы в профессиональных конкурсах маникюра и педикюра;</li>
          <li><span className="big-number">3</span>Разработка новых продуктов или техник в ногтевой индустрии.</li>
        </ul>
      </section>
      <div>
        <div className="jury-buttons">
          {data2.map((item) => (
            <button key={item.year} onClick={() => handleYearChange(item.year)}>
              {item.year}
            </button>
          ))}
        </div>
        {selectedYearData2 && (
          <div>
            <h2 className='year-title'>Жюри: {year}</h2>
            <div className="jury-card">
              {selectedYearData2.items.map((item, index) => (
                <div key={index} className="jury-item">
                  <div className="image-container">
                    <img className='jury-img' src={item.image} alt={`${year}_${index + 1}`} />
                  </div>
                  <div className="text-container">
                    <div className='jury-title'>{item.name}</div>
                    <div className='jury-country'>{item.country}</div>
                    <ul className="jury-details-list">
                      <li>
                        <span className="arrow-icon-wrapper">
                          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
                        </span>
                        {item.text1}
                      </li>
                      <li>
                        <span className="arrow-icon-wrapper">
                          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
                        </span>
                        {item.text2}
                      </li>
                      <li>
                        <span className="arrow-icon-wrapper">
                          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
                        </span>
                        {item.text3}
                      </li>
                      <li>
                        <span className="arrow-icon-wrapper">
                          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
                        </span>
                        {item.text4}
                      </li>
                      <li>
                        <span className="arrow-icon-wrapper">
                          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
                        </span>
                        {item.text5}
                      </li>
                      <li>
                        <span className="arrow-icon-wrapper">
                          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
                        </span>
                        {item.text6}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <section className='main-section'>
        <div className='wrapper'>
          <div className='title'>Косметологи и эстетисты</div>
        </div>
        <div className="jury-image"></div>
        <ul className="styled-list">
          <li><span className="big-number">1</span>Разработка новаторских методик и процедур в области ухода за кожей;</li>
          <li><span className="big-number">2</span>Наличие научных публикаций или проведение исследований в области косметологии;</li>
          <li><span className="big-number">3</span>Проведение образовательных курсов и мастер-классов для профессионалов.</li>
        </ul>
      </section>
      <div>
        <div className="jury-buttons">
          {data3.map((item) => (
            <button key={item.year} onClick={() => handleYearChange(item.year)}>
              {item.year}
            </button>
          ))}
        </div>
        {selectedYearData3 && (
          <div>
            <h2 className='year-title'>Жюри: {year}</h2>
            <div className="jury-card">
              {selectedYearData3.items.map((item, index) => (
                <div key={index} className="jury-item">
                  <div className="image-container">
                    <img className='jury-img' src={item.image} alt={`${year}_${index + 1}`} />
                  </div>
                  <div className="text-container">
                    <div className='jury-title'>{item.name}</div>
                    <div className='jury-country'>{item.country}</div>
                    <ul className="jury-details-list">
                      <li>
                        <span className="arrow-icon-wrapper">
                          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
                        </span>
                        {item.text1}
                      </li>
                      <li>
                        <span className="arrow-icon-wrapper">
                          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
                        </span>
                        {item.text2}
                      </li>
                      <li>
                        <span className="arrow-icon-wrapper">
                          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
                        </span>
                        {item.text3}
                      </li>
                      <li>
                        <span className="arrow-icon-wrapper">
                          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
                        </span>
                        {item.text4}
                      </li>
                      <li>
                        <span className="arrow-icon-wrapper">
                          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
                        </span>
                        {item.text5}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Jur;
