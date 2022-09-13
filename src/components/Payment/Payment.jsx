import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Payment.css";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Payment() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [number, setNumber] = useState("");

  const cartStore = useSelector((state) => state.cart);
  const userStore = useSelector((state) => state.user);

  const payOrder = () => {
    const postCart = async () => {
      const result = await axios({
        method: "post",
        baseURL: process.env.REACT_APP_API_BASE_URL,
        url: "/orders",
        data: cartStore,
        headers: {
          Authorization: `Bearer ${userStore[0].token}`,
        },
      });
      console.log(result.data);
    };
    postCart();
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="navbar-checkout d-flex mt-5 mb-5">
          <h4>Finalizar compra</h4>

          <Link to="/productos">
            <p>Seguir comprando</p>
          </Link>
        </div>
      </div>
      <div className="row main-checkout">
        <h2>1 Datos de envio</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            payOrder();
          }}
        >
          <div className="mb-4">
            <input
              type="text"
              className="form-control form-checkout"
              id="nombre"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstname}
              placeholder="Nombre"
            ></input>
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="form-control form-checkout"
              id="apellido"
              onChange={(e) => setLastName(e.target.value)}
              value={lastname}
              placeholder="Apellido"
            ></input>
          </div>
          <div className="mb-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control form-checkout"
              id="email"
              value={email}
              placeholder="Email"
            ></input>
          </div>
          <div className="mb-4">
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              className="form-control form-checkout"
              id="direccion"
              value={address}
              placeholder="Dirección"
            ></input>
          </div>
          <div className="mb-4">
            <input
              onChange={(e) => setCity(e.target.value)}
              type="text"
              className="form-control form-checkout"
              id="ciudad"
              value={city}
              placeholder="Ciudad"
            ></input>
          </div>
          <div className="mb-4">
            <input
              onChange={(e) => setPostalCode(e.target.value)}
              type="text"
              className="form-control form-checkout"
              id="codigoPostal"
              value={postalCode}
              placeholder="Codigo postal"
            ></input>
          </div>
          <div className="mb-4">
            <input
              onChange={(e) => setNumber(e.target.value)}
              type="text"
              className="form-control form-checkout"
              id="telefono"
              value={number}
              placeholder="Número de teléfono"
            ></input>
          </div>
          <button type="submit" className="button-filter button-checkout">
            Confirmar pedido
          </button>
        </form>
      </div>
    </div>
  );
}
