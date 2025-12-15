// Шлях: app/item/[productId]/page.js

import { getProductById } from '../../../lib/data';
import { getProductImages } from '../../actions'; // Наш серверний сканер
import ProductClient from '../../../components/ProductClient';

// Це Серверний Компонент (немає "use client")
export default async function ProductPage({ params }) {
  // У Next.js 15 params - це Promise, тому чекаємо на нього
  const { productId } = await params; 
  
  // 1. Отримуємо товар
  const product = getProductById(productId);

  // 2. Отримуємо картинки (прямо на сервері, це надійно)
  const images = await getProductImages(productId);

  // 3. Віддаємо все клієнтському компоненту
  return (
    <ProductClient product={product} initialImages={images} />
  );
}