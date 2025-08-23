// src/components/TCanvas.tsx
import React, { Suspense, VFC } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { textVertexShader, textFragmentShader } from '../../modules/glsl/shader'
import { Background } from './Background'
import { Lense } from './Lense'
import { TextPlane } from './TextPlane'

export const TCanvas: VFC = () => {
  const OrthographicCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10)

  return (
    <Canvas camera={OrthographicCamera} dpr={window.devicePixelRatio}>
      <Suspense fallback={null}>
        <Background />
        <Lense />
        <TextPlane
          text={['PIXONOIDS', 'पिक्सोनॉइड्स']}
          vertexShader={textVertexShader}
          fragmentShader={textFragmentShader}
        />
      </Suspense>
    </Canvas>
  )
}
