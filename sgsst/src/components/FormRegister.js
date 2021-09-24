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

        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default FormRegister;
