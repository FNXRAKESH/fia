import React, { useEffect } from 'react';
import './Menu.css';
import logo from '/assets/logo1.png';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
            <FontAwesomeIcon icon={faBars} color="#2B9348" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <span data-bs-target="#navbarNav" data-bs-toggle="collapse">
                    Home
                  </span>
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
                  <Link to="mca">
                    <li className="dropdown-item">
                      <span
                        data-bs-target="#navbarNav"
                        data-bs-toggle="collapse"
                      >
                        Small Business Lending
                      </span>
                    </li>
                  </Link>
                  <Link to="invFactoring">
                    <li className="dropdown-item">
                      <span
                        data-bs-target="#navbarNav"
                        data-bs-toggle="collapse"
                      >
                        Invoice Financing
                      </span>
                    </li>
                  </Link>
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
                  <Link to="BusinessConsulting">
                    <li className="dropdown-item">
                      <span
                        data-bs-target="#navbarNav"
                        data-bs-toggle="collapse"
                      >
                        Business Consulting
                      </span>
                    </li>
                  </Link>
                  <Link to="SolutionImplementation">
                    <li className="dropdown-item">
                      <span
                        data-bs-target="#navbarNav"
                        data-bs-toggle="collapse"
                      >
                        Solution Implementation
                      </span>
                    </li>
                  </Link>
                  <Link to="MaintenanceSupport">
                    <li className="dropdown-item">
                      <span
                        data-bs-target="#navbarNav"
                        data-bs-toggle="collapse"
                      >
                        Maintenance Support
                      </span>
                    </li>
                  </Link>
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
                  Company
                </a>
                <ul className="dropdown-menu">
                  <Link to="aboutus">
                    <li className="dropdown-item">
                      <span
                        data-bs-target="#navbarNav"
                        data-bs-toggle="collapse"
                      >
                        About Us
                      </span>
                    </li>
                  </Link>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="blogs">
                  <span data-bs-target="#navbarNav" data-bs-toggle="collapse">
                    Blogs
                  </span>
                </Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/">
                  FAQ
                </a>
              </li> */}
            </ul>
            <button
              type="button"
              className="me-4 p-2 btn text-success"
              data-bs-toggle="modal"
              data-bs-target="#demoModal"
            >
              <span data-bs-target="#navbarNav" data-bs-toggle="collapse">
                Book a Demo
              </span>
            </button>
            <div className="btnGroup">
              <Link to="contact" className="btn btn-success btnFill">
                <span data-bs-target="#navbarNav" data-bs-toggle="collapse">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
