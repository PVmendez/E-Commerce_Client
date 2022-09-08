import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="row footerRow">
      <div className="footerDiv d-flex flex-column flex-md-row justify-content-center mt-5">
        <div className="col-12 col-md-3 col-xl-2 d-flex flex-column align-items-center my-md-5">
          <h5 className="footerTitle text-decoration-underline">Opening</h5>
          <p>We are open 24/7 so come visit us!</p>
        </div>
        <div className="col-12 col-md-3 col-xl-2 d-flex flex-column align-items-center my-md-5">
          <h5 className="footerTitle text-decoration-underline">Follow Us</h5>
          <p>
            <i className="fa-brands fa-twitter mx-2 fa-xl footerIcon"></i>
            <i className="fa-brands fa-pinterest mx-2 fa-xl footerIcon"></i>
            <i className="fa-brands fa-facebook mx-2 fa-xl footerIcon"></i>
            <i className="fa-brands fa-square-instagram mx-2 fa-xl footerIcon"></i>
          </p>
        </div>
        <div className="col-12 col-md-3 col-xl-2 d-flex flex-column align-items-center my-md-5">
          <h5 className="footerTitle text-decoration-underline">Contact Us</h5>
          <p>Email: hacksweets@ha.com</p>
          <p>Phone: xxx-xxxx</p>
        </div>
      </div>
      <div className="footerDivider col-12"></div>
      <div className="logo d-flex justify-content-center mt-5">
        <img src="../img/logo.png" alt="" />
      </div>
    </div>
  );
}
