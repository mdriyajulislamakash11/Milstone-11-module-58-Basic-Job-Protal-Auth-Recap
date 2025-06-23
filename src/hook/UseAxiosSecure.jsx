import axios from "axios";
import { useEffect } from "react";


const axiosIntance = axios.create({
    baseURL: 'http://http://localhost:5000',
    withCredentials: true
});



const UseAxiosSecure = () => {

    useEffect(() => {
        axiosIntance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log("error interceptors: ", error)

            if(error.status === 401 || error.status === 403){
                console.log('need to logout user')
                
            }

            return Promise.reject(error)
        })
    }, [])

    return axiosIntance;
};

export default UseAxiosSecure;