import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import Section7 from "./section7";
import Section8 from "./section8";

const sections = [
  { component: Section1, path: "/" },
  { component: Section2, path: "/about" },
  { component: Section3, path: "/awards" },
  { component: Section4, path: "/animation" },
  { component: Section5, path: "/pofol" },
  { component: Section6, path: "/skills" },
  { component: Section7, path: "/tools" },
  { component: Section8, path: "/myself" },
];

const ScrollSections = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentSection, setCurrentSection] = useState(0);
  const [divPosition, setDivPosition] = useState("below");
  const [divPosition2, setDivPosition2] = useState("below2");
  const isScrolling = useRef(false);
  const hasScrolledInSection2 = useRef(false);
  const hasScrolledInSection8 = useRef(false);

  const sectionRefs = useRef(sections.map(() => React.createRef()));

  // URL 변경 → 섹션 이동
  useEffect(() => {
    const index = sections.findIndex((s) => s.path === location.pathname);
    if (index !== -1) {
      setCurrentSection(index);
    }
  }, [location.pathname]);

  // 섹션 변경 → 스크롤 + URL 동기화
  useEffect(() => {
    const ref = sectionRefs.current[currentSection];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      navigate(sections[currentSection].path, { replace: true });
    }
    if (ref?.current === 5) {
      ref.current.style.position = 'static';
    }
  }, [currentSection]);

  // 휠 스크롤 이벤트
  const handleWheel = (e) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    setTimeout(() => {
      if (e.deltaY > 0) {
        if (currentSection === 1 && !hasScrolledInSection2.current) {
          // Section2에서 첫 스크롤
          setDivPosition("bottom");
          hasScrolledInSection2.current = true;
        } else if (currentSection === 1 && hasScrolledInSection2.current) {
          // Section2에서 두 번째 스크롤
          setCurrentSection(2);
          setDivPosition("middle");
        } else if (currentSection === 2) {
          // Section3에서 스크롤
          setCurrentSection(3);
          setDivPosition("above");
        } else if (currentSection < sections.length - 1) {
          setCurrentSection((prev) => prev + 1);
        }
      } else if (e.deltaY < 0) {
        if (currentSection === 3 && divPosition === "above") {
          // Section4에서 위로 스크롤
          setCurrentSection(2);
          setDivPosition("middle");
        } else if (currentSection === 2 && divPosition === "middle") {
          // Section3에서 위로 스크롤
          setCurrentSection(1);
          setDivPosition("bottom");
        } else if (currentSection === 1 && divPosition === "bottom") {
          // Section2에서 위로 스크롤
          setDivPosition("below");
          hasScrolledInSection2.current = false;
        } else if (currentSection > 0) {
          setCurrentSection((prev) => prev - 1);
        }
      }
      isScrolling.current = false;
    }, 200);
  };

  const handleWheel2 = (e) => {
    if (isScrolling.current) return;
    isScrolling.current = true;
    setTimeout(() => {
      if (e.deltaY > 0) {
        if (currentSection === 7 && !hasScrolledInSection8.current) {
          // Section8에서 첫 스크롤
          setDivPosition2("bottom");
          hasScrolledInSection8.current = true;
        }
      } else if (e.deltaY < 0) {
        if (currentSection === 7 && divPosition2 === "bottom") {
          // Section8에서 위로 스크롤
          setCurrentSection(8);
          setDivPosition2("below2");
        }
      }
      isScrolling.current = false;
    }, 200);
  };

  const getDivStyle1 = () => {
    switch (divPosition) {
      case "below":
        return "bottom-[-100vh]";
      case "bottom":
        return "bottom-0";
      case "middle":
        return "bottom-[64vh]";
      case "above":
        return "bottom-[100vh]";
      default:
        return "bottom-[-100vh]";
    }
  };

  const getDivStyle2 = () => {
    switch (divPosition2) {
      case "below2":
        return "bottom-[-100vh]";
      case "bottom":
        return "bottom-0";
      default:
        return "bottom-[-100vh]";
    }
  };

  return (
    <div onWheel={handleWheel}>
      {sections.map(({ component: Component }, index) => (
        <div key={index} ref={sectionRefs.current[index]} style={{ height: "100vh" }}>
          <Component />
        </div>
      ))}
      <div
        className={`w-screen fixed left-0 right-0 pt-[53px] pr-[232px] pb-[50px] pl-[159px] bg-black text-white z-50 transition-all duration-500 ${getDivStyle1()}`}
      >
        <div className="font-medium text-[34px] leading-tight tracking-wide max-w-[1250px]">
          <p>
            This is my portfolio thank you for visiting my site thank you.this is my portfolio thank you for visiting my
            site thank you. this is my portfolio thank you for visiting my site thank you for visiting my site.
          </p>
        </div>
      </div>
      <div onWheel={handleWheel2} className={`fixed w-screen left-0 right-0 bottom-0 bg-black text-white pt-[88px] px-[--footerpd] pb-4 flex flex-col items-center text-center z-50 transition-all duration-500 ${getDivStyle2()}`}>
        <p className="text-[30px]">KHG PORTFOLIO</p>
        <p className="mt-16 mx-0 mb-[50px] max-w-[200px] text-base leading-tight whitespace-pre-line"></p>
        <div className="relative w-[165px] h-[143px]">
          <img className="w-full h-full !rounded-full pointer-events-none footerani1"></img>
          <div className="absolute w-full h-full pt-[100%] top-0 left-0 footerani2"></div>
        </div>
        <button className="flex flex-col gap-4 mt-[50px] mx-0 mb-10 text-inherit justify-items-center items-center">
          <svg className="w-[10px] h-[28px] fill-none scale-[-1]">
            <path d="M9.924.924 5 7.314.076.924h9.848ZM9.308 12.308 5 17.9.692 12.31h8.616ZM8.693 22.693 5 27.485l-3.693-4.792h7.386Z" fill="currentColor"></path>
          </svg>
          <span className="text-sm">Page top</span>
        </button>
        <div className="flex flex-wrap-reverse gap-y-4 gap-x-5 text-left w-full">
          <span className="font-normal text-[10px] leading-tight mr-auto tracking-wide"></span>
          <a className="font-medium text-[10px] leading-tight tracking-wide"></a>
          <a className="font-medium text-[10px] leading-tight tracking-wide"></a>
        </div>
      </div>
    </div>
  );
};

export default ScrollSections;
