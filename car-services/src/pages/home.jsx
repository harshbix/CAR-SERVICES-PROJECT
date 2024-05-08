import React from 'react';
import '../styles/home.css';
import Search from '../components/search'

const Home = ({ username }) => {
    return (
        <div className='container py-4'>
            {username ? (
                <h4 className='text-white'>Welcome, {username}!</h4>
            ) : (
                <h4 className='text-white'>Welcome back!</h4>
            )}
            <h2 className='display-3 fw-bold text-white'>Find car services near you</h2>
            <Search />
        </div>
    );
};

export default Home;
