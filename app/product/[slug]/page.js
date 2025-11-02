// Шлях: app/product/[slug]/page.js
// НЕМАЄ "use client" - це Серверний Компонент

// 1. БЕЗПЕЧНО імпортуємо дані (з 'fs')
import { getProductById } from '../../../lib/data';
// 2. Імпортуємо наш НОВИЙ клієнтський компонент
import ProductView from '../../../components/ProductView'; 

export default function ProductPage({ params }) {
  
  // 3. БЕЗПЕЧНО отримуємо продукт на сервері
  const product = getProductById(params.slug);

  // 4. Якщо товар не знайдено
  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center">
        {/* Ми не можемо показати Хедер тут, бо він клієнтський,
            але можемо показати посилання "Назад" */}
         <header className="w-full p-4 bg-blue-600 text-white shadow-md">
          <a href="/" className="text-2xl font-bold hover:underline">
            &larr; Назад до каталогу
          </a>
        </header>
        <p className="p-10 text-center text-red-500">Товар не знайдено. (SLUG: {params.slug})</p>
      </main>
    );
  }

  // 5. Передаємо продукт у Клієнтський Компонент
  return (
    <ProductView product={product} />
  );
}