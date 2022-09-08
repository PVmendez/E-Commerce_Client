import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div class="navbar navbar-expand-lg bg-light navbar-light ">
    <div class="container-fluid">
      <Link to="/" class="navbar-brand">
        <picture>
          <img src="logo192.png" alt="" />
        </picture>
      </Link>
      <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
        <div class="navbar-nav ml-auto">
          <Link to="" class="nav-item nav-link">FABRICACIÓN</Link>
          <Link to="" class="nav-item nav-link">PRODUCTOS</Link>
          <Link to="/" class="nav-item nav-link">PRESENTACIONES</Link>
          <Link to="/" class="nav-item nav-link">LA EMPRESA</Link>
          <Link to="/" class="nav-item nav-link">CONTACTO</Link>
        </div>
      </div>
    </div>
  </div>

  


  )
}
