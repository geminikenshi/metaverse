import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useHelper } from "@react-three/drei";
import { BoxHelper } from "three";

type Props = {
  isTesting: boolean;
};

const AnimatedBox: React.FC<Props> = ({ isTesting }) => {
  const meshRef = useRef<THREE.Mesh>();
  {
    isTesting && useHelper(meshRef, BoxHelper, "brown");
  }

  useFrame(() => {
    // console.log("animated");
    meshRef.current?.rotateX(0.02);
  });

  return (
    <mesh scale={[0.5, 0.5, 0.5]} ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default AnimatedBox;
