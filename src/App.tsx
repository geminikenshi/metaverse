import "./App.css";
import { Canvas } from "@react-three/fiber";
import AnimatedBox from "./components/AnimatedBox";
import { OrbitControls, Stats } from "@react-three/drei";

function App() {
  const testing = true;

  return (
    <div className="container">
      <Canvas>
        {testing && <Stats />}
        {testing && <axesHelper args={[2]} />}
        {testing && <gridHelper args={[10, 10]} />}

        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight color="Cyan" position={[0, 5, 5]} />
        <AnimatedBox isTesting={testing} />
      </Canvas>
    </div>
  );
}

export default App;
