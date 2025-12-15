// Шлях: components/ImageGallery.js
"use client";
import { useState, useEffect } from "react";

const ImageGallery = ({ images, title }) => {
  const [activeImage, setActiveImage] = useState(null);

  // Коли завантажуються нові images, ставимо перше як активне
  useEffect(() => {
    if (images && images.length > 0) {
      setActiveImage(images[0]);
    }
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
        Немає зображень
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Головне велике фото */}
      <div className="bg-white rounded-lg shadow-lg border overflow-hidden p-6 relative h-[500px] flex items-center justify-center">
        <img 
          src={activeImage || images[0]} 
          alt={title}
          className="w-full h-full object-contain transition-all duration-300" 
        />
      </div>

      {/* Мініатюри (тільки якщо більше 1 фото) */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(img)}
              className={`relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all p-1 bg-white
                ${activeImage === img ? "border-blue-600 ring-2 ring-blue-100" : "border-gray-200 hover:border-gray-400"}
              `}
            >
              <img 
                src={img} 
                alt={`${title} ${index}`} 
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;