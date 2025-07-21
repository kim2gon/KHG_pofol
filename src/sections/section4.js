import React from "react";
import { Link } from "react-router-dom";
import krafton from "../assets/img/krafton.jpg";
import nespresso from "../assets/img/nespresso.jpg";

const slides = [
  {
    title: "KRAFTON",
    desc: "This is Krafton. My first site",
    image: krafton,
    link: "https://kim2gon.github.io/nespresso/",
    zIndex: 3,
  },
  {
    title: "NESPRESSO",
    desc: "This is Nespresso. My second site",
    image: nespresso,
    link: "https://kim2gon.github.io/krafton/",
    zIndex: 2,
  },
];

const Section4 = ({ currentIndex = 0, disableTransition = false }) => {
  return (
    <section className="w-full h-dvh relative overflow-hidden">
      <div
        className="flex h-full"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / slides.length)}%)`,
          transition: disableTransition ? "none" : "transform 0.7s ease-in-out",
        }}
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="w-full h-full flex">
            <div className="w-1/2 flex items-center justify-center h-full">
              <div className="text-left px-24">
                <h3 className="font-bold text-base leading-tight mb-[21px] text-[#111]">{slide.title}</h3>
                <p className="max-w-60 font-medium text-[11px] leading-[18px] tracking-wide">{slide.desc}</p>
              </div>
            </div>
            <div className="w-1/2 flex items-center justify-center h-full">
              <div className="relative w-[31vw] h-[31vw] overflow-hidden z-[100]">
                <Link to={slide.link}>
                  <img
                    className="absolute w-full h-full object-cover z-[slide.zIndex]"
                    src={slide.image}
                    alt={slide.title}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section4;
