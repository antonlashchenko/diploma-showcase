"use client";

import dynamic from 'next/dynamic';

// 1. Ми ДИНАМІЧНО завантажуємо ARViewer
// Це 100% безпечний спосіб, який ми використовували раніше
const ARViewer = dynamic(() => import('./ARViewer'), {
  ssr: false, // <-- Кажемо "не рендерити на сервері"
  loading: () => <p className="w-full h-96 border p-4 bg-gray-100 rounded text-center">Завантаження 3D-моделі...</p>
});

// 2. Компонент отримує 'product' від серверної сторінки
export default function ProductDisplay({ product }) {

  // 3. Логіка "показувати AR" тепер дуже проста:
  // чи є у товару 'arModel'?
  const showAR = !!product.arModel; // '!!' перетворює на true/false

  return (
    <div className="w-full max-w-4xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8">

      <div className="flex flex-col gap-4">
        {/* Використовуємо картинку з нашого 'product' */}
        <img src={product.image} alt={product.title} className="w-full h-auto object-cover rounded border p-4" />

        {/* 4. Якщо showAR=true, малюємо ARViewer
            і передаємо йому шлях до моделі
        */}
        {showAR && (
          <ARViewer modelSrc={product.arModel} />
        )}
      </div>

      {/* Права колонка: Опис */}
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-600 mb-4 capitalize">{product.category}</p>
        <p className="text-3xl font-bold text-blue-600 mb-6">${product.price}</p>
        <h2 className="text-xl font-semibold mb-2">Опис</h2>
        <p className="text-gray-700 leading-relaxed">{product.description}</p>

        <button className="mt-8 w-full bg-blue-500 text-white p-3 rounded-lg text-lg font-bold hover:bg-blue-700">
          Додати в кошик
        </button>
      </div>

    </div>
  );
}