import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/mechanics.css'; 
import { Button, Offcanvas } from 'react-bootstrap';

const Mechanics = () => {
    const initialNotifications = [
        { id: 1, text: 'New request from John Doe', read: false },
        { id: 2, text: 'New request from Jane Smith', read: false },
        { id: 3, text: 'New request from Michael Johnson', read: false },
    ];

    const [notifications, setNotifications] = useState(initialNotifications);

    const handleAccept = (id) => {
        setNotifications(notifications.map(notification => 
            notification.id === id ? { ...notification, read: true } : notification
        ));
    };

    const handleCancel = (id) => {
        setNotifications(notifications.filter(notification => notification.id !== id));
    };

    const unreadCount = notifications.filter(notification => !notification.read).length;

    return (
        <div>
            <Header unreadCount={unreadCount} />
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
                                        {notifications.map(notification => (
                                            <li key={notification.id} className="list-group-item d-flex justify-content-between align-items-center">
                                                {notification.text}
                                                <div>
                                                    <button 
                                                        className="btn btn-success btn-sm me-2"
                                                        onClick={() => handleAccept(notification.id)}
                                                    >
                                                        <i className="fas fa-check"></i>
                                                    </button>
                                                    <button 
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => handleCancel(notification.id)}
                                                    >
                                                        <i className="fas fa-times"></i>
                                                    </button>
                                                </div>
                                            </li>
                                        ))}
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

const Header = ({ unreadCount }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header className="navbar navbar-dark sticky-top bg-primary flex-md-nowrap p-0 shadow">
            <Button variant="primary" onClick={handleShow} className="d-md-none ms-2">
                <i className="fas fa-bars"></i>
            </Button>
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Mechanics Dashboard</a>
            <NotificationIcon unreadCount={unreadCount} />
            <Offcanvas show={show} onHide={handleClose} id="sidebar" className="d-md-none">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Car Service Pro</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SidebarContent />
                </Offcanvas.Body>
            </Offcanvas>
        </header>
    );
};

const NotificationIcon = ({ unreadCount }) => {
    return (
        <div className="notification-icon position-relative me-3">
            <i className="fas fa-bell text-white"></i>
            {unreadCount > 0 && (
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                    {unreadCount}
                </span>
            )}
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
                <a className="nav-link" href="#">Log out</a>
            </li>
        </ul>
    );
};

export default Mechanics;
