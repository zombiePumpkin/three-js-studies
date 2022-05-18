import LightCanvas from '../../components/Canvas/LightCanvas'
import { OrbitControls } from '@react-three/drei'

export default function Tutorial() {
  return (
    <LightCanvas>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color='red' />
      </mesh>
    </LightCanvas>
  )
}
