import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import Search from '../components/search';
import TopCard from '../components/topCard';
import Navbar from '../components/navbar';

const Home = ({ username }) => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        // Fetch user data from users.json
        fetch('../../public/users.json')
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    return (
        <div className='container py-4 bg-dark'>
            {username ? (
                <h4 className='text-white'>Welcome, {username}!</h4>
            ) : (
                <h4 className='text-white'>Welcome back!</h4>
            )}
            <h2 className='display-3 fw-bold text-white'>Find car services near you</h2>
            <Search />
            <div>
                <h4 className='text-white mb-4'>Top service providers</h4>
                {/* Map through user data and render a top card for each user */}
                {userData.map((user, index) => (
                    <TopCard key={index} name={user.name} location={user.location} stars={user.stars} />
                ))}
            </div>
            <Navbar />
        </div>
    );
};

export default Home;
