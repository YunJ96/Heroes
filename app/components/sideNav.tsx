'use client';

//차후 개발 페이지
import Link from 'next/link';

export default function SideNav() {
  return (
    <nav className='fixed left-44 top-44 text-2xl'>
      <ul className='p-2 bg-neutral-400 rounded text-center'>
        <Link href='/board/notice'>
          <li className='p-2 border-bottom-solid border-b-2 border-black '>
            공지
          </li>
        </Link>
        <Link href='/characterStrategy'>
          <li className='p-3 border-bottom-solid border-b-2 border-black'>
            캐릭터 공략
          </li>
        </Link>
        <Link href='/bossStrategy'>
          <li className='text-center p-2'>보스 공략</li>
        </Link>
      </ul>
    </nav>
  );
}
