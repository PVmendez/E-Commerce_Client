import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export const Register = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });
  const navigate = useNavigate();

  const inputHandle = (e) => {
    let { name, value } = e.target;
    let newUser = { ...user, [name]: value };
    setUser(newUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const getUserRegister = async () => {
      const result = await axios({
        method: "POST",
        baseURL: process.env.REACT_APP_API_BASE_URL,
        url: `/buyers/register`,
        data: { user: user },
      });
      console.log(result.data);
      result.data ? navigate("/login") : navigate("/register");
    };
    getUserRegister();
  };

  return (
    <div className="register">
      <div className="container">
        <div className="cover">
          <div className="front">
            <div className="text">
              <span className="text-1">
                Registrate para disfrutar <br /> una nueva aventura de sabores
              </span>
              <span className="text-2">¿A que esperás?</span>
            </div>
          </div>
          <div className="back">
            <div className="text">
              <span className="text-1">
                Complete miles of journey <br /> with one step
              </span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="signup-form">
              <div className="title">Register</div>
              <form className="register_form" onSubmit={(e) => handleSubmit(e)}>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-user"></i>
                    <input
                      type="text"
                      placeholder="Firstname"
                      name="firstname"
                      value={user.firstname}
                      onChange={inputHandle}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Lastname"
                      name="lastname"
                      value={user.lastname}
                      onChange={inputHandle}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={user.email}
                      onChange={inputHandle}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={user.password}
                      onChange={inputHandle}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="address"
                      placeholder="Address"
                      name="address"
                      value={user.address}
                      onChange={inputHandle}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="phone"
                      placeholder="Phone"
                      name="phone"
                      value={user.phone}
                      onChange={inputHandle}
                      required
                    />
                  </div>
                  <div className="button input-box">
                    <input type="submit" value="Registrar" />
                  </div>
                  <div className="text sign-up-text">
                    ¿Ya tienes una cuenta?{" "}
                    <Link to="/login">Iniciar Sesión</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
