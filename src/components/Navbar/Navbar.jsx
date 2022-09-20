import React from "react";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/userSlice/userSlice";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function NavBar() {
  const userStore = useSelector((state) => state.user);
  const cartStore = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let cartElements = 0;
  for (let i = 0; i < cartStore.length; i++) {
    cartElements = cartElements + cartStore[i].quantity;
  }

  if (cartElements > 99) cartElements = "+99";

  return (
    <>
      <Navbar
        variant="dark"
        bg="dark"
        expand="md"
        fixed="top"
        className=" nav-1"
      >
        <Container className="container-navbar">
          <Navbar.Brand id="navbar-brand" href="/">
            <img src="./img/LogoNav.PNG" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle
            id="navbar-toggle"
            aria-controls={`offcanvasNavbar-expand-md`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header
              className="bg-dark"
              closeVariant="white"
              closeButton
            >
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-md`}
              ></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-between flex-grow-1 pe-3">
                <div className="container-navlink flex-column flex-md-row">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/productos">Productos</Nav.Link>
                  <Nav.Link href="/about">Sobre este proyecto</Nav.Link>

                  <Nav.Link href="/carrito">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="30px"
                      height="30px"
                      viewBox="5.7 0 105.5 126.1"
                      preserveAspectRatio="xMinYMax meet"
                      data-hook="svg-icon-1"
                      fill="#8a7357"
                    >
                      <path d="M99.8 28.4c0-1.2-0.9-2-2.1-2h-15c0 3.2 0 7.6 0 8.2 0 1.5-1.2 2.6-2.6 2.9 -1.5 0.3-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-0.9 0-4.7 0-8.2H40.1c0 3.2 0 7.3 0 8.2 0 1.5-1.2 2.9-2.6 2.9 -1.5 0-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-0.6 0-5 0-8.2h-15c-1.2 0-2 0.9-2 2L8.3 124c0 1.2 0.9 2.1 2.1 2.1h96.3c1.2 0 2.1-0.9 2.1-2.1L99.8 28.4z"></path>
                      <path d="M59.1 5.9c-2.9 0-2 0-2.9 0 -2 0-4.4 0.6-6.4 1.5 -3.2 1.5-5.9 4.1-7.6 7.3 -0.9 1.8-1.5 3.5-1.8 5.6 0 0.9-0.3 1.5-0.3 2.3 0 1.2 0 2.1 0 3.2 0 1.5-1.2 2.9-2.6 2.9 -1.5 0-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-1.2 0-2.3 0-3.5 0-3.2 0.9-6.4 2-9.4 1.2-2.3 2.6-4.7 4.7-6.4 3.2-2.9 6.7-5 11.1-5.9C53.5 0.3 55 0 56.7 0c1.5 0 2.9 0 4.4 0 2.9 0 5.6 0.6 7.9 1.8 2.6 1.2 5 2.6 6.7 4.4 3.2 3.2 5.3 6.7 6.4 11.1 0.3 1.5 0.6 3.2 0.6 4.7 0 1.2 0 2.3 0 3.2 0 1.5-1.2 2.6-2.6 2.9s-2.9-0.9-3.2-2.3c0-0.3 0-0.3 0-0.6 0-1.2 0-2.6 0-3.8 0-2.3-0.6-4.4-1.8-6.4 -1.5-3.2-4.1-5.9-7.3-7.3 -1.8-0.9-3.5-1.8-5.9-1.8C61.1 5.9 59.1 5.9 59.1 5.9L59.1 5.9z"></path>
                      <text
                        x="58.5"
                        y="77"
                        dy=".35em"
                        textAnchor="middle"
                        className="bGBBgJ"
                        data-hook="items-count"
                        fill="white"
                        style={{ fontSize: "45px" }}
                      >
                        {cartElements && cartElements}
                      </text>
                    </svg>
                  </Nav.Link>
                  {userStore.length === 0 && (
                    <Nav.Link href="/login" className="nav-item nav-link">
                      <i className="fa-solid fa-user"></i>
                    </Nav.Link>
                  )}
                  {userStore.length > 0 && (
                    <>
                      <Nav.Link href="/pedidos" className="nav-item nav-link">
                        <i className="fa-solid fa-address-book me-3"></i>{" "}
                        HISTORIAL DE COMPRAS
                      </Nav.Link>

                      <Nav.Link
                        href="/"
                        className="nav-item nav-link"
                        onClick={() => {
                          dispatch(logout());
                        }}
                      >
                        <i className="fa-solid fa-right-from-bracket"></i>
                      </Nav.Link>
                    </>
                  )}
                </div>

                <div className="container-cart"></div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
  // <div className="navbar navbar-expand-lg ">
  //   <div className="container container-nav">
  //     <Link to="/" className="navbar-brand"></Link>
  //     <button
  //       type="button"
  //       className="navbar-toggler"
  //       data-toggle="collapse"
  //       data-target="#navbarCollapse"
  //     >
  //       <span className="navbar-toggler-icon"></span>
  //     </button>

  //     <div
  //       className="collapse navbar-collapse justify-content-end"
  //       id="navbarCollapse"
  //     >
  //       <div className="navbar-nav ml-auto">
  //         <Link to="/" className="nav-item nav-link">
  //           HOME
  //         </Link>
  //         <Link to="/productos" className="nav-item nav-link">
  //           PRODUCTOS
  //         </Link>

  //         <Link to="/about" className="nav-item nav-link">
  //           LA EMPRESA
  //         </Link>
  //         <Link to="/carrito" className="nav-item nav-link">
  //           <i className="fa-solid fa-cart-shopping"></i>
  //         </Link>
  //         {userStore.length === 0 && (
  //           <Link to="/login" className="nav-item nav-link">
  //             <i className="fa-solid fa-user"></i>
  //           </Link>
  //         )}
  //         {userStore.length > 0 && (
  //           <>
  //             <Link to="/pedidos" className="nav-item nav-link">
  //               <i className="fa-solid fa-address-book me-3"></i> HISTORIAL DE
  //               COMPRAS
  //             </Link>
  //             <Link
  //               to="/"
  //               className="nav-item nav-link"
  //               onClick={() => {
  //                 dispatch(logout());
  //               }}
  //             >
  //               <i className="fa-solid fa-right-from-bracket"></i>
  //             </Link>
  //           </>
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // </div>
}
