import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
    return (
        <>
            <div className="container vh-100 d-flex align-items-center justify-content-center bg-dark">
                <div className="col-md-6 col-lg-4">
                    <div className="text-center my-4 text-white">
                        <h1>Sign Up</h1>
                    </div>
                    <div className="p-4 bg-light rounded">
                        <form action="#" className='w-100'>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name:</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="number" className="form-label">Number:</label>
                                <input type="text" className="form-control" id="number" placeholder="Enter number" name="number" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="location" className="form-label">Location:</label>
                                <input type="text" className="form-control" id="location" placeholder="Enter location" name="location" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="userType" className="form-label">User Type:</label>
                                <select className="form-control" id="userType" name="userType">
                                    <option value="user">User</option>
                                    <option value="mechanic">Mechanic</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;
