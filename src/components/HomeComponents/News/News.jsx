import React from "react";
import { Link } from "react-router-dom";
import "./News.css";

export default function News() {
  return (
    <>
      <div className="col-8 d-flex justify-content-center flex-column align-items-center newsRow mt-5">
        <span className="title">no te pierdas nuestras novedades</span>
        <div className="row mt-5">
          <div className="col p-0">
            <input type="text" name="nombre" className="input inputName has-custom-focus" value="" placeholder="Nombre" aria-required="false" maxlength="100" aria-label="Nombre" aria-invalid="true" />
          </div>
          <div className="col p-0">
            <input type="email" name="email" class="input inputEmail has-custom-focus" value="" placeholder="Email" required="" aria-required="true" pattern="^.+@.+\.[a-zA-Z]{2,63}$" maxlength="250" aria-label="Email" aria-invalid="false" />
          </div>
          <div className="col">
            <button aria-disabled="false" data-testid="buttonElement" className="buttonForm"><span className="span">ENVIAR</span></button>
          </div>
        </div>
        
        
      </div>

      <br />
      <br />
    </>
  );
}
