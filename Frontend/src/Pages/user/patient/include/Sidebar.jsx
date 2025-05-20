import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const [userName, setUserName] = useState('User Name'); // Default name
  const [userEmail, setUserEmail] = useState('user@example.com'); // Default email
  const [userRole, setUserRole] = useState('Role'); // Default role

  useEffect(() => {
    // Fetch user data from localStorage
    const name = localStorage.getItem('name') || 'User Name'; // Update if name is stored
    const email = localStorage.getItem('user_email') || 'user@example.com';
    const role = localStorage.getItem('role') || 'Role';
    setUserName(name);
    setUserEmail(email);
    setUserRole(role);
  }, []);

    // Logout function
    const handleLogout = () => {
      // Remove user-related data
      localStorage.removeItem('user_id');
      localStorage.removeItem('role');
      localStorage.removeItem('medical_chat_user_id')
  
      // Dispatch a custom event
      const logoutEvent = new Event('userLogout');
      window.dispatchEvent(logoutEvent);
  
      // Redirect to the login page
      navigate('/login');
  };
    return (
        <>
        
            <div className="col-xl-3 col-lg-4 col-md-5 col-12">
                <div className="rounded shadow overflow-hidden sticky-bar">
                    <div className="card border-0">
                        <img
                            src="../assets/images/doctors/profile-bg.jpg"
                            className="img-fluid"
                            alt=""
                        />
                    </div>
                    <div className="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom">
                    <img
                  src="../assets/images/default.jpg"
                  className="rounded-circle shadow-md avatar avatar-md-md"
                  alt=""
                />
                <h5 className="mt-3 mb-1">{userName}</h5>
              </div>
              <div className="list-unstyled p-4">
               
                    </div>
                    <ul className="list-unstyled sidebar-nav mb-0">
                        <li className="navbar-item">
                           <Link to="/patient/dashboard" className="navbar-link">
                                <i className="ri-airplay-line align-middle navbar-icon" />{" "}
                                Dashboard
                            </Link>
                        </li>
                        <li className="navbar-item">
                           <Link to="/patient/appointment" className="navbar-link">
                                <i className="ri-calendar-check-line align-middle navbar-icon" />{" "}
                                Appointment
                            </Link>
                        </li>
                    
                        <li className="navbar-item">
                           <Link to="/patient/bookappointment" className="navbar-link">
                                <i className="ri-chat-voice-line align-middle navbar-icon" />{" "}
                                Book Appointment
                            </Link>
                        </li>
                        <li className="navbar-item">
                           <Link to="/patient/chat" className="navbar-link">
                                <i className="ri-chat-voice-line align-middle navbar-icon" />{" "}
                                Chat
                            </Link>
                        </li>
                        <li className="navbar-item">
                {/* Call handleLogout on click */}
                <button onClick={handleLogout} className="navbar-link" style={{ border: 'none', background: 'none' }}>
                    <i className="ri-login-circle-line align-middle navbar-icon" />
                    Logout
                </button>
            </li>
                      
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar