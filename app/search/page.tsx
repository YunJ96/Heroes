import UserInfo from '../components/userInfo';

export default function SearchUser() {
  return (
    <article
      style={{ height: '1000px' }}
      className='flex justify-center items-center h-96 '
    >
      <div className='user-info-container'>
        <UserInfo />
      </div>
    </article>
  );
}
