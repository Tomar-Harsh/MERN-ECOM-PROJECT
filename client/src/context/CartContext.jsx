import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import api from '../services/api';
import { toast } from 'react-toastify';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const { token } = useAuth();

  const fetchCart = useCallback(async () => {
    if (!token) return; // Only fetch if authenticated
    setLoading(true);
    try {
      const res = await api.get('/cart');
      setCart(Array.isArray(res.data.cart?.items) ? res.data.cart.items : []);
    } catch (err) {
      toast.error('Failed to fetch cart');
      setCart([]);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchCart();
    } else {
      setCart([]);
    }
  }, [fetchCart, token]);

  useEffect(() => {
    const total = Array.isArray(cart)
      ? cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
      : 0;
    setTotalAmount(total);
  }, [cart]);

  const addToCart = async (productId, quantity = 1) => {
    try {
      setCart(prevCart => {
        const existing = prevCart.find(item => item.product._id === productId);
        if (existing) {
          return prevCart.map(item =>
            item.product._id === productId
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          return prevCart;
        }
      });
      await api.post('/cart/add', { productId, quantity });
      toast.success('Added to cart');
      fetchCart();
    } catch (err) {
      toast.error('Failed to add to cart');
    }
  };

  const updateCart = async (productId, quantity) => {
    try {
      setCart(prevCart =>
        prevCart.map(item =>
          item.product._id === productId ? { ...item, quantity } : item
        )
      );
      await api.patch('/cart/update', { productId, quantity });
      toast.success('Cart updated');
      fetchCart();
    } catch (err) {
      toast.error('Failed to update cart');
    }
  };

  const removeFromCart = async (productId) => {
    try {
      setCart(prevCart => prevCart.filter(item => item.product._id !== productId));
      await api.delete(`/cart/remove/${productId}`);
      toast.success('Removed from cart');
      fetchCart();
    } catch (err) {
      toast.error('Failed to remove from cart');
    }
  };

  return (
    <CartContext.Provider value={{ cart, loading, totalAmount, addToCart, updateCart, removeFromCart, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
} 