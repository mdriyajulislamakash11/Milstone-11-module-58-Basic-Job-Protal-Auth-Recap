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


            return Promise.reject(error)
        })
    }, [])

    return axiosIntance;
};

export default UseAxiosSecure;