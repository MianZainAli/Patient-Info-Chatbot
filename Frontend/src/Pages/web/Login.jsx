import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from '../../Utils/Axios';

const Login = () => {
    const navigate = useNavigate(); // Use React Router's navigate hook for redirection

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // Store error messages

    // Function to handle login
    const handleLogin = async (e) => {
        e.preventDefault();

        // Reset any previous errors
        setError(null);

        try {
            // Make a POST request to the backend login endpoint
            const response = await api.post('/login/', { email, password });

            // Get the token and user details from the response
            const { user_id, role, user_email,name} = response.data;
            console.log(response.data)

            // Store the token and user info in localStorage or state
            localStorage.setItem('user_id', user_id);
            localStorage.setItem('role', role);
            localStorage.setItem('user_email', user_email);
            localStorage.setItem('name', name);

            // Redirect based on the role
            if (role === 'doctor') {
                navigate('/doctor/appointment');
            } else if (role === 'patient') {
                navigate('/patient/dashboard');
            }
        } catch (error) {
            // Handle invalid login credentials
            if (error.response && error.response.status === 400) {
                setError('Invalid email or password');
            } else {
                setError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <>
            <div className="back-to-home rounded d-none d-sm-block">
                <Link to="/" className="btn btn-icon btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-home icons">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                </Link>
            </div>

            <section className="bg-home d-flex bg-light align-items-center" style={{ background: 'url("../assets/images/bg/bg-lines-one.png") center' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-8">
                            <img src="../assets/images/dark-logo.png" height={22} className="mx-auto d-block" alt="" />
                            <div className="card login-page shadow mt-4 rounded border-0">
                                <div className="card-body">
                                    <h4 className="text-center">Sign In</h4>

                                    {/* Display error message if there's an error */}
                                    {error && (
                                        <div className="alert alert-danger">
                                            {error}
                                        </div>
                                    )}

                                    <form className="login-form mt-4" onSubmit={handleLogin}>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Password <span className="text-danger">*</span></label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="d-flex justify-content-between">
                                                    <div className="mb-3">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input align-middle"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="remember-check"
                                                            />
                                                            <label className="form-check-label" htmlFor="remember-check">Remember me</label>
                                                        </div>
                                                    </div>
                                                    <Link to="forgot-password.html" className="text-dark h6 mb-0">Forgot password ?</Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mb-0">
                                                <div className="d-grid">
                                                    <button className="btn btn-primary" type="submit">Sign in</button>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mt-3 text-center">
                                                <h6 className="text-muted">Or</h6>
                                            </div>
                                            <div className="col-6 mt-3">
                                                <div className="d-grid">
                                                    <Link to="#" className="btn btn-soft-primary">
                                                        <i className="uil uil-facebook" /> Facebook
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-6 mt-3">
                                                <div className="d-grid">
                                                    <Link to="#" className="btn btn-soft-primary">
                                                        <i className="uil uil-google" /> Google
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-12 text-center">
                                                <p className="mb-0 mt-3">
                                                    <small className="text-dark me-2">Don't have an account ?</small>
                                                    <Link to="/registration" className="text-dark fw-bold">Sign Up</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
