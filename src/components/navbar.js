import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const sectionText = [
    { path: "/", label: "HOME", v: "01" },
    { path: "/about", label: "ABOUT", v: "02" },
    { path: "/awards", label: "AWARDS", v: "03" },
    { path: "/pofol", label: "POFOL", v: "04" },
    { path: "/animations", label: "ANIMATIONS", v: "05" },
    { path: "/skills", label: "SKILLS", v: "06" },
    { path: "/tools", label: "TOOLS", v: "07" },
    { path: "/myself", label: "MYSELF", v: "08" },
  ];

  return (
    <div
      className={'fixed right-[4.7vw] bottom-[50px] flex flex-col z-[100] mix-blend-difference'}
    >
      {sectionText.map((section, i) => (
        <Link
          key={section.path}
          to={section.path}
          className="mb-5 flex justify-between items-center gap-[53px]"
        >
          <span className="font-medium text-[10px] leading-normal text-right self-end text-white">
            {section.label}
          </span>
          <span className="font-medium text-xs leading-tight text-center text-white">
            {section.v}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
