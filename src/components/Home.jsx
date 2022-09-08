import About from "./HomeComponents/About/About";
import Carousel from "./HomeComponents/Carousel/Carousel";
import Filter from "./HomeComponents/Filter/Filter";
import Footer from "./HomeComponents/Footer/Footer";
import Navbar from "./HomeComponents/Navbar/Navbar";
import "./HomeComponents/Home.css";

import React from "react";

export default function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Carousel />
      <Filter />
      <About />
      <Footer />
    </div>
  );
}
