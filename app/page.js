// Шлях: app/page.js
// Це Серверний Компонент

// 1. Імпортуємо ОБИДВІ функції
import { getAllProducts, getCategories } from '../lib/data';
import Storefront from '../components/Storefront'; // Наш клієнтський компонент

export default function Home() {
  
  // 2. БЕЗПЕЧНО завантажуємо обидва набори даних на сервері
  const allProducts = getAllProducts();
  const allCategories = getCategories();
  
  // 3. І передаємо обидва у Клієнтський Компонент
  return (
    <Storefront products={allProducts} categories={allCategories} />
  );
}