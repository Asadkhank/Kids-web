import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import SnapDeal from "./Pages/SnapDeal";
import Blogs from "./Pages/Blogs";
import RicebooMiniPlushToy from "./Pages/RicebooMiniPlushToy";
import CartPanel from "./Pages/Cart";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Router>
      <Navbar toggleCart={toggleCart} />
      <CartPanel isOpen={isCartOpen} toggleCart={toggleCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snapdeal" element={<SnapDeal />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/riceboo" element={<RicebooMiniPlushToy />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
