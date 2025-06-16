import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/jobs`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setJobs(data)
        })
    }, [])


    return (
        <div>
            <div>
                {
                    jobs.map((job) => <JobCard key={job._id} job={job} />)
                }
            </div>
        </div>
    );
};

export default HotJobs;