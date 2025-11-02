// Шлях: lib/data.js

// ЦЕ ВАША "ТАБЛИЦЯ" ТОВАРІВ.
// Просто копіюйте об'єкти, щоб додати нові.
export const products = [
  {
    id: "1",
    title: "Офісний стілець (з AR)",
    price: 130.00,
    category: "Меблі", // Категорія
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
  },
  {
    id: "3",
    title: "Бездротові навушники",
    price: 89.50,
    category: "Електроніка",
    description: "Якісний звук без дротів. Модель без AR-перегляду.",
    image: "https://placehold.co/600x400/2ecc71/white?text=Навушники",
    arModel: null,
  },
  {
    id: "4",
    title: "Настільна лампа",
    price: 45.00,
    category: "Меблі",
    description: "Сучасна лампа для вашого робочого столу.",
    image: "https://placehold.co/600x400/f39c12/white?text=Лампа",
    arModel: null,
  }
];

// Функція для отримання всіх товарів
export function getAllProducts() {
  return products;
}

// Функція для отримання одного товару за ID
export function getProductById(id) {
  // Використовуємо '==' для "м'якого" порівняння, це надійно
  return products.find(product => product.id == id);
}

// Функція для отримання всіх унікальних категорій
export function getCategories() {
  const categories = products.map(p => p.category);
  // Повертаємо унікальні значення + "Всі"
  return ["Всі", ...new Set(categories)];
}