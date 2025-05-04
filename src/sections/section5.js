import React, { useEffect, useRef } from "react";
import aniimg1 from "../assets/img/earth.png";
import aniimg2 from "../assets/img/egg1.png";
import aniimg3 from "../assets/img/egg2.png";
import aniimg4 from "../assets/img/flower.png";
import aniimg5 from "../assets/img/pokeballimg.png";
import aniimg6 from "../assets/img/robot.png";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
import { useSetRecoilState } from "recoil";
import { headerColorState } from "../store";

const Section5 = () => {
  const cssanimation = [
    aniimg1,
    aniimg2,
    aniimg3,
    aniimg4,
    aniimg5,
    aniimg6,
    aniimg1,
    aniimg2,
    aniimg3,
    aniimg4,
    aniimg5,
    aniimg6,
  ];
  // 12*2 24개 애니메이션 반복

  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5,
    once: false,
  });

  const setheaderColor = useSetRecoilState(headerColorState);

  useEffect(() => {
    if (isInView) {
      setheaderColor("white");
    } else {
      setheaderColor("");
    }
  }, [isInView, setheaderColor]);

  return (
    <section
      ref={ref}
      className="w-full h-dvh flex pt-[100px] pl-10 pb-[75px] !left-0 top-0 bottom-0 start-[--h-padding] end-[--h-padding] relative"
    >
      <p className="mt-[15vh] m-0 max-w-60 font-medium text-[11px] leading-[18px] tracking-wide text-[#111]">
        this is my portfolio thank you for visiting my site thank you.
        <Link
          href="/"
          className="block max-w-max min-w-40 mt-8 cursor-pointer font-semibold text-xs leading-tight text-center realative text-white pt-4 px-[30px] pb-[11px] bg-black"
        >
          click my profile
        </Link>
      </p>

      <div className="absolute top-0 bottom-[-75px] left-[326px] w-[324px] overflow-hidden">
        <div className="w-full h-full">
          <div className="top-full flex-col absolute flex slide-up">
            <div className="w-full">
              {cssanimation.map((v, i) => (
                <img key={i} src={v} className="block mt-[91px] object-contain w-[324px] h-[404px]" />
              ))}
            </div>
            <div className="w-full">
              {cssanimation.map((v, i) => (
                <img key={i} src={v} className="block mt-[91px] object-contain w-[324px] h-[404px]" />
              ))}
              <div className="flex flex-wrap"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 bottom-[-300px] left-[739px] w-[324px] overflow-hidden">
        <div className="w-full h-full">
          <div className="bottom-full flex-col absolute flex slide-down">
            <div className="w-full">
              {cssanimation.map((v, i) => (
                <img key={i} src={v} className="block mt-[91px] object-contain w-[324px] h-[404px]" />
              ))}
            </div>
            <div className="w-full">
              {cssanimation.map((v, i) => (
                <img key={i} src={v} className="block mt-[91px] object-contain w-[324px] h-[404px]" />
              ))}
              <div className="flex flex-wrap"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
