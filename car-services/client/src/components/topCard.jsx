import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../styles/topCard.css';

const TopCard = ({ mechanic }) => {
    const [showOffCanvas, setShowOffCanvas] = useState(false);

    const handleContact = async () => {
        try {
            const response = await axios.post('/api/requests', {
                mechanicId: mechanic.id,
                message: 'Request for service',
                // Additional fields as needed
            });
            console.log('Request sent successfully:', response.data);
            setShowOffCanvas(true); // Show off-canvas on successful request
        } catch (error) {
            console.error('Error sending request:', error);
        }
    };

    // Ensure mechanic is defined before accessing properties
    if (!mechanic) {
        return null; // Or render a loading indicator or error message
    }

    return (
        <div className="top-card card my-4">
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
                    <button className="btn btn-primary px-3" onClick={handleContact}>Contact</button>
                </div>
            </div>
            {showOffCanvas && (
                <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasBottomLabel">Mechanic Details</h5>
                        <button type="button" className="btn-close text-reset" onClick={() => setShowOffCanvas(false)}></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p className="fw-bold">Name:</p>
                                    <p>{mechanic.name}</p>
                                </div>
                                <div className="col">
                                    <p className="fw-bold">Location:</p>
                                    <p>{mechanic.location}</p>
                                </div>
                                <div className="col">
                                    <p className="fw-bold">Phone:</p>
                                    <p>{mechanic.phone}</p>
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
