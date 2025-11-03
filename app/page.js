// Шлях: app/page.js
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import { getAllProducts } from '../lib/data'; 

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Всі");
  
  const allProducts = getAllProducts();
  
  const filteredProducts = selectedCategory === "Всі"
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory);
  
  return (
    <>
      <Header onSelectCategory={setSelectedCategory} />
      
      {/* ↓↓ Змінено відступи 'px-4' для мобільних ↓↓ */}
      <main className="container mx-auto px-4 sm:px-6 py-12">
        {/* ↓↓ Змінено розмір тексту 'text-2xl' для мобільних ↓↓ */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          {selectedCategory}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl group">
              <div className="overflow-hidden h-48">
                <img src={product.image} alt={product.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h3>
                <p className="text-gray-500 text-sm capitalize">{product.category}</p>
                {/* ↓↓ ЗМІНА ВАЛЮТИ ТУТ ↓↓ */}
                <p className="text-xl font-bold text-gray-900 mt-2 mb-4">{product.price.toFixed(2)} ₴</p>
                
                <Link 
                  href={`/item/${product.id}`} 
                  className="mt-auto text-center bg-white text-blue-600 border border-gray-300 py-2 px-4 rounded-lg font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600"
                >
                  Детальніше
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}