// ↓↓ ЗМІНА ТУТ: Замінили '@/' на '../../../lib/data' ↓↓
import { getProductById } from '../../../lib/data';
// ↓↓ ЗМІНА ТУТ: Замінили '@/' на '../../../components/ProductDisplay' ↓↓
import ProductDisplay from '../../../components/ProductDisplay';

// Це Серверний Компонент
export default function ProductPage({ params }) {

  // Отримуємо наш продукт з локального файлу
  const product = getProductById(params.id);

  // Якщо товар не знайдено (наприклад, неправильний ID)
  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center">
         <header className="w-full p-4 bg-blue-600 text-white shadow-md">
          <a href="/" className="text-2xl font-bold hover:underline">
            &larr; Назад до каталогу
          </a>
        </header>
        <p className="p-10 text-center text-red-500">Товар не знайдено.</p>
      </main>
    );
  }

  // Передаємо СПРАВЖНІЙ продукт у Клієнтський Компонент
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