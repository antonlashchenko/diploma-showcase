// Шлях: app/cart/page.js
"use client";

import { useCart } from '../../context/CartContext';
import Header from '../../components/Header';
import { useState } from 'react';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeFromCart, getTotalPrice } = useCart();
  // Ми передаємо функцію-заглушку в Хедер, оскільки фільтрація тут не потрібна
  const [_, setSelectedCategory] = useState("Всі"); 

  return (
    <>
      <Header onSelectCategory={setSelectedCategory} />
      
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Ваш кошик</h1>
        
        {items.length === 0 ? (
          <p className="text-gray-600">Ваш кошик порожній. <Link href="/" className="text-blue-500 hover:underline">Повернутися до магазину</Link></p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 flex flex-col gap-6">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 bg-white p-4 rounded-lg shadow-md items-center">
                  <img src={item.image} alt={item.title} className="w-24 h-24 object-contain rounded" />
                  <div className="flex-grow">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className_id="text-gray-500 text-sm capitalize">{item.category}</p>
                    <p className="text-lg font-bold text-blue-600 mt-1">${item.price}</p>
                    <p className="text-sm">Кількість: {item.quantity}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Видалити
                  </button>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md h-fit">
              <h2 className="text-2xl font-semibold mb-4">Разом до оплати</h2>
              <div className="flex justify-between text-2xl font-bold mb-6">
                <span>Всього:</span>
                <span>${getTotalPrice()}</span>
              </div>
              
              <button 
                className="w-full bg-green-500 text-white p-3 rounded-lg text-lg font-bold opacity-50 cursor-not-allowed"
                disabled
              >
                Перейти до оплати (WIP)
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}