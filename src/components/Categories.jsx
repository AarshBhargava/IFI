import React from "react";
import { motion } from "framer-motion";

const categories = [
  "Paintings",
  "Tote Bags",
  "Photography",
  "Sculpture",
  "Drawings",
  "Prints",
  "Inspiration",
  "Art Advisory",
  "Curated Deals"
];

export default function Categories() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((category, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 max-w-2xl text-lg text-gray-700 rounded-full border border-gray-300 
                         hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
            >
              {category}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
