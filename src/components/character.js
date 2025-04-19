import { Canvas } from '@react-three/fiber'
import Model from '../assets/models/M_2'
import { useState } from 'react'


const Character = () => {
  const [currentAnimation, setCurrentAnimation] = useState('Run')

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
