// Шлях: context/CartContext.js
"use client";

import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems(prevItems => {
      // Перевіряємо, чи товар вже є в кошику
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // Якщо є - збільшуємо кількість
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: existingItem.quantity + 1 } : item
        );
      }
      // Якщо немає - додаємо
      return [...prevItems, { ...product, quantity: 1 }];
    });

    // alert(`${product.title} додано в кошик!`); // <-- Я ВИДАЛИВ ЦЕЙ РЯДОК
  };

  const removeFromCart = (productId) => {
    setItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return; // Не дозволяємо менше 1 (для видалення є хрестик)

    setItems(prevItems => prevItems.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      getTotalPrice,
      itemCount: items.reduce((total, item) => total + item.quantity, 0)
    }}>
      {children}
    </CartContext.Provider>
  );
}

// Хук для легкого доступу до кошика
export function useCart() {
  return useContext(CartContext);
}