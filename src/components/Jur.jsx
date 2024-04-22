import React, { useState } from 'react';
import data from './data';
import ArrowImg from '../img/arrow.svg'


function Jur() {

  const [year, setYear] = useState(2019);

  const handleYearChange = (newYear) => {
    setYear(newYear);
  };

  const selectedYearData = data.find((item) => item.year === year);

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
    <ul class="styled-list">
  <li><span class="big-number">1</span> Опыт работы на международном уровне с известными брендами и ведущими стилистами;</li>
  <li><span class="big-number">2</span> Участие в значимых мероприятиях, таких как Fashion Week, и создание тенденций в индустрии;</li>
  <li><span class="big-number">3</span> Преподавательский или наставнический опыт в области парикмахерского искусства.</li>
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
      <div className="jury-card">
        {selectedYearData.items.map((item, index) => (
          <div key={index} className="jury-item">
            <div className="image-container">
              <img src={item.image} alt={`${selectedYearData.year}_${index + 1}`} />
            </div>
            <div className="text-container">
            <div className='jury-title'>{item.name}</div>
            <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>{item.text}</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Мастера маникюра и педикюра</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Косметологи и эстетисты</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Мастера перманентного макияжа</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Тату мастера</li>
        </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Jur;
