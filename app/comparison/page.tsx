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
    '/배경.webp',
    '/뷔제.webp',
    '/초섬.webp',
    '/지그.webp',
    '/엘쿨.webp',
    '/배무.webp',
    '/폭엘.webp',
  ];

  const randomNumber = Math.floor(Math.random() * 6);

  return (
    <article
      className='bg-stone-900'
      style={{
        height: '1200px',
        backgroundColor: 'rgb(28 25 23)',
        backgroundImage: `url(${backGroundImg[randomNumber]})`,
        backgroundSize: 'cover',
      }}
    >
      <div className='flex flex-row justify-center items-center'>
        <div style={{ marginRight: '50px' }} className='user-info-container'>
          <UserInfo
            onChangeStatus={(userData: Status[]) =>
              handleChangeStatus(userData, 1)
            }
            compareUser={secondUser}
          />
        </div>

        <div className='user-info-container'>
          <UserInfo
            onChangeStatus={(userData: Status[]) =>
              handleChangeStatus(userData, 2)
            }
            compareUser={firstUser}
          />
        </div>
      </div>
    </article>
  );
}
