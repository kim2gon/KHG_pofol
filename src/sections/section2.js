import React, { useEffect, useRef, useState } from 'react'
import eximg from '../assets/img/characters.png'

const Section2 = () => {
  const boxRef = useRef(null);
  const [translateY, setTranslateY] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // 원하는 범위 지정 (예: 0~300px 사이에서만 변화)
      const start = 0;
      const end = 300;

      // 스크롤 위치를 0~100% 범위로 변환
      const percent = Math.min(Math.max((end - scrollTop) / (end - start), 0), 1);

      setTranslateY(percent * 100); // 100% → 0%
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full h-dvh flex pt-[100px] px-0 pb-[75px] top-0 bottom-0 relative">
      <div className="mt-auto mr-0 mb-[5px] ml-10">
        <div className='flex gap-7 w-60'>
          <button className="flex h-[79px] w-[240px] overflow-hidden">
            <div className="w-[79px] h-full bg-black flex-shrink-0 relative flex items-center justify-center">
              <div className="bg-white rounded-full size-[39px] flex items-center justify-center">
                <div className="bg-black w-[10px] h-[11.5px] triangle" />
              </div>
            </div>
            <div className="flex-grow h-full">
              <img className="w-full h-full object-cover" src={eximg} />
            </div>
          </button>
        </div>
      </div>
      <div ref={boxRef} className='fixed mt-[100px] left-0 right-0 pt-[53px] pr-[232px] pb-[50px] pl-[159px] bg-black text-white z-10 boxani'>
        <div className='font-medium text-[34px] leading-tight tracking-wide max-w-[1250px]'
        style={{transform: `translateY(${translateY}%) translateZ(0px)`}}>
          <p>this is my portfolio thank you for visiting my site thank you.this is my portfolio thank you for visiting my site thank you.
            this is my portfolio thank you for visiting my site thank you.this is my portfolio thank you for visiting my site thank you.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Section2