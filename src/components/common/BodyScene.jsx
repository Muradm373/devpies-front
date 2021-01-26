import React, { Component, useRef, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { useGLTF, OrbitControls, ContactShadows, Environment } from "drei";
import Body from "./Body";

export default function BodyScene(props) {
  return (
    <div style={{ height: "60vh" }}>
      <Canvas concurrent pixelRatio={[1, 2]}>
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={0.3}
          position={[5, 30, 30]}
          angle={0.1}
          penumbra={1}
        />
        <spotLight
          intensity={0.3}
          position={[-5, -30, -30]}
          angle={0.1}
          penumbra={1}
        />
        <Suspense fallback={null}>
          <Body />
          {/* <Environment files="hdr.hdr" /> */}
        </Suspense>
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}
