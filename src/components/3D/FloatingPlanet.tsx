import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface FloatingPlanetProps {
  size?: number
  color?: string
  position?: [number, number, number]
}

export function FloatingPlanet({ 
  size = 2, 
  color = "#8b5cf6",
  position = [0, 0, 0]
}: FloatingPlanetProps) {
  const mesh = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (mesh.current) {
      // Rotate planet
      mesh.current.rotation.x += 0.001
      mesh.current.rotation.y += 0.002
      
      // Subtle floating animation
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }
  })
  
  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[size, 64, 64]} />
      <meshPhongMaterial 
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        shininess={100}
        wireframe={false}
      />
    </mesh>
  )
}
