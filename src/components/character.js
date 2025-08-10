import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { motion, useScroll, useTransform } from "framer-motion";
import * as THREE from "three";
import Model from "../assets/models/M_2";

const CameraController = ({ scrollYProgress }) => {
  const pivotRef = useRef(null);
  const { camera } = useThree();

  useEffect(() => {
    if (pivotRef.current) {
      pivotRef.current.add(camera);
      camera.position.set(1.5, 1, 8);
      camera.lookAt(0, 1, 0);
    }
  }, [camera]);

  useFrame(() => {
    const progress = scrollYProgress.get();
    if (pivotRef.current) {
      const targetPosition = new THREE.Vector3();
      let targetRotationY = 0;

      if (progress >= 0.1 && progress <= 0.4) {
        targetPosition.set(2, -2, -3);
        targetRotationY = -(Math.PI / 180) * 10.8;
      } else if (progress >= 0.4 && progress <= 0.9) {
        targetPosition.set(0, 15, 5);
      } else if (progress >= 0.9 && progress <= 1) {
        targetPosition.set(0, 0, 0);
      }

      pivotRef.current.position.lerp(targetPosition, 0.05);
      pivotRef.current.rotation.y = THREE.MathUtils.lerp(
        pivotRef.current.rotation.y,
        targetRotationY,
        0.05
      );
    }
  });

  return <group ref={pivotRef} position={[0, 0, 0]} />;
};


const Character = ({ scrollTarget, modelColor, animation }) => {
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start start", "end end"],
  });

  const [currentAnimation, setCurrentAnimation] = useState(animation || "Idle");

  useEffect(() => {
    if (!animation) {
      return scrollYProgress.onChange((progress) => {
        if (progress >= 0.142 && progress <= 0.143) setCurrentAnimation("Walk");
        else if (progress >= 0.143 && progress <= 0.85) setCurrentAnimation("Run");
        else setCurrentAnimation("Idle");
      });
    }
  }, [scrollYProgress, animation]);

  useEffect(() => {
    if (animation) {
      setCurrentAnimation(animation);
    }
  }, [animation]);

  return (
    <motion.div
      className="w-full h-full absolute z-40"
      style={{
        opacity: useTransform(scrollYProgress, [0, 0.3, 0.4, 0.9, 1], [1, 1, 0.5, 0.5, 1]),
      }}
    >
      <Canvas style={{ pointerEvents: "none" }}>
        <CameraController scrollYProgress={scrollYProgress} />
        <ambientLight intensity={1.2} />
        <directionalLight position={[1, 2, 3]} intensity={1} />
        <Model
          colorMap={{ color_spec: modelColor }}
          scale={2.5}
          position={[2, -3.5, 0]}
          animation={currentAnimation}
        />
      </Canvas>
    </motion.div>
  );
};

export default Character;