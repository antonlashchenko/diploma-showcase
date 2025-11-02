"use client"; 

// 1. Імпортуємо 'dynamic'
import dynamic from 'next/dynamic';

// 2. ЗНОВУ додаємо динамічний імпорт з 'ssr: false'
// Ми використовуємо відносний шлях './ARViewer', який є надійним
const ARViewer = dynamic(() => import('./ARViewer'), {
  ssr: false, 
  loading: () => <p className="w-full h-96 border p-4 bg-gray-100 rounded text-center">Завантаження 3D-моделі...</p>
});

// Решта компоненту
export default function ProductDisplay({ product, showAR }) {
  return (
    <div className="w-full max-w-4xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Ліва колонка: Картинка та (можливо) AR */}
      <div className="flex flex-col gap-4">
        <img src={product.image} alt={product.title} className="w-full h-auto object-contain rounded border p-4" />
        
        {/* Умовний рендеринг динамічно імпортованого компоненту */}
        {showAR && (
          <ARViewer />
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