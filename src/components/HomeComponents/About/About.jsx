import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="col-8 d-flex justify-content-center flex-column align-items-center aboutRow">
        <h2 className="title-filter mt-5">sobre el proyecto</h2>
        <div>
          <i
            style={{ color: "#6c4a00" }}
            className="fas fa-window-minimize fa-xl pb-4"
          ></i>
        </div>
        <p className="aboutText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veli
          voluptatibus soluta tempore in expedita iusto, fuga ratione voluptates
          sapiente saepe iure harum, libero voluptatem assumenda, nulla non?
          Maxime, nobis non. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Velit voluptatibus soluta tempore in expedita iusto, fuga
          ratione voluptates sapiente saepe iure harum, libero voluptatem
          assumenda, nulla non? Maxime, nobis non. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Velit voluptatibus soluta tempore in
          expedita iusto, fuga ratione voluptates sapiente saepe iure harum,
          libero voluptatem assumenda, nulla non? Maxime, nobis non.
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <Link to="/about" className="button-filter" id="a-about">
          Ver mas
        </Link>
      </div>

      <br />
      <br />
    </>
  );
}
