import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Payment.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../../Redux/userSlice/cartSlice";

export default function Payment() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [number, setNumber] = useState("");
  const [quantity, setQuantity] = useState("");
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const cartStore = useSelector((state) => state.cart);
  const userStore = useSelector((state) => state.user);
  const dispatch = useDispatch();

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
      if (result.status === 201) {
        navigate("/");
        dispatch(emptyCart());
      }
    };
    postCart();
  };

  useEffect(() => {
    const sumQuantity = cartStore
      .map((item) => item.quantity)
      .reduce((prev, curr) => prev + curr, 0);
    setQuantity(sumQuantity);
    setSubTotalPrice(0);
    for (let i = 0; i < cartStore.length; i++) {
      setSubTotalPrice((prev) => {
       return Number(
          (
            prev +
            Number(
              (cartStore[i].product.price * cartStore[i].quantity).toFixed(12)
            )
          ).toFixed(12)
        );
      });
      console.log(subTotalPrice);
    }
    setTotalPrice(() => {
      return subTotalPrice + (1.5 + 2.5);
    });
  }, [cartStore, subTotalPrice]);

  return (
    <div className="container" id="container-checkout">
      <div className="row ">
        <div className="navbar-checkout d-flex mt-5 mb-5 ">
          <h4>Finalizar compra</h4>

          <Link to="/productos">
            <p className="m-0 keep-buying">Seguir comprando</p>
          </Link>
        </div>
      </div>

      <div className="row main-checkout">
        <div className="col-xxl-6 col-lg-12 d-flex justify-content-sm-center justify-content-xxl-between mb-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              payOrder();
            }}
          >
            <h2>Datos de envio</h2>
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
        <div className="col-xxl-6 col-lg-12 colCartCheckout">
          <div className="box-cartCheckout">
            <div className="d-flex justify-content-between ms-3">
              <p className="summary">Resumen del pedido({quantity})</p>
              <Link to="/carrito"> Editar el carrito</Link>
            </div>

            <div className="productsPayment">
              {cartStore.map((item) => {
                return (
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <img
                        className="imagenPayment"
                        src={`./img/${item.product.image}`}
                        alt="imagenProducto"
                      />
                      <div>
                        <p className="m-0" style={{ fontWeight: 600 }}>
                          {item.product.name}
                        </p>
                        <p className="m-0">Cantidad: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="d-flex ">
                      <p className="align-self-center m-0">
                        U$D {item.product.price * item.quantity}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="pt-2  pb-3 promocion">
              <Link to="/">
                <i className="fas fa-tag fa-1x ms-3 me-2 mt-2 "></i>Ingresa un
                código de promoción
              </Link>
            </div>
            <div className="prices mt-3 ms-3">
              <p>Subtotal: U$D {subTotalPrice}</p>
              <p>Envío: U$D 1.50</p>
              <p>Impuestos: U$D 2.50</p>
            </div>
            <div className="totalPrice ms-3 mt-3">
              <p>Total</p>
              U$D{totalPrice}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
