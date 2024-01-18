import UserInfo from '../components/userInfo';

export default function SearchUser() {
  return (
    <article className='user-info-container flex justify-center items-center h-96 '>
      <div className='basis-96'>
        <UserInfo />
      </div>
    </article>
  );
}
