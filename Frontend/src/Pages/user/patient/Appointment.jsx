import React, { useState, useEffect } from "react";
import { fetchAppointments } from "../../../Utils/Data"; // Import the fetchAppointments function

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loadAppointments = async () => {
      try {
        const userId = localStorage.getItem("user_id"); // Get the user_id from local storage
        const data = await fetchAppointments(); // Fetch all appointments
        console.log(data)
        console.log(userId)
        const userAppointments = data.filter(
          (appointment) => appointment.patient === userId
        ); // Filter appointments belonging to the current user
        setAppointments(data); // Set the filtered appointments to state
      } catch (error) {
        console.error("Error loading appointments:", error);
      }
    };

    loadAppointments();
  }, []);

  return (
    <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
      <div className="row">
        <div className="col-xl-9 col-lg-6 col-md-4">
          <h5 className="mb-0">Appointment</h5>
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
                    Doctor
                  </th>
                  <th className="border-bottom p-3">Date & Time</th>
                  <th className="border-bottom p-3">Status</th>
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
                            className="avatar avatar-md-sm rounded-circle border shadow"
                            alt=""
                          />
                          <span className="ms-2">
                            Dr. {appointment.doctor.first_name}{" "}
                            {appointment.doctor.last_name}
                          </span>
                        </div>
                      </a>
                    </td>
                    <td className="p-3">
                      {new Date(appointment.appointment_date).toLocaleString()}
                    </td>
                    <td className="p-3">
                      <span
                        className={`badge ${
                          appointment.status === "approved"
                            ? "bg-success"
                            : appointment.status === "declined"
                            ? "bg-danger"
                            : "bg-warning"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </td>
                   
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
