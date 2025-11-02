/*
 * Це ваш власний, локальний "API"
 * Ви можете додавати сюди скільки завгодно товарів.
 */

export const products = [
  {
    id: "1", // ID тепер є рядком, це надійніше
    title: "Звичайний рюкзак",
    price: 59.99,
    category: "Рюкзаки",
    description: "Простий, але стильний рюкзак для щоденного використання. Не підтримує AR.",
    // Використовуємо 'placehold.co' для картинок-заглушок
    image: "https://placehold.co/600x400/555/white?text=Рюкзак",
    arModel: null, // <-- AR НЕМАЄ
  },
  {
    id: "2",
    title: "Офісний стілець (з AR)",
    price: 130.00,
    category: "Меблі",
    description: "Ергономічний офісний стілець. Натисніть на сторінці товару, щоб побачити його у вашій кімнаті!",
    image: "https://placehold.co/600x400/3498db/white?text=Стілець+AR",
    arModel: "/office_chair.glb", // <-- ВКАЗУЄМО ШЛЯХ ДО AR-МОДЕЛІ
  },
  {
    id: "3",
    title: "Бездротові навушники",
    price: 89.50,
    category: "Електроніка",
    description: "Якісний звук без дротів. Модель без AR-перегляду.",
    image: "https://placehold.co/600x400/2ecc71/white?text=Навушники",
    arModel: null, // <-- AR НЕМАЄ
  },
  {
    id: "4",
    title: "Настільна лампа",
    price: 45.00,
    category: "Освітлення",
    description: "Сучасна лампа для вашого робочого столу.",
    image: "https://placehold.co/600x400/f39c12/white?text=Лампа",
    arModel: null, // <-- AR НЕМАЄ
  }
];

// Функція для отримання всіх товарів
export function getAllProducts() {
  return products;
}

// Функція для отримання одного товару за ID
export function getProductById(id) {
  return products.find(product => product.id === id);
}