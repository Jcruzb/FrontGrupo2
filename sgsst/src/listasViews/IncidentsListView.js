import React, {useState, useEffect} from 'react'
import NavBar from '../components/NavBar';
import { getIncidents } from '../services/IncidentServices';
import {Link} from "react-router-dom"



function IncidentsListView() {

    const [workers, setworkers] = useState([]);

    const getAllIncidents = async ()=>{
        try {
            const Incidentsgetet = await getIncidents ()
            setworkers(Incidentsgetet)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getAllIncidents()
    },[])

    return (
        <div>
            <NavBar/>
            <h1>Eventos Reportados</h1>
            <Link className="btn btn-primary btn-lg my-2" to="/reportincident">
             Reportar un Evento
            </Link>
           <table className="table">
               <thead>
                   <tr>
                       <th>Descripción</th>
                       <th>Fecha de Ocurrencia</th>
                       <th>Nº de afectados</th>
                       <th>Reportado por</th>
                       <th></th>
                       
                       
                   </tr>
               </thead>
               <tbody>
                   {workers.map((item,i)=>(
                    <tr key={i}>
                        <td>{item.description}</td>
                        <td>{item.incident_date}</td>
                        <td>{item.affected}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.mail}</td>
                        <td>
                        <Link className="btn btn-warning btn-sm" to={`/editWorker/${item.id}`}>
                            Editar
                        </Link>
                        </td>
                    </tr>
                   ))}
               </tbody>
           </table> 
        </div>
    )
}

export default IncidentsListView
