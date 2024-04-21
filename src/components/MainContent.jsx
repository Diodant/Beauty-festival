import React from 'react';
import { Link } from 'react-router-dom';
import ArrowImg from '../img/arrow.svg'


const MainContent = () => {
  return (
    <div>
      <div className="main-content">

        <div className="content-overlay">
          <h1 className="main-title">Международная Премия</h1>
          <h1 className="main-title">“Олимп Красоты”</h1>
          <Link to={{
          pathname: "/form",
          }}>
          <button className="join-button">Подать заявку</button>
          </Link>
        </div>
      </div>
          <section className='main-section'>
          <div className='wrapper'>
    <div className='title'>О премии</div>
    <div className='text'>Премия "Олимп красоты" является значимым событием в мире красоты и эстетической медицины, представляя собой первую независимую Международную награду, призванную отметить выдающиеся достижения и инновации в этой области. Премия была создана для того, чтобы выявлять, поощрять и публично признавать профессионалов, которые вносят значительный вклад в развитие индустрии, улучшая качество жизни и внешний вид своих клиентов.</div>
    </div>
    </section>
    <section class="goals-section">
  <div class="goals-content">
    <h2 className='main-title'>Цели и миссия</h2>
    <p className='sub-text'>Целью Международной Премии "Олимп красоты" является не только награждение лучших специалистов, но и продвижение высоких стандартов практики, инноваций и профессионализма в индустрии красоты и эстетической медицины. Миссия Премии — стимулировать усилия на пути к совершенству, вдохновлять на новые открытия и методы работы, а также способствовать международному обмену знаниями и опытом.</p>

  </div>
    </section>
    <section className='awards-section'>
          <div className='wrapper'>
    <div className='title'>Категории наград</div>
    <div className='awards-cont'>
    <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Парикмахеры, стилисты, мейк-ап артисты</li>
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
        <div className="awards-image"></div>
        </div>
    </div>
    </section>
    <div className='wrapper'>
    <section className='main-section'>

    <div className='title'>Процесс отбора и критерии</div>
    <div className='text'>Участники Международной Премии проходят тщательный отборочный процесс, включающий предварительную заявку, оценку портфолио работ и рекомендации от клиентов и коллег. Жюри, состоящее из известных экспертов в индустрии, оценивает кандидатов на основе строгих критериев, среди которых новаторство, клиентская удовлетворенность, вклад в развитие профессии и социальная ответственность.</div>
    <div className='title mt-100'>Влияние и значимость</div>
    <div className='text'>Международная Премия "Олимп красоты" значительно повышает видимость и репутацию победителей в международной арене, открывая новые профессиональные и коммерческие возможности. Также это событие способствует повышению стандартов в индустрии и стимулирует более активное внедрение инновационных подходов и технологий в практику.</div>
    </section>
    </div>
    </div>
  );
};

export default MainContent;
