// Шлях: components/Header.js
"use client";

import Link from 'next/link';
import { useCart } from '../context/CartContext';

// Категорії (ми їх "захардкодимо", щоб не робити зайвий API-запит)
const categories = ["Всі", "electronics", "jewelery", "men's clothing", "women's clothing"];

export default function Header({ onSelectCategory }) {
  const { itemCount } = useCart();

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-40">
      <nav className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
          MinimalistShop
        </Link>
        
        {/* Меню Категорій */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className="text-gray-600 hover:text-blue-500 capitalize"
            >
              {category === "Всі" ? "Всі" : category}
            </button>
          ))}
        </div>

        {/* Іконка Кошика */}
        <Link href="/cart" className="relative mt-2 sm:mt-0">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}