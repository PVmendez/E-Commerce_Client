import React from "react";
import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselComponent() {
  return (
    <div className="row">
      <Carousel>
        <Carousel.Item>
          <div className="carouselImgDiv">
            <img
              className="carousel-img img-fluid d-block w-100"
              src="./img/Carousel_1.jpg"
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <div className="carouselText">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselImgDiv">
            <img
              className="carousel-img img-fluid d-block w-100"
              src="./img/Carousel_2.jpg"
              alt="Second slide"
            />
          </div>

          <Carousel.Caption>
            <div className="carouselText">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselImgDiv">
            <img
              className="carousel-img img-fluid d-block w-100"
              src="./img/Carousel_3.jpg"
              alt="Third slide"
            />
          </div>

          <Carousel.Caption>
            <div className="carouselText">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
