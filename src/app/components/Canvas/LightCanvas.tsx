import { Canvas } from '@react-three/fiber'
import { MeshChildren } from '../../interfaces/Mesh'

export default function LightCanvas({ children }: MeshChildren) {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 15]} />
      {children}
    </Canvas>
  )
}
