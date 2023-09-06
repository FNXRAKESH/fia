import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import Faq from '../../components/faq/Faq';
import RequestCall from '../../components/requestCall/RequestCall';
import './index.css'
import bg from '/assets/service/bg2.png'
import s1 from '/assets/service/s1.png';
import s2 from '/assets/service/s2.png';
import s3 from '/assets/service/s3.png';
import s4 from '/assets/service/s4.png';
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
const SolutionImplementation = () => {
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
      <div id="solutionImplementation">
        <div className="bg pt-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-7">
                <h6>Transform Your Business</h6>
                <h1>Maximum Impact Solutions with Seamless Implementation</h1>
              </div>
              <div className="col-5">
                <img src={bg} alt="bc" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5 mt-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className="pb-3 title">
                Our Solutions are Designed to Deliver Maximum Impact, and Our
                Implementation is Seamless and Hassle-Free.
              </h1>
              <HashLink
                to="/SolutionImplementation#learnMore"
                className="btn text-success p-0 mb-5"
              >
                Learn More
                <span className="ms-2">
                  <FontAwesomeIcon icon={faArrowDown} color="#2B9348" />
                </span>
              </HashLink>
            </div>
            <div className="col-md-6">
              <p>
                Implementing the right lending solution for a business can be a
                complex and time-consuming process. Being a specialist in
                lending domain, we understand the importance of properly
                implementing the right solution for our clients.
              </p>
              <p>
                We work closely with our clients throughout the entire process,
                from identifying and applying for the right solution, to
                implementing and monitoring it, to ensure that it is working
                effectively.
              </p>
            </div>
          </div>
          <hr className="mt-5" />
          <div id="learnMore" className="row mt-5 align-items-center ">
            <div className="col-md-5 d-none d-md-flex justify-content-center">
              <img src={s1} alt="bc" className="img-fluid" />
            </div>
            <div className="col-md-2 d-none d-md-block"></div>
            <div className="col-md-5 d-flex justify-content-center flex-column">
              <h2>
                <span style={{ color: "#2B9348" }}>
                  We Understand the Needs
                </span>{" "}
                of the Small Business Community
              </h2>
              <div className="col-md-5 d-flex d-md-none justify-content-center">
                <img src={s1} alt="bc" className="img-fluid" />
              </div>
              <p>
                We understand the unique needs and challenges of small
                businesses. That's why we conduct market research, speak with
                small business owners, and gather feedback from industry experts
                to design a lending solution that meets their needs.
              </p>
            </div>
          </div>
          <div className="row mt-5 align-items-center">
            <div className="col-md-5 text-end d-flex justify-content-center flex-column">
              <h2>
                We Develop a{" "}
                <span style={{ color: "#2B9348" }}>
                  Flexible Lending Product
                </span>
              </h2>
              <div className="col-md-5 d-flex d-md-none justify-content-center">
                <img src={s2} alt="bc" className="img-fluid" />
              </div>
              <p>
                We know that every lender has diverse needs, so we create a
                lending product that can be tailored fit to different types of
                businesses and different stages of growth. This includes
                offering a range of loan amounts, terms & interest rates to suit
                their specific needs.
              </p>
            </div>
            <div className="col-md-2 d-none d-md-block"></div>
            <div className="col-md-5 d-none d-md-flex justify-content-center">
              <img src={s2} alt="bc" className="img-fluid" />
            </div>
          </div>
          <div className="row mt-5 align-items-center ">
            <div className="col-md-5 d-none d-md-flex justify-content-center">
              <img src={s3} alt="bc" className="img-fluid" />
            </div>
            <div className="col-md-2 d-none d-md-block"></div>
            <div className="col-md-5 d-flex justify-content-center flex-column">
              <h2>
                We Establish{" "}
                <span style={{ color: "#2B9348" }}>Clear and Transparent</span>{" "}
                Underwriting Criteria
              </h2>
              <div className="col-md-5 d-flex d-md-none justify-content-center">
                <img src={s3} alt="bc" className="img-fluid" />
              </div>
              <p>
                We also understand that small businesses often have limited
                credit history and collateral. Therefore, we establish clear and
                transparent underwriting criteria that take into account a
                variety of factors such as cash flow, business experience, and
                personal credit, to ensure that the lending process is fair and
                objective.
              </p>
            </div>
          </div>
          <div className="row mt-5 align-items-center">
            <div className="col-md-5 text-end d-flex justify-content-center flex-column">
              <h2>
                <span style={{ color: "#2B9348" }}>We Implement</span> a Robust
                Loan Management System
              </h2>
              <div className="col-md-5 d-flex d-md-none justify-content-center">
                <img src={s4} alt="bc" className="img-fluid" />
              </div>
              <p>
                To ensure the loans are well managed, we implement a robust loan
                management system that tracks loans, manages risk, and ensures
                compliance with regulations.
              </p>
              <p>
                This includes tools for loan origination, credit scoring, and
                loan servicing.
              </p>
            </div>
            <div className="col-md-2 d-none d-md-block"></div>
            <div className="col-md-5 d-none d-md-flex justify-content-center">
              <img src={s4} alt="bc" className="img-fluid" />
            </div>
          </div>
        </div>
        <RequestCall title="Experience Powerful and Reliable Solutions with Effortless Implementation" />
        <Faq />
      </div>
    );
}
 
export default SolutionImplementation;

