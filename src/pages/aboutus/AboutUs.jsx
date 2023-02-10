import React, { useEffect } from 'react';
import './AboutUs.css'
import bg from '/assets/aboutus/header.png';
import bg1 from '/assets/aboutus/bg.png';
import s1 from '/assets/aboutus/s1.png';
import s2 from '/assets/aboutus/s2.png';
import s3 from '/assets/aboutus/s3.png';
import RequestCall from '../../components/requestCall/RequestCall';
import Carousel from '../../components/carousel/Carousel';
import Faq from '../../components/faq/Faq';

const AboutUs = () => {
     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);
    return (
      <div id="aboutUs">
        <div className="bg pt-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6">
                <h6>About Us</h6>
                <h1 className="py-3">
                  Helping Businesses Succeed Through Our Lending Solutions
                </h1>
                <p className="d-none d-md-block">
                  We pride ourselves on being a leading provider of small
                  business lending solutions, we have a wealth of experience and
                  knowledge in the field of MCA and invoice factoring lending.
                  We have a reputation for providing efficient, transparent and
                  reliable service, which has made us a trusted partner for many
                  small business lenders.
                </p>
              </div>
              <div className="col-1"></div>
              <div className="col-5">
                <img src={bg} alt="bc" className="img-fluid" />
              </div>
            </div>
            <p className="d-block d-md-none">
              Our MCA solutions can be particularly beneficial for small to
              medium-sized businesses and start-ups that are looking to automate
              their lending operations without investing in expensive
              on-premises software or IT infrastructure. This solution also
              helps businesses to reduce operational costs, improve their
              lending decision-making, and increase.
            </p>
          </div>
        </div>
        <div className="bgGreen">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>
                  Invoice Factoring, also known as Accounts Receivable Financing
                  Allows Businesses to Borrow Money Against the Value of their
                  Outstanding Invoices
                </h1>
              </div>

              <div className="col-md-6">
                <p>
                  We pride ourselves on being a leading provider of small
                  business lending solutions, we have a wealth of experience and
                  knowledge in the field of MCA and invoice factoring lending.
                  We have a reputation for providing efficient, transparent and
                  reliable service, which has made us a trusted partner for many
                  small business lenders.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={bg1} alt="" className="img-fluid" />
        <div className="container">
          <h1 className="text-center py-5">
            “As a leading lending solution provider for small business lenders,
            we specialize in providing MCA (Merchant Cash Advance) and invoice
            factoring lending solutions to small businesses.”
          </h1>
          <hr className="my-5" />
          <div className="row mt-5 align-items-center ">
            <div className="col-md-5 d-none d-md-flex justify-content-center">
              <img src={s1} alt="bc" className="img-fluid" />
            </div>
            <div className="col-md-2 d-none d-md-block"></div>
            <div className="col-md-5 d-flex justify-content-center flex-column">
              <h2>
                Quick and Easy Funding for Small Businesses with Our MCA Loans
              </h2>
              <div className="col-md-5 d-flex d-md-none justify-content-center">
                <img src={s1} alt="bc" className="img-fluid" />
              </div>
              <p>
                Our MCA loans are designed to provide small businesses with
                quick access to cash, by advancing a lump sum based on the
                company's future credit card sales. This allows small businesses
                to access the funding they need, without the need for collateral
                or a traditional credit check.
              </p>
            </div>
          </div>
          <div className="row mt-5 align-items-center">
            <div className="col-md-5 text-end d-flex justify-content-center flex-column">
              <h2>
                Boost Cash Flow for Small Businesses with Our Invoice Factoring
                Solutions
              </h2>
              <div className="col-md-5 d-flex d-md-none justify-content-center">
                <img src={s2} alt="bc" className="img-fluid" />
              </div>
              <p>
                Our simple and easy seven steps invoice financing solution
                ensures the complete automation of your lending process.
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
              <h2>Why Choose FIA as Your Business Solution Provider?</h2>
              <div className="col-md-5 d-flex d-md-none justify-content-center">
                <img src={s3} alt="bc" className="img-fluid" />
              </div>
              <p>
                Our lending solutions are designed to be quick, easy and
                flexible, with minimal paperwork and a simple application
                process. We understand that small businesses operate on tight
                timelines and strive to provide funding as quickly as possible.
              </p>
            </div>
          </div>
        </div>
        <RequestCall title="Improve Your Small Business Lending with Our Dynamic Solutions"/>
        <Carousel />
        <Faq />
      </div>
    );
}
 
export default AboutUs;