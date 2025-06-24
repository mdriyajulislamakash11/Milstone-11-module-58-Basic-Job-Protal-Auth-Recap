import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([])


    useEffect(() => {
        fetch(`https://jobprotal-delta.vercel.app/jobs`)
        .then(res => res.json())
        .then(data => {
            setJobs(data)
        })
    }, [])


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    jobs.slice(0, 8).map((job) => <JobCard key={job._id} job={job} />)
                }
            </div>
        </div>
    );
};

export default HotJobs;