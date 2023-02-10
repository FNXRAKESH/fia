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
            <h1>Book a demo with our sales team</h1>
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
                  <a href="tel:+17817525204">+17817525204</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <BookDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
