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


    </>
  );
}