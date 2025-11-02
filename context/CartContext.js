// Шлях: context/CartContext.js
"use client";

import { createContext, useState, useContext } from 'react';

// 1. Створюємо Context
const CartContext = createContext();

// 2. Створюємо "Провайдер" (компонент-обгортку)
export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // Тут зберігаються товари

  // Функція додавання в кошик
  const addToCart = (product) => {
    // (Тут можна додати логіку, щоб перевіряти, чи товар вже є, і збільшувати кількість)
    setItems(prevItems => [...prevItems, { ...product, quantity: 1 }]);
    alert(`${product.title} додано в кошик!`);
  };

  // Функція видалення з кошика
  const removeFromCart = (productId) => {
    setItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Функція для підрахунку загальної суми
  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };
  
  return (
    <CartContext.Provider value={{ 
        items, 
        addToCart, 
        removeFromCart, 
        getTotalPrice, 
        itemCount: items.length // Кількість для іконки в хедері
    }}>
      {children}
    </CartContext.Provider>
  );
}

// 3. Створюємо "Хук" (для легкого доступу до кошика)
export function useCart() {
  return useContext(CartContext);
}