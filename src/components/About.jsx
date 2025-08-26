// About.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ added

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

export default function About() {
  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Section */}
          <FadeUp>
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-gray-900">
                About IFI Gallery
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-gray-700">
                IFI Gallery is a contemporary art space dedicated to presenting
                ambitious exhibitions and supporting artists. Our program
                includes curated shows, site-specific commissions, and public
                programs that connect art to wider cultural conversations.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/gallery"
                  className="px-6 py-3 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800 transition"
                >
                  Visit the Gallery
                </Link>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100 transition"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Images Section */}
          <FadeUp delay={0.12}>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1715625911950-76671ef73b17?w=500&auto=format&fit=crop&q=60"
                alt="about 1"
                className="w-full h-96 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
              />
              <img
                src="https://images.unsplash.com/photo-1574787929826-e9fe3121b558?w=500&auto=format&fit=crop&q=60"
                alt="about 2"
                className="w-full h-96 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
              />
              <img
                src="https://artie-genuius-admin.cartoonmango.com/uploads/ATG_ARTICLE_FEATURED_IMAGES_04_e7237865db.jpg"
                alt="about 3"
                className="w-full h-64 object-cover rounded-lg shadow-md col-span-2 hover:scale-105 transition-transform"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
