import Link from 'next/link';
// ↓↓ ЗМІНА ТУТ: Замінили '@/' на '../lib/data' ↓↓
import { getAllProducts } from '../lib/data';

// Цей компонент Серверний (немає "use client")
export default function Home() {

  const products = getAllProducts();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <header className="w-full p-4 bg-blue-600 text-white text-center shadow-md">
        <h1 className="text-2xl font-bold">Мій E-commerce Шоукейс</h1>
      </header>

      {/* Секція для товарів */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">

        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg flex flex-col bg-white">
            <img src={product.image} alt={product.title} className="h-48 w-full object-cover mb-4 rounded" />
            <h2 className="text-lg font-semibold truncate flex-grow">{product.title}</h2>
            <p className="text-xl font-bold text-blue-600 mt-2">${product.price}</p>

            <Link href={`/product/${product.id}`} className="mt-4 text-center bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
              Детальніше
            </Link>
          </div>
        ))}
      </div>

      <footer className="w-full p-4 text-center text-gray-500 text-sm mt-auto bg-gray-100">
         © 2025 Антон Лащенко, ДПУ. Демонстрація трендів е-комерції.
      </footer>
    </main>
  );
}