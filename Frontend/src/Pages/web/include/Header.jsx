import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation(); // Get the current location/path

    // State to track login status and role
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user_id'));
    const [userRole, setUserRole] = useState(localStorage.getItem('role'));

    useEffect(() => {
        // Update state if localStorage changes
        setIsLoggedIn(!!localStorage.getItem('user_id'));
        setUserRole(localStorage.getItem('role'));

        // Listen for the custom logout event
        const handleLogoutEvent = () => {
            setIsLoggedIn(false);
            setUserRole(null);
        };

        window.addEventListener('userLogout', handleLogoutEvent);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('userLogout', handleLogoutEvent);
        };
    }, []);

    // Conditionally add classes based on the path
    const headerClass = location.pathname === '/doctor' ? 'defaultscroll sticky' : 'navigation sticky';

    return (
        <header id="topnav" className={headerClass}>
            <div className="container">
                <div>
                    <Link className="logo" to="/">
                        <img src="../assets/images/dark-logo.jpeg" height={22} alt="Logo" />
                    </Link>
                </div>

                <div id="navigation">
                    <ul className="navigation-menu nav-left nav-light">
                        <li>
                            <Link to="/" className="sub-menu-item">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/doctor" className="sub-menu-item">
                                Doctors
                            </Link>
                        </li>

                       
                        <li>
                            <Link to="/about-us" className="sub-menu-item">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact-us" className="sub-menu-item">
                                Contact Us
                            </Link>
                        </li>
                        {!isLoggedIn ? (
                            <li>
                                <Link to="/login" className="sub-menu-item">
                                    Login
                                </Link>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        to={`/${userRole}/dashboard`}
                                        className="sub-menu-item"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        className="sub-menu-item"
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: 'inherit',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => window.dispatchEvent(new Event('userLogout'))}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
