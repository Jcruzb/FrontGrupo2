import React, { useState } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css'
import portada from "./assets/portada3.png";
//
import logo from "./assets/Optimiza-reduccion.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Inicio() {
  const [ruc, setRuc] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return ruc.length >= 10 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    window.location = "/main";
  }
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
          style={{
            backgroundImage: `url(${portada})`,
            backgroundPosition: "Center top",
          }}
        ></div>

        <div className="m-5 col">
          <div className="Login">
            <div>
              <img src={logo} fluid style={{ width: "55px", height: "55px" }} />
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group size="lg" className="text-left" controlId="ruc">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  className="inpt"
                  placeholder="ingresar ruc"
                  title="Ingresar números"
                  required
                  autoFocus
                  type="number"
                  value={ruc}
                  onChange={(e) => setRuc(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" className="text-left" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="inpt"
                  placeholder="ingresar clave"
                  required
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <div className="text-center mt-3">
                <Button
                  className="btn"
                  type="submit"
                  block
                  disabled={!validateForm()}
                >
                  Ingresar
                </Button>
              </div>
            </Form>
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
