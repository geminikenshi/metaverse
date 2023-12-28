import { useTexture } from "@react-three/drei";

const TexturedSpheres = () => {
  const map = useTexture(
    "./textures/corrugated_iron_02_1k/textures/corrugated_iron_02_diff_1k.png"
  );
  const roughnessMap = useTexture(
    "./textures/corrugated_iron_02_1k/textures/corrugated_iron_02_rough_1k.png"
  );
  const normalMap = useTexture(
    "./textures/corrugated_iron_02_1k/textures/corrugated_iron_02_nor_gl_1k.png"
  );

  return (
    <mesh scale={[0.5, 0.5, 0.5]} position={[0, 1, 0]} castShadow>
      <sphereGeometry />
      <meshStandardMaterial
        map={map}
        roughnessMap={roughnessMap}
        normalMap={normalMap}
      />
    </mesh>
  );
};

export default TexturedSpheres;
