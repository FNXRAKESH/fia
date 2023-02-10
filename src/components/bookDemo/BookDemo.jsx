import React from 'react';
import './BookDemo.css';

const BookDemo = () => {
  return (
    <div id="book-a-demo" className="p-5">
      <form action="https://formspree.io/f/mdovabnq" method="POST">
        <div className="row">
          <div className="col-6">
            <div class="mb-3">
              <label for="firstName" class="form-label">
                First Name
              </label>
              <input
                required
                type="text"
                class="form-control"
                id="firstName"
                name="firstName"
                aria-describedby="firstName"
              />
            </div>
          </div>
          <div className="col-6">
            <div class="mb-3">
              <label for="lastName" class="form-label">
                Last Name
              </label>
              <input
                required
                type="text"
                class="form-control"
                id="lastName"
                name="lastName"
                aria-describedby="lastName"
              />
            </div>
            </div>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Your email address
          </label>
          <input
            type="email"
            required
            class="form-control"
            id="emailAddress"
            name="emailAddress"
            aria-describedby="emailAddress"
          />
        </div>
        <div class="mb-3">
          <label for="products" class="form-label">
            Select a product that you are interested in
          </label>
          <select
            id="products"
            name="products"
            class="form-select"
            aria-label="Select a product that you are interested in"
          >
            <option value="All Products">All Products</option>
            <option value="Merchant Cash Advance">Merchant Cash Advance</option>
            <option value="Invoice Financing">Invoice Financing</option>
            <option value="NA">N/A</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="services" class="form-label">
            Select a service that you are interested in
          </label>
          <select
            id="services"
            name="services"
            class="form-select"
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
        </div>

        <button type="submit" class="btn btn-success mb-3 w-100">
          Request for a demo
        </button>
      </form>
    </div>
  );
};

export default BookDemo;
