import React from 'react'
import eximg from '../assets/img/characters.png'

const Section4 = () => {
  const pofolText = [
    { img: eximg, num: '01' },
    { img: eximg, num: '02' },
    { img: eximg, num: '03' },
    { img: eximg, num: '04' },
  ];
  return (
    <section className='w-full h-dvh flex pt-[100px] px-0 pb-[75px] top-0 bottom-0 relative'>
      <div className="w-full h-full flex flex-col gap-[60px] flex-wrap content-between pt-[169px] pl-10 pr-[--scrollnav-overlap] absolute top-0 bottom-0 pb-[75px]">
        {pofolText.map((pofol, i) => (
          <div key={pofol.num}>
            <div className="mt-0 max-w-60">
              <span className='overflow-hidden inline-block w-[81px] h-[81px] relative'>
                <img src={pofol.img} className='m-auto object-contain w-full h-full' />
              </span>
            </div>
            <h6 className='font-bold text-base leading-tight mt-[18px] mx-0 mb-[13px]'>{`${pofol.num}. Portfolio`}</h6>
            <p className='m-0 max-w-60 gap-8 flex flex-col items-start font-medium text-[11px] leading-[18px] tracking-wide text-[#111] min-h-[50px]'>this is my portfolio thank you for visiting my site thank you.this is my portfolio thank you</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section4