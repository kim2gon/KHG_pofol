import React from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";
import RainCanvas from "../components/raineffect";
import '../styles/loadinganimation.css';

const Section1 = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const cleanDate = formattedDate.replace(/\.$/, "");

  return (
    <section className="w-full h-dvh flex pt-[100px] px-0 pb-[75px] top-0 bottom-0 relative">
      <Header />
      <RainCanvas />

      <div className="w-dvw h-screen lg:flex hidden justify-between lg:max-w-[1300px] mx-auto xl:px-[5%] fixed overflow-hidden pointer-events-none top-0 z-0">
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="rain-line w-[1px] h-screen bg-[#eee]" />
        ))}
      </div>

      <div className="flex flex-col w-full lg:max-w-[460px] h-full pt-[10vh] px-0 pb-0 z-20">
        <h1 className="text-8xl font-semibold text-left w-[460px] leading-tight">
          Portfolio
        </h1>
        <p className="my-4 w-full lg:max-w-96 gap-8 hidden lg:flex flex-col items-start justify-items-center font-regular text-sm leading-tight tracking-wide whitespace-pre-line text-[#111]">
          {`웹 프론트엔드 개발자 김희곤의 포토폴리오 입니다.\n아래로 스크롤다운 하며 감상해주시면 감사하겠습니다.`}
          {/* <Link
            to="/contact"
            className="pt-4 pb-[10px] px-7 text-white bg-black relative min-w-[16px] text-center text-sm leading-tight font-semibold"
          >
            상세정보 바로가기
          </Link> */}
        </p>
        {/* <p className="max-w-[200px] top-[150px] right-[85px] font-medium text-xs leading-tight tracking-wide text-[#111] absolute">
          메인페이지 입니다.
          로딩화면과 캐릭터를 이용하여 구현하였습니다.
        </p> */}
        <div className="mt-auto mx-10 mb-0 flex flex-wrap gap-y-[42px] gap-x-[82px] overflow-hidden max-w-max">
          <div className="flex flex-col gap-[5px]">
            <span className="font-bold text-[36px] leading-tight whitespace-nowrap">
              {cleanDate}
            </span>
            <label className="font-medium text-xs leading-tight whitespace-nowrap">
              Today's date
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;