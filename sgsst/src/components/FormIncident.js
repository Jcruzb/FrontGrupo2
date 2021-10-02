import React, { useState, useEffect } from "react";
import banner from "../assets/banner1.jpg";



function FormIncident({
  value,
  incidentReport,
  setValue,
  manejarSubmit,
}) {
  

  return (
    <div>
    {/* título */}
    <h2
     className="w-100 text-center mt-1"
    >
      Reporte de Incidentes y Accidentes
    </h2>
    {/* Formulario */}
    <div className="d-flex mt-3 rounded shadow justify-content-around">
      <form
        onSubmit={(e) => {
          manejarSubmit(e);
        }}
        className="col-md-6 col-lg-6 col-xl-5"
      >
        <div>
          <label className="form-label col-12">Describa el evento</label>
          <textarea
            className="form-text col-12" style={{color:"white"}}
            type="text"
            placeholder="nombres"
            name="description"
            value={value.description}
            onChange={(e) => {
              incidentReport(e);
            }}
          />
        </div>

        <div>
          <label className="form-label col-12">Fecha de ocurrencia</label>
          <input
            className="form-text col-12" style={{color:"white"}}
            type="date"
            placeholder="fecha del evento"
            name="incident_date"
            value={value.incident_date}
            onChange={(e) => {
              incidentReport(e);
            }}
          />
        </div>

        <div>
          <label className="form-label col-12">Ingrese el número de afectados</label>
          <input
            className="form-text col-12" style={{color:"white"}}
            type="number"
            placeholder="2"
            name="affected"
            value={value.affected}
            onChange={(e) => {
              incidentReport(e);
            }}
          />
        </div>

        <div>
          <label className="form-label col-12">Reportado por</label>
          <input
            className="form-text col-12" style={{color:"white"}}
            type="text"
            placeholder="Ingrese el nombre del afectado"
            name="name"
            value={value.name}
            onChange={(e) => {
              incidentReport(e);
            }}
          />
        </div>

      


        <div className="row justify-content-around m-3">
          <button className="btn btn-success col-4" type="submit">
            Reportar
          </button>
        </div>
      </form>

      <div className="d-none d-md-block  ">
        <img
          className="justify-content-center rounded-circle"
          src={banner}
          fluid
          style={{ width: "350px", height: "350px", objectFit: "cover", objectPosition: "center center " }}
        />
      </div>
    </div>
  </div>
  );
}

export default FormIncident;
