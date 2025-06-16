import React from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import JobOfTheDay from '../components/JobOfTheDay';

const Home = () => {
    return (
        <div>
            <Banner />

            <Category />

            <JobOfTheDay />
        </div>
    );
};

export default Home;