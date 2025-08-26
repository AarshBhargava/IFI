// Gallery.jsx
import React from "react";
import { motion } from "framer-motion";
import HoverPreviewCard from "./HoverPreviewCard";

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

export default function Gallery() {
  const paintingFiles = [
     "Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.jpg",
    "Van Gogh - Starry Night - Google Art Project.jpg",
    "Claude Monet - Water Lilies - Google Art Project.jpg",
    "The Kiss - Gustav Klimt - Google Cultural Institute.jpg",
    "Great Wave off Kanagawa2.jpg",
    "Meisje met de parel.jpg",
    "Michelangelo - Creation of Adam (cropped).jpg",
    "Eugène Delacroix - La liberté guidant le peuple.jpg",
    "Fragonard, The Swing.jpg",
    "The Garden of earthly delights.jpg",
    "La scuola di Atene.jpg",
    "A Sunday on La Grande Jatte 1884.jpg",
    "Paul Cézanne - The Card Players - Google Art Project.jpg",
    "Van Gogh - The Night Café - Google Art Project.jpg",
    "Vincent van Gogh - De slaapkamer - Google Art Project.jpg",
    "Claude Monet, Impression, soleil levant.jpg",
    "Des Glaneuses - Jean-François Millet - Google Cultural Institute.jpg",
    "Wheatfield with crows.jpg",
    "Vincent van Gogh - Terrasse du café le soir.jpg",
    "Starry Night Over the Rhône.jpg",
    "Jan van Eyck - Arnolfini Portrait.jpg",
    "Pieter Bruegel the Elder - Hunters in the Snow (Winter) - Google Art Project.jpg",
    "Rembrandt van Rijn - De Nachtwacht - 1642.jpg",
    "Johannes Vermeer - Het melkmeisje - Google Art Project.jpg",
    "Sandro Botticelli - La Primavera - Google Art Project.jpg",
    "Raphael - Sistine Madonna - Google Art Project.jpg",
    "Caravaggio - The Calling of Saint Matthew (1599-1600).jpg",
    "Turner - The Fighting Temeraire.jpg",
    "Edgar Degas - La classe de danse - Google Art Project.jpg",
    "Georges Seurat - Bathers at Asnières - Google Art Project.jpg",
    "Édouard Manet - Le Déjeuner sur l'herbe.jpg",
    "Francisco de Goya - The Third of May 1808 - Google Art Project.jpg",
    "Pieter Bruegel the Elder - Peasant Wedding - Google Art Project.jpg",
    "Sandro Botticelli - The Birth of Venus - Uffizi.jpg",
    "Rembrandt - The Return of the Prodigal Son - Hermitage.jpg",
    "Edvard Munch - The Scream.jpg"
  ];

  // Small thumbnails (fast grid load)
  const thumbs = paintingFiles.map(
    (title) =>
      `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(
        title
      )}?width=300`
  );

  // Large images (only for hover preview)
  const fullImages = paintingFiles.map(
    (title) =>
      `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(
        title
      )}?width=1200`
  );

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-baseline justify-between">
          <FadeUp>
            <h2 className="text-3xl font-semibold font-['Playfair_Display']">
              Gallery
            </h2>
          </FadeUp>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {thumbs.map((thumb, i) => (
            <FadeUp key={i} delay={0.05 * i}>
              <HoverPreviewCard
                item={{
                  img: thumb,            
                  fullImg: fullImages[i],  
                  title: `Artwork ${i + 1}`,
                  desc: "Masterpiece of fine art",
                  date: "Public Domain",
                  details:
                    "This is a world-renowned painting preserved in history."
                }}
              />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
