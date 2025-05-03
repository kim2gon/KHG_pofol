import React from 'react'
import { Link } from 'react-router-dom'

const Section8 = () => {
  return (
    <>
      <section className='relative w-full h-dvh bottom-0 !left-0 start-[--h-padding] end-[--h-padding] pt-[100px] px-0 pb-[75px] flex justify-center items-center z-20' >
        <p className='m-0 max-w-[200px] absolute right-[100px] top-[180px] font-medium text-[11px] leading-[18px] tracking-wide text-[#111]'>
          This is my portfolio and this page is introduce my skills thank you for visiting my site thank you.</p>
        <div className='flex text-[80px] max-h-max justify-center'>
          <div className='-mt-32'>
            <Link href='/' className='relative font-semibold text-xs leading-tight text-center min-w-4 pt-4 px-[30px] pb-[11px] text-white bg-black'>
              Character
            </Link>
          </div>
        </div>
        <div className='absolute w-full h-full start-0 end-0 pointer-events-none top-0 bottom-0'>
            <div className='absolute w-[735px] h-[735px] top-[--dotspinsize] left-[--dotspinsize] bigdotspin1 -z-[1]'></div>
            <div className='absolute w-[735px] h-[735px] top-[--dotspinsize] left-[--dotspinsize] bigdotspin2 -z-[1]'></div>
        </div>
      </section>
    </>
  )
}

export default Section8