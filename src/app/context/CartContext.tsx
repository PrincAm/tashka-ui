'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export interface CartProps {
  id: string;
  quantity: number;
  name: string;
  price: number | null;
}

interface CartContextProps {
  cart: CartProps[];
  addToCart: (cartItem: CartProps) => void;
  decreaseQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  updateQuantity: (id: string, quantity: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartProps[]>([]);

  // Add an item to the cart (or increase quantity)
  const addToCart = (cartItem: CartProps) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === cartItem.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === cartItem.id
            ? { ...item, quantity: item.quantity + cartItem.quantity }
            : item
        );
      }

      return [...prevCart, cartItem];
    });
  };

  // Decrease the quantity of an item or remove it
  const decreaseQuantity = (id: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem?.quantity === 1) {
        // If quantity is 1, remove the item from the cart
        return prevCart.filter((item) => item.id !== id);
      }
      // Otherwise, decrease its quantity
      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  // Remove an item from the cart
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Clear the entire cart
  const clearCart = () => setCart([]);

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === id ? { ...item, quantity: Math.max(quantity, 0) } : item
          )
          .filter((item) => item.quantity > 0) // Remove items with quantity <= 0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        getTotalItems,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartContextProvider');
  }
  return context;
};
