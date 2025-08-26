import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCartIcon, Menu, X } from "lucide-react";
import { useCart } from "../components/CartStore";

export default function TopNav({ user = null }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartItems = useCart((state) => state.items);
  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  const categories = [
    { name: "Featured", to: "/featured" },
    { name: "Discover", to: "/discover" },
    { name: "Exhibition", to: "/exhibition" },
    { name: "Gallery", to: "/gallery" },
    { name: "Paintings", to: "/paintings" },
    { name: "Photography", to: "/photography" },
    { name: "Drawings & Illustrations", to: "/drawings" },
    { name: "Sculpture", to: "/sculpture" },
    { name: "New Media & Digital Art", to: "/digital-art" },
    { name: "Artists", to: "/artists" },
    { name: "Sell", to: "/sell" },
    { name: "About", to: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 md:bg-white/90 md:backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top row: Logo + Actions */}
        <nav className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight"
            aria-label="Go to homepage"
          >
            <svg
              aria-hidden
              className="w-8 h-8 text-gray-800"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect width="24" height="24" rx="4" fill="currentColor" opacity="0.9" />
            </svg>
            <span>IFI</span>
          </Link>

          {/* Right-side actions */}
          <div className="flex items-center gap-4">
            {/* Search (desktop only) */}
            <form className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search artworks, artists..."
                className="w-48 lg:w-64 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Search artworks and artists"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 text-gray-500 hover:text-gray-800"
                aria-label="Submit search"
              >
                ⌕
              </button>
            </form>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 rounded hover:bg-gray-100"
              aria-label="Open cart"
            >
              <ShoppingCartIcon className="w-6 h-6" />
              {cartCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
                  aria-hidden
                >
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User */}
            {user ? (
              <Link
                to="/profile"
                className="px-3 py-2 rounded-md border border-gray-300 hover:bg-gray-100 hidden md:block"
              >
                {user.name || "Account"}
              </Link>
            ) : (
              <Link
                to="/login"
                className="px-3 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 hidden md:block"
              >
                Login
              </Link>
            )}

            {/* Hamburger (mobile only) */}
            <button
              className="md:hidden p-2 rounded hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Bottom row: Categories (desktop only) */}
        <div className="hidden md:flex justify-center border-t border-gray-200">
          <ul className="flex flex-wrap items-center gap-6 text-sm text-gray-700 py-3">
            {categories.map((cat) => (
              <li key={cat.to}>
                <NavLink to={cat.to} className="hover:text-gray-900">
                  {cat.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white flex flex-col p-0">
          {/* Close button area */}
          <div className="p-4 flex justify-end border-b border-gray-100">
            <button
              className="p-2 rounded hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          {/* Categories list with dividers */}
          <nav aria-label="Mobile categories" className="flex-1 overflow-auto">
            <ul className="flex flex-col text-base font-medium text-gray-800 divide-y divide-gray-200">
              {categories.map((cat) => (
                <li key={cat.to} className="group">
                  <NavLink
                    to={cat.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between w-full min-h-[48px] pl-4 pr-4 text-base leading-6 py-3"
                  >
                    <span className="truncate">{cat.name}</span>
                    <span className="ml-4 text-gray-400 group-hover:text-gray-700" aria-hidden>
                      {">"}
                    </span>
                  </NavLink>
                </li>
              ))}

              {/* Mobile Cart */}
              <li className="group">
                <Link
                  to="/cart"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between w-full min-h-[48px] pl-4 pr-4 text-base leading-6 py-3"
                >
                  <span>Cart</span>
                  {cartCount > 0 && (
                    <span className="ml-4 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Login/Profile button area */}
          <div className="p-4 border-t border-gray-100">
            {user ? (
              <Link
                to="/profile"
                className="block w-full px-4 py-3 text-center border rounded-md hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {user.name || "Account"}
              </Link>
            ) : (
              <Link
                to="/login"
                className="block w-full px-4 py-3 text-center bg-gray-900 text-white rounded-md hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
