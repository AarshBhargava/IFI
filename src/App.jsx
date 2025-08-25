import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Extras/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./Extras/Contact.jsx";
import Cart from "./Extras/Cart.jsx";
import Upload from "./Extras/Upload.jsx";
import Profile from "./Extras/Profile.jsx";
import Login from "./Extras/Login.jsx";
import Signup from "./Extras/Signup.jsx";
import ArtworkDetail from "./pages/ArtworkDetail";
import Featured from "./pages/Featured.jsx";
import Exhibition from "./pages/Exhibition.jsx";
import Nav from "./components/Nav.jsx";
import Sell from "./pages/Sell.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <Routes>
          <Route path="/IFI/" element={<Home />} />
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
        </Routes>
      </main>
    </div>
  );
}
