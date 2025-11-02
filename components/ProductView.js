// Шлях: components/ProductView.js
"use client";

import { useCart } from '../context/CartContext';
import ARViewer from './ARViewer'; 
import Header from './Header'; 
import { useState } from 'react';

// 1. Отримуємо 'product' ТА 'categories'
export default function ProductView({ product, categories }) {
  const { addToCart } = useCart();
  
  const [_, setSelectedCategory] = useState("Всі");
  
  const showAR = !!product.arModel;

  return (
    <>
      {/* 2. Передаємо 'categories' у Хедер */}
      <Header 
        categories={categories} 
        onSelectCategory={setSelectedCategory} 
      />
      
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          <div className="flex flex-col gap-6">
            <img src={product.image} alt={product.title} className="w-full h-auto object-cover rounded-lg shadow-lg border" />
            
            {showAR && (
              <ARViewer modelSrc={product.arModel} />
            )}
          </div>
          
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