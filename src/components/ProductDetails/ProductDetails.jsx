import React from "react";
import "./ProductDetails.css";
import Footer from "../Footer/Footer";

export default function ProductDetails() {
  return (
    <>
      <div className="row mb-5">
        <div
          id="col1-productDetails"
          className="col-sm-6 col-12 d-flex justify-content-center align-items-center"
        >
          <img
            className="img-productDetails"
            src="../img/Bombon_6.jpg"
            alt="Product"
          />
        </div>
        <div
          id="col2-productDetails"
          className="col-sm-6 col-12 d-flex justify-content-center flex-column "
        >
          <span className="title-productDetails">Zapallo</span>
          <p className="p-filter" id="p-productDetails">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            consequatur vero vitae quos itaque quae? Voluptates itaque
            molestiae, alias id cumque, quo quaerat dolor quibusdam nostrum
            aperiam voluptatum. Unde, fugit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quo laudantium officia illum qui vitae
            quasi dignissimos alias atque corporis, iusto totam aut doloremque
            labore quae fugit et adipisci hic? Cum?
          </p>
          <div className="d-flex mt-4 align-items-center">
            <div
              style={{ fontSize: 35, fontWeight: 400 }}
              className="circle-counter  d-flex align-items-center justify-content-center"
            >
              -
            </div>
            <div className="mx-4" style={{ fontSize: 35, fontWeight: 600 }}>
              1
            </div>
            <div
              style={{ fontSize: 35, fontWeight: 400 }}
              className="circle-counter d-flex align-items-center justify-content-center"
            >
              +
            </div>
          </div>
          <div>
            <button className="button-filter" id="button-productDetail">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
