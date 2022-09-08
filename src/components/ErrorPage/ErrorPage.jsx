import { Link } from "react-router-dom";
import "./ErrorPage.css"

export const ErrorPage = () => {
  return (
    <>
      <div class="main_body">
        <div class="center_body">
          <h1>404</h1>
          <h2>PAGE NOT FOUND</h2>
          <Link to="/">
            {" "}
            go to homepage
          </Link>
        </div>
      </div>
    </>
  );
};
