import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '마비노기 영웅전 검색',
  description: '마비노기 영웅전 유저 정보 검색 웹',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>
        <header>
          <div className='flex flex-row justify-center space-x-10 w-3/5 mt-20'>
            <h1>
              <Link href='/'>마비노기 영웅전 검색 웹</Link>
            </h1>
            <nav>
              <ul className='flex space-x-10'>
                <li>
                  <Link href='/search'>유저 검색</Link>
                </li>
                <li>
                  <Link href='/comparisonSearch'>유저 비교</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
