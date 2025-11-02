// Шлях: app/item/[productId]/page.js
"use client";

import { useParams } from 'next/navigation';
import { useCart } from '../../context/CartContext';
import ARViewer from '../../components/ARViewer';
import Header from '../../components/Header';
import { useState, useEffect } from 'react';

// "БД" для наших AR-моделей
const arModels = {
  // Тут ID товару з FakeStoreAPI : шлях до моделі
  "1": "/fjc_watch.glb", // Це товар 'Fjallraven ... Backpack'
  "10": "/office_chair.glb", // Це 'SanDisk SSD PLUS 1TB'
  // Додайте сюди ID інших товарів та шляхи до .glb файлів
};

export default function ProductPage() {
  const params = useParams(); // Отримуємо { productId: '1' }
  const id = params.productId;
  
  const { addToCart } = useCart();
  const [_, setSelectedCategory] = useState("Всі");
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Завантажуємо ОДИН товар
  useEffect(() => {
    async function fetchProduct() {
      if (!id) return;
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (isLoading) {
    return (
      <>
        <Header onSelectCategory={setSelectedCategory} />
        <p className="p-10 text-center">Завантаження товару...</p>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header onSelectCategory={setSelectedCategory} />
        <p className="p-10 text-center text-red-500">Товар не знайдено.</p>
      </>
    );
  }
  
  // Перевіряємо, чи є для цього ID AR-модель
  const modelSrc = arModels[product.id];
  const showAR = !!modelSrc;

  return (
    <>
      <Header onSelectCategory={setSelectedCategory} />
      
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          <div className="flex flex-col gap-6">
            <img src={product.image} alt={product.title} className="w-full h-auto object-contain rounded-lg shadow-lg border p-6" />
            
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