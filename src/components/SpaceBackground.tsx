import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

const Loader = () => (
  <div style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#7aa2f7',
    fontSize: 24,
    zIndex: 10,
    pointerEvents: 'none',
  }}>
    Loading 3D Space...
  </div>
);

function Grid() {
  // @ts-ignore
  return <gridHelper args={[100, 20, '#7aa2f7', '#7aa2f7']} />;
}

const SpaceBackground = () => {
  return (
    <div style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
      pointerEvents: 'none',
    }}>
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 0, 50], fov: 50 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={2} />
          <directionalLight position={[5, 10, 7]} intensity={2} />
          <pointLight position={[0, 10, 10]} intensity={2} />
          <Grid />
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default SpaceBackground; 