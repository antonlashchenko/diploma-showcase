// ↓↓ ДОДАНО ІМПОРТ КЛІЄНТСЬКОГО КОМПОНЕНТА ↓↓
import ARViewer from "@/components/ARViewer";

// Ця функція буде завантажувати дані ТІЛЬКИ ОДНОГО товару
async function getProduct(id) {
  // Зверніть увагу, як ми використовуємо ID в URL
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

// 'params' - це спеціальний об'єкт, Next.js передає сюди ID з URL
export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  // "РОЗУМНИЙ" AR:
  // Ми "прикинемося", що наш стілець - це товар з ID 10
  // (це "SanDisk SSD PLUS 1TB", але ми просто покажемо стілець для прикладу)
  // Ви можете обрати будь-який ID (1, 2, 3...)
  const AR_MODEL_ID = 10;
  
  // Перевіряємо, чи є ID поточної сторінки тим самим "обраним" ID
  const showAR = (product.id === AR_MODEL_ID);

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Хедер з посиланням назад на головну */}
      <header className="w-full p-4 bg-blue-600 text-white shadow-md">
        <a href="/" className="text-2xl font-bold hover:underline">
          &larr; Назад до каталогу
        </a>
      </header>

      {/* Контент сторінки товару */}
      <div className="w-full max-w-4xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Ліва колонка: Картинка та (можливо) AR */}
        <div className="flex flex-col gap-4">
          <img src={product.image} alt={product.title} className="w-full h-auto object-contain rounded border p-4" />
          
          {/* ↓↓ ОНОВЛЕНИЙ "РОЗУМНИЙ" AR-БЛОК ↓↓ */}
          {/* Ми показуємо наш новий, безпечний компонент <ARViewer /> */}
          {showAR && (
            <ARViewer />
          )}
          {/* ↑↑ КІНЕЦЬ AR-БЛОКУ ↑↑ */}
          
        </div>

        {/* Права колонка: Опис */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4 capitalize">{product.category}</p>
          <p className="text-3xl font-bold text-blue-600 mb-6">${product.price}</p>
          <h2 className="text-xl font-semibold mb-2">Опис</h2>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
          
          <button className="mt-8 w-full bg-blue-500 text-white p-3 rounded-lg text-lg font-bold hover:bg-blue-700">
            Додати в кошик
          </button>
        </div>
        
      </div>

      {/* Футер */}
      <footer className="w-full p-4 text-center text-gray-500 text-sm mt-auto bg-gray-100">
         © 2025 Антон Лащенко, ДПУ. Демонстрація трендів е-комерції.
      </footer>
    </main>
  );
}
