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

export const About = ({ handleShow }) => (
  <>
    <Navbar />

    <div className="about-header">
      <div className="img-paralaxAbout"></div>
      <div className="container aboutHeaderText">
        <h1 className="title-filter" id="about-title">
          Sobre este proyecto
        </h1>
        <p className="p-about mb-5 mt-3 fw-bold" id="about-p">
          Este proyecto es el proyecto final del Coding Bootcamp de Hack
          Academy, una institución educativa que se especializa en cursos de
          programación ubicada en Montevideo, Uruguay. El Coding Bootcamp es un
          curso intensivo de 3 meses de duración, full-time, con más de 600
          horas de práctica, el cual nos prepara como Full Stack Developers. La
          propuesta del proyecto final: un e-commerce, tres semanas, tres
          estudiantes y la integración de todos los conocimientos adquiridos en
          el curso. Te contamos en las siguientes secciones más sobre nosotros y
          sobre las etapas de creación de este proyecto.
        </p>
      </div>
    </div>
    <div className="d-flex justify-content-center">
      <p className="title-filter">Organización</p>
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
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            Iniciamos el proyecto dedicando un día para organizar, definir los
            objetivos, y los pasos Link seguir para cumplirlos. La primera etapa
            del proyecto consistió en: reconocer las entidades y sus relaciones;
            crear los modelos de las entidades con sus respectivos seeders
            utilizando <span style={{ fontWeight: 700 }}>MySQL</span> y{" "}
            <span style={{ fontWeight: 700 }}>Sequelize</span> para levantar la
            base de datos; crear vistas en el Front-End del cliente utilizando{" "}
            <span style={{ fontWeight: 700 }}>React</span> y conectarlas Link la
            base de datos.
          </p>
          <div className="w-100">
            <img
              className="d-block mt-3"
              src="https://taklnamocbdbysfkbsho.supabase.co/storage/v1/object/public/psfe-commerce/MVC.png"
              alt="mvc"
              style={{ width: 600 }}
            />
          </div>
          <p>
            Creamos el{" "}
            <span style={{ fontWeight: 700 }}>Modelo Vista Controlador</span> en
            Figma, el cual nos permite reconocer las relaciones entre cada
            entidad: Usuarios, Administradores, Pedidos, Productos y Categorías.
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
            </svg>
          }
        >
          <h3 className="vertical-timeline-element-title">Semana 2</h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            Durante la segunda etapa del proyecto, nos concentramos en darle
            mayor funcionalidad Link la aplicación. Para esto implementamos:{" "}
            <span style={{ fontWeight: 700 }}>React Redux</span>, para guardar
            información temporal de lo que se encuentra en la lista de compra;{" "}
            <span style={{ fontWeight: 700 }}>JSON Web Token</span>, como método
            de autenticación de usuarios al iniciar sesión y al confirmar un
            pedido; funciones de administrador, los cuales pueden: crear nuevos
            productos, editar productos existentes, modificar el estado de los
            pedidos (pago, enviado, recibido), crear, modificar y eliminar
            usuarios administradores, todas estas funciones también requieren un
            token válido de administrador para ejecutarse. Link la página de
            administrador y Link todas sus funciones se le accede por{" "}
            <Link to="#">aquí</Link>.
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
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            La tercera etapa fue en su mayoría utilizada en arreglos generales
            de diseño (como enseñarle Link las cartas de presentación Link dar una
            voltereta), implementación de funciones nuevas y más eficientes (que
            generaron nuevos y mejores errores), legibilidad del código (para
            ocultar mejor esos errores); y finalmente deployment, utilizando{" "}
            <span style={{ fontWeight: 700 }}>Vercel</span> y{" "}
            <span style={{ fontWeight: 700 }}>Supabase</span> lo cuál nos
            permite Link nosotros presentar esta página y Link usted accederla.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    <div className="container our-team">
      {["start", "end", "top", "bottom"].map((placement, idx) => (
        <AboutOffCanvas key={idx} placement={placement} name={placement} />
      ))}

      <div className="aboutRow row justify-content-center text-center">
        <h1 className="title-filter">quiénes somos</h1>
        {/*---------------CARD SOFIA-----------------*/}
        <div className="col-12 col-xl-4 mb-3">
          <div className="card flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front imgBox">
                <img
                  src="https://taklnamocbdbysfkbsho.supabase.co/storage/v1/object/public/psfe-commerce/Sofia.jpg"
                  alt=""
                />
                <div className="content">
                  <h3>Sofía Valdéz</h3>
                  <div className="textIcon">
                    <p>Full Stack Developer Jr.</p>
                  </div>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="code-body">
                  <div className="line-numbers d-none">
                    <div id="1">1</div>
                    <div id="2">2</div>
                    <div id="3">3</div>
                    <div id="4">4</div>
                    <div id="5">5</div>
                    <div id="6">6</div>
                    <div id="7">7</div>
                    <div id="8">8</div>
                  </div>
                  <code>
                    <span className="first-line">
                      <span className="variable">const </span>
                      <span className="function">aboutMe </span>
                      <span className="operator">=</span>
                      <span> {"{"}</span>
                      <div className="indent">
                        <span className="property">name</span>
                        <span className="operator">:</span>
                        <span className="string">"Sofía Valdéz"</span>
                        <span>,</span>
                      </div>
                      <div className="indent">
                        <span className="property">title</span>
                        <span className="operator">:</span>
                        <span className="string">
                          "Jr. Full Stack Developer"
                        </span>
                        <span>,</span>
                      </div>
                      <div className="indent">
                        <span className="property">contact</span>
                        <span className="operator">:</span>
                        <span>
                          {" "}
                          {"{"}
                          <div className="indent">
                            <span className="property">email</span>
                            <span className="operator">:</span>
                            <span className="string">
                              "valdezsofia7@gmail.com"
                            </span>
                            <span>,</span>
                          </div>
                          <div className="indent">
                            <span className="property">phone</span>
                            <span className="operator">:</span>
                            <span className="string"> 091456333</span>
                            <span>,</span>
                          </div>
                        </span>
                        <span> {"}"}</span>
                        <span>,</span>
                      </div>
                      <div className="indent">
                        <span className="property">likes</span>
                        <span className="operator">:</span>
                        <span>
                          {" "}
                          {"["}
                          <div className="indent">
                            <span className="string">"Rollerblading"</span>
                            <span>,</span>
                          </div>
                          <div className="indent">
                            <span className="string">
                              "Dulce de leche with almonds ice-cream"
                            </span>
                            <span>,</span>
                          </div>
                          <div className="indent">
                            <span className="string">
                              "Art galleries and camping"
                            </span>
                            <span>,</span>
                          </div>
                        </span>
                        <span> {"]"}</span>
                      </div>
                      <span> {"}"}</span>
                    </span>
                  </code>
                </div>
              </div>
            </div>
          </div>

          <Link
            className="mt-3"
            to="https://www.linkedin.com/in/sofia-valdez-silveira/"
            target="_blank"
          >
            Contáctame:{" "}
            <i className="fa-brands fa-linkedin fa-xl" aria-hidden="true"></i>
          </Link>
        </div>
        {/*---------------CARD FELIPE-----------------*/}
        <div className="col-12 col-xl-4 mb-3">
          <div className="card flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front imgBox">
                <img
                  src="https://taklnamocbdbysfkbsho.supabase.co/storage/v1/object/public/psfe-commerce/Felipe.jpeg"
                  alt="Felipe"
                />
                <div className="content">
                  <h3>Felipe Arzuaga</h3>
                  <div className="textIcon">
                    <p>Full Stack Developer Jr.</p>
                  </div>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="code-body">
                  <div className="line-numbers d-none">
                    <div id="1">1</div>
                    <div id="2">2</div>
                    <div id="3">3</div>
                    <div id="4">4</div>
                    <div id="5">5</div>
                    <div id="6">6</div>
                    <div id="7">7</div>
                    <div id="8">8</div>
                    <div id="9">9</div>
                    <div id="10">10</div>
                    <div id="11">11</div>
                    <div id="12">12</div>
                  </div>
                  <code>
                    <span className="first-line">
                      <span className="variable">const </span>
                      <span className="function">aboutMe </span>
                      <span className="operator">=</span>
                      <span> {"{"}</span>
                      <div className="indent">
                        <span className="property">name</span>
                        <span className="operator">:</span>
                        <span className="string">"Felipe Arzuaga"</span>
                        <span>,</span>
                      </div>
                      <div className="indent">
                        <span className="property">title</span>
                        <span className="operator">:</span>
                        <span className="string">
                          "Jr. Full Stack Developer"
                        </span>
                        <span>,</span>
                      </div>
                      <div className="indent">
                        <span className="property">contact</span>
                        <span className="operator">:</span>
                        <span>
                          {" "}
                          {"{"}
                          <div className="indent">
                            <span className="property">email</span>
                            <span className="operator">:</span>
                            <span className="string">
                              "felipearax.2012@gmail.com"
                            </span>
                            <span>,</span>
                          </div>
                          <div className="indent">
                            <span className="property">phone</span>
                            <span className="operator">:</span>
                            <span className="string">098123194</span>
                            <span>,</span>
                          </div>
                        </span>
                        <span> {"}"}</span>
                        <span>,</span>
                      </div>
                      <div className="indent">
                        <span className="property">likes</span>
                        <span className="operator">:</span>
                        <span>
                          {" "}
                          {"["}
                          <div className="indent">
                            <span className="string">"Excercise"</span>
                            <span>,</span>
                          </div>
                          <div className="indent">
                            <span className="string">
                              "Tabletop role-playing games"
                            </span>
                            <span>,</span>
                          </div>
                          <div className="indent">
                            <span className="string">"Coding"</span>
                            <span>,</span>
                          </div>
                        </span>
                        <span> {"]"}</span>
                      </div>
                      <span> {"}"}</span>
                    </span>
                  </code>
                </div>
              </div>
            </div>
          </div>
          <Link
            className="pt-3"
            to="https://www.linkedin.com/in/felipe-arzuaga-1b8b3b20a/"
            target="_blank"
          >
            Contáctame: <i class="fa-brands fa-linkedin fa-xl"></i>
          </Link>
        </div>
        {/*---------------CARD PABLO-----------------*/}
        <div className="col-12 col-xl-4 mb-3">
          <div className="card flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front imgBox">
                <img
                  src="https://taklnamocbdbysfkbsho.supabase.co/storage/v1/object/public/psfe-commerce/Pablo.jpeg"
                  alt="Pablo"
                />
                <div className="content">
                  <h3>Pablo Méndez</h3>
                  <div className="textIcon">
                    <p>Full Stack Developer Jr.</p>
                  </div>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="code-body">
                  <div className="line-numbers d-none">
                    <div id="1">1</div>
                    <div id="2">2</div>
                    <div id="3">3</div>
                    <div id="4">4</div>
                    <div id="5">5</div>
                    <div id="6">6</div>
                    <div id="7">7</div>
                    <div id="8">8</div>
                  </div>
                  <code>
                    <span className="first-line">
                      <span className="variable">const </span>
                      <span className="function">aboutMe </span>
                      <span className="operator">=</span>
                      <span> {"{"}</span>
                      <div className="indent">
                        <span className="property">name</span>
                        <span className="operator">:</span>
                        <span className="string">"Pablo Méndez"</span>
                        <span>,</span>
                      </div>
                      <div className="indent">
                        <span className="property">title</span>
                        <span className="operator">:</span>
                        <span className="string">
                          "Jr. Full Stack Developer"
                        </span>
                        <span>,</span>
                      </div>
                      <div className="indent">
                        <span className="property">contact</span>
                        <span className="operator">:</span>
                        <span>
                          {" "}
                          {"{"}
                          <div className="indent">
                            <span className="property">email</span>
                            <span className="operator">:</span>
                            <span className="string">"pmendez@gmail.com"</span>
                            <span>,</span>
                          </div>
                          <div className="indent">
                            <span className="property">phone</span>
                            <span className="operator">:</span>
                            <span className="string"> 093415493</span>
                            <span>,</span>
                          </div>
                        </span>
                        <span> {"}"}</span>
                        <span>,</span>
                        <div className="indent">
                          <span className="property">likes</span>
                          <span className="operator">:</span>
                          <span>
                            {" "}
                            {"["}
                            <div className="indent">
                              <span className="string">""</span>
                              <span>,</span>
                            </div>
                            <div className="indent">
                              <span className="string">""</span>
                              <span>,</span>
                            </div>
                            <div className="indent">
                              <span className="string">""</span>
                              <span>,</span>
                            </div>
                          </span>
                          <span> {"]"}</span>
                        </div>
                        <span> {"}"}</span>
                      </div>
                    </span>
                  </code>
                </div>
              </div>
            </div>
          </div>
          <Link
            className="mt-3"
            to="https://www.linkedin.com/in/pablomendezrey/"
            target="_blank"
          >
            Contáctame: <i class="fa-brands fa-linkedin fa-xl"></i>
          </Link>
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
