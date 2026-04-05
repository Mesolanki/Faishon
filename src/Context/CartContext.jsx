import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('neo26_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('neo26_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      // Create a unique key for the item based on ID and Size
      const existing = prev.find((item) => item.id === product.id && item.selectedSize === product.selectedSize);
      if (existing) {
        return prev.map((item) =>
          (item.id === product.id && item.selectedSize === product.selectedSize) 
            ? { ...item, quantity: item.quantity + (product.quantity || 1) } 
            : item
        );
      }
      return [...prev, { ...product, quantity: product.quantity || 1 }];
    });
  };

  const removeFromCart = (productId, selectedSize) => {
    setCart((prev) => prev.filter((item) => !(item.id === productId && item.selectedSize === selectedSize)));
  };

  const updateQuantity = (productId, selectedSize, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        (item.id === productId && item.selectedSize === selectedSize) 
          ? { ...item, quantity: Math.max(1, item.quantity + delta) } 
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
