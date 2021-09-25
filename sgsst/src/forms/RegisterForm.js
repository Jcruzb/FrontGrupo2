import React, { useState } from "react";
import FormRegister from "../components/FormRegister";
import { registerCompany } from "../services/registerServices";
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom"

function RegisterForm() {
  const [value, setValue] = useState({
    ruc: 0,
    raz_social: "",
    rep_legal: "",
    mail:"",
    telefono:0,
    password:""
  });
  const history = useHistory()

  const updateCompany = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerCompany({ ...value });
      await Swal.fire({
        icon: "success",
        title: "¡Empleador Creado Exitosamente!",
        showConfirmButton: false,
        timer: 1500,
      });
        history.push("/companylist")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <FormRegister
        value={value}
        updateCompany={updateCompany}
        manejarSubmit={manejarSubmit}
      />
    </div>
  );
}

export default RegisterForm;