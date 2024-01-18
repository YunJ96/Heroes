import UserInfo from '../components/userInfo';

export default function ComparisonSearch() {
  return (
    <article className='user-info-container'>
      <div className='flex flex-row justify-center items-center'>
        <div className='basis-96 m-4'>
          <UserInfo />
        </div>

        <div className='basis-96 '>
          <UserInfo />
        </div>
      </div>
    </article>
  );
}
