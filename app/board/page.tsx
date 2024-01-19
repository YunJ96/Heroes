import SideNav from '../components/sideNav';
import Board from '../components/board';

export default function BoardPage() {
  return (
    <article className='flex justify-center'>
      <SideNav />
      <Board />
    </article>
  );
}
