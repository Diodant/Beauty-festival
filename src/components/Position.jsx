import React from 'react';
import ArrowImg from '../img/arrow.svg'
import BubbleImg from '../img/prem.svg'

function Position() {
  return (
    <div>
    <div className="ratings-content">
    <div className="content-overlay">
    <div className='logo-cont'>
        <div className="logo-image"></div>
        </div>
      <h1 className="main-title">Положение</h1>
      <h1 className="main-title">Международной Премии "Олимп красоты"</h1>
    </div>
    </div>
    <section className='main-section'>
    <section className='about-section'>
        <div className='wrapper'>
          <div className='title'>Цели и задачи премии</div>
          <div className='text'>Международная Премия "Олимп Красоты" ставит своей целью поощрение лучших мастеров индустрии красоты и эстетической медицины, а также стимулирование инновационного развития отрасли. Основные задачи премии:</div>
          <ul className="styled-list">
          <li>
            <div className="list-item-container">
              <span className="big-number">1</span>
              <span>Отметить выдающиеся достижения специалистов в области красоты и ухода.</span>
            </div>
          </li>
          <li>
            <div className="list-item-container">
              <span className="big-number">2</span>
              <span>Поддерживать внедрение новых технологий и методик, способствующих развитию сферы красоты и эстетической медицины.</span>
            </div>
          </li>
          <li>
            <div className="list-item-container">
              <span className="big-number">3</span>
              <span>Устанавливать высокие стандарты клиентского сервиса и профессионализма среди мастеров.</span>
            </div>
          </li>
          <li>
            <div className="list-item-container">
              <span className="big-number">4</span>
              <span>Содействовать международному сотрудничеству профессионалов и обмену опытом.</span>
            </div>
          </li>
          <li>
            <div className="list-item-container">
              <span className="big-number">5</span>
              <span>Привлекать внимание к достижениям в эстетике и поддерживать дальнейшее развитие специалистов через международное признание.</span>
            </div>
          </li>
        </ul>
        </div>
      </section>
      <div className='wrapper'>
    <div className='title'>Организаторы премии</div>
    <div className='text'>Организацией премии занимается комитет Международной Ассоциации Красоты и Ухода (International Association of Beauty and Care). В состав комитета входят:</div>
    <ul className="styled-list">
          <li>
            <div className="list-item-container">
              <span className="big-number">1</span>
              <span>Представители ведущих учебных заведений, клиник и салонов красоты</span>
            </div>
          </li>
          <li>
            <div className="list-item-container">
              <span className="big-number">2</span>
              <span>Независимые эксперты с международным опытом в сфере эстетической медицины, косметологии и парикмахерского искусства.</span>
            </div>
          </li>
          <li>
            <div className="list-item-container">
              <span className="big-number">3</span>
              <span>Партнеры и спонсоры, поддерживающие развитие индустрии красоты.</span>
            </div>
          </li>
        </ul>
        <div className='text'>Организаторы премии обеспечивают прозрачность процесса отбора участников и справедливость оценок, а также соблюдение этических норм.</div>
    </div>

    <section className='about-section'>
        <div className='wrapper'>
          <div className='title'>Участники</div>
          <div className='text'>Премия "Олимп Красоты" открыта для всех квалифицированных специалистов и мастеров, работающих в индустрии красоты:</div>
          <div className='awards-cont mt-30'>
    <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Мастера ногтевого сервиса.</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Парикмахеры и стилисты.</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Косметологи, дерматологи и эстетисты.</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Мастера перманентного макияжа.</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Тату-мастера, специалисты в области татуажа и художественной росписи.</li>
        </ul>
        </div>
        <div className='text'>Участники могут быть номинированы как профессиональными ассоциациями и коллегами, так и подать заявку самостоятельно. Подача заявки требует предоставления портфолио, рекомендаций и описания профессиональных достижений.</div>
        </div>
      </section>

      <div className='wrapper mb-50'>
          <div className='title'>НОМИНАЦИИ</div>
          <div className='text'>Номинации премии охватывают широкий спектр профессиональной деятельности в индустрии красоты. Основные номинации:</div>
          <div className='bubble-cont'>
        <ul className="jury-list mt-30">
        <li><img src={BubbleImg} alt="Bubble" /> Парикмахеры и стилисты</li>
          <li><img src={BubbleImg} alt="Bubble" /> Make-up артисты</li>
          <li><img src={BubbleImg} alt="Bubble" /> Мастера маникюра и педикюра</li>
          <li><img src={BubbleImg} alt="Bubble" /> Косметологи и эстетисты</li>
          <li><img src={BubbleImg} alt="Bubble" /> Мастера перманентного макияжа</li>
          <li><img src={BubbleImg} alt="Bubble" /> Тату мастера</li>
        </ul>
        </div>
        <div className='text'>Каждый участник может быть номинирован в нескольких категориях при наличии соответствующих заслуг.</div>
        </div>

        <div className='wrapper cont-center mb-50'>
          <div className='title'>Критерии оценки</div>
          <div className="awards-image-01"></div>
          <div className='text'>Премия "Олимп Красоты" основывается на тщательной оценке кандидатов по следующим критериям:</div>
          <div className='awards-cont'>
    <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Инновационный подход: Внедрение новых техник, продуктов или технологий в своей профессиональной практике.</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Качество и результаты работы: Профессиональное исполнение, подтвержденные результаты и эстетическая ценность выполненных работ.</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Клиентская удовлетворенность: Уровень удовлетворенности клиентов, наличие положительных отзывов и рекомендаций.</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Профессиональное развитие и вклад в отрасль: Постоянное совершенствование навыков, участие в обучении коллег и влияние на развитие индустрии красоты.</li>
        </ul>
        
        </div>
        </div>

        <div className='wrapper cont-center'>
          <div className='title'>Процесс отбора</div>
          <div className="position-image"></div>
          <div className='text'>Отбор участников проводится в несколько этапов:</div>

          <div className='awards-cont'>
    <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Подача заявок: Заявки принимаются с 1 октября по 1 декабря текущего года. Заявка должна содержать портфолио, рекомендации и подтверждения достижений.</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Предварительный отбор: На основании предоставленных документов комитет отбирает финалистов, соответствующих критериям премии.</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Оценка экспертной комиссией: Финалисты оцениваются экспертной комиссией, состоящей из профессионалов отрасли, на основе портфолио и достижений.</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Голосование и определение победителей: Окончательное решение принимается на основе коллективного голосования членов жюри.</li>
        </ul>
        
        </div>
        </div>
        <section className='about-section'>
        <div className='wrapper'>
          <div className='title'>Награждение</div>
          <div className='text'>Победители премии "Олимп Красоты" получают:</div>
          <ul className="styled-list">
          <li>
            <div className="list-item-container">
              <span className="big-number">1</span>
              <span>Статуэтку "Олимп Красоты" – символ международного признания их профессионализма.</span>
            </div>
          </li>
          <li>
            <div className="list-item-container">
              <span className="big-number">2</span>
              <span>Сертификаты и ценные призы от спонсоров премии.</span>
            </div>
          </li>
          <li>
            <div className="list-item-container">
              <span className="big-number">3</span>
              <span>Возможность публикации своих работ в международных изданиях.</span>
            </div>
          </li>
        </ul>
        <div className='text'>Торжественная церемония награждения проходит ежегодно в одном из престижных международных культурных центров.</div>
        </div>
      </section>
      <section className='about-section'>
        <div className='wrapper'>
          <div className='title'>Правила и условия участия</div>
          <ul className="styled-list">
          <li>
            <div className="list-item-container">
              <span className="big-number">1</span>
              <span>Премия проводится ежегодно, заявки принимаются с 1 октября по 1 декабря. Итоги подводятся 10 декабря.</span>
            </div>
          </li>
          <li>
            <div className="list-item-container">
              <span className="big-number">2</span>
              <span>Участники должны предоставить документы, подтверждающие их квалификацию и достижения.</span>
            </div>
          </li>
          <li>
            <div className="list-item-container">
              <span className="big-number">3</span>
              <span>Участники соглашаются на использование своих материалов в публикациях, рекламных и образовательных целях.</span>
            </div>
          </li>
          <li>
            <div className="list-item-container">
              <span className="big-number">4</span>
              <span>Все предоставленные данные участников защищены условиями конфиденциальности и не будут переданы третьим лицам без разрешения.</span>
            </div>
          </li>
        </ul>
        </div>
      </section>
      <section className='about-section'>
        <div className='wrapper'>
          <div className='title'>Финансирование и спонсорство</div>
          <div className='text'>Премия финансируется за счет вкладов спонсоров, партнеров и членских взносов. Спонсорами могут быть:</div>
          <ul className="styled-list">
          <li>
            <div className="list-item-container">
              <span className="big-number">1</span>
              <span>Косметические бренды и компании, производящие профессиональные средства для индустрии красоты.</span>
            </div>
          </li>
          <li>
            <div className="list-item-container">
              <span className="big-number">2</span>
              <span>Учебные заведения, клиники и салоны, заинтересованные в развитии отрасли.</span>
            </div>
          </li>
          <li>
            <div className="list-item-container">
              <span className="big-number">3</span>
              <span>Международные партнеры, поддерживающие инновации в эстетике и косметологии.</span>
            </div>
          </li>
        </ul>
        </div>
      </section>
      <section className='about-section'>
      <div className='wrapper'>
      <div className='title'>Заключение</div>
      <div className='text'>Данное положение является основным документом, регулирующим организацию и проведение Международной Премии "Олимп Красоты". Оно обеспечивает прозрачность процедур, честность оценок и высокие стандарты на всех этапах проведения конкурса и награждения победителей.</div>
      </div>
         </section>
      </section>
    </div>
  );
}

export default Position;
