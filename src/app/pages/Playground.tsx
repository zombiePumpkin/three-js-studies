// Dependencies
import { useRef, useState } from 'react'
import { Canvas, MeshProps, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

interface MeshChildren {
  children: JSX.Element[]
}

function Spin({ children }: MeshChildren) {
  const ref = useRef<MeshProps>()

  useFrame(() => {
    if (ref && ref.current) ref.current.rotation.x += 0.01
  })

  return <group ref={ref}>{children}</group>
}

function Cube(props: MeshProps) {
  const [active, setActive] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <mesh
      {...props}
      scale={hovered ? [1.2, 1.2, 1.2] : [1, 1, 1]}
      onClick={() => setActive((e) => !e)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry />
      <meshStandardMaterial color={active ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function Playground() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 15]} />
      <OrbitControls />
      <Spin>
        <Cube position={[1.5, 1, 1]} />
        <Cube position={[-0.05, -0.5, -1]} />
        <Cube position={[-1.5, 1, 1]} />
      </Spin>
    </Canvas>
  )
}
