// Ми будемо використовувати відносні шляхи, вони найнадійніші
import { getProductById } from '../../../lib/data';
import ProductDisplay from '../../../components/ProductDisplay';

export default function ProductPage({ params }) {
  
  // --- ПОЧАТОК БЛОКУ ДЛЯ НАЛАГОДЖЕННЯ ---
  console.log("--- СТОРІНКА ТОВАРУ ЗАПУСТИЛАСЯ ---");
  console.log("Отриманий ID з URL (params.id):", params.id);
  console.log("Тип params.id:", typeof params.id);

  const product = getProductById(params.id);

  console.log("Результат пошуку (product):", product); // Подивимося, що знайшла функція
  // --- КІНЕЦЬ БЛОКУ ДЛЯ НАЛАГОДЖЕННЯ ---


  if (!product) {
    // Якщо product тут undefined, ми побачимо це в логах
    console.log("ПОМИЛКА: Продукт не знайдено. Повертаємо сторінку помилки.");
    return (
      <main className="flex min-h-screen flex-col items-center">
         <header className="w-full p-4 bg-blue-600 text-white shadow-md">
          <a href="/" className="text-2xl font-bold hover:underline">
            &larr; Назад до каталогу
          </a>
        </header>
        <p className="p-10 text-center text-red-500">Товар не знайдено. (ID: {params.id})</p>
      </main>
    );
  }

  // Якщо ми дійшли сюди, продукт знайдено
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