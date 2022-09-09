import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./ErrorPage.css"

export const ErrorPage = () => {
  return (
    <>
    <Navbar />
      <div className="main_body">
        <div className="center_body">
          <h1>404</h1>
          <h2>PAGE NOT FOUND</h2>
          <Link to="/">
            {" "}
            go to homepage
          </Link>
        </div>
      </div>
    <Footer />
    </>
  );
};
