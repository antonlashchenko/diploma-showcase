"use client";

import Link from 'next/link';
import Image from 'next/image';

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
                        <Link
                            href={`/item/${product.id}`}
                            key={product.id}
                            className="group bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="relative h-56 w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                                <Image
                                    src={product.mainImage}
                                    alt={product.title}
                                    width={300}
                                    height={300}
                                    className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                                />
                                {/* Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Content */}
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
