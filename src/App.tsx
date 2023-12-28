import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import Ground from "./components/Ground";
import Light from "./components/Light";
import Bamboo from "./components/Bamboo";

function App() {
  const testing = true;

  return (
    <div className="container">
      <Canvas shadows>
        {testing && <Stats />}
        {testing && <axesHelper args={[2]} />}
        {testing && <gridHelper args={[10, 10]} />}

        <OrbitControls />

        <Bamboo />
        <Bamboo />

        <Ground />
        <Light />
      </Canvas>
    </div>
  );
}

export default App;
