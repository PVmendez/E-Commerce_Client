import "./Settings.css";
import { Link } from "react-router-dom";
//import Footer from "../Footer/Footer";
import Header from "../Header";
import NavBar from "../Navbar/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";

export const Settings = () => {
  const [user, setUser] = useState({
    id: "",
    email: "",
    address: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const userStore = useSelector((state) => state.user);
  const navigate = useNavigate();
  
  useEffect(() => {
    const getCustomer = async () => {
      const result = await axios({
        method: "GET",
        baseURL: process.env.REACT_APP_API_BASE_URL,
        url: `/customers/one`,
        headers: {
          Authorization: `Bearer ${userStore[0].token}`,
        },
      });
      setUser(result.data);
    };
    getCustomer();
  }, [userStore]);
  
  const inputHandle = (e) => {
    let { name, value } = e.target;
    let newUser = { ...user, [name]: value };
    setUser(newUser);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const updateAdmin = async () => {
      const result = await axios({
        method: "PATCH",
        baseURL: process.env.REACT_APP_API_BASE_URL,
        url: `/customers/update`,
        data: user,
        headers: {
          Authorization: `Bearer ${userStore[0].token}`,
        },
      });
      toastifyError(result.data.error);
      navigate("/settings");
    };
    updateAdmin();
  }; 

  const toastifyError = (error) =>
    toast.error(error, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    const showAlert = () => {
      Swal.fire({
        title: "Lo sentimos",
        text: "Esta funcionalidad quedó fuera del alcance del proyecyo",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#d33",
      })
    };

  return (
    <>
      <NavBar />
      <Header />
      <section className="settings pt-5">
        <ToastContainer />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8 mx-auto">
              <div className="my-4">
                <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      to="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="false"
                    >
                      Profile
                    </Link>
                  </li>
                </ul>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={inputHandle}
                    required
                  />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Direccion</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="address"
                    name="address"
                    value={user.address}
                    onChange={inputHandle}
                    required
                  />
                  </div>

                  <hr className="my-4" />
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="oldPassword">Anterior contraseña</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Old password"
                          name="oldPassword"
                          value={user.oldPassword}
                          onChange={inputHandle}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="newPassword">Nueva contraseña</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="New password"
                          name="newPassword"
                          value={user.newPassword}
                          onChange={inputHandle}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="confirmPassword">
                          Confirmar contraseña
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Confirm password"
                          name="confirmPassword"
                          value={user.confirmPassword}
                          onChange={inputHandle}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p className="mb-2">Requerimientos</p>
                      <p className="small text-muted mb-2">
                        Para crear una nueva contraseñas tendrás que tomar en
                        cuenta lo siguiente:
                      </p>
                      <ul className="small text-muted pl-4 mb-0">
                        <li>Minimo 8 caracteres</li>
                        <li>
                          Al menos un caracter especial, por ejemplo (@!?)
                        </li>
                        <li>Al menos un número</li>
                        <li>No puede ser igual a la anterior</li>
                      </ul>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={() => showAlert()}>
                    Cambiar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
