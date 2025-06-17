import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthProvider';

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setJobs(data)
        })
    }, [])

    
    return (
        <div>
            posted jobs {jobs.length}
        </div>
    );
};

export default MyPostedJobs;