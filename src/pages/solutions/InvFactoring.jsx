import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import Faq from '../../components/faq/Faq';
import RequestCall from '../../components/requestCall/RequestCall';
import './index.css';
import bg from '/assets/solutions/bg.png';


const InvFactoring = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="invFactoring">
      <div className="bg pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <h6>Invoice Financing Simplified</h6>
              <h1>Unlock Your Cash Flow with Our Invoice Financing Services</h1>
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

            <button type="button" className="btn text-success p-0 mb-5">
              Read more about Invoice Factoring in bur blog
              <span className="ms-2">
                <FontAwesomeIcon icon={faArrowRight} color="#2B9348" />
              </span>
            </button>
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
              <div className="circle"></div>
              <p>
                Invoice
                <br />
                Submission
              </p>
            </div>
            <div className="stepItem">
              <div className="circle"></div>
              <p>
                Invoice
                <br />
                Validation
              </p>
            </div>
            <div className="stepItem">
              <div className="circle"></div>
              <p>
                Funds
                <br />
                Disbursement
              </p>
            </div>
            <div className="stepItem">
              <div className="circle"></div>
              <p>
                Repayment
                <br />
                Collection
              </p>
            </div>
          </div>
        </div>
        <div className="cards d-flex justify-content-center flex-wrap">
          <div className="cardItem">
            
            <div>
              <p className="m-0">
                <small>Step 1</small>
              </p>
              <p className="m-0 pb-2 fw-bold">Invoice Submission</p>
              <p>
                <small>
                  Just submit the invoice online, Fia Technologies Automated
                  invoice financing solution will do the rest! It will save you
                  time and money by automatically doing the assessment of
                  creditworthiness of the invoices submitted
                </small>
              </p>
            </div>
          </div>
          <div className="cardItem">
            
            <div>
              <p className="m-0">
                <small>Step 2</small>
              </p>
              <p className="m-0 pb-2 fw-bold">Invoice Validation</p>
              <p>
                <small>
                  Invoices are validaed automatically by checking that they
                  fulfill all the acceptance criteria for the lendor.
                </small>
              </p>
            </div>
          </div>
          <div className="cardItem">
            
            <div>
              <p className="m-0">
                <small>Step 3</small>
              </p>
              <p className="m-0 pb-2 fw-bold">Funds Disbursement</p>
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
          <div className="cardItem">
            
            <div>
              <p className="m-0">
                <small>Step 4</small>
              </p>
              <p className="m-0 pb-2 fw-bold">Repayment Collection</p>
              <p>
                <small>
                  Our collection solution for invoice financing is designed to
                  streamline and automate collection task, it also sends the
                  automated reminders.
                </small>
              </p>
            </div>
          </div>
           
        </div>
      </div>
      <RequestCall title="Streamline Your Cash Flow with Our Invoice Factoring Services" />
      <Faq />
    </div>
  );
};

export default InvFactoring;
