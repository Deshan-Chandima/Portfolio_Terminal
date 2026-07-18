"use client";

import * as THREE from "three";
import { useEffect, useRef, useState, useMemo } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import type { ThreeEvent } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
} from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  type RapierRigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import "@/public/css/IdentityComp.css";

extend({ MeshLineGeometry, MeshLineMaterial });
useGLTF.preload("/models/card.glb");
useTexture.preload("/images/Mirror.JPG");

type LerpedBody = RapierRigidBody & { lerped?: THREE.Vector3 };

interface GLTFCardResult {
  nodes: Record<string, THREE.Mesh>;
  materials: Record<string, THREE.MeshStandardMaterial>;
}

export default function Tag() {
  return (
    <div
      className="identity-container"
      style={{ height: "100%", width: "100%", position: "relative", backgroundColor: "#000" }}
    >
      <Canvas
        camera={{ position: [0, 0, 13], fov: 25 }}
        style={{ touchAction: "none", background: "#000" }}
        gl={{ alpha: false }}
        onCreated={({ gl, scene }) => {
          gl.setClearColor(0x000000, 1);
          scene.background = new THREE.Color(0x000000);
          scene.environment = null;
        }}
      >
        <ambientLight intensity={5} />
        <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
          <Band />
        </Physics>
      <Environment environmentIntensity={0} background={false}>
        <Lightformer
          intensity={4}
          color="white"
          position={[0, -1, 5]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={6}
          color="white"
          position={[-1, -1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={6}
          color="white"
          position={[1, 1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={18}
          color="white"
          position={[-10, 0, 14]}
          rotation={[0, Math.PI / 2, Math.PI / 3]}
          scale={[100, 10, 1]}
        />
      </Environment>
      </Canvas>
      <div
        className="interaction-label"
        role="complementary"
        aria-label="Motivational quote"
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        "It works on my machine..." 🤷‍♂️
      </div>
    </div>
  );
}

function Band({ maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef<THREE.Mesh>(null!);
  const fixed = useRef<RapierRigidBody>(null!);
  const j1 = useRef<LerpedBody>(null!);
  const j2 = useRef<LerpedBody>(null!);
  const j3 = useRef<RapierRigidBody>(null!);
  const card = useRef<RapierRigidBody>(null!);
  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();
  
  const segmentProps = {
    type: "dynamic" as const,
    canSleep: true,
    colliders: false as const,
    angularDamping: 2,
    linearDamping: 2,
  };
  
  const { nodes, materials } = useGLTF("/models/card.glb") as unknown as GLTFCardResult;
  const deshanTexture = useTexture("/images/Mirror.JPG");

  // Dynamically generate the lanyard stripe texture with "Deshan" text
  const lanyardTexture = useMemo(() => {
    if (typeof document === 'undefined') return null; // Handle SSR
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#111111"; // Dark background
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ffffff"; // White text
      ctx.font = "bold 50px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      // Added spaces between letters so it's not crowded on the stripe
      ctx.fillText("D E S H A N", canvas.width / 2, canvas.height / 2);
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.anisotropy = 16;
    return tex;
  }, []);

  // Generate the card texture layout dynamically
  const cardCanvasTex = useMemo(() => {
    if (deshanTexture && deshanTexture.image) {
      const canvas = document.createElement("canvas");
      canvas.width = 1024;
      canvas.height = 1024;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // 1. Fill entire canvas with dark background
      ctx.fillStyle = "#09090b";
      ctx.fillRect(0, 0, 1024, 1024);

      // --- COUNTERACT 3D MESH VERTICAL STRETCH ---
      // The card mesh is scaled from 2.25 to 2.7 vertically (a 1.2x stretch).
      // We scale the canvas drawing context down by 1/1.2 so everything draws squished,
      // and when the 3D model stretches it, it looks perfectly normal!
      ctx.save();
      const stretchFactor = 2.7 / 2.25; // 1.2
      ctx.scale(1, 1 / stretchFactor);

      // The 3D model maps the LEFT HALF (0 to 512) to the FRONT of the card
      const frontWidth = 512;
      // Because we scaled Y down, our effective virtual drawing height increases by the stretch factor
      const frontMappedHeight = 768 * stretchFactor; 
      
      const imgTargetHeight = frontMappedHeight * 0.75; // Image takes top 75% of the card

      // 2. Draw Image (Object-fit: contain into the top area)
      const img = deshanTexture.image;
      const imgAspect = img.width / img.height;
      const targetAspect = frontWidth / imgTargetHeight;

      let dw = frontWidth;
      let dh = imgTargetHeight;
      let dx = 0;
      let dy = 0;

      if (imgAspect > targetAspect) {
        dh = frontWidth / imgAspect;
        dy = (imgTargetHeight - dh) / 2;
      } else {
        dw = imgTargetHeight * imgAspect;
        dx = (frontWidth - dw) / 2;
      }
      ctx.drawImage(img, dx, dy, dw, dh);

      // 3. Draw Text (Bottom 25% of the card)
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 45px Inter, sans-serif"; 
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText("Deshan Chandima", 40, imgTargetHeight + 70, 440);

      ctx.fillStyle = "#d4d4d8"; 
      ctx.font = "25px Inter, sans-serif";
      ctx.fillText("Software Engineer Undergraduate", 40, imgTargetHeight + 120, 440);

      ctx.restore();

      // 4. Draw Back of Card (Right half)
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText("Deshan", 768, 512);

      const tex = new THREE.CanvasTexture(canvas);
      tex.flipY = false;
      tex.anisotropy = 16;
      return tex;
    }
    return null;
  }, [deshanTexture]);
  const { width, height } = useThree((state) => state.size);
  const [curve] = useState(() => {
    const c = new THREE.CatmullRomCurve3([
      new THREE.Vector3(1.5, 4, 0),
      new THREE.Vector3(1, 4, 0),
      new THREE.Vector3(0.5, 4, 0),
      new THREE.Vector3(0, 4, 0),
    ]);
    c.curveType = "chordal";
    return c;
  });
  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  // Updated joint Y offset from 1.45 to 1.74 to match the new taller card
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.74, 0]]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => void (document.body.style.cursor = "auto");
    }
  }, [hovered, dragged]);

  useEffect(() => {
    if (band.current?.geometry) {
      (band.current.geometry as MeshLineGeometry).setPoints(curve.getPoints(32));
    }
  }, [curve]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }
    if (
      fixed.current &&
      j1.current &&
      j2.current &&
      j3.current &&
      band.current?.geometry
    ) {
      [j1, j2].forEach((ref) => {
        const body = ref.current;
        if (!body) return;
        if (!body.lerped) {
          body.lerped = new THREE.Vector3().copy(body.translation());
        }
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, body.lerped.distanceTo(body.translation()))
        );
        body.lerped.lerp(
          body.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped!);
      curve.points[2].copy(j1.current.lerped!);
      curve.points[3].copy(fixed.current.translation());
      (band.current.geometry as MeshLineGeometry).setPoints(curve.getPoints(32));
      if (card.current) {
        ang.copy(card.current.angvel());
        rot.copy(card.current.rotation());
        card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z }, true);
      }
    }
  });

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.8, 1.35, 0.01]} />
          <group
            scale={[2.25, 2.7, 2.25]}
            position={[0, -1.44, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: ThreeEvent<PointerEvent>) => {
              (e.target as Element).releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e: ThreeEvent<PointerEvent>) => {
              (e.target as Element).setPointerCapture(e.pointerId);
              if (!card.current) return;
              drag(
                new THREE.Vector3()
                  .copy(e.point)
                  .sub(vec.copy(card.current.translation()))
              );
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={cardCanvasTex || materials.base.map}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.3}
                metalness={0.5}
              />
            </mesh>
            <mesh
              geometry={nodes.clip.geometry}
              material={materials.metal}
              material-roughness={0.3}
            />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band} renderOrder={10}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          depthWrite={false}
          resolution={[width, height]}
          useMap
          map={lanyardTexture || undefined}
          map-wrapS={THREE.RepeatWrapping}
          map-wrapT={THREE.RepeatWrapping}
          repeat={[-3, 1]}
          lineWidth={1.2}
        />
      </mesh>
    </>
  );
}
