import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4, { slides as section4Slides } from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import Section7 from "./section7";
import Section8 from "./section8";
import Loading from "../components/loading";

const sections = [
  { component: Section1, path: "/home" },
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

  const totalSlidesInSection4 = section4Slides.length;

  const [currentSection, setCurrentSection] = useState(0);
  const [divPosition, setDivPosition] = useState("below");
  const [loadingScrollTriggered, setLoadingScrollTriggered] = useState(false);
  const [section4SlideIndex, setSection4SlideIndex] = useState(0);
  const [disableSlideTransition, setDisableSlideTransition] = useState(false);

  const isScrolling = useRef(false);
  const hasScrolledInSection2 = useRef(false);
  const prevSection = useRef(0);
  const section4Visited = useRef(false);
  const sectionRefs = useRef(sections.map(() => React.createRef()));

  // URL 경로 변경 감지 및 슬라이드 index 제어
  useEffect(() => {
    const index = sections.findIndex((s) => s.path === location.pathname);
    if (index === -1) return;

    if (index === 3) {
      if (prevSection.current < 3) {
        setDisableSlideTransition(true);
        setSection4SlideIndex(0);
        setTimeout(() => setDisableSlideTransition(false), 50);
      } else if (prevSection.current > 3) {
        setDisableSlideTransition(true);
        setSection4SlideIndex(totalSlidesInSection4 - 1);
        setTimeout(() => setDisableSlideTransition(false), 50);
      }
    } else {
      setDisableSlideTransition(true);
      setSection4SlideIndex(0);
      setTimeout(() => setDisableSlideTransition(false), 50);
    }

    setCurrentSection(index);
    prevSection.current = index;
  }, [location.pathname, totalSlidesInSection4]);

  // currentSection 변경 시 스크롤 이동
  useEffect(() => {
    const ref = sectionRefs.current[currentSection];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      navigate(sections[currentSection].path, { replace: true });

      if (currentSection === 3) {
        section4Visited.current = true;
      }
    }
  }, [currentSection, navigate]);

  // 스크롤 이벤트 핸들링
  const handleWheel = (e) => {
    if (!loadingScrollTriggered) {
      e.preventDefault();
      setLoadingScrollTriggered(true);
      return;
    }

    if (isScrolling.current) return;
    isScrolling.current = true;

    setTimeout(() => {
      if (e.deltaY > 0) {
        // 아래로 스크롤
        if (currentSection === 3) {
          if (section4SlideIndex < totalSlidesInSection4 - 1) {
            setSection4SlideIndex((prev) => prev + 1);
          } else {
            setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
          }
        } else if (currentSection === 1 && !hasScrolledInSection2.current) {
          setDivPosition("bottom");
          hasScrolledInSection2.current = true;
        } else if (currentSection === 1 && hasScrolledInSection2.current) {
          setCurrentSection(2);
          setDivPosition("middle");
        } else if (currentSection === 2) {
          setCurrentSection(3);
          setDivPosition("above");
        } else if (currentSection < sections.length - 1) {
          setCurrentSection((prev) => prev + 1);
        }
      } else if (e.deltaY < 0) {
        // 위로 스크롤
        if (currentSection === 3) {
          if (section4SlideIndex > 0) {
            setSection4SlideIndex((prev) => prev - 1);
          } else {
            setCurrentSection((prev) => Math.max(prev - 1, 0));
          }
        } else if (currentSection === 3 && divPosition === "above") {
          setCurrentSection(2);
          setDivPosition("middle");
        } else if (currentSection === 2 && divPosition === "middle") {
          setCurrentSection(1);
          setDivPosition("bottom");
        } else if (currentSection === 1 && divPosition === "bottom") {
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

  return (
    <div onWheel={handleWheel}>
      <Loading onWheel={handleWheel} triggerScroll={loadingScrollTriggered} />

      {sections.map(({ component: Component }, index) => (
        <div key={index} ref={sectionRefs.current[index]} style={{ height: "100vh" }}>
          {index === 3 ? (
            <Component
              currentIndex={section4SlideIndex}
              disableTransition={disableSlideTransition}
            />
          ) : index === 7 ? (
            <Component onSectionWheel={handleWheel} currentSection={currentSection} />
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
            This is my portfolio thank you for visiting my site thank you. This is my portfolio thank you for visiting my
            site thank you. This is my portfolio thank you for visiting my site thank you for visiting my site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollSections;
