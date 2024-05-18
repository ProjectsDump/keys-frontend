import axios from "axios"
import { UserLoginInterface } from "./Interfaces"

const LOCAL_BASE_URL = 'http://localhost:3000/api'

// login
export const loginApiCall = async(body: UserLoginInterface)=>{
    try {        
        const response = await axios.post(`${LOCAL_BASE_URL}/user/login`, body)
        return response
    } catch (error) {
        console.log(error);
    }
}