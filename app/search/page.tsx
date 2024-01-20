import UserInfo from '../components/userInfo';

export default function SearchUser() {
  return (
    <article
      style={{ height: '1300px' }}
      className='flex justify-center bg-stone-900 h-lvh'
    >
      <div className='user-info-container'>
        <UserInfo />
      </div>
    </article>
  );
}
