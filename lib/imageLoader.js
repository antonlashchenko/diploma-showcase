import fs from 'fs';
import path from 'path';

export function getImagesForProductId(id) {
  // Шлях до папки з картинками конкретного товару
  const imagesDirectory = path.join(process.cwd(), 'public', 'products', id.toString());
  
  try {
    // Читаємо всі файли в папці
    const filenames = fs.readdirSync(imagesDirectory);
    
    // Фільтруємо сміттєві файли (наприклад, .DS_Store на Mac) і повертаємо правильні шляхи
    return filenames
      .filter(file => /\.(jpg|jpeg|png|webp|svg)$/i.test(file)) // Тільки картинки
      .map(file => `/products/${id}/${file}`); // Формуємо готовий шлях для сайту
  } catch (error) {
    // Якщо папки немає або вона пуста, повертаємо пустий масив (або заглушку)
    // console.log(`No images found for product ${id}`);
    return [];
  }
}