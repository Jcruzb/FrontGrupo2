import React, {useState, useEffect} from 'react'
import FormWorker from '../components/FormWorker';
import NavBar from '../components/NavBar';
import {editWorker, getWorkerForPk} from "../services/WorkerServices"
import { useParams } from 'react-router'
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom"
import { getCompanies } from '../services/registerServices';



function EditarTrabajador() {

    let {id} = useParams();
    const history = useHistory();

    const [value, setValue] = useState ({
        name:"",
        last_name:"",
        dni:"",
        job:"",
        phone:"",
        mail:"",
        EmpresaId:"",
    })

    const updateWorker = (e)=>{
        e.preventDefault()
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

    const manejarSubmit = async (e) =>{
        e.preventDefault(id)
        try {
            await editWorker(value,id)
            await Swal.fire({
                icon: 'success',
                title: '¡Trabajador Editado exitosamente!',
                showConfirmButton: false,
                timer: 1500
              })
              history.push("/workerslist")
           } catch (error) {
               console.log(error)
               
           }}

           const getTrabajador =async()=>{
            try {
                let trabajadorObtenido = await getWorkerForPk(id)
                setValue({...trabajadorObtenido})
                console.log(trabajadorObtenido)
    
            } catch (error) {
                console.log(error)
            }
        }
        useEffect(()=>{
            getTrabajador()
        },[])


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
        <div className="container">
            <NavBar/>
            <h1>Editar Trabajador</h1>
            <FormWorker
            value={value}
            companies={companies}
            setValue={setValue}
            updateWorker={updateWorker}
            manejarSubmit={manejarSubmit}
            >

            </FormWorker>
        </div>
    )
}

export default EditarTrabajador