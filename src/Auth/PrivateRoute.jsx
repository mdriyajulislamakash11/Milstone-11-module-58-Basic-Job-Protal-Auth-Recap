import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location)

    if(user){
        return children
    };

    if(loading){
        return <p>Loading...</p>
    };


    return <Navigate to='/signIn' state={location?.pathname} />
};

export default PrivateRoute;