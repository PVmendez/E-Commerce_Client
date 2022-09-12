import React from "react";
import Footer from "../Footer/Footer";
import "./Cart.css";
import Navbar from "../Navbar/Navbar";
import Header from "../Header";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/userSlice/cartSlice";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const cartStore = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(0);
    for (let i = 0; i < cartStore.cart.length; i++) {
      setTotalPrice((prev) => {
        return (
          prev + cartStore.cart[i].product.price * cartStore.cart[i].quantity
        );
      });
    }
  }, [cartStore]);

  console.log(cartStore);
  return (
    <>
      <Navbar />
      <Header />
      <div className="row cartRow mb-3">
        <div className="col-9 p-0">
          <div className="d-md-none d-flex align-items-center titulosPedido">
            <p className="my-0 mx-auto">Lista de productos</p>
          </div>
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
            {cartStore.cart.map((item, index, array) => {
              return (
                <div
                  key={item.id}
                  className="item-pedido d-flex align-items-center flex-wrap"
                >
                  <div className="productoPedido col-12 d-flex justify-content-around align-items-center flex-md-column justify-content-md-center col-md-3">
                    <p className="p-filter productoNombre">
                      {item.product.name}
                    </p>
                    <img
                      src={`./img/${item.product.image}`}
                      className="imagenPedido"
                      alt=""
                    />
                  </div>
                  <div className="col-4 col-md-3">
                    <p className="p-filter m-0 d-md-flex justify-content-md-center pedidoText">
                      U$D {item.product.price}
                    </p>
                  </div>
                  <div className="col-4 col-md-3">
                    <div className=" d-flex justify-content-around">
                      <button
                        className="button-filter-cuadrado"
                        onClick={() => {
                          dispatch(
                            removeFromCart({
                              id: item.product.id,
                              product: item.product,
                              quantity: -1,
                            })
                          );
                        }}
                      >
                        -
                      </button>
                      <p className="p-filter fs-5">{item.quantity}</p>
                      <button
                        className="button-filter-cuadrado"
                        onClick={() => {
                          dispatch(
                            addToCart({
                              id: item.product.id,
                              product: item.product,
                              quantity: 1,
                            })
                          );
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-4 col-md-3">
                    <p className="p-filter m-0 d-md-flex justify-content-md-center pedidoText">
                      U$D {item.product.price * item.quantity}
                    </p>
                  </div>
                  <div className="footerDivider col-12 w-100"></div>
                  <br />
                </div>
              );
            })}
          </div>
          <div className="precioPedido d-flex justify-content-between px-5 align-items-center">
            <p className="text-clear m-0 fs-4">Total:</p>
            <p className="text-clear m-0 fs-4">U$D {totalPrice}</p>
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
            <button
              className="button-filter button-buy px-2 py-1 fs-4"
              onClick={() => {
                navigate("/pago");
              }}
            >
              Confirmar Pedido
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
