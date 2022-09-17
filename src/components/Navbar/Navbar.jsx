import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/userSlice/userSlice";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function NavBar() {
  const userStore = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      {[false, "sm", "md", "lg", "xl", "xxl"].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand id="navbar-brand" href="/">
              Navbar Offcanvas
            </Navbar.Brand>
            <Navbar.Toggle
              id="navbar-toggle"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/productos">Productos</Nav.Link>
                  <Nav.Link href="/about">Sobre este proyecto</Nav.Link>
                  {/* <Nav.Link className="svg"></Nav.Link> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
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
