import About from "./HomeComponents/About/About";
import Filter from "./HomeComponents/Filter/Filter";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import CarouselComponent from "./HomeComponents/Carousel/Carousel";
import "./HomeComponents/Home.css";
import { useSelector } from "react-redux";

export default function Home() {
  const userState = useSelector((state) => state.user.user);
  console.log(userState);
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
