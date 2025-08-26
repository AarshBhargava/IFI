// components/Categories.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const categories = [
  { name: "Paintings", to: "/paintings" },
  { name: "Tote Bags", to: "/tote-bags" },
  { name: "Photography", to: "/photography" },
  { name: "Sculpture", to: "/sculpture" },
  { name: "Drawings", to: "/drawings" },
  { name: "Prints", to: "/prints" },
  { name: "Inspiration", to: "/inspiration" },
  { name: "Art Advisory", to: "/art-advisory" },
  { name: "Curated Deals", to: "/curated-deals" },
];

export default function Categories() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive: grid on mobile, flex on larger screens */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <MotionLink
              key={i}
              to={cat.to}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="block px-4 sm:px-6 py-2 text-center text-base sm:text-lg 
                         text-gray-700 rounded-full border border-gray-300 
                         hover:bg-black hover:text-white 
                         transition-colors duration-300"
            >
              {cat.name}
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
