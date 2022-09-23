import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./News.css";

export default function News() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const userStore = useSelector((state) => state.user[0]);
  const navigate = useNavigate();

  const inputHandle = (e) => {
    let { name, value } = e.target;
    let newUser = { ...user, [name]: value };
    setUser(newUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateAdmin = async () => {
      const result = await axios({
        method: "GET",
        baseURL: process.env.REACT_APP_API_BASE_URL,
        url: `/customers/subscribe`,
        data: user,
        headers: {
          Authorization: `Bearer ${userStore.token}`,
        },
      });
      console.log(result);
      navigate("/");
    };
    updateAdmin();
  };
  return (
    <>
      <div className="col-8 d-flex justify-content-center flex-column align-items-center newsRow mt-5">
        <span className="title-news">no te pierdas nuestras novedades</span>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row mt-5">
            <div className="col p-0">
              <input
                type="text"
                name="nombre"
                className="input inputName has-custom-focus"
                value={user.name}
                onChange={(e) => inputHandle(e)}
                placeholder="Nombre"
                aria-required="false"
                maxlength="100"
                aria-label="Nombre"
                aria-invalid="true"
              />
            </div>
            <div className="col p-0">
              <input
                type="email"
                name="email"
                class="input inputEmail has-custom-focus"
                value={user.email}
                onChange={(e) => inputHandle(e)}
                placeholder="Email"
                required
                aria-required="true"
                pattern="^.+@.+\.[a-zA-Z]{2,63}$"
                maxlength="250"
                aria-label="Email"
                aria-invalid="false"
              />
            </div>
            <div className="col">
              <button
                aria-disabled="false"
                data-testid="buttonElement"
                className="buttonForm"
              >
                <span className="span">ENVIAR</span>
              </button>
            </div>
          </div>
        </form>
      </div>

      <br />
      <br />
    </>
  );
}
