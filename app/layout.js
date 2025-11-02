// Шлях: app/layout.js
"use client"; // Робимо Layout клієнтським для керування cookie

import { useState, useEffect } from 'react';
import "./globals.css"; // Підключаємо Tailwind
import { CartProvider } from "../context/CartContext"; // Наш Кошик
import CookieBanner from '../components/CookieBanner'; // Наш Банер

export default function RootLayout({ children }) {
  
  // Стан для cookie банера
  const [showCookie, setShowCookie] = useState(false);

  // Перевіряємо localStorage, чи користувач вже натискав "OK"
  useEffect(() => {
    if (localStorage.getItem("cookie_accepted") !== "true") {
      setShowCookie(true);
    }
  }, []);

  // Функція, яка ховає банер і запам'ятовує вибір
  const handleAcceptCookie = () => {
    setShowCookie(false);
    localStorage.setItem("cookie_accepted", "true");
  };
  
  return (
    <html lang="uk">
      <head>
        <title>Minimalist Shop</title>
        {/* PWA-теги (як ми робили раніше) */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      
      {/* Обгортаємо ВСЕ у CartProvider */}
      <CartProvider>
        {/* 'min-h-screen' і 'flex-col' змушують футер бути внизу */}
        <body className="flex flex-col min-h-screen bg-gray-50">
          
          {/* Наші компоненти будуть "дітьми" (children) */}
          <div className="flex-grow">
            {children}
          </div>
          
          <Footer /> 
          
          {/* Банер з'явиться, тільки якщо showCookie=true */}
          {showCookie && <CookieBanner onAccept={handleAcceptCookie} />}
          
          {/* Tidio (якщо він вам ще потрібен) */}
          <script src="//code.tidio.co/txssd0zgjsqnoyz0lrzkg0w5utbdipc9.js" async></script>
        </body>
      </CartProvider>
    </html>
  );
}