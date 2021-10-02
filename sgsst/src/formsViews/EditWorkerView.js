import React, {useState, useEffect} from 'react'
import FormWorker from '../components/FormWorker';
import NavBar from '../../components/NavBar';
import {editarTrabajador, obtenerTrabajadorPorId} from "../../services/trabajadoresServices"
import { useParams } from 'react-router'
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom"


function EditarTrabajador() {

    let {id} = useParams();
    const history = useHistory();

    const [value, setValue] = useState ({
        nombre:"",
        apellido:"",
        dni:"",
        area:"",
        puesto:"",
        tra_sctr:"",
    })

    const actualizarTrabajador = (e)=>{
        e.preventDefault()
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

    const manejarSubmit = async (e) =>{
        e.preventDefault(id)
        try {
            await editarTrabajador(value,id)
            await Swal.fire({
                icon: 'success',
                title: '¡Trabajador Editado exitosamente!',
                showConfirmButton: false,
                timer: 1500
              })
              history.push("/listaTrabajador")
           } catch (error) {
               console.log(error)
               
           }}

           const getTrabajador =async()=>{
            try {
                let trabajadorObtenido = await obtenerTrabajadorPorId(id)
                setValue({...trabajadorObtenido})
                console.log(trabajadorObtenido)
    
            } catch (error) {
                console.log(error)
            }
        }
        useEffect(()=>{
            getTrabajador()
        },[])

    return (
        <div className="container">
            <NavBar/>
            <h1>Editar Trabajador</h1>
            <FormTrabajador
            value={value}
            setValue={setValue}
            actualizarTrabajador={actualizarTrabajador}
            manejarSubmit={manejarSubmit}
            >

            </FormTrabajador>
        </div>
    )
}

export default EditarTrabajador