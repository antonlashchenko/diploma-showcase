// Шлях: app/item/[productId]/page.js
"use client";

import { useParams } from 'next/navigation';
import { useCart } from '../../../context/CartContext';
import ARViewer from '../../../components/ARViewer';
import Header from '../../../components/Header';
import { useState } from 'react';
import { getProductById } from '../../../lib/data';

export default function ProductPage() {
  const params = useParams(); 
  const id = params.productId;
  
  const { addToCart } = useCart();
  const [_, setSelectedCategory] = useState("Всі");
  const product = getProductById(id);

  if (!product) {
    return (
      <>
        <Header onSelectCategory={setSelectedCategory} />
        <p className="p-10 text-center text-red-500">Товар не знайдено.</p>
      </>
    );
  }
  
  const modelSrc = product.arModel;
  const showAR = !!modelSrc;

  return (
    <>
      <Header onSelectCategory={setSelectedCategory} />
      
      <main className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl mx-auto">
          
          <div className="flex flex-col gap-6">
            {/* ↓↓ ЗМІНА ТUT ↓↓ */}
            {/* Змінили object-cover на object-contain і додали padding */}
            <div className="bg-white rounded-lg shadow-lg border overflow-hidden p-6">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-auto max-h-[500px] object-contain" 
              />
            </div>
            {/* ↑↑ КІНЕЦЬ ЗМІНИ ↑↑ */}

            {showAR && (
              <ARViewer modelSrc={modelSrc} />
            )}
          </div>
          
          <div className="flex flex-col">
            <p className="text-blue-600 font-semibold mb-2 capitalize">{product.category}</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
            <p className="text-3xl sm:text-4xl font-light text-gray-800 mb-6">{product.price.toFixed(2)} ₴</p>
            
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Опис</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>
            
            <button 
              onClick={() => addToCart(product)}
              className="w-full bg-blue-600 text-white p-4 rounded-lg text-base font-bold hover:bg-blue-700 shadow-lg hover:shadow-blue-300 transition-all"
            >
              Додати в кошик
            </button>
          </div>
        </div>
      </main>
    </>
  );
}