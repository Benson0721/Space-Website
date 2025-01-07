import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "three-stdlib";

const Planet = ({ planetTexture }) => {
  const planetRef = useRef();
  const { camera, gl, scene } = useThree();

  useEffect(() => {
    // 清理舊的球體
    if (planetRef.current) {
      scene.remove(planetRef.current);
    }

    // 設置新球體
    const controls = new OrbitControls(camera, gl.domElement);
    controls.enableDamping = true; // 開啟阻尼效果
    controls.dampingFactor = 1.5; // 阻尼因子
    controls.screenSpacePanning = false; // 禁用平移
    controls.enableZoom = false; // 禁用縮放

    const geometry = new THREE.SphereGeometry(2.5, 100, 100);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(planetTexture);
    const material = new THREE.MeshStandardMaterial({ map: texture });
    const planet = new THREE.Mesh(geometry, material);
    planetRef.current = planet;
    scene.add(planet); // Add the planet to the scene

    // 清理函數
    return () => {
      scene.remove(planet);
      planetRef.current = null;
    };
  }, [camera, gl, planetTexture, scene]);

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.001; // Rotate the planet for better visualization
    }
  });

  return null;
};

const PlanetCanvas = ({ planetTexture }) => {
  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <Planet planetTexture={planetTexture} receiveShadow castShadow />
    </Canvas>
  );
};

export default PlanetCanvas;
