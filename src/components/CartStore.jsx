import { create } from "zustand";

export const useCart = create((set, get) => ({
  items: [],
  add: (artwork, qty = 1) => {
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
    const items = get().items.map(i =>
      i.artwork.id === id ? { ...i, quantity: Math.max(1, qty) } : i
    );
    set({ items });
  },
  clear: () => set({ items: [] }),
}));
