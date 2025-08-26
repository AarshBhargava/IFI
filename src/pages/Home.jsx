// src/pages/HeroPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import TrendingPaintings from "../Extras/TrendingPainting";
import Hero from "../components/Hero";
import Navbar from "../Extras/Navbar";
import ExhibitionGallery from "../components/ExhibitionGallery";
import About from "../components/About";
import FeaturedArtwork from "../components/FeaturedArtwork";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import FeaturedArtists from "../components/FeaturedArtists";
import Categories from "../components/Categories";
import Nav from "../components/Nav";

export default function HeroPage() {
  return (
    <>
      <Hero />
      <Categories />
      <ExhibitionGallery />
      <About />
      <FeaturedArtwork />
      <FeaturedArtists />
      <Newsletter />
    </>
  );
}
