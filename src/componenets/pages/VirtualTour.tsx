import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// A simple 3D Box for demonstration (replace with your 3D model)
const Box = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color={"orange"} />
  </mesh>
);

const VirtualTour3D: React.FC = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Virtual 3D Tour</h2>
      <Canvas style={{ height: "500px" }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default VirtualTour3D;
