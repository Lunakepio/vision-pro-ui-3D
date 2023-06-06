import { Canvas, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef, useState, useTransition } from "react";

import { Model } from "./Apple_vision_pro";
import {
  AccumulativeShadows,
  RandomizedLight,
  Center,
  Environment,
  OrbitControls,
  Stage,
  useGLTF,
  Float,
  ScrollControls,
  PresentationControls,
  MeshReflectorMaterial,
  Html,
  PerspectiveCamera,
} from "@react-three/drei";

import { useControls } from "leva";
import { ModelTwo } from "./Apple_vision_pro_2023";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { EffectComposer, N8AO, SSR, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import "./globals.scss";

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

  function Camera(){
    const ref = useRef();

    useEffect(() => {
      ref.current.updateProjectionMatrix();
      window.addEventListener("deviceorientation", (e) => {
        ref.current.rotation.y = e.gamma * 0.1;
        ref.current.rotation.x = e.beta * 0.1;
        }
        );

    }, []);
    return(
      <PerspectiveCamera ref={ref} makeDefault position={[0, 2, 40]} fov={90} />
    )
  }

  let yearStart = 2011;
  return (
    <div className="App" style={{ width: "100%", height: "100vh" }}>
      <div className="" style={{ width: "100vw", height: "100vh" }}>
        <Canvas
        >
          {/* 
            <ScrollControls pages={3}>

              <ModelTwo position={[0, 0.25, 0]} scale={10}/>

            </ScrollControls> */}
            <Camera />
          <Html transform>
            <div className="photos">
              {[...Array(12)].map((e, i) => {
                yearStart++;
                let id = Math.floor(Math.random() * 1000);
                return (
                  <div className="photo" key={i}>
                    <p>{yearStart}</p>
                    <img
                      src={`https://picsum.photos/seed/${id}/200/113`}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </Html>
          <Html transform position={[0, -11.8,4]}>
            <div className="container">
              <button className="selected">Years</button>
              <button>Months</button>
              <button>Days</button>
              <button>All Photos</button>
            </div>
          </Html>
          {/* <OrbitControls enableZoom={false} /> */}
          {/* <EffectComposer>
            <SSR />
            <N8AO />
          </EffectComposer> */}
          <Env />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
