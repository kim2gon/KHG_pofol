import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Model from '../assets/models/M_2'

const Character = () => {
  return (
    <Canvas camera={{ position: [0, 1.5, 3], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} intensity={1} />
      <Environment preset="sunset" />
      
      <Model scale={1.5} position={[0, 0, 0]} />

      <OrbitControls />
    </Canvas>
  )
}

export default Character
