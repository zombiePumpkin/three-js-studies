import { MeshProps } from '@react-three/fiber'
import { usePlane } from '@react-three/cannon'

export default function Plane(props: MeshProps) {
  const [ref] = usePlane(() => ({ ...props }))

  return (
    <mesh ref={ref}>
      <planeGeometry args={[5, 5]} />
      <meshStandardMaterial />
    </mesh>
  )
}
