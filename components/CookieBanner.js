// Шлях: components/CookieBanner.js
"use client";

// 'onAccept' - це функція, яку ми отримаємо з layout.js
export default function CookieBanner({ onAccept }) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 text-center text-sm z-50 flex justify-center items-center gap-4">
      <p>Цей сайт використовує cookie для демонстрації диплому.</p>
      <button 
        onClick={onAccept} // Натискання викликає функцію
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700"
      >
        OK
      </button>
    </div>
  );
}