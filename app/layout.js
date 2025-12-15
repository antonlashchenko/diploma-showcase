// Шлях: app/layout.js
"use client";

import { Inter } from 'next/font/google';
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import Footer from '../components/Footer';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="uk" className={`${inter.variable} font-sans`}>
      <head>
        <title>spacia.ua</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>

      <CartProvider>
        <body className="flex flex-col min-h-screen">

          <div className="flex-grow">
            {children}
          </div>

          <Footer />

          <script src="//code.tidio.co/txssd0zgjsqnoyz0lrzkg0w5utbdipc9.js" async></script>
        </body>
      </CartProvider>
    </html>
  );
}