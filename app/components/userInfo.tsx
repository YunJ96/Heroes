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

interface Translation {
  [key: string]: string;
}

export default function UserInfo({ onChangeStatus, compareUser }: any) {
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

      setEquipmentUrl(equipmentResponse.data.item_equipment);
      setStatus(statusResponse.data.stat);
      onChangeStatus(statusResponse.data.stat);
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

  const characterImg: Record<string, string> = {
    리시타: '1',
    피오나: '2',
    이비: '3',
    카록: '4',
    카이: '5',
    벨라: '6',
    허크: '7',
    린: '8',
    아리샤: '9',
    헤기: '10',
    델리아: '11',
    미리: '12',
    그림덴: '13',
    미울: '14',
    벨: '15',
    레서: '16',
    카엘: '17',
    테사: '18',
    단아: '19',
    레티: '20',
    라티야: '21',
    체른: '22',
    아켈: '23',
    소우: '24',
  };

  return (
    <section>
      <div className='flex flex-row mb-2'>
        <input
          className='w-full rounded-l p-3 text-2xl focus:outline-none'
          type='text'
          placeholder='유저명을 입력해주세요.'
          onChange={(e) => setUser(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              setIsLoading(true);
              handleUserSearchBtn();
            }
          }}
        />
        <button
          className='bg-red-600 text-white w-20 rounded-r text-xl'
          onClick={() => {
            setIsLoading(true);
            handleUserSearchBtn();
          }}
        >
          검색
        </button>
      </div>
      {userInfo && (
        <div className='bg-neutral-500 rounded text-zinc-950 p-5'>
          <div className='flex'>
            <div>
              <img
                className='w-40'
                src={`https://lwi.nexon.com/heroes/renewal/info/char_list_${
                  characterImg[userInfo.character_class_name]
                }.png`}
                alt={userInfo.character_class_name}
              />
            </div>

            <div>
              <p className='font-bold text-lg ml-4 mb-4'>
                <span className='mr-1'>{`${userInfo.character_name} (${userInfo.character_class_name})  Lv.${userInfo.character_level}`}</span>
              </p>
              <p className='ml-4 mb-2'>
                <span className='font-bold'>타이틀 :</span> {title}
              </p>
              <p className='ml-4 mb-2'>
                <span className='font-bold'>문양 :</span> {emblem}
              </p>
              <p className='ml-4 mb-2'>
                <span className='font-bold'>길드 :</span> {guild}
              </p>
              <p className='ml-4 mb-2'>
                <span className='font-bold'>캐릭터 생성일 :</span>{' '}
                {userInfo.character_date_create === null
                  ? '먼 과거'
                  : formatDate(userInfo.character_date_create)}
              </p>
              <p className='ml-4 mb-4'>
                <span className='font-bold'>마지막 접속 :</span>{' '}
                {formatDate(userInfo.character_date_last_logout)}
              </p>
            </div>
          </div>
          <div className='flex flex-col mt-3 text-lg'>
            <div>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '2px',
                }}
              >
                {status &&
                  status.map((status: Status, index) => {
                    const statusTranslation: Translation = {
                      ATK: '공격력',
                      MATK: '마법공격력',
                      DEF: '방어력',
                      STR: '힘',
                      DEX: '민첩',
                      INT: '지능',
                      WILL: '의지',
                      LUCK: '행운',
                      HP: '체력',
                      STAMINA: '스테미너',
                      ATK_Speed: '공격속도',
                      ATK_Absolute: '추가피해',
                      Critical: '크리티컬',
                      CritFactor: '크리티컬 피해량',
                      Res_Critical: '크리티컬 저항력',
                      Balance: '밸런스',
                      TOWN_SPEED: '마을 이동속도',
                      SKILL_RANK_SUM: '스킬 랭크 총합',
                      ATK_LimitOver: '공격력 제한 해제',
                      Immunity: '대항력',
                    };

                    const translatedStat = statusTranslation[status.stat_id];

                    if (
                      status.stat_id !== 'HEAVY_LOAD' &&
                      status.stat_id !== 'MEDIUM_LOAD'
                    )
                      return (
                        <li key={index}>
                          <span className='font-bold'>{translatedStat} : </span>
                          {status.stat_value}{' '}
                          {compareUser &&
                            Number(status.stat_value) -
                              Number(compareUser[index].stat_value) !==
                              0 && (
                              <span
                                className={
                                  Number(status.stat_value) -
                                    Number(compareUser[index].stat_value) >
                                  0
                                    ? 'text-rose-600'
                                    : 'text-blue-700'
                                }
                              >
                                {Number(status.stat_value) -
                                  Number(compareUser[index].stat_value) >
                                0
                                  ? `(+${
                                      Number(status.stat_value) -
                                      Number(compareUser[index].stat_value)
                                    })`
                                  : `(${
                                      Number(status.stat_value) -
                                      Number(compareUser[index].stat_value)
                                    })`}
                              </span>
                            )}
                        </li>
                      );
                  })}
              </ul>
            </div>
            <div className='text-base mt-3'>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '5px',
                }}
              >
                {equipment &&
                  equipment.map((equipment: Equipment, index) => {
                    const statusTranslation: Translation = {
                      'Right Hand': '무기',
                      'Left Hand': '보조장비',
                      Head: '머리',
                      Upper: '가슴',
                      Lower: '다리',
                      Hand: '손',
                      Leg: '발',
                      Rhod: '로드',
                      'Right Finger': '반지',
                      'Left Finger': '반지',
                      Earring: '귀걸이',
                      Belt: '벨트',
                      Charm: '장신구',
                      Artifact: '아티팩트',
                      'Right Wrist': '팔찌',
                      'Left Wrist': '팔찌',
                      Necklace: '목걸이',
                      Hair: '헤어',
                      FacePainting: '페이스페인트',
                      BodyPainting: '바디페인트',
                      MakeUp: '메이크업',
                      'Inner Armor': '이너아머',
                      Badge: '뱃지',
                      'Right Epaulet': '견장',
                      'Left Epaulet': '견장',
                      Lens: '렌즈',
                      'Body Shape': '체형',
                      Avatar_Helm: '머리 아바타',
                      Avatar_Tunic: '가슴 아바타',
                      Avatar_Pants: '다리 아바타',
                      Avatar_Gloves: '손 아바타',
                      Avatar_Boots: '발 아바타',
                      SubWeapon: '보조무기',
                      Avatar_Rear: '등 아바타(날개)',
                      Avatar_Weapon: '무기 아바타',
                      Avatar_Tail: '꼬리 아바타',
                    };

                    const translatedAvatar =
                      statusTranslation[equipment.item_equipment_slot_name];

                    const item = {
                      밀레시안: 'text-yellow-500',
                      아르드리: 'text-red-600',
                      오르나: 'text-fuchsia-600',
                    };

                    const matchingKey = Object.keys(item).find(
                      (key) =>
                        equipment &&
                        equipment.item_name &&
                        typeof equipment.item_name === 'string' &&
                        equipment.item_name.includes(key)
                    ) as keyof typeof item;

                    const className =
                      matchingKey !== undefined ? item[matchingKey] : '';

                    return (
                      <li key={index}>
                        <span className='font-bold'>{translatedAvatar} :</span>{' '}
                        <span className={className}>{equipment.item_name}</span>{' '}
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
