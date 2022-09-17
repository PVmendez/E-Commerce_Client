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
import axios from "axios";

export default function Cart() {
  const navigate = useNavigate();
  const cartStore = useSelector((state) => state.cart);
  const userStore = useSelector((state) => state.user);
  const [outOfStock, setOutOfStock] = useState(null);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [productsId, setProductsId] = useState([]);
  const [productsAmount, setProductsAmount] = useState([]);
  useEffect(() => {
    for (let i = 0; i < cartStore.length; i++) {
      setProductsId((prev) => {
        let ids = [...prev];
        let item = cartStore[i].product.id;
        ids[i] = item;
        return ids;
      });
      setProductsAmount((prev) => {
        let amounts = [...prev];
        let item = cartStore[i].quantity;
        amounts[i] = item;
        return amounts;
      });
    }
  }, [cartStore]);

  useEffect(() => {
    setTotalPrice(0);
    for (let i = 0; i < cartStore.length; i++) {
      setProductsId((prev) => {
        let ids = [...prev];
        let item = cartStore[i].product.id;
        ids[i] = item;
        return ids;
      });
      setProductsAmount((prev) => {
        let amounts = [...prev];
        let item = cartStore[i].quantity;
        amounts[i] = item;
        return amounts;
      });
      setTotalPrice((prev) => {
        return Number(
          (
            prev +
            Number(
              (cartStore[i].product.price * cartStore[i].quantity).toFixed(12)
            )
          ).toFixed(12)
        );
      });
    }
  }, [cartStore]);

  const verifyStock = async () => {
    const result = await axios({
      method: "patch",
      baseURL: process.env.REACT_APP_API_BASE_URL,
      url: `/products`,
      data: {
        products: { productsId },
        amount: { productsAmount },
      },
      headers: {
        Authorization: `Bearer ${userStore[0].token}`,
      },
    });

    if (result.data.error === "token invalid") {
      navigate("/login");
    } else if (result.data.error) {
      setOutOfStock(result.data.product);
    } else {
      navigate("/pago");
    }
  };

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
            {cartStore.map((item, index, array) => {
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
                      U$D{" "}
                      {Number((item.product.price * item.quantity).toFixed(12))}
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
        {outOfStock && (
          <>
            <div className="col-12 d-flex justify-content-center">
              <p>
                En este momento nos hemos quedado sin stock de {outOfStock.name}
                , por favor regresa mas tarde e intenta de nuevo
              </p>
            </div>
            {setTimeout(() => {
              setOutOfStock(null);
            }, 5000)}
          </>
        )}
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
                verifyStock();
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
