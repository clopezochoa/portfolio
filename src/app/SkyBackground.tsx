'use client'

import React, { useEffect, useState } from 'react'
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export const CustomGeometryParticles = (props: {count: number}) => {
  const { count } = props;

  const points = useRef(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const distance = 10;
    
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360); 
      const phi = THREE.MathUtils.randFloatSpread(360); 

      let x = distance * Math.sin(theta) * Math.cos(phi)
      let y = distance * Math.sin(theta) * Math.sin(phi);
      let z = distance * Math.cos(theta);

      positions.set([x, y, z], i * 3);
    }

    return positions;
  }, [count]);

  function createCircleTexture(color: string, size: number) {
    var canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    var context = canvas.getContext('2d');
    var texture = new THREE.Texture(canvas);
    var center = size / 2;
    context?.beginPath();
    context?.arc(center, center, size/2, 0, 2 * Math.PI, false);
    context?.closePath();
    if(context) context.fillStyle = color;
    context?.fill();
    texture.needsUpdate = true;
    return texture;
  }

  const [rotation, setRotation] = useState(new THREE.Euler(0,0,0))

  useEffect(() => {
    setInterval(() => setRotation(rotation => new THREE.Euler(
      rotation.x + Math.PI/(360 * 50),
      rotation.y + Math.PI/(360 * 50),
      rotation.z + Math.PI/(360 * 50)
    )),1000/120); 
  }, [])


  return (
    <points rotation={rotation} ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={3}
        sizeAttenuation={false}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        transparent
        map= {createCircleTexture('#E8E8E8', 16)} />
    </points>
  );
};

const SkyBackground = () => {
  const camera = useRef(null);
  const handleHover = (e: any) => {
    if(camera.current) {
      let cam = (camera.current as THREE.PerspectiveCamera);
      let targetX = ( 1 - e.pageX ) * 0.00005;
      let targetY = ( 1 - e.pageY ) * 0.00005;
      cam.rotateX(0.05 * ( targetY - cam.rotation.x ));
      cam.rotateY(0.05 * ( targetX - cam.rotation.y ));
    }
  }

  return (<>
    <div id="canvas-container" style={{position:"absolute", width:"100vw", height:"100vh", WebkitMaskImage: "-webkit-gradient(linear, left 0%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))"}}>
      <Canvas onPointerMove={handleHover} camera={{ manual: true }}>
        <PerspectiveCamera ref={camera} makeDefault />
        <ambientLight intensity={0.5} />
        <CustomGeometryParticles count={5000}/>
      </Canvas>
    </div>
  </>
  );
};


export default SkyBackground;
