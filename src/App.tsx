import "./App.css";
import { Canvas } from "@react-three/fiber";
import AnimatedBox from "./components/AnimatedBox";

function App() {
  return (
    <div className="container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="lightgreen" position={[5, 4, 5]} />
        <AnimatedBox />
      </Canvas>
    </div>
  );
}

export default App;
