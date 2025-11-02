// Ми все ще використовуємо надійні відносні шляхи
import { getProductById } from '../../../lib/data';
import ProductDisplay from '../../../components/ProductDisplay';

// 'params' тепер буде містити { slug: '1' } замість { id: '1' }
export default function ProductPage({ params }) {
  
  // --- БЛОК ДЛЯ НАЛАГОДЖЕННЯ ---
  console.log("--- СТОРІНКА ТОВАРУ [slug] ЗАПУСТИЛАСЬ ---");
  
  // ↓↓ ЗМІНА ТУТ: Використовуємо 'params.slug' ↓↓
  console.log("Отриманий SLUG з URL (params.slug):", params.slug);
  console.log("Тип params.slug:", typeof params.slug);

  // ↓↓ ЗМІНА ТУТ: Передаємо 'params.slug' у функцію пошуку ↓↓
  const product = getProductById(params.slug);

  console.log("Результат пошуку (product):", product);
  // --- КІНЕЦЬ БЛОКУ ДЛЯ НАЛАГОДЖЕННЯ ---


  if (!product) {
    console.log("ПОМИЛКА: Продукт не знайдено.");
    return (
      <main className="flex min-h-screen flex-col items-center">
         <header className="w-full p-4 bg-blue-600 text-white shadow-md">
          <a href="/" className="text-2xl font-bold hover:underline">
            &larr; Назад до каталогу
          </a>
        </header>
        {/* ↓↓ ЗМІНА ТУТ: Показуємо 'params.slug' для налагодження ↓↓ */}
        <p className="p-10 text-center text-red-500">Товар не знайдено. (SLUG: {params.slug})</p>
      </main>
    );
  }

  console.log("УСПІХ: Продукт знайдено, малюємо сторінку.");
  return (
    <main className="flex min-h-screen flex-col items-center">
      <header className="w-full p-4 bg-blue-600 text-white shadow-md">
        <a href="/" className="text-2xl font-bold hover:underline">
          &larr; Назад до каталогу
        </a>
      </header>

      <ProductDisplay product={product} />

      <footer className="w-full p-4 text-center text-gray-500 text-sm mt-auto bg-gray-100">
         © 2025 Антон Лащенко, ДПУ. Демонстрація трендів е-комерції.
      </footer>
    </main>
  );
}