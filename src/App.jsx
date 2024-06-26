import { Canvas, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef, useState, useTransition } from "react";
import {

  Environment,

  Html,
  PerspectiveCamera,
  DeviceOrientationControls,
  FaceControls,
  FaceLandmarker,
} from "@react-three/drei";

import { useControls } from "leva";

import "./globals.scss";
import { SpatialUI } from "./SpatialUI";
import { Player } from "./Player";
import { SideMenu } from "./SideMenu";

function App() {
  function Env() {
    const [preset, setPreset] = useState("apartment");
    // You can use the "inTransition" boolean to react to the loading in-between state,
    // For instance by showing a message
    const [inTransition, startTransition] = useTransition();
    const { blur } = useControls({
      blur: { value: 0, min: 0, max: 1 },
      preset: {
        value: preset,
        options: [
          "apartment",
          "dawn",
          "night",
          "warehouse",
          "forest",
          "sunset",
          "studio",
          "city",
          "park",
          "lobby",
        ],
        // If onChange is present the value will not be reactive, see https://github.com/pmndrs/leva/blob/main/docs/advanced/controlled-inputs.md#onchange
        // Instead we transition the preset value, which will prevents the suspense bound from triggering its fallback
        // That way we can hang onto the current environment until the new one has finished loading ...
        onChange: (value) => startTransition(() => setPreset(value)),
      },
    });
    return <Environment preset={preset} background blur={blur} />;
  }

  function Camera() {
    const ref = useRef();

    // Vous n'avez pas besoin d'appeler updateProjectionMatrix ici à moins que fov ou d'autres propriétés ne changent
    return (
      <>
        <PerspectiveCamera
          ref={ref}
          makeDefault
          near={0.1}
          far={2000}
          fov={90}
        />
      </>
    );
  }

  let yearStart = 2011;
  const face = useRef();
  useEffect(() => {
    if(face.current){
      console.log(face.current.faceMeshApiRef)
    }
  }, [face])
  return (
    <div className="App" style={{ width: "100%", height: "100vh" }}>
      <div className="" style={{ width: "100vw", height: "100vh" }}>
        <Canvas>
          {/* <ScrollControls pages={3}>

              <ModelTwo position={[0, 0.25, 0]} scale={10}/>

            </ScrollControls> */}

          {/* <OrbitControls enableZoom={false} /> */}
          <FaceLandmarker>
            <FaceControls ref={face} offsetScalar={15} />
            <Env />
            <group position={[0,0, -20]}>
            <Html transform>
            <SpatialUI />
            </Html>
            <Html transform position={[0, -10.5, 5]}>
            <Player />
            </Html>
            <Html transform position={[-17,0,10]}>
            <SideMenu />
            </Html>
            </group>
            <DeviceOrientationControls />
          </FaceLandmarker>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
