"use client";

import { useState, useEffect } from 'react';

// Назва скрипта, який ми шукаємо
const MODEL_VIEWER_SCRIPT_ID = "model-viewer-script";
const MODEL_VIEWER_SCRIPT_SRC = "https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js";

// 1. Компонент тепер приймає 'modelSrc'
export default function ARViewer({ modelSrc }) {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // 2. Логіка завантаження скрипта залишається - вона надійна
    if (!document.getElementById(MODEL_VIEWER_SCRIPT_ID)) {
      const script = document.createElement('script');
      script.id = MODEL_VIEWER_SCRIPT_ID;
      script.type = "module";
      script.src = MODEL_VIEWER_SCRIPT_SRC;
      document.body.appendChild(script);
    }
    setIsClient(true);
  }, []);

  return (
    <div className="w-full h-96 border p-4 bg-gray-100 rounded">
      <h3 className="text-xl font-bold text-center mb-4">Демонстрація AR-примірки</h3>

      {isClient ? (
        <model-viewer
            // 3. Використовуємо 'modelSrc'
            src={modelSrc}
            alt="3D model"
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            shadow-intensity="1"
            auto-rotate
            style={{width: '100%', height: '300px'}}
        >
        </model-viewer>
      ) : (
        <p className="w-full h-[300px] flex items-center justify-center">
          Завантаження 3D-моделі...
        </p>
      )}
    </div>
  );
}