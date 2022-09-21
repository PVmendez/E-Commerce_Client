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

      <div className="img-paralaxAbout"></div>
      <div className="container our-team">
        {["start", "end", "top", "bottom"].map((placement, idx) => (
          <AboutOffCanvas key={idx} placement={placement} name={placement} />
        ))}

        <div className="aboutRow row justify-content-center text-center">
          <h1 className="title-filter">Sobre este proyecto</h1>
          <p className="p-about mb-5 mt-3">
            Este proyecto es el proyecto final del Coding Bootcamp de Hack
            Academy, una institución educativa que se especializa en cursos de
            programación ubicada en Montevideo, Uruguay. El Coding Bootcamp es
            un curso intensivo de 3 meses de duración, full-time, con más de 600
            horas de práctica, el cual nos prepara como Full Stack Developers.
            La propuesta del proyecto final: un e-commerce, tres semanas, tres
            estudiantes y la integración de todos los conocimientos adquiridos
            en el curso. Te contamos en las siguientes secciones más sobre
            nosotros y sobre la organización que llevamos adelante.
          </p>
          <h1 className="title-filter">Organización</h1>
          <p className="p-about mb-5 mt-3">
            Iniciamos el proyecto dedicando un día para organizar y definir los
            objetivos del proyecto y los pasos a seguir para cumplirlos. La
            primera etapa del proyecto consistió en: reconocer las entidades y
            sus relaciones; crear los modelos de las entidades con sus
            respectivos seeders y levantar la base de datos; crear vistas en el
            Front-End del cliente y conectarlas a la base de datos.
          </p>
          <img src="/img/MVC.png" alt="mvc" style={{ width: 600 }} />

          <p>
            Creamos el{" "}
            <span style={{ fontWeight: 700 }}>Modelo Vista Controlador</span> en
            Figma, el cual nos permite reconocer las relaciones entre cada
            entidad: Usuarios, Administradores, Órdenes, Productos y Categorías.
          </p>
          <p>
            Añadimos react-redux para store del carrito. Añadimos login y
            registro de un usuario. Añadimos JWT a autenticacion de usuario.
            Creamos vistas para usuario administrador. Añadimos CRUD de las
            entidades las cuales solo podian ser realizadas por un usuario con
            token de administrador.
          </p>
          <p>Arreglos de diseño y código. Deployment.</p>
          <h1 className="title-filter">quiénes somos</h1>
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
                <p>Developer</p>
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
                <p>Developer</p>
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
                <p>Developer</p>
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
