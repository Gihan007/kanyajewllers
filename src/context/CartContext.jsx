import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "kanya-cart";

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore storage errors (private browsing, quota, etc.)
    }
  }, [items]);

  const addItem = (product, qty = 1) => {
    setItems((prev) => {
      const itemKey = product.cartKey || product.id;
      const existing = prev.find((i) => (i.cartKey || i.id) === itemKey);
      if (existing) {
        return prev.map((i) => (i.cartKey || i.id) === itemKey ? { ...i, qty: i.qty + qty } : i);
      }
      return [...prev, { id: product.id, cartKey: itemKey, variantId: product.variantId, variantTitle: product.variantTitle, name: product.name, price: product.price, image: product.image, qty }];
    });
  };

  const removeItem = (id) => setItems((prev) => prev.filter((i) => (i.cartKey || i.id) !== id));

  const updateQty = (id, qty) => {
    if (qty <= 0) return removeItem(id);
    setItems((prev) => prev.map((i) => ((i.cartKey || i.id) === id ? { ...i, qty } : i)));
  };

  const clearCart = () => setItems([]);

  const { subtotal, count } = useMemo(() => {
    return items.reduce(
      (acc, i) => ({
        subtotal: acc.subtotal + i.price * i.qty,
        count: acc.count + i.qty,
      }),
      { subtotal: 0, count: 0 }
    );
  }, [items]);

  const value = { items, addItem, removeItem, updateQty, clearCart, subtotal, count };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
