// pages/Sell.jsx
import React from "react";
import Hero from "../components/Hero";
import Upload from "../components/Upload";

export default function Sell() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero section but contextualized for Selling */}
      <Hero />

      {/* Upload Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Sell Your Artwork
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Showcase your art to thousands of collectors and enthusiasts. 
            Upload your piece, set your price, and let the world discover your talent.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Upload />
        </div>
      </section>
    </div>
  );
}
