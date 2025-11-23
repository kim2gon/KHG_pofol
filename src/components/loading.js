import React, { useEffect, useState } from "react";
import "../styles/loadinganimation.css";
import scrolldown from "../assets/img/scroll_down.png";

const Loading = ({ triggerScroll, onWheel }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (triggerScroll) {
      setIsScrolled(true);
    }
  }, [triggerScroll]);

  return (
    <div
      className={`absolute w-screen h-screen left-0 top-0 loading-wrapper ${
        isScrolled ? "scrolled" : ""
      } ${isScrolled ? "z-20" : "z-[99999]"}`}
    >
      <div className="loadingbg">
        <div className=" w-[300px] h-[200px] absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[20]">
          <img className="scrolldownani" src={scrolldown} alt="scroll_down" />
        </div>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="fallingstars">
          {[...Array(10)].map((_, i) => (
            <span key={i}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
