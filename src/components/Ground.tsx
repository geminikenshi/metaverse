const Ground = () => {
  return (
    <mesh rotation-x={Math.PI * -0.5} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color={"#afff8a"} />
    </mesh>
  );
};
export default Ground;
