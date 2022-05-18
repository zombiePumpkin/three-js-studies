import { useRef } from 'react'
import { useFrame, MeshProps } from '@react-three/fiber'
import { MeshChildren } from '../../../interfaces/Mesh'

export default function Spin({ children }: MeshChildren) {
  const ref = useRef<MeshProps>()

  useFrame(() => {
    if (ref && ref.current) ref.current.rotation.x += 0.01
  })

  return <group ref={ref}>{children}</group>
}
