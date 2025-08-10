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

  useEffect(() => {
    const index = sections.findIndex((s) => s.path === location.pathname);
    if (index === -1) return;

    if (prevSection.current === 1 && index !== 1) {
      setModelAnimation(null);
    }

    const prev = prevSection.current;
    if (index === 2) {
      if (prev < 2) setDivPosition("bottom");
      else if (prev > 2) setDivPosition("middle");
    }
    prevSection.current = index;

    if (index === 3) {
      setDisableSlideTransition(true);
      if (prev < 3) setSection4SlideIndex(0);
      else if (prev > 3) setSection4SlideIndex(totalSlidesInSection4 - 1);
      setTimeout(() => setDisableSlideTransition(false), 50);
    } else {
      setDisableSlideTransition(true);
      setSection4SlideIndex(0);
      setTimeout(() => setDisableSlideTransition(false), 50);
    }

    setCurrentSection(index);
  }, [location.pathname, setModelAnimation]);

  useEffect(() => {
    const ref = sectionRefs.current[currentSection];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      navigate(sections[currentSection].path, { replace: true });
    }
  }, [currentSection, navigate]);

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
      if (currentSection === 2) {
        if (isDown) {
          if (divPosition === "below") setDivPosition("bottom");
          else if (divPosition === "bottom") setDivPosition("middle");
          else if (divPosition === "middle") {
            setDivPosition("above");
            setTimeout(() => setCurrentSection(3), 50);
          }
        } else {
          if (divPosition === "above") setDivPosition("middle");
          else if (divPosition === "middle") setDivPosition("bottom");
          else if (divPosition === "bottom") {
            setDivPosition("below");
            setTimeout(() => setCurrentSection(1), 50);
          }
        }
        isScrolling.current = false;
        return;
      }

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
              setTimeout(() => setCurrentSection(2), 50);
            }, 50);
          }
        }
        isScrolling.current = false;
        return;
      }

      setCurrentSection((prev) => {
        const next = isDown
          ? Math.min(prev + 1, sections.length - 1)
          : Math.max(prev - 1, 0);
        return next;
      });
      isScrolling.current = false;
    }, 100);
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
          ) : index === 3 ? (
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
            This is my portfolio thank you for visiting my site thank you. This
            is my portfolio thank you for visiting my site thank you. This is my
            portfolio thank you for visiting my site thank you for visiting my
            site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollSections;