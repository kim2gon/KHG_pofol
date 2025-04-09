import { Canvas } from '@react-three/fiber'
import Model from '../assets/models/M_2'
import { Mesh } from 'three';


const Character = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={1.2} />
        <directionalLight position={[1, 2, 3]} intensity={1} />
        <Model scale={2.5} position={[0, -2.5, 0]} />
      </Canvas>
    </>
  )
}

export default Character
