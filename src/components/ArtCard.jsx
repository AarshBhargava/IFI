import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Plus, ShoppingCart } from "lucide-react";
import { useCart } from "../components/CartStore";

const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function ArtCard({ artwork, delay = 0 }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const addToCart = useCart((state) => state.add);

  const handleFavorite = () => setIsFavorite(!isFavorite);
  const handleAddToCart = () => addToCart(artwork, 1);

  return (
    <FadeUp delay={delay}>
      <div className="bg-white rounded-xl overflow-hidden shadow-sm group transition-transform hover:-translate-y-1 hover:shadow-lg">
        <img
          src={artwork.src}
          alt={artwork.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-4 text-center">
          <div className="flex justify-center gap-4 text-gray-500 mb-3">
            {/* Heart */}
            <motion.button
              whileTap={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
              onClick={handleFavorite}
            >
              <Heart
                size={20}
                fill={isFavorite ? "currentColor" : "none"}
                className={`transition-colors duration-300 ${
                  isFavorite ? "text-red-500" : "text-gray-500"
                }`}
              />
            </motion.button>

            {/* Plus */}
            <motion.button
              whileTap={{ scale: 1.2 }}
              className="hover:text-gray-900 transition-colors"
            >
              <Plus size={20} />
            </motion.button>

            {/* Add to Cart */}
            <motion.button
              whileTap={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
              onClick={handleAddToCart}
              className="hover:text-gray-900 transition-colors"
            >
              <ShoppingCart size={20} />
            </motion.button>
          </div>

          <p className="text-gray-900 font-semibold text-lg">
            ₹{artwork.price.toLocaleString()}
          </p>
          <p className="text-gray-900 font-semibold text-md mt-1">
            {artwork.title}
          </p>
          <p className="text-gray-400 text-sm">{artwork.artist}</p>
          <p className="text-gray-400 text-sm">
            {artwork.medium} | {artwork.size}
          </p>
        </div>
      </div>
    </FadeUp>
  );
}
