import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div>
      <div className="row categoriesRow">
        <p className="title-categories">colecciones</p>
        <p className="p-categories">
          descubrí nuestras colecciones en todas sus formas
        </p>
      </div>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6">
            <p className="title-colsCategories">clásicos</p>
            <p className="p-colsCategories">
              A través de nuestros bombones, sentí la emoción del chocolate en
              un viaje de experiencias y sabores únicos.
            </p>
            <div>
              <img
                src="./img/Bombon_2.png"
                alt="bombon"
                className="img-categories"
              />
            </div>
            <Link to="/productos" className="categories-link">
              descubrí
            </Link>
          </div>
          <div className="col-md-6">
            <p className="title-colsCategories">premium</p>
            <p className="p-colsCategories">
              Descubrí nuestra selección de dulces completamente adictivos
            </p>

            <div>
              <img
                src="./img/Bombon_14.png"
                alt="bombon"
                className="img-categories"
              />
            </div>
            <Link to="/productos" className="categories-link">
              descubrí
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
