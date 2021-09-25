import React, { useState, useEffect } from "react";
import { getCompanies } from "../services/registerServices";

function CompanyList() {
  const [companies, setcompanies] = useState([]);

  const getAllCompanies = async () => {
    try {
      const getedCompanies = await getCompanies();
      setcompanies(getedCompanies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCompanies();
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>RUC</th>
            <th>Razón Social</th>
            <th>Representante Legal</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Password</th>

          </tr>
        </thead>
        <tbody>
          {companies.map((item, i) => (
            <tr key={i}>
              <td>{item.ruc}</td>
              <td>{item.raz_social}</td>
              <td>{item.rep_legal}</td>
              <td>{item.mail}</td>
              <td>{item.telefono}</td>
              <td>{item.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompanyList;
