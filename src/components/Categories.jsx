// components/Categories.jsx
import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { NavLink } from "react-router-dom";

/*
  Recommended usage:
  - Place this component on your homepage / listing pages.
  - If you want icons, add an `icon` prop to each category object and render it inside the chip (lazy-load icons).
  - Add analytics in onCategoryClick if you use analytics (example stub included).
*/

// Reordered / canonical categories for an art marketplace — adjust routes to match your app
const CATEGORIES = [
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

export default function Categories({ onCategoryClick }) {
  const [showAll, setShowAll] = useState(false);
  const scrollRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // gentle animation, disabled for reduced-motion users
  const hoverAnim = reduceMotion ? {} : { scale: 1.06 };
  const tapAnim = reduceMotion ? {} : { scale: 0.97 };

  // analytics stub: replace with your analytics call if needed
  function handleClick(cat) {
    if (typeof onCategoryClick === "function") onCategoryClick(cat);
    // Example: window.gtag?.("event", "category_click", { category: cat.name });
  }

  return (
    <section aria-labelledby="categories-heading" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 id="categories-heading" className="sr-only">
          Browse categories
        </h2>

        {/* MOBILE: horizontal chip scroller */}
        <nav
          role="navigation"
          aria-label="Categories"
          className="sm:hidden"
        >
          {/* scroller container:
              - overflow-x-auto for horizontal scrolling
              - snap-x / snap-mandatory for nice snap behavior
              - -mx-4 + px-4 create the "bleed" so users see partial chips
          */}
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory px-4 py-3 -mx-4 scrollbar-hide"
            // optional: add keyboard handlers to move focus left/right if you want arrow-key UX
          >
            {CATEGORIES.slice(0, 8).map((cat) => (
              <motion.div
                key={cat.to}
                whileHover={hoverAnim}
                whileTap={tapAnim}
                className="snap-start"
                style={{ display: "inline-block" }}
              >
                <NavLink
                  to={cat.to}
                  onClick={() => handleClick(cat)}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-2 min-h-[48px] px-4 py-2 rounded-full border transition-colors duration-150
                     ${isActive ? "bg-gray-900 text-white border-transparent" : "bg-white text-gray-700 border-gray-200"}
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`
                  }
                >
                  <span className="truncate">{cat.name}</span>
                </NavLink>
              </motion.div>
            ))}

            {/* "See all" pill — opens full list overlay */}
            <div className="snap-start">
              <button
                onClick={() => setShowAll(true)}
                className="min-h-[48px] px-4 py-2 rounded-full border border-dashed text-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                aria-haspopup="dialog"
              >
                See all
              </button>
            </div>
          </div>
        </nav>

        {/* DESKTOP / TABLET: wrapable chip grid */}
        <nav role="navigation" aria-label="Categories" className="hidden sm:block">
          <ul className="flex flex-wrap justify-center gap-4">
            {CATEGORIES.map((cat) => (
              <li key={cat.to}>
                <motion.div whileHover={hoverAnim} whileTap={tapAnim}>
                  <NavLink
                    to={cat.to}
                    onClick={() => handleClick(cat)}
                    className={({ isActive }) =>
                      `inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-full border transition-colors duration-150
                       ${isActive ? "bg-gray-900 text-white border-transparent" : "bg-white text-gray-700 border-gray-200"}
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`
                    }
                  >
                    <span className="truncate">{cat.name}</span>
                  </NavLink>
                </motion.div>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* FULL LIST OVERLAY (SEE ALL) */}
      {showAll && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="all-cats-title"
          className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8"
        >
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowAll(false)} />
          <div className="relative bg-white rounded-lg shadow-lg overflow-auto max-h-[80vh] w-full max-w-xl p-6">
            <h3 id="all-cats-title" className="text-lg font-semibold mb-4">
              All categories
            </h3>
            <button
              onClick={() => setShowAll(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              aria-label="Close categories"
            >
              ✖
            </button>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CATEGORIES.map((cat) => (
                <li key={cat.to}>
                  <NavLink
                    to={cat.to}
                    onClick={() => {
                      handleClick(cat);
                      setShowAll(false);
                    }}
                    className="block w-full text-left px-4 py-3 rounded hover:bg-gray-50"
                  >
                    {cat.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Small CSS for hiding scrollbars (add to your global CSS) */}
      {/* 
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        (or use the tailwind-scrollbar-hide plugin)
      */}
    </section>
  );
}
