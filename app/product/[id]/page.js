// ↓↓ МИ ПРИБРАЛИ 'DYNAMIC' ЗВІДСИ ↓↓
// Тепер ми імпортуємо наш новий компонент-обгортку
import ProductDisplay from '@/components/ProductDisplay';

// --- Функція завантаження даних залишається без змін ---
async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

// Це залишається Серверним Компонентом (це добре!)
export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  // Логіка AR залишається тут
  const AR_MODEL_ID = 10;
  const showAR = (product.id === AR_MODEL_ID);

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Хедер залишається без змін */}
      <header className="w-full p-4 bg-blue-600 text-white shadow-md">
        <a href="/" className="text-2xl font-bold hover:underline">
          &larr; Назад до каталогу
        </a>
      </header>

      {/* ↓↓ ВСЯ ЛОГІКА UI ПЕРЕЇХАЛА СЮДИ ↓↓
        Ми просто "малюємо" наш новий Клієнтський Компонент
        і передаємо йому дані ('props')
      */}
      <ProductDisplay product={product} showAR={showAR} />
      
      {/* Футер залишається без змін */}
      <footer className="w-full p-4 text-center text-gray-500 text-sm mt-auto bg-gray-100">
         © 2025 Антон Лащенко, ДПУ. Демонстрація трендів е-комерції.
      </footer>
    </main>
  );
}