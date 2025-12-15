// Шлях: app/page.js
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoryShowcase from '../components/CategoryShowcase';
import FeaturedProducts from '../components/FeaturedProducts';
import PromoBanner from '../components/PromoBanner';
import { getProductsWithImages } from './actions';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Завантажуємо товари та картинки при старті сторінки
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getProductsWithImages();
        setProducts(data);
      } catch (error) {
        console.error("Помилка завантаження товарів:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  return (
    <>
      <Header onSelectCategory={setSelectedCategory} />

      {/* Hero Section */}
      <HeroSection />

      {/* Category Showcase */}
      <CategoryShowcase />

      {/* Featured Products */}
      {!loading && <FeaturedProducts products={products} />}

      {/* Promo Banner */}
      <PromoBanner />

      {/* All Products Section */}
      <main id="all-products" className="container mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {selectedCategory || "Всі товари"}
          </h2>
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Повернутися до всіх товарів
            </button>
          )}
        </div>

        {loading ? (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Завантаження товарів...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link
                href={`/item/${product.id}`}
                key={product.id}
                className="group bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="relative h-56 w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.mainImage}
                    alt={product.title}
                    className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {product.price.toFixed(2)} ₴
                    </p>
                    <span className="text-blue-600 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </>
  );
}