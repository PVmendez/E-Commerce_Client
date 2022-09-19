import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/userSlice/userSlice";

export default function Navbar() {
  const userStore = useSelector((state) => state.user);
  const cartStore = useSelector((state) => state.cart);
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
                <Link to="/carrito" className="nav-item nav-link">
                  <i className="fa-solid fa-cart-shopping carrito"></i>
                  {cartStore ? <svg
                    className="products-cart"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 100 100"
                  > 
                    <circle cx="30" cy="50" r="30" fill="orange"></circle>
                    <text x="23" y="65" className="cart-number">1</text>
                  </svg> : null}
                  
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
