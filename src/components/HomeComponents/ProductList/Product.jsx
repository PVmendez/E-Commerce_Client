import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/userSlice/cartSlice";

export const Product = ({ producto }) => {
  const dispatch = useDispatch();
  return (
    <div id="col-card" className="col-12 col-md-5 col-xxl-3 mx-xxl-3 my-3">
      <div className="card-body">
        <Link to={`/productos/${producto.slug}`}>
          <img
            src={process.env.REACT_APP_BASE_URL_IMAGE + `${producto.image}`}
            className="product-image"
            alt="productImage"
          />
        </Link>
        <h5 className="card-title">
          <b id="product-name">{producto.name}</b>
        </h5>
        <p className="card-text small">{producto.description}</p>
        <p className="tags"> USD {producto.price}</p>
        <div></div>
        <div className="mb-3"></div>

        <div
          // to="/productos"
          // target="_blank"

          className="button-filter addBtn btn-product"
          onClick={() => {
            dispatch(
              addToCart({
                id: producto.id,
                product: producto,
                quantity: 1,
              })
            );
          }}
        >
          <i className="fa fa-shopping-cart" aria-hidden="true"></i> Añadir al
          carrito
        </div>
      </div>
    </div>
  );
};
