import React from "react";

const Section3 = ({ divPosition }) => {

  const getDivStyle1 = () => {
    switch (divPosition) {
      case "below":
        return "bottom-[-100vh]";
      case "bottom":
        return "bottom-0";
      case "middle":
        return "bottom-[64vh]";
      case "above":
        return "bottom-[100vh]";
      default:
        return "bottom-[-100vh]";
    }
  };

  return (
    <section className="w-full h-dvh flex items-center justify-center text-black relative">
      <div className="w-4/5 xl:w-[960px] mx-auto text-center">
        <div
          className={`w-screen fixed left-0 right-0 pt-[53px] pb-[50px] bg-black text-white z-[51] transition-all duration-500 ${getDivStyle1()} flex justify-center`}
        >
          <div className="font-medium lg:text-[34px] leading-tight tracking-wide max-w-[1250px] text-center">
            <p>
              FRONTEND DEVELOPER<br />KIM HEEGON'S PORTFOLIO SITE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;