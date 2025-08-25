// components/TopNav.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav({ cartCount = 0, user = null }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <svg aria-hidden className="w-8 h-8 text-gray-800" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="4" fill="currentColor" opacity="0.9" />
            </svg>
            <span>Arte Gallery</span>
          </Link>

          {/* Navigation links */}
          <ul className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <li><NavLink to="/exhibition" className="hover:text-gray-900">Exhibition</NavLink></li>
            <li><NavLink to="/featured" className="hover:text-gray-900">Featured</NavLink></li>
            <li><NavLink to="/events" className="hover:text-gray-900">Events</NavLink></li>
            <li><NavLink to="/blog" className="hover:text-gray-900">Blog</NavLink></li>
            <li><NavLink to="/about" className="hover:text-gray-900">About</NavLink></li>
          </ul>

          {/* Right-side actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <form className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search artworks, artists..."
                className="w-48 lg:w-64 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button type="submit" className="absolute right-2 top-2 text-gray-500 hover:text-gray-800">⌕</button>
            </form>

            {/* Cart */}
            <Link to="/cart" className="relative p-2 rounded hover:bg-gray-100">
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User */}
            {user ? (
              <Link to="/profile" className="px-3 py-2 rounded-md border border-gray-300 hover:bg-gray-100">
                {user.name || "Account"}
              </Link>
            ) : (
              <Link to="/login" className="px-3 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800">
                Login
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
