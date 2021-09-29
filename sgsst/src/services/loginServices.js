import axios from "axios";

const loginCompany = async (loginCompany) =>{
    try {
        let headers ={
            "Content-Type":"application/json"
        }
        let {data} = await axios.post('http://localhost:3001/login',loginCompany,{headers})
        console.log(data)
        return data
    } catch (error) {
        throw error
    }
}

export{
    loginCompany
}