import "./Filter.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Filter() {
  const [popularProducts, setPopularProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPopularProducts = async () => {
      const result = await axios({
        method: "GET",
        baseURL: process.env.REACT_APP_API_BASE_URL,
        url: "/products/?popular=true",
      });
      setPopularProducts(result.data);
    };
    getPopularProducts();
  }, []);

  return (
    <div className="row filterRow">
      <div className="div-filter">
        <h2 className="title-filter">DESTACADOS</h2>
        <div>
          <i
            style={{ color: "#6c4a00" }}
            className="fas fa-window-minimize fa-xl pb-4"
          ></i>
        </div>
        <div>
          <p className="p-filter">Esto es lo que hacemos.</p>
        </div>
      </div>
      {popularProducts.map((popularProduct) => {
        return (
          <div
            key={popularProduct.id}
            className="col-12 col-md-4 col-xl-3 d-flex justify-content-center p-0 flex-column flex-lg-row align-items-center"
            onClick={() => {
              navigate(`/productos/${popularProduct.slug}`);
            }}
          >
            <div className=" div-filter col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 d-flex justify-content-center">
              <img
                className="img-filter"
                src={`img/${popularProduct.image}`}
                alt="bombon1"
              />
              <span className="box-name">{popularProduct.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
