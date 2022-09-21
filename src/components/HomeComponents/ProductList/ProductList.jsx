import "./ProductList.css";
import { Product } from "./Product";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../../Header";
import { Button } from "react-bootstrap";

export const ProductList = ({ handleShow }) => {
  const [productos, setProductos] = useState(null);
  const [category, setCategory] = useState(0);
  useEffect(() => {
    let params = "";
    if (category > 0) {
      params = `/products?category=${category}`;
    } else {
      params = "/products";
    }
    const getByCategory = async () => {
      const result = await axios({
        method: "get",
        baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
        url: params,
      });

      setProductos(result.data);
    };
    getByCategory();
  }, [category]);

  return (
    <>
      <Navbar />
      <Header />
      <section className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 blog-form">
              <h2 className="blog-sidebar-title">
                <p id="categories">categorías</p>
              </h2>
              <hr />
              <p
                className="blog-sidebar-list"
                onClick={() => {
                  setCategory(0);
                }}
              >
                <span className="list-words list-icon"> {">"} </span> Todos
              </p>
              <p
                className="blog-sidebar-list"
                onClick={() => {
                  setCategory(1);
                }}
              >
                <span className="list-words list-icon"> {">"} </span> Clasicos
              </p>
              <p
                className="blog-sidebar-list"
                onClick={() => {
                  setCategory(2);
                }}
              >
                <span className="list-words list-icon"> {">"} </span> Premium
              </p>
            </div>

            <div className="col-lg-9" id="div-list">
              <div className="row justify-content-center justify-content-md-between">
                <div className="col-12 text-center">
                  {productos && productos.length} resultados
                </div>
                {productos &&
                  productos.map((producto, index) => {
                    return <Product key={index} producto={producto} />;
                  })}
              </div>
            </div>
          </div>
          <Button className="btn-flotante" onClick={handleShow}>
            SOBRE ESTE PROYECTO
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
};
