import About from "./HomeComponents/About/About";
import Filter from "./HomeComponents/Filter/Filter";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import CarouselComponent from "./HomeComponents/Carousel/Carousel";
import "./HomeComponents/Home.css";
import { Button } from "react-bootstrap";

export default function Home({ handleShow }) {
  return (
    <div className="Home">
      <Navbar />
      <CarouselComponent />
      <Filter />
      <div className="container">
        <About />
      </div>
      <Footer />
      <Button className="btn-flotante" onClick={handleShow}>
        SOBRE ESTE PROYECTO
      </Button>
    </div>
  );
}
