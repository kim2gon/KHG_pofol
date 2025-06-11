import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

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
    navigate('/');
  }

  return (
    <section 
      ref={sectionRef}
      className='relative w-full h-dvh bottom-0 !left-0 start-[--h-padding] end-[--h-padding] pt-[100px] px-0 pb-[75px] flex flex-col justify-between items-center z-20 overflow-hidden'
    >
      <div className='relative w-full h-full flex justify-center items-center'>
        <p className='m-0 max-w-[200px] absolute right-[100px] top-[180px] font-medium text-[11px] leading-[18px] tracking-wide text-[#111]'>
          This is my portfolio and this page is introduce my skills thank you for visiting my site thank you.</p>
        <div className='flex text-[80px] max-h-max justify-center'>
          <div className='-mt-32'>
            <Link to='/' className='relative font-semibold text-xs leading-tight text-center min-w-4 pt-4 px-[30px] pb-[11px] text-white bg-black'>
              Character
            </Link>
          </div>
        </div>
        <div className='absolute w-full h-full start-0 end-0 pointer-events-none top-0 bottom-0'>
          <div className='absolute w-[735px] h-[735px] top-[--dotspinsize] left-[--dotspinsize] bigdotspin1 -z-[1]'></div>
          <div className='absolute w-[735px] h-[735px] top-[--dotspinsize] left-[--dotspinsize] bigdotspin2 -z-[1]'></div>
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