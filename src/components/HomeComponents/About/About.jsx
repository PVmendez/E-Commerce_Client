import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="row aboutRow">
        <div className="col-8 d-flex justify-content-center flex-column align-items-center">
          <h2 className="title-filter mt-5">SOBRE EL PROYECTO</h2>
          <div>
            <i
              style={{ color: "#6c4a00" }}
              className="fas fa-window-minimize fa-xl pb-4"
            ></i>
          </div>
          <p className="aboutText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            voluptatibus soluta tempore in expedita iusto, fuga ratione
            voluptates sapiente saepe iure harum, libero voluptatem assumenda,
            nulla non? Maxime, nobis non. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Velit voluptatibus soluta tempore in expedita
            iusto, fuga ratione voluptates sapiente saepe iure harum, libero
            voluptatem assumenda, nulla non? Maxime, nobis non. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Velit voluptatibus
            soluta tempore in expedita iusto, fuga ratione voluptates sapiente
            saepe iure harum, libero voluptatem assumenda, nulla non? Maxime,
            nobis non.
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <button className="button-filter">Ver mas</button>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
