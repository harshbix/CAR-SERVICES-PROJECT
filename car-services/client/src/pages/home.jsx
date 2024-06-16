import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import TopCard from '../components/topCard';
import Navbar from '../components/navbar';

const Home = ({ username }) => {
    const [userData, setUserData] = useState([]);
    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState('');

    useEffect(() => {
        // Fetch user data from public/users.json
        fetch('/users.json')
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    useEffect(() => {
        // Get the user's location using the Geolocation API
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                    fetchAddress(latitude, longitude);
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    const fetchAddress = async (latitude, longitude) => {
        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`
            );
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                setAddress(data.results[0].formatted_address);
            } else {
                setAddress('Address not found');
            }
        } catch (error) {
            console.error('Error fetching address:', error);
            setAddress('Error fetching address');
        }
    };

    return (
        <div className='container py-4 bg-dark'>
            {username ? (
                <h4 className='text-white'>Welcome, {username}!</h4>
            ) : (
                <h4 className='text-white'>Welcome back!</h4>
            )}
            <h2 className='display-3 fw-bold text-white'>Find car services near you</h2>
            {location ? (
                <div className='text-white'>
                    <p>Your location: {address}</p>
                </div>
            ) : (
                <p className='text-white'>Fetching your location...</p>
            )}
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
