import React from 'react';
import tab1 from '/assets/landing/tab1.png';
import tab2 from '/assets/landing/tab2.png';
import tab3 from '/assets/landing/tab3.png';
import './TabContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const TabContent = () => {
  return (
    <div id="tabContent" className="container py-5">
      <ul
        className="nav nav-pills justify-content-center"
        id="myTab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="mca-tab"
            data-bs-toggle="tab"
            data-bs-target="#mca-tab-pane"
            type="button"
            role="tab"
            aria-controls="mca-tab-pane"
            aria-selected="true"
          >
            Merchant Cash Advance
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="if-tab"
            data-bs-toggle="tab"
            data-bs-target="#if-tab-pane"
            type="button"
            role="tab"
            aria-controls="if-tab-pane"
            aria-selected="false"
          >
            Invoice Financing
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="loc-tab"
            data-bs-toggle="tab"
            data-bs-target="#loc-tab-pane"
            type="button"
            role="tab"
            aria-controls="loc-tab-pane"
            aria-selected="false"
          >
            Line of Credit
          </button>
        </li>
      </ul>
      <div className="tab-content" id="tabInnerContent">
        <div
          className="tab-pane fade show active"
          id="mca-tab-pane"
          role="tabpanel"
          aria-labelledby="mca-tab"
          tabIndex="0"
        >
          <div className="d-flex align-items-center justify-content-center flex-column flex-lg-row">
            <div className="imgContainer">
              <img src={tab1} alt="" className="img-fluid" />
            </div>
            <div className="content">
              <h2 className="fw-bold">
                Revolutionizing Lending Operations with Small Business Lending
                SaaS Solutions
              </h2>
              <p className="py-2">
                Get the Financial Information Automation(FIA) technologies Small
                Business Lending solution which is particularly designed for
                small to medium-sized business lending. Each of our SaaS
                solutions can be perfectly customised to fit your needs.
              </p>
              <Link to="/mca" className="btn text-success p-0 mb-5">
                Learn More about Small Business Lending
                <span className="ms-2">
                  <FontAwesomeIcon icon={faArrowRight} color="#2B9348" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="if-tab-pane"
          role="tabpanel"
          aria-labelledby="if-tab"
          tabIndex="0"
        >
          <div className="d-flex align-items-center justify-content-center flex-column flex-lg-row">
            <div className="imgContainer">
              <img src={tab2} alt="" className="img-fluid" />
            </div>
            <div className="content">
              <h2 className="fw-bold">
                Automate each step of invoice financing process
              </h2>
              <p className="py-2">
                We have automated each step in the invoice financing process
                right from the company registration till invoice submission,
                validation and funding
              </p>
              <Link to="/invFactoring" className="btn text-success p-0 mb-5">
                Learn More about Invoice Financing
                <span className="ms-2">
                  <FontAwesomeIcon icon={faArrowRight} color="#2B9348" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="loc-tab-pane"
          role="tabpanel"
          aria-labelledby="loc-tab"
          tabIndex="0"
        >
          <div className="d-flex align-items-center justify-content-center flex-column flex-lg-row">
            <div className="imgContainer">
              <img src={tab3} alt="" className="img-fluid" />
            </div>
            <div className="content">
              <h2 className="fw-bold">The Line of Credit</h2>
              <p className="py-2">
                In Line of credit the borrower can apply for a particular loan
                amount from a bank but he or she needn’t take the entire amount
                in one shot. The borrower can take a small amount out of the
                entire fund for present need.  The interest will be charged only
                on the amount that the borrower has withdrawn and not on the
                entire amount.
              </p>
              {/* <Link to="/invFactoring" className="btn text-success p-0 mb-5">
                  Learn More about Line of Credit
                  <span className="ms-2">
                    <FontAwesomeIcon icon={faArrowRight} color="#2B9348" />
                  </span>
                </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
