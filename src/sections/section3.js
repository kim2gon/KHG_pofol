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
          className={`w-screen fixed left-0 right-0 pt-[53px] pb-[50px]  bg-black text-white z-[51] transition-all duration-500 ${getDivStyle1()}`}
        >
          <div className="font-medium text-[34px] leading-tight tracking-wide max-w-[1250px] left-0 right-0 translate-x-1/4">
            <p>
              웹 프론트엔드 개발자 김희곤 입니다.<br />제 포트폴리오 사이트에 방문해주신 모든분께 감사합니다.<br />앞으로 더 배우고 노력하는 모습을 보여드리겠습니다. 감사합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;