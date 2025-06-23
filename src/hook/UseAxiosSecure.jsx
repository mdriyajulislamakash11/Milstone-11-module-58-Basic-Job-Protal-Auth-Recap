import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosIntance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const UseAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  useEffect(() => {
    axiosIntance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error interceptors: ", error);

        if (error.response?.status === 401 || error.response?.status === 403) {
          console.log("need to logout user");
          logOut()
            .then(() => {
              console.log("logOut");
              navigate("/signIn");
            })
            .catch((error) => console.log(error));
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return axiosIntance;
};

export default UseAxiosSecure;
