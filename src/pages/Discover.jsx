// pages/Discover.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HoverPreviewCard from "../components/HoverPreviewCard";

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

const collections = [
  { id: 1, title: "Renaissance", img: "https://artincontext.org/wp-content/uploads/2021/06/Renaissance-Art.jpg" },
  { id: 2, title: "Impressionism", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg/500px-Claude_Monet%2C_Impression%2C_soleil_levant.jpg" },
  { id: 3, title: "Modern Art", img: "https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/66248/260413/1615362031817_radha_krishna_modern_art__04756.1687169293.jpg?c=2" },
  { id: 4, title: "Expressionism", img: "https://arthistoryproject.com/site/assets/files/9111/expressionism-obelisk-art-history.jpg" },
  { id: 5, title: "Indian Art", img: "https://www.tallengestore.com/cdn/shop/files/PeacockAndFish-MadhubaniPainting-FolkArtOfIndia_90894895-8700-4aca-a715-9a199e7b1086.jpg?v=1733380878" },
  { id: 6, title: "Baroque", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT282R7695M9otYlNQRyPHrb5bBbQZGlTY0Tg&s" },
];

const featuredArtworks = [
  { id: 1, title: "Mona Lisa", img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" },
  { id: 2, title: "Starry Night", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" },
  { id: 3, title: "The Scream", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/The_Scream.jpg/800px-The_Scream.jpg" },
  { id: 4, title: "The Kiss", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Klimt_-_The_Kiss.jpg/800px-Klimt_-_The_Kiss.jpg" },
  { id: 5, title: "The Persistence of Memory", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/The_Persistence_of_Memory.jpg/800px-The_Persistence_of_Memory.jpg" },
  { id: 6, title: "The Night Watch", img: "https://upload.wikimedia.org/wikipedia/commons/3/36/Rembrandt_-_The_Night_Watch.jpg" },
];

export default function Discover() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeUp>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-10">
            Discover Art
          </h1>
        </FadeUp>

        {/* Collections */}
        <FadeUp delay={0.1}>
          <h2 className="text-2xl font-semibold mb-6">Collections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
            {collections.map((c) => (
              <Link
                key={c.id}
                to="#"
                className="group relative block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-60 sm:h-64 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <h4 className="text-white font-medium">{c.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </FadeUp>

        {/* Featured Artworks */}
        <FadeUp delay={0.3}>
          <h2 className="text-2xl font-semibold mb-6">Featured Artworks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {featuredArtworks.map((art) => (
              <HoverPreviewCard key={art.id} item={art} className="h-80" />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
