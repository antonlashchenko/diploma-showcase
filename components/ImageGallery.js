"use client";
import { useState, useEffect } from "react";

const ImageGallery = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Скидаємо індекс на 0, якщо масив картинок змінився
  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
        Немає зображень
      </div>
    );
  }

  // Функції для гортання
  const nextImage = (e) => {
    e?.stopPropagation(); // Щоб не відкривалась модалка при кліку на стрілку
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="flex flex-col gap-4 select-none">
        {/* ГОЛОВНЕ ФОТО */}
        <div 
          className="group relative bg-white rounded-xl shadow-sm border overflow-hidden h-[400px] md:h-[500px] flex items-center justify-center cursor-zoom-in"
          onClick={() => setIsModalOpen(true)}
        >
          <img 
            src={images[currentIndex]} 
            alt={`${title} view`} 
            className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105" 
          />

          {/* Стрілки навігації (тільки якщо більше 1 фото) */}
          {images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </>
          )}

          <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-md">
            Клікніть для збільшення
          </div>
        </div>

        {/* МІНІАТЮРИ */}
        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all p-1 bg-white
                  ${currentIndex === index ? "border-blue-600 ring-2 ring-blue-100" : "border-gray-200 hover:border-gray-400"}
                `}
              >
                <img 
                  src={img} 
                  alt={`Thumbnail ${index}`} 
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* MODAL (LIGHTBOX) - ВІКНО НА ВЕСЬ ЕКРАН */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Кнопка закрити */}
          <button 
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>

          {/* Велике фото */}
          <div className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center">
            <img 
              src={images[currentIndex]} 
              alt="Full screen view" 
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()} // Клік по фото не закриває модалку
            />

             {/* Стрілки у модалці */}
             {images.length > 1 && (
              <>
                <button 
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </>
            )}
          </div>
          
          {/* Індикатор сторінки */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;