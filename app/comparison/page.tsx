'use client';

import { useState } from 'react';
import UserInfo from '../components/userInfo';

export default function Comparison() {
  const [firstUser, setFirstUser] = useState(null);
  const [secondUser, setSecondUser] = useState(null);

  const handleChangeStatus = (userData: any, userNumber: number) => {
    if (userNumber === 1) {
      setFirstUser(userData);
    } else if (userNumber === 2) {
      setSecondUser(userData);
    }
  };

  return (
    <article className='bg-stone-900' style={{ height: '1300px' }}>
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
