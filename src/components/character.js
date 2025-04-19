import { Canvas } from '@react-three/fiber'
import Model from '../assets/models/M_2'
import { useState } from 'react'
import * as THREE from "three";
import {
  motion,
  useTransform,
  useMotionValueEvent,
  useScroll,
  MotionValue,
} from "framer-motion";



const CameraController = ({
  scrollYProgress,
}) => {
  useEffect(() => {
    if (pivotRef.current) {
      pivotRef.current.add(camera);
      camera.position.set(0, 0, 5);
      camera.lookAt(0, 0, 0);
    }
  }, [camera]);

  useFrame(() => {
    const progress = scrollYProgress.get();
    if (pivotRef.current) {
      const targetPosition = new THREE.Vector3();
      let targetRotationY = 0;

      if (progress >= 0.1 && progress <= 0.2) {
        targetPosition.set(0, 1, -5);
        targetRotationY = -(Math.PI / 180) * 180;
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
  const [currentAnimation, setCurrentAnimation] = useState('Run')
  const pivotRef = useRef(null);
  const { camera } = useThree();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(scrollYProgress.get());
    });
  }, [scrollYProgress]);

  const triggerRef = useRef(null);
  // const sectionProgress = useTransform(scrollYProgress, [0, 0.57], [0, 1]);
  const [animation, setAnimation] = useState("idle2");

  const animationState = useTransform(scrollYProgress, (value) => {
    if (value < 0.05) return "idle2";
    if (value < 0.1) return "WalkStanding";
    if (value < 0.5) return "Run";
    if (value < 0.75) return "AttackTackle";
    return "Faint";
  });

  useMotionValueEvent(animationState, "change", (latest) => {
    setAnimation(latest);
  });

  const position = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      new THREE.Vector3(0, -1.5, 3.5), // 매우 가까이
      new THREE.Vector3(0, 0, -5), // 멀어짐
      new THREE.Vector3(-2, 0, 0), // 왼쪽으로 이동
      new THREE.Vector3(-2, 0, 0), // 오른쪽으로 이동
      new THREE.Vector3(2, 0, 0), // 마지막 위치 유지
    ]
  );

  return (
    <>
      <Canvas>
        <ambientLight intensity={1.2} />
        <directionalLight position={[1, 2, 3]} intensity={1} />
        <Model animation={currentAnimation} scale={2.5} position={[0, -2.5, 0]} />
      </Canvas>
    </>
  )
}

export default Character
