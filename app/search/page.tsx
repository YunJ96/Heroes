import UserInfo from '../components/userInfo';

export default function SearchUser() {
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
    <article className='relative overflow-hidden'>
      <div
        style={{
          height: '1200px',
          backgroundImage: `url(${backGroundImg[randomNumber]})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
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
