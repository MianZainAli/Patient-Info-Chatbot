import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../../Utils/Axios";

const Registration = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        role: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
   // Handle form submission
const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
        const response = await api.post("/register/", formData);
        if (response.status === 201) {
            setSuccess("Registration successful! Redirecting to login...");
            setTimeout(() => navigate("/login"), 2000);
        }
    } catch (err) {
        const errors = err.response?.data;
        if (errors?.email) {
            setError(`Email: ${errors.email[0]}`);
        } else {
            setError(err.response?.data?.detail || "Something went wrong. Please try again.");
        }
    }
};


    return (
        <>
            <div className="back-to-home rounded d-none d-sm-block">
                <Link to="/" className="btn btn-icon btn-primary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-home icons"
                    >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                </Link>
            </div>

            <section
                className="bg-half-150 d-table w-100 bg-light"
                style={{ background: 'url("../assets/images/bg/bg-lines-one.png") center' }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-8">
                            <img
                                src="../assets/images/dark-logo.png"
                                height={22}
                                className="mx-auto d-block"
                                alt=""
                            />
                            <div className="card login-page shadow mt-4 rounded border-0">
                                <div className="card-body">
                                    <h4 className="text-center">Sign Up</h4>
                                    <form className="login-form mt-4" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        First name <span className="text-danger">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="First Name"
                                                        name="first_name"
                                                        value={formData.first_name}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Last name <span className="text-danger">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Last Name"
                                                        name="last_name"
                                                        value={formData.last_name}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <select
                                                        className="form-control"
                                                        name="role"
                                                        value={formData.role}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select Role</option>
                                                        <option value="doctor">Doctor</option>
                                                        <option value="patient">Patient</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Your Email <span className="text-danger">*</span>
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Password <span className="text-danger">*</span>
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Password"
                                                        name="password"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="d-grid">
                                                    <button className="btn btn-primary">Register</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                                    {success && <div className="alert alert-success mt-3">{success}</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Registration;
