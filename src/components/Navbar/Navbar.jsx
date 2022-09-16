import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/userSlice/userSlice";

export default function Navbar() {
  const userStore = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="navbar navbar-expand-lg navbar-light navBar">
      <div className="container container-nav">
        <Link to="/" className="navbar-brand">
          <picture>
            <img src="img/logo.png" alt="" />
          </picture>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarCollapse"
        >
          <div className="navbar-nav ml-auto">
            <Link to="/" className="nav-item nav-link">
              HOME
            </Link>
            <Link to="/productos" className="nav-item nav-link">
              PRODUCTOS
            </Link>

            <Link to="/about" className="nav-item nav-link">
              LA EMPRESA
            </Link>
            <Link to="/carrito" className="nav-item nav-link">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            {userStore.length === 0 && (
              <Link to="/login" className="nav-item nav-link">
                <i className="fa-solid fa-user"></i>
              </Link>
            )}
            {userStore.length > 0 && (
              <>
                <Link to="/pedidos" className="nav-item nav-link">
                  <i className="fa-solid fa-address-book me-3"></i> HISTORIAL DE
                  COMPRAS
                </Link>
                <Link
                  to="/"
                  className="nav-item nav-link"
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  <i className="fa-solid fa-right-from-bracket"></i>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
