import About from "./HomeComponents/About/About";
import CarouselComponent from "./HomeComponents/Carousel/Carousel";
import Filter from "./HomeComponents/Filter/Filter";
import Footer from "./Footer/Footer";
import Navbar from "./HomeComponents/Navbar/Navbar";
import Popular from "./HomeComponents/Popular/Popular";

import React from "react";

export default function Home() {
  return (
    <div>
      <Navbar />
      <CarouselComponent />
      <Filter />
      <About />
      <Footer />
    </div>
  );
}
