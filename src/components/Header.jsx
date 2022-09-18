import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header({ product }) {
  const navigate = useNavigate();
  const location = useLocation();
  let slug = "";
  if (product) {
    slug = product.slug;
  }

  const path = location.pathname.slice(1);
  const showPath = path && path[0].toUpperCase() + path.slice(1);

  return (
    <header id="header" className="page-section masthead2">
      <div className="container h-50 paths">
        <p className="mt-5 section-header title-header">
          {showPath.split("/")[0]}
        </p>
        <p className="link-menu main-menu  mb-5">
          <span
            className="path-header"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </span>{" "}
          {product ? (
            <>
              <span
                className="path-header"
                onClick={() => {
                  navigate(`/${location.pathname}`);
                }}
              >
                {">"} {showPath.split("/")[0]}{" "}
              </span>
              <span
                onClick={() => {
                  navigate(`/${location.pathname}`);
                }}
              >
                {">"} {slug}{" "}
              </span>
            </>
          ) : (
            <span
              onClick={() => {
                navigate(`/${location.pathname}`);
              }}
            >
              {">"} {showPath}{" "}
            </span>
          )}
        </p>
      </div>
    </header>
  );
}
