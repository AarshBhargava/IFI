// components/HoverPreviewCard.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HoverPreviewCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Small Card */}
      <article className="group bg-white rounded-lg overflow-hidden shadow-sm">
        <div className="relative">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium font-['Playfair_Display']">
            {item.title}
          </h3>
          <p className="mt-2 text-xs text-gray-500">{item.desc}</p>
          <span className="block mt-2 text-sm text-gray-500">{item.date}</span>
        </div>
      </article>

      {/* Floating Bigger Preview */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.35 }}
            className="absolute top-0 left-full ml-6 bg-white shadow-2xl rounded-lg 
                       w-[520px] max-w-[95vw] z-50"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[380px] object-contain bg-gray-100 rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold font-['Playfair_Display']">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">{item.date}</p>
              <p className="mt-4 text-gray-700 text-base leading-relaxed">
                {item.details ||
                  "This is a detailed description of the artwork or exhibition."}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
