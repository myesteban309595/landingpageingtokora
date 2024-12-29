// src/hooks/useCart.js
import { useState, useEffect } from 'react';

const useCart = () => {
  const [cartItems, setCartItems] = useState(0); // Contador de elementos únicos en el carrito

  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const uniqueBooks = new Set(storedCart.map(item => item.id));  // Usamos Set para asegurar elementos únicos
    setCartItems(uniqueBooks.size); // El tamaño del Set nos da la cantidad de libros diferentes
  }, []);

  const updateCart = () => {
    const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const uniqueBooks = new Set(storedCart.map(item => item.id));  // Nuevos libros diferentes en el carrito
    setCartItems(uniqueBooks.size); // Actualizar el número de libros diferentes
  };

  return {
    cartItems,
    updateCart,
  };
};

export default useCart;
