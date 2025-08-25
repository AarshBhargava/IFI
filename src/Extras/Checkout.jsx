import React, { useState } from "react";
import { useCart } from "./Cart";
import { Api } from "../lib/api";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { items, clear } = useCart();
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const total = items.reduce((s, i) => s + i.artwork.price * i.quantity, 0);

  const pay = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await Api.createCheckout({
        items: items.map(i => ({ artworkId: i.artwork.id, quantity: i.quantity }))
      });
      await Api.confirmCheckout({ sessionId: data.sessionId });
      clear();
      nav("/profile?tab=purchases", { replace: true });
    } catch (err) {
      setError(err?.response?.data?.message || "Payment failed");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) return <div>Your cart is empty.</div>;

  return (
    <div className="max-w-lg mx-auto card p-6">
      <h2 className="text-xl font-semibold mb-2">Checkout</h2>
      <div className="space-y-2 text-sm">
        {items.map(i => (
          <div key={i.artwork.id} className="flex justify-between">
            <span>{i.artwork.title} × {i.quantity}</span>
            <span>₹{(i.artwork.price * i.quantity).toLocaleString()}</span>
          </div>
        ))}
        <div className="border-t pt-2 flex justify-between font-semibold">
          <span>Total</span>
          <span>₹{total.toLocaleString()}</span>
        </div>
      </div>
      {error && <div className="text-sm text-red-600 mt-2">{error}</div>}
      <button className="btn-primary w-full mt-4" onClick={pay} disabled={loading}>
        {loading ? "Processing…" : "Pay now (Simulated)"}
      </button>
      <p className="text-xs text-neutral-500 mt-2">
        This is a simulated Stripe flow. In production, redirect to Stripe Checkout.
      </p>
    </div>
  );
}
