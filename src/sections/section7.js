import React, { useState } from 'react';

const Section7 = () => {
  const items = [
    { i1: '자동차 운전면허 1종', i2: '2020.09.29 취득' },
    { i1: '육군병장 만기전역', i2: '2024.02.01 전역' },
    { i1: '삼육보건대학교', i2: '2025.02.12 졸업' },
    { i1: '의료정보과', i2: '2025.02.12 졸업' },
    { i1: '웹디자인개발기능사', i2: '2025.09.26 취득' },
  ];

  const [selected, setSelected] = useState(null);

  function clickHandler(item) {
    setSelected(item);
    console.log(item.i1);
  }

  return (
    <section className='w-full h-dvh flex flex-col pt-[100px] pl-10 pb-[75px] relative'>
      <h3 className='font-bold text-base leading-tight mt-[10vh] mx-0 mb-[21px] text-[#111]'>tools</h3>
      <p className='m-0 max-w-60 font-medium text-[11px] leading-[18px] tracking-wide whitespace-pre-line'>
        {`This is my portfolio and this page is introduce my skills thank you for visiting my site thank you.

        this is my portfolio thank you for visiting mysite thank you. This is my portfolio and this page is introduce my skills thank you for visiting my site thank you.`}
      </p>

      <div className='max-w-96 absolute top-[35vh] left-[300px] flex flex-wrap pl-10'>
        {items.map((item, index) => (
          <button onClick={() => clickHandler(item)} key={index} className='boxtext' style={{backgroundColor : item.i1 ? 'bg-black' : 'bg-none'}}>
            {item.i1}
          </button>
        ))}
      </div>

      {selected && (
        <div className='absolute max-w-[275px] top-[40vh] left-[648px] w-full h-[230px]'>
          <div className='boxtext2'>
            <h4 className='boxtext3'>{selected.i1}</h4>
            <p className='boxtext4'>{selected.i2}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Section7;
