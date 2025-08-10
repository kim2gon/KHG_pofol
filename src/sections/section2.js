import React, { useState, useRef, useEffect } from "react";

const Section2 = ({ setModelColor, setModelAnimation, scrollRootRef }) => {
  const colorsTop = ["#f0c05a", "#939597", "#0f4c81", "#ff6f61", "#5f4b8b", "#88b04b", "#f7caca"];
  const colorsMiddle = ["#93a9d1", "#964f4c", "#ad5e99", "#009473", "#dd4124", "#d94f70", "#45b5aa"];
  const colorsBottom = ["#5a5b9f", "#9b1b30", "#decdbe", "#53b0ae", "#e2583e", "#7bc4c4", "#9bb7d4"];

  const animations = ["Walk", "Run", "Dance", "Sad", "Win", "Idle"];

  const [animationIndex, setAnimationIndex] = useState(0);
  const [clickedAnimation, setClickedAnimation] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleClickColor = (color) => {
    setModelColor(color);
  };

  const handleAnimationChange = () => {
    const nextIndex = (animationIndex + 1) % animations.length;
    setAnimationIndex(nextIndex);
    const ani = animations[nextIndex];
    setClickedAnimation(ani);
    if (isInView) {
      setModelAnimation(ani);
    }
  };

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const rootNode = scrollRootRef && scrollRootRef.current ? scrollRootRef.current : null;
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
          if (clickedAnimation) {
            setModelAnimation(clickedAnimation);
          }
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
        } else {
          setIsInView(false);
          timeoutRef.current = setTimeout(() => {
            setModelAnimation(null);
            setClickedAnimation(null);
            setAnimationIndex(0);
            timeoutRef.current = null;
          }, 200);
        }
      },
      {
        root: rootNode,
        threshold: 0.5,
      }
    );

    obs.observe(node);
    return () => {
      obs.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [scrollRootRef, clickedAnimation, setModelAnimation]);

  useEffect(() => {
    if (isInView && clickedAnimation) {
      setModelAnimation(clickedAnimation);
    }
  }, [isInView, clickedAnimation, setModelAnimation]);

  const changeColor = (colors) =>
    colors.map((color, index) => (
      <div
        key={index}
        className="w-9 h-full"
        style={{ backgroundColor: color, cursor: "pointer" }}
        onClick={() => handleClickColor(color)}
      />
    ));

  return (
    <section
      ref={sectionRef}
      className="w-full h-dvh flex pt-[100px] px-0 pb-[75px] top-0 bottom-0 relative"
    >
      <div className="mt-auto mr-0 mb-[5px] ml-10">
        <div className="flex flex-col gap-7 w-96">
          <button className="flex h-20 w-[332px] overflow-hidden">
            <div
              className="w-20 h-full bg-black flex-shrink-0 relative flex items-center justify-center"
              onClick={handleAnimationChange}
            >
              <div className="bg-white rounded-full size-[39px] flex items-center justify-center">
                <div className="bg-black w-[12px] h-[12px] triangle absolute left-9" />
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="w-full h-[27px] flex">{changeColor(colorsTop)}</div>
              <div className="w-full h-[26px] flex">{changeColor(colorsMiddle)}</div>
              <div className="w-full h-[27px] flex">{changeColor(colorsBottom)}</div>
            </div>
          </button>
          <p className="m-0 max-w-60 gap-8 flex flex-col items-start font-medium text-[11px] leading-tight tracking-wide text-[#111]">
            버튼을 누르면 애니메이션이 변경됩니다. 섹션을 떠나면 초기화됩니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;