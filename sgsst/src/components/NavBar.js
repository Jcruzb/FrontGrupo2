import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Optimiza-reduccion.png";
import { getCompanies } from "../services/registerServices";

function NavBar() {
  const [estaColapsado, setEstaColapsado] = useState(true);
  const manejarNavbar = () => setEstaColapsado(!estaColapsado);


 /*  const [companies, setcompanies] = useState([]);

  const getAllCompanies = async () => {
    try {
      const getedCompanies = await getCompanies();
      setcompanies(getedCompanies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCompanies();
  }, []); */

 

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-navbar">
      <div className="container">
        <img src={logo} fluid style={{ width: "55px", height: "55px" }} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!estaColapsado ? true : false}
          aria-label="Toggle navigation"
          onClick={manejarNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${estaColapsado ? "collapse" : ""} navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/main">
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/workerslist">
                Trabajadores
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/IncidentsList">
                Eventos
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Salir
                </Link>
              </li>
            </ul>
            {/* <ul className="navbar-nav">
              <li className="nav-item">
                {companies.map((item, i) => (
                  <tr key={i}>
                    <td>{item.ruc}</td>
                  </tr>
                ))}
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
