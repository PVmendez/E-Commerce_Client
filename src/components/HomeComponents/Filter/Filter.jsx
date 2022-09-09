import "./Filter.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Filter() {
  const [popularProducts, setPopularProducts] = useState(null);

  useEffect(() => {
    const getPopularProducts = async () => {
      const result = await axios({
        method: "GET",
        url: "http://localhost:8000/products/popular",
      });
      console.log(result.data)
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
      <div className="col-12 d-flex justify-content-center p-0 flex-column flex-lg-row align-items-center">
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 d-flex justify-content-center">
          <img className="img-filter" src="../img/Bombon_1.jpg" alt="bombon1" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 d-flex justify-content-center">
          <img className="img-filter" src="../img/Bombon_2.jpg" alt="bombon2" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 d-flex justify-content-center">
          <img className="img-filter" src="../img/Bombon_3.jpg" alt="bombon3" />
        </div>
      </div>
    </div>
  );
}
