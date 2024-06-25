import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../styles/topCard.css';

const TopCard = () => {
    const [mechanics, setMechanics] = useState([]);
    const [selectedMechanic, setSelectedMechanic] = useState(null);

    useEffect(() => {
        const fetchMechanics = async () => {
            try {
                const response = await axios.get('/auth/mechanics', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setMechanics(response.data);
            } catch (error) {
                console.error('Error fetching mechanics:', error);
            }
        };

        fetchMechanics();
    }, []);

    const handleContact = (mechanic) => {
        setSelectedMechanic(mechanic);
    };

    return (
        <div className="container">
            {mechanics.map(mechanic => (
                <div className="top-card card my-4" key={mechanic.id}>
                    <div className="card-body">
                        <div className="icon-container">
                            <span className="heart-icon text-black py-2 pe-2">
                                <FontAwesomeIcon icon={faHeart} />
                            </span>
                            <span className="star-icon text-black p-2">
                                <FontAwesomeIcon icon={faStar} /> {mechanic.stars}
                            </span>
                        </div>
                        <div className="box d-flex justify-content-between my-3">
                            <div className="name-loc">
                                <h5 className="card-title">{mechanic.name}</h5>
                                <p className="card-text text-muted">{mechanic.location}</p>
                            </div>
                            <button className="btn btn-primary px-3" onClick={() => handleContact(mechanic)}>Contact</button>
                        </div>
                    </div>
                </div>
            ))}
            {selectedMechanic && (
                <div className="offcanvas offcanvas-bottom show" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasBottomLabel">Mechanic Details</h5>
                        <button type="button" className="btn-close text-reset" onClick={() => setSelectedMechanic(null)}></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p className="fw-bold">Name:</p>
                                    <p>{selectedMechanic.name}</p>
                                </div>
                                <div className="col">
                                    <p className="fw-bold">Location:</p>
                                    <p>{selectedMechanic.location}</p>
                                </div>
                                <div className="col">
                                    <p className="fw-bold">Phone:</p>
                                    <p>{selectedMechanic.phone}</p>
                                </div>
                                <div className="col">
                                    <button className="btn btn-primary" onClick={() => window.open(`tel:${selectedMechanic.phone}`)}>
                                        <FontAwesomeIcon icon={faPhone} /> Call
                                    </button>
                                </div>
                            </div>
                            {/* Additional information can be added here */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TopCard;
