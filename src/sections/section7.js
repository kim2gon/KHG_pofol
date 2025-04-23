import React, { useState } from 'react'

const Section7 = () => {
  const items = [ 'HTML', 'CSS', 'JavaScript', 'JQuery', 'React', 'Illustrator', 'PhotoShop', 'Gsap', 'ThreeJS' ]

  const [selected, setSelected] = useState(null);
  
  function clickhandler(v){
    setSelected(v);
    console.log(v);
  }

  return (
    < section className='w-full h-dvh flex flex-col pt-[100px] pl-10 pb-[75px] !left-0 top-0 bottom-0 start-[--h-padding] end-[--h-padding] relative' >
      <h3 className='font-bold text-base leading-tight mt-[10vh] mx-0 mb-[21px] text-[#111]'>tools</h3>
      <p className='m-0 max-w-60 font-medium text-[11px] leading-[18px] tracking-wide whitespace-pre-line'>{`This is my portfolio and this page is introduce my skills thank you for visiting my site thank you.

        this is my portfolio thank you for visiting mysite thank you. This is my portfolio and this page is introduce my skills thank you for visiting my site thank you.`}</p>
      <div className='max-w-[324px] absolute top-[35vh] left-[324px] flex flex-wrap pl-10'>
        {items.map((v, i) => (
          <button onClick={() => clickhandler(v)} key={v} className='boxtext'>{v}</button>
        ))}
      </div>
      <div className='absolute max-w-[275px] top-[40vh] left-[648px] w-full h-[230px]'>
        <div className='boxtext2'>
          <h4 className='boxtext3'>HTML</h4>
          <h6 className='boxtext4'>this is</h6>
          <div className='boxtext5'>html</div>
          <p className='boxtext6'>thank you</p>
        </div>
      </div>
    </section>
  )
}

export default Section7