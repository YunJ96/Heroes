'use client';

//차후 개발 페이지
import Link from 'next/link';
import { useState } from 'react';

export default function SideNav() {
  return (
    <nav className=' text-white text-2xl'>
      <ul>
        <Link href='/characterStrategy'>
          <li className='bg-neutral-500 text-center p-5 border-bottom-solid border-b-2 border-zinc-800'>
            캐릭터 공략
          </li>
        </Link>
        <Link href='/bossStrategy'>
          <li className='bg-neutral-500 text-center p-5'>보스 공략</li>
        </Link>
      </ul>
    </nav>
  );
}
