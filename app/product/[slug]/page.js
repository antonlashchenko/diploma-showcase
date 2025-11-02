// Шлях: app/product/[slug]/page.js
// Це Серверний Компонент

// 1. БЕЗПЕЧНО імпортуємо дані (з 'fs')
import { getProductById, getCategories } from '../../../lib/data';
import ProductView from '../../../components/ProductView';

export default function ProductPage({ params }) {
  
  // 2. БЕЗПЕЧНО отримуємо продукт І категорії на сервері
  const product = getProductById(params.slug);
  const categories = getCategories();

  if (!product) {
     return (
       <main className="flex min-h-screen flex-col items-center">
         <header className="w-full p-4 bg-blue-600 text-white shadow-md">
          <a href="/" className="text-2xl font-bold hover:underline">
            &larr; Назад до каталогу
          </a>
        </header>
        <p className="p-10 text-center text-red-500">Товар не знайдено. (SLUG: {params.slug})</p>
      </main>
    );
  }

  // 3. Передаємо продукт І категорії у Клієнтський Компонент
  return (
    <ProductView product={product} categories={categories} />
  );
}