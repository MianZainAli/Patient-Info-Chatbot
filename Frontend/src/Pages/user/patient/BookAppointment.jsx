import React, { useState, useEffect } from "react";
import { fetchUsers } from "../../../Utils/Data";
import api from "../../../Utils/Axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BookAppointment = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const [userId, setUserId] = useState('1'); // Default name


  useEffect(() => {
    // Fetch user data from localStorage
    const user_id = localStorage.getItem('user_id') || '1'; // Update if name is stored
   
    setUserId(user_id);
  }, []);
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    doctor: "",
    email: "",
    phone: "",
    comments: "",
    appointmentDate: "",
    patient_id:userId
  });

  useEffect(() => {
    const loadDoctors = async () => {
      try {
        const users = await fetchUsers();
        const doctorList = users.filter(user => user.role === "doctor");
        setDoctors(doctorList);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    loadDoctors();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/appointments/create/", {
        ...formData,
        appointment_date: formData.appointmentDate,
      });
      toast.success("Booking Request Send SuccessFully")
      navigate("/patient/dashboard")

    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment. Please try again.");
    }
  };

  return (
    <div className="col-9">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow rounded overflow-hidden">
              <ul
                className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link rounded-0 active"
                    id="clinic-booking"
                    data-bs-toggle="pill"
                    href="#pills-clinic"
                    role="tab"
                    aria-controls="pills-clinic"
                    aria-selected="true"
                  >
                    <div className="text-center pt-1 pb-1">
                      <h5 className="fw-medium mb-0">Clinic Appointment</h5>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="tab-content p-4" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-clinic"
                  role="tabpanel"
                  aria-labelledby="clinic-booking"
                >
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Patient Name <span className="text-danger">*</span>
                          </label>
                          <input
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Patient Name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Departments</label>
                          <select
                            name="department"
                            className="form-select form-control"
                            value={formData.department}
                            onChange={handleChange}
                          >
                            <option value="">Select Department</option>
                            <option value="EY">Eye Care</option>
                            <option value="GY">Gynecologist</option>
                            <option value="PS">Psychotherapist</option>
                            <option value="OR">Orthopedic</option>
                            <option value="DE">Dentist</option>
                            <option value="GA">Gastrologist</option>
                            <option value="UR">Urologist</option>
                            <option value="NE">Neurologist</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Doctor</label>
                          <select
                            name="doctor"
                            className="form-select form-control"
                            value={formData.doctor}
                            onChange={handleChange}
                          >
                            <option value="">Select Doctor</option>
                            {doctors.map((doc) => (
                              <option key={doc.id} value={doc.id}>
                                {doc.first_name} {doc.last_name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Your Email <span className="text-danger">*</span>
                          </label>
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Your Phone <span className="text-danger">*</span>
                          </label>
                          <input
                            name="phone"
                            type="tel"
                            className="form-control"
                            placeholder="Your phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Comments <span className="text-danger">*</span>
                          </label>
                          <textarea
                            name="comments"
                            rows={4}
                            className="form-control"
                            placeholder="Your message"
                            value={formData.comments}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Appointment Date <span className="text-danger">*</span>
                          </label>
                          <input
                            name="appointmentDate"
                            type="datetime-local"
                            className="form-control"
                            value={formData.appointmentDate}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="d-grid">
                          <button type="submit" className="btn btn-primary">
                            Book An Appointment
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
