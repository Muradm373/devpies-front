import React, { Component, useRef, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { useGLTF, OrbitControls, ContactShadows } from "drei";
import Body from "./Body";

export default function BodyScene(props) {
  return (
    <div style={{ height: "60vh" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.3} position={[5, 30, 30]} />
        <spotLight intensity={0.3} position={[-5, -30, -30]} />
        <Suspense fallback={null}>
          <Body />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
