import UserInfo from '../components/userInfo';

export default function SearchUser() {
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
    <article className='relative overflow-hidden'>
      <div
        style={{
          height: '1200px',
          backgroundImage: `url(${backGroundImg[randomNumber]})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className='flex justify-center h-lvh relative'
      >
        <div className='user-info-container'>
          <UserInfo onChangeStatus={undefined} compareUser={null} />
        </div>
      </div>
    </article>
  );
}
