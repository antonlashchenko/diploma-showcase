// Шлях: lib/data.js

// 1. ВАША "ТАБЛИЦЯ" ТОВАРІВ - ПОВЕРНУЛАСЯ У ФОРМАТІ JS
export const products = [
  {
    id: "1", // <-- Ваш товар з ID 1
    title: "Офісний стілець (з AR)",
    price: 130.00,
    category: "Меблі",
    description: "Ергономічний офісний стілець. Натисніть, щоб побачити його у вашій кімнаті!",
    image: "https://placehold.co/600x400/3498db/white?text=Стілець+AR",
    arModel: "/office_chair.glb", // <-- Шлях до AR-моделі
  },
  {
    id: "2",
    title: "Звичайний рюкзак",
    price: 59.99,
    category: "Аксесуари",
    description: "Простий, але стильний рюкзак для щоденного використання.",
    image: "https://placehold.co/600x400/555/white?text=Рюкзак",
    arModel: null, // <-- AR НЕМАЄ
  }
  // ... (Додайте сюди інші товари, просто копіюючи об'єкт)
];

// 2. Функція для отримання всіх товарів (просто повертає масив)
export function getAllProducts() {
  return products;
}

// 3. Функція для отримання одного товару за ID
export function getProductById(id) {
  // Використовуємо '==' для "м'якого" порівняння, це надійно
  return products.find(product => product.id == id);
}

// 4. Функція для отримання всіх унікальних категорій
export function getCategories() {
  const categories = products.map(p => p.category);
  return ["Всі", ...new Set(categories)];
}