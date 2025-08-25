import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // import Link

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

export default function ExhibitionGallery({ items = [], mode = "uniform" }) {
  const exhibitions = [
    {
      id: 1,
      img: "https://plus.unsplash.com/premium_photo-1691030925762-51c8a78b49fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGluZGlhbiUyMHBhaW50aW5nfGVufDB8fDB8fHww",
      title: "Exhibition Title 1",
      desc: "A short description of the exhibition, the concept, and featured artists.",
      date: "Aug 15 — Sep 30",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1715627157123-7412d39df0d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGluZGlhbiUyMHBhaW50aW5nfGVufDB8fDB8fHww",
      title: "Exhibition Title 2",
      desc: "A short description of the exhibition, the concept, and featured artists.",
      date: "Aug 15 — Sep 30",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1713103659629-157f88899fdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGluZGlhbiUyMHBhaW50aW5nfGVufDB8fDB8fHww",
      title: "Exhibition Title 3",
      desc: "A short description of the exhibition, the concept, and featured artists.",
      date: "Aug 15 — Sep 30",
    },
  ];

  return (
    <section id="exhibition" className="pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-baseline justify-between">
          <FadeUp>
            <h2 className="text-3xl font-semibold font-['Playfair_Display']">Current Exhibition</h2>
          </FadeUp>

          <FadeUp delay={0.08}>
            <Link to="/exhibition" className="text-sm text-gray-700 hover:underline">View all exhibitions</Link>
          </FadeUp>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {exhibitions.map((item, i) => (
            <FadeUp key={item.id} delay={0.08 * i}>
              <article className="group bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-400"
                  />
                  {/* Updated Open Now to Link to individual artwork page */}
                  <Link
                    to={`/exhibition/${item.id}`} // dynamic path
                    className="absolute bottom-4 left-4 bg-white/80 px-3 py-2 rounded backdrop-blur text-sm hover:bg-gray-100"
                  >
                    Open Now
                  </Link>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium font-['Playfair_Display']">{item.title}</h3>
                  <p className="mt-2 text-xs text-gray-500">{item.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <Link to={`/exhibition/${item.id}`} className="text-sm text-gray-900 hover:underline">
                      Learn more
                    </Link>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
