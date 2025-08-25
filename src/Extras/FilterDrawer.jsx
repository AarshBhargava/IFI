import React from "react";

export default function FilterDrawer({ open=false, onClose=()=>{}, filters={}, onChange=()=>{} }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-40">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <aside className="absolute right-0 top-0 bottom-0 w-80 bg-a-bg p-4 overflow-auto" aria-label="Filters">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Filters</h3>
          <button onClick={onClose} className="p-2 rounded focus:ring-2 focus:ring-a-accent">Close</button>
        </div>

        <section>
          <label className="block font-medium">Medium</label>
          <div className="flex flex-col gap-2 mt-2">
            <label><input type="checkbox" name="painting" onChange={onChange}/> Painting</label>
            <label><input type="checkbox" name="photography" onChange={onChange}/> Photography</label>
          </div>
        </section>

        <section className="mt-4">
          <label className="block font-medium">Price</label>
          <input aria-label="Price min" placeholder="$100" className="w-1/2 mt-2 p-2 border rounded" />
        </section>
      </aside>
    </div>
  );
}
