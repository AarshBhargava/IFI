import React from "react";
import { Link } from "react-router-dom";

function ArtworkCard({ id, title, artist, price, image }) {
  return (
    <Link to={`/art/${id}`}>
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <h3 className="mt-3 text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{artist}</p>
        <p className="text-indigo-600 font-bold mt-2">{price}</p>
      </div>
    </Link>
  );
}

export default ArtworkCard;
