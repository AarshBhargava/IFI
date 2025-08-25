
// components/TopNav.jsx
import React from "react";
import SearchFilters from "../Extras/SearchFilters";

export default function Navbar({ onSearch = () => {}, cartCount = 0, user = null }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="h-16 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <svg aria-hidden className="w-10 h-10 text-gray-800" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="4" fill="currentColor" opacity="0.9" />
              </svg>
              <span className="sr-only">Arte Art Gallery</span>
              <span className="text-sm font-medium tracking-wide">Arte Gallery</span>
            </a>

            <ul className="hidden md:flex items-center gap-8 text-sm text-gray-700">
              <li><a href="#exhibition" className="hover:text-gray-900">Exhibition</a></li>
              <li><a href="#featured" className="hover:text-gray-900">Featured</a></li>
              <li><a href="#events" className="hover:text-gray-900">Events</a></li>
              <li><a href="#blog" className="hover:text-gray-900">Blog</a></li>
              <li><a href="#about" className="hover:text-gray-900">About</a></li>
            </ul>

            <div className="flex items-center gap-4">
              <button className="hidden md:inline-block text-sm px-4 py-2 border border-gray-200 rounded">Search Logo</button>
              <button className="text-sm px-3 py-2 rounded bg-gray-900 text-white">Login</button>
            </div>
          </nav>
        </div>
      </header>
  );
}


{/*import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center fixed w-full top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-indigo-600">
        🎨 Art Marketplace
      </Link>

      <div className="space-x-6">
        <Link to="/" className="hover:text-indigo-500">Home</Link>
        <Link to="/upload" className="hover:text-indigo-500">Upload</Link>
        <Link to="/cart" className="hover:text-indigo-500">Cart</Link>
        <Link to="/profile" className="hover:text-indigo-500">Profile</Link>
      </div>
    </nav>
  );
}



import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80 border-b border-border-subtle">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-surface text-text-primary px-3 py-2 rounded-md shadow-sm">Skip to content</a>
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-4">
        <Link to="/" aria-label="Home" className="text-xl font-bold font-serif tracking-tight text-text-primary">
          Art<span className="text-accent">Market</span>
        </Link>

        <nav aria-label="Primary" className="ml-4 hidden md:flex items-center gap-6 text-[15px]">
          {[
            { to: "/explore", label: "Explore" },
            { to: "/collections", label: "Collections" },
            { to: "/artists", label: "Artists" },
            { to: "/sell", label: "Sell" },
            { to: "/help", label: "Help" }
          ].map(i => (
            <NavLink key={i.to} to={i.to} className={({isActive}) =>
              `px-1 py-2 outline-none focus-visible:ring-2 focus-visible:ring-focus rounded
               ${isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"}`
            }>{i.label}</NavLink>
          ))}
        </nav>

        <form role="search" className="ms-auto flex-1 max-w-lg">
          <label className="sr-only" htmlFor="site-search">Search artworks, artists</label>
          <div className="relative">
            <input
              id="site-search"
              name="q"
              className="w-full rounded-[var(--radius)] border border-border-control bg-white/80 px-4 py-2.5 pr-10 text-[15px] placeholder:text-text-secondary/70
                         outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:border-transparent"
              placeholder="Search artworks, artists, styles…"
              autoComplete="off"
              />
            <button type="submit" aria-label="Search" className="absolute inset-y-0 right-1 my-1 px-2 rounded-md text-text-secondary hover:text-text-primary focus-visible:ring-2 focus-visible:ring-focus">
              ⌕
            </button>
          </div>
        </form>

        <div className="flex items-center gap-2">
          <Link to="/cart" aria-label="Cart" className="p-2 rounded-md hover:bg-bg focus-visible:ring-2 focus-visible:ring-focus">🛒</Link>
          <Link to="/account" className="px-3 py-2 rounded-md border border-border-control hover:bg-bg focus-visible:ring-2 focus-visible:ring-focus">Account</Link>
        </div>
      </div>
    </header>
  );
}*/}
