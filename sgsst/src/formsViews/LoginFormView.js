import React, { useState } from "react";
import FormLogin from "../components/FormLogin";
import { loginCompany } from "../services/loginServices";
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom"

function LoginForm() {
  const [value, setValue] = useState({
    ruc: "",
    password:""
  });
  const history = useHistory()

  const logCompany = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginCompany({ ...value });
      await Swal.fire({
        icon: "success",
        title: "¡Bienvenido!",
        showConfirmButton: false,
        timer: 1500,
      });
        history.push(`/main`)
        
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <FormLogin
        value={value}
        logCompany={logCompany}
        manejarSubmit={manejarSubmit}
      />
    </div>
  );
   
}

export default LoginForm;




