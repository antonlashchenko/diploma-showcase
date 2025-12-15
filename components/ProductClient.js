// Шлях: components/ProductClient.js
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import ARViewer from './ARViewer';
import ImageGallery from './ImageGallery';
import Header from './Header';

export default function ProductClient({ product, initialImages }) {
  const { addToCart } = useCart();
  const [_, setSelectedCategory] = useState("Всі");

  // Якщо товар не знайдено (на випадок помилки)
  if (!product) {
    return (
      <>
        <Header onSelectCategory={setSelectedCategory} />
        <p className="p-10 text-center text-red-500">Товар не знайдено.</p>
      </>
    );
  }

  const modelSrc = product.arModel;
  const showAR = !!modelSrc;

  // Використовуємо перше фото як головне для кошика
  const mainImageForCart = initialImages && initialImages.length > 0 ? initialImages[0] : "/placeholder.png";

  // Функція для переходу на головну з фільтром категорії
  const handleCategoryClick = () => {
    // Зберігаємо категорію в sessionStorage, щоб головна сторінка могла її прочитати
    sessionStorage.setItem('selectedCategory', product.category);
  };

  return (
    <>
      <Header onSelectCategory={setSelectedCategory} />

      <main className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl mx-auto">

          <div className="flex flex-col gap-6">
            {/* ГАЛЕРЕЯ: передаємо картинки, які ми отримали з сервера */}
            <ImageGallery images={initialImages} title={product.title} />

            {showAR && (
              <ARViewer modelSrc={modelSrc} />
            )}
          </div>

          <div className="flex flex-col">
            <Link
              href="/"
              onClick={handleCategoryClick}
              className="text-blue-600 font-semibold mb-2 capitalize hover:text-blue-700 hover:underline w-fit"
            >
              {product.category}
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
            <p className="text-3xl sm:text-4xl font-light text-gray-800 mb-6">{product.price.toFixed(2)} ₴</p>

            <h2 className="text-xl font-semibold text-gray-900 mb-2">Опис</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

            <button
              onClick={() => addToCart({ ...product, image: mainImageForCart })}
              className="w-full bg-blue-600 text-white p-4 rounded-lg text-base font-bold hover:bg-blue-700 shadow-lg hover:shadow-blue-300 transition-all"
            >
              Додати в кошик
            </button>
          </div>
        </div>
      </main>
    </>
  );
}