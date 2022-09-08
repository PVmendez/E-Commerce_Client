import { Link } from "react-router-dom";

export const Product = () => {
  return (
    <div className="col-sm-8 col-md-6 col-lg-4 my-2">
      <div className="card">
        <div className="card-body text-center">
          <img src="../img/Bombon_1.jpg" className="product-image" alt="" />
          <h5 className="card-title">
            <b>Bombon 1</b>
          </h5>
          <p className="card-text small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quis reiciendis quidem aperiam omnis cum laudantium? Molestiae culpa animi a?
          </p>
          <p className="tags">Price $25.16</p>
          <Link
            to="https://api.whatsapp.com/send?phone=2348162667912"
            target="_blank"
            className="btn btn-success button-text"
          >
            <i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to
            cart
          </Link>
        </div>
      </div>
    </div>
  );
};
