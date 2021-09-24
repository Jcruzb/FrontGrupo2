import axios from "axios";

// const URL ="localhost:3001"

const getCompanies = async () =>{
    try {
        let {data} = await axios.get('http://localhost:3001/companies')
        console.log(data)
        
        return data
    } catch (error) {
        throw error
    }
}

const registerCompany = async (registerCompany) =>{
    try {
        let headers ={
            "Content-Type":"application/json"
        }
        let {data} = await axios.post('http://localhost:3001/register',registerCompany,{headers})
        return data
    } catch (error) {
        throw error
    }
}

export{
    getCompanies,
    registerCompany
}