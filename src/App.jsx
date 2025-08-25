import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./Extras/Contact.jsx";
import Cart from "./Extras/Cart.jsx";
import Upload from "./Extras/Upload.jsx";
import Profile from "./Extras/Profile.jsx";
import Login from "./Extras/Login.jsx";
import Signup from "./Extras/Signup.jsx";
import Test from "./Extras/Test.jsx";
import ArtworkDetail from "./pages/ArtworkDetail";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art/:id" element={<ArtworkDetail />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}
