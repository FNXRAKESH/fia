import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import Faq from '../../components/faq/Faq';
import RequestCall from '../../components/requestCall/RequestCall';
import './index.css'
import bg from '/assets/service/bg3.png'
import s1 from '/assets/service/ms1.png';
import s2 from '/assets/service/ms2.png';
import s3 from '/assets/service/ms3.png';
import s4 from '/assets/service/ms4.png';
import s5 from '/assets/service/ms5.png';
import s6 from '/assets/service/ms6.png';
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
const MaintenanceSupport = () => {
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
    <div id="maintenanceSupport">
      <div className="bg pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <h6>Keeping Your Product at Its Best</h6>
              <h1>Stay Ahead with our Upgrades &amp; Maintenance</h1>
            </div>
            <div className="col-6">
              <img src={bg} alt="bc" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5 mt-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="pb-3 title">
              We Offer Continuous Maintenance, Enhancements and Regular Updates
              to Keep Your System Ahead of the Game
            </h1>
            <HashLink
              to="/MaintenanceSupport#learnMore"
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
              We believe in building lasting relationships with our clients.
              That's why after implementing a lending solution, we don't just
              leave you to handle it alone. Our team is dedicated to providing
              ongoing maintenance and support to ensure your system runs
              smoothly and effectively.
            </p>
            <p>
              We understand the significance of continued support and are always
              available to assist with any questions or concerns you may have.
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
              Stay Connected with Our{" "}
              <span style={{ color: "#2B9348" }}>Regular Check-Ins</span>
            </h2>
            <div className="col-md-5 d-flex d-md-none justify-content-center">
              <img src={s1} alt="bc" className="img-fluid" />
            </div>
            <p>
              Regularly check in with clients to ensure that the lending
              solution is working as intended and address any issues that may
              arise.
            </p>
          </div>
        </div>
        <div className="row mt-5 align-items-center">
          <div className="col-md-5 text-end d-flex justify-content-center flex-column">
            <h2>
              We’re Constantly Improving with Ongoing{" "}
              <span style={{ color: "#2B9348" }}>
                Effectiveness Evaluations
              </span>
            </h2>
            <div className="col-md-5 d-flex d-md-none justify-content-center">
              <img src={s2} alt="bc" className="img-fluid" />
            </div>
            <p>
              We evaluate the effectiveness of the solution over time, and make
              any necessary adjustments to ensure that it continues to meet
              clients' needs and goals.
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
              <span style={{ color: "#2B9348" }}>Maximize Your Benefits </span>
              with Our Efficient Training and Support
            </h2>
            <div className="col-md-5 d-flex d-md-none justify-content-center">
              <img src={s3} alt="bc" className="img-fluid" />
            </div>
            <p>
              We regularly provide training and support to ensure that clients
              are able to use the lending solution efficiently.
            </p>
          </div>
        </div>
        <div className="row mt-5 align-items-center">
          <div className="col-md-5 text-end d-flex justify-content-center flex-column">
            <h2>
              We ensure
              <span style={{ color: "#2B9348" }}> Compliance </span>
            </h2>
            <div className="col-md-5 d-flex d-md-none justify-content-center">
              <img src={s4} alt="bc" className="img-fluid" />
            </div>
            <p>
              We Keep up to date with the latest regulations and compliance
              requirements, and ensure that the lending solution is in line with
              the current laws and standards.
            </p>
          </div>
          <div className="col-md-2 d-none d-md-block"></div>
          <div className="col-md-5 d-none d-md-flex justify-content-center">
            <img src={s4} alt="bc" className="img-fluid" />
          </div>
        </div>
        <div className="row mt-5 align-items-center ">
          <div className="col-md-5 d-none d-md-flex justify-content-center">
            <img src={s5} alt="bc" className="img-fluid" />
          </div>
          <div className="col-md-2 d-none d-md-block"></div>
          <div className="col-md-5 d-flex justify-content-center flex-column">
            <h2>
              Reach Business Targets through{" "}
              <span style={{ color: "#2B9348" }}>
                Monitoring and Reporting Solutions
              </span>
            </h2>
            <div className="col-md-5 d-flex d-md-none justify-content-center">
              <img src={s5} alt="bc" className="img-fluid" />
            </div>
            <p>
              We help clients to set up, and monitor reporting and monitoring
              tools, and provide guidance on how to use the financing to achieve
              their business objectives.
            </p>
          </div>
        </div>
        <div className="row mt-5 align-items-center">
          <div className="col-md-5 text-end d-flex justify-content-center flex-column">
            <h2>
              <span style={{ color: "#2B9348" }}>Dedicated Support </span>for
              Resolving Issues with our Lending Solution
            </h2>
            <div className="col-md-5 d-flex d-md-none justify-content-center">
              <img src={s6} alt="bc" className="img-fluid" />
            </div>
            <p>
              Our dedicated support team helps clients to solve any operational,
              technical or financial problems that they may encounter while
              using the lending solution.
            </p>
          </div>
          <div className="col-md-2 d-none d-md-block"></div>
          <div className="col-md-5 d-none d-md-flex justify-content-center">
            <img src={s6} alt="bc" className="img-fluid" />
          </div>
        </div>
      </div>
      <RequestCall title="Lead the Way with Our Ongoing Maintenance and Upgrades" />
      <Faq />
    </div>
  );
};
 

export default MaintenanceSupport;
