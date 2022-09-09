import "./ProductList.css";
import { Product } from "./Product";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const ProductList = () => {
  const [productos, setProductos] = useState();
  const [category, setCategory] = useState(0);
  useEffect(() => {
    console.log(process.env.REACT_APP_API_BASE_URL);
    const getByCategory = async () => {
      const result = await axios({
        method: "get",
        baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
        url: `/products/category/${category}`,
      });
      setProductos(result.data);
    };
    getByCategory();
  }, [category]);

  return (
    <>
      {productos && console.log(productos)}
      <Navbar />
      <header className="page-section masthead2">
        <div className="container h-50">
          <h1 className="mt-5 section-header text-white font-weight-bold">
            PRODUCTOS
          </h1>
          <p className="main-menu text-white-75 font-weight-light mb-5">
            <Link className="link-menu" to="/">
              {"Home >"} <span className="masthead-title">Products</span>
            </Link>
          </p>
        </div>
      </header>
      <section className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 blog-form">
              <h2 className="blog-sidebar-title">
                <b>CATEGORIAS</b>
              </h2>
              <hr />

              <p
                className="blog-sidebar-list"
                onClick={() => {
                  setCategory(0);
                }}
              >
                <b>
                  <span className="list-icon"> {">"} </span> Todos
                </b>
              </p>
              <p
                className="blog-sidebar-list"
                onClick={() => {
                  setCategory(1);
                }}
              >
                <b>
                  <span className="list-icon"> {">"} </span> Clasicos
                </b>
              </p>
              <p
                className="blog-sidebar-list"
                onClick={() => {
                  setCategory(2);
                }}
              >
                <b>
                  <span className="list-icon"> {">"} </span> Premium
                </b>
              </p>

              <div>&nbsp;</div>
              <div>&nbsp;</div>
            </div>

            <div className="col-lg-9">
              <div className="row">
                <div className="col">
                  Showing all {productos.length} results
                </div>
              </div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>

              <div className="row justify-content-center">
                {productos &&
                  productos.map((producto) => {
                    return <Product producto={producto} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
