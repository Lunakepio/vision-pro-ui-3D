import React, { useEffect, useRef, useMemo } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ModelTwo(props) {
  const { nodes, materials } = useGLTF('/apple_vision_pro_2023.glb')

  // Supposons que vous ayez une liste de nœuds dans une certaine structure de données. Par exemple, un tableau.
  const nodeKeys = Object.keys(nodes);

  const meshRefs = useMemo(() => nodeKeys.map(() => React.createRef()), [nodeKeys]);

  const ref = useRef();

  const data = useScroll();
  useFrame((state) => {

    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = Math.cos(t / 4) / 8
    ref.current.rotation.y += 0.01;
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
    ref.current.position.y = ((3 + Math.sin(t / 1.5)) / 10 ) * 0.3;
    meshRefs.forEach((meshRef, i) => {
      const mesh = meshRef.current;
      const node = nodes[nodeKeys[i]];
      if (mesh && node) {
        // Ajout d'un facteur d'espacement basé sur l'indice i
        mesh.position.x = data.offset * 3 + (i - meshRefs.length / 2) * data.offset * 0.5;
      }
    });
  })
  return (
    <group {...props} dispose={null}>
      <group ref={ref} scale={0.01}>
        {nodeKeys.map((nodeKey, i) => {
          const node = nodes[nodeKey];
          return (
            <mesh ref={meshRefs[i]} geometry={node.geometry} material={node.material} />
          );
        })}
      </group>
    </group>
  )
}
