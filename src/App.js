import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { ProductList } from "./components/HomeComponents/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products" element={<ProductList />} />
      <Route exact path="/products/chocolate" element={<ProductDetails />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route path="*" element={<ErrorPage />} />
      <Route exact path="/login" element={<Login />}/>
    </Routes>
  );
}

export default App;
