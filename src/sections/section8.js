import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const icons = [
  {
    name: "GITHUB",
    bg: "black",
    url: "https://github.com/kim2gon",
    position: "top-1/2 right-1/4",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 98" className="size-10 group-hover:opacity-100 opacity-55 duration-300 transition-opacity">
        <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "010-7697-5713",
    position: "top-3/4 right-1/2",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#5254e2" className="size-10 group-hover:opacity-100 opacity-55 duration-300 transition-opacity">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    name: "RESUME",
    bg: "black",
    position: "bottom-1/2 left-1/4",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" className="size-10 group-hover:opacity-100 opacity-55 duration-300 transition-opacity">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    name: "heegonkim2001@gmail.com",
    position: "bottom-3/4 left-1/2",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#5254e2" className="size-10 group-hover:opacity-100 opacity-55 duration-300 transition-opacity">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

const Section8 = ({ onSectionWheel }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [divPosition2, setDivPosition2] = useState("below");
  const [footerStage, setFooterStage] = useState(0);
  const sectionRef = useRef(null);
  const [centerText, setCenterText] = useState("KIM2GON");
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });

  const touchStartY = useRef(0);
  const touchHandled = useRef(false);

  const handleIconClick = (name, url) => {
    setCenterText(prev => (prev === name ? "KIM2GON" : name));
    if (url) window.open(url, "_blank");
  };

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const handleWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const deltaY = e.deltaY;

      if (deltaY > 0) {
        if (footerStage === 0) {
          setDivPosition2("bottom");
          setFooterStage(1);
        }
      } else {
        if (footerStage === 1) {
          setDivPosition2("below");
          setFooterStage(0);
        } else if (footerStage === 0) {
          if (onSectionWheel) onSectionWheel("up");
        }
      }
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
      touchHandled.current = false;
    };

    const handleTouchEnd = (e) => {
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;

      if (touchHandled.current) return;

      if (deltaY > 20) {
        if (footerStage === 0) {
          setDivPosition2("bottom");
          setFooterStage(1);
        }
      } else if (deltaY < -20) {
        if (footerStage === 1) {
          setDivPosition2("below");
          setFooterStage(0);
        } else if (footerStage === 0) {
          if (onSectionWheel) onSectionWheel("up");
        }
      }

      touchHandled.current = true;
    };

    element.addEventListener("wheel", handleWheel, { passive: false });
    element.addEventListener("touchstart", handleTouchStart, { passive: true });
    element.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      element.removeEventListener("wheel", handleWheel);
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchend", handleTouchEnd);
    };
  }, [footerStage, onSectionWheel]);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrame;
    const followMouse = () => {
      setCirclePos(prev => ({
        x: prev.x + (mousePos.x - prev.x) * 0.05,
        y: prev.y + (mousePos.y - prev.y) * 0.05,
      }));
      animationFrame = requestAnimationFrame(followMouse);
    };
    followMouse();
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePos]);

  const getDivStyle2 = () => ({
    transform: divPosition2 === "bottom" ? "translateY(0)" : "translateY(100vh)",
    transition: "transform 0.5s ease",
  });

  const isCurrentRoute = location.pathname === "/contact";

  useEffect(() => {
    if (!isCurrentRoute) {
      setDivPosition2("below");
      setFooterStage(0);
      touchHandled.current = false;
    }
  }, [location.pathname]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-dvh bottom-0 left-0 pt-[100px] px-0 pb-[75px] flex flex-col justify-between items-center overflow-hidden"
    >
      {hovered && (
        <div
          className="fixed rounded-full pointer-events-none hidden lg:flex items-center justify-center text-xl font-semibold mix-blend-difference"
          style={{
            width: 40,
            height: 40,
            background: "rgba(255,255,255,1)",
            left: mousePos.x - 20,
            top: mousePos.y - 20,
            zIndex: 9999,
          }}
        ></div>
      )}

      <div className="relative w-full h-full flex justify-center items-center">
        <p className="absolute right-[100px] top-[180px] text-[#111] text-sm leading-[18px]">
          연락처 및 상세 정보들 입니다. 각 아이콘을 클릭하면 확인가능합니다.
        </p>

        <div className="flex text-[80px] justify-center">
          <div className="relative font-semibold text-2xl leading-tight text-center min-w-4 pt-4 px-[30px] pb-[11px] text-white bg-black z-[9999]">
            {centerText}
          </div>
        </div>

        <div
          className="absolute w-full h-full top-0 left-0"
          style={{ animation: "60s linear infinite none running spin" }}
        >
          {icons.map(({ name, bg, url, position, svg }) => (
            <div
              key={name}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => handleIconClick(name, url)}
              className={`absolute size-[120px] rounded-full ${position} cursor-pointer flex items-center justify-center z-50 group ${bg === "black" ? "bigdotspin4 bg-black" : "bigdotspin3"}`}
            >
              {svg}
            </div>
          ))}
        </div>
      </div>

      {isCurrentRoute && (
        <div
          style={getDivStyle2()}
          className="fixed w-screen left-0 bottom-0 pt-32 lg:pt-24 px-[--footerpd] pb-10 flex flex-col items-center text-center bg-black text-white z-50"
        >
          <p className="text-[30px] leading-none mb-2">KIM HEEGON</p>
          <p className="text-lg leading-none">2001.01.22</p>
          <button
            onClick={() => {
              navigate("/home");
            }}
            className="flex flex-col gap-4 mt-[50px] items-center"
          >
            <svg className="w-[10px] h-[28px] fill-none scale-[-1]">
              <path
                d="M9.924.924 5 7.314.076.924h9.848ZM9.308 12.308 5 17.9.692 12.31h8.616ZM8.693 22.693 5 27.485l-3.693-4.792h7.386Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="text-sm">Page top</span>
          </button>
        </div>
      )}
    </section>
  );
};

export default Section8;