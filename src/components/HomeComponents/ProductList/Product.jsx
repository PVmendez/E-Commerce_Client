import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/userSlice/cartSlice";

export const Product = ({ producto }) => {
  const dispatch = useDispatch();
  return (
    <div id="col-card" className="col-12 col-md-5 col-xl-3  my-3">
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
        <div className="mb-3">
          <Link
            to={`/productos/${producto.slug}`}
            id="btn-product"
            className="button-filter"
          >
            <i className="fa-solid fa-plus" aria-hidden="true"></i> Ver mas
          </Link>
        </div>
        
        <div
          // to="/productos"
          // target="_blank"
          id="btn-product"
          className="button-filter addBtn"
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
