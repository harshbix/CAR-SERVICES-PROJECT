import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you use axios for HTTP requests
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faWrench, faChartBar } from '@fortawesome/free-solid-svg-icons';

const Admin = () => {
    const [requests, setRequests] = useState([]);
    const [mechanics, setMechanics] = useState([]);
    const [clients, setClients] = useState([]);

    useEffect(() => {
        // Fetch requests, mechanics, and clients data from API endpoints
        fetchRequests();
        fetchMechanics();
        fetchClients();
    }, []);

    const fetchRequests = async () => {
        try {
            // Replace with actual fetch call to your API endpoint or JSON file
            const response = await fetch('/requests.json');
            if (response.ok) {
                const data = await response.json();
                setRequests(data);
            } else {
                console.error('Failed to fetch requests:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching requests:', error);
        }
    };

    const fetchMechanics = async () => {
        try {
            // Replace with actual fetch call to your API endpoint
            const response = await axios.get('/api/mechanics');
            setMechanics(response.data);
        } catch (error) {
            console.error('Error fetching mechanics:', error);
        }
    };

    const fetchClients = async () => {
        try {
            // Replace with actual fetch call to your API endpoint
            const response = await axios.get('/api/clients');
            setClients(response.data);
        } catch (error) {
            console.error('Error fetching clients:', error);
        }
    };

    return (
        <div className="admin-dashboard-container">
            <h1 className="admin-dashboard-title">Admin Dashboard</h1>

            <div className="admin-dashboard-section">
                <h2><FontAwesomeIcon icon={faUsers} /> Clients</h2>
                <ul className="list-group">
                    {clients.map((client, index) => (
                        <li key={index} className="list-group-item">{client.name}</li>
                    ))}
                </ul>
            </div>

            <div className="admin-dashboard-section">
                <h2><FontAwesomeIcon icon={faWrench} /> Mechanics</h2>
                <ul className="list-group">
                    {mechanics.map((mechanic, index) => (
                        <li key={index} className="list-group-item">{mechanic.name}</li>
                    ))}
                </ul>
            </div>

            <div className="admin-dashboard-section">
                <h2><FontAwesomeIcon icon={faChartBar} /> Requests</h2>
                <ul className="list-group">
                    {requests.map((request, index) => (
                        <li key={index} className="list-group-item">{request.details}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Admin;
