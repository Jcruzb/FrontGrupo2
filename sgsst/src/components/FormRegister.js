import React from "react";

function FormRegister({ value, updateCompany, setValue, manejarSubmit }) {
  return (
    <div>
      <form onSubmit={(e) => {manejarSubmit(e);}}>
        <div className="mb-3">
          <label className="form-label">RUC</label>
          <input
           type="number" 
           className="form-control" 
           name="ruc"
           value={value.ruc}
           onChange={(e) => {updateCompany(e);}}
          />
          <div className="form-text"></div>
        </div>
        <div className="mb-3">
          <label className="form-label">Razón Social</label>
          <input 
          type="text" 
          className="form-control" 
          name="raz_social"
          value={value.raz_social}
          onChange={(e) => {updateCompany(e);}}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Representante legal</label>
          <input 
          type="text" 
          className="form-control" 
          name="rep_legal"
          value={value.rep_legal}
          onChange={(e) => {updateCompany(e);}}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input 
          type="mail" 
          className="form-control" 
          name="mail"
          value={value.mail}
          onChange={(e) => {updateCompany(e);}}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Celular</label>
          <input 
          type="number" 
          className="form-control" 
          name="telefono"
          value={value.telefono}
          onChange={(e) => {updateCompany(e);}}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input 
          type="password" 
          className="form-control" 
          name="password"
          value={value.password}
          onChange={(e) => {updateCompany(e);}}
          />
        </div>
        {/* <div className="mb-3">
          <label className="form-label">Vigencia de Poder</label>
          <input 
          type="file" 
          className="form-control" 
          name="vig_pod"
          value={value.vig_pod}
          onChange={(e) => {updateCompany(e);}}
          />
        </div> */}

        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default FormRegister;
