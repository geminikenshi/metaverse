import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats, useTexture } from "@react-three/drei";
import Ground from "./components/Ground";
import Light from "./components/Light";

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

function App() {
  const testing = true;

  return (
    <div className="container">
      <Canvas shadows>
        {testing && <Stats />}
        {testing && <axesHelper args={[2]} />}
        {testing && <gridHelper args={[10, 10]} />}

        <OrbitControls />

        <TexturedSpheres />

        <Ground />
        <Light />
      </Canvas>
    </div>
  );
}

export default App;
