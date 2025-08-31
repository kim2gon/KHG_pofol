import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as GitHubIcon } from "../assets/img/github-mark-white.svg";

const Section8 = ({ onSectionWheel, currentSection }) => {
  const navigate = useNavigate();
  const [divPosition2, setDivPosition2] = useState("below");
  const hasScrolledInSection8 = useRef(false);
  const sectionRef = useRef(null);

  const handleWheel = (e) => {
    // footer가 보이는 상태이거나 footer를 보이게 하는 스크롤인 경우
    if (divPosition2 === "bottom" || (e.deltaY > 0 && !hasScrolledInSection8.current)) {
      e.preventDefault();
      e.stopPropagation();

      if (e.deltaY > 0 && !hasScrolledInSection8.current) {
        // Section8에서 첫 스크롤
        setDivPosition2("bottom");
        hasScrolledInSection8.current = true;
      } else if (e.deltaY < 0 && divPosition2 === "bottom") {
        // Section8에서 위로 스크롤
        setDivPosition2("below");
        hasScrolledInSection8.current = false;
      }
    } else if (divPosition2 === "below" && e.deltaY < 0) {
      // footer가 숨겨진 상태에서 위로 스크롤할 때만 섹션 변경
      onSectionWheel(e);
    }
  };

  useEffect(() => {
    const element = sectionRef.current;
    if (element) {
      element.addEventListener('wheel', handleWheel, { passive: false });
      return () => element.removeEventListener('wheel', handleWheel);
    }
  }, [divPosition2, onSectionWheel]);

  const getDivStyle2 = () => {
    switch (divPosition2) {
      case "below":
        return "translate-y-[100vh]";
      case "bottom":
        return "translate-y-0";
      default:
        return "translate-y-[100vh]";
    }
  };

  const handleClick = () => {
    navigate('/home');
  }

  return (
    <section
      ref={sectionRef}
      className='relative w-full h-dvh bottom-0 !left-0 start-[--h-padding] end-[--h-padding] pt-[100px] px-0 pb-[75px] flex flex-col justify-between items-center overflow-hidden'
    >
      <div className='relative w-full h-full flex justify-center items-center'>
        <p className='m-0 max-w-[200px] absolute right-[100px] top-[180px] font-medium text-[11px] leading-[18px] tracking-wide text-[#111]'>
          This is my portfolio and this page is introduce my skills thank you for visiting my site thank you.</p>
        <div className='flex text-[80px] max-h-max justify-center'>
          <div className='relative font-semibold text-xs leading-tight text-center min-w-4 pt-4 px-[30px] pb-[11px] text-white bg-black'>
            KIM2GON
          </div>
        </div>
        <div className='absolute w-full h-full start-0 end-0 top-0 bottom-0' style={{ animation: '60s linear infinite none running spin' }}>
          <div className='absolute w-[735px] h-[735px] top-[--dotspinsize] left-[--dotspinsize] bigdotspin1 '></div>
          <div className='bigdotspin3 absolute size-[120px] rounded-full bottom-1/4 left-1/4 cursor-pointer flex items-center justify-center z-50'>
            <svg xmlns="http://www.w3.org/2000/svg" stroke="#5254e2" viewBox="0 0 98 98" className="size-10 opacity-55">
              <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff" />
            </svg>
          </div>
          <div className='bigdotspin3 absolute size-[120px] rounded-full bottom-1/4 right-1/4 cursor-pointer flex items-center justify-center z-50'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#5254e2" className="size-10 opacity-55">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
          </div>
          <div className='bigdotspin3 absolute size-[120px] rounded-full top-1/4 left-1/4 cursor-pointer flex items-center justify-center z-50'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#5254e2" class="size-10 opacity-55">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </div>
          <div className='absolute w-[735px] h-[735px] top-[--dotspinsize] left-[--dotspinsize] bigdotspin2 '></div>
        </div>
      </div>

      {/* 
        나중에 body기준으로 absolute로 변경 Section8밖으로 빼기      
      */}
      <div
        className={`absolute w-screen bottom-0 pt-[88px] px-[--footerpd] pb-4 flex flex-col items-center text-center
        bg-black text-white z-50 transition-transform duration-500 ${getDivStyle2()}`}
      >
        <p className="text-[30px]">KHG PORTFOLIO</p>
        <p className="mt-16 mx-0 mb-[50px] max-w-[200px] text-base leading-tight whitespace-pre-line"></p>
        <div className="relative w-[165px] h-[143px]">
          <img className="w-full h-full !rounded-full footerani1"></img>
          <div className="absolute w-full h-full pt-[100%] top-0 left-0 footerani2"></div>
        </div>
        <button onClick={handleClick} className="flex flex-col gap-4 mt-[50px] mx-0 mb-10 text-inherit justify-items-center items-center">
          <svg className="w-[10px] h-[28px] fill-none scale-[-1]">
            <path
              d="M9.924.924 5 7.314.076.924h9.848ZM9.308 12.308 5 17.9.692 12.31h8.616ZM8.693 22.693 5 27.485l-3.693-4.792h7.386Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="text-sm">Page top</span>
        </button>
        <div className="flex flex-wrap-reverse gap-y-4 gap-x-5 text-left w-full">
          <span className="font-normal text-[10px] leading-tight mr-auto tracking-wide"></span>
          <a className="font-medium text-[10px] leading-tight tracking-wide"></a>
          <a className="font-medium text-[10px] leading-tight tracking-wide"></a>
        </div>
      </div>
    </section>
  )
}

export default Section8