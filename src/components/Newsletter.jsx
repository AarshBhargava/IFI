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
export default function Newsletter() {
    return(
        <section id="newsletter" className="py-20">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <FadeUp>
              <h2 className="text-3xl font-semibold font-['Playfair_Display']">Join Our Newsletter</h2>
              <p className="mt-3 text-gray-600">Receive updates about exhibitions, events, and exclusive releases.</p>
            </FadeUp>

            <FadeUp delay={0.12}>
              <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input id="email" type="email" required placeholder="Your email" className="w-full sm:w-auto min-w-0 px-4 py-3 border border-gray-200 rounded" />
                <button type="submit" className="px-6 py-3 bg-gray-900 text-white rounded">Subscribe</button>
              </form>
            </FadeUp>

            <p className="mt-4 text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </section>
    );
}