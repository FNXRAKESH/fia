import React from 'react';
import './HowItWorks.css'
import origination from '/assets/landing/origination.png';
import collection from '/assets/landing/collection.png';
import ph1 from '/assets/service/sp.png'
import ph2 from '/assets/service/da.png'
import ph3 from '/assets/service/si.png'
import ph4 from '/assets/service/so.png'
import ph5 from '/assets/service/ark.png'
import ph6 from '/assets/service/sc.png'
import ph7 from '/assets/service/pa.png'
import ph8 from '/assets/service/rc.png'
import email from '/assets/email.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelopeCircleCheck, faList } from '@fortawesome/free-solid-svg-icons';

const HowItWorks = () => {
    return (
      <div id="howItWorks" className="container pb-5">
        <div className="row align-items-center">
          <div className="col-lg-6 curve d-none d-lg-block">
            <img src={origination} className="img-fluid " alt="" />
          </div>
          <div className="col-lg-1 d-none d-lg-block"></div>
          <div className="col-lg-5">
            <h2 className="title">
              Simplify Your Customer Journey with Our{' '}
              <span>MCA Origination</span>
            </h2>
            <p className="py-3">
              Our Process Takes Customers Through Pre-Qualification, Loan
              Application, Application Processing, Underwriting, Credit
              Decisioning, Quality Check, and Loan Funding.
            </p>
            <div className="curve d-block d-lg-none mb-3">
              <img src={origination} className="img-fluid " alt="" />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="step stepOne">
                  <div className="ph">
                    <img src={ph1} className="img-fluid " alt="" />
                  </div>
                  <h5>Streamlined Process</h5>
                </div>
              </div>
              <div className="col-md-6">
                <div className="step stepOne">
                  <div className="ph">
                    <img src={ph2} className="img-fluid " alt="" />
                  </div>
                  <h5>Data Accuracy</h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="step stepOne">
                  <div className="ph">
                    <img src={ph3} className="img-fluid " alt="" />
                  </div>
                  <h5>System Integration</h5>
                </div>
              </div>
              <div className="col-md-6">
                <div className="step stepOne">
                  <div className="ph">
                    <img src={ph4} className="img-fluid " alt="" />
                  </div>
                  <h5>Scalable Options</h5>
                </div>
              </div>
            </div>
            <div className="cta my-3">
              <h6 className="m-0">Learn More about MCA Origination</h6>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className="row align-items-center py-5 mt-5">
          <div className="col-lg-5">
            <h2 className="title">
              Effectively Manage Loan Process with Our{' '}
              <span>Servicing & Collections</span>
            </h2>
            <p className="py-3">
              Our process is designed to ensure that the loan process is
              effectively managed from the time funds are distributed to the
              borrower until the credit is settled off.
            </p>
            <div className="d-block d-lg-none mb-3">
              <img src={origination} className="img-fluid " alt="" />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="step stepOne">
                  <div className="ph">
                    <img src={ph5} className="img-fluid " alt="" />
                  </div>
                  <h5>Precise Record Keeping</h5>
                </div>
              </div>
              <div className="col-md-6">
                <div className="step stepOne">
                  <div className="ph">
                    <img src={ph6} className="img-fluid " alt="" />
                  </div>
                  <h5>Streamlined Collections</h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="step stepOne">
                  <div className="ph">
                    <img src={ph7} className="img-fluid " alt="" />
                  </div>
                  <h5>Processing Automation</h5>
                </div>
              </div>
              <div className="col-md-6">
                <div className="step stepOne">
                  <div className="ph">
                    <img src={ph8} className="img-fluid " alt="" />
                  </div>
                  <h5>Regulatory compliance</h5>
                </div>
              </div>
            </div>
            <div className="cta my-3">
              <h6 className="m-0">
                Learn More about Servicing &amp; Collections
              </h6>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
          <div className="col-lg-1 d-none d-lg-block"></div>
          <div className="col-lg-6 d-none d-lg-block">
            <img src={collection} className="img-fluid " alt="" />
          </div>
        </div>
      </div>
    );
}
 
export default HowItWorks;

