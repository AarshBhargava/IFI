import React, { useEffect } from "react";
import { motion } from "framer-motion";

/*
  Hero.jsx
  Single-file React component that reproduces the homepage layout and sections
  of the Arte Art Gallery WordPress demo using TailwindCSS + framer-motion.

  Usage:
    - Save this file to src/components/Hero.jsx
    - Ensure TailwindCSS is configured in the project
    - Install framer-motion: npm install framer-motion
    - In App.jsx: import Hero from './components/Hero'; then render <Hero />

  Notes:
    - All images use placeholder URLs. Replace with real images if needed.
    - The layout, spacing, colors, and animations are matched closely using Tailwind.
    - Accessibility: semantic tags and alt text are included.
*/

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

export default function HeroPage() {
  useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="antialiased text-gray-900 bg-white">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="h-16 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <svg aria-hidden className="w-10 h-10 text-gray-800" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="4" fill="currentColor" opacity="0.9" />
              </svg>
              <span className="sr-only">Arte Art Gallery</span>
              <span className="text-sm font-medium tracking-wide">Arte Gallery</span>
            </a>

            <ul className="hidden md:flex items-center gap-8 text-sm text-gray-700">
              <li><a href="#exhibition" className="hover:text-gray-900">Exhibition</a></li>
              <li><a href="#featured" className="hover:text-gray-900">Featured</a></li>
              <li><a href="#events" className="hover:text-gray-900">Events</a></li>
              <li><a href="#blog" className="hover:text-gray-900">Blog</a></li>
              <li><a href="#about" className="hover:text-gray-900">About</a></li>
            </ul>

            <div className="flex items-center gap-4">
              <button className="hidden md:inline-block text-sm px-4 py-2 border border-gray-200 rounded">Visit</button>
              <button className="text-sm px-3 py-2 rounded bg-gray-900 text-white">Search</button>
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {/* HERO SECTION */}
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img src="https://images.unsplash.com/photo-1529391387768-ab39476d6a52?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero background" className="w-full h-full object-cover opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <FadeUp>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-gray-900">Arte — Contemporary Art Gallery</h1>
                </FadeUp>

                <FadeUp delay={0.12}>
                  <p className="mt-6 max-w-2xl text-lg text-gray-700">Discover contemporary works from established and emerging artists. Curated exhibitions, exclusive events, and a refined selection of paintings, sculptures and installations.</p>
                </FadeUp>

                <FadeUp delay={0.22}>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href="#exhibition" className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md text-sm font-medium">Explore Exhibitions</a>
                    <a href="#featured" className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-md text-sm">View Featured</a>
                  </div>
                </FadeUp>
              </div>

              <div className="lg:col-span-5">
                <FadeUp delay={0.3}>
                  <div className="grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1529391387768-ab39476d6a52?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="art 1" className="w-full h-56 object-cover rounded-lg shadow-lg" />
                    <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7" alt="art 2" className="w-full h-56 object-cover rounded-lg shadow-lg" />
                    <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="art 3" className="w-full h-56 object-cover rounded-lg shadow-lg col-span-2" />
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

{/* EXHIBITION / GALLERY */}
<section id="exhibition" className="py-20">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex items-baseline justify-between">
      <FadeUp>
        <h2 className="text-2xl font-semibold font-['Playfair_Display']">Current Exhibition</h2>
      </FadeUp>

      <FadeUp delay={0.08}>
        <a href="#" className="text-sm text-gray-700 hover:underline">View all exhibitions</a>
      </FadeUp>
    </div>

    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
                "https://images.unsplash.com/photo-1545235617-9465d2a55698",
                "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
                "https://images.unsplash.com/photo-1542875272-2037d53b5e4d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ].map((img, i) => (
        <FadeUp key={i} delay={0.08 * i}>
          <article className="group bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative">
              <img
                src={img}
                alt={`Exhibition ${i + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-400"
              />
              <div className="absolute bottom-4 left-4 bg-white/80 px-3 py-2 rounded backdrop-blur text-sm">
                Open now
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium font-['Playfair_Display']">
                Exhibition Title {i + 1}
              </h3>
              <p className="mt-2 text-sm text-gray-600 font-['Roboto']">
                A short description of the exhibition, the concept, and featured artists.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">Aug 15 — Sep 30</span>
                <a href="#" className="text-sm text-gray-900 hover:underline">
                  Learn more
                </a>
              </div>
            </div>
          </article>
        </FadeUp>
      ))}
    </div>
  </div>
</section>


        {/* ABOUT SECTION */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <FadeUp>
                <div>
                  <h2 className="text-3xl font-serif">About Arte Gallery</h2>
                  <p className="mt-4 text-gray-700 max-w-xl">Arte Gallery is a contemporary art space dedicated to presenting ambitious exhibitions and supporting artists. Our program includes curated shows, site-specific commissions, and public programs that connect art to wider cultural conversations.</p>
                  <div className="mt-6 flex gap-3">
                    <a href="#" className="px-5 py-2 bg-gray-900 text-white rounded">Visit the gallery</a>
                    <a href="#" className="px-5 py-2 border border-gray-200 rounded">Contact us</a>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.12}>
                <div className="grid grid-cols-2 gap-4">
  <img
    src="https://images.unsplash.com/photo-1517497713463-f4a339ccd25a?q=80&w=766&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="about 1"
    className="w-full h-44 object-cover rounded"
  />
  <img
    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    alt="about 2"
    className="w-full h-44 object-cover rounded"
  />
  <img
    src="https://images.unsplash.com/photo-1523731407965-2430cd12f5e4"
    alt="about 3"
    className="w-full h-44 object-cover rounded col-span-2"
  />
</div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* FEATURED ARTWORKS */}
<section id="featured" className="py-20">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex items-baseline justify-between">
      <FadeUp>
        <h2 className="text-2xl font-semibold">Featured Artworks</h2>
      </FadeUp>
      <FadeUp delay={0.08}>
        <a href="#" className="text-sm text-gray-700 hover:underline">Browse all artworks</a>
      </FadeUp>
    </div>

    {/** UNSPLASH IMAGE ARRAY */}
    {(() => {
      const images = [
        "https://images.unsplash.com/photo-1543241964-2aff6a70473f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1543227043-f69c82e95af9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1542382361-9245d246c3bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1542919242-b32f2a7bce8d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1526715058896-23f69a067d99?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1542909588-66492252c919?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1593642634367-d91a135587b5"
      ];

      return (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <FadeUp key={i} delay={0.06 * i}>
              <figure className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="w-full h-56 bg-gray-100">
                  <img
                    src={src}
                    alt={`Artwork ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="p-4">
                  <h4 className="text-sm font-medium">Artwork Title {i + 1}</h4>
                  <p className="mt-2 text-xs text-gray-500">Artist Name — 2024</p>
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      );
    })()}
  </div>
</section>


        {/* NEWSLETTER */}
        <section id="newsletter" className="py-20">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <FadeUp>
              <h2 className="text-2xl font-semibold">Join Our Newsletter</h2>
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

        {/* FOOTER */}
        <footer className="bg-gray-900 text-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-white">Arte Gallery</h4>
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
                <li><a href="#">About</a></li>
                <li><a href="#">Exhibitions</a></li>
                <li><a href="#">Contact</a></li>
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
      </main>
    </div>
  );
}
