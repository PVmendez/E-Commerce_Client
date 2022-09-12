import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ product }) {
  const navigate = useNavigate();
  let slug = "";
  if (product) {
    slug = product.slug;
  }
  return (
    <header id="header" className="page-section masthead2">
      <div className="container h-50">
        <h1 className="mt-5 section-header text-white font-weight-bold">
          PRODUCTOS
        </h1>
        <p className="link-menu main-menu text-white font-weight-light mb-5">
          <span
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </span>{" "}
          {product ? (
            <span
              onClick={() => {
                navigate("/productos");
              }}
            >
              {">"} Productos{" "}
              <span className="main-menu">
                {">"} {slug}
              </span>
            </span>
          ) : (
            <span className="main-menu">{">"} Productos</span>
          )}
        </p>
      </div>
    </header>
  );
}
