import React from "react";
import Footer from "../Footer/Footer";
import "./Cart.css";
import Navbar from "../Navbar/Navbar";
import Header from "../Header";

export default function Cart() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="row cartRow mb-3">
        <div className="col-9 p-0">
          <div className="d-none d-md-flex titulosPedido align-items-center">
            <p className="col-3 d-flex justify-content-center text-clear">
              Producto
            </p>
            <p className="col-3 d-flex justify-content-center text-clear">
              Precio por unidad
            </p>
            <p className="col-3 d-flex justify-content-center text-clear">
              Cantidad
            </p>
            <p className="col-3 d-flex justify-content-center text-clear">
              Total
            </p>
          </div>
          <div className="pedido">
            {/* Este div despues estaria en un map */}
            <div className="item-pedido d-flex align-items-center flex-wrap">
              <div className="productoPedido col-12 d-flex justify-content-around align-items-center flex-md-column justify-content-md-center col-md-3">
                <p className="p-filter productoNombre">Bombon_1</p>
                <img src="./img/Bombon_1.jpg" className="imagenPedido" alt="" />
              </div>
              <div className="col-4 col-md-3">
                <p className="p-filter m-0 d-md-flex justify-content-md-center pedidoText">
                  U$D 28.90
                </p>
              </div>
              <div className="col-4 col-md-3">
                <div className=" d-flex justify-content-around">
                  <button className="button-filter-cuadrado">+</button>
                  <p className="p-filter fs-5">1</p>
                  <button className="button-filter-cuadrado">-</button>
                </div>
              </div>
              <div className="col-4 col-md-3">
                <p className="p-filter m-0 d-md-flex justify-content-md-center pedidoText">
                  U$D 28.90
                </p>
              </div>
              <div className="footerDivider col-12 w-100"></div>
              <br />
            </div>
          </div>
          <div className="precioPedido d-flex justify-content-between px-5 align-items-center">
            <p className="text-clear m-0 fs-4">Total:</p>
            <p className="text-clear m-0 fs-4">U$D 28.90</p>
          </div>
        </div>
        <div className="col-9 col-lg-6 resumenCol mt-3">
          <h3 className="cart-title">RESUMEN DEL PEDIDO</h3>

          <div className="d-flex justify-content-between">
            <p className="p-filter">Total Parcial:</p>
            <p className="p-filter">U$D 28.90</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="p-filter">Envio:</p>
            <p className="p-filter">U$D 1.50</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="p-filter">Impuestos:</p>
            <p className="p-filter">U$D 2.50</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="p-filter">Total:</p>
            <p className="p-filter">U$D 32.90</p>
          </div>
          <div className="mb-3 w-100 d-flex justify-content-center">
            <button className="button-filter button-buy px-2 py-1 fs-4">
              Confirmar Pedido
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
