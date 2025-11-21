// Шлях: components/ProductView.js
"use client";

import { useCart } from '../context/CartContext';
import ARViewer from './ARViewer'; 
import Header from './Header'; 
import { useState } from 'react';

export default function ProductView({ product, categories }) {
  const { addToCart } = useCart();
  const [_, setSelectedCategory] = useState("Всі");
  
  // Стан для вибраного фото (за замовчуванням - перше)
  // Перевірка: якщо images існує, беремо перше, інакше заглушка
  const [mainImage, setMainImage] = useState(product.images ? product.images[0] : "/placeholder.png");
  
  const showAR = !!product.arModel;

  return (
    <>
      <Header categories={categories} onSelectCategory={setSelectedCategory} />
      
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* ЛІВА КОЛОНКА: ГАЛЕРЕЯ + AR */}
          <div className="flex flex-col gap-6">
            
            {/* Головне фото */}
            <div className="bg-white rounded-lg shadow-lg border overflow-hidden p-4 h-[400px] flex items-center justify-center">
              <img 
                src={mainImage} 
                alt={product.title} 
                className="w-full h-full object-contain" 
              />
            </div>

            {/* Мініатюри (Тільки якщо фотографій більше однієї) */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(img)}
                    className={`border-2 rounded-lg overflow-hidden w-20 h-20 flex-shrink-0 ${mainImage === img ? 'border-blue-600' : 'border-gray-200'}`}
                  >
                    <img src={img} alt={`View ${index}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
            
            {/* AR Блок */}
            {showAR && (
              <ARViewer modelSrc={product.arModel} />
            )}
          </div>
          
          {/* ПРАВА КОЛОНКА: ІНФО */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>
            <p className="text-gray-500 text-lg mb-4 capitalize">{product.category}</p>
            <p className="text-4xl font-bold text-blue-600 mb-6">${product.price}</p>
            
            <h2 className="text-xl font-semibold mb-2">Опис</h2>
            {/* Відображаємо повний опис */}
            <p className="text-gray-700 leading-relaxed mb-8 whitespace-pre-line">
              {product.description}
            </p>
            
            <button 
              onClick={() => addToCart(product)}
              className="w-full bg-blue-500 text-white p-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition-all"
            >
              Додати в кошик
            </button>
          </div>
        </div>
      </main>
    </>
  );
}