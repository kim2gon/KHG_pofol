import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
import { useSetRecoilState } from "recoil";
import { headerColorState } from "../store";
import Cssanimation1 from "../cssanimations/cssanimation1";
import Cssanimation2 from "../cssanimations/cssanimation2";
import Cssanimation3 from "../cssanimations/cssanimation3";
import Cssanimation4 from "../cssanimations/cssanimation4";
import Cssanimation5 from "../cssanimations/cssanimation5";
import Cssanimation6 from "../cssanimations/cssanimation6";

const Section5 = () => {
  const cssanimation = [
    <Cssanimation1 />,
    <Cssanimation2 />,
    <Cssanimation3 />,
    <Cssanimation4 />,
    <Cssanimation5 />,
    <Cssanimation6 />
  ];
  // 애니메이션 반복

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
          to="/home"
          className="block max-w-max min-w-40 mt-8 cursor-pointer font-semibold text-xs leading-tight text-center relative text-white pt-4 px-[30px] pb-[11px] bg-black"
        >
          click my profile
        </Link>
      </p>

      <div className="absolute top-0 bottom-[-75px] left-[326px] w-[324px] overflow-hidden">
        <div className="w-full h-full">
          <div className="top-full flex-col absolute flex slide-up">
            <div className="w-full">
              {cssanimation.map((Component, i) => (
                <div key={i} className="block mt-[91px] w-[324px] h-[404px]">
                  {Component}
                </div>
              ))}
            </div>
          </div>
          <div className="top-full flex-col absolute flex slide-up second-slide">
            <div className="w-full">
              {cssanimation.map((Component, i) => (
                <div key={i} className="block mt-[91px] w-[324px] h-[404px]">
                  {Component}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 bottom-[-300px] left-[739px] w-[324px] overflow-hidden">
        <div className="w-full h-full">
          <div className="bottom-full flex-col absolute flex slide-down">
            <div className="w-full">
              {cssanimation.map((Component, i) => (
                <div key={i} className="block mt-[91px] w-[324px] h-[404px]">
                  {Component}
                </div>
              ))}
            </div>
          </div>
          <div className="bottom-full flex-col absolute flex slide-down second-slide">
            <div className="w-full">
              {cssanimation.map((Component, i) => (
                <div key={i} className="block mt-[91px] w-[324px] h-[404px]">
                  {Component}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
