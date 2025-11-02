// Шлях: app/page.js
// НЕМАЄ "use client" - це тепер Серверний Компонент

import { getAllProducts } from '../lib/data'; // Імпортуємо дані (з 'fs')
import Storefront from '../components/Storefront'; // Наш НОВИЙ клієнтський компонент

// 1. Ця сторінка тепер "Server-Side"
export default function Home() {
  
  // 2. Вона БЕЗПЕЧНО завантажує дані з Excel на сервері
  const allProducts = getAllProducts();
  
  // 3. І просто передає ці дані у Клієнтський Компонент
  return (
    <Storefront products={allProducts} />
  );
}