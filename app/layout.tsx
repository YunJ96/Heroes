import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Hero Insight',
  description: '마비노기 영웅전 유저 정보 검색',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>
        <header className='flex bg-stone-900 h-36'>
          <nav className='flex flex-row bg-stone-900 w-full h-32 space-x-10 text-white text-3xl fixed'>
            <ul className='flex items-center space-x-10 ml-40'>
              <li>
                <h1>
                  <Link href='/'>
                    <Image
                      src='/hero_insight.png'
                      alt='HeroInsight'
                      width={150}
                      height={30}
                    />
                  </Link>
                </h1>
              </li>
              <li className='nav_list'>
                <Link href='/search'>유저 검색</Link>
              </li>
              <li className='nav_list'>
                <Link href='/comparison'>유저 비교</Link>
              </li>
              <li className='nav_list'>
                <Link href='/board'>게시판</Link>
              </li>
              <li className='nav_last_list text-rose-600'>
                <a href='https://heroes.nexon.com/?skip=0' target='_blank'>
                  마영전 바로가기
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className='bg-stone-950 h-44 flex flex-col justify-center text-center mx-auto text-sm text-slate-400'>
          <p>- 마비노기 영웅전의 게임 데이터는 평균 10분 후 확인 가능합니다.</p>
          <p>
            - 2022년 1월 1일 이후 데이터를 조회할 수 있습니다. (단, 2022년 1월
            이전에 발생한 데이터는 응답 결과에 포함되지 않을 수 있음)
          </p>
          <p>- Data based on NEXON Open API</p>
          <p>- Image based on NEXON Heroes</p>
        </footer>
      </body>
    </html>
  );
}
