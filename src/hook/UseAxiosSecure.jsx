import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const axiosIntance = axios.create({
  baseURL: "http://http://localhost:5000",
  withCredentials: true,
});

const UseAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);

  useEffect(() => {
    axiosIntance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error interceptors: ", error);

        if (error.status === 401 || error.status === 403) {
          console.log("need to logout user");
          logOut()
          .then(() => {
            console.log("logOut")
          })
          .catch(error => console.log(error))
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return axiosIntance;
};

export default UseAxiosSecure;
