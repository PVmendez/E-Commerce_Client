import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

import Navbar from "../Navbar/Navbar";
import "./About.css";
import AboutOffCanvas from "./AboutOffCanvas";
import { Services } from "./Services";

export const About = ({ handleShow, handleClose }) => {
  return (
    <>
      <Navbar />

      <div className="container our-team">
        {["start", "end", "top", "bottom"].map((placement, idx) => (
          <AboutOffCanvas key={idx} placement={placement} name={placement} />
        ))}

        <div className="aboutRow row justify-content-center text-center">
          <h1 className="title-filter">Sobre este proyecto</h1>
          <p className="p-about mb-5 mt-3">
            SweetHack es el proyecto final del Coding Bootcamp de Hack Academy,
            una institución educativa que se especializa en cursos de
            programación ubicada en Montevideo, Uruguay. El Coding Bootcamp es
            un curso intensivo de 3 meses de duración, full-time, con más de 600
            horas de práctica. La propuesta del proyecto final: un e-commerce,
            tres semanas, tres estudiantes, y la integración de todos los
            conocimientos adquiridos en el curso.
          </p>
          <h1 className="title-filter">Nuestro equipo</h1>
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
              <Link to="https://www.linkedin.com/in/pablomendezrey/">
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
                <img src="/img/Sofia.jpg" alt="sofia" />
              </div>
            </div>
            <div className="content">
              <Link to="https://www.linkedin.com/in/sofia-valdez-silveira/">
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
      <Link to="/about" className="btn-flotante" onClick={handleShow}>
        SOBRE ESTE PROYECTO
      </Link>
      <Services />
      <Footer />
    </>
  );
};
