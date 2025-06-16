import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);

    if(user){
        return children
    };

    if(loading){
        return <p>Loading...</p>
    };


    return <Navigate to='/signIn'  />
};

export default PrivetRoute;