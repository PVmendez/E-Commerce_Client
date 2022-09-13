import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { ProductList } from "./components/HomeComponents/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { About } from "./components/About/About";
import ProtectedRoute from "./components/ProtectedRoute";
import Payment from "./components/Payment";
import OrderList from "./components/OrderList/OrderList";
import { useState } from "react";
import AboutOffCanvas from "./components/About/AboutOffCanvas";

function App() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <>
      {["end"].map((placement, idx) => (
        <AboutOffCanvas
          key={idx}
          placement={placement}
          name={placement}
          show={show}
          setShow={setShow}
        />
      ))}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/productos" element={<ProductList />} />
        <Route exact path="/productos/:slug" element={<ProductDetails />} />
        <Route exact path="/carrito" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registro" element={<Register />} />
        <Route exact path="/pedidos" element={<OrderList />} />
        <Route
          exact
          path="/about"
          element={<About setShow={setShow} handleShow={handleShow} />}
        />
        <Route
          exact
          path="/pago"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
