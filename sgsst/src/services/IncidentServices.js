import axios from "axios"

// const URL ="http://localhost:3001"

const getIncidents = async () =>{
    try {
        let {data} = await axios.get("http://localhost:3001/incidentsview")
        
        return data
    } catch (error) {
        throw error
    }
}

const newIncident = async(newIncident) =>{
    try {
        let headers ={
            "Content-Type":"application/json"
        }
        let {data} = await axios.post('http://localhost:3001/incidentreport', newIncident, {headers})
        return data
    } catch (error) {
        throw error
        
    }
}

const editIncident = async(editIncident, id) =>{
    try {
        let headers ={
            "Content-Type":"application/json"
        }
        let { data } = await axios.put(`http://localhost:3001/incidentview/${id}`, editIncident, {headers})
        return data
        
    } catch (error) {
        console.log(error)
        
    }
}

const getIncidentForPk = async (id) =>{
    try {
        let { data } = await axios.get(`http://localhost:3001/incidentview/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export{
    getIncidents,
    newIncident,
    editIncident,
    getIncidentForPk
}