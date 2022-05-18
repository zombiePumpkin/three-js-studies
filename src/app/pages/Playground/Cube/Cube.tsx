import { useState } from 'react'
import { MeshProps } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'
import { useBox } from '@react-three/cannon'

export default function Cube(props: MeshProps) {
  const [ref] = useBox(() => ({ mass: 1, ...props }))

  const [active, setActive] = useState(false)
  const [hovered, setHovered] = useState(false)
  const { color, scale } = useSpring({
    color: active ? 'hotpink' : 'orange',
    scale: hovered ? 1.2 : 1,
  })

  return (
    // TODO - implement correction for the type hierarchy issue
    // @ts-ignore
    <animated.mesh
      ref={ref}
      scale={scale}
      cursor={hovered ? 'pointer' : 'none'}
      onClick={() => setActive((e) => !e)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry />
      <animated.meshStandardMaterial color={color} />
    </animated.mesh>
  )
}
