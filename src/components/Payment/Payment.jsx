import React from "react";
import { Link } from "react-router-dom";
import "./Payment.css";

export default function Payment() {
  return (
    <>
      <div className="row navbar-Checkout">
        <p>Finalizar compra</p>
        <Link to="/">
          <p>Seguir comprando</p>
        </Link>
      </div>
      <div className="row">
        <h2>1 Datos de envio</h2>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="email"
            className="form-control form-checkout"
            id="nombre"
          ></input>
        </div>
      </div>
    </>
  );
}
