// src/pages/Cart.jsx
import create from "zustand";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const useCart = create((set, get) => ({
  items: [],
  add: (artwork, qty) => {
    const items = [...get().items];
    const idx = items.findIndex(i => i.artwork.id === artwork.id);
    if (idx >= 0) {
      items[idx].quantity += qty;
    } else {
      items.push({ artwork, quantity: qty });
    }
    set({ items });
  },
  remove: (id) => set({ items: get().items.filter(i => i.artwork.id !== id) }),
  setQty: (id, qty) => {
    const items = get().items.map(i => i.artwork.id === id ? { ...i, quantity: Math.max(1, qty) } : i);
    set({ items });
  },
  clear: () => set({ items: [] })
}));

export default function Cart() {
  const { items, remove, setQty } = useCart();
  const total = items.reduce((s, i) => s + i.artwork.price * i.quantity, 0);
  const nav = useNavigate();

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-neutral-600">Your cart is empty.</p>
        <Link to="/" className="btn-primary mt-3 inline-block">Browse artworks</Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-8 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="lg:col-span-2 space-y-3">
        {items.map(({ artwork, quantity }) => (
          <div key={artwork.id} className="card p-4 flex gap-4 border rounded-lg">
            <div className="w-28 h-20 overflow-hidden rounded-xl bg-neutral-100">
              <img src={artwork.src} className="w-full h-full object-cover" alt={artwork.title} />
            </div>
            <div className="flex-1">
              <div className="font-semibold">{artwork.title}</div>
              <div className="text-sm text-neutral-600">₹{Number(artwork.price).toLocaleString()}</div>
              <div className="mt-2 flex items-center gap-2">
                <input
                  type="number"
                  className="input max-w-[90px] border rounded px-2 py-1"
                  min={1}
                  value={quantity}
                  onChange={(e) => setQty(artwork.id, Number(e.target.value))}
                />
                <button className="btn-ghost text-sm text-red-500" onClick={() => remove(artwork.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-4 h-fit border rounded-lg">
        <div className="flex items-center justify-between">
          <div>Subtotal</div>
          <div className="font-semibold">₹{total.toLocaleString()}</div>
        </div>
        <button className="btn-primary w-full mt-3" onClick={() => nav("/checkout")}>Proceed to checkout</button>
      </div>
    </div>
  );
}
