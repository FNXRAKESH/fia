import React from 'react';
import './Offerings.css'
import mca from '/assets/landing/mca.png';
import analysis from '/assets/landing/analysis.png';
import integration from '/assets/landing/integration.png';
import reports from '/assets/landing/reports.png';
import service from '/assets/landing/service.png';
import support from '/assets/landing/support.png';
const Offerings = () => {
    return (
      <div id="offerings">
        <div className="container pb-5">
          <div className="offer ">
            <h6>Our Key Offerings</h6>
            <h1 className="pb-5">
              Innovative Solutions
              <br />
              for Small Business Lending
            </h1>
          </div>
          <div id="offers" className="row">
            <div className="col-md-4 d-flex align-items-strech">
              <div className="keys key1 px-3 py-5">
                <div className="imgContainer">
                  <img src={mca} alt="solutions" />
                </div>
                <h4>Origination</h4>
                <p className="py-3">
                  We help you attract potential borrowers by{" "}
                  <b>
                    providing an easy &amp; reliable experience of application
                    processing.
                  </b>
                </p>
                {/* <button className="btn ">Learn More</button> */}
              </div>
            </div>
            <div id="Analysis" className="col-md-4 d-flex align-items-strech">
              <div className="keys key2 px-3 py-5">
                <div className="imgContainer">
                  <img src={analysis} alt="solutions" />
                </div>
                <h4>Credit Analysis</h4>
                <p className="py-3">
                  We analyze a business's creditworthiness and risk level to{" "}
                  <b>
                    determine their eligibility for Small Business Lending loan.
                  </b>
                </p>
                {/* <button className="btn ">Learn More</button> */}
              </div>
            </div>
            <div
              id="Integrations"
              className="col-md-4 d-flex align-items-strech"
            >
              <div className="keys key3 px-3 py-5">
                <div className="imgContainer">
                  <img src={integration} alt="solutions" />
                </div>
                <h4>Integrations</h4>
                <p className="py-3">
                  We assist you in{" "}
                  <b>
                    capturing and leveraging data available through third-party
                    integrations.
                  </b>
                </p>
                {/* <button className="btn ">Learn More</button> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div id="Servicing" className="col-md-4 d-flex align-items-strech">
              <div className="keys key4 px-3 py-5">
                <div className="imgContainer">
                  <img src={service} alt="solutions" />
                </div>
                <h4>Servicing</h4>
                <p className="py-3">
                  We help you simplify the process of{" "}
                  <b>
                    maintaining regulatory compliance &amp; tracking and
                    reconciling loans.
                  </b>
                </p>
                {/* <button className="btn ">Learn More</button> */}
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-strech">
              <div className="keys key5 px-3 py-5">
                <div className="imgContainer">
                  <img src={reports} alt="solutions" />
                </div>
                <h4>Reports</h4>
                <p className="py-3">
                  <b>Track your financial health on a regular basis</b> &amp;
                  take necessary corrective actions if needed through
                  visualisation.
                </p>
                {/* <button className="btn ">Learn More</button> */}
              </div>
            </div>
            <div id="Deployment" className="col-md-4 d-flex align-items-strech">
              <div className="keys key6 px-3 py-5">
                <div className="imgContainer">
                  <img src={support} alt="solutions" />
                </div>
                <h4>Post-deployment Support</h4>
                <p className="py-3">
                  We offer <b>post-implementation support &amp; maintenance</b>{" "}
                  for robustness.
                </p>
                {/* <button className="btn ">Learn More</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Offerings;