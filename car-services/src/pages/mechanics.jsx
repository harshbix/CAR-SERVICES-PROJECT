import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/mechanics.css'; // Ensure this file exists and has the styles
import { Button, Offcanvas } from 'react-bootstrap';

const Mechanics = () => {
    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="pt-3">
                            <h2>Dashboard</h2>
                            <div className="card mt-4">
                                <div className="card-body">
                                    <h5 className="card-title">Notifications</h5>
                                    <ul className="list-group list-group-flush">
                                        {/* Example notifications */}
                                        <li className="list-group-item">New request from John Doe</li>
                                        <li className="list-group-item">New request from Jane Smith</li>
                                        <li className="list-group-item">Request from Michael Johnson is pending</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header className="navbar navbar-dark sticky-top bg-primary flex-md-nowrap p-0 shadow">
            <Button variant="primary" onClick={handleShow} className="d-md-none ms-2">
                <i className="fas fa-bars"></i>
            </Button>
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Mechanics Dashboard</a>
            <NotificationIcon />
            <Offcanvas show={show} onHide={handleClose} id="sidebar" className="d-md-none">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Sidebar</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SidebarContent />
                </Offcanvas.Body>
            </Offcanvas>
        </header>
    );
};

const NotificationIcon = () => {
    return (
        <div className="notification-icon position-relative me-3">
            <i className="fas fa-bell text-white"></i>
            <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">3</span> {/* Example badge number */}
        </div>
    );
};

const Sidebar = () => {
    return (
        <div className="col-md-3 col-lg-2 d-none d-md-block bg-light sidebar">
            <SidebarContent />
        </div>
    );
};

const SidebarContent = () => {
    return (
        <ul className="nav flex-column p-3">
            <li className="nav-item">
                <a className="nav-link active" href="#">Dashboard</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Requests</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Settings</a>
            </li>
        </ul>
    );
};

export default Mechanics;
