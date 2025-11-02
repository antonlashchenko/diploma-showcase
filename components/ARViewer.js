"use client"; // Це "магічний" рядок, який вирішує нашу проблему

// Ми просто перенесли сюди JSX-код для AR
export default function ARViewer() {
  return (
    <div className="w-full h-96 border p-4 bg-gray-100 rounded">
      <h3 className="text-xl font-bold text-center mb-4">Демонстрація AR-примірки</h3>
      <model-viewer
          src="/office_chair.glb" // Наш стілець
          alt="3D model"
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          shadow-intensity="1"
          auto-rotate
          style={{width: '100%', height: '300px'}}
      >
      </model-viewer>
    </div>
  );
}