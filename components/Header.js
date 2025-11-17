// Шлях: components/Header.js
"use client";

import { useState } from 'react'; // <-- Імпортуємо useState для меню
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { getCategories } from '../lib/data';

export default function Header({ onSelectCategory }) {
  const { itemCount } = useCart();
  const categories = getCategories();
  
  // 1. Стан для відстеження відкритого/закритого мобільного меню
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2. Функція для обробки кліку по категорії в мобільному меню
  const handleCategoryClick = (category) => {
    onSelectCategory(category); // Встановлюємо категорію
    setIsMenuOpen(false); // Закриваємо меню
  };

  return (
    <>
      <header className="w-full bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          
          {/* 3. Кнопка "Гамбургер" (тільки на мобільних) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(true)} // Відкриває меню
              className="text-gray-600 hover:text-blue-600"
              aria-label="Відкрити меню"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* 4. Логотип (тепер це посилання на головну) */}
          <Link href="/" className="text-2xl font-bold text-gray-900 mx-auto md:mx-0">
            spacia<span className="text-blue-600">.</span>ua
          </Link>
          
          {/* 5. Меню Категорій (тільки на десктопі) */}
          <div className="hidden md:flex flex-wrap justify-center gap-x-5 gap-y-2">
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

          {/* 6. Іконка Кошика (залишається праворуч) */}
          <Link href="/cart" className="relative">
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

      {/* 7. ВИЇЖДЖАЮЧЕ МОБІЛЬНЕ МЕНЮ */}
      {/* Затемнення фону */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      {/* Саме меню */}
      <div 
        className={`fixed top-0 left-0 w-3/4 max-w-sm h-full bg-white shadow-xl z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-4">
          {/* Кнопка "Закрити" (Х) всередині меню */}
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-500 hover:text-gray-800"
            aria-label="Закрити меню"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          
          {/* Список категорій в меню */}
          <nav className="mt-8 flex flex-col gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="text-gray-800 hover:bg-blue-50 capitalize text-lg font-medium p-3 rounded-lg text-left"
              >
                {category} 
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}