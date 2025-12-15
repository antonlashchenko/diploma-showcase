"use client";

import {
  ChairIcon,
  TableIcon,
  SofaIcon,
  OfficeIcon
} from './CategoryIcons';

const categories = [
  {
    name: "Стільці",
    icon: ChairIcon,
    color: "from-blue-500 to-cyan-500",
    count: "15+"
  },
  {
    name: "Столи",
    icon: TableIcon,
    color: "from-purple-500 to-pink-500",
    count: "8+"
  },
  {
    name: "Дивани",
    icon: SofaIcon,
    color: "from-orange-500 to-red-500",
    count: "6+"
  },
  {
    name: "Офісні меблі",
    icon: OfficeIcon,
    color: "from-green-500 to-emerald-500",
    count: "10+"
  }
];

export default function CategoryShowcase({ onSelectCategory }) {
  const handleCategoryClick = (categoryName) => {
    // Встановлюємо фільтр категорії
    if (onSelectCategory) {
      onSelectCategory(categoryName);
    }

    // Скролимо до секції всіх товарів
    const allProductsSection = document.getElementById('all-products');
    if (allProductsSection) {
      allProductsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="categories" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наші категорії
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Оберіть категорію, щоб знайти ідеальні меблі для вашого простору
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${category.color} p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">
                    {category.count} товарів
                  </p>
                  <span className="text-sm font-semibold text-transparent bg-gradient-to-r bg-clip-text from-blue-600 to-purple-600 group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                    Переглянути →
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
