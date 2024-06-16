import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/search.css'; // Import your custom CSS file

const Search = () => {
    return (
        <div className="search-container py-5 row align-items-center">
            <div className="input-group col">
                <div className="input-group-prepend">
                    <span className="input-group-text bg-black border-black">
                        <FontAwesomeIcon icon={faSearch} className="text-white" />
                    </span>
                </div>
                <input type="text" className="form-control bg-black border-black text-white" placeholder="Enter your location"/>
            </div>
            <button type="submit" className="btn col-auto">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-dark bg-white p-3 rounded-2 " />
            </button>
        </div>
    );
};

export default Search;
