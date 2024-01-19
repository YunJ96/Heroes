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
  ];

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const imageChange = setInterval(() => {
      setImageIndex((index) => (index + 1) % mainImg.length);
    }, 5000);
    return () => clearInterval(imageChange);
  }, []);

  return (
    <main className='flex justify-center item-center bg-stone-900 h-lvh'>
      <div className='overflow-hidden h-10/12'>
        <img
          id='mainImg'
          src={mainImg[imageIndex]}
          alt='마비노기 영웅전 월페이퍼'
        />
      </div>
    </main>
  );
}
