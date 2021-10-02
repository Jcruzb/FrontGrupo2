import axios from "axios"

// const URL ="http://localhost:3001"

const getWorker = async () =>{
    try {
        let {data} = await axios.get("http://localhost:3001/workersview")
        
        return data
    } catch (error) {
        throw error
    }
}

const newWorker = async(newWorker) =>{
    try {
        let headers ={
            "Content-Type":"application/json"
        }
        let {data} = await axios.post('http://localhost:3001/workercreate', newWorker, {headers})
        return data
    } catch (error) {
        throw error
        
    }
}

const editWorker = async(editWorker, id) =>{
    try {
        let headers ={
            "Content-Type":"application/json"
        }
        let { data } = await axios.put(`http://localhost:3001/workersview/${id}`, editWorker, {headers})
        return data
        
    } catch (error) {
        console.log(error)
        
    }
}

const getWorkerForPk = async (id) =>{
    try {
        let { data } = await axios.get(`http://localhost:3001/workersview/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

const deleteWorker = async (id) =>{
    try {
        let { data } = await axios.delete(`http://localhost:3001/workersview/${id}`)
        window.location.reload(true)
        return data
        
    } catch (error) {
        console.log(error)
    }
}

export{
    getWorker,
    newWorker,
    editWorker,
    getWorkerForPk,
    deleteWorker
}