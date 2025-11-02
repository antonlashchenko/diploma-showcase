import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-commerce Showcase", // Можете змінити назву тут
  description: "Дипломний проект ДПУ", // І опис тут
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Скрипт для 3D/AR */}
        <script 
          type="module" 
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js" 
          async>
        </script>
        
        {/* ↓↓ ОСТАННІ ДОДАВАННЯ ДЛЯ PWA (Крок 5.3) ↓↓ */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        {/* ↑↑ КІНЕЦЬ БЛОКУ PWA ↑↑ */}
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        {/* Скрипт Tidio */}
        <script src="//code.tidio.co/txssd0zgjsqnoyz0lrzkg0w5utbdipc9.js" async></script>
        
        {/* Банер GDPR */}
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 text-center text-sm z-50">
          <p>Цей сайт використовує cookie для демонстрації диплому.
            <button className="ml-4 bg-blue-500 p-1 rounded">OK</button>
          </p>
        </div>
        
      </body>
    </html>
  );
}