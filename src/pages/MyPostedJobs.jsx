import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://jobprotal-delta.vercel.app/jobs?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setJobs(data)
        })
    }, [user.email])

    
    return (
         <div>
            <h2 className='text-3xl'>My Posted Jobs: {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Deadline</th>
                            <th>Application Count</th>
                            <th>Applications</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, index) => <tr key={job._id}>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td>{job.applicationCount}</td>
                                <td>
                                    <Link to={`/viewApplications/${job._id}`}>
                                        <button className='btn btn-link'>View Applications</button>
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;