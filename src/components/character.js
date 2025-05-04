import { Canvas, useFrame, useThree } from '@react-three/fiber'
import Model from '../assets/models/M_2'
import { useEffect, useRef } from 'react'
import * as THREE from "three";
import { motion, useTransform, useScroll } from "framer-motion";


const CameraController = ({
  scrollYProgress
}) => {
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

      if (progress >= 0.1 && progress <= 0.5) {
        targetPosition.set(2, -2, -3);
        targetRotationY = -(Math.PI / 180) * 10.8;
      } else if (progress >= 0.5 && progress <= 0.9) {
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

const Character = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
    });
  }, [scrollYProgress]);

  return (
    <motion.div ref={ref} className="w-full h-full absolute z-40" style={{ opacity: useTransform(scrollYProgress, [0.1, 0.4, 0.9, 1], [1, 1, 0, 1]) }}>
      <Canvas style={{ pointerEvents: 'none' }}>
        <CameraController scrollYProgress={scrollYProgress} />
        <ambientLight intensity={1.2} />
        <directionalLight position={[1, 2, 3]} intensity={1} />
        <Model scale={2.5} position={[2, -3.5, 0]} />
      </Canvas>
    </motion.div>
  )
};

export default Character
