import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footerRow">
      <div className="container">
        <div className="row">
          <div className="footerDiv d-flex flex-column flex-lg-row justify-content-between mt-5">
            <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-start my-md-5">
              <img src="../img/LogoNav.PNG" alt="" />
            </div>
            <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-start my-md-5">
              <h5 className="footerTitle">nuestra boutique</h5>
              <p className="p-footer">Osorio 1120</p>
              <p className="p-footer">Pocitos | Montevideo</p>
              <p className="p-footer">Lunes a Viernes de 14 a 19hs.</p>
              <p className="p-footer">Sábados de 10 a 14hs.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-start my-md-5">
              <h5 className="footerTitle ">políticas</h5>
              <p className="p-footer">Política de envíos</p>
              <p className="p-footer">Cómo comprar</p>
              <p className="p-footer">Preguntas frecuentes</p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-start my-md-5">
              <h5 className="footerTitle ">atención al cliente</h5>
              <p className="p-footer">WhatsApp: 099 668315</p>
              <p className="p-footer">Email: fabianfestochocolates@gmail.com</p>
              <p>
                <img
                  src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81af6121f84c41a5b4391d7d37fce12a.png"
                  alt="instagram"
                />
                <img
                  src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png"
                  alt="facebook"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
