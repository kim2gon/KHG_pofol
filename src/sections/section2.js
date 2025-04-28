import React, { useEffect, useRef, useState } from "react";
import eximg from "../assets/img/characters.png";

const Section2 = () => {
  return (
    <section className="w-full h-dvh flex pt-[100px] px-0 pb-[75px] top-0 bottom-0 relative bg-white">
      <div className="mt-auto mr-0 mb-[5px] ml-10">
        <div className="flex flex-col gap-7 w-60">
          <button className="flex h-[79px] w-[240px] overflow-hidden">
            <div className="w-[79px] h-full bg-black flex-shrink-0 relative flex items-center justify-center">
              <div className="bg-white rounded-full size-[39px] flex items-center justify-center">
                <div className="bg-black w-[10px] h-[11.5px] triangle" />
              </div>
            </div>
            <div className="flex-grow h-full">
              <img className="w-full h-full object-cover" src={eximg} />
            </div>
          </button>
          <p className="m-0 max-w-60 gap-8 flex flex-col items-start font-medium text-[11px] leading-tight tracking-wide text-[#111]">
            this is my portfolio thank you for visiting my site thank you.this
            is my portfolio thank you for visiting my site thank you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
