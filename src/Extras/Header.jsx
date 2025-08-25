import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Header({ user, cartCount = 0 }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  return (
    <header className="bg-a-bg text-a-text shadow-low sticky top-0 z-40">
      <a className="sr-only focus:not-sr-only" href="#main">Skip to content</a>
      <div className="max-w-[1280px] mx-auto px-4 py-3 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-a-accent flex items-center justify-center text-white font-semibold">A</div>
          <span className="font-heading text-lg">ArtMarket</span>
        </Link>

        <div className="flex-1 relative">
          <label htmlFor="global-search" className="sr-only">Search artworks, artists, collections</label>
          <div className="relative">
            <input
              id="global-search"
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setTimeout(()=>setSearchOpen(false), 150)}
              placeholder="Search artworks, artists, styles..."
              className="w-full rounded-md border border-a-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-a-accent"
              aria-autocomplete="list"
              aria-controls="search-suggestions"
              aria-expanded={searchOpen}
              role="combobox"
            />
            {searchOpen && query.length > 0 && (
              <ul id="search-suggestions" role="listbox" className="absolute left-0 right-0 mt-2 bg-a-surface shadow-mid rounded-md max-h-60 overflow-auto z-50">
                {/* Suggestion items - replace with actual suggestion data */}
                <li role="option" className="p-3 hover:bg-gray-50 cursor-pointer">Suggestion 1</li>
                <li role="option" className="p-3 hover:bg-gray-50 cursor-pointer">Suggestion 2</li>
              </ul>
            )}
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          <Link to="/explore" className="text-sm">Explore</Link>
          <Link to="/sell" className="text-sm">Sell</Link>
          <Link to="/artists" className="text-sm">Artists</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/account" aria-label="Account" className="p-2 rounded-md hover:bg-a-surface focus:ring-2 focus:ring-a-accent">Account</Link>
          <Link to="/cart" aria-label={`Cart (${cartCount})`} className="p-2 rounded-md hover:bg-a-surface focus:ring-2 focus:ring-a-accent relative">
            Cart
            {cartCount > 0 && <span className="absolute -top-1 -right-1 text-xs bg-red-600 text-white rounded-full px-1">{cartCount}</span>}
          </Link>
          <button className="md:hidden p-2 rounded-md focus:ring-2 focus:ring-a-accent" aria-label="Open menu">☰</button>
        </div>
      </div>
    </header>
  );
}
