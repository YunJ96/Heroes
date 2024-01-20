'use client';

import { useState } from 'react';
import UserInfo, { Status } from '../components/userInfo';

export default function Comparison() {
  const [firstUser, setFirstUser] = useState<Status[] | null>(null);
  const [secondUser, setSecondUser] = useState<Status[] | null>(null);

  const handleChangeStatus = (userData: Status[], userNumber: number) => {
    if (userNumber === 1) {
      setFirstUser(userData);
    } else if (userNumber === 2) {
      setSecondUser(userData);
    }
  };

  const backGroundImg = [
    'https://image.heroes.nexon.com/imghome/gallery/wp61_1920x1200.jpg',
    'https://image.heroes.nexon.com/imghome/gallery/wp60_1920x1200.jpg',
    'https://image.heroes.nexon.com/imghome/gallery/wp70_1920x1200.jpg',
    'https://image.heroes.nexon.com/imghome/gallery/wp64_1920x1200.jpg',
    'https://image.heroes.nexon.com/imghome/gallery/wp63_1920x1200.jpg',
    'https://image.heroes.nexon.com/imghome/gallery/wp62_1920x1200.jpg',
    'https://ssl.nexon.com/s2/game/heroes/web/2017/wallpaper/2018/0712_vi1hwsj3/wp_093.jpg',
  ];

  const randomNumber = Math.floor(Math.random() * 6);

  return (
    <article
      className='bg-stone-900'
      style={{
        height: '1200px',
        backgroundColor: 'rgb(28 25 23)',
        backgroundImage: `url(${backGroundImg[randomNumber]})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
      }}
    >
      <div className='flex flex-row justify-center items-center'>
        <div style={{ marginRight: '50px' }} className='user-info-container'>
          <UserInfo
            onChangeStatus={(userData: any) => handleChangeStatus(userData, 1)}
            compareUser={secondUser}
          />
        </div>

        <div className='user-info-container'>
          <UserInfo
            onChangeStatus={(userData: any) => handleChangeStatus(userData, 2)}
            compareUser={firstUser}
          />
        </div>
      </div>
    </article>
  );
}
