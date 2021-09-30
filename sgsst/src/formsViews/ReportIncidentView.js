import React, {useState} from 'react';
import FormIncident from '../components/FormIncident';
import { newIncident } from '../services/IncidentServices';
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom"
import NavBar from '../components/NavBar';

function ReportIncident() {

    const[value, setValue]= useState({

        description:"",
        incident_date:"",
        affected:"",
        name:""
    })
    const history = useHistory()

    const incidentReport = (e)=>{
        console.log(e)
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const manejarSubmit = async (e) =>{
        e.preventDefault()
       try {
        await newIncident({...value})
        await Swal.fire({
            icon: 'success',
            title: '¡Incidente Reportado!',
            showConfirmButton: false,
            timer: 1500
          })
          history.push("/main")
       } catch (error) {
           console.log(error)
           
       }
          
    }

    return (
        <div className="container p-10">
            <NavBar/>
            <FormIncident
            value={value} 
            incidentReport={incidentReport}
            manejarSubmit={manejarSubmit}
            />
        </div>
    )
}

export default ReportIncident