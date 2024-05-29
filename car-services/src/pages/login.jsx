import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="container vh-100 d-flex align-items-center justify-content-center bg-dark">
                <div className="col-md-6 col-lg-4">
                    <div className="text-center my-4 text-white">
                        <h1>Log In</h1>
                    </div>
                    <div className="p-4 bg-light rounded">
                        <form action="#" className='w-100'>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd" className="form-label">Password:</label>
                                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                            </div>
                            <div className="form-check mb-3">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mb-2">Sign In</button>
                            <button type="button" className="btn btn-outline-secondary  w-100" onClick={() => navigate('/signup')}>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
