import React from "react";
import { Link } from "react-router-dom";
import ArtCard from "./ArtCard";
import { ArrowRight } from "lucide-react"; 

const artworks = [
  {
    id: 1,
    src: "https://i.etsystatic.com/43391614/r/il/119cce/5692531201/il_794xN.5692531201_6jpc.jpg",
    title: "Ajanta Painting",
    artist: "Unknown — 5th Century",
    details: "Intricate Buddhist fresco.",
    price: 120000,
    medium: "Fresco",
    size: "120 × 80 cm",
  },
  {
    id: 2,
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEpjIGnttTgX65zO_vfGHGM-0X6WetjW8uHIzVt-4q0c9RCbW_22WLBgaIC8AJxuqt_o7dAu4y8SPPc-kpNnzsfqxkLTvRHfmDe_117rAhaCe4cANQhlRW_Du6Gpas7dXt1qItzejOfTDQ/s1600/ajanta10.jpg",
    title: "Ajanta Fresco",
    artist: "Unknown — 6th Century",
    details: "Buddhist tales fresco.",
    price: 150000,
    medium: "Fresco",
    size: "130 × 90 cm",
  },
  {
    id: 3,
    src: "https://mediacloud.saffronart.com/auctions/2018/classic/unknown_1804ant_11127_big.jpg",
    title: "Classic Indian Art",
    artist: "18th Century",
    details: "Miniature painting.",
    price: 95000,
    medium: "Miniature Painting",
    size: "50 × 40 cm",
  },
  {
    id: 4,
    src: "https://muselot.in/cdn/shop/articles/gond_painting.jpg?v=1676631899",
    title: "Gond Painting",
    artist: "Tribal Art",
    details: "Intricate folk patterns.",
    price: 65000,
    medium: "Acrylic on Paper",
    size: "70 × 50 cm",
  },
  {
    id: 5,
    src: "https://webneel.com/daily/sites/default/files/images/daily/03-2013/22-ravi-varma-reproductional-paintings.jpg",
    title: "Raja Ravi Varma",
    artist: "19th Century",
    details: "European realism + Indian ethos.",
    price: 180000,
    medium: "Oil on Canvas",
    size: "120 × 90 cm",
  },
  {
    id: 6,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOqwLNn3G1IHRX8xBYV7Ai-n36mlbnhTYDw&s",
    title: "Contemporary Abstract",
    artist: "Modern Indian Artist",
    details: "Bold abstract Indian motifs.",
    price: 75000,
    medium: "Acrylic",
    size: "60 × 60 cm",
  },
  {
    id: 7,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJzUACn_v6Mw3PylwUNL3G4RzfmHd03xy0AA&s",
    title: "Spiritual Motifs",
    artist: "Modern Artist",
    details: "Vibrant modern brush strokes.",
    price: 85000,
    medium: "Mixed Media",
    size: "70 × 50 cm",
  },
  {
    id: 8,
    src: "https://artlifetoday.in/wp-content/uploads/2024/06/Husain-1-1-1024x787.jpg",
    title: "M.F. Husain",
    artist: "20th Century",
    details: "Bold cultural themes.",
    price: 200000,
    medium: "Oil on Canvas",
    size: "100 × 80 cm",
  },
];

export default function FeaturedArtwork() {
  return (
    <section className="py-20 bg-white" id="featured-artworks">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header with browse link */}
        <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between mb-8 gap-2 sm:gap-0">
          <h2 className="text-3xl font-semibold font-['Playfair_Display'] text-gray-900">
            Featured Artworks
          </h2>
          <Link
            to="/featured"
            className="text-sm text-gray-700 hover:underline flex items-center gap-1"
          >
            Browse all Artworks <ArrowRight size={16} />
          </Link>
        </div>

        {/* Art Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artworks.map((art, i) => (
            <ArtCard key={art.id} artwork={art} delay={0.05 * i} />
          ))}
        </div>
      </div>
    </section>
  );
}
