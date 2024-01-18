import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hero Insight',
  description: '마비노기 영웅전 유저 정보 검색 웹',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className='bg-stone-900'>
        <header className='mb-10'>
          <nav className='flex flex-row space-x-10 w-3/5 mt-20 mx-auto text-white'>
            <ul className='flex space-x-10'>
              <li>
                <h1>
                  <Link href='/'>Hero Insight</Link>
                </h1>
              </li>
              <li>
                <Link href='/search'>유저 검색</Link>
              </li>
              <li>
                <Link href='/comparisonSearch'>유저 비교</Link>
              </li>
              <li>
                <Link href='/board'>공략 게시판</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className='flex flex-col justify-center w-3/5 mx-auto text-sm text-slate-400 my-20'>
          <p>- 마비노기 영웅전의 게임 데이터는 평균 10분 후 확인 가능합니다.</p>
          <p>
            - 2022년 1월 1일 이후 데이터를 조회할 수 있습니다. (단, 2022년 1월
            이전에 발생한 데이터는 응답 결과에 포함되지 않을 수 있음)
          </p>
          <p>- Data based on NEXON Open API</p>
          <p>- Image based on NEXON Heroes Wallpaper</p>
        </footer>
      </body>
    </html>
  );
}
