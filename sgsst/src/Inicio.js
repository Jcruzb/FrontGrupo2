import React, { useState } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css'
import portada from "./assets/portada3.jpg";
//
import logo from "./assets/Optimiza-reduccion.png";

import { Link } from "react-router-dom";
import LoginFormView from "./formsViews/LoginFormView";

function Inicio() {
  const [ruc, setRuc] = useState("");
  const [password, setPassword] = useState("");



  
  return (
    <div className="contenedor">
      {/* Div de Título */}
      <div className="text-center">
        <h1>GESTIÓN DE SEGURIDAD Y SALUD EN EL TRABAJO</h1>
      </div>
      {/* Div de Cajetin (ing y form) */}
      <div className="d-flex mt-5">
        <div
          className="d-flex col-xl-5 col-lg-6 col-md-5  d-none d-md-block rounded"
          
          
        >
          <img
            className="justify-content-center"
            src={portada}
            fluid
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center " }}
          />
        </div>
        

        <div className="m-5 col">
          <div className="Login">
            <div>
              <img src={logo} fluid style={{ width: "55px", height: "55px" }} />
            </div>
            


           <LoginFormView/>
           
           
           
            <div
              className="mt-3 p-3 rounded"
              style={{ border: "2px solid white" }}
            >
              <h2>Registrese</h2>
              <p>Contacte con su empleador para obtener una cuenta.</p>
              <p>
                {" "}
                De ser el responsable de la empresa, contáctenos para una cuenta
                maestra.
              </p>

              <div className="d-grid">
              <Link className="btn" to="/register">
                Registrarse
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
