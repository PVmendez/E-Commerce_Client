import About from "./HomeComponents/About";
import Carousel from "./HomeComponents/Carousel";
import Filter from "./HomeComponents/Filter";
import Footer from "./HomeComponents/Footer";
import Navbar from "./HomeComponents/Navbar";
import Popular from "./HomeComponents/Popular";

import React from "react";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Filter />
      <Popular />
      <About />
      <Footer />
    </div>
  );
}
