import React from "react";
import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselComponent() {
  return (
    <div className="row carouselRow">
      <Carousel>
        <Carousel.Item>
          <div className="carouselImgDiv">
            <img
              className="carousel-img img-fluid d-block w-100"
              src="https://taklnamocbdbysfkbsho.supabase.co/storage/v1/object/public/psfe-commerce/Carousel_1.jpg"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselImgDiv">
            <img
              className="carousel-img img-fluid d-block w-100"
              src="https://taklnamocbdbysfkbsho.supabase.co/storage/v1/object/public/psfe-commerce/Carousel_2.jpg"
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselImgDiv filterScreen">
            <img
              className="carousel-img img-fluid d-block w-100"
              src="https://taklnamocbdbysfkbsho.supabase.co/storage/v1/object/public/psfe-commerce/Carousel_3.jpg"
              alt="Third slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
