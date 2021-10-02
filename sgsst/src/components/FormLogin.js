import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


function FormLogin({ value, logCompany, setValue, manejarSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    window.location = "/main";
  }

//   function validateForm() {
//     return ruc.length >= 10 && password.length > 0;
//   }
  return (
    <div>
      <Form onSubmit={manejarSubmit}>
        <Form.Group size="lg" className="text-left">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            className="inpt"
            placeholder="ingresar ruc"
            title="Ingresar RUC"
            required
            autoFocus
            type="number"
            name="ruc"
            value={value.ruc}
            onChange={(e) => {logCompany(e);
            }}
          />
        </Form.Group>
        <Form.Group size="lg" className="text-left">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="inpt"
            placeholder="ingresar clave"
            required
            type="password"
            required
            name="password"
            value={value.password}
            onChange={(e) => {logCompany(e);}}
          />
        </Form.Group>
        <div className="text-center mt-3">
          <Button
            className="btn"
            type="submit"
            block
            // disabled={!validateForm()}
          >
            Ingresar
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default FormLogin;