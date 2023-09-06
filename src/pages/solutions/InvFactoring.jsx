import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import Faq from '../../components/faq/Faq';
import RequestCall from '../../components/requestCall/RequestCall';
import './index.css';
import bg from '/assets/solutions/bg.png';
import submission from '/assets/solutions/submission.png';
import validation from '/assets/solutions/validation.png';
import fund from '/assets/solutions/fund.png';
import repay from '/assets/solutions/repay.png';
import if1 from '/assets/solutions/if1.png';
import if2 from '/assets/solutions/if2.png';
import if3 from '/assets/solutions/if3.png';
import if4 from '/assets/solutions/if4.png';
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

const InvFactoring = () => {
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
    <div id="invFactoring">
      <div className="bg pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <h6>Invoice Financing Simplified</h6>
              <h1>
                Unlock Your Cash Flow with Our Invoice Financing SaaS Solution
              </h1>
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
              Invoice Financing, also known as Accounts Receivable Financing
              Allows Businesses to Borrow Money Against the Value of their
              Outstanding Invoices
            </h1>

            <Link to="/blogs" className="btn text-success p-0 mb-5">
              Read more about Invoice financing in our blog
              <span className="ms-2">
                <FontAwesomeIcon icon={faArrowRight} color="#2B9348" />
              </span>
            </Link>
          </div>
          <div className="col-md-6">
            <p>
              The process involves selling unpaid invoices to a Financing
              company in exchange for a cash advance. The Financing company then
              assumes responsibility for collecting payment on the invoices,
              typically taking a percentage of the invoice value as a fee for
              their services.
            </p>
            <p>
              The main advantage of invoice Financing is that it provides
              businesses with immediate access to cash, which can be used for
              things like paying bills, hiring employees, or investing in new
              equipment. It's an alternative to traditional bank loans, and it's
              particularly useful for businesses that have trouble getting
              approved for a loan or that need cash quickly.
            </p>
          </div>
        </div>
        <hr className="mt-5" />

        <div className="invFactSteps">
          <h1>
            Get Invoice Financing <br />
            <span>in 4 Easy Steps</span>
          </h1>
          <div className="invSteps container">
            <div className="stepItem">
              <div className="circle">
                <img src={submission} alt="" className="img-fluid" />
              </div>
              <p>
                Invoice
                <br />
                Submission
              </p>
            </div>
            <div className="stepItem">
              <div className="circle">
                <img src={validation} alt="" className="img-fluid" />
              </div>
              <p>
                Invoice
                <br />
                Validation
              </p>
            </div>
            <div className="stepItem">
              <div className="circle">
                <img src={fund} alt="" className="img-fluid" />
              </div>
              <p>
                Funds
                <br />
                Disbursement
              </p>
            </div>
            <div className="stepItem">
              <div className="circle">
                <img src={repay} alt="" className="img-fluid" />
              </div>
              <p>
                Repayment
                <br />
                Collection
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5 align-items-center ">
          <div className="col-md-5 d-none d-md-flex justify-content-center">
            <img src={if1} alt="bc" className="img-fluid" />
          </div>
          <div className="col-md-2 d-none d-md-block"></div>
          <div className="col-md-5 d-flex justify-content-center flex-column">
            <div className="col-md-5 d-flex d-md-none justify-content-center">
              <img src={if1} alt="bc" className="img-fluid" />
            </div>
            <div className="cardItem">
              <p className="m-0 pt-4" style={{ color: '#2B9348' }}>
                <small className="fw-bold">STEP 1</small>
              </p>
              <h2 className="m-0 pb-2 fw-bold">Invoice Submission</h2>
              <p>
                <small>
                  Just submit the invoice online, Financial Information
                  Automation(FIA) Technologies' Automated invoice financing
                  solution will do the rest! It will save you time and money by
                  automatically doing the assessment of creditworthiness of the
                  invoices submitted
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5 align-items-center">
          <div className="col-md-5 text-end d-flex justify-content-center flex-column">
            <div className="col-md-5 d-flex d-md-none justify-content-center">
              <img src={if2} alt="bc" className="img-fluid" />
            </div>
            <div className="cardItem">
              <p className="m-0 pt-4" style={{ color: '#2B9348' }}>
                <small className="fw-bold">STEP 2</small>
              </p>
              <h2 className="m-0 pb-2 fw-bold">Invoice Validation</h2>
              <p>
                <small>
                  Invoices are validated automatically by checking that they
                  fulfill all the acceptance criteria for the lendor.
                </small>
              </p>
            </div>
          </div>
          <div className="col-md-2 d-none d-md-block"></div>
          <div className="col-md-5 d-none d-md-flex justify-content-center">
            <img src={if2} alt="bc" className="img-fluid" />
          </div>
        </div>
        <div className="row mt-5 align-items-center ">
          <div className="col-md-5 d-none d-md-flex justify-content-center">
            <img src={if3} alt="bc" className="img-fluid" />
          </div>
          <div className="col-md-2 d-none d-md-block"></div>
          <div className="col-md-5 d-flex justify-content-center flex-column">
            <div className="col-md-5 d-flex d-md-none justify-content-center">
              <img src={if3} alt="bc" className="img-fluid" />
            </div>
            <div className="cardItem">
              <p className="m-0 pt-4" style={{ color: '#2B9348' }}>
                <small className="fw-bold">STEP 3</small>
              </p>
              <h2 className="m-0 pb-2 fw-bold">Funds Disbursement</h2>
              <p>
                <small>
                  After fullifilling the eligibility criteria both the parties
                  the lendor and the borrower can move forward with the
                  agreement. The Financing company will make cash advance to the
                  business, typically covering 80-90% of the invoice value.
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5 align-items-center">
          <div className="col-md-5 text-end d-flex justify-content-center flex-column">
            <div className="col-md-5 d-flex d-md-none justify-content-center">
              <img src={if4} alt="bc" className="img-fluid" />
            </div>
            <div className="cardItem">
              <p className="m-0 pt-4" style={{ color: '#2B9348' }}>
                <small className="fw-bold">STEP 4</small>
              </p>
              <h2 className="m-0 pb-2 fw-bold">Repayment Collection</h2>
              <p>
                <small>
                  Our collection solution for invoice financing is designed to
                  streamline and automate collection task, it also sends the
                  automated reminders.
                </small>
              </p>
            </div>
          </div>
          <div className="col-md-2 d-none d-md-block"></div>
          <div className="col-md-5 d-none d-md-flex justify-content-center">
            <img src={if4} alt="bc" className="img-fluid" />
          </div>
        </div>
      </div>
      <RequestCall title="Streamline Your Cash Flow with Our Invoice financing Services" />
      <Faq />
    </div>
  );
};

export default InvFactoring;
