import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Extras/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./pages/Contact.jsx";
import Cart from "./Extras/Cart.jsx";
import Upload from "./components/Upload.jsx";
import Profile from "./Extras/Profile.jsx";
import Login from "./Extras/Login.jsx";
import Signup from "./Extras/Signup.jsx";
import ArtworkDetail from "./pages/ArtworkDetail";
import Featured from "./pages/Featured.jsx";
import Exhibition from "./pages/Exhibition.jsx";
import Nav from "./components/Nav.jsx";
import Sell from "./pages/Sell.jsx";
import Gallery from "./components/Gallery.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art/:id" element={<ArtworkDetail />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/featured" element={<Featured />}/>
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
