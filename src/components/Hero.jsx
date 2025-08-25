import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // import Link for routing

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

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1578926375605-eaf7559b1458?q=80&w=1063&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="hero background"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left column */}
          <div className="lg:col-span-7">
            <FadeUp>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-gray-900">
                IFI — Indian for Indians
              </h1>
            </FadeUp>

            <FadeUp delay={0.12}>
              <p className="mt-6 max-w-2xl text-lg text-gray-700">
                Discover contemporary works from established and emerging
                artists. Curated exhibitions, exclusive events, and a refined
                selection of paintings, sculptures and installations.
              </p>
            </FadeUp>

            <FadeUp delay={0.22}>
              <div className="mt-8 flex flex-wrap gap-3">
                {/* Corrected link to Exhibition page */}
                <Link
                  to="/exhibition"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md text-sm font-medium"
                >
                  Explore Exhibitions
                </Link>

                {/* Featured section still uses anchor if it's a section on the same page */}
                <Link
                  to = "/featured"
                  className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-md text-sm"
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
                  src="https://images.unsplash.com/photo-1574787929826-e9fe3121b558?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMHBhaW50aW5nfGVufDB8fDB8fHww"
                  alt="art 1"
                  className="w-full h-56 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1713103660167-87095bd2c586?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhbiUyMHBhaW50aW5nfGVufDB8fDB8fHww"
                  alt="art 2"
                  className="w-full h-56 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://plus.unsplash.com/premium_photo-1678257846725-e88b5280900b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMHBhaW50aW5nfGVufDB8fDB8fHww"
                  alt="art 3"
                  className="w-full h-56 object-cover rounded-lg shadow-lg col-span-2"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}