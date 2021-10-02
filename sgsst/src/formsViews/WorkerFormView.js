import React, {useState, useEffect} from 'react'
import FormWorker from '../components/FormWorker';
import { newWorker } from '../services/WorkerServices';
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom"
import NavBar from '../components/NavBar';
import { getCompanies } from '../services/registerServices';


function CreateWorker() {

    const[value, setValue]= useState({

        name:"",
        last_name:"",
        dni:"",
        job:"",
        phone:"",
        mail:"",
        EmpresaId:"",
    })
    const history = useHistory()

    const updateWorker = (e)=>{
        console.log(e)
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const manejarSubmit = async (e) =>{
        e.preventDefault()
       try {
        await newWorker({...value})
        await Swal.fire({
            icon: 'success',
            title: '¡Trabajador Creado Exitosamente!',
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
        setcompanies(getedCompanies);
        } catch (error) {
        console.log(error);
        }
    };

    useEffect(() => {
        getAllCompanies();
    }, []);

    return (
        <div className="container p-10">
            <NavBar/>
            <FormWorker
            value={value} 
            companies={companies}
            updateWorker={updateWorker}
            manejarSubmit={manejarSubmit}
            />
        </div>
    )
}

export default CreateWorker
