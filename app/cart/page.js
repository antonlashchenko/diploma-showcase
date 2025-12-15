// Шлях: app/cart/page.js
"use client";

import { useCart } from '../../context/CartContext';
import Header from '../../components/Header';
import { useState } from 'react';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const [_, setSelectedCategory] = useState("Всі");

  return (
    <>
      <Header onSelectCategory={setSelectedCategory} />

      <main className="container mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Ваш кошик</h1>

        {items.length === 0 ? (
          <p className="text-gray-600">Ваш кошик порожній. <Link href="/" className="text-blue-600 hover:underline font-medium">Повернутися до магазину</Link></p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

            <div className="lg:col-span-2 flex flex-col gap-6">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm border items-center">

                  {/* ↓↓ ЗМІНА ТУТ ↓↓ */}
                  {/* Змінили object-cover на object-contain */}
                  <img
                    src={item.images ? item.images[0] : "/placeholder.png"}
                    alt={item.title}
                    className="w-24 h-24 object-contain rounded"
                  />
                  {/* ↑↑ КІНЕЦЬ ЗМІНИ ↑↑ */}

                  <div className="flex-grow">
                    <h2 className="text-base sm:text-lg font-semibold text-gray-800">{item.title}</h2>
                    <p className="text-gray-500 text-sm capitalize">{item.category}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-lg"
                        >
                          -
                        </button>
                        <span className="px-2 font-medium text-gray-900 min-w-[30px] text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-lg"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-lg font-bold text-gray-900 ml-2">{(item.price * item.quantity).toFixed(2)} ₴</p>
                    </div>
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

            {/* Checkout Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border h-fit">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Разом до оплати</h2>
              {(() => {
                const subtotal = parseFloat(getTotalPrice());
                const shippingCost = subtotal >= 15000 ? 0 : 500;
                const total = subtotal + shippingCost;

                return (
                  <>
                    <div className="flex justify-between text-base sm:text-lg mb-2 text-gray-700">
                      <span>Проміжна сума:</span>
                      <span className="font-semibold">{subtotal.toFixed(2)} ₴</span>
                    </div>
                    <div className="flex justify-between text-base sm:text-lg mb-4 text-gray-700">
                      <span>Доставка:</span>
                      <span className={shippingCost === 0 ? "text-green-600 font-semibold" : "font-semibold"}>
                        {shippingCost === 0 ? "Безкоштовно" : `${shippingCost.toFixed(2)} ₴`}
                      </span>
                    </div>

                    {shippingCost > 0 && (
                      <p className="text-sm text-blue-600 mb-4 bg-blue-50 p-2 rounded">
                        Додайте товарів ще на {(15000 - subtotal).toFixed(2)} ₴ для безкоштовної доставки!
                      </p>
                    )}

                    <hr className="my-4" />
                    <div className="flex justify-between text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                      <span>Всього:</span>
                      <span>{total.toFixed(2)} ₴</span>
                    </div>
                  </>
                );
              })()}

              <button
                className="w-full bg-blue-600 text-white p-3 rounded-lg text-lg font-bold hover:bg-blue-700 shadow-lg hover:shadow-blue-300 transition-all"
                disabled
              >
                Перейти до оплати
              </button>

              <Link
                href="/products"
                className="mt-6 block text-center text-sm text-gray-400 hover:text-blue-600 underline decoration-dotted transition-colors"
              >
                + обрати додатковий товар
              </Link>
            </div>
          </div>
        )}
      </main>
    </>
  );
}