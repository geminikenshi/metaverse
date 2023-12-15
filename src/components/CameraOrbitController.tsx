import { useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { useEffect } from "react";

export default function CameraOrbitController() {
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    return () => {
      controls.dispose();
    };
  }, [camera, gl]);

  return null;
}
