"use client";

import Link from 'next/link';
import ProductCard from './ProductCard';

export default function FeaturedProducts({ products }) {
    // Показуємо перші 8 товарів як рекомендовані
    const featuredProducts = products.slice(0, 8);

    return (
        <section id="featured" className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Рекомендовані товари
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Найпопулярніші меблі для вашого офісу та дому
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link
                        href="/products"
                        className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        Переглянути всі товари
                    </Link>
                </div>
            </div>
        </section>
    );
}
