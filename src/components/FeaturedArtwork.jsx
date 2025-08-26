// components/FeaturedArtwork.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export default function FeaturedArtwork() {
  const [hovered, setHovered] = useState(null);

  const images = [
    {
      src: "https://i.etsystatic.com/43391614/r/il/119cce/5692531201/il_794xN.5692531201_6jpc.jpg",
      title: "Ajanta Painting",
      artist: "Unknown — 5th Century",
      details:
        "This Ajanta painting reflects Buddhist influences, showcasing intricate storytelling through frescoes.",
    },
    {
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEpjIGnttTgX65zO_vfGHGM-0X6WetjW8uHIzVt-4q0c9RCbW_22WLBgaIC8AJxuqt_o7dAu4y8SPPc-kpNnzsfqxkLTvRHfmDe_117rAhaCe4cANQhlRW_Du6Gpas7dXt1qItzejOfTDQ/s1600/ajanta10.jpg",
      title: "Ajanta Fresco",
      artist: "Unknown — 6th Century",
      details:
        "The Ajanta caves frescoes depict Buddhist tales in vivid detail, emphasizing devotion and compassion.",
    },
    {
      src: "https://mediacloud.saffronart.com/auctions/2018/classic/unknown_1804ant_11127_big.jpg",
      title: "Classic Indian Art",
      artist: "18th Century",
      details:
        "A fine example of detailed miniature painting from classical India, highlighting cultural aesthetics.",
    },
    {
      src: "https://muselot.in/cdn/shop/articles/gond_painting.jpg?v=1676631899",
      title: "Gond Painting",
      artist: "Tribal Art",
      details:
        "Gond art is rooted in folk traditions, with intricate patterns symbolizing nature and mythology.",
    },
    {
      src: "https://webneel.com/daily/sites/default/files/images/daily/03-2013/22-ravi-varma-reproductional-paintings.jpg",
      title: "Raja Ravi Varma",
      artist: "Raja Ravi Varma — 19th Century",
      details:
        "Known as the father of modern Indian art, Ravi Varma’s work bridges European realism and Indian ethos.",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOqwLNn3G1IHRX8xBYV7Ai-n36mlbnhTYDw&s",
      title: "Contemporary Abstract",
      artist: "Modern Indian Artist",
      details:
        "This contemporary piece combines abstract symbolism with bold Indian motifs.",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJzUACn_v6Mw3PylwUNL3G4RzfmHd03xy0AA&s",
      title: "Spiritual Motifs",
      artist: "Modern Artist",
      details:
        "A depiction of Indian spiritual philosophy through modern brush strokes and vibrant hues.",
    },
    {
      src: "https://artlifetoday.in/wp-content/uploads/2024/06/Husain-1-1-1024x787.jpg",
      title: "M.F. Husain",
      artist: "M.F. Husain — 20th Century",
      details:
        "One of India’s most celebrated modern artists, Husain’s works portray bold themes and cultural motifs.",
    },
  ];

  return (
    <section id="featured" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-baseline justify-between">
          <FadeUp>
            <h2 className="text-3xl font-semibold font-['Playfair_Display']">
              Featured Artworks
            </h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <a
              href="#"
              className="text-sm text-gray-700 hover:underline"
            >
              Browse all artworks
            </a>
          </FadeUp>
        </div>

        {/* Image Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {images.map((item, i) => (
            <FadeUp key={i} delay={0.06 * i}>
              <div
                className="relative"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <figure className="bg-white rounded-lg overflow-hidden shadow-sm transition hover:shadow-md">
                  <div className="w-full h-56 bg-gray-100 overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <figcaption className="p-4">
                    <h4 className="text-sm font-medium">{item.title}</h4>
                    <p className="mt-2 text-xs text-gray-500">{item.artist}</p>
                  </figcaption>
                </figure>

                {/* Hover Preview */}
                <AnimatePresence>
                  {hovered === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-0 left-full ml-6 bg-white shadow-2xl rounded-lg 
                                 w-[480px] z-50"
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-[320px] object-contain bg-gray-100 rounded-t-lg"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold font-['Playfair_Display']">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm">{item.artist}</p>
                        <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
