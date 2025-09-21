import React from "react";
import { useRecoilValue } from "recoil";
import { headerColorState } from "../store";
import { Link } from "react-router-dom";

const Header = () => {
  const headerColor = useRecoilValue(headerColorState);

  return (
    <nav
      className="fixed top-0 left-0 right-0 lg:max-w-[1300px] mx-4 xl:mx-auto flex items-center justify-between p-[8px] h-[100px] z-20"
      style={{ background: headerColor }}
    >
      <Link to="/home" className="text-[30px] text-black text-left cursor-pointer">
        HEEGON
      </Link>
      <Link
        to="/contact"
        className="pt-4 pb-[10px] px-7 text-white bg-black relative min-w-[16px] text-center text-sm leading-tight font-semibold"
      >
        CONTACT
      </Link>
    </nav>
  );
};

export default Header;
