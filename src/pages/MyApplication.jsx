import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Auth/AuthProvider';


const MyApplication = () => {
    const {user} = useContext(AuthContext)


    useEffect(() => {
        fetch(`http://localhost:5000/job_applications?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default MyApplication;