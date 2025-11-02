// Шлях: app/layout.js
"use client"; 

import { useState, useEffect } from 'react';
import "./globals.css"; 
import { CartProvider } from "../context/CartContext"; 
import CookieBanner from '../components/CookieBanner'; 
import Footer from '../components/Footer'; 

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
    <html lang="uk">
      <head>
        <title>Minimalist Shop</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      
      <CartProvider>
        <body className="flex flex-col min-h-screen bg-gray-50">
          
          <div className="flex-grow">
            {children}
          </div>
          
          <Footer /> 
          
          {showCookie && <CookieBanner onAccept={handleAcceptCookie} />}
          
          {/* Tidio (якщо він вам ще потрібен) */}
          <script src="//code.tidio.co/txssd0zgjsqnoyz0lrzkg0w5utbdipc9.js" async></script>
        </body>
      </CartProvider>
    </html>
  );
}