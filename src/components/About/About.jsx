import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

import Navbar from "../Navbar/Navbar";
import "./About.css";
import AboutOffCanvas from "./AboutOffCanvas";
import { Services } from "./Services";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Card } from "./Card";

export const About = ({ handleShow }) => (
  <>
    <Navbar />

    <div className="about-header">
      <div className="img-paralaxAbout"></div>
      <div className="container aboutHeaderText p-5">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1 className="title-filter1 text-center" id="about-title">
              ¿Como surgió FG Chocolates?
            </h1>
          </div>
          <div className="col-12">
            <p className="p-about mt-3 fw-bold " id="about-p">
              Este es el trabajo final del Coding Bootcamp de Hack Academy, una
              institución educativa que se especializa en cursos de programación
              ubicada en Montevideo, Uruguay. El Coding Bootcamp es un curso
              intensivo de 3 meses de duración, full-time, con más de 600 horas
              de práctica, el cual nos prepara como Full Stack Developers. La
              propuesta del proyecto final: un e-commerce, tres semanas, tres
              estudiantes y la integración de todos los conocimientos adquiridos
              en el curso. Te contamos en las siguientes secciones más sobre
              nosotros y sobre las etapas de creación de este proyecto.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <VerticalTimeline layout="1-column-left" lineColor="black">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#f6f6f6",
            color: "#000",
            borderTop: "3px solid #8a7357",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #b0aaa9 " }}
          iconStyle={{ background: "#8a7357", color: "#0" }}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M208 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-8v40H464c30.9 0 56 25.1 56 56v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-4.4-3.6-8-8-8H312v40h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H256c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V280H112c-4.4 0-8 3.6-8 8v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-30.9 25.1-56 56-56H264V192h-8c-26.5 0-48-21.5-48-48V80z" />
            </svg>
          }
        >
          <h3 className="vertical-timeline-element-title">Semana 1</h3>
          <p>
            Iniciamos el proyecto dedicando un día para organizar, definir los
            objetivos, y los pasos a seguir para cumplirlos. Reconocimos las
            entidades y sus relaciones, creamos sus modelos con sus respectivos
            seeders utilizando <span style={{ fontWeight: 700 }}>MySQL</span> y{" "}
            <span style={{ fontWeight: 700 }}>Sequelize</span> para levantar la
            base de datos, luego creamos las vistas en el Front-End del cliente
            utilizando <span style={{ fontWeight: 700 }}>React</span> y las
            conectamos al servicio DB.
          </p>
          <div className="w-100 row align-items-center">
            <div className="col">
              <p>
                Creamos el{" "}
                <span style={{ fontWeight: 700 }}>
                  Modelo Vista Controlador
                </span>{" "}
                en Figma, para definir las relaciones entre entidades (Usuarios,
                Administradores, Pedidos, Productos y Categorías).
              </p>
            </div>
            <div className="col-12">
              <img
                className="diagrama-img d-block mt-4"
                src="https://taklnamocbdbysfkbsho.supabase.co/storage/v1/object/public/psfe-commerce/MVC-Diagrama.png"
                alt="mvc"
              />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#f6f6f6",
            color: "#000",
            borderTop: "3px solid #8a7357",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #b0aaa9 " }}
          iconStyle={{ background: "#8a7357", color: "#0" }}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
            </svg>
          }
        >
          <h3 className="vertical-timeline-element-title">Semana 2</h3>
          <p>
            Esta segunda etapa, nos concentramos en las funcionalidades. Para
            esto usamos: <span style={{ fontWeight: 700 }}>React Redux </span>y
            <span style={{ fontWeight: 700 }}> JSON Web Token </span>
            Para guardar información temporal de lo que se encuentra en la lista
            de compras y tener métodos de autenticación de usuarios. Además
            implementamos funciones de administrador:
            <ul>
              <li>Crear y Editar productos</li>
              <li>
                Modificar el estado de los pedidos (pago, enviado, recibido)
              </li>
              <li>Crear, modificar y eliminar administradores</li>
            </ul>
            Todas estas funciones también requieren un token válido de
            administrador para ejecutarse. A la página de administrador y a
            todas sus funciones puedes acceder{" "}
            <a
              target={"_blank"}
              href="https://hackshop-admin-khaki.vercel.app/"
            >
              aquí
            </a>
            .
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#f6f6f6",
            color: "#000",
            borderTop: "3px solid #8a7357",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #b0aaa9 " }}
          iconStyle={{ background: "#8a7357", color: "#0" }}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z" />
            </svg>
          }
        >
          <h3 className="vertical-timeline-element-title">Semana 3</h3>
          <p>
            La tercera etapa fue dedicada a arreglos de diseño (como enseñarle a
            las cartas de presentación a dar una voltereta), implementación de
            funciones nuevas y más eficientes (que generaron nuevos y mejores
            errores), legibilidad del código y finalmente deployment, utilizando{" "}
            <span style={{ fontWeight: 700 }}>Vercel</span> y{" "}
            <span style={{ fontWeight: 700 }}>Supabase</span> lo cuál nos
            permite presentar y compartir esta página.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    <div className="sections">
      <div className=" our-team">
        {["start", "end", "top", "bottom"].map((placement, idx) => (
          <AboutOffCanvas key={idx} placement={placement} name={placement} />
        ))}

        <div className="aboutRow row justify-content-center text-center">
          <h1 className="title-filter mb-5">Quiénes somos</h1>
          <Card
            image="Sofia"
            name="Sofía"
            lastname="Valdéz"
            email="valdezsofia7@gmail.com"
            phone="091456333"
            linkedin="sofia-valdez-silveira"
            github="sofivaldez"
            likes={[
              "Rollerblading",
              "Dulce de leche with almonds ice-cream",
              "Art galleries and camping",
            ]}
          />
          <Card
            image="Felipe"
            name="Felipe"
            lastname="Arzuaga"
            email="felipearax.2012@gmail.com"
            phone="098123194"
            linkedin="felipe-arzuaga-1b8b3b20a"
            github=""
            likes={["Excercise", "Tabletop role-playing games", "Coding"]}
          />
          <Card
            image="Pablo"
            name="Pablo"
            lastname="Méndez"
            email="valentino.mendez.rey@gmail.com"
            phone="093415493"
            linkedin="pablomendezrey"
            github="PVmendez"
            likes={["Solve riddles", "Software development", "Sports"]}
          />
        </div>
      </div>
      <Link to="/about" className="btn-flotante" onClick={handleShow}>
        SOBRE ESTE PROYECTO
      </Link>
      <Services />
    </div>
    <Footer />
  </>
);
