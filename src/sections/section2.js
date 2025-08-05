import React from "react";

const colorsTop = ["#fbc02b", "#e64a18", "#512ca8", "#1876d2", "#0097a7"];
const colorsBottom = ["#c21f5b", "#d32f2f", "#378e3b", "#5d4037", "#616161"];

const Section2 = () => {
  const handleClick = (color) => {
    alert(`클릭됨: ${color}`);
  };

  const changeColor = (colors) =>
    colors.map((color, index) => (
      <div
        key={index}
        className="w-10 h-full"
        style={{ backgroundColor: color, cursor: "pointer" }}
        onClick={() => handleClick(color)}
      />
    ));

  return (
    <section className="w-full h-dvh flex pt-[100px] px-0 pb-[75px] top-0 bottom-0 relative">
      <div className="mt-auto mr-0 mb-[5px] ml-10">
        <div className="flex flex-col gap-7 w-72">
          <button className="flex h-20 w-72 overflow-hidden">
            <div className="w-20 h-full bg-black flex-shrink-0 relative flex items-center justify-center">
              <div className="bg-white rounded-full size-[39px] flex items-center justify-center">
                <div className="bg-black w-[10px] h-[11.5px] triangle" />
              </div>
            </div>
            <div className="w-full h-full flex flex-col">
              <div className="w-full h-1/2 flex">
                {changeColor(colorsTop)}
              </div>
              <div className="w-full h-1/2 flex">
                {changeColor(colorsBottom)}
              </div>
            </div>
          </button>
          <p className="m-0 max-w-60 gap-8 flex flex-col items-start font-medium text-[11px] leading-tight tracking-wide text-[#111]">
            여기에 버튼 누르면 애니메이션 재생, 색 클릭하면 색상변경 설명
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;