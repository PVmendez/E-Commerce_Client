import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./ErrorPage.css";

export const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="errorRow">
        <div className="main_body text-center mt-5">
          <div className="center_body">
            <h1>404</h1>
            <h2>Página no encontrada </h2>
            <Link to="/">
              Te invitamos seguir experiementando sabores únicos
            </Link>
          </div>
          <Link to="/" className="button-pageNotFound">
            Volver
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};
