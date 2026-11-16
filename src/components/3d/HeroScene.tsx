'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function AbstractGeometry() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const wireframeRef = useRef<THREE.LineSegments>(null!);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      // Normalize pointer coordinates to [-1, 1]
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setPointer({ x, y });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Smooth continuous auto-rotation
    meshRef.current.rotation.x += delta * 0.25;
    meshRef.current.rotation.y += delta * 0.35;

    // Gentle reaction to pointer position
    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      pointer.x * 0.3,
      0.05
    );
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      pointer.y * 0.3,
      0.05
    );

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.15;
      wireframeRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.8}>
      <group>
        {/* Core faceted jewel */}
        <mesh ref={meshRef} scale={1.8}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#2563EB"
            roughness={0.2}
            metalness={0.8}
            wireframe={false}
          />
        </mesh>

        {/* Outer orbital wireframe structure */}
        <lineSegments ref={wireframeRef} scale={2.4}>
          <edgesGeometry args={[new THREE.IcosahedronGeometry(1, 0)]} />
          <lineBasicMaterial color="#60A5FA" transparent opacity={0.35} />
        </lineSegments>
      </group>
    </Float>
  );
}

export default function HeroScene() {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return null;
  }

  return (
    <div
      tabIndex={-1}
      aria-hidden="true"
      className="relative h-full w-full select-none"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
        style={{ pointerEvents: 'none' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={2} color="#3B82F6" />
        <AbstractGeometry />
      </Canvas>
    </div>
  );
}

