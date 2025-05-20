import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation();  // Get the current location/path

  // Conditionally add classes based on the path
  const headerClass = location.pathname === '/doctor' ? 'defaultscroll sticky' : 'navigation sticky';

  return (
    <>
      <header id="topnav" className={headerClass}>
        <div className="container">
          {/* Logo container*/}
          <div>
            <Link className="logo" href="index.html">
              <span className="logo-light-mode">
                <img
                  src="../assets/images/logo-dark.png"
                  className="l-dark"
                  height={22}
                  alt=""
                />
                <img
                  src="../assets/images/logo-light.png"
                  className="l-light"
                  height={22}
                  alt=""
                />
              </span>
              <img
                src="../assets/images/logo-light.png"
                height={22}
                className="logo-dark-mode"
                alt=""
              />
            </Link>
          </div>
          {/* End Logo container*/}
          {/* Start Mobile Toggle */}
          <div className="menu-extras">
            <div className="menu-item">
              {/* Mobile menu toggle*/}
              <Link className="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                <div className="lines">
                  <span />
                  <span />
                  <span />
                </div>
              </Link>
              {/* End mobile menu toggle*/}
            </div>
          </div>
          {/* End Mobile Toggle */}
          {/* Start Dropdown */}

          {/* Start Dropdown */}
          <div id="navigation">
            {/* Navigation Menu*/}
            <ul className="navigation-menu nav-left nav-light">
              <li>
                <Link to="/"
                  className="sub-menu-item"

                >
                  Home
                </Link>
              </li>
              <li>
                < Link to="/doctor"
                  className="sub-menu-item"

                >
                  Doctors
                </Link>
              </li>
              <li>
                <Link to="/pharmacy"
                  className="sub-menu-item"

                >
                  Pharmacy
                </Link>
              </li>
              <li>
                <Link to="/about-us"
                  className="sub-menu-item"

                >
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us"
                  className="sub-menu-item"

                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/login"
                  className="sub-menu-item"

                >
                 Login
                </Link>
              </li>
            </ul>
            {/*end navigation menu*/}
          </div>
          {/*end navigation*/}
        </div>
        {/*end container*/}
      </header>

    </>
  )
}

export default Header