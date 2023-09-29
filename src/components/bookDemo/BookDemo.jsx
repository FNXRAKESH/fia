import React from 'react';
import './BookDemo.css';

const BookDemo = () => {
  return (
    <div id="book-a-demo" className="p-3">
      <form action="https://formspree.io/f/mdovabnq" method="POST">
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
          <label htmlFor="products" className="form-label">
            Select a product that you are interested in
          </label>
          <select
            id="products"
            name="products"
            className="form-select"
            aria-label="Select a product that you are interested in"
          >
            <option value="All Products">All Products</option>
            <option value="FIA Onboarding">FIA Onboarding</option>
            <option value="FIA Intake">FIA Intake</option>
            <option value="FIA Pricing">FIA Pricing</option>
            <option value="FIA Underwriting">FIA Underwriting</option>
            <option value="FIA Funding">FIA Funding</option>
            <option value="FIA Servicing">FIA Servicing</option>
          </select>
        </div>
        {/* <div className="mb-3">
          <label htmlFor="services" className="form-label">
            Select a service that you are interested in
          </label>
          <select
            id="services"
            name="services"
            className="form-select"
            aria-label="Select a product that you are interested in"
          >
            <option value="All Services">All Services</option>
            <option value="Business Consulting">Business Consulting</option>
            <option value="Solution Implementation">
              Solution Implementation
            </option>
            <option value="Maintenance Support">Maintenance Support</option>
            <option value="NA">N/A</option>
          </select>
        </div> */}

        <button type="submit" className="btn btn-success mb-3 w-100">
          Request for a demo
        </button>
      </form>
    </div>
  );
};

export default BookDemo;
