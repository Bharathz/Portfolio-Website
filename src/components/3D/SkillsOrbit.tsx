import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface SkillsOrbitProps {
  skillCount?: number
}

export function SkillsOrbit({ skillCount = 8 }: SkillsOrbitProps) {
  const groupRef = useRef<THREE.Group>(null)
  
  // Create orb positions
  const orbs = Array.from({ length: skillCount }).map((_, i) => {
    const angle = (i / skillCount) * Math.PI * 2
    const radius = 8
    return {
      x: Math.cos(angle) * radius,
      z: Math.sin(angle) * radius,
      baseAngle: angle,
    }
  })
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })
  
  return (
    <group ref={groupRef}>
      {/* Central core */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial 
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Orbit line */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={skillCount}
            array={new Float32Array(
              orbs.flatMap(orb => [orb.x, 0, orb.z])
            )}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#8b5cf6" transparent opacity={0.3} />
      </line>
      
      {/* Skill orbs */}
      {orbs.map((orb, i) => (
        <mesh key={i} position={[orb.x, 0, orb.z]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshPhongMaterial 
            color={`hsl(${(i / skillCount) * 360}, 100%, 50%)`}
            emissive={`hsl(${(i / skillCount) * 360}, 100%, 50%)`}
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}
    </group>
  )
}
