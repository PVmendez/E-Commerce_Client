import "./ProductList.css";
import { Product } from "./Product";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";

export const ProductList = () => {
  return (
    <>
      <Navbar />
      <header className="page-section masthead2">
        <div className="container h-50">
          <h1 className="mt-5 section-header text-white font-weight-bold">
            PRODUCTOS
          </h1>
          <p className="main-menu text-white-75 font-weight-light mb-5">
            <Link className="link-menu" to="/">
              {"Home >"} <span className="masthead-title">Products</span>
            </Link>
          </p>
        </div>
      </header>
      <section className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 blog-form">
              <h2 className="blog-sidebar-title">
                <b>CATEGORIAS</b>
              </h2>
              <hr />

              <p className="blog-sidebar-list">
                <b>
                  <span className="list-icon"> {">"} </span> ...
                </b>
              </p>
              <p className="blog-sidebar-list">
                <b>
                  <span className="list-icon"> {">"} </span> ...
                </b>
              </p>
              <p className="blog-sidebar-list">
                <b>
                  <span className="list-icon"> {">"} </span> ...
                </b>
              </p>

              <div>&nbsp;</div>
              <div>&nbsp;</div>

              <h2 className="blog-sidebar-title">
                <b>FILTRO</b>
              </h2>
              <hr />

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Receipient's username"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
              <label for="customRange1" class="form-label">
                Chosen price range
              </label>
              <input type="range" class="form-range" id="customRange1" />
              <button type="button" className="btn btn-dark btn-lg">
                FILTRO
              </button>

              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <h2 className="blog-sidebar-title">
                <b>Tags</b>
              </h2>
              <p className="product-sidebar-list">
                <b>#accessory, #arabica</b>
              </p>
              <p className="product-sidebar-list">
                <b>#candy, #bean, #cup</b>
              </p>
              <p className="product-sidebar-list">
                <b>#ethopian, #chocolatte</b>
              </p>
            </div>

            <div className="col-lg-9">
              <div className="row">
                <div className="col">Showing all 9 results</div>

                <div className="col">
                  <select className="form-control">
                    <option value="">Default Sorting</option>
                    <option value="popularity">Sorting by popularity</option>
                    <option value="average">Sorting by average</option>
                    <option value="latest">Sorting by latest</option>
                    <option value="low">Sorting by low</option>
                    <option value="high">Sorting by high</option>
                  </select>
                </div>
              </div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>

              <div className="row justify-content-center">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
