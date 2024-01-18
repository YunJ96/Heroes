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

interface Equipment {
  item_equipment_slot_name: string;
  item_name: string;
}

interface Status {
  stat_id: string;
  stat_value: string;
}

export default function UserInfo() {
  const [user, setUser] = useState<string>('');
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [title, setTitle] = useState<[] | string | null>(null);
  const [emblem, setEmblem] = useState(null);
  const [equipment, setEquipmentUrl] = useState<[] | null>(null);
  const [status, setStatus] = useState<[] | null>(null);
  const [guild, setGuild] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleUserSearchBtn = async () => {
    const URL = process.env.NEXT_PUBLIC_BASE_URL + '/id?character_name=' + user;

    try {
      //유저 고유 식별자 조회
      const idResponse = await axios.get(URL, {
        headers: {
          'x-nxopen-api-key': process.env.NEXT_PUBLIC_API_KEY,
        },
      });
      const ocid = idResponse.data.ocid;

      //유저 기본 정보 조회
      const infoUrl =
        process.env.NEXT_PUBLIC_BASE_URL + '/character/basic?ocid=' + ocid;

      const infoResponse = await axios.get(infoUrl, {
        headers: {
          'x-nxopen-api-key': process.env.NEXT_PUBLIC_API_KEY,
        },
      });

      //유저 장착 타이틀, 문양 조회
      const titleUrl =
        process.env.NEXT_PUBLIC_BASE_URL +
        '/character/title-equipment?ocid=' +
        ocid;

      const titleResponse = await axios.get(titleUrl, {
        headers: {
          'x-nxopen-api-key': process.env.NEXT_PUBLIC_API_KEY,
        },
      });

      //유저 장착 아이템 조회
      const equipmentUrl =
        process.env.NEXT_PUBLIC_BASE_URL +
        '/character/item-equipment?ocid=' +
        ocid;

      const equipmentResponse = await axios.get(equipmentUrl, {
        headers: {
          'x-nxopen-api-key': process.env.NEXT_PUBLIC_API_KEY,
        },
      });

      //유저 능력치 조회
      const statusUrl =
        process.env.NEXT_PUBLIC_BASE_URL + '/character/stat?ocid=' + ocid;

      const statusResponse = await axios.get(statusUrl, {
        headers: {
          'x-nxopen-api-key': process.env.NEXT_PUBLIC_API_KEY,
        },
      });

      //유저 길드 조회
      const guildUrl =
        process.env.NEXT_PUBLIC_BASE_URL + '/character/guild?ocid=' + ocid;

      const guildResponse = await axios.get(guildUrl, {
        headers: {
          'x-nxopen-api-key': process.env.NEXT_PUBLIC_API_KEY,
        },
      });

      setUserInfo(infoResponse.data);

      const titleData = titleResponse.data.title_equipment;

      if (titleData.length === 0) {
        setTitle(null);
        setEmblem(null);
      } else if (titleData.length === 1) {
        setTitle(titleData[0].title_name);
        setEmblem(null);
      } else {
        setTitle(titleData[0].title_name);
        const emblemBase = titleData[1].title_name.split(': ');
        setEmblem(emblemBase[1]);
      }
      console.log(equipmentResponse.data.item_equipment);
      setEquipmentUrl(equipmentResponse.data.item_equipment);
      setStatus(statusResponse.data.stat);
      setGuild(guildResponse.data.guild_name);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (date: string) => {
    const koreaDate = new Date(date);
    return koreaDate.toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
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
          onClick={() => {
            setIsLoading(true);
            handleUserSearchBtn();
          }}
        >
          검색
        </button>
      </div>
      {userInfo && (
        <div className='bg-neutral-500 rounded text-zinc-950 font-bold p-3'>
          <p>
            <span className='mr-1'>{`${userInfo.character_name} (${userInfo.character_class_name})  Lv.${userInfo.character_level}`}</span>
          </p>

          <p>타이틀 : {title}</p>
          <p>문양 : {emblem}</p>
          <p>길드 : {guild}</p>
          <p>
            캐릭터 생성일 :{' '}
            {userInfo.character_date_create === null
              ? '정보 없음'
              : formatDate(userInfo.character_date_create)}
          </p>
          <p>마지막 접속 : {formatDate(userInfo.character_date_last_logout)}</p>
          <div className='flex flex-col mt-3'>
            <div>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '10px',
                }}
              >
                {status &&
                  status.map((status: Status, index) => {
                    if (
                      status.stat_id !== 'HEAVY_LOAD' &&
                      status.stat_id !== 'MEDIUM_LOAD'
                    )
                      return (
                        <li key={index}>
                          {`${status.stat_id} : ${status.stat_value}`}
                        </li>
                      );
                  })}
              </ul>
            </div>
            <div className='text-sm mt-3'>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '10px',
                }}
              >
                {equipment &&
                  equipment.map((equipment: Equipment) => {
                    return (
                      <li>
                        {equipment.item_equipment_slot_name} :{' '}
                        {equipment.item_name}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
