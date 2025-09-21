import React, { useEffect, useState } from "react";
import flex from "../assets/img/flex-study.png";
import krafton from "../assets/img/krafton.png";
import nespresso from "../assets/img/nespresso.jpg";

export const slides = [
  {
    title: "Flex-study",
    desc: "플렉스 스터디 웹사이트입니다.\nNext.js를 기반으로 제작하였으며, 3D홈페이지를 구현하였습니다.\n\nthree.js, @react-three/fiber, @react-three/drei를 활용하여 3D 인터랙션을 구현하고, 로딩 페이지에서는 glb 파일을 효율적으로 로드하도록 최적화했습니다.\n인트로 화면에서는 빛 효과를 적용해 몰입감 있는 경험을 제공하였습니다.\n\n또한 디자이너가 Blender로 제작한 3D 오브젝트를 웹 환경에 최적화하는 과정에 주력하여 퍼포먼스와 시각적 완성도를 모두 확보했습니다.\n컴포넌트 기반 아키텍처와 효율적인 코드 구조를 적용해 유지보수성과 확장성까지 고려한 프로젝트입니다.",
    skills: ["Next.js", "React", "Typescript", "tailwindCSS", "motion", "GSAP", "three.js", "fiber", "drei"],
    image: flex,
    link: "https://study.fl-ex.co.kr/",
    zIndex: 4,
  },
  {
    title: "NESPRESSO",
    desc: "네스프레소를 소개하는 마이크로사이트 입니다.\nHTML, CSS, JavaScript를 기반으로 제작하였으며, 드래그 기반의 인터랙션을 통해 사용자가 직접 콘텐츠를 탐색할 수 있도록 구현했습니다.\n\n부드럽고 직관적인 CSS 애니메이션을 적용하여 브랜드 아이덴티티를 효과적으로 전달하고, 경량화된 구조로 퍼포먼스를 최적화했습니다.\n\n또한 디자이너와 협업을 통해 시각적 요소와 애니메이션을 정교하게 맞추며 완성도를 높였습니다.\n이를 통해 기술적 구현 능력뿐만 아니라 협업 역량까지 함께 보여줄 수 있는 프로젝트입니다.",
    skills: ["HTML", "CSS", "JavaScript"],
    image: nespresso,
    link: "https://kim2gon.github.io/nespresso/",
    zIndex: 3,
  },
  {
    title: "KRAFTON",
    desc: "리디자인 한 크래프톤의 사이트 입니다.\nHTML, CSS를 사용하여 제작한 첫번째 웹사이트입니다.\n\n기존의 사이트를 다른 방식의 사이트로 제작해보았습니다.\n반응형 디자인을 적용해 다양한 디바이스에서도 최적의 사용 경험을 제공하도록 제작하였습니다.",
    skills: ["HTML", "CSS"],
    image: krafton,
    link: "https://kim2gon.github.io/krafton/",
    zIndex: 2,
  },
];

const Section4 = ({ currentIndex = 0, disableTransition = false }) => {
  const slideWidthPercent = 100 / slides.length;
  const slideHeightPercent = 100 / slides.length;
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
        className={`
    flex h-full
    transition-transform duration-700 ease-in-out
    ${disableTransition ? "transition-none" : ""}
    flex-col lg:flex-row
  `}
        style={{
          width: `${slides.length * 100}%`,
          height: `auto`,
          transform: window.innerWidth >= 1024
            ? `translateX(-${currentIndex * slideWidthPercent}%)`
            : `translateY(-${currentIndex * slideHeightPercent}%)`,
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
            <div className="flex items-center justify-center h-full lg:space-x-40">
              <div className="w-full lg:w-[300px] font-medium text-sm leading-[18px] tracking-wide text-[#111] whitespace-pre-wrap break-words">
                <h3 className="font-bold text-2xl leading-tight mb-[21px]">
                  {slide.title}
                </h3>
                <p>{slide.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1">
                  {slide.skills.map((skill, i) => (
                    <p
                      key={i}
                      className="font-bold bg-black rounded-full text-white px-4 py-2"
                    >
                      {skill}
                    </p>
                  ))}
                </div>
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