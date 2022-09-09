import { Link } from "react-router-dom";

export const Product = ({ producto }) => {
  return (
    <div id="col-card" className=" col-sm-8 col-md-6 col-lg-3 my-2 mx-2 ">
      <div className="card-body">
        <img
          src={`../img/${producto.image}`}
          className="product-image"
          alt="productImage"
        />
        <h5 className="card-title">
          <b id="product-name">{producto.name}</b>
        </h5>
        <p className="card-text small">{producto.description}</p>
        <p className="tags"> USD {producto.price}</p>
        <Link
          to="https://api.whatsapp.com/send?phone=2348162667912"
          target="_blank"
          id="btn-product"
          className="button-filter"
        >
          <i className="fa fa-shopping-cart" aria-hidden="true"></i> Añadir al
          carrito
        </Link>
      </div>
    </div>
  );
};
