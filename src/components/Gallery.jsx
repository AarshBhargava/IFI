import React from "react";
import ArtCard from "./ArtCard";

const paintingFiles = [
  "Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.jpg",
  "Van Gogh - Starry Night - Google Art Project.jpg",
  "Claude Monet - Water Lilies - Google Art Project.jpg",
  "The Kiss - Gustav Klimt - Google Cultural Institute.jpg",
  "Great Wave off Kanagawa2.jpg",
  "Meisje met de parel.jpg",
  "Michelangelo - Creation of Adam (cropped).jpg",
  "Eugène Delacroix - La liberté guidant le peuple.jpg",
  "The_Birth_of_Venus_by_Botticelli.jpg",
  "Water_Lilies.jpg",
  "The_Kiss.jpg",
  "Great_Wave_off_Kanagawa.jpg",
  "The_Kiss_by_Gustav_Klimt.jpg",
  "The_Garden_of_Earthly_Delights_by_Hieronymus_Bosch.jpg",

  "Historical Painting depicting Royal Hunt and Falconry in India 1.jpg",
  "Tableau 31 Indians hunting the bison by Karl Bodmer.jpg",
  "Indian Encampment, oil painting by Cornelius Krieghoff, 1851.jpg",
  "Indian - Laylá visits Majnūn in the Wilderness - 401-1952 - Saint Louis Art Museum.jpg",
  "Bodleian Library Indian paintings MS. Douce Or. a.3 fol30r.jpg"
  
];

const thumbs = paintingFiles.map(
  (title) =>
    `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(title)}?width=600`
);

// Generate artwork objects
const artworks = paintingFiles.map((file, idx) => {
  const titles = [
    "Spring Tree Painting","Delicate Happiness","The Room No:238",
    "Golden Horizon","Silent Thoughts","Mystic Waves","Eternal Embrace",
    "Dreamscape","Whispering Light","Sunset Serenity","Celestial Dreams",
    "Ocean's Embrace","Morning Glow","Timeless Wonder","Hidden Garden",
    "Shimmering Dusk"
  ];
  const artists = [
    "Lilia Orlova-Holmes, Uni...","Fares Micue, Spain","Erna Ucar, Luxembourg",
    "Claude Monet, France","Vincent van Gogh, Netherlands","Gustav Klimt, Austria",
    "Leonardo da Vinci, Italy","Edvard Munch, Norway","Johannes Vermeer, Netherlands",
    "Sandro Botticelli, Italy","Georges Seurat, France","Paul Cézanne, France",
    "Pierre-Auguste Renoir, France","Hieronymus Bosch, Netherlands","Michelangelo, Italy",
    "Eugène Delacroix, France"
  ];
  const mediums = ["Oil On Canvas", "Acrylic On Canvas", "Digital On Paper", "Watercolor"];
  const sizes = ["100 × 120 cm", "60.2 × 70.1 cm", "100.1 × 150.1 cm", "80 × 100 cm"];
  
  return {
    src: thumbs[idx],
    title: titles[idx % titles.length],
    artist: artists[idx % artists.length],
    medium: mediums[Math.floor(Math.random() * mediums.length)],
    size: sizes[Math.floor(Math.random() * sizes.length)],
    price: Math.floor(Math.random() * 1000000) + 50000
  };
});

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-semibold font-['Playfair_Display'] text-gray-900">
          Gallery
        </h2>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {artworks.map((art, i) => (
            <ArtCard
              key={i}
              artwork={art}  // pass artwork object
              delay={0.05 * i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
