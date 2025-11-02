// Функція для завантаження даних
async function getProducts() {
  // Ми звертаємось до FakeStoreAPI, щоб отримати товари
  const res = await fetch('https://fakestoreapi.com/products'); 
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const products = await getProducts(); // Отримуємо товари під час завантаження сторінки

  return (
    <main className="flex min-h-screen flex-col items-center">
      <header className="w-full p-4 bg-blue-600 text-white text-center shadow-md">
        <h1 className="text-2xl font-bold">Мій E-commerce Шоукейс</h1>
      </header>

      {/* ↓↓ БЛОК ДЛЯ AR-МОДЕЛІ ↓↓ */}
      <div className="w-full h-96 border-b-4 border-blue-200 p-4 bg-gray-100">
        
        [cite_start]{/* Ми прибрали [cite: 30] звідси */}
        <h2 className="text-2xl font-bold text-center mb-4">Демонстрація AR-примірки</h2>

        {/* Це і є компонент 3D-моделі. 
          Переконайтеся, що ваш файл у папці 'public' 
          називається 'office_chair.glb' 
        */}
        <model-viewer
            src="/office_chair.glb" 
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
      {/* ↑↑ КІНЕЦЬ БЛОКУ AR-МОДЕЛІ ↑↑ */}

      {/* Секція для товарів */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg flex flex-col bg-white">
            <img src={product.image} alt={product.title} className="h-48 w-full object-contain mb-4" />
            <h2 className="text-lg font-semibold truncate flex-grow">{product.title}</h2>
            <p className="text-xl font-bold text-blue-600 mt-2">${product.price}</p>
            <a href="#" className="mt-4 text-center bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
              Детальніше
            </a>
          </div>
        ))}
      </div>

      <footer className="w-full p-4 text-center text-gray-500 text-sm mt-auto bg-gray-100">
         © 2025 Антон Лащенко, ДПУ. Демонстрація трендів е-комерції.
      </footer>
    </main>
  );
}