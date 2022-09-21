import React from "react";
import "./OrderList.css";
import { useSelector } from "react-redux";
import Header from "../Header";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { Button } from "react-bootstrap";

export default function OrderList({ handleShow }) {
  const cartStore = useSelector((state) => state.cart);
  const userStore = useSelector((state) => state.user);
  const [totalPrice, setTotalPrice] = useState(0);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    setTotalPrice(0);
    for (let i = 0; i < cartStore.length; i++) {
      setTotalPrice((prev) => {
        return prev + cartStore[i].product.price * cartStore[i].quantity;
      });
    }
  }, [cartStore]);
  useEffect(() => {
    const getUserOrders = async () => {
      const result = await axios({
        method: "GET",
        baseURL: process.env.REACT_APP_API_BASE_URL,
        url: `/orders`,
        headers: {
          Authorization: `Bearer ${userStore[0].token}`,
        },
      });
      setOrders(result.data.orders);
    };
    getUserOrders();
  }, [userStore]);
  return (
    <>
      <Navbar />
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Accordion defaultActiveKey="0" id="acordionRow">
            {cartStore.length > 0 && (
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
            )}
            {orders
              .slice(0)
              .reverse()
              .map((order, index, array) => {
                let orderPrice = 0;
                return (
                  <Accordion.Item key={index} eventKey={index + 1}>
                    <Accordion.Header>
                      Orden {array.length - 1 * index} - Estado: {order.state}
                    </Accordion.Header>
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

                      {order.products.map((item, index) => {
                        orderPrice += item.quantity * item.product.price;
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
                          Total Pago
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                          {orderPrice}
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
          </Accordion>
        </div>
        <Button className="btn-flotante" onClick={handleShow}>
          SOBRE ESTE PROYECTO
        </Button>
      </div>
      <Footer />
    </>
  );
}
