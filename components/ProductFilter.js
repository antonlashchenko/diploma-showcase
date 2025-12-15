"use client";

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { getCategories } from '@/lib/data';

export default function ProductFilter({ initialProducts, showCategoryFilter = true, initialCategory = '' }) {
    const [products, setProducts] = useState(initialProducts);
    const [filteredProducts, setFilteredProducts] = useState(initialProducts);

    // Filter states
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });

    // Categories for dropdown
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (showCategoryFilter) {
            setCategories(getCategories());
        }
    }, [showCategoryFilter]);

    useEffect(() => {
        let result = initialProducts;

        // Apply Category Filter
        if (showCategoryFilter && selectedCategory) {
            result = result.filter(p => p.category === selectedCategory);
        }

        // Apply Price Filter
        if (priceRange.min !== '') {
            result = result.filter(p => p.price >= Number(priceRange.min));
        }
        if (priceRange.max !== '') {
            result = result.filter(p => p.price <= Number(priceRange.max));
        }

        setFilteredProducts(result);
    }, [selectedCategory, priceRange, initialProducts, showCategoryFilter]);

    return (
        <div>
            {/* Filter Bar */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
                <div className="flex flex-col md:flex-row gap-6 items-end md:items-center justify-between">

                    <div className="flex flex-col md:flex-row gap-6 flex-grow">
                        {/* Category Dropdown */}
                        {showCategoryFilter && (
                            <div className="w-full md:w-64">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Категорія
                                </label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                >
                                    <option value="">Всі категорії</option>
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {/* Price Range */}
                        <div className="flex-grow">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Ціна (грн)
                            </label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    placeholder="Від"
                                    value={priceRange.min}
                                    onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                                    className="w-full md:w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                />
                                <span className="text-gray-400">-</span>
                                <input
                                    type="number"
                                    placeholder="До"
                                    value={priceRange.max}
                                    onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                                    className="w-full md:w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="text-gray-500 text-sm font-medium">
                        Знайдено: {filteredProducts.length}
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 rounded-2xl">
                    <p className="text-gray-500 text-lg">Товарів за вибраними критеріями не знайдено.</p>
                    <button
                        onClick={() => {
                            setSelectedCategory('');
                            setPriceRange({ min: '', max: '' });
                        }}
                        className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                    >
                        Скинути фільтри
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}
