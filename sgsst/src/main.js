import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import accident from "./assets/accident.jpg";
import empleador from "./assets/empleador2.jpg";
import NavBar from "./components/NavBar";

function main() {
  return (
    <div>
      <NavBar />

      <div classNameName="row">
        <div classNameName="col-12 mt-3">
          <h2>Sistema de Gestión de Seguridad y Salud en el Trabajo</h2>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img src={accident} classNameName="card-img-top" style={{ width: "100%", height: "300px", objectFit: "cover", objectPosition: "center center "}} />
            <div className="card-body">
              <Link className="btn " to="/Incidentslist">
                Eventos
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card"style={{  height: "300px" }}>
            <img src={empleador} className="card-img-top"style={{ width: "100%", height: "300px", objectFit: "cover", objectPosition: "center center "}} />
            <div className="card-body">
            <Link className="btn " to="/workerslist">
                Lista de trabajadores
              </Link>
            </div>
          </div>
        </div>
       
        
      </div>
    </div>
  );
}

export default main;
