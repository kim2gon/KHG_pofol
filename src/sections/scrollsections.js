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
  { component: Section4, path: "/pofol" },
  { component: Section5, path: "/animations" },
  { component: Section6, path: "/skills" },
  { component: Section7, path: "/tools" },
  { component: Section8, path: "/myself" },
];

const ScrollSections = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentSection, setCurrentSection] = useState(0);
  const [divPosition, setDivPosition] = useState("below");
  const isScrolling = useRef(false);
  const hasScrolledInSection2 = useRef(false);

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
      ref.current.style.position = "static";
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

  const handleClick = () => {
    setCurrentSection(0);
  }

  return (
    <div onWheel={handleWheel}>
      {sections.map(({ component: Component }, index) => (
        <div key={index} ref={sectionRefs.current[index]} style={{ height: "100vh" }}>
          {index === 7 ? (
            <Component 
              onSectionWheel={handleWheel}
              currentSection={currentSection}
            />
          ) : (
            <Component />
          )}
        </div>
      ))}
      <div
        className={`w-screen fixed left-0 right-0 pt-[53px] pr-[232px] pb-[50px] pl-[159px] bg-black text-white z-[51] transition-all duration-500 ${getDivStyle1()}`}
      >
        <div className="font-medium text-[34px] leading-tight tracking-wide max-w-[1250px]">
          <p>
            This is my portfolio thank you for visiting my site thank you.this is my portfolio thank you for visiting my
            site thank you. this is my portfolio thank you for visiting my site thank you for visiting my site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollSections;
