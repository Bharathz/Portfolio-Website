import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Particles } from './Particles'
import { ReactNode } from 'react'

interface SceneProps {
  children?: ReactNode
  enableControls?: boolean
  cameraPosition?: [number, number, number]
}

export function Scene({ 
  children, 
  enableControls = false,
  cameraPosition = [0, 0, 15]
}: SceneProps) {
  return (
    <Canvas 
      style={{ width: '100%', height: '100%' }}
      gl={{ 
        antialias: true, 
        alpha: true,
        powerPreference: 'high-performance'
      }}
      dpr={[1, Math.min(window.devicePixelRatio, 2)]}
    >
      {/* Camera */}
      <PerspectiveCamera 
        makeDefault 
        position={cameraPosition}
        fov={75}
        near={0.1}
        far={1000}
      />
      
      {/* Lighting */}
      <ambientLight intensity={0.4} color="#8b5cf6" />
      <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#ec4899" />
      
      {/* Background particles/stars */}
      <Particles count={800} />
      
      {/* Scene content */}
      {children}
      
      {/* Optional orbit controls */}
      {enableControls && <OrbitControls enableZoom={false} />}
    </Canvas>
  )
}
