import React, {useState, useEffect} from 'react'
import NavBar from '../components/NavBar';
import { getIncidents } from '../services/IncidentServices';
import {Link} from "react-router-dom"
import { useParams } from 'react-router';



function IncidentsView() {
    let {id} = useParams();

    const [incidents, setIncidents] = useState([]);
   
    const getAllIncidents = async ()=>{
        try {
            const Incidentsgetet = await getIncidents ()
            setIncidents(Incidentsgetet)
            
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
                       
                       {/* <th>Acción</th> */}
                       
                       
                   </tr>
               </thead>
               <tbody>
                   {incidents.map((item,i)=>(
                    <tr key={i}>
                        <td>{item.descripcion}</td>
                        <td>{item.fecha}</td>
                        <td>{item.nafectados}</td>
                       
                        {/* <td>
                        <Link className="btn btn-warning btn-sm" to={`/incidentview/${item.id}`}>
                            Detallar
                        </Link>
                        </td> */}
                    </tr>
                   ))}
               </tbody>
           </table> 
        </div>
    )
}

export default IncidentsView
