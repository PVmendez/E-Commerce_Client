import News from "./HomeComponents/News/News";
import Filter from "./HomeComponents/Filter/Filter";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Carousel from "./HomeComponents/Carousel/Carousel";

import { Button } from "react-bootstrap";
import Categories from "./HomeComponents/Categories/Categories";
import "./Home.css";

export default function Home({ handleShow }) {
  return (
    <div className="Home">
      <Navbar />
      <div className="img-paralax"><Carousel /></div>
      <Categories />
      <Filter />
      <div className="container">
        <News />
      </div>
      <Footer />
      <Button className="btn-flotante" onClick={handleShow}>
        SOBRE ESTE PROYECTO
      </Button>
    </div>
  );
}
