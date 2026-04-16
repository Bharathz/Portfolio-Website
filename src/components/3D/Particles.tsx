import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ParticlesProps {
  count?: number
}

export function Particles({ count = 1000 }: ParticlesProps) {
  const mesh = useRef<THREE.Points>(null)
  
  // Create particle positions and colors
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count * 3; i += 3) {
      // Random position in a sphere
      const x = (Math.random() - 0.5) * 200
      const y = (Math.random() - 0.5) * 200
      const z = (Math.random() - 0.5) * 200
      
      positions[i] = x
      positions[i + 1] = y
      positions[i + 2] = z
      
      // Color variation (white with slight blue tint)
      const intensity = Math.random() * 0.5 + 0.5
      colors[i] = intensity
      colors[i + 1] = intensity
      colors[i + 2] = intensity * 1.2
    }
    
    return { positions, colors }
  }, [count])
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.00008
      mesh.current.rotation.y += 0.00012
    }
  })
  
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.7} sizeAttenuation depthWrite={false} vertexColors />
    </points>
  )
}
