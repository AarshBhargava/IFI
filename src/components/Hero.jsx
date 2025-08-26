// components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1578926375605-eaf7559b1458?q=80&w=1200&auto=format&fit=crop"
          alt="hero background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-white/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <FadeUp>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight text-gray-900">
                IFI — Indian for Indians
              </h1>
            </FadeUp>

            <FadeUp delay={0.12}>
              <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-gray-700 leading-relaxed">
                Discover contemporary works from established and emerging
                artists. Curated exhibitions, exclusive events, and a refined
                selection of paintings, sculptures and installations.
              </p>
            </FadeUp>

            <FadeUp delay={0.22}>
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  to="/exhibition"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800 transition"
                >
                  Explore Exhibitions
                </Link>
                <Link
                  to="/featured"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-900 rounded-md text-sm font-medium hover:bg-gray-100 transition"
                >
                  View Featured
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5">
            <FadeUp delay={0.3}>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1574787929826-e9fe3121b558?w=600&auto=format&fit=crop&q=60"
                  alt="art 1"
                  className="w-full h-52 sm:h-64 lg:h-56 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1713103660167-87095bd2c586?w=600&auto=format&fit=crop&q=60"
                  alt="art 2"
                  className="w-full h-52 sm:h-64 lg:h-56 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://plus.unsplash.com/premium_photo-1678257846725-e88b5280900b?w=600&auto=format&fit=crop&q=60"
                  alt="art 3"
                  className="w-full h-52 sm:h-72 lg:h-56 object-cover rounded-lg shadow-lg col-span-2"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
