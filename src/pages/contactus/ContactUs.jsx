import React, { useEffect } from 'react';
import BookDemo from '../../components/bookDemo/BookDemo';
import './ContactUs.css';

import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";

const ContactUs = () => {
  const location = useLocation();
  useEffect(() => {
    console.log("====================================");
    console.log(location.pathname);
    console.log("====================================");
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
    });
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="contactUs">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h6 className="title">Contact Us</h6>
            <p className="pt-5">
              By booking a demo, you'll have the opportunity to see our product
              or service in action and ask any questions.
            </p>
            <hr className="my-5" />
            <div className="row alternate">
              <div className="col-6">
                <h6>Write to us</h6>
                <p>
                  You can write to us at our email address:
                  <br />
                  <a href="mailto:contact@fiatechs.com">contact@fiatechs.com</a>
                </p>
              </div>
              <div className="col-6">
                <h6>Give us a call</h6>
                <p>
                  You can give us a call on our official number:
                  <br />
                  <a href="tel:+15106066550">+1(510)6066550</a>
                </p>
              </div>
            </div>
            <div className="row alternate">
              <div className="col">
                <h6>Head Office</h6>
                <p>836 Cape Flattery Place, San Jose, CA 95133</p>
              </div>
              
            </div>
          </div>
          <div className="col-lg-6 p-5" id="contactForm">
            <form action="https://formspree.io/f/mjvdgper" method="POST">
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      aria-describedby="firstName"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      aria-describedby="lastName"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your email address
                </label>
                <input
                  type="email"
                  required
                  className="form-control"
                  id="emailAddress"
                  name="emailAddress"
                  aria-describedby="emailAddress"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="services" className="form-label">
                  Write your message ...
                </label>
                <textarea name="Comment" className="form-control" />
              </div>

              <button type="submit" className="btn btn-success mb-3 w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
