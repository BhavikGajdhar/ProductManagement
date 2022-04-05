
import axios from "axios";


export const getUser=()=>{
    return axios.get('http://localhost:4500/user/');
}
export const getCartData=()=>{
    return axios.get('http://localhost:4500/addToCart/');
}
export const updateUser=(id:number,value:any)=>{
    return axios.put('http://localhost:4500/user/'+id,value);
}
