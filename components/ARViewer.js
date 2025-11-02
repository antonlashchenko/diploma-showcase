"use client";

// 1. Ми НЕ імпортуємо 'Script' з 'next/script'
import { useState, useEffect } from 'react';

// Назва скрипта, який ми шукаємо
const MODEL_VIEWER_SCRIPT_ID = "model-viewer-script";
const MODEL_VIEWER_SCRIPT_SRC = "https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js";

export default function ARViewer() {
  
  // 'isClient' - наш "захисник" від сервера
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // 2. Коли компонент "оживає" у браузері:
    // Перевіряємо, чи скрипт ВЖЕ не завантажений
    if (!document.getElementById(MODEL_VIEWER_SCRIPT_ID)) {
      // Створюємо новий тег <script>
      const script = document.createElement('script');
      script.id = MODEL_VIEWER_SCRIPT_ID;
      script.type = "module";
      script.src = MODEL_VIEWER_SCRIPT_SRC;
      
      // Додаємо скрипт до <body>
      document.body.appendChild(script);
    }

    // Кажемо компоненту, що тепер безпечно малювати
    setIsClient(true);
  }, []); // Пустий масив = виконати один раз

  // 3. Логіка "захисту"
  return (
    <div className="w-full h-96 border p-4 bg-gray-100 rounded">
      <h3 className="text-xl font-bold text-center mb-4">Демонстрація AR-примірки</h3>
      
      {/* Сервер (де isClient = false) побачить тільки <p>Завантаження...</p>
        Браузер (де isClient = true) побачить <model-viewer>
      */}
      {isClient ? (
        <model-viewer
            src="/office_chair.glb"
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
        // Це "безпечна" заглушка, яку сервер може малювати
        <p className="w-full h-[300px] flex items-center justify-center">
          Завантаження 3D-моделі...
        </p>
      )}
    </div>
  );
}