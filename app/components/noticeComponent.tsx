export default function NoticeComponent() {
  return (
    <div className='flex flex-col item-center bg-neutral-500 p-2 text-lg'>
      <h2 className='border-bottom-solid p-1 border-b-2 border-zinc-800'>
        공지사항
      </h2>
      <div className='p-1'>
        안녕하세요. Hero Insight 웹 페이지 개발자입니다. <br />
        현재 소우 캐릭터의 전용 무기인 오리엔탈 블레이드, 115제 반지 어둠 속
        <br />
        그림자, 어둠 속 달빛, 그리고 견장, 체형, 장비의 인챈트, 강화 등의 정보는
        <br />
        API가 제공되지 않아서 표시되지 않고 있습니다. 만약 해당 정보를 얻을 수
        있는 <br />
        새로운 업데이트가 있을 경우, 최대한 빨리 반영하도록 노력하겠습니다.
        <br />
        양해해주셔서 감사합니다.
      </div>
    </div>
  );
}
