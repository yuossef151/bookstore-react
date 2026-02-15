import { createContext, useState, useEffect } from "react";
import { getcartAPI } from "../../API/Auth";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [Cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : { cart: [], total: 0 };
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(Cart));
  }, [Cart]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await getcartAPI();
        setCart(response.data.data || { cart: [], total: 0 });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const addToCart = (item) => {
    setCart((prev) => {
      if (!prev?.cart) {
        return { cart: [{ ...item, quantity: 1 }] };
      }

      const index = prev.cart.findIndex((el) => el.bookName === item.bookName);
      if (index !== -1) {
        const newCart = [...prev.cart];
        newCart[index].quantity += 1;
        return { ...prev, cart: newCart };
      } else {
        return { ...prev, cart: [...prev.cart, { ...item, quantity: 1 }] };
      }
    });
  };

  const removeFromCart = (index) => {
    setCart((prev) => {
      const newCart = [...(prev.cart || [])];
      newCart.splice(index, 1);
      return {
        ...prev,
        cart: newCart,
        total: Math.max((prev.total || 1) - 1, 0),
      };
    });
  };

  return (
    <CartContext.Provider
      value={{ Cart, setCart, addToCart, removeFromCart, loading }}
    >
      {children}
    </CartContext.Provider>
  );
}
