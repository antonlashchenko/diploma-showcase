// Шлях: app/item/[productId]/page.js
// Це Серверний Компонент

// 1. Імпортуємо ВСІ функції, які нам потрібні
import { getProductById, getCategories, getAllProducts } from '../../../lib/data';
import ProductView from '../../../components/ProductView';

// ↓↓ КРОК 1: "РОЗУМНА" ФУНКЦІЯ ДЛЯ NEXT.JS ↓↓
// Ця функція каже Next.js: "Згенеруй сторінки для цих ID"
export async function generateStaticParams() {
  const products = getAllProducts();
 
  // Повертаємо масив об'єктів, який очікує Next.js
  // Наприклад: [ { productId: '1' }, { productId: '2' }, ... ]
  return products.map((product) => ({
    productId: product.id,
  }));
}
// ↑↑ КІНЕЦЬ НОВОЇ ФУНКЦІЇ ↑↑


// 2. 'params' тепер буде містити { productId: '1' }
export default function ProductPage({ params }) {
  
  // 3. Тепер Next.js ЗНАЄ, який ID сюди передати.
  // Цей код (з логами) залишається, щоб ми могли перевірити
  console.log("--- СТОРІНКА ТОВАРУ [productId] ЗАПУСТИЛАСЬ ---");
  console.log("Отриманий ID з URL (params.productId):", params.productId);

  const product = getProductById(params.productId);
  const categories = getCategories();

  // 4. Якщо товар не знайдено (цього вже не має статися)
  if (!product) {
     return (
       <main className="flex min-h-screen flex-col items-center">
         <header className="w-full p-4 bg-blue-600 text-white shadow-md">
          <a href="/" className="text-2xl font-bold hover:underline">
            &larr; Назад до каталогу
          </a>
        </header>
        <p className="p-10 text-center text-red-500">Товар не знайдено. (ID: {params.productId})</p>
      </main>
    );
  }

  // 5. Передаємо продукт і категорії
  return (
    <ProductView product={product} categories={categories} />
  );
}