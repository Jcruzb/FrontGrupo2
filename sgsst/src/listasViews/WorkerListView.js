import React, {useState, useEffect} from 'react'
import NavBar from '../components/NavBar';
import { getWorker } from '../services/WorkerServices';
import {Link} from "react-router-dom"



function WorkerListView() {

    const [workers, setworkers] = useState([]);

    const getworkers = async ()=>{
        try {
            const workerwsgetet = await getWorker ()
            setworkers(workerwsgetet)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getworkers()
    },[])

    return (
        <div>
            <NavBar/>
            <h1>Lista de Trabajadores</h1>
            <Link className="btn btn-primary btn-lg my-2" to="/createworker">
             Agregar Trabajador
            </Link>
           <table className="table">
               <thead>
                   <tr>
                       <th>Nombre</th>
                       <th>Apellido</th>
                       <th>DNI</th>
                       <th>Puesto de trabajo</th>
                       <th>Teléfono</th>
                       <th>correo</th>
                       <th>Editar</th>
                       
                   </tr>
               </thead>
               <tbody>
                   {workers.map((item,i)=>(
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.dni}</td>
                        <td>{item.job}</td>
                        <td>{item.phone}</td>
                        <td>{item.mail}</td>
                        <td>
                        <Link className="btn btn-warning btn-sm" to={`/editWorker/${item.ruc}`}>
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

export default WorkerListView
