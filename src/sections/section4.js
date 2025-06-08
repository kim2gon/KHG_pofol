import React from 'react'
import { Link } from 'react-router-dom'
import krafton from "../assets/img/egg1.png";
import nespresso from "../assets/img/egg2.png";

const Section4 = () => {
  return (
    <section className="w-full h-dvh flex !left-0 top-0 bottom-0 start-[--h-padding] end-[--h-padding] relative overflow-hidden">
      <div className='absolute float-none overflow-visible w-1/2 right-1/2 p-0 items-center h-screen'>
        <h3 className="font-bold text-base leading-tight mt-[40vh] mx-24 mb-[21px] text-[#111]">KRAFTON</h3>
        <p className="mx-24 max-w-60 font-medium text-[11px] leading-[18px] tracking-wide">
          This is Krafton. My first site
        </p>
      </div>
      <div className='flex sticky float-none overflow-visible top-0 w-1/2 left-1/2 p-0 items-center h-screen'>
        <div className='flex relative w-[31vw] h-[31vw] overflow-hidden z-[100]'>
          <Link href="/">
            <img
              className='absolute flex w-full h-full top-[-1px] left-[-1px] right-[-1px] bottom-[-1px] cursor-none object-cover z-[3]'
              src={krafton}
            />
          </Link>
        </div>
      </div>
      <div className='absolute float-none overflow-visible w-1/2 right-1/2 p-0 items-center h-screen'>
        <h3 className="font-bold text-base leading-tight mt-[40vh] mx-24 mb-[21px] text-[#111]">NESPRESSO</h3>
        <p className="mx-24 max-w-60 font-medium text-[11px] leading-[18px] tracking-wide">
          This is Nespresso. My second site
        </p>
      </div>
      <div className='flex sticky float-none overflow-visible top-0 w-1/2 left-1/2 p-0 items-center h-screen'>
        <div className='flex relative w-[31vw] h-[31vw] overflow-hidden z-[100]'>
          <Link href="/">
            <img
              className='absolute flex w-full h-full top-[-1px] left-[-1px] right-[-1px] bottom-[-1px] cursor-none object-cover z-[2]'
              src={nespresso}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Section4