'use client';

import { useEffect, useState } from 'react';
import NoticeComponent from './components/noticeComponent';

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
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    const imageChange = setInterval(() => {
      setImageIndex((index) => (index + 1) % mainImg.length);
    }, 5000);
    return () => clearInterval(imageChange);
  }, []);

  const handleCloseBtn = () => {
    setModalVisible(false);
  };

  return (
    <main className='flex bg-stone-900'>
      {modalVisible && (
        <div className='flex flex-col p-2 rounded fixed bg-neutral-400 z-20 top-40 left-20 border-solid border-black border-2'>
          <NoticeComponent />
          <button
            className='ml-auto border-solid border-black border-2 w-20'
            onClick={handleCloseBtn}
          >
            닫기
          </button>
        </div>
      )}

      <div
        style={{
          width: '100%',
          height: '1080px',
          backgroundImage: `url(${mainImg[imageIndex]})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
          backgroundSize: 'cover',
        }}
      ></div>
    </main>
  );
}
