import React from 'react'
import Cssanimation1 from '../cssanimations/cssanimation1'
import Cssanimation2 from '../cssanimations/cssanimation2';
import Cssanimation3 from '../cssanimations/cssanimation3';
import Cssanimation4 from '../cssanimations/cssanimation4';
import Cssanimation5 from '../cssanimations/cssanimation5';
import Cssanimation6 from '../cssanimations/cssanimation6';

const Section5 = () => {
  const cssanimation = [
    <Cssanimation1 />,
    <Cssanimation2 />,
    <Cssanimation3 />,
    <Cssanimation4 />,
    <Cssanimation5 />,
    <Cssanimation6 />,
  ];
// 12*2 24개 애니메이션 반복

  return (
    <section className='w-full h-dvh flex pt-[100px] pl-10 pb-[75px] !left-0 top-0 bottom-0 start-[--h-padding] end-[--h-padding] relative'>
      <p className='mt-[15vh] m-0 max-w-60 font-medium text-[11px] leading-[18px] tracking-wide text-[#111]'>
        this is my portfolio thank you for visiting my site thank you.
        <a href='/' className='block max-w-max min-w-40 mt-8 cursor-pointer font-semibold text-xs leading-tight text-center realative text-white pt-4 px-[30px] pb-[11px] bg-black'>
          click my profile
        </a>
      </p>

      <div className='absolute top-0 bottom-[-75px] left-[324px] w-[324px] overflow-hidden'>
        <div className='w-full h-full'>
          <div className='top-full flex-col absolute flex slide-up ani-delay'>
            <div className='w-full'>
              {cssanimation.map((v, i) => (
                <div key={v} className='block mt-[91px] object-cover w-[324px] h-[404px]'>{v}</div>
              ))}
            </div>
            <div className='w-full'>
              {cssanimation.map((v, i) => (
                <div key={v} className='block mt-[91px] object-cover w-[324px] h-[404px]'>{v}</div>
              ))}
              <div className='flex flex-wrap'>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute top-0 bottom-[-300px] left-[739px] w-[324px] overflow-hidden'>
        <div className='w-full h-full'>
          <div className='bottom-full flex-col absolute flex slide-down ani-delay'>
            <div className='w-full'>
              {cssanimation.map((v, i) => (
                <div key={v} className='block mt-[91px] object-cover w-[324px] h-[404px]'>{v}</div>
              ))}
            </div>
            <div className='w-full'>
              {cssanimation.map((v, i) => (
                <div key={v} className='block mt-[91px] object-cover w-[324px] h-[404px]'>{v}</div>
              ))}
              <div className='flex flex-wrap'>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section5;
