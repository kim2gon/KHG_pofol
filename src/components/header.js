import React from "react";
import { useRecoilValue } from "recoil";
import { headerColorState } from "../store";
import { Link } from "react-router-dom";

const Header = () => {
  const headerColor = useRecoilValue(headerColorState);

  return (
    // <nav className='flex items-center justify-between gap-9 top-0 w-[1300px] max-w-[100vw] max-h-[100px] py-[29px] px-2 fixed z-30'>
    <nav
      className="fixed top-0 left-0 right-0 max-w-[1300px] mx-auto flex items-center justify-between p-[8px] h-[100px] z-20"
      style={{ background: headerColor }}
    >
      <Link href="/home" className="text-[30px] text-black text-left">
        HEADER
      </Link>
      <div className="text-[30px] bg-yellow-300 text-black">SNS IMG</div>
      <Link
        href="/home"
        className="pt-4 pb-[10px] px-7 text-white bg-black relative min-w-[16px] text-center text-sm leading-tight font-semibold"
      >
        KHG PortFolio
      </Link>
    </nav>
  );
};

export default Header;
