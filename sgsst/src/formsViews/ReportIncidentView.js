import React, {useState, useEffect} from 'react';
import FormIncident from '../components/FormIncident';
import { newIncident } from '../services/IncidentServices';
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom"
import NavBar from '../components/NavBar';
import { getWorker } from '../services/WorkerServices';
import { getCompanies } from '../services/registerServices';

function ReportIncident() {

    const[value, setValue]= useState({

        descripcion:"",
        fecha:"",
        nafectados:0,
        EmpresaId:"",
        TrabajadorId:"",

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

    const [companies, setcompanies] = useState([]);

    const getAllCompanies = async () => {
      try {
        const getedCompanies = await getCompanies();
          companies.id = workers.EmpresaId
        setcompanies(getedCompanies);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getAllCompanies();
    }, []);

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
        <div className="container p-10">
            <NavBar/>
            <FormIncident
            value={value} 
            companies={companies}
            workers ={workers}
            incidentReport={incidentReport}
            manejarSubmit={manejarSubmit}
            />
        </div>
    )
}

export default ReportIncident