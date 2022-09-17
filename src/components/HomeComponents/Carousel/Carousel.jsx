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
              src="./img/Carousel_1.jpg"
              alt="First slide"
            />
          </div>
          {/* <Carousel.Caption>
            <div className="carouselText">
              <h3 className="carouselImgTitle">ARTE SUIZO</h3>
              <p className="carouselImgSub">en chocolate</p>
            </div>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselImgDiv">
            <img
              className="carousel-img img-fluid d-block w-100"
              src="./img/Carousel_2.jpg"
              alt="Second slide"
            />
          </div>

          {/* <Carousel.Caption>
            <div className="carouselText">
              <h3 className="carouselImgTitle">PASIÓN</h3>
              <p className="carouselImgSub">por lo que hacemos</p>
            </div>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselImgDiv filterScreen">
            <img
              className="carousel-img img-fluid d-block w-100"
              src="./img/Carousel_3.jpg"
              alt="Third slide"
            />
          </div>

          {/* <Carousel.Caption>
            <div className="carouselText">
              <h3 className="carouselImgTitle">PERSONALIDAD</h3>
              <p className="carouselImgSub">y carácter</p>
            </div>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
