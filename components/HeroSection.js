"use client";

import Link from 'next/link';


export default function HeroSection() {
  return (
    <section className="relative min-h-[500px] md:h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-blue-500/90 to-cyan-500/90"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 py-20 md:py-0 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl md:text-6xl font-bold mb-6 md:mb-10 pb-2 md:pb-4 leading-relaxed md:leading-tight">
            Створіть затишок
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent pb-1 md:pb-2">
              у вашому просторі
            </span>
          </h1>
          <p className="text-base md:text-xl mb-6 md:mb-8 text-gray-200">
            Преміальні меблі для дому та офісу. Знайдіть ідеальне поєднання комфорту та стилю.
            Спробуйте AR-перегляд перед покупкою.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#featured"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Переглянути каталог
            </Link>
            <Link
              href="#categories"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/30"
            >
              Категорії
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
