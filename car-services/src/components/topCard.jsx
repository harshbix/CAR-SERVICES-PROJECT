import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../styles/topCard.css'; // Import your custom CSS file

const TopCard = ({ imageUrl, name, location, stars }) => {
    return (
        <div className="top-card card">
            <img src={imageUrl} className="card-img-top" alt="Seller" />
            <div className="card-body">
                <div className="icon-container">
                    <span className="heart-icon">
                        <FontAwesomeIcon icon={faHeart} className='bg-black p-1 rounded-circle'/>
                    </span>
                    <span className="star-icon bg-black py-1 px-2 rounded-1">
                        <FontAwesomeIcon icon={faStar} /> {stars}
                    </span>
                </div>
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-muted">{location}</p>
                <button className="btn btn-primary">Contact</button>
            </div>
        </div>
    );
};

export default TopCard;
