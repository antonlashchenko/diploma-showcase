// Ми імпортуємо наш клієнтський компонент, як і раніше
import ProductDisplay from '@/components/ProductDisplay';

// ↓↓ КРОК 1: МИ "ВИМИКАЄМО" API ↓↓
/*
async function getProduct(id) {
  // ТИМЧАСОВО НЕ ВИКОРИСТОВУЄМО FETCH
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
*/

export default async function ProductPage({ params }) {
  
  // ↓↓ КРОК 2: СТВОРЮЄМО "ФАЛЬШИВИЙ" ТОВАР ↓↓
  // Ми ігноруємо params.id і просто створюємо об'єкт товару
  const product = {
    id: 10, // Ми знаємо, що для ID 10 у нас є AR-модель
    title: "Тестовий продукт (Заглушка)",
    price: 99.99,
    category: "Тестова категорія",
    description: "Це опис для тестового продукту. Ми використовуємо його, щоб перевірити, чи працює сторінка без звернення до зовнішнього API.",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" // Використовуємо будь-яку картинку
  };
  
  // (Ми прибрали 'await getProduct(params.id)')

  // Логіка AR залишається
  const AR_MODEL_ID = 10;
  const showAR = (product.id === AR_MODEL_ID);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <header className="w-full p-4 bg-blue-600 text-white shadow-md">
        <a href="/" className="text-2xl font-bold hover:underline">
          &larr; Назад до каталогу
        </a>
      </header>

      {/* Ми передаємо наш "фальшивий" товар у компонент */}
      <ProductDisplay product={product} showAR={showAR} />
      
      <footer className="w-full p-4 text-center text-gray-500 text-sm mt-auto bg-gray-100">
         © 2025 Антон Лащенко, ДПУ. Демонстрація трендів е-комерції.
      </footer>
    </main>
  );
}