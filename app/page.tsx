'use client';

import { useEffect, useState } from 'react';
import NoticeComponent from './components/noticeComponent';

export default function Home() {
  const mainImg = [
    '/소우.webp',
    '/아켈.webp',
    '/체른.webp',
    '/라티야.webp',
    '/레티.webp',
    '/단아.webp',
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
    <main
      className='flex justify-center item-center bg-stone-900'
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${mainImg[imageIndex]})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
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
    </main>
  );
}
