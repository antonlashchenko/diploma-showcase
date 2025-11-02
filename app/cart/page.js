// Шлях: app/cart/page.js
// Це Серверний Компонент

// 1. БЕЗПЕЧНО імпортуємо дані (з 'fs')
import { getCategories } from '../../lib/data';
// 2. Імпортуємо НОВИЙ клієнтський компонент
import CartView from '../../components/CartView'; 

export default function CartPage() {
  
  // 3. БЕЗПЕЧНО завантажуємо категорії на сервері
  const allCategories = getCategories();
  
  // 4. І передаємо їх у Клієнтський Компонент
  return (
    <CartView categories={allCategories} />
  );
}