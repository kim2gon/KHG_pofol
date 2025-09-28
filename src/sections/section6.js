import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

const designWidth = 1440;
const designHeight = 1024;

const Bubble = ({ children, xRatio = 0, yRatio = 0, containerRef }) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const initialY = useRef(0);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePos = () => {
      if (!containerRef.current) return;

      const { clientWidth, clientHeight } = containerRef.current;

      const x = clientWidth * xRatio;
      const y = clientHeight * yRatio;

      setPos({ x, y });
      initialY.current = y;
    };

    updatePos();
    window.addEventListener("resize", updatePos);
    return () => window.removeEventListener("resize", updatePos);
  }, [xRatio, yRatio, containerRef]);

  useEffect(() => {
    if (isHovered) {
      controls.start({
        scale: 1.5,
        opacity: 0,
        transition: { duration: 0.15, ease: "easeOut" },
      });

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

      return () => clearTimeout(isDown, isUp, timeout);
    }
  }, [isHovered, controls]);

  return (
    <motion.div
      animate={controls}
      onMouseEnter={() => setIsHovered(true)}
      style={{ x: pos.x, y: pos.y }}
      className="circlecontainer z-40 opacity-100"
    >
      <div className="circleinner">{children}</div>
    </motion.div>
  );
};

const Bubble2 = ({ children, xRatio = 0, yRatio = 0, containerRef }) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const initialY = useRef(0);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePos = () => {
      if (!containerRef.current) return;

      const { clientWidth, clientHeight } = containerRef.current;

      const x = clientWidth * xRatio;
      const y = clientHeight * yRatio;

      setPos({ x, y });
      initialY.current = y;
    };

    updatePos();
    window.addEventListener("resize", updatePos);
    return () => window.removeEventListener("resize", updatePos);
  }, [xRatio, yRatio, containerRef]);

  useEffect(() => {
    if (isHovered) {
      controls.start({
        scale: 1.5,
        opacity: 0,
        transition: { duration: 0.15, ease: "easeOut" },
      });

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

      return () => clearTimeout(isDown, isUp, timeout);
    }
  }, [isHovered, controls]);

  return (
    <motion.div
      animate={controls}
      onMouseEnter={() => setIsHovered(true)}
      style={{ x: pos.x, y: pos.y }}
      className="circlecontainer z-40 opacity-100"
    >
      <div className="circleinner">{children}</div>
      <div className="dotspin"></div>
    </motion.div>
  );
};

const Circle = ({ children, xRatio = 0, yRatio = 0, containerRef }) => {
  const controls = useAnimation();
  const [isClicked, setIsClicked] = useState(false);
  const initialY = useRef(0);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePos = () => {
      if (!containerRef.current) return;

      const { clientWidth, clientHeight } = containerRef.current;

      const x = clientWidth * xRatio;
      const y = clientHeight * yRatio;

      setPos({ x, y });
      initialY.current = y;
    };

    updatePos();
    window.addEventListener("resize", updatePos);
    return () => window.removeEventListener("resize", updatePos);
  }, [xRatio, yRatio, containerRef]);

  useEffect(() => {
    if (isClicked) {
      controls.start({
        scale: 1.5,
        opacity: 0,
        transition: { duration: 0.15, ease: "easeOut" },
      });

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

      return () => clearTimeout(isDown, isUp, timeout);
    }
  }, [isClicked, controls]);

  return (
    <motion.div
      animate={controls}
      onMouseDown={() => setIsClicked(true)}
      style={{ x: pos.x, y: pos.y }}
      className="circlecontainer z-30 opacity-100"
    >
      <div className="circlespin">{children}</div>
    </motion.div>
  );
};

const Section6 = () => {
  const containerRef = useRef(null);

  return (
    <section className="w-full h-dvh flex flex-col pt-[100px] pl-10 pb-[75px] !left-0 top-0 bottom-0 start-[--h-padding] end-[--h-padding] relative overflow-hidden">
      <h3 className="font-bold text-2xl leading-tight mt-[10vh] mx-0 mb-[21px] text-[#111]">
        My skills
      </h3>
      <p className="m-0 max-w-60 font-medium text-sm leading-[18px] tracking-wide">
        제가 가진 기술들을 애니메이션을 이용하여 재밌게 표현해보았습니다.
      </p>
      <div
        ref={containerRef}
        className="absolute -left-[70px] bottom-0 right-0 h-[1000px] overflow-hidden"
      >
        <Bubble2 xRatio={668 / designWidth} yRatio={380 / designHeight} containerRef={containerRef}>
          HTML
        </Bubble2>
        <Bubble xRatio={821 / designWidth} yRatio={512 / designHeight} containerRef={containerRef}>
          CSS
        </Bubble>
        <Bubble xRatio={552 / designWidth} yRatio={553 / designHeight} containerRef={containerRef}>
          JavaScript
        </Bubble>
        <Bubble xRatio={1031 / designWidth} yRatio={619 / designHeight} containerRef={containerRef}>
          JQuery
        </Bubble>
        <Bubble2 xRatio={264 / designWidth} yRatio={656 / designHeight} containerRef={containerRef}>
          PhotoShop
        </Bubble2>
        <Bubble xRatio={871 / designWidth} yRatio={720 / designHeight} containerRef={containerRef}>
          Illustrator
        </Bubble>
        <Bubble xRatio={642 / designWidth} yRatio={732 / designHeight} containerRef={containerRef}>
          Figma
        </Bubble>
        <Bubble2 xRatio={1193 / designWidth} yRatio={732 / designHeight} containerRef={containerRef}>
          React
        </Bubble2>
        <Circle xRatio={710 / designWidth} yRatio={803 / designHeight} containerRef={containerRef} />
        <Bubble xRatio={1248 / designWidth} yRatio={824 / designHeight} containerRef={containerRef}>
          Gsap
        </Bubble>
        <Bubble xRatio={502 / designWidth} yRatio={836 / designHeight} containerRef={containerRef}>
          Fiber
        </Bubble>
        <Bubble xRatio={1031 / designWidth} yRatio={881 / designHeight} containerRef={containerRef}>
          Drei
        </Bubble>
        <Bubble2 xRatio={306 / designWidth} yRatio={941 / designHeight} containerRef={containerRef}>
          FramerMotion
        </Bubble2>
        <Bubble2 xRatio={648 / designWidth} yRatio={941 / designHeight} containerRef={containerRef}>
          ThreeJS
        </Bubble2>
        <Bubble xRatio={1171 / designWidth} yRatio={954 / designHeight} containerRef={containerRef}>
          Typescript
        </Bubble>
        <Bubble xRatio={559 / designWidth} yRatio={999 / designHeight} containerRef={containerRef}>
          NextJS
        </Bubble>
        <Circle xRatio={1075 / designWidth} yRatio={993 / designHeight} containerRef={containerRef} />
        <Bubble xRatio={230 / designWidth} yRatio={1010 / designHeight} containerRef={containerRef}>
          Java
        </Bubble>
        <Bubble xRatio={851 / designWidth} yRatio={1013 / designHeight} containerRef={containerRef}>
          tailwindCSS
        </Bubble>
      </div>
    </section>
  );
};

export default Section6;
