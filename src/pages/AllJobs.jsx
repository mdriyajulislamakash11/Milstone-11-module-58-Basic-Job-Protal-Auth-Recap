import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HotJobCard from './JobCard';

const AllJobs = () => {
    const jobs = useLoaderData()

    return (
        <div>
            <h2 className='my-12 text-4xl text-center font-bold'>All Job Collection</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    jobs.map((job) => <HotJobCard key={job._id} job={job} />)
                }
            </div>
        </div>
    );
};

export default AllJobs;