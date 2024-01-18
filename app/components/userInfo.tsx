'use client';

import { useState } from 'react';
import axios from 'axios';

interface UserInfo {
  character_name: string;
  character_class_name: string;
  character_level: number;
  character_date_create: string;
  character_date_last_logout: string;
}

export default function UserInfo() {
  const [user, setUser] = useState<string>('');
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleUserSearchBtn = async () => {
    const URL = process.env.NEXT_PUBLIC_BASE_URL + '/id?character_name=' + user;
    try {
      const idResponse = await axios.get(URL, {
        headers: {
          'x-nxopen-api-key': process.env.NEXT_PUBLIC_API_KEY,
        },
      });
      const ocid = idResponse.data.ocid;
      const infoUrl =
        process.env.NEXT_PUBLIC_BASE_URL + '/character/basic?ocid=' + ocid;

      const infoResponse = await axios.get(infoUrl, {
        headers: {
          'x-nxopen-api-key': process.env.NEXT_PUBLIC_API_KEY,
        },
      });
      console.log(infoResponse);
      setUserInfo(infoResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className='flex flex-row mb-2'>
        <input
          className='w-full rounded-l'
          type='text'
          placeholder='유저명을 입력해주세요.'
          onChange={(e) => setUser(e.target.value)}
        />
        <button
          className='bg-red-600 text-white w-20 rounded-r'
          onClick={handleUserSearchBtn}
        >
          검색
        </button>
      </div>
      {userInfo && (
        <div className='bg-neutral-500 rounded'>
          <p>
            <span>{userInfo.character_name}</span>
            <span>Lv.{userInfo.character_level}</span>
            <span>{userInfo.character_class_name}</span>
          </p>
          <p>
            캐릭터 생성일 :{' '}
            {userInfo.character_date_create === null
              ? '정보 없음'
              : userInfo.character_date_create}
          </p>
          <p>마지막 접속 : {userInfo.character_date_last_logout}</p>
        </div>
      )}
    </section>
  );
}
