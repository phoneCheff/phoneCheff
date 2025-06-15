"use client";

import { createDracoLoader } from "@/components/DracoLoaderConfig";
import { Bounds, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { useInView } from "react-intersection-observer";
import * as THREE from "three";

function Model() {
  const modelRef = useRef<THREE.Group>(null);

  // Preload (sin loader especial aquí, lo hacemos abajo)
  const gltf = useGLTF(
    "/models/iphone16/model-draco.glb",
    undefined,
    false,
    (loader) => {
      // @ts-expect-error: loader type no coincide perfectamente
      loader.setDRACOLoader(createDracoLoader());
    }
  );

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
