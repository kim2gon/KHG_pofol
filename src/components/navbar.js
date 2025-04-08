import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const sectionText = [
    { path: '/', label: 'HOME', v: '01' },
    { path: '/about', label: 'ABOUT', v: '02' },
    { path: '/awards', label: 'AWARDS', v: '03' },
    { path: '/animation', label: 'ANIMATION', v: '04' },
    { path: '/pofol', label: 'POFOL', v: '05' },
    { path: '/skills', label: 'SKILLS', v: '06' },
  ];

  return (
    <div className='fixed right-[4.7vw] bottom-[50px] flex flex-col z-10 mix-blend-difference text-[#111]'>
      {sectionText.map((section) => (
        <Link key={section.path} to={section.path} className='mb-5 flex items-center gap-[53px]'>
          <span className='font-medium text-[10px] leading-normal text-right self-end'>{section.label}</span>
          <span className='font-medium text-xs leading-tight text-center'>{section.v}</span>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
