import About from "./HomeComponents/About/About";
import Filter from "./HomeComponents/Filter/Filter";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import CarouselComponent from "./HomeComponents/Carousel/Carousel";
import "./HomeComponents/Home.css";
import React from "react";

export default function Home() {
  return (
    <div className="Home">
      <Navbar />
      <CarouselComponent />
      <Filter />
      <About />
      <Footer />
    </div>
  );
}
