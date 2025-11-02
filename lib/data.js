// Шлях: lib/data.js

import * as XLSX from 'xlsx'; // Наша нова бібліотека
import path from 'path';     // Вбудований модуль Node.js для роботи зі шляхами
import fs from 'fs';         // Вбудований модуль Node.js для читання файлів

// Ця функція читає ваш Excel-файл і перетворює його на масив
function loadProductsFromExcel() {
  // 1. Знаходимо шлях до файлу. 'process.cwd()' - це корінь вашого проекту
  const filePath = path.join(process.cwd(), 'lib', 'products.xlsx');

  try {
    // 2. Читаємо файл з диска
    const fileBuffer = fs.readFileSync(filePath);

    // 3. "Розбираємо" (парсимо) Excel-файл
    const workbook = XLSX.read(fileBuffer, { type: 'buffer' });

    // 4. Отримуємо назву першого аркуша (Sheet)
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // 5. Конвертуємо аркуш у JSON (масив об'єктів)
    // 'raw: false' гарантує, що ціни будуть числами, а не форматованим текстом
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: false });
    
    // 6. Конвертуємо id в рядки для надійності
    return jsonData.map(product => ({
      ...product,
      id: String(product.id),
      // Переконуємося, що якщо arModel порожній, він стає null
      arModel: product.arModel || null 
    }));

  } catch (error) {
    console.error("ПОМИЛКА ЧИТАННЯ EXCEL-ФАЙЛУ:", error);
    return []; // Повертаємо порожній список, щоб сайт не "впав"
  }
}

// --- ВСІ НАСТУПНІ ФУНКЦІЇ ЗАЛИШАЮТЬСЯ МАЙЖЕ БЕЗ ЗМІН ---
// Але тепер вони працюють з даними, які ми щойно завантажили з Excel

// 1. Завантажуємо товари ОДИН РАЗ, коли сервер запускається
const products = loadProductsFromExcel();

// 2. Функція для отримання всіх товарів
export function getAllProducts() {
  return products;
}

// 3. Функція для отримання одного товару за ID
export function getProductById(id) {
  // Ми використовували '==' раніше, це надійно
  return products.find(product => product.id == id);
}

// 4. Функція для отримання всіх унікальних категорій
export function getCategories() {
  const categories = products.map(p => p.category);
  return ["Всі", ...new Set(categories)];
}