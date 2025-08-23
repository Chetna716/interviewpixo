// src/components/TextPlane.tsx
import { VFC } from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei'
import { ThreeEvent, useFrame, useThree } from '@react-three/fiber'
import { Drawer } from './drawer'

type TextPlaneProps = {
  text: [string, string] // [English, Hindi]
  vertexShader: string
  fragmentShader: string
}

export const TextPlane: VFC<TextPlaneProps> = props => {
  const { text, vertexShader, fragmentShader } = props

  // Create two separate textures
  const drawerEn = new Drawer(text[0])
  drawerEn.draw()

  const drawerHi = new Drawer(text[1])
  drawerHi.draw()

  const { aspect } = useThree(({ viewport }) => viewport)

  const shader: THREE.Shader = {
    uniforms: {
      u_textureEn: { value: drawerEn.texture },
      u_textureHi: { value: drawerHi.texture },
      u_mouse: { value: new THREE.Vector2() },
      u_aspect: { value: drawerEn.aspect },
      u_enable: { value: false }
    },
    vertexShader,
    fragmentShader
  }

  const target = new THREE.Vector2()
  useFrame(() => {
    shader.uniforms.u_mouse.value.lerp(target, 0.1)
  })

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    target.copy(e.uv!)
  }

  const handlePointerEnter = (e: ThreeEvent<PointerEvent>) => {
    shader.uniforms.u_mouse.value.copy(e.uv!)
    shader.uniforms.u_enable.value = true
  }

  const handlePointerLeave = () => {
    shader.uniforms.u_enable.value = false
  }

  return (
    <Plane
      args={[2.6, 2.6 / drawerEn.aspect]}
      scale={[1 / aspect, 1, 1]}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <shaderMaterial args={[shader]} transparent />
    </Plane>
  )
}
