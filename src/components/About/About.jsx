import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

import Navbar from "../Navbar/Navbar";
import "./About.css";
import AboutOffCanvas from "./AboutOffCanvas";
import { Services } from "./Services";

export const About = ({ handleShow, handleClose }) => (
  <>
    <Navbar />

    <div className="img-paralaxAbout"></div>
    <div className="container our-team">
      {["start", "end", "top", "bottom"].map((placement, idx) => (
        <AboutOffCanvas key={idx} placement={placement} name={placement} />
      ))}

      <div className="aboutRow row justify-content-center text-center">
        <h1 className="title-filter">sobre este proyecto</h1>
        <p className="p-about mb-5 mt-3">
          SweetHack es el proyecto final del Coding Bootcamp de Hack Academy,
          una institución educativa que se especializa en cursos de programación
          ubicada en Montevideo, Uruguay. El Coding Bootcamp es un curso
          intensivo de 3 meses de duración, full-time, con más de 600 horas de
          práctica, el cual nos prepara como Full Stack Jr. Developers. La
          propuesta del proyecto final: un e-commerce, tres semanas, tres
          estudiantes y la integración de todos los conocimientos adquiridos en
          el curso. Te contamos más sobre la organizacion en las siguientes
          secciones.
        </p>
        <div className="card flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front imgBox">
              <img
                src="/img/Sofia.jpg"
                alt=""
              />
              <div className="content">
                <Link to="https://www.linkedin.com/in/sofia-valdez-silveira/">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </Link>
                <h3>Sofía Valdéz</h3>
                <div className="textIcon">
                  <p>Developer</p>
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="code-body">
                <div className="line-numbers">
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
                    <span> {"{"}
                  </span>
                    <div className="indent">
                      <span className="property">name</span>
                      <span className="operator">:</span>
                      <span className="string">"Sofía Valdéz"</span>
                      <span>,</span>
                    </div>
                    <div className="indent">
                      <span className="property">title</span>
                      <span className="operator">:</span>
                      <span className="string">"Jr. Full Stack Developer"</span>
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
                            "svaldez@gmail.com"
                          </span>
                          <span>,</span>
                        </div>
                        <div className="indent">
                          <span className="property">phone</span>
                          <span className="operator">:</span>
                          <span className="string"> 091000000</span>
                          <span>,</span>
                        </div>
                      </span>
                      <span> {"}"}</span>
                    </div>
                  </span>
                </code>
              </div>
            </div>
          </div>
        </div>
        <div className="card flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front imgBox">
              <img
                src="https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                alt=""
              />
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
            <div className="flip-card-back">
              <div className="code-body">
                <div className="line-numbers">
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
                    <span> {"{"}
                  </span>
                    <div className="indent">
                      <span className="property">name</span>
                      <span className="operator">:</span>
                      <span className="string">"Felipe Arzuaga"</span>
                      <span>,</span>
                    </div>
                    <div className="indent">
                      <span className="property">title</span>
                      <span className="operator">:</span>
                      <span className="string">"Jr. Full Stack Developer"</span>
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
                            "farzuaga@gmail.com"
                          </span>
                          <span>,</span>
                        </div>
                        <div className="indent">
                          <span className="property">phone</span>
                          <span className="operator">:</span>
                          <span className="string"> 091000000</span>
                          <span>,</span>
                        </div>
                      </span>
                      <span> {"}"}</span>
                    </div>
                  </span>
                </code>
              </div>
            </div>
          </div>
        </div>
        <div className="card flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front imgBox">
              <img
                src="/img/Pablo.jpeg"
                alt=""
              />
              <div className="content">
                <Link to="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </Link>
                <h3>Pablo Méndez</h3>
                <div className="textIcon">
                  <p>Developer</p>
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="code-body">
                <div className="line-numbers">
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
                    <span> {"{"}
                  </span>
                    <div className="indent">
                      <span className="property">name</span>
                      <span className="operator">:</span>
                      <span className="string">"Pablo Méndez"</span>
                      <span>,</span>
                    </div>
                    <div className="indent">
                      <span className="property">title</span>
                      <span className="operator">:</span>
                      <span className="string">"Jr. Full Stack Developer"</span>
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
                            "pmendez@gmail.com"
                          </span>
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
                    </div>
                  </span>
                </code>
              </div>
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
