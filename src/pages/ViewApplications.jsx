import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplications = () => {
    const appllications = useLoaderData()

    console.log(appllications)


    return (
        <div>
            viewapplications: {appllications.length}
        </div>
    );
};

export default ViewApplications;