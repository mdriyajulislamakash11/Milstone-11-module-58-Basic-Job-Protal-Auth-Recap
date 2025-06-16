import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {

    const {title, company, deadline} = useLoaderData()

    return (
        <div>
            <h2 className='m'>Job Details For: {title}</h2>
            <p>Apply for: {company}</p>
            <p>Deadline: {deadline}</p>
            <button className='btn btn-primary'>Apply Now</button>
        </div>
    );
};

export default JobDetails;