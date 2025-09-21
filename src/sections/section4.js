import React, { useEffect, useState } from "react";
import flex from "../assets/img/flex-study.png";
import krafton from "../assets/img/krafton.png";
import nespresso from "../assets/img/nespresso.jpg";

export const slides = [
  {
    title: "Flex-study",
    desc: "플렉스 스터디 입니다.\nHTML, CSS, JavaScript, React를 사용하여 제작한 웹사이트입니다.\n반응형 레이아웃과 사용자 중심의 인터페이스를 구현하여 직관적으로 제작하였습니다.\n컴포넌트 기반 구조와 효율적인 코드 설계를 통해 유지보수성과 확장성을 고려하여 제작하였습니다.",
    image: flex,
    link: "https://study.fl-ex.co.kr/",
    zIndex: 4,
  },
  {
    title: "NESPRESSO",
    desc: "네스프레소를 소개하는 마이크로사이트 입니다.\nHTML, CSS, JavaScript를 사용하여 제작한 웹사이트입니다.\n핵심 정보나 콘텐츠를 간결하게 전달하기위해 직관적인 UI와 빠른 접근성을 초점을 맞춰 제작하였습니다.\n경량화된 구조와 깔끔한 인터랙션및 애니메이션을 활용하여 눈길을 사로잡는 사이트를 제작하였습니다.",
    image: nespresso,
    link: "https://kim2gon.github.io/nespresso/",
    zIndex: 3,
  },
  {
    title: "KRAFTON",
    desc: "리디자인 한 크래프톤의 사이트 입니다.\nHTML, CSS를 사용하여 제작한 웹사이트입니다.\n기존의 사이트를 다른 방식의 사이트로 제작해보았습니다.\n반응형 디자인을 적용해 다양한 디바이스에서도 최적의 사용 경험을 제공하도록 제작하였습니다.",
    image: krafton,
    link: "https://kim2gon.github.io/krafton/",
    zIndex: 2,
  },
];

const Section4 = ({ currentIndex = 0, disableTransition = false }) => {
  const slideWidthPercent = 100 / slides.length;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="w-full h-screen overflow-hidden relative pt-[100px] pl-10 pb-[75px]">
      {hovered && (
        <div
          className="fixed rounded-full pointer-events-none flex items-center justify-center text-xl font-semibold mix-blend-difference"
          style={{
            width: "160px",
            height: "160px",
            background: "rgba(255,255,255,1)",
            left: mousePos.x - 80,
            top: mousePos.y - 80,
            zIndex: 9999,
          }}
        >CLICK</div>
      )}

      <div
        className="flex h-full"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${currentIndex * slideWidthPercent}%)`,
          transition: disableTransition ? "none" : "transform 0.7s ease-in-out",
        }}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="h-full flex flex-shrink-0"
            style={{
              width: `${slideWidthPercent}%`,
            }}
          >
            <div className="flex items-center justify-center h-full space-x-40">
              <div className="w-[300px] max-w-[300px] font-medium text-xs leading-[18px] tracking-wide text-[#111] whitespace-pre-wrap break-words">
                <h3 className="font-bold text-2xl leading-tight mb-[21px]">
                  {slide.title}
                </h3>
                <p>{slide.desc}</p>
              </div>

              <div
                className="relative w-[31vw] h-[31vw] overflow-hidden"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => window.open(slide.link, "_blank")}
              >
                <img
                  className="w-full h-full object-cover"
                  src={slide.image}
                  alt={slide.title}
                  style={{ zIndex: slide.zIndex }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section >
  );
};

export default Section4;