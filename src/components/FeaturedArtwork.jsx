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

export default function FeaturedArtwork() {
  return (
    <section id="featured" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8"> <div className="flex items-baseline justify-between">
        <FadeUp> 
            <h2 className="text-3xl font-semibold font-['Playfair_Display']">Featured Artworks</h2> 
        </FadeUp>
        <FadeUp delay={0.08}> <a href="#" className="text-sm text-gray-700 hover:underline">Browse all artworks</a> </FadeUp> 
        </div>

        {/* Image Grid */}
        {(() => {
          const images = [
            "https://i.etsystatic.com/43391614/r/il/119cce/5692531201/il_794xN.5692531201_6jpc.jpg", 
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEpjIGnttTgX65zO_vfGHGM-0X6WetjW8uHIzVt-4q0c9RCbW_22WLBgaIC8AJxuqt_o7dAu4y8SPPc-kpNnzsfqxkLTvRHfmDe_117rAhaCe4cANQhlRW_Du6Gpas7dXt1qItzejOfTDQ/s1600/ajanta10.jpg", 
            "https://mediacloud.saffronart.com/auctions/2018/classic/unknown_1804ant_11127_big.jpg", 
            "https://muselot.in/cdn/shop/articles/gond_painting.jpg?v=1676631899", 
            "https://webneel.com/daily/sites/default/files/images/daily/03-2013/22-ravi-varma-reproductional-paintings.jpg", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOqwLNn3G1IHRX8xBYV7Ai-n36mlbnhTYDw&s", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJzUACn_v6Mw3PylwUNL3G4RzfmHd03xy0AA&s", 
            "https://artlifetoday.in/wp-content/uploads/2024/06/Husain-1-1-1024x787.jpg"
          ];

          return (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {images.map((src, i) => (
                <FadeUp key={i} delay={0.06 * i}>
                  <a
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <figure className="bg-white rounded-lg overflow-hidden shadow-sm transition hover:shadow-md">
                      <div className="w-full h-56 bg-gray-100 overflow-hidden">
                        <img
                          src={src}
                          alt={`Artwork ${i + 1}`}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <figcaption className="p-4">
                        <h4 className="text-sm font-medium">
                          Artwork Title {i + 1}
                        </h4>
                        <p className="mt-2 text-xs text-gray-500">
                          Artist Name — 2024
                        </p>
                      </figcaption>
                    </figure>
                  </a>
                </FadeUp>
              ))}
            </div>
          );
        })()}
      </div>
    </section>
  );
}
