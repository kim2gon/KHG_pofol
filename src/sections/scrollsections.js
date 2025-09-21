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
  { component: Section2, path: "/character" },
  { component: Section3, path: "/intro" },
  { component: Section4, path: "/pofol" },
  { component: Section5, path: "/animations" },
  { component: Section6, path: "/skills" },
  { component: Section7, path: "/carrer" },
  { component: Section8, path: "/contact" },
];

const ScrollSections = ({ setModelColor, setModelAnimation }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const totalSlidesInSection4 = section4Slides.length;

  const [currentSection, setCurrentSection] = useState(0);
  const [divPosition, setDivPosition] = useState("below");
  const [loadingScrollTriggered, setLoadingScrollTriggered] = useState(false);
  const [section4SlideIndex, setSection4SlideIndex] = useState(0);
  const [disableSlideTransition, setDisableSlideTransition] = useState(false);

  const isScrolling = useRef(false);
  const prevSection = useRef(0);
  const sectionRefs = useRef(sections.map(() => React.createRef()));

  // 경로 변경 시 currentSection 업데이트 및 divPosition, Section4 초기화
  useEffect(() => {
    const index = sections.findIndex((s) => s.path === location.pathname);
    if (index === -1) return;

    if (prevSection.current === 1 && index !== 1) {
      setModelAnimation(null);
    }

    // Section3 divPosition 초기화
    if (index === 2) {
      if (prevSection.current < 2) setDivPosition("bottom"); // 아래에서 올라올 때
      else if (prevSection.current > 2) setDivPosition("middle"); // 위에서 내려올 때
    } else {
      if (index < 2) setDivPosition("below");
      else if (index > 2) setDivPosition("above");
    }

    // Section4 진입 시 슬라이드 초기화
    if (index === 3) {
      setDisableSlideTransition(true);
      if (prevSection.current < 3) setSection4SlideIndex(0); // 이전 섹션에서 아래로 들어오면 첫 슬라이드
      else if (prevSection.current > 3) setSection4SlideIndex(totalSlidesInSection4 - 1); // 이후 섹션에서 위로 들어오면 마지막 슬라이드
      setTimeout(() => setDisableSlideTransition(false), 50);
    } else {
      setDisableSlideTransition(true);
      setSection4SlideIndex(0);
      setTimeout(() => setDisableSlideTransition(false), 50);
    }

    prevSection.current = index;
    setCurrentSection(index);
  }, [location.pathname, setModelAnimation]);

  // currentSection 변경 시 scrollIntoView
  useEffect(() => {
    const ref = sectionRefs.current[currentSection];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      navigate(sections[currentSection].path, { replace: true });
    }
  }, [currentSection, navigate]);

  // Wheel 이벤트
  const handleWheel = (e) => {
    e.preventDefault();

    if (!loadingScrollTriggered) {
      setLoadingScrollTriggered(true);
      return;
    }

    if (isScrolling.current) return;
    isScrolling.current = true;

    const isDown = e.deltaY > 0;

    setTimeout(() => {
      // Section3 스크롤 처리
      if (currentSection === 2) {
        if (isDown) {
          if (divPosition === "below") setDivPosition("bottom");
          else if (divPosition === "bottom") setDivPosition("middle");
          else if (divPosition === "middle") {
            setDivPosition("above");
            setCurrentSection(3);
          }
        } else {
          if (divPosition === "above") setDivPosition("middle");
          else if (divPosition === "middle") setDivPosition("bottom");
          else if (divPosition === "bottom") {
            setDivPosition("below");
            setCurrentSection(1);
          }
        }
        isScrolling.current = false;
        return;
      }

      // Section4 슬라이드 처리
      if (currentSection === 3) {
        if (isDown) {
          if (section4SlideIndex < totalSlidesInSection4 - 1) {
            setSection4SlideIndex((prev) => prev + 1);
          } else {
            setCurrentSection(4);
          }
        } else {
          if (section4SlideIndex > 0) {
            setSection4SlideIndex((prev) => prev - 1);
          } else {
            setDivPosition("above");
            setTimeout(() => {
              setDivPosition("middle");
              setCurrentSection(2);
            }, 50);
          }
        }
        isScrolling.current = false;
        return;
      }

      // 나머지 섹션
      setCurrentSection((prev) => {
        const next = isDown
          ? Math.min(prev + 1, sections.length - 1)
          : Math.max(prev - 1, 0);
        return next;
      });

      isScrolling.current = false;
    }, 100);
  };

  return (
    <div onWheel={handleWheel}>
      <Loading onWheel={handleWheel} triggerScroll={loadingScrollTriggered} />
      {sections.map(({ component: Component }, index) => (
        <div
          key={index}
          ref={sectionRefs.current[index]}
          style={{ height: "100vh" }}
        >
          {index === 1 ? (
            <Component
              setModelColor={setModelColor}
              setModelAnimation={setModelAnimation}
            />
          ) : index === 2 ? (
            <Component
              divPosition={divPosition}
            />
          ) : index === 3 ? (
            <Component
              currentIndex={section4SlideIndex}
              disableTransition={disableSlideTransition}
            />
          ) : index === 7 ? (
            <Component
              onSectionWheel={handleWheel}
              currentSection={currentSection}
            />
          ) : (
            <Component />
          )}
        </div>
      ))}
    </div>
  );
};

export default ScrollSections;