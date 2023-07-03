import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Preload,
  useTexture,
  PerspectiveCamera,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
import { useDeviceDetect } from "../../utils/useDeviceDetect";
import { useHoverDetect } from "../../utils/useHoverDetect";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const { setHovered } = useHoverDetect();

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={6}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        castShadow
        receiveShadow
        scale={1.2}
      >
        <boxGeometry args={[4.7, 4.7, 4.7]} />
        <meshStandardMaterial
          color="#fff8eb"
          flatShading={true}
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const { isMobile } = useDeviceDetect();

  return (
    <Canvas
      frameloop="always"
      dpr={isMobile ? [0.5, 1] : [1, 5]}
      gl={{ preserveDrawingBuffer: false }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[5, 3, 10]} />
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
