// Шлях: app/page.js
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import { getAllProducts } from '../lib/data'; 

export default function Home() {
  // ↓↓ ЗМІНА ТУТ: Початковий стан тепер 'null' ↓↓
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const allProducts = getAllProducts();
  
  // ↓↓ ЗМІНА ТУТ: Логіка фільтрації оновлена ↓↓
  // Якщо 'selectedCategory' не обрано (null), показуємо всі товари
  const filteredProducts = selectedCategory
    ? allProducts.filter(p => p.category === selectedCategory)
    : allProducts;
  
  return (
    <>
      <Header onSelectCategory={setSelectedCategory} />
      
      <main className="container mx-auto px-4 sm:px-6 py-12">
        {/* ↓↓ ЗМІНА ТУТ: Заголовок тепер 'Всі товари' або назва категорії ↓↓ */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          {selectedCategory || "Всі товари"}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            
            <Link 
              href={`/item/${product.id}`} 
              key={product.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl group"
            >
              <div className="h-48 w-full flex items-center justify-center p-4">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="h-full w-full object-contain" 
                  onError={(e) => { e.target.src = 'https://placehold.co/600x400/eeeeee/aaaaaa?text=No+Image'; }}
                />
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h3>
                <p className="text-gray-500 text-sm capitalize">{product.category}</p>
                <p className="text-xl font-bold text-gray-900 mt-2 mb-4">{product.price.toFixed(2)} ₴</p>
                
                <span 
                  className="mt-auto text-center bg-white text-blue-600 border border-gray-300 py-2 px-4 rounded-lg font-medium group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all"
                >
                  Детальніше
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}