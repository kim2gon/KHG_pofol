import React, { useEffect, useRef } from "react";

const Bubble = ({ children, x = 0, y = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseOver = () => {
      if (ref.current) {
        ref.current.style.opacity = 0;
        ref.current.style.bottom = 0;
        setTimeout(() => {
          ref.current.style.opacity = 1;
          ref.current.style.bottom = "100%";
        }, 2000);
      }
    };

    const element = ref.current;
    element?.addEventListener("mouseover", handleMouseOver);
    return () => {
      element?.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
      className="circlecontainer z-10 opacity-100"
    >
      <div ref={ref} className="circleinner">
        {children}
      </div>
    </div>
  );
};

const Circle = ({ children, x = 0, y = 0 }) => {
  return (
    <div
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
      className="circlecontainer z-0 opacity-100"
    >
      <div className="circlespin">{children}</div>
    </div>
  );
};

const Section6 = () => {
  return (
    <section className="w-full h-dvh flex flex-col pt-[100px] pl-10 pb-[75px] !left-0 top-0 bottom-0 start-[--h-padding] end-[--h-padding] relative">
      <h3 className="font-bold text-base leading-tight mt-[10vh] mx-0 mb-[21px] text-[#111]">My skills</h3>
      <p className="m-0 max-w-60 font-medium text-[11px] leading-[18px] tracking-wide">
        This is my portfolio and this page is introduce my skills thank you for visiting my site thank you.this is my
        portfolio thank you for visiting my site thank you.
      </p>
      <div className="left-[--left] bottom-0 right-0 h-[1000px] overflow-hidden">
        <Bubble x={668} y={380}>
          HTML
        </Bubble>
        <Bubble x={821} y={512}>
          CSS
        </Bubble>
        <Bubble x={552} y={553}>
          JavaScript
        </Bubble>
        <Bubble x={1031} y={619}>
          JQuery
        </Bubble>
        <Bubble x={264} y={656}>
          PhotoShop
        </Bubble>
        <Bubble x={871} y={720}>
          Illustrator
        </Bubble>
        <Bubble x={642} y={732}>
          Figma
        </Bubble>
        <Bubble x={1193} y={732}>
          React
        </Bubble>
        <Bubble x={1248} y={824}>
          Gsap
        </Bubble>
        <Bubble x={502} y={836}>
          Fiber
        </Bubble>
        <Bubble x={1031} y={881}>
          Drei
        </Bubble>
        <Bubble x={306} y={941}>
          FramerMotion
        </Bubble>
        <Bubble x={648} y={941}>
          ThreeJS
        </Bubble>
        <Circle x={710} y={803}></Circle>
        <Bubble x={1248} y={824}>
          Gsap
        </Bubble>
        <Bubble x={502} y={836}>
          Fiber
        </Bubble>
        <Bubble x={1031} y={881}>
          Drei
        </Bubble>
        <Bubble x={306} y={941}>
          FramerMotion
        </Bubble>
        <Bubble x={648} y={941}>
          ThreeJS
        </Bubble>
        <Bubble x={1171} y={954}>
          AndroidStudio
        </Bubble>
        <Bubble x={559} y={999}>
          Eclipse
        </Bubble>
        <Circle x={1075} y={993}></Circle>
        <Bubble x={230} y={1010}>
          Java
        </Bubble>
        <Bubble x={851} y={1013}>
          Python
        </Bubble>
      </div>
    </section>
  );
};

export default Section6;
