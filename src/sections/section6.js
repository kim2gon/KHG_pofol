import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const useResponsivePosition = (x, y, xLg, yLg) => {
  const [pos, setPos] = useState({ x, y });

  useEffect(() => {
    const updatePos = () => {
      if (window.innerWidth >= 1024 && xLg !== undefined && yLg !== undefined) {
        setPos({ x: xLg, y: yLg });
      } else {
        setPos({ x, y });
      }
    };
    updatePos();
    window.addEventListener("resize", updatePos);
    return () => window.removeEventListener("resize", updatePos);
  }, [x, y, xLg, yLg]);

  return pos;
};

const Bubble = ({ children, x = 0, y = 0, xLg, yLg }) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const initialY = useRef(y);
  const pos = useResponsivePosition(x, y, xLg, yLg);

  useEffect(() => {
    if (isHovered) {
      controls.start({ scale: 1.5, opacity: 0, transition: { duration: 0.15, ease: "easeOut" } });

      const isDown = setTimeout(() => {
        controls.start({ y: window.innerHeight * 2 });
      }, 1000);

      const isUp = setTimeout(() => {
        controls.start({ scale: 1, opacity: 1 });
      }, 1100);

      const timeout = setTimeout(() => {
        controls.start({ y: initialY.current, transition: { duration: 5 } });
        setIsHovered(false);
      }, 3000);

      return () => {
        clearTimeout(isDown);
        clearTimeout(isUp);
        clearTimeout(timeout);
      };
    }
  }, [isHovered, controls]);

  return (
    <motion.div animate={controls} onMouseEnter={() => setIsHovered(true)} style={{ x: pos.x, y: pos.y }} className="circlecontainer z-40 opacity-100">
      <div className="circleinner">{children}</div>
    </motion.div>
  );
};

const Bubble2 = ({ children, x = 0, y = 0, xLg, yLg }) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const initialY = useRef(y);
  const pos = useResponsivePosition(x, y, xLg, yLg);

  useEffect(() => {
    if (isHovered) {
      controls.start({ scale: 1.5, opacity: 0, transition: { duration: 0.15, ease: "easeOut" } });

      const isDown = setTimeout(() => {
        controls.start({ y: window.innerHeight * 2 });
      }, 1000);

      const isUp = setTimeout(() => {
        controls.start({ scale: 1, opacity: 1 });
      }, 1100);

      const timeout = setTimeout(() => {
        controls.start({ y: initialY.current, transition: { duration: 5 } });
        setIsHovered(false);
      }, 3000);

      return () => {
        clearTimeout(isDown);
        clearTimeout(isUp);
        clearTimeout(timeout);
      };
    }
  }, [isHovered, controls]);

  return (
    <motion.div animate={controls} onMouseEnter={() => setIsHovered(true)} style={{ x: pos.x, y: pos.y }} className="circlecontainer z-40 opacity-100">
      <div className="circleinner">{children}</div>
      <div className="dotspin"></div>
    </motion.div>
  );
};

// ✅ Circle (click)
const Circle = ({ children, x = 0, y = 0, xLg, yLg }) => {
  const controls = useAnimation();
  const [isClicked, setIsClicked] = useState(false);
  const initialY = useRef(y);
  const pos = useResponsivePosition(x, y, xLg, yLg);

  useEffect(() => {
    if (isClicked) {
      controls.start({ scale: 1.5, opacity: 0, transition: { duration: 0.15, ease: "easeOut" } });

      const isDown = setTimeout(() => {
        controls.start({ y: window.innerHeight * 2 });
      }, 1000);

      const isUp = setTimeout(() => {
        controls.start({ scale: 1, opacity: 1 });
      }, 1100);

      const timeout = setTimeout(() => {
        controls.start({ y: initialY.current, transition: { duration: 5 } });
        setIsClicked(false);
      }, 3000);

      return () => {
        clearTimeout(isDown);
        clearTimeout(isUp);
        clearTimeout(timeout);
      };
    }
  }, [isClicked, controls]);

  return (
    <motion.div animate={controls} onMouseDown={() => setIsClicked(true)} style={{ x: pos.x, y: pos.y }} className="circlecontainer z-30 opacity-100">
      <div className="circlespin">{children}</div>
    </motion.div>
  );
};

export { Bubble, Bubble2, Circle };


const Section6 = () => {
  return (
    <section className="w-full h-dvh flex flex-col pt-[100px] pl-10 pb-[75px] !left-0 top-0 bottom-0 start-[--h-padding] end-[--h-padding] relative overflow-hidden">
      <h3 className="font-bold text-2xl leading-tight mt-[10vh] mx-0 mb-[21px] text-[#111]">My skills</h3>
      <p className="m-0 max-w-60 font-medium text-xs leading-[18px] tracking-wide">
        제가 가진 기술들을 애니메이션을 이용하여 재밌게 표현했습니다.
      </p>
      <div className="absolute left-0 bottom-0 right-0 h-[1000px] overflow-hidden">
        <Bubble2 x={300} y={600} xLg={668} yLg={380}>
          HTML
        </Bubble2>
        <Bubble x={240} y={120} xLg={821} yLg={512}>
          CSS
        </Bubble>
        <Bubble x={200} y={750} xLg={552} yLg={553}>
          JavaScript
        </Bubble>
        <Bubble x={370} y={150} xLg={1031} yLg={619}>
          jQuery
        </Bubble>
        <Bubble2 x={264} y={656}>
          Photoshop
        </Bubble2>
        <Bubble x={871} y={720}>
          Illustrator
        </Bubble>
        <Bubble x={642} y={732}>
          Figma
        </Bubble>
        <Bubble2 x={260} y={600} xLg={1193} yLg={732}>
          React
        </Bubble2>
        <Circle x={710} y={803}></Circle>
        <Bubble x={1248} y={824}>
          Gsap
        </Bubble>
        <Bubble x={1000} y={600} xLg={502} yLg={836}>
          Fiber
        </Bubble>
        <Bubble x={1031} y={881}>
          Drei
        </Bubble>
        <Bubble2 x={260} y={600} xLg={306} yLg={941}>
          Framer Motion
        </Bubble2>
        <Bubble2 x={648} y={941}>
          ThreeJS
        </Bubble2>
        <Bubble x={260} y={600} xLg={1171} yLg={954}>
          Typescript
        </Bubble>
        <Bubble x={559} y={999}>
          Next.js
        </Bubble>
        <Circle x={1075} y={993}></Circle>
        <Bubble x={1000} y={300} xLg={230} yLg={1010}>
          Python
        </Bubble>
        <Bubble x={260} y={600} xLg={851} yLg={1013}>
          tailwind CSS
        </Bubble>
      </div>
    </section>
  );
};

export default Section6;