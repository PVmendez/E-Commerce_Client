import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar navbar-expand-lg bg-light navbar-light ">
    <div className="container-fluid container-nav">
      <Link to="/" className="navbar-brand">
        <picture>
          <img src="img/logo.png" alt="" />
        </picture>
      </Link>
      <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
        <div className="navbar-nav ml-auto">
          <Link to="" className="nav-item nav-link">FABRICACIÓN</Link>
          <Link to="" className="nav-item nav-link">PRODUCTOS</Link>
          <Link to="/" className="nav-item nav-link">PRESENTACIONES</Link>
          <Link to="/" className="nav-item nav-link">LA EMPRESA</Link>
          <Link to="/" className="nav-item nav-link">CONTACTO</Link>
        </div>
      </div>
    </div>
  </div>

  


  )
}
