import React from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import JobOfTheDay from '../components/JobOfTheDay';
import HotJobs from './HotJobs';

const Home = () => {
    return (
        <div>
            <Banner />

            <Category />

            <JobOfTheDay />

            <HotJobs />
        </div>
    );
};

export default Home;