import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../styles/topCard.css'; // Import your custom CSS file

const TopCard = ({ name, location, stars }) => {
    return (
        <div className="top-card card">
            <div className="card-body">
                <div className="icon-container">
                    <span className="heart-icon text-black p-2">
                        <FontAwesomeIcon icon={faHeart} className=''/>
                    </span>
                    <span className="star-icon text-black p-2">
                        <FontAwesomeIcon icon={faStar} /> {stars}
                    </span>
                </div>
                <div className="box d-flex justify-content-between my-3">
                <div className="name-loc">
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-muted">{location}</p>
                </div>
                <button className="btn btn-primary btn-lg">Contact</button>
                </div>
            </div>
        </div>
    );
};

export default TopCard;
