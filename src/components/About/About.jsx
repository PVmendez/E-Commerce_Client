import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header";
import Navbar from "../Navbar/Navbar";
import "./About.css";
import { Services } from "./Services";

export const About = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container our-team mt-5">
        <div className="row justify-content-center text-center">
          <h1>NUESTRO EQUIPO</h1>
          <div className="card">
            <div className="circle">
              <div className="imgBox">
                <img
                  src="https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className="content">
              <Link to="#">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </Link>
              <h3>Pablo Méndez</h3>
              <div className="textIcon">
                <h4>Developer</h4>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="circle">
              <div className="imgBox">
                <img
                  src="https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className="content">
              <Link to="#">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </Link>
              <h3>Sofía Valdez</h3>
              <div className="textIcon">
                <h4>Developer</h4>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="circle">
              <div className="imgBox">
                <img
                  src="https://images.unsplash.com/photo-1625316708582-7c38734be31d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className="content">
              <Link to="#">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </Link>
              <h3>Felipe Arzuaga</h3>
              <div className="textIcon">
                <h4>Developer</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <Footer />
    </>
  );
};
