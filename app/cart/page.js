// Шлях: app/cart/page.js
"use client";

import { useCart } from '../../context/CartContext';
import Header from '../../components/Header';
import { useState } from 'react';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeFromCart, getTotalPrice } = useCart();
  const [_, setSelectedCategory] = useState("Всі");

  return (
    <>
      <Header onSelectCategory={setSelectedCategory} />
      
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Ваш кошик</h1>
        
        {items.length === 0 ? (
          <p className="text-gray-600">Ваш кошик порожній. <Link href="/" className="text-blue-600 hover:underline font-medium">Повернутися до магазину</Link></p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 flex flex-col gap-6">
              {items.map(item => (
                <div key={item.id} className="flex gap-6 bg-white p-4 rounded-lg shadow-sm border items-center">
                  <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
                  <div className="flex-grow">
                    <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                    <p className="text-gray-500 text-sm capitalize">{item.category}</p>
                    <p className="text-lg font-bold text-gray-900 mt-1">${item.price} <span className="text-sm font-normal text-gray-500">x {item.quantity}</span></p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border h-fit">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Разом до оплати</h2>
              <div className="flex justify-between text-lg mb-2 text-gray-700">
                <span>Проміжна сума:</span>
                <span className="font-semibold">${getTotalPrice()}</span>
              </div>
              <div className="flex justify-between text-lg mb-4 text-gray-700">
                <span>Доставка:</span>
                <span className="font-semibold">Безкоштовно</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between text-2xl font-bold text-gray-900 mb-6">
                <span>Всього:</span>
                <span>${getTotalPrice()}</span>
              </div>
              
              <button 
                className="w-full bg-blue-600 text-white p-3 rounded-lg text-lg font-bold hover:bg-blue-700 shadow-lg hover:shadow-blue-300"
                disabled // Кнопка поки неактивна
              >
                Перейти до оплати
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}