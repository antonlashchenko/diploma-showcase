"use client";

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoryShowcase from '../components/CategoryShowcase';
import FeaturedProducts from '../components/FeaturedProducts';
import PromoBanner from '../components/PromoBanner';
import ProductCard from '@/components/ProductCard';
import { getProductsWithImages } from './actions';

export default function Home() {
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

  return (
    <>
      <Header />

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
            Всі товари
          </h2>
        </div>

        {loading ? (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Завантаження товарів...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}