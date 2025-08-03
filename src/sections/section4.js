import React from "react";
import flex from "../assets/img/flex.jpg";
import krafton from "../assets/img/krafton.png";
import nespresso from "../assets/img/nespresso.jpg";

export const slides = [
  {
    title: "Flex-study",
    desc: "플렉스 스터디 입니다.\nhtml,css,javascrip,react를 사용하여 제작하였습니다.",
    image: flex,
    link: "https://kim2gon.github.io/krafton/",
    zIndex: 4,
  },
  {
    title: "KRAFTON",
    desc: "리디자인 한 크래프톤의 사이트 입니다.\nhtml,css를 사용하여 제작하였습니다.",
    image: krafton,
    link: "https://kim2gon.github.io/krafton/",
    zIndex: 3,
  },
  {
    title: "NESPRESSO",
    desc: "네스프레소를 소개하는 마이크로사이트 입니다.\nhtml,css,javascrip를 사용하여 제작하였습니다.",
    image: nespresso,
    link: "https://kim2gon.github.io/nespresso/",
    zIndex: 2,
  },
];

const Section4 = ({ currentIndex = 0, disableTransition = false }) => {
  const slideWidthPercent = 100 / slides.length;

  return (
    <section className="w-full h-screen overflow-hidden relative pt-[100px] pl-10 pb-[75px] !left-0 top-0 bottom-0 start-[--h-padding] end-[--h-padding]">
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
              <div className="w-[300px] max-w-[300px] font-medium text-[11px] leading-[18px] tracking-wide text-[#111] whitespace-pre-wrap break-words">
                <h3 className="font-bold text-base leading-tight mb-[21px]">
                  {slide.title}
                </h3>
                <p>{slide.desc}</p>
              </div>
              <div className="relative w-[31vw] h-[31vw] overflow-hidden">
                <a href={slide.link} target="_blank" rel="noopener noreferrer">
                  <img
                    className="w-full h-full object-cover"
                    src={slide.image}
                    alt={slide.title}
                    style={{ zIndex: slide.zIndex }}
                  />
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Section4;