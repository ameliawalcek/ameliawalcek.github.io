import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useDeviceDetect } from "../../utils/useDeviceDetect";
import CanvasLoader from "../Loader";

const CrystalPlanet = () => {
  const planet = useGLTF("./planet_hero/scene.gltf");
  const { isMobile } = useDeviceDetect();
  const myMesh = useRef();

  useFrame(() => {
      myMesh.current.rotation.y += 0.001;
  });

  return (
    <mesh      ref={myMesh}    >
      <group position={[1, -2, 1]}> 
        <primitive
          object={planet.scene}
          scale={isMobile ? 0.6 : 0.8}
          position={isMobile ? [0, -.3, -.5] : [0, -.5, -1.1]}
        />
      </group>
      <hemisphereLight intensity={1} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />
    </mesh>
  );
};

const CrystalPlanetCanvas = () => (
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
      <CrystalPlanet />
    </Suspense>

    <Preload all />
  </Canvas>
);

export default CrystalPlanetCanvas;
