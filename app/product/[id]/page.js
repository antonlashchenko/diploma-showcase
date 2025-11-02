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

  // Ми "прикинемося", що наш стілець - це товар з ID 10
  // Ви можете обрати будь-який ID з FakeStoreAPI
  const AR_MODEL_ID = 10;
  const showAR = (product.id === AR_MODEL_ID);

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Хедер такий самий, як на головній */}
      <header className="w-full p-4 bg-blue-600 text-white shadow-md">
        <a href="/" className="text-2xl font-bold">Мій E-commerce Шоукейс</a>
      </header>

      {/* Контент сторінки товару */}
      <div className="w-full max-w-4xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Ліва колонка: Картинка та AR */}
        <div className="flex flex-col gap-4">
          <img src={product.image} alt={product.title} className="w-full h-auto object-contain rounded border p-4" />

          {/* ↓↓ "РОЗУМНИЙ" AR-БЛОК (Фаза 3) ↓↓ */}
          {/* Ми показуємо AR-блок ТІЛЬКИ якщо ID товару = 10 */}
          {showAR && (
            <div className="w-full h-96 border p-4 bg-gray-100 rounded">
              <h3 className="text-xl font-bold text-center mb-4">Демонстрація AR-примірки</h3>
              <model-viewer
                  src="/office_chair.glb" // Наш старий стілець
                  alt="3D model"
                  ar
                  ar-modes="webxr scene-viewer quick-look"
                  camera-controls
                  shadow-intensity="1"
                  auto-rotate
                  style={{width: '100%', height: '300px'}}
              >
              </model-viewer>
            </div>
          )}
          {/* ↑↑ КІНЕЦЬ AR-БЛОКУ ↑↑ */}

        </div>

        {/* Права колонка: Опис */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.category}</p>
          <p className="text-3xl font-bold text-blue-600 mb-6">${product.price}</p>
          <h2 className="text-xl font-semibold mb-2">Опис</h2>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          <button className="mt-8 w-full bg-blue-500 text-white p-3 rounded-lg text-lg font-bold hover:bg-blue-700">
            Додати в кошик
          </button>
        </div>

      </div>

      {/* Футер такий самий */}
      <footer className="w-full p-4 text-center text-gray-500 text-sm mt-auto bg-gray-100">
         © 2025 Антон Лащенко, ДПУ. Демонстрація трендів е-комерції.
      </footer>
    </main>
  );
}