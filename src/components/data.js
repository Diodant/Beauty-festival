import Img2019_1 from '../img/jury/2019_1.jpg'

const data = [
    {
      year: 2019,
      items: [
        {
          name: 'ВЯЧЕСЛАВ ДЮДЕНКО',
          image: Img2019_1,
          text: 'Текст для 2019 года, изображение 1',
        },
        {
            name: 'ff',
          image: '/images/2019_2.jpg',
          text: 'Текст для 2019 года, изображение 2',
        },
        {
            name: '',
          image: '/images/2019_3.jpg',
          text: 'Текст для 2019 года, изображение 3',
        },
      ],
    },
    {
        year: 2020,
        items: [
          {
            name: '',
            image: '/images/2019_1.jpg',
            text: 'Текст для 2019 года, изображение 1',
          },
          {
            name: '',
            image: '/images/2019_2.jpg',
            text: 'Текст для 2019 года, изображение 2',
          },
          {
            name: '',
            image: '/images/2019_3.jpg',
            text: 'Текст для 2019 года, изображение 3',
          },
        ],
      },
    // Далее аналогично для остальных годов...
  ];

  export default data;
