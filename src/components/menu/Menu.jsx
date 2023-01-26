import React, { useEffect } from 'react';
import './Menu.css';
import logo from '/assets/logo.png';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Menu = () => {
  useEffect(() => {
    window.onscroll = function () {
      myFunction();
    };

    var header = document.getElementById('headerNav');
    var sticky = header.offsetTop;
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    }
  }, []);
  return (
    <div id="headerNav">
      <div className="container">
        <nav className="navbar  navbar-expand-lg pt-4">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="FIA" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Solutions
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      MCA
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Invoice Factoring
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link
                      to="BusinessConsulting"
                      
                    >
                      Business Consulting
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="SolutionImplementation">
                      Solution Implementation
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="MaintenanceSupport" activeclassname="selected">
                      Maintenance Support
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Company
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Team
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  FAQ
                </a>
              </li> */}
            </ul>
            <button type="button" className=" me-4 btn text-success">
              Book a Demo
            </button>
            <div className="btnGroup">
              <button type="button" className="btn btn-success btnFill">
                Contact Us
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
