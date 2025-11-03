// Шлях: components/Header.js
"use client";

import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { getCategories } from '../lib/data';

export default function Header({ onSelectCategory }) {
  const { itemCount } = useCart();
  const categories = getCategories();

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
      {/* ↓↓ Змінено відступи 'px-4' для мобільних ↓↓ */}
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900 mb-3 sm:mb-0">
          spacia<span className="text-blue-600">.</span>ua
        </Link>
        
        {/* ↓↓ Змінено відступи 'gap-x-4' для мобільних ↓↓ */}
        <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-5 gap-y-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className="text-gray-500 hover:text-blue-600 capitalize text-sm font-medium tracking-wide"
            >
              {category} 
            </button>
          ))}
        </div>

        <Link href="/cart" className="relative mt-3 sm:mt-0">
          <svg className="w-6 h-6 text-gray-600 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {itemCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}