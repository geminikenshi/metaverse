import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import Ground from "./components/Ground";
import Light from "./components/Light";
import Bamboos from "./components/Bamboos";
import AnimatedBox from "./components/AnimatedBox";
import TexturedSpheres from "./components/texturedSphere";

function App() {
  const testing = true;

  return (
    <div className="container">
      <Canvas shadows>
        {testing && <Stats />}
        {testing && <axesHelper args={[2]} />}
        {testing && <gridHelper args={[10, 10]} />}

        <OrbitControls />

        <Bamboos boundary={50} count={20} />

        <AnimatedBox isTesting position={[-5, 2, 0]} />
        <TexturedSpheres />

        <Ground />
        <Light />
      </Canvas>
    </div>
  );
}

export default App;
