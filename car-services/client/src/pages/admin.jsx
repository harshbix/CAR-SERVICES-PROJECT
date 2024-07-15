import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you use axios for HTTP requests
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faWrench, faChartBar, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

// Define the token here (replace with your actual token)
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

const Admin = () => {
    const [requests, setRequests] = useState([]);
    const [mechanics, setMechanics] = useState([]);
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetchRequests();
        fetchMechanics();
        fetchClients();
    }, []);

    const fetchRequests = async () => {
        try {
            const response = await axios.get('/api/requests', {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            });
            setRequests(response.data);
        } catch (error) {
            console.error('Error fetching requests:', error);
        }
    };

    const fetchMechanics = async () => {
        try {
            const response = await axios.get('/api/mechanics', {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            });
            setMechanics(response.data);
        } catch (error) {
            console.error('Error fetching mechanics:', error);
        }
    };

    const fetchClients = async () => {
        try {
            const response = await axios.get('/api/clients', {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            });
            setClients(response.data);
        } catch (error) {
            console.error('Error fetching clients:', error);
        }
    };

    const handleDeleteRequest = async (id) => {
        try {
            await axios.delete(`/api/requests/${id}`, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            });
            setRequests(requests.filter(request => request.id !== id));
        } catch (error) {
            console.error('Error deleting request:', error);
        }
    };

    const handleEditRequest = (id) => {
        // Implement edit functionality here
        console.log('Edit request', id);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Admin Dashboard</h1>

            <div className="row mb-4">
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-header bg-primary text-white">
                            <h2 className="card-title"><FontAwesomeIcon icon={faUsers} /> Clients</h2>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                {clients.map((client, index) => (
                                    <li key={index} className="list-group-item">{client.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-header bg-success text-white">
                            <h2 className="card-title"><FontAwesomeIcon icon={faWrench} /> Mechanics</h2>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                {mechanics.map((mechanic, index) => (
                                    <li key={index} className="list-group-item">{mechanic.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-header bg-warning text-white">
                            <h2 className="card-title"><FontAwesomeIcon icon={faChartBar} /> Requests</h2>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                {requests.map((request, index) => (
                                    <li key={index} className="list-group-item">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <strong>{request.clientName}</strong> requested <strong>{request.mechanicName}</strong>
                                                <p className="mb-0">{request.details}</p>
                                            </div>
                                            <div>
                                                <button 
                                                    className="btn btn-sm btn-warning me-2"
                                                    onClick={() => handleEditRequest(request.id)}
                                                >
                                                    <FontAwesomeIcon icon={faEdit} />
                                                </button>
                                                <button 
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => handleDeleteRequest(request.id)}
                                                >
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
