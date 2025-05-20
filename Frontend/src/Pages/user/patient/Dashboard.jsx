import React, { useEffect, useState } from 'react';
import { DailyVideo } from '@daily-co/daily-react';

const Dashboard = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userRole, setUserRole] = useState('');

  // Fetch user data from localStorage
  useEffect(() => {
    const email = localStorage.getItem('user_email'); // Ensure you store this in Login component
    const role = localStorage.getItem('role');
    setUserEmail(email || 'Not Available');
    setUserRole(role || 'Not Available');
  }, []);

  return (
    <>
      <div className="col-9">
        <div className="row">
          <div className="col-md-8 col-lg-8">
            <div className="rounded shadow overflow-hidden sticky-bar">
              <div className="card border-0">
                <img
                  src="../assets/images/bg/bg-profile.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom mt-5">
                <h4 className="mb-0">Welcome, {userRole}</h4>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <i className="uil uil-envelope align-text-bottom text-primary h5 mb-0 me-2" />
                  <h6 className="mb-0">Email:</h6>
                  <p className="text-muted mb-0 ms-2">{userEmail}</p>
                </div>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <i className="uil uil-user-circle align-text-bottom text-primary h5 mb-0 me-2" />
                  <h6 className="mb-0">Role:</h6>
                  <p className="text-muted mb-0 ms-2">{userRole}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className="rounded shadow overflow-hidden sticky-bar">
            <div className="daily-iframe-wrapper">
                    <iframe
                        src="https://docucare.daily.co/dJ5E3Eyw3agsp4FjI6Ka"  // Replace 'your-room-name' with your room identifier
                        width="100%"
                        height="300px"
                        frameBorder="0"
                        allow="camera; microphone; fullscreen; display-capture; autoplay"
                        allowFullScreen
                        title="Daily Call"
                    ></iframe>
                </div>

                {/* Daily Video Component to display participant's video */}
                <div className="daily-video-wrapper">
                    <DailyVideo
                        automirror
                        sessionId="f24409cb-627e-49ee-82eb-fb7c9851f828"  // Pass the sessionId for the participant
                    />
                </div>
             
            </div>
          </div>

          <div className="col-md-12 col-lg-12">
          <div className="card map border-0">
                                <div className="card-body p-0">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                    />
                                </div>
                            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
