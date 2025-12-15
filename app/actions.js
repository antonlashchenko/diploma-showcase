"use server";

import fs from 'fs';
import path from 'path';
import { getAllProducts } from '@/lib/data';

// 1. Функція для отримання картинок конкретного товару
export async function getProductImages(id) {
  const imagesDirectory = path.join(process.cwd(), 'public', 'products', id.toString());

  try {
    const filenames = fs.readdirSync(imagesDirectory);

    // Фільтруємо тільки картинки
    const imageFiles = filenames.filter(file => /\.(jpg|jpeg|png|webp|svg)$/i.test(file));

    // СОРТУВАННЯ: Файли зі словом "main" ставимо на початок
    imageFiles.sort((a, b) => {
      const aName = a.toLowerCase();
      const bName = b.toLowerCase();

      // Якщо файл A має "main", він йде раніше (-1)
      if (aName.includes('main') && !bName.includes('main')) return -1;
      // Якщо файл B має "main", він йде раніше (1)
      if (!aName.includes('main') && bName.includes('main')) return 1;

      // Якщо обидва не мають (або обидва мають), сортуємо просто за алфавітом
      return aName.localeCompare(bName);
    });

    // Перетворюємо імена файлів на повні шляхи для сайту
    return imageFiles.map(file => `/products/${id}/${file}`);

  } catch (error) {
    return [];
  }
}

// 2. Функція для отримання всіх товарів для каталогу
export async function getProductsWithImages() {
  const products = getAllProducts();

  const productsWithImages = await Promise.all(products.map(async (product) => {
    const images = await getProductImages(product.id);
    return {
      ...product,
      images: images,
      // Перше фото (яке ми відсортували як 'main') стає головним
      mainImage: images.length > 0 ? images[0] : "/placeholder.png"
    };
  }));

  return productsWithImages;
}