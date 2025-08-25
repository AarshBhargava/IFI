import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../lib/api";
import { useCart } from "../Extras/Cart";

export default function ArtworkDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const cart = useCart();

  useEffect(() => {
    const run = async () => {
      try {
        const { data } = await Api.getArtwork(id);
        setItem(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (id) run();
  }, [id]);

  if (loading) return <div className="text-neutral-500">Loading…</div>;
  if (!item) return <div>Not found</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="card overflow-hidden">
        <div className="aspect-[4/3] bg-neutral-100">
          <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold">{item.title}</h1>
        <div className="text-neutral-600 capitalize">{item.category}</div>
        <p className="text-neutral-700">{item.description}</p>
        <div className="text-2xl font-semibold">₹{Number(item.price).toLocaleString()}</div>
        <button className="btn-primary" onClick={() => cart.add(item, 1)}>Add to cart</button>
      </div>
    </div>
  );
}
