import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

import "./About.css";

export default function AboutOffCanvas({ name, ...props }) {
  const handleClose = () => props.setShow(false);
  return (
    <>
      <Offcanvas show={props.show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body id->
          <p id="title-canvas" className="title-filter">
            sobre este proyecto
          </p>
          <p>
            Este proyecto es el proyecto final del Coding Bootcamp de Hack
            Academy. El Coding Bootcamp es un curso intensivo de 3 meses de
            duración, full-time, con más de 600 horas de práctica. La propuesta
            del proyecto final: un e-commerce, tres semanas, tres estudiantes, y
            la integración de todos los conocimientos adquiridos en el curso.
          </p>
          <Link
            to="/about"
            className="p-verMas d-flex align-items-center"
            onClick={() => {
              handleClose();
            }}
          >
            Ver más <i className="fas fa-chevron-right fa-xs ps-1"></i>
          </Link>
          <p id="title2-canvas" className="title-filter mb-3 mt-0">
            autores
          </p>
          <div className="d-flex ">
            <img
              className="avatarCanvas"
              src="https://taklnamocbdbysfkbsho.supabase.co/storage/v1/object/public/psfe-commerce/Sofia.jpg"
              alt="avatar"
            />
            <div className="me-2 ms-2 d-flex flex-column justify-content-center ms-3">
              <div className="p-canvas mb-2">SOFÍA VALDEZ</div>
              <div>
                <a href="https://www.linkedin.com/in/sofia-valdez-silveira/">
                  <i className="fa-brands fa-linkedin fa-xl me-2"></i>
                </a>
                <a href="https://github.com/sofivaldez">
                  <i className="fa-brands fa-github fa-xl "></i>
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex mt-4">
            <img
              className="avatarCanvas"
              src="../img/Pablo-1.jpeg"
              alt="avatar"
            />
            <div className="me-2 ms-2 d-flex flex-column justify-content-center ms-3">
              <div className="p-canvas mb-2">PABLO MÉNDEZ</div>
              <div>
                <a href="https://www.linkedin.com/in/pablomendezrey/">
                  <i className="fa-brands fa-linkedin fa-xl me-2"></i>
                </a>
                <a href="https://github.com/PVmendez">
                  <i className="fa-brands fa-github fa-xl "></i>
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex mt-4">
            <img
              className="avatarCanvas"
              src="https://us.123rf.com/450wm/metelsky/metelsky1809/metelsky180900220/109815466-perfil-de-avatar-de-hombre-silueta-de-rostro-masculino-o-icono-aislado-sobre-fondo-blanco-ilustraci%C3%B3.jpg?ver=6"
              alt="avatar"
            />
            <div className="me-2 ms-2 d-flex flex-column justify-content-center ms-3">
              <div className="p-canvas mb-2">FELIPE ARZUAGA</div>
              <div>
                <a href="https://www.linkedin.com/in/felipe-arzuaga-1b8b3b20a/">
                  <i className="fa-brands fa-linkedin fa-xl me-2"></i>
                </a>
                <a to="https://github.com/F-Arzuaga">
                  <i className="fa-brands fa-github fa-xl "></i>
                </a>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
