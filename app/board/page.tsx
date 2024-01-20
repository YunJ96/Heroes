// import SideNav from '../components/sideNav';
// import CharacterBoard from '../components/characterBoard';

import Link from 'next/link';

export default function Board() {
  return (
    <article className='flex flex-col items-center bg-stone-900 h-lvh'>
      <ul className='flex flex-col item-center bg-neutral-400 w-1/2 p-2 text-lg rounded'>
        <li className='p-1'>
          <Link href={'/board/notice'}>공지 사항</Link>
        </li>
      </ul>

      <ul className='flex flex-col item-center bg-neutral-400 w-1/2 p-2 text-lg mt-5 rounded'>
        <li className='border-bottom-solid p-1 border-b-2 border-zinc-800'>
          <a href='https://www.youtube.com/watch?v=TpFh03rmdPw' target='_blank'>
            신규 / 복귀 유저 필독 영상!
            <span className='text-neutral-900 text-sm ml-2'>유튜브 링크</span>
          </a>
        </li>
        <li className='border-bottom-solid p-1 border-b-2 border-zinc-800'>
          <a href='https://www.youtube.com/watch?v=T-2ztQ29p2Q' target='_blank'>
            보급 장비 이후 아이템 맞추는 법!
            <span className='text-neutral-900 text-sm ml-2'>유튜브 링크</span>
          </a>
        </li>
        <li className='border-bottom-solid p-1 border-b-2 border-zinc-800'>
          <a href='https://www.youtube.com/watch?v=59RhndYvPJ4' target='_blank'>
            마영전 돈 버는 방법!
            <span className='text-neutral-900 text-sm ml-2'>유튜브 링크</span>
          </a>
        </li>
        <li className='border-bottom-solid p-1 border-b-2 border-zinc-800'>
          <a href='https://www.youtube.com/watch?v=YS_v-o8HQrE' target='_blank'>
            마비노기 연어전이라고 불리게 된 이유, 골든 타임??
            <span className='text-neutral-900 text-sm ml-2'>유튜브 링크</span>
          </a>
        </li>
        <li className='p-1'>
          <a
            href='https://www.youtube.com/watch?v=htpuwieyqm4&t=1036s'
            target='_blank'
          >
            캐릭터 추천 가이드
            <span className='text-neutral-900 text-sm ml-2'>유튜브 링크</span>
          </a>
        </li>
      </ul>

      <ul className='flex flex-col item-center bg-neutral-400 w-1/2 p-2 text-lg mt-5 rounded'>
        <li className='border-bottom-solid p-1 border-b-2 border-zinc-800'>
          <a href='https://www.youtube.com/watch?v=Q-BF9lzRVgY' target='_blank'>
            소우 공략 및 사용법
            <span className='text-neutral-900 text-sm ml-2'>유튜브 링크</span>
          </a>
        </li>
        <li className='border-bottom-solid p-1 border-b-2 border-zinc-800'>
          <a href='https://www.youtube.com/watch?v=_iH8J--nT2g' target='_blank'>
            아켈 공략 및 사용법
            <span className='text-neutral-900 text-sm ml-2'>유튜브 링크</span>
          </a>
        </li>
        <li className='border-bottom-solid p-1 border-b-2 border-zinc-800'>
          <a href='https://www.youtube.com/watch?v=xxWjGDL0810' target='_blank'>
            체른 공략 및 사용법
            <span className='text-neutral-900 text-sm ml-2'>유튜브 링크</span>
          </a>
        </li>
        <li className='border-bottom-solid p-1 border-b-2 border-zinc-800'>
          <a href='https://www.youtube.com/watch?v=ZQQ8qHxkQ4I' target='_blank'>
            테사 공략 및 사용법
            <span className='text-neutral-900 text-sm ml-2'>유튜브 링크</span>
          </a>
        </li>
        <li className='border-bottom-solid p-1 border-b-2 border-zinc-800'>
          <a href='https://www.youtube.com/watch?v=bvLIkwkOdiw' target='_blank'>
            델리아 공략 및 사용법
            <span className='text-neutral-900 text-sm ml-2'>유튜브 링크</span>
          </a>
        </li>
        <li className='border-bottom-solid p-1 border-b-2 border-zinc-800'>
          <a href='https://www.youtube.com/watch?v=o5GeZUOS5N4' target='_blank'>
            미울 공략 및 사용법
            <span className='text-neutral-900 text-sm ml-2'>유튜브 링크</span>
          </a>
        </li>
        <li className='border-bottom-solid p-1 border-b-2 border-zinc-800'>
          <a href='https://www.youtube.com/watch?v=dvorbize9XI' target='_blank'>
            레서 공략 및 사용법
            <span className='text-neutral-900 text-sm ml-2'>유튜브 링크</span>
          </a>
        </li>
        <li className='border-bottom-solid p-1 border-b-2 border-zinc-800'>
          <a href='https://www.youtube.com/watch?v=wQO4rHFkewA' target='_blank'>
            테이드 허크 공략 및 사용법
            <span className='text-neutral-900 text-sm ml-2'>유튜브 링크</span>
          </a>
        </li>
        <li className='p-1'>
          <a href='https://www.youtube.com/watch?v=PXgYPVQKIoY' target='_blank'>
            카엘 공략 및 사용법
            <span className='text-neutral-900 text-sm ml-2'>유튜브 링크</span>
          </a>
        </li>
      </ul>
    </article>
  );
}
