// Шлях: lib/data.js

// 1. ВАШ НОВИЙ СПИСОК з 27-ми товарів
export const products = [
  // --- Попередні 23 товари ---
  {
    id: "1",
    title: "Шафа ROKO Економ, білий (900×2045×500 мм)",
    price: 3392.80,
    category: "Шафи",
    description: "Розпашна шафа з ДСП, штанга для одягу + полиця, розібрана для транспортування.",
    image: "https://cdn.27.ua/original/32/2f/6959663_3.jpeg",
    arModel: null,
  },
  {
    id: "2",
    title: "Шафа ROKO Економ, дуб сонома (900×2045×500 мм)",
    price: 3392.80,
    category: "Шафи",
    description: "Та сама модель у кольорі «дуб сонома», ДСП, штанга та полиця.",
    image: "https://cdn.27.ua/original/32/49/6959689_3.jpeg",
    arModel: null,
  },
  {
    id: "3",
    title: "Стіл обідній розкладний «Верне» (стіл-трансформер)",
    price: 6131.00,
    category: "Столи",
    description: "Розкладний обідній стіл-трансформер, ламінована ДСП стільниця, до 4–6 осіб.",
    image: "https://content2.rozetka.com.ua/goods/images/big/177766132.jpg",
    arModel: null,
  },
  {
    id: "4",
    title: "Стілець кухонний «Юля» (м’яка спинка)",
    price: 2614.00,
    category: "Стільці",
    description: "Дерев’яний каркас, м’яке сидіння/спинка, класичний обідній стілець.",
    image: "https://content.rozetka.com.ua/goods/images/big/424407225.jpg",
    arModel: null,
  },
  {
    id: "5",
    title: "Тумба під умивальник Water House Артік 50 (біла)",
    price: 2073.00,
    category: "Меблі для ванни",
    description: "Підлогова тумба під умивальник (під Cersania 50), ЛДСП, компактна модель для ванної.",
    image: "https://cdn.27.ua/original/75/37/7042359_1.jpeg",
    arModel: null,
  },
  {
    id: "6",
    title: "Настінна полиця з ясеню (живий край) — 500 мм",
    price: 800.00,
    category: "Полиці",
    description: "Полиця з масиву ясеня, «живий край», приховані кріплення — декоративна/універсальна.",
    image: "https://content2.rozetka.com.ua/goods/images/big/204376485.jpg",
    arModel: null,
  },
  // --- ДОДАНІ 4 НОВІ ТОВАРИ З AR ---
  {
    id: "7",
    title: "Сучасний диван",
    price: 12500.00,
    category: "Дивани", // Нова категорія автоматично додасться в хедер
    description: "Сучасний мінімалістичний диван для вітальні. Приміряйте у вашій кімнаті.",
    image: "/sofa.png", // Тимчасова заглушка
    arModel: "/modern__sofa.glb",
  },
  {
    id: "8",
    title: "Парковий стіл",
    price: 4300.00,
    category: "Столи",
    description: "Міцний стіл для парку або саду. Приміряйте у вашому дворі.",
    image: "/outdoor_bench.png", // Тимчасова заглушка
    arModel: "/park_table.glb",
  },
  {
    id: "9",
    title: "Садове крісло-гойдалка",
    price: 7800.00,
    category: "Стільці",
    description: "Комфортне підвісне крісло-гойдалка для вашої тераси. Приміряйте в AR.",
    image: "/goydalka.png", // Тимчасова заглушка
    arModel: "/garden_swing_chair_3d_model.glb",
  },
  {
    id: "11",
    title: "Крісло 1",
    price: 1000.00,
    category: "Стільці",
    description: "Комфортне підвісне крісло-гойдалка для вашої тераси. Приміряйте в AR.",
    image: "/goydalka.png", // Тимчасова заглушка
    arModel: "/1.glb",
  },
  {
    id: "10",
    title: "Офісний стілець (AR)",
    price: 3100.00,
    category: "Стільці",
    description: "Ергономічний офісний стілець. Приміряйте біля свого столу.",
    image: "office_chair.png", // Тимчасова заглушка
    arModel: "/office_chair.glb", // Використовує той самий файл, що ви завантажили
  }
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
  // Повертаємо унікальні значення + "Всі"
  // Додаємо .filter(Boolean), щоб ігнорувати можливі порожні категорії
  return ["Всі", ...new Set(categories.filter(Boolean))];
}