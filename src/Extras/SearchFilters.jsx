// components/SearchFilters.jsx
import React, { useState } from "react";

/**
 * Props:
 *  - onSearch(query)
 *  - suggestions: []
 *  - onOpenFilters()
 */
export default function SearchFilters({ onSearch = () => {}, suggestions = [], onOpenFilters = () => {} }) {
  const [q, setQ] = useState("");

  const submit = (e) => {
    e?.preventDefault();
    if (!q.trim()) return;
    onSearch(q.trim());
  };

  return (
    <form onSubmit={submit} className="w-full max-w-2xl mx-auto">
      <div className="flex gap-2 items-center">
        <label htmlFor="main-search" className="sr-only">Search artworks, artists, styles</label>
        <input
          id="main-search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search artworks, artists, styles (e.g., 'abstract landscape')"
          className="flex-1 rounded-full border px-4 py-2 focus:ring focus:outline-none"
          aria-label="Search artworks"
        />
        <button type="button" onClick={onOpenFilters} className="hidden sm:inline-flex px-3 py-2 border rounded-full">Filters</button>
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-full">Search</button>
      </div>

      {/* Example filter chips */}
      <div className="mt-3 flex gap-2 flex-wrap">
        {["Under $500", "Originals", "Prints", "Framed", "Large"].map((chip) => (
          <button key={chip} type="button" onClick={() => { setQ(chip); onSearch(chip); }}
                  className="text-sm px-3 py-1.5 rounded-full border bg-white/80 hover:bg-gray-100">
            {chip}
          </button>
        ))}
      </div>
    </form>
  );
}
