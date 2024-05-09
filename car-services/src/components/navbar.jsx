import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark row fixed-bottom">
            <div className="container row">
                <ul className="navbar-nav col-12 row ms-5">
                    <li className="nav-item col">
                        <a className="nav-link" href="#"><FontAwesomeIcon icon={faHome} /></a>
                    </li>
                    <li className="nav-item col">
                        <a className="nav-link" href="#"><FontAwesomeIcon icon={faSearch} /></a>
                    </li>
                    <li className="nav-item col">
                        <a className="nav-link" href="#"><FontAwesomeIcon icon={faUser} /></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
