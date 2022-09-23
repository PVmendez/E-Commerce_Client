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
    <div className="row filterRow mx-0">
      <div className="div-filter">
        <p className="p-filter">no te los pierdas</p>

        <div>
          <h2 className="title-filter">los más solicitados</h2>
        </div>
      </div>

      <div id="black-row">
        <div className="container">
          <div className="row">
            {popularProducts.map((popularProduct) => {
              return (
                <div
                  key={popularProduct.id}
                  className="col-12 col-md-4 col-xl-3 d-flex justify-content-center p-0 flex-column flex-lg-row align-items-center"
                  onClick={() => {
                    navigate(`/productos/${popularProduct.slug}#header`);
                  }}
                >
                  <div className=" div-filter col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 d-flex justify-content-center my-3">
                    <img
                      className="img-filter"
                      src={
                        process.env.REACT_APP_BASE_URL_IMAGE + `${popularProduct.image}`
                      }
                      alt="bombon1"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
