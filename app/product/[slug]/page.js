// Шлях: app/product/[slug]/page.js
"use client";

import { useParams } from 'next/navigation'; // Хук для отримання slug
import { getProductById } from '../../lib/data'; // Наші дані
import { useCart } from '../../context/CartContext'; // Наш кошик
import ARViewer from '../../components/ARViewer'; // Наш AR
import Header from '../../components/Header'; // Хедер потрібен і тут
import { useState } from 'react';

export default function ProductPage() {
  const params = useParams(); // Отримуємо { slug: '1' }
  const { addToCart } = useCart();
  
  // Цей стан тут потрібен, щоб Хедер працював, але ми ним не керуємо
  const [_, setSelectedCategory] = useState("Всі");
  
  const product = getProductById(params.slug);

  if (!product) {
    return (
      <>
        <Header onSelectCategory={setSelectedCategory} />
        <p className="p-10 text-center text-red-500">Товар не знайдено.</p>
      </>
    );
  }
  
  // Перевіряємо, чи є AR-модель
  const showAR = !!product.arModel;

  return (
    <>
      <Header onSelectCategory={setSelectedCategory} />
      
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Ліва колонка: Картинка та AR */}
          <div className="flex flex-col gap-6">
            <img src={product.image} alt={product.title} className="w-full h-auto object-cover rounded-lg shadow-lg border" />
            
            {/* "Розумний" AR-блок */}
            {showAR && (
              <ARViewer modelSrc={product.arModel} />
            )}
          </div>
          
          {/* Права колонка: Опис */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>
            <p className="text-gray-500 text-lg mb-4">{product.category}</p>
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