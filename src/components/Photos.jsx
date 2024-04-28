import React, { useState } from 'react';
import Photo1 from '../img/photos/photo1.jpg';
import Photo2 from '../img/photos/photo2.jpg';
import Photo3 from '../img/photos/photo3.jpg';
import Photo4 from '../img/photos/photo4.jpg';
import Photo5 from '../img/photos/photo5.jpg';
import Photo6 from '../img/photos/photo6.jpg';
import Photo7 from '../img/photos/photo7.jpg';
import Photo8 from '../img/photos/photo8.jpg';
import Photo9 from '../img/photos/photo9.jpg';
import Photo10 from '../img/photos/photo10.jpg';
import Photo11 from '../img/photos/photo11.jpg';
import Photo12 from '../img/photos/photo12.jpg';
import Photo13 from '../img/photos/photo13.jpg';
import Photo14 from '../img/photos/photo14.jpg';
import Photo15 from '../img/photos/photo15.jpg';
import Photo16 from '../img/photos/photo16.jpg';
import Photo17 from '../img/photos/photo17.jpg';
import Photo18 from '../img/photos/photo18.jpg';
import Photo19 from '../img/photos/photo19.jpg';
import Photo20 from '../img/photos/photo20.jpg';
import Photo21 from '../img/photos/photo21.jpg';
import Photo22 from '../img/photos/photo22.jpg';
import Photo23 from '../img/photos/photo23.jpg';
import Photo24 from '../img/photos/photo24.jpg';
import Photo25 from '../img/photos/photo25.jpg';
import Photo26 from '../img/photos/photo26.jpg';
import Photo27 from '../img/photos/photo27.jpg';
import Photo28 from '../img/photos/photo28.jpg';
import Photo29 from '../img/photos/photo29.jpg';
import Photo30 from '../img/photos/photo30.jpg';
import Photo31 from '../img/photos/photo31.jpg';
import Photo32 from '../img/photos/photo32.jpg';
import Photo33 from '../img/photos/photo33.jpg';
import Photo34 from '../img/photos/photo34.jpg';
import Photo35 from '../img/photos/photo35.jpg';
import Photo36 from '../img/photos/photo36.jpg';
import Photo37 from '../img/photos/photo37.jpg';
import Photo38 from '../img/photos/photo38.jpg';
import Photo39 from '../img/photos/photo39.jpg';
import Photo40 from '../img/photos/photo40.jpg';
import Photo41 from '../img/photos/photo41.jpg';
import Photo42 from '../img/photos/photo42.jpg';
import Photo43 from '../img/photos/photo43.jpg';
import Photo44 from '../img/photos/photo44.jpg';
import Photo45 from '../img/photos/photo45.jpg';
import Photo46 from '../img/photos/photo46.jpg';
import Photo47 from '../img/photos/photo47.jpg';
import Photo48 from '../img/photos/photo48.jpg';
import Photo49 from '../img/photos/photo49.jpg';
import Photo50 from '../img/photos/photo50.jpg';
import Photo51 from '../img/photos/photo51.jpg';
import Photo52 from '../img/photos/photo52.jpg';
import Photo53 from '../img/photos/photo53.jpg';
import Photo54 from '../img/photos/photo54.jpg';
import Photo55 from '../img/photos/photo55.jpg';
import Photo56 from '../img/photos/photo56.jpg';
import Photo57 from '../img/photos/photo57.jpg';
import Photo58 from '../img/photos/photo58.jpg';
import Photo59 from '../img/photos/photo59.jpg';
import Photo60 from '../img/photos/photo60.jpg';
import Photo61 from '../img/photos/photo61.jpg';
import Photo62 from '../img/photos/photo62.jpg';
import Photo63 from '../img/photos/photo63.jpg';
import Photo64 from '../img/photos/photo64.jpg';
import Photo65 from '../img/photos/photo65.jpg';
import Photo66 from '../img/photos/photo66.jpg';
import Photo67 from '../img/photos/photo67.jpg';
import Photo68 from '../img/photos/photo68.jpg';
import Photo69 from '../img/photos/photo69.jpg';
import Photo70 from '../img/photos/photo70.jpg';
import Photo71 from '../img/photos/photo71.jpg';
import Photo72 from '../img/photos/photo72.jpg';
import Photo73 from '../img/photos/photo73.jpg';
import Photo74 from '../img/photos/photo74.jpg';
import Photo75 from '../img/photos/photo75.jpg';
import Photo76 from '../img/photos/photo76.jpg';
import Photo77 from '../img/photos/photo77.jpg';
import Photo78 from '../img/photos/photo78.jpg';
import Photo79 from '../img/photos/photo79.jpg';
import Photo80 from '../img/photos/photo80.jpg';
import Photo81 from '../img/photos/photo81.jpg';
import Photo82 from '../img/photos/photo82.jpg';
import Photo83 from '../img/photos/photo83.jpg';
import Photo84 from '../img/photos/photo84.jpg';
import Photo85 from '../img/photos/photo85.jpg';
import Photo86 from '../img/photos/photo86.jpg';
import Photo87 from '../img/photos/photo87.jpg';
import Photo88 from '../img/photos/photo88.jpg';
import Photo89 from '../img/photos/photo89.jpg';
import Photo90 from '../img/photos/photo90.jpg';

function Photos() {
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 9;

  // Массив с фотографиями
  const photos = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8, Photo9, Photo10, Photo11, Photo12,Photo13, Photo14, Photo15, Photo16,
  Photo17, Photo18, Photo19, Photo20, Photo21, Photo22, Photo23, Photo24, Photo25, Photo26, Photo27, Photo28, Photo29, Photo30, Photo31, Photo32, Photo33, Photo34,
  Photo35, Photo36, Photo37, Photo38, Photo39, Photo40, Photo41, Photo42, Photo43, Photo44, Photo45, Photo46, Photo47, Photo48, Photo49, Photo50, Photo51, Photo52,
  Photo53, Photo54, Photo55, Photo56, Photo57, Photo58, Photo59, Photo60, Photo61, Photo62, Photo63, Photo64, Photo65, Photo66, Photo67, Photo68, Photo69, Photo70,
  Photo71, Photo72, Photo73, Photo74, Photo75, Photo76, Photo77, Photo78, Photo79, Photo80, Photo81, Photo82, Photo83, Photo84, Photo85, Photo86, Photo87, Photo88,
  Photo89,Photo90,
  ];

  const renderPhotos = () => {
    const startIndex = (currentPage - 1) * photosPerPage;
    const endIndex = startIndex + photosPerPage;
    return photos.slice(startIndex, endIndex).map((photo, index) => (
      <img key={index} src={photo} alt={`Фото ${index + startIndex + 1}`} />
    ));
  };

  // Функция для переключения на следующую страницу
  const nextPage = () => {
    const totalPhotos = photos.length;
    const totalPages = Math.ceil(totalPhotos / photosPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  // Функция для переключения на предыдущую страницу
  const prevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
    <section className='main-section'>
      <h1 className='title'>Фотогалерея</h1>
      <div className="container">
        <div className="photo-grid">
          {renderPhotos()}
        </div>
        <div className="button-container">
          <button className="custom-button" onClick={prevPage} disabled={currentPage === 1}>Предыдущая</button>
          <button className="custom-button" onClick={nextPage} disabled={photos.length <= currentPage * photosPerPage}>Следующая</button>
        </div>
      </div>
    </section>
  );
}

export default Photos;
