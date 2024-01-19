import UserInfo from '../components/userInfo';

export default function Comparison() {
  return (
    <article className='bg-stone-900' style={{ height: '1080px' }}>
      <div className='flex flex-row justify-center items-center'>
        <div style={{ marginRight: '50px' }} className='user-info-container'>
          <UserInfo />
        </div>

        <div className='user-info-container'>
          <UserInfo />
        </div>
      </div>
    </article>
  );
}
