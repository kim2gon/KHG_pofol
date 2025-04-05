import React from 'react'

const Navbar = () => {
  const sectionText = [
    '01', '02', '03', '04', '05', '06'
  ]

  return (
    <div className='fixed right-[4.7vw] bottom-[50px] flex flex-col z-10 mix-blend-difference text-[#111]'>{
      sectionText.map((v, i) => (
        <a href='#header.js' className='mb-5 flex items-center gap-[53px]'>
          <span className='font-medium text-[10px] leading-normal text-right self-end'>section</span>
          <span className='font-medium text-xs leading-tight text-center'>{v}</span>
        </a>
      ))
    }
    </div>
  )
}

export default Navbar