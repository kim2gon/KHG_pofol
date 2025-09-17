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
          className={`w-screen fixed left-0 right-0 pt-[53px] pr-[232px] pb-[50px] pl-[159px] bg-black text-white z-[51] transition-all duration-500 ${getDivStyle1()}`}
        >
          <div className="font-medium text-[34px] leading-tight tracking-wide max-w-[1250px]">
            <p>
              This is my portfolio thank you for visiting my site thank you. This
              is my portfolio thank you for visiting my site thank you. This is my
              portfolio thank you for visiting my site thank you for visiting my
              site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;