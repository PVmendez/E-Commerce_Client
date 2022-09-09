import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header({ product }) {
  const navigate = useNavigate();
  const location = useLocation();
  let slug = "";
  if (product) {
    slug = product.slug;
  }
  return (
    <header className="page-section masthead2">
      <div className="container h-50">
        <h1 className="mt-5 section-header text-white font-weight-bold">
          PRODUCTOS
        </h1>
        <p className="link-menu main-menu text-white-75 font-weight-light mb-5">
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
                navigate("/products");
              }}
            >
              /products /{slug}
            </span>
          ) : (
            <span>{location.pathname}</span>
          )}
        </p>
      </div>
    </header>
  );
}
