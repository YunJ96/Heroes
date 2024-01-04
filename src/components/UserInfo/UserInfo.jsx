import React from 'react';
import './styles.scss';

function UserInfo() {
  return (
    <div className='info-container'>
      <span>정보 보기</span>
      <div className='basic-information'>
        <span>LV. </span>
        <span>타이틀 : </span>
        <span>길드 : </span>
      </div>
      <div className='detail-information'>
        <span>힘 : 공격력 : </span>
        <span>민첩 : 방어력 : </span>
        <span>지능 : 공격속도 : </span>
        <span>의지 : 최대 스테미나 : </span>
        <span>밸런스 : 크리티컬 : </span>
        <span>대항력 : 크리티컬 저항 : </span>
        <span>추가피해 : 행운 : </span>
      </div>
    </div>
  );
}

export default UserInfo;
