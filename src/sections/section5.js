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
import Cssanimation7 from "../cssanimations/cssanimation7";
import Cssanimation8 from "../cssanimations/cssanimation8";

const Section5 = () => {
  const cssanimation = [
    <Cssanimation1 />,
    <Cssanimation2 />,
    <Cssanimation3 />,
    <Cssanimation4 />,
    <Cssanimation5 />,
    <Cssanimation6 />,
    <Cssanimation7 />,
    <Cssanimation8 />,
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

      <div className="hidden lg:block mt-[15vh] m-0 text-[#111]">
        <h3 className="font-bold text-2xl leading-tight mb-[21px]">
          CSS Animation
        </h3>
        <p className='max-w-60 font-medium text-sm leading-[18px] tracking-wide'>CSS애니메이션을 구현하여 슬라이더로 정리해두었습니다.</p>
      </div>

      <div className="absolute top-0 bottom-0 lg:bottom-[-75px] left-[10px] lg:left-[326px] w-40 lg:w-[324px] overflow-hidden">
        <div className="w-full h-full">
          <div className="top-full flex-col absolute flex slide-up">
            <div className="w-full">
              {cssanimation.map((Component, i) => (
                <div key={i} className="block mt-10 lg:mt-24 w-44 lg:w-[324px] h-40 lg:h-[404px] origin-top-left">
                  <div className="scale-[0.4] lg:scale-100 origin-top-left">
                    {Component}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="top-full flex-col absolute flex slide-up second-slide">
            <div className="w-full">
              {cssanimation.map((Component, i) => (
                <div key={i} className="block mt-10 lg:mt-24 w-44 lg:w-[324px] h-40 lg:h-[404px] origin-top-left">
                  <div className="scale-[0.4] lg:scale-100 origin-top-left">
                    {Component}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 bottom-0 lg:bottom-[-300px] left-[170px] lg:left-[739px] w-40 lg:w-[324px] overflow-hidden">
        <div className="w-full h-full">
          <div className="bottom-full flex-col absolute flex slide-down">
            <div className="w-full">
              {cssanimation.map((Component, i) => (
                <div key={i} className="block mt-10 lg:mt-24 w-40 lg:w-[324px] h-40 lg:h-[404px] origin-top-left">
                  <div className="scale-[0.4] lg:scale-100 origin-top-left">
                    {Component}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bottom-full flex-col absolute flex slide-down second-slide">
            <div className="w-full">
              {cssanimation.map((Component, i) => (
                <div key={i} className="block mt-10 lg:mt-24 w-40 lg:w-[324px] h-40 lg:h-[404px] origin-top-left">
                  <div className="scale-[0.4] lg:scale-100 origin-top-left">
                    {Component}
                  </div>
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
