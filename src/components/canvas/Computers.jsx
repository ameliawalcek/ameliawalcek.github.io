import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useDeviceDetect } from "../../utils/useDeviceDetect";

import CanvasLoader from "../Loader";
import { useHoverDetect } from "../../utils/useHoverDetect";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const { setHovered } = useHoverDetect();
  const { isMobile } = useDeviceDetect();
  const myMesh = useRef();

  useFrame(() => {
    myMesh.current.rotation.y += 0.002;
  });

  return (
    <mesh
      onPointerOver={() => !isMobile && setHovered(true)}
      onPointerOut={() => !isMobile && setHovered(false)}
      ref={myMesh}
    >
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -3, -1.9] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => (
  <Canvas
    frameloop="always"
    shadows
    dpr={[1, 2]}
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Computers />
    </Suspense>

    <Preload all />
  </Canvas>
);

export default ComputersCanvas;
