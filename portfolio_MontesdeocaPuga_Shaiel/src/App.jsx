import "./App.css";
import LightRays from "./components/LightRays";

function App() {
  return (
    <>
      <div className="light-rays-container"  style={{ width: '100%', height: '100%', position: 'relative' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffffff"
          raysSpeed={0.6}
          lightSpread={0.8}
          rayLength={3}
          followMouse={false}
          mouseInfluence={0}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
    </>
  );
}

export default App;
