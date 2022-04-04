import axios from "axios";
import { useContext } from "react";
import  toast  from 'react-toastify';
import AppContext from "./AppContext";
export  const  baseUrl= "https://dev-m3av5cw5.us.auth0.com/";

export const RESPONSE_CODE = {
    UNAUTHORIZED: 401,
    BAD_REQUEST: 400,
    SUCCESS: 200,
    INTERNAL_SERVER: 500
} 

const axiosInstance=axios.create({
    baseURL:baseUrl
});
const AuthInterceptor=({ children }: any)=>{
    const value = useContext(AppContext);

    axios.interceptors.request.use((config) => {
        config.params = config.params || {};
        // const token = getAccessToken();
        // if (token) {
        //   config.headers["Authorization"] = "Bearer " + token;
        // }
        // config.headers["Content-Type"] = "application/json";
        // config.headers["Offset"] = new Date().getTimezoneOffset();
      
        // dispatch(showLoader());
        value.setShowLoader(true);
        return config;
      });
      axios.interceptors.response.use((response)=> {
        // spinning hide
        value.setShowLoader(false);
        return Promise.resolve(response);
      }
        , (error)=> {
        //   dispatch(hideLoader());
          if (error.response.status === RESPONSE_CODE.UNAUTHORIZED) {
            // toast.error("Please login again your session is expired.",
            // {
            //   toastId: error.response.status
            // });
          } else if (error.response.status === RESPONSE_CODE.INTERNAL_SERVER) {
            // toast.error("Internal server error.",
            // {
            //   toastId: error.response.status
            // });
          }
          return Promise.reject(error.response);
        }
      );
      return children
}
export default AuthInterceptor;