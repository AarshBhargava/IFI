import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-white">IFI</h4>
              <p className="mt-3 text-sm text-gray-300">Contemporary art exhibitions, curated shows, and public programs.</p>
              <div className="mt-4 flex gap-3 text-sm">
                <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
              </div>
            </div>

            <div>
              <h5 className="font-medium text-white">Visit</h5>
              <ul className="mt-3 text-sm text-gray-300 space-y-2">
                <li>Opening hours: Tue–Sun, 10:00–18:00</li>
                <li>123 Gallery Street</li>
                <li>City, Country</li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-white">Info</h5>
              <ul className="mt-3 text-sm text-gray-300 space-y-2">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/exhibition">Exhibitions</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-white">Contact</h5>
              <p className="mt-3 text-sm text-gray-300">Email: info@artegallery.example</p>
              <p className="mt-2 text-sm text-gray-300">Phone: +1 (555) 123-4567</p>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-800 pt-6">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between text-sm text-gray-400">
              <span>© {new Date().getFullYear()} Arte Gallery. All rights reserved.</span>
              <span>Designed to resemble the Arte theme demo.</span>
            </div>
          </div>
        </footer>
  );
}
