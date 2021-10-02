import React, {useState, useEffect} from 'react'
import NavBar from '../components/NavBar';
import { getIncidentForPk } from '../services/IncidentServices';
import {Link} from "react-router-dom"
import { useParams } from 'react-router';



function IncidentsView() {
    let {id} = useParams();

    const [incidents, setIncidents] = useState([]);
   
    const getAllIncidents = async ()=>{
        try {
            const Incidentsgetet = await getIncidentForPk (id)
            setIncidents(...Incidentsgetet)
            
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
           
           <table className="table">
               <thead>
                   <tr>
                       <th>Descripción</th>
                       <th>Fecha de Ocurrencia</th>
                       <th>Nº de afectados</th>
                       
                   </tr>
               </thead>
               <tbody >
                   {incidents.map((item,i)=>(
                    <tr key={i}>
                        <td>{item.descripcion}</td>
                        <td>{item.fecha}</td>
                        <td>{item.nafectados}</td>
                       
                       
                    </tr>
                   ))}
               </tbody>
           </table> 
        </div>
    )
}

export default IncidentsView
