"use client";

import { Bounds, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { useInView } from "react-intersection-observer";
import * as THREE from "three";

// Preload el modelo una vez para mejorar la experiencia
useGLTF.preload("/models/iphone16/model-draco.glb");

function Model() {
  const gltf = useGLTF("/models/iphone16/model-draco.glb");
  const modelRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={modelRef} scale={1.4}>
      <primitive object={gltf.scene} />
    </group>
  );
}

export default function ModelCanvas() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="w-full h-[600px] rounded-2xl">
      {inView && (
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          shadows
          gl={{ toneMapping: THREE.ACESFilmicToneMapping }}
        >
          {/* Luces optimizadas */}
          <hemisphereLight intensity={5.7} groundColor="black" />
          <directionalLight position={[5, 5, 5]} intensity={3.5} castShadow />

          <Suspense fallback={null}>
            <Bounds fit clip observe margin={1.2}>
              <Model />
            </Bounds>
          </Suspense>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
      )}
    </div>
  );
}
