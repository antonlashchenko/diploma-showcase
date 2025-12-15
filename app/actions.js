"use server";

import fs from 'fs';
import path from 'path';
import { getAllProducts } from '@/lib/data'; // Переконайтеся, що шлях правильний

// 1. Функція для отримання картинок конкретного товару
export async function getProductImages(id) {
  const imagesDirectory = path.join(process.cwd(), 'public', 'products', id.toString());
  
  try {
    const filenames = fs.readdirSync(imagesDirectory);
    return filenames
      .filter(file => /\.(jpg|jpeg|png|webp|svg)$/i.test(file))
      .map(file => `/products/${id}/${file}`);
  } catch (error) {
    return []; 
  }
}

// 2. Функція для отримання всіх товарів ВЖЕ з картинками (САМЕ ВОНА ВИКЛИКАЛА ПОМИЛКУ)
export async function getProductsWithImages() {
  const products = getAllProducts();
  
  const productsWithImages = await Promise.all(products.map(async (product) => {
    const images = await getProductImages(product.id);
    return {
      ...product,
      images: images,
      // Якщо картинок немає, ставимо заглушку
      mainImage: images.length > 0 ? images[0] : "/placeholder.png"
    };
  }));

  return productsWithImages;
}