import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

const textureLoader = new THREE.TextureLoader();

const techList = [
  { name: "Python", color: "#3776ab" },
  { name: "Django", color: "#092e20" },
  { name: "FastAPI", color: "#05998b" },
  { name: "WebSockets", color: "#010101" },
  { name: "Docker", color: "#2496ed" },
  { name: "AWS", color: "#ff9900" },
  { name: "Redis", color: "#d82c20" },
  { name: "Celery", color: "#37814a" },
  { name: "Postman", color: "#ff6c37" },
  { name: "Swagger", color: "#85ea2d" },
  { name: "LangChain", color: "#1c3c3c" },
  { name: "OpenAI", color: "#412991" },
  { name: "Claude", color: "#d97757" },
  { name: "RAG", color: "#2d3436" },
  { name: "Agents", color: "#6c5ce7" },
  { name: "HuggingFace", color: "#ffd21e" },
  { name: "n8n", color: "#ff6d5a" },
  { name: "Make.com", color: "#6c5ce7" },
  { name: "Zapier", color: "#ff4f00" },
  { name: "ManyChat", color: "#0084ff" },
  { name: "VAPI", color: "#000000" },
  { name: "Retell AI", color: "#1a1a1a" },
  { name: "Twilio", color: "#f22f46" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "MongoDB", color: "#47a248" },
  { name: "Pinecone", color: "#2d3436" },
  { name: "NumPy", color: "#013243" },
  { name: "Pandas", color: "#150458" },
  { name: "Kafka", color: "#231f20" },
  { name: "Elastic", color: "#005571" },
  { name: "GitHub", color: "#181717" },
];

const createTextTexture = (text: string, color: string) => {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const context = canvas.getContext("2d");
  if (!context) return null;

  // Background
  context.fillStyle = color || "#1a1a1a";
  context.fillRect(0, 0, 512, 512);

  // Text
  context.font = "bold 80px Geist, sans-serif";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = "#ffffff";

  // Wrap text
  const words = text.split(" ");
  if (words.length > 1) {
    words.forEach((word, i) => {
      context.fillText(word, 256, 256 - (words.length - 1) * 45 + i * 90);
    });
  } else {
    // If single word is too long, shrink it
    if (text.length > 8) context.font = "bold 65px Geist, sans-serif";
    context.fillText(text, 256, 256);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

const sphereGeometry = new THREE.SphereGeometry(1, 14, 14);

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const translation = api.current!.translation();
    const target = new THREE.Vector3(0, -2.5, 0); // Attract slightly below center
    const impulse = vec
      .copy(translation)
      .sub(target)
      .normalize()
      .multiply(
        new THREE.Vector3(
          -55 * delta * scale,
          -165 * delta * scale,
          -55 * delta * scale
        )
      );

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.8}
      angularDamping={0.2}
      friction={0.3}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.1 * scale, 0.25 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.15
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2.5]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const element = document.getElementById("work");
      if (element) {
        const threshold = element.getBoundingClientRect().top;
        setIsActive(scrollY > threshold);
      }
    };
    document.querySelectorAll(".header a").forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", () => {
        const interval = setInterval(() => {
          handleScroll();
        }, 50);
        setTimeout(() => {
          clearInterval(interval);
        }, 1500);
      });
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const materials = useMemo(() => {
    return (techList as any[]).map((tech) => {
      let texture;
      if (tech.icon) {
        texture = textureLoader.load(tech.icon);
      } else {
        texture = createTextTexture(tech.name, tech.color || "#333");
      }

      return new THREE.MeshPhysicalMaterial({
        map: texture,
        emissive: "#ffffff",
        emissiveMap: texture,
        emissiveIntensity: 0.15,
        metalness: 0.6,
        roughness: 0.4,
        clearcoat: 0.8,
        clearcoatRoughness: 0.2,
      });
    });
  }, []);

  const spheres = useMemo(() => {
    return techList.map((_, i) => ({
      scale: 0.75 + Math.random() * 0.45,
      materialIndex: i,
    }));
  }, []);

  return (
    <div className="techstack">
      <h2>My Techstack</h2>

      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{ alpha: true, stencil: false, antialias: false, powerPreference: "high-performance" }}
        camera={{ position: [0, 2, 25], fov: 35, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.2)}
        className="tech-canvas"
      >
        <ambientLight intensity={1.2} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[0, 5, -4]} intensity={1.5} />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {spheres.map((props, i) => (
            <SphereGeo
              key={i}
              scale={props.scale}
              material={materials[props.materialIndex]}
              isActive={isActive}
            />
          ))}
        </Physics>
        <Environment preset="night" />
        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0f002c" aoRadius={2.5} intensity={2} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;
