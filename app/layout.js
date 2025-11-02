// Шлях: app/layout.js
"use client"; 

import { useState, useEffect } from 'react';
// ↓↓ 1. Імпортуємо шрифт Inter ↓↓
import { Inter } from 'next/font/google';
import "./globals.css"; 
import { CartProvider } from "../context/CartContext"; 
import CookieBanner from '../components/CookieBanner'; 
import Footer from '../components/Footer'; 

// 2. Налаштовуємо шрифт
const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter', // Назва для CSS
});

export default function RootLayout({ children }) {
  
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookie_accepted") !== "true") {
      setShowCookie(true);
    }
  }, []);

  const handleAcceptCookie = () => {
    setShowCookie(false);
    localStorage.setItem("cookie_accepted", "true");
  };
  
  return (
    // 3. Застосовуємо шрифт до всього сайту
    <html lang="uk" className={inter.variable}>
      <head>
        {/* 4. Змінюємо назву */}
        <title>spacia.ua</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      
      <CartProvider>
        <body className="flex flex-col min-h-screen">
          
          <div className="flex-grow">
            {children}
          </div>
          
          <Footer /> 
          
          {showCookie && <CookieBanner onAccept={handleAcceptCookie} />}
          
          <script src="//code.tidio.co/txssd0zgjsqnoyz0lrzkg0w5utbdipc9.js" async></script>
        </body>
      </CartProvider>
    </html>
  );
}