
import axios from "axios";


export const getUser=()=>{
    return axios.get('http://localhost:4500/user/');
}
export const updateUser=(id:number,value:any)=>{
    return axios.put('http://localhost:4500/user/'+id,value);
}
