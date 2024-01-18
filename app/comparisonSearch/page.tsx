import UserInfo from '../components/userInfo';

export default function ComparisonSearch() {
  return (
    <article>
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
