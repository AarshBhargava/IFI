import React from "react";
import ArtworkCard from "../components/temp";

const artworks = [
  {
    id: 1,
    title: "Sunset Dreams",
    artist: "Aarsh Bhargava",
    price: "$200",
    image: "https://source.unsplash.com/400x300/?sunset,art",
  },
  {
    id: 2,
    title: "Abstract Thoughts",
    artist: "John Doe",
    price: "$150",
    image: "https://source.unsplash.com/400x300/?abstract,painting",
  },
  {
    id: 3,
    title: "Nature Flow",
    artist: "Jane Smith",
    price: "$180",
    image: "https://source.unsplash.com/400x300/?nature,art",
  },
];

function ArtworkList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {artworks.map((art) => (
        <ArtworkCard key={art.id} {...art} />
      ))}
    </div>
  );
}

export default ArtworkList;
