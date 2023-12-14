import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function AnimatedBox() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    // console.log("animated");
    meshRef.current?.rotateX(0.02);
    meshRef.current?.rotateY(0.02);
  });

  return (
    <mesh scale={[0.5, 0.5, 0.5]} ref={meshRef}>
      <boxGeometry args={[2, 3, 2]} />
      <meshStandardMaterial />
    </mesh>
  );
}
