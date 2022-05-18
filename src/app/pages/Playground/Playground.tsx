// Dependencies
import LightCanvas from '../../components/Canvas/LightCanvas'
import { OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/cannon'

// Components
import Cube from './Cube/Cube'
// import Spin from './Spin/Spin'
import Plane from './Plane/Plane'

export default function Playground() {
  return (
    <LightCanvas>
      <OrbitControls />

      {/* <Spin>
        <Cube position={[1.5, 1, 1]} />
        <Cube position={[-0.05, -0.5, -1]} />
        <Cube position={[-1.5, 1, 1]} />
      </Spin> */}

      <Physics>
        <Cube position={[1.5, 1, 1]} rotation={[-0.4, -10, -5]} />
        <Cube position={[-0.05, -0.5, -1]} rotation={[10.4, 14, 2]} />
        <Cube position={[-1.5, 1, 1]} rotation={[0.4, 10, 5]} />
        <Plane rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} />
      </Physics>
    </LightCanvas>
  )
}
