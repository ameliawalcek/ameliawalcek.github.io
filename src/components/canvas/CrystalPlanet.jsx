import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useDeviceDetect } from "../../utils/useDeviceDetect";
import CanvasLoader from "../Loader";
// import * as THREE from "three";

const CrystalPlanet = () => {
  const planet = useGLTF("./planet_hero/scene.gltf");
  const { isMobile } = useDeviceDetect();
  const myMesh = useRef();

  // // Used to visualize the axises
  // const { scene } = useThree(); // Access the three.js scene

  // useEffect(() => {
  //   const axesHelper = new THREE.AxesHelper(5); // Create the axes helper
  //   scene.add(axesHelper); // Add it to the scene

  //   return () => {
  //     scene.remove(axesHelper); // Remove the axes helper when the component unmounts
  //   };
  // }, [scene]);

  useFrame(() => {
    myMesh.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={myMesh}>
      <group position={isMobile ? [1.5, -1.5, 1.1] : [2.2, -1, 1.5]}>
        <primitive
          object={planet.scene}
          scale={isMobile ? 0.6 : 0.8}
          position={isMobile ? [0, -0.3, -0.4] : [0, -1, -0.5]}
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
