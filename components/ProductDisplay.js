"use client";

// 1. Імпортуємо 'Script' з 'next/script'
import Script from "next/script";
import { useState, useEffect } from 'react';

export default function ARViewer() {
  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full h-96 border p-4 bg-gray-100 rounded">
      <h3 className="text-xl font-bold text-center mb-4">Демонстрація AR-примірки</h3>
      
      {/* "Захист" useEffect все ще тут, це добре */}
      {isClient ? (
        <>
          {/*
            ↓↓ 2. МИ ДОДАЛИ 'next/script' СЮДИ ↓↓
            Тепер скрипт завантажиться ТІЛЬКИ коли цей
            компонент з'явиться у браузері.
          */}
          <Script 
            type="module" 
            src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"
          />
        
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
        </>
      ) : (
        <p className="w-full h-[300px] flex items-center justify-center">
          Завантаження 3D-моделі...
        </p>
      )}
    </div>
  );
}