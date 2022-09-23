import React from "react";
import Footer from "../Footer/Footer";
import "./Cart.css";
import Navbar from "../Navbar/Navbar";
import Header from "../Header";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeAllFromCart,
} from "../../Redux/userSlice/cartSlice";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

export default function Cart({ handleShow }) {
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
    if (result.data.error === "token invalid") navigate("/login");
    if (result.data.error) setOutOfStock(result.data.product);
    navigate("/pago");
  };

  return (
    <>
      <Navbar />
      <Header />
      <div className="container container-Cart footerMargin">
        <div className="row cartRow flex-column flex-md-row">
          <div className="col-12 col-md-9 col-lg-7 productsCol">
            <Link
              className="d-none d-md-flex titulosPedido justify-content-end"
              to="/"
            >
              <p>
                Seguir comprando <i class="fa-solid fa-angle-right fa-xs"></i>
              </p>
            </Link>

            <div className="pedido">
              {cartStore.map((item, index, array) => {
                console.log(item);
                return (
                  <div
                    key={item.id}
                    className="item-pedido d-flex align-items-center flex-wrap"
                  >
                    <img
                      className="close"
                      width={"20px"}
                      src="https://taklnamocbdbysfkbsho.supabase.co/storage/v1/object/public/psfe-commerce/close.png"
                      alt="close"
                      onClick={() => {
                        dispatch(
                          removeAllFromCart({
                            id: item.product.id,
                            product: item.product,
                            quantity: -1,
                          })
                        );
                      }}
                    />
                    <div className="productoPedido col-12 d-flex justify-content-around align-items-center flex-md-column justify-content-md-center col-md-3">
                      <img
                        src={
                          process.env.BASE_URL_IMAGE + `${item.product.image}`
                        }
                        className="imagenPedido"
                        alt=""
                      />
                    </div>
                    <div className="col-4 col-md-3">
                      <p className="p-cart productoNombre">
                        {item.product.name}
                      </p>
                      <p className="p-cart m-0 d-md-flex">
                        U$D {item.product.price}
                      </p>
                    </div>
                    <div className="col-4 col-md-3">
                      <div className=" d-flex">
                        <button
                          className="button-filter-cuadrado-10"
                          onClick={() => {
                            dispatch(
                              addToCart({
                                id: item.product.id,
                                product: item.product,
                                quantity: 10,
                              })
                            );
                          }}
                        >
                          -10
                        </button>
                        <button
                          className="button-filter-cuadrado mx-1"
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
                        <p className="p-cart fs-5">{item.quantity}</p>
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
                        <button
                          className="button-filter-cuadrado-10 mx-2"
                          onClick={() => {
                            dispatch(
                              addToCart({
                                id: item.product.id,
                                product: item.product,
                                quantity: 10,
                              })
                            );
                          }}
                        >
                          +10
                        </button>
                      </div>
                    </div>
                    <div className="col-4 col-md-2">
                      <p className="p-cart m-0 d-md-flex justify-content-md-center pedidoText">
                        U$D{" "}
                        {Number(
                          (item.product.price * item.quantity).toFixed(12)
                        )}
                      </p>
                    </div>
                    <div className="footerDivider col-12 w-100"></div>
                    <br />
                  </div>
                );
              })}
              <div className="mt-5">
                <p className="p-promotion">
                  <i className="fa-solid fa-tag"></i> Ingresar código
                  promocional
                </p>
                <p>
                  <p className="p-promotion">
                    <i className="fa-solid fa-envelope"></i> Agregar una tarjeta
                    de saludo
                  </p>
                </p>
              </div>
            </div>
          </div>
          {outOfStock && (
            <>
              <div className="col-5">
                <p>
                  En este momento nos hemos quedado sin stock de{" "}
                  {outOfStock.name}, por favor regresa mas tarde e intenta de
                  nuevo
                </p>
              </div>
              {setTimeout(() => {
                setOutOfStock(null);
              }, 5000)}
            </>
          )}

          <div className="col-12 col-md-3 col-lg-5 resumenCol d-flex align-items-start">
            <div className="summaryCart">
              <div className="title-summary">
                <p className="p-summary">Resumen del pedido</p>
              </div>
              <div className="prices mt-3">
                <p>Subtotal: U$D {totalPrice} </p>
                <p>Envío: U$D 1.50</p>
                <p>Montevideo, Uruguay</p>
              </div>
              <div className="totalPricemt-3 d-flex">
                <div>
                  <p className="mb-0 fs-4 mt-3">Total</p>
                  <p>Impuesto incluido</p>
                </div>
                <p className="m-0 fs-4 mt-3">U$D {totalPrice + 4}</p>
              </div>
              <button
                className="button-cart px-3 py-2"
                onClick={() => {
                  verifyStock();
                }}
              >
                Finalizar el pedido
              </button>
              <p className="text-center mt-3">
                <i class="fa-solid fa-lock"></i> Pago seguro
              </p>
            </div>
          </div>
        </div>
        <Button className="btn-flotante" onClick={handleShow}>
          SOBRE ESTE PROYECTO
        </Button>
      </div>
      <Footer />
    </>
  );
}
