// Шлях: app/item/[productId]/page.js
// Це Серверний Компонент

// 1. Шляхи тепер на 3 рівні вгору
import { getProductById, getCategories } from '../../../lib/data';
import ProductView from '../../../components/ProductView';

// 2. 'params' тепер буде містити { productId: '1' }
export default function ProductPage({ params }) {
  
  // 3. Отримуємо продукт за 'params.productId'
  const product = getProductById(params.productId);
  const categories = getCategories();

  // 4. Якщо товар не знайдено
  if (!product) {
     return (
       <main className="flex min-h-screen flex-col items-center">
         <header className="w-full p-4 bg-blue-600 text-white shadow-md">
          <a href="/" className="text-2xl font-bold hover:underline">
            &larr; Назад до каталогу
          </a>
        </header>
        {/* Нове повідомлення для налагодження */}
        <p className="p-10 text-center text-red-500">Товар не знайдено. (ID: {params.productId})</p>
      </main>
    );
  }

  // 5. Передаємо продукт і категорії
  return (
    <ProductView product={product} categories={categories} />
  );
}