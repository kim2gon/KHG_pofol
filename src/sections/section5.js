import React from 'react'
import eximg1 from '../assets/img/capsuleblue2.png'
import eximg2 from '../assets/img/capsulebrown2.png'
import eximg3 from '../assets/img/capsulegreen2.png'
import eximg4 from '../assets/img/capsulepink2.png'
import eximg5 from '../assets/img/capsulered2.png'

const Section5 = () => {
  // const pofolimg = [eximg1, eximg2, eximg3, eximg4, eximg5];
  return (
    < section className='w-full h-dvh flex pt-[100px] pl-10 pb-[75px] top-0 bottom-0 start-[--h-padding] end-[--h-padding] absolute' >
      <p className='mt-[15vh] m-0 max-w-60 font-medium text-[11px] leading-[18px] tracking-wide text-[#111]'>this is my portfolio thank you for visiting my site thank you.
        <a href='/' className='block max-w-max min-w-40 mt-8 cursor-pointer font-semibold text-xs leading-tight text-center realative text-white pt-4 px-[30px] pb-[11px] bg-black'>click my profile</a>
      </p>
      {/* <div className='absolute top-0 bottom-[-75px] left-[324px] w-[324px] overflow-hidden'>
        <div className='w-full h-full fixed'>
          <div className='top-full flex-col absolute flex slide-up ani-delay'>
            <div className='w-full'>
              {pofolimg.map((v, i) => (
                <img key={v} src={v} className='block mt-[91px] object-cover w-full h-[404px]' />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='absolute top-0 bottom-[-300px] left-[739px] w-[324px] overflow-hidden'>
      <div className='w-full h-full fixed'>
          <div className='top-full flex-col absolute flex slide-down ani-delay'>
            <div className='w-full'>
              {pofolimg.map((v, i) => (
                <img key={v} src={v} className='block mt-[91px] object-cover w-full h-[404px]' />
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </section >
  )
}

export default Section5