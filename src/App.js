import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { ProductList } from "./components/HomeComponents/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products" element={<ProductList />} />
      <Route exact path="/products/:id" element={<ProductDetails />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
