import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../Utils/Data';

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadDoctors = async () => {
            try {
                const data = await fetchUsers(); 
                const filteredDoctors = data.filter(user => user.role === 'doctor'); // Filter doctors based on role
                setDoctors(filteredDoctors);
            } catch (err) {
                setError('Failed to load doctors');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadDoctors();
    }, []);


    return (
        <>
            <section
                className="bg-half-170 d-table w-100"
                style={{ background: 'url("../assets/images/doctors/profile-bg.jpg") center center' }}
            >
                <div className="bg-overlay bg-overlay-dark" />
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h3 className="sub-title mb-4 text-white title-dark">Doctors</h3>
                                <p className="para-desc mx-auto text-white-50">
                                    Great doctor if you need your family member to get effective
                                    immediate assistance, emergency treatment or a simple consultation.
                                </p>
                                <nav aria-label="breadcrumb" className="d-inline-block mt-3">
                                    <ul className="breadcrumb bg-light rounded mb-0 py-1 px-2">
                                        <li className="breadcrumb-item">
                                            <a href="/">Doctris</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Doctors
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row">
                        {doctors.map((doctor) => (
                            <div key={doctor.id} className="col-xl-3 col-lg-3 col-md-6">
                                <div className="card team border-0 rounded shadow overflow-hidden">
                                    <div className="team-img position-relative">
                                        <img
                                            src={"../assets/images/default.jpg"} // Fallback to default image
                                            className="img-fluid"
                                            alt={doctor.first_name}
                                        />
                                    </div>
                                    <div className="card-body content text-center">
                                        <a href="#" className="title text-dark h5 d-block mb-0">
                                            {doctor.first_name} {doctor.last_name}
                                        </a>
                                        <small className="text-muted speciality">{doctor.speciality}</small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Doctor;
