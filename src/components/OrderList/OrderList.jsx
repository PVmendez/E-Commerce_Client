import React from "react";
import "./OrderList.css";
import { useSelector } from "react-redux";
import Header from "../Header";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

export default function OrderList() {
  const cartStore = useSelector((state) => state.cart);
  const userStore = useSelector((state) => state.user);
  console.log(cartStore);
  console.log(userStore);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(0);
    for (let i = 0; i < cartStore.length; i++) {
      setTotalPrice((prev) => {
        return prev + cartStore[i].product.price * cartStore[i].quantity;
      });
    }
  }, [cartStore]);
  //   useEffect(() => {
  //     const getUserOrders = async () => {
  //       const result = await axios({
  //         method: "GET",
  //         baseURL: process.env.REACT_APP_API_BASE_URL,
  //         url: `/orders/${userStore.token}`,
  //       });
  //       console.log(result.data);
  //     };
  //   }, []);
  return (
    <>
      <Navbar />
      <Header />
      <div className="container my-5">
        <div className="row">
          {cartStore.length > 0 && (
            <Accordion defaultActiveKey="0">
              {/* Accordion item debe ser mapeado por cada order a nombre del usuario logeado que traiga la llamada axios */}
              <Accordion.Item eventKey="0">
                <Accordion.Header>Pedido en Carrito</Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex justify-content-between bg-light item-list">
                    <div className="col-4 d-flex justify-content-center">
                      Nombre del Producto
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                      Cantidad
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                      Precio
                    </div>
                  </div>
                  {cartStore.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="d-flex justify-content-between item-list"
                      >
                        <div className="col-4 d-flex justify-content-center">
                          {item.product.name}
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                          {item.quantity}
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                          {item.product.price}
                        </div>
                      </div>
                    );
                  })}
                  <div className="d-flex justify-content-between bg-light item-list">
                    <div className="col-4 d-flex justify-content-center">
                      Total a Pagar
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                      {totalPrice}
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
