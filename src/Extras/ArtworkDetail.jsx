import React from "react";
import { useParams, Link } from "react-router-dom";

const artworks = [
  {
    id: 1,
    title: "Sunset Dreams",
    artist: "Aarsh Bhargava",
    price: "$200",
    description: "A vibrant sunset artwork to bring warmth to your space.",
    image: "https://source.unsplash.com/800x600/?sunset,art",
  },
  {
    id: 2,
    title: "Abstract Thoughts",
    artist: "John Doe",
    price: "$150",
    description: "Abstract strokes full of imagination and colors.",
    image: "https://source.unsplash.com/800x600/?abstract,painting",
  },
  {
    id: 3,
    title: "Nature Flow",
    artist: "Jane Smith",
    price: "$180",
    description: "A beautiful piece capturing the serenity of nature.",
    image: "https://source.unsplash.com/800x600/?nature,art",
  },
];

function ArtworkDetail() {
  const { id } = useParams();
  const art = artworks.find((item) => item.id === parseInt(id));

  if (!art) return <p>Artwork not found.</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">
      <img
        src={art.image}
        alt={art.title}
        className="w-full h-96 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{art.title}</h1>
      <p className="text-gray-600 mt-2">by {art.artist}</p>
      <p className="text-indigo-600 font-bold text-xl mt-2">{art.price}</p>
      <p className="mt-4 text-gray-700">{art.description}</p>
      <Link
        to="/"
        className="inline-block mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        ← Back to Marketplace
      </Link>
    </div>
  );
}

export default ArtworkDetail;
