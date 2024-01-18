'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const mainImg = [
    'https://lwi.nexon.com/heroes/home/wallpaper/2023/231214_AA1ABFC0201D7A39/wp_129.jpg',
    'https://lwi.nexon.com/heroes/home/wallpaper/2023/230713_E9B8DA40D472EB08/wp_125.jpg',
    'https://lwi.nexon.com/heroes/home/wallpaper/2022/221215_38A8EB55AC4DB322/wp_123.jpg',
    'https://lwi.nexon.com/heroes/home/wallpaper/2022/0714_2625E84241E79C64/wp_123.jpg',
    'https://lwi.nexon.com/heroes/home/wallpaper/2021/1202_C9BC7D3430E5DC96/wp_119.jpg',
    'https://lwi.nexon.com/heroes/home/wallpaper/2021/0708_B4E44FF8E24767BB/wp_116.jpg',
    'https://lwi.nexon.com/heroes/home/wallpaper/2021/wp_B41D2B7F50BC5A7B/wp_133.jpg',
    'https://lwi.nexon.com/heroes/home/wallpaper/2021/wp_B41D2B7F50BC5A7B/wp_129.jpg',
    'https://lwi.nexon.com/heroes/home/wallpaper/2021/wp_B41D2B7F50BC5A7B/wp_128.jpg',
    'https://lwi.nexon.com/heroes/home/wallpaper/2021/wp_B41D2B7F50BC5A7B/wp_127.jpg',
    'https://lwi.nexon.com/heroes/home/wallpaper/2021/wp_B41D2B7F50BC5A7B/wp_123.jpg',
    'https://lwi.nexon.com/heroes/home/wallpaper/2021/wp_B41D2B7F50BC5A7B/wp_122.jpg',
    'https://lwi.nexon.com/heroes/home/wallpaper/2021/wp_B41D2B7F50BC5A7B/wp_120.jpg',
    'https://lwi.nexon.com/heroes/home/wallpaper/2021/wp_B41D2B7F50BC5A7B/wp_116.jpg',
    'https://image.heroes.nexon.com/imghome/gallery/wp_088.jpg',
    'https://image.heroes.nexon.com/imghome/gallery/wp_077.jpg',
    'https://image.heroes.nexon.com/imghome/gallery/wp73_1920x1200.jpg',
  ];

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const imageChange = setInterval(() => {
      setImageIndex((index) => (index + 1) % mainImg.length);
    }, 10000);
    return () => clearInterval(imageChange);
  }, []);

  return (
    <main className='flex justify-center items-center h-108 mx-auto bg-stone-900'>
      <div className='image-container'>
        <img
          id='mainImg'
          src={mainImg[imageIndex]}
          alt='마비노기 영웅전 월페이퍼'
        />
      </div>
    </main>
  );
}
