import React, { useState} from "react";
import trabajadores from "../assets/trabajaores.jpg";

function FormWorker({ value, updateWorker, setValue, manejarSubmit, companies }) {
  
  
  return (
    <div>
      {/* título */}
      <h2
       className="w-100 text-center mt-1"
      >
        Registro de Trabajadores
      </h2>
      {/* Formulario */}
      <div className="d-flex mt-3 rounded shadow justify-content-around" style={{color:"white"}}>
        <form
          onSubmit={(e) => {
            manejarSubmit(e);
          }}
          className="col-md-6 col-lg-6 col-xl-5"
        >
          <div>
            <label className="form-label col-12">Nombres</label>
            <input
              className="form-text col-12" style={{color:"white"}}
              type="text"
              placeholder="nombres"
              name="name"
              value={value.name}
              onChange={(e) => {
                updateWorker(e);
              }}
            />
          </div>

          <div>
            <label className="form-label col-12">Apellidos</label>
            <input
              className="form-text col-12" style={{color:"white"}}
              type="text"
              placeholder="apellidos"
              name="last_name"
              value={value.last_name}
              onChange={(e) => {
                updateWorker(e);
              }}
            />
          </div>

          <div>
            <label className="form-label col-12">DNI</label>
            <input
              className="form-text col-12" style={{color:"white"}}
              type="number"
              placeholder="00000000"
              name="dni"
              value={value.dni}
              onChange={(e) => {
                updateWorker(e);
              }}
            />
          </div>

          <div>
            <label className="form-label col-12">Puesto de Trabajo</label>
            <input
              className="form-text col-12" style={{color:"white"}}
              type="text"
              placeholder="Puesto de trabajo"
              name="job"
              value={value.job}
              onChange={(e) => {
                updateWorker(e);
              }}
            />
          </div>

          <div>
            <label className="form-label col-12">Teléfono celular</label>
            <input
              className="form-text col-12" style={{color:"white"}}
              type="number"
              placeholder="Teléfono"
              name="phone"
              value={value.phone}
              onChange={(e) => {
                updateWorker(e);
              }}
            />
          </div>

          <div>
            <label className="form-label col-12">Correo electrónico</label>
            <input
              className="form-text col-12" style={{color:"white"}}
              type="mail"
              placeholder="Correo electrónico"
              name="mail"
              value={value.mail}
              onChange={(e) => {
                updateWorker(e);
              }}
            />
          </div>
            
          <div>
            <label className="form-label col-12">Empresa</label>
            <select 
              className="form-control"
              name="EmpresaId"
              value={value.EmpresaId}
              onChange={(e) => {updateWorker(e);}}
            >
            {companies.map((cat, i) => (
                <option key={i} value={cat.id}>
                  {cat.raz_social}
                </option>
              ))}
            </select>
          </div>
          <div className="row justify-content-around m-3">
            <button className="btn btn-success col-4" type="submit">
              Guardar
            </button>
          </div>
        </form>

        <div className="d-none d-md-block  ">
          <img
            className="justify-content-center mt-3 rounded-circle"
            src={trabajadores}
            fluid
            style={{ width: "350px", height: "350px", objectFit: "cover", objectPosition: "center center " }}
          />
        </div>
      </div>
    </div>
  );
}

export default FormWorker;
