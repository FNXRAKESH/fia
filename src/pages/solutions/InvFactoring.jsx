import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import Faq from '../../components/faq/Faq';
import RequestCall from '../../components/requestCall/RequestCall';
import './index.css';
import bg from '/assets/solutions/bg.png';
import header from '/assets/solutions/header.png';
 

const InvFactoring = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <div id="invFactoring">
      <div className="bg py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <h6>Invoice Factoring Simplified</h6>
              <h1>Unlock Your Cash Flow with Our Invoice Factoring Services</h1>
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
              Invoice Factoring, also known as Accounts Receivable Financing
              Allows Businesses to Borrow Money Against the Value of their
              Outstanding Invoices
            </h1>
            <div className="d-none d-lg-block">
              <p>
                The process involves selling unpaid invoices to a factoring
                company in exchange for a cash advance. The factoring company
                then assumes responsibility for collecting payment on the
                invoices, typically taking a percentage of the invoice value as
                a fee for their services.
              </p>
              <p>
                The main advantage of invoice factoring is that it provides
                businesses with immediate access to cash, which can be used for
                things like paying bills, hiring employees, or investing in new
                equipment. It's an alternative to traditional bank loans, and
                it's particularly useful for businesses that have trouble
                getting approved for a loan or that need cash quickly.
              </p>
              <button type="button" className="btn text-success p-0 mb-5">
                Read More in Our Blog
                <span className="ms-2">
                  <FontAwesomeIcon icon={faArrowRight} color="#2B9348" />
                </span>
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <img src={header} alt="" className="img-fluid rounded-circle" />
          </div>
        </div>
        <hr className="mt-5" />
        <div className="d-block d-lg-none">
          <p>
            The process involves selling unpaid invoices to a factoring company
            in exchange for a cash advance. The factoring company then assumes
            responsibility for collecting payment on the invoices, typically
            taking a percentage of the invoice value as a fee for their
            services.
          </p>
          <p>
            The main advantage of invoice factoring is that it provides
            businesses with immediate access to cash, which can be used for
            things like paying bills, hiring employees, or investing in new
            equipment. It's an alternative to traditional bank loans, and it's
            particularly useful for businesses that have trouble getting
            approved for a loan or that need cash quickly.
          </p>
          <button type="button" className="btn text-success p-0 mb-5">
            Read More in Our Blog
            <span className="ms-2">
              <FontAwesomeIcon icon={faArrowRight} color="#2B9348" />
            </span>
          </button>
        </div>
        <div className="invFactSteps">
          <h1>
            Get Invoice Factoring <br />
            <span>in 7 Easy Steps</span>
          </h1>
          <div className="invSteps">
            <div className="stepItem">
              <div className="circle"></div>
              <p>
                Submit
                <br />
                Application
              </p>
            </div>
            <div className="stepItem">
              <div className="circle"></div>
              <p>
                Due Diligence
                <br />
                Process
              </p>
            </div>
            <div className="stepItem">
              <div className="circle"></div>
              <p>
                Agreement &amp;
                <br />
                Conditions
              </p>
            </div>
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
                Payment
                <br />
                Collection
              </p>
            </div>
            <div className="stepItem">
              <div className="circle"></div>
              <p>
                Remittance
                <br />
                of Funds
              </p>
            </div>
            <div className="stepItem">
              <div className="circle"></div>
              <p>
                Ongoing
                <br />
                Factoring
              </p>
            </div>
          </div>
        </div>
        <div className="cards d-flex justify-content-center flex-wrap">
          <div className="cardItem">
            <div className="circle"></div>
            <div>
              <p className="m-0">
                <small>Step 1</small>
              </p>
              <p className="m-0 pb-2 fw-bold">Submit Application</p>
              <p>
                <small>
                  The business looking for advance against their invoices in
                  invoice factoring will need to complete an application form
                  and provide detailed information about their company,
                  including financial statements and information about their
                  customers along with Bills receivables.
                </small>
              </p>
            </div>
          </div>
          <div className="cardItem">
            <div className="circle"></div>
            <div>
              <p className="m-0">
                <small>Step 2</small>
              </p>
              <p className="m-0 pb-2 fw-bold">Due Diligence</p>
              <p>
                <small>
                  The factoring company will then conduct a due diligence
                  process, which includes a credit check, analysis of the
                  business's financial statements, and an assessment of the
                  creditworthiness of the business's customers.
                </small>
              </p>
            </div>
          </div>
          <div className="cardItem">
            <div className="circle"></div>
            <div>
              <p className="m-0">
                <small>Step 3</small>
              </p>
              <p className="m-0 pb-2 fw-bold">Agreement</p>
              <p>
                <small>
                  If the factoring company decides to move forward with the
                  arrangement, they will provide the business with an agreement
                  outlining the terms and conditions of the factoring
                  arrangement.
                </small>
              </p>
            </div>
          </div>
          <div className="cardItem">
            <div className="circle"></div>
            <div>
              <p className="m-0">
                <small>Step 4</small>
              </p>
              <p className="m-0 pb-2 fw-bold">Invoice Submission</p>
              <p>
                <small>
                  Once the agreement is signed, the business will submit their
                  unpaid invoices to the factoring company. The factoring
                  company will then review the invoices and make a cash advance
                  to the business, typically covering 80-90% of the invoice
                  value.
                </small>
              </p>
            </div>
          </div>
          <div className="cardItem">
            <div className="circle"></div>
            <div>
              <p className="m-0">
                <small>Step 5</small>
              </p>
              <p className="m-0 pb-2 fw-bold">Payment Collection</p>
              <p>
                <small>
                  The factoring company will then take over the responsibility
                  for collecting payment on the invoices. They will contact the
                  business's customers to request payment and will retain a
                  percentage of the invoice value as a fee for their services.
                </small>
              </p>
            </div>
          </div>
          <div className="cardItem">
            <div className="circle"></div>
            <div>
              <p className="m-0">
                <small>Step 6</small>
              </p>
              <p className="m-0 pb-2 fw-bold">Remittance</p>
              <p>
                <small>
                  Once the factoring company collects payment on the invoices,
                  they will remit the remaining funds to the business, minus
                  their fees. This can be done on a regular basis, such as
                  weekly or monthly.
                </small>
              </p>
            </div>
          </div>
          <div className="cardItem">
            <div className="circle"></div>
            <div>
              <p className="m-0">
                <small>Step 7</small>
              </p>
              <p className="m-0 pb-2 fw-bold">Ongoing Factoring</p>
              <p>
                <small>
                  The business can continue to factor invoices as long as they
                  maintain a good relationship with the factoring company and
                  their customers pay on time.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <RequestCall />
      <Faq />
    </div>
  );
};

export default InvFactoring;
