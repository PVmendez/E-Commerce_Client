import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/userSlice/userSlice";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    email: email,
    password: password,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const getUserLogin = async () => { 
      const result = await axios({
        method: "GET",
        baseURL: process.env.REACT_APP_API_BASE_URL ,
        url:  `/buyers/login/${email}`,
      });
      console.log(result.data)
      result.data ? navigate("/") : console.log("user not found")
    };
    getUserLogin();

    dispatch(login({
      email: email,
      password: password,
      loggedIn: true,
    }))
  }

  return (
    <div className="login">
      <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit_btn">Login</button>
      </form>
    </div>
  );
};
