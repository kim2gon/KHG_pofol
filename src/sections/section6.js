import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Bubble = ({ children, x = 0, y = 0 }) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const initialY = useRef(y);

  useEffect(() => {
    if (isHovered) {
      controls.start({
        scale: 1.5,
        opacity: 0,
        transition: { duration: 0.15, ease: 'easeOut' }
      });

      const isDown = setTimeout(() => {
        controls.start({
          y: window.innerHeight * 2
        })
      }, 1000);

      const isUp = setTimeout(() => {
        controls.start({
          scale: 1,
          opacity: 1
        });
      }, 1100)

      const timeout = setTimeout(() => {
        controls.start({
          y: initialY.current,
          transition: { duration: 5 }
        });
        setIsHovered(false);
      }, 3000);

      return () => clearTimeout(isDown, isUp, timeout);
    }
  }, [isHovered, controls]);

  return (
    <motion.div
      animate={controls}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        x, y
      }}
      className="circlecontainer z-40 opacity-100"
    >
      <div className="circleinner">
        {children}
      </div>
    </motion.div>
  );
};


const Bubble2 = ({ children, x = 0, y = 0 }) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const initialY = useRef(y);

  useEffect(() => {
    if (isHovered) {
      controls.start({
        scale: 1.5,
        opacity: 0,
        transition: { duration: 0.15, ease: 'easeOut' }
      });

      const isDown = setTimeout(() => {
        controls.start({
          y: window.innerHeight * 2
        })
      }, 1000);

      const isUp = setTimeout(() => {
        controls.start({
          scale: 1,
          opacity: 1
        });
      }, 1100)

      const timeout = setTimeout(() => {
        controls.start({
          y: initialY.current,
          transition: { duration: 5 }
        });
        setIsHovered(false);
      }, 3000);

      return () => clearTimeout(isDown, isUp, timeout);
    }
  }, [isHovered, controls]);

  return (
    <motion.div
      animate={controls}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        x, y
      }}
      className="circlecontainer z-40 opacity-100"
    >
      <div className="circleinner">
        {children}
      </div>
      <div className="dotspin"></div>
    </motion.div>
  );
};


const Circle = ({ children, x = 0, y = 0 }) => {
  const controls = useAnimation();
  const [isClicked, setIsClicked] = useState(false);
  const initialY = useRef(y);

  useEffect(() => {
    if (isClicked) {
      controls.start({
        scale: 1.5,
        opacity: 0,
        transition: { duration: 0.15, ease: 'easeOut' }
      });

      const isDown = setTimeout(() => {
        controls.start({
          y: window.innerHeight * 2
        })
      }, 1000);

      const isUp = setTimeout(() => {
        controls.start({
          scale: 1,
          opacity: 1
        });
      }, 1100)

      const timeout = setTimeout(() => {
        controls.start({
          y: initialY.current,
          transition: { duration: 5 }
        });
        setIsClicked(false);
      }, 3000);

      return () => clearTimeout(isDown, isUp, timeout);
    }
  }, [isClicked, controls]);

  return (
    <motion.div
      animate={controls}
      onMouseDown={() => setIsClicked(true)}
      style={{
        x, y
      }}
      className="circlecontainer z-30 opacity-100"
    >
      <div className="circlespin">{children}</div>
    </motion.div>
  );
};


const Section6 = () => {
  return (
    <section className="w-full h-dvh flex flex-col pt-[100px] pl-10 pb-[75px] !left-0 top-0 bottom-0 start-[--h-padding] end-[--h-padding] relative overflow-hidden">
      <h3 className="font-bold text-base leading-tight mt-[10vh] mx-0 mb-[21px] text-[#111]">My skills</h3>
      <p className="m-0 max-w-60 font-medium text-[11px] leading-[18px] tracking-wide">
        This is my portfolio and this page is introduce my skills thank you for visiting my site thank you.this is my
        portfolio thank you for visiting my site thank you.
      </p>
      <div className="absolute -left-[70px] bottom-0 right-0 h-[1000px] overflow-hidden">
        <Bubble2 x={668} y={380}>
          HTML
        </Bubble2>
        <Bubble x={821} y={512}>
          CSS
        </Bubble>
        <Bubble x={552} y={553}>
          JavaScript
        </Bubble>
        <Bubble x={1031} y={619}>
          JQuery
        </Bubble>
        <Bubble2 x={264} y={656}>
          PhotoShop
        </Bubble2>
        <Bubble x={871} y={720}>
          Illustrator
        </Bubble>
        <Bubble x={642} y={732}>
          Figma
        </Bubble>
        <Bubble2 x={1193} y={732}>
          React
        </Bubble2>
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
        <Bubble2 x={306} y={941}>
          FramerMotion
        </Bubble2>
        <Bubble2 x={648} y={941}>
          ThreeJS
        </Bubble2>
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
