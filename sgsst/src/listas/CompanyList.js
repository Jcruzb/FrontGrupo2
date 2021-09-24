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
          </tr>
        </thead>
        <tbody>
          <tr>
            {companies.map((item, i) => (
              <tr key={i}>
                <td>{item.ruc}</td>
                <td>{item.raz_social}</td>
              </tr>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CompanyList;
