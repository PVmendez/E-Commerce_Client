import "./ProductList.css";
import { Product } from "./Product";

export const ProductList = () => {
  return (
    <>
      <section className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 blog-form">
              <h2 className="blog-sidebar-title">
                <b>Cart</b>
              </h2>
              <hr />
              <p className="blog-sidebar-text">No products in the cart...</p>
              <div>&nbsp;</div>
              <div>&nbsp;</div>

              <h2 className="blog-sidebar-title">
                <b>Categories</b>
              </h2>
              <hr />

              <p className="blog-sidebar-list">
                <b>
                  <span className="list-icon"> {">"} </span> Coffee
                </b>
              </p>
              <p className="blog-sidebar-list">
                <b>
                  <span className="list-icon"> {">"} </span> Green Coffee
                </b>
              </p>
              <p className="blog-sidebar-list">
                <b>
                  <span className="list-icon"> {">"} </span> Nigerian
                </b>
              </p>
              <p className="blog-sidebar-list">
                <b>
                  <span className="list-icon"> {">"} </span> Roasted Coffee
                </b>
              </p>
              <p className="blog-sidebar-list">
                <b>
                  <span className="list-icon"> {">"} </span> Uncategorized
                </b>
              </p>

              <div>&nbsp;</div>
              <div>&nbsp;</div>

              <h2 className="blog-sidebar-title">
                <b>Filter</b>
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

              <p className="tags">Price $4 - $25</p>
              <button type="button" className="btn btn-dark btn-lg">
                Filter
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
                <b>#ethopian, #latte</b>
              </p>
            </div>

            <div className="col-lg-9" >
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

              <div className="row">
                <Product />
                <Product />
                <Product />  
              </div>

              <div>&nbsp;</div>
              <div>&nbsp;</div>

              <div className="row">
                <Product />
                <Product />
                <Product />
              </div>

              <div>&nbsp;</div>
              <div>&nbsp;</div>

              <div className="row">
                <Product />
                <Product />
                <Product />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
