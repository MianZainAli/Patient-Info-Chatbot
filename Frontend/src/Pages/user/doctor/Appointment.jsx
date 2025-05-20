import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchAppointments } from '../../../Utils/Data';
import api from '../../../Utils/Axios';

const Appointment = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
      const loadAppointments = async () => {
        try {
          const userId = localStorage.getItem("user_id"); // Get the user_id from local storage
          const data = await fetchAppointments(); // Fetch all appointments
          const userAppointments = data.filter(
            (appointment) => appointment.doctor === userId
          ); // Filter appointments belonging to the current user
          setAppointments(data); // Set the filtered appointments to state
        } catch (error) {
          console.error("Error loading appointments:", error);
        }
      };
      loadAppointments();
    }, []);

    const handleStatusUpdate = (id, status) => {
        api.patch(`/appointments/${id}/update/`, { status })
            .then(response => {
                const updatedAppointments = appointments.map(app => {
                    if (app.id === id) {
                        return { ...app, status: response.data.status };
                    }
                    return app;
                });
                setAppointments(updatedAppointments);
            })
            .catch(error => {
                console.error('Error updating status:', error);
            });
    };

    return (
        <>
            <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="row">
                    <div className="col-xl-9 col-lg-6 col-md-4">
                        <h5 className="mb-0">Appointment</h5>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-8 mt-4 mt-md-0">
                        <div className="justify-content-md-end">
                            <form>
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-sm-12 col-md-5">
                                        <div className="mb-0 position-relative">
                                            <select className="form-select form-control">
                                                <option value="EY">Today</option>
                                                <option value="GY">Tomorrow</option>
                                                <option value="PS">Yesterday</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-7 mt-4 mt-sm-0">
                                        <div className="d-grid">
                                            <a
                                                href="#"
                                                className="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#appointmentform"
                                            >
                                                Appointment
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mt-4">
                        <div className="table-responsive bg-white shadow rounded">
                            <table className="table mb-0 table-center">
                                <thead>
                                    <tr>
                                        <th className="border-bottom p-3" style={{ minWidth: 50 }}>
                                            #
                                        </th>
                                        <th className="border-bottom p-3" style={{ minWidth: 180 }}>
                                            Name
                                        </th>
                                        <th className="border-bottom p-3">Date</th>
                                        <th className="border-bottom p-3" style={{ minWidth: 150 }}>
                                            Doctor
                                        </th>
                                        <th className="border-bottom p-3" style={{ minWidth: 150 }} />
                                    </tr>
                                </thead>
                                <tbody>
                                    {appointments.map((appointment, index) => (
                                        <tr key={appointment.id}>
                                            <th className="p-3">{index + 1}</th>
                                            <td className="p-3">
                                                <a href="#" className="text-dark">
                                                    <div className="d-flex align-items-center">
                                                        <img
                                                            src="../assets/images/default.jpg"
                                                            className="avatar avatar-md-sm rounded-circle shadow"
                                                            alt=""
                                                        />
                                                        <span className="ms-2">{appointment.patient_details.name}</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td className="p-3">{new Date(appointment.appointment_date).toLocaleDateString()}</td>
                                            <td className="p-3">
                                                <a href="#" className="text-dark">
                                                    <div className="d-flex align-items-center">
                                                        <img
                                                            src="../assets/images/default.jpg"
                                                            className="avatar avatar-md-sm rounded-circle border shadow"
                                                            alt=""
                                                        />
                                                        <span className="ms-2">{appointment.doctor.first_name}</span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td className="text-end p-3">
                                                {appointment.status === 'pending' && (
                                                    <>
                                                        <a
                                                            href="#"
                                                            className="btn btn-icon btn-pills btn-soft-success"
                                                            onClick={() => handleStatusUpdate(appointment.id, 'approved')}
                                                        >Approved
                                                            <i className="uil uil-check-circle" />
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn btn-icon btn-pills btn-soft-danger"
                                                            onClick={() => handleStatusUpdate(appointment.id, 'declined')}
                                                        >Declined
                                                            <i className="uil uil-times-circle" />
                                                        </a>
                                                    </>
                                                )}
                                                {appointment.status === 'approved' && (
                                                    <span className="badge bg-success">Approved</span>
                                                )}
                                                {appointment.status === 'declined' && (
                                                    <span className="badge bg-danger">Declined</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-12 mt-4">
                        <div className="d-md-flex align-items-center text-center justify-content-between">
                            <span className="text-muted me-3">Showing 1 - 10 out of 50</span>
                            <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                                <li className="page-item">
                                    <a className="page-link" href="javascript:void(0)" aria-label="Previous">
                                        Prev
                                    </a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="javascript:void(0)">
                                        1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="javascript:void(0)">
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="javascript:void(0)">
                                        3
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="javascript:void(0)" aria-label="Next">
                                        Next
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Appointment;
