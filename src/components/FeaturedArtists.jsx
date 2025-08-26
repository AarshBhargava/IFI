// pages/FeaturedArtists.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function FeaturedArtists() {
  const railRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const artists = [
    {
      name: "MF Hussain",
      description: "Contemporary Artist",
      image: "https://artlifetoday.in/wp-content/uploads/2024/06/39-famous-indian-artist-mfhusain.jpg",
      link: "#artist1",
    },
    {
      name: "Arpita Singh",
      description: "Contemporary Artist",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRm91RX9u6ci3qfKXFZNs9_aS48Q5lk7uZR9PUjmi53PjLl9-kCKUz87pZmvaYIJG_oRgmOzeqZb2yG3shhHuNnfw",
      link: "#artist2",
    },
    {
      name: "Sheela Gowda",
      description: "Contemporary Artist",
      image: "https://cdn.dnaindia.com/sites/default/files/2014/08/30/263786-sheela.jpg?im=FitAndFill=(1200,900)",
      link: "#artist#3",
    },
    {
      name: "S. H. Raza",
      description: "Contemporary Artist",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTbzfIwZWxg8QswvMTbz4cmM5nOa2Q9jYpILOCLaooG1BFsgj5NGNBAVlvjOSG8g8rZlNITCSDtkzJv6Vg1Y_cwtZMXWC_KznQ2YzBS0bei",
      link: "#artist5",
    },
    {
      name: "Bharati Kher",
      description: "Contemporary Artist",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTzRmYRYCoY5I9_kzQrJ4u2f00LME0CNb-2rdMMYBDRM-wSIXCUxBQYWglucJwASITYlL0eHhO2s9ejXDAuJEXN4w",
      link: "#artist6",
    },
  ];

  const interval = 4000; // 4 seconds

  // Duplicate items for infinite loop
  const extendedArtists = [...artists, ...artists];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, interval);

    return () => clearInterval(intervalId);
  }, []);

  // Reset when reaching clone section
  useEffect(() => {
    if (currentIndex >= artists.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // temporarily disable transition
        setCurrentIndex(0);        // snap to start
        requestAnimationFrame(() => setIsTransitioning(true)); // re-enable transition
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, artists.length]);

  const handleClick = (artist) => {
    if (artist.link) window.location.href = artist.link;
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-3xl font-semibold font-['Playfair_Display'] text-center mb-10">
            Featured Artists
          </h2>
        </FadeUp>

        <div className="overflow-hidden">
          <div
            ref={railRef}
            className={`flex gap-6 ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
            style={{
              width: `${(extendedArtists.length / 4) * 100}%`,
              transform: `translateX(-${(100 / extendedArtists.length) * currentIndex}%)`,
            }}
          >
            {extendedArtists.map((artist, i) => (
              <figure
                key={i}
                onClick={() => handleClick(artist)}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer flex-shrink-0 w-64 sm:w-52 md:w-60 lg:w-64"
              >
                <div className="w-full h-80 sm:h-72 md:h-80 lg:h-80 bg-gray-100 overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
                <figcaption className="p-4 text-center">
                  <h4 className="text-base font-semibold text-gray-800">{artist.name}</h4>
                  <p className="mt-2 text-sm text-gray-500">{artist.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
