import React, { useEffect } from 'react';
import BookDemo from '../../components/bookDemo/BookDemo';
import './ContactUs.css';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="contactUs">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h6 className="title">Contact Us</h6>
            <h1>Financing Solution Provider Support</h1>
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
                  <a href="tel:+17817525204">+1 (781) 752-5204</a>
                </p>
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
