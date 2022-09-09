import "./ProductDetails.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../Header";

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getProducts = async () => {
      const result = await axios({
        method: "GET",
        baseURL: process.env.REACT_APP_API_BASE_URL,
        url: `/products/${id}`,
      });
      setProduct(result.data);
    };
    getProducts();
  }, [id]);

  return (
    <>
      <Navbar />
      <Header product={product} />
      <div className="row mb-5">
        <div
          id="col1-productDetails"
          className="col-sm-6 col-12 d-flex justify-content-center align-items-center"
        >
          <img
            className="img-productDetails"
            src={`/img/${product.image}`}
            alt="Product"
          />
        </div>
        <div
          id="col2-productDetails"
          className="col-sm-6 col-12 d-flex justify-content-center flex-column "
        >
          <span className="title-productDetails">{product.name}</span>
          <p className="p-filter" id="p-productDetails">
            {product.description}
          </p>
          <div className="tags"> USD {product.price}</div>
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
              <i className="fa fa-shopping-cart" aria-hidden="true"></i> Añadir
              al carrito
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
