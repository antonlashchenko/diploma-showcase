export const products = [
  {
    id: "1",
    title: "Крісло 1",
    price: 1000.00,
    category: "Стільці",
    description: "Комфортне підвісне крісло-гойдалка для вашої тераси. Приміряйте в AR.",
    image: "/goydalka.png", // Тимчасова заглушка
    arModel: "/1.glb",
  },
  {
    id: "2", // <-- Новий унікальний ID
    title: "Акустичний диван Akunok", // <-- Нова назва
    price: 25000.00, // <-- Вигадайте ціну
    category: "Дивани", // <-- Або "Стільці", якщо це крісло
    description: "Акустичний диван/крісло для офісних просторів.",
    image: "office_chair.png", // <-- Тимчасова заглушка (зробіть скріншот!)
    arModel: "/Furniture_Acoustics_Akunok-acoustic-sofa-1-seater.glb" // <-- Шлях до вашого файлу
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