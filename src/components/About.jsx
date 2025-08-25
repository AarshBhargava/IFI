// About.jsx
import React from "react";
import { motion } from "framer-motion";

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
    <section id="about" className="py-32 bg-gray-50 px-90">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <FadeUp>
                <div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-gray-900">About IFI Gallery</h2>
                  <p className="mt-6 max-w-2xl text-lg text-gray-700">IFI Gallery is a contemporary art space dedicated to presenting ambitious exhibitions and supporting artists. Our program includes curated shows, site-specific commissions, and public programs that connect art to wider cultural conversations.</p>
                  <div className="mt-6 flex gap-3">
                    <a href="#" className="px-5 py-2 bg-gray-900 text-white rounded">Visit the gallery</a>
                    <a href="#" className="px-5 py-2 border border-gray-200 rounded">Contact us</a>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.12}>
                <div className="grid grid-cols-2 gap-4">
  <img
    src = "https://images.unsplash.com/photo-1715625911950-76671ef73b17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGluZGlhbiUyMHBhaW50aW5nfGVufDB8fDB8fHww"
    alt="about 1"
    className="w-full h-96 object-cover rounded"
  />
  <img
    src="https://images.unsplash.com/photo-1574787929826-e9fe3121b558?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwcGFpbnRpbmdzfGVufDB8fDB8fHww"
    alt="about 2"
    className="w-full h-96 object-cover rounded"
  />
  <img
    src="https://artie-genuius-admin.cartoonmango.com/uploads/ATG_ARTICLE_FEATURED_IMAGES_04_e7237865db.jpg"
    alt="about 3"
    className="w-full h-64 object-cover rounded col-span-2"
  />
</div>
              </FadeUp>
            </div>
          </div>
        </section>
  );
}
