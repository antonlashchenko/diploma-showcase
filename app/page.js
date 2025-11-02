// Шлях: app/page.js
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Всі");
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Завантажуємо всі товари з FakeStoreAPI
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Фільтруємо товари
  const filteredProducts = selectedCategory === "Всі"
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory);
  
  return (
    <>
      <Header onSelectCategory={setSelectedCategory} />
      
      <main className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 capitalize">
          {selectedCategory}
        </h2>
        
        {isLoading ? (
          <p className="text-center">Завантаження товарів...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src={product.image} alt={product.title} className="h-48 w-full object-contain p-4" />
                
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h3>
                  <p className="text-gray-500 text-sm capitalize">{product.category}</p>
                  <p className="text-xl font-bold text-blue-600 mt-2">${product.price}</p>
                  
                  {/* Використовуємо 'item' та 'product.id' */}
                  <Link 
                    href={`/item/${product.id}`} 
                    className="mt-4 text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
                  >
                    Детальніше
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}