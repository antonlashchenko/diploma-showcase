// Шлях: app/item/[productId]/page.js
"use client";

import { useParams } from 'next/navigation';
import { useCart } from '../../../context/CartContext';
import ARViewer from '../../../components/ARViewer';
import Header from '../../../components/Header';
import { useState } from 'react'; // 'useEffect' нам більше не потрібен

// ↓↓ КРОК 1: ІМПОРТУЄМО ВАШУ ВЛАСНУ ФУНКЦІЮ ПОШУКУ ↓↓
import { getProductById } from '../../../lib/data';

// "БД" для AR-моделей нам більше не потрібна,
// оскільки шлях до моделі тепер у 'product.arModel'

export default function ProductPage() {
  const params = useParams(); 
  const id = params.productId;
  
  const { addToCart } = useCart();
  const [_, setSelectedCategory] = useState("Всі");

  // ↓↓ КРОК 2: ПРИБИРАЄМО 'useEffect' і 'fetch' ↓↓
  // Просто отримуємо товар прямо з нашого файлу
  const product = getProductById(id);
  // 'isLoading' нам більше не потрібен

  if (!product) {
    return (
      <>
        <Header onSelectCategory={setSelectedCategory} />
        <p className="p-10 text-center text-red-500">Товар не знайдено.</p>
      </>
    );
  }
  
  // ↓↓ КРОК 3: ЛОГІКА AR ТЕПЕР БЕРЕТЬСЯ З ТОВАРУ ↓↓
  const modelSrc = product.arModel;
  const showAR = !!modelSrc; // 'true', якщо arModel не порожній

  return (
    <>
      <Header onSelectCategory={setSelectedCategory} />
      
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          <div className="flex flex-col gap-6">
            <img src={product.image} alt={product.title} className="w-full h-auto object-cover rounded-lg shadow-lg border p-6" />
            
            {showAR && (
              <ARViewer modelSrc={modelSrc} />
            )}
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>
            <p className="text-gray-500 text-lg mb-4 capitalize">{product.category}</p>
            <p className="text-4xl font-bold text-blue-600 mb-6">${product.price}</p>
            
            <h2 className="text-xl font-semibold mb-2">Опис</h2>
            <p className="text-gray-700 leading-relaxed mb-8">{product.description}</p>
            
            <button 
              onClick={() => addToCart(product)}
              className="w-full bg-blue-500 text-white p-3 rounded-lg text-lg font-bold hover:bg-blue-700"
            >
              Додати в кошик
            </button>
          </div>
        </div>
      </main>
    </>
  );
}