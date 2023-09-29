import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import Faq from "../../components/faq/Faq";
import RequestCall from "../../components/requestCall/RequestCall";
import "./index.css";
import bg from "/assets/products/bg.png";
import prod1 from "/assets/products/prod1.png";
import prod2 from "/assets/products/prod2.png";
import prod3 from "/assets/products/prod3.png";
import prod4 from "/assets/products/prod4.png";
import prod5 from "/assets/products/prod5.png";
import prod6 from "/assets/products/prod6.png";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Products = () => {
  const location = useLocation();
    useEffect(() => {

      ReactGA.send({
        hitType: "pageview",
        page: location.pathname
      });
      window.scrollTo(0, 0);
    }, []);
  return (
    <div id="products">
      <div className="bg pt-5">
        <div className="container text-center">
          <h1>FIA Technologies: Transforming Lending</h1>
          <h6 className="text-success pb-3">
            Discover a New Era in Lending with FIA Technologies
          </h6>
          <img src={bg} alt="bc" className="img-fluid" />
        </div>
      </div>
      <div className="container py-5 mt-5">
        <h5 className="text-center mx-auto w-50 subtitle">
          At FIA Technologies, we are dedicated to revolutionizing the lending
          industry for small businesses. With a focus on innovation and
          excellence
        </h5>
        <h5 className="text-center pt-5 title">
          <span className="text-success ">Salesforce-Powered</span> Solutions
        </h5>
        <p className="subtitle text-center mx-auto w-50 py-3">
          Our lending solutions are built on the reliable and scalable
          Salesforce platform. Leveraging Salesforce's robust capabilities, our
          products are tailored to meet your institution's specific needs. This
          enables you to drive growth and provide exceptional customer service.
        </p>
        <div id="onboarding" className="row">
          <div className="col-md-6 greenborder">
            <div className="d-flex justify-content-center w-100 py-5 connector">
              <div className="circle">
                <img src={prod1} alt="prod1" className="img-fluid" />
                <h6 className="prodName">
                  FIA <span className="text-success">Onboarding</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-5 d-flex justify-content-center flex-column">
            <h5 className="prodHeading">
              <span className="text-success">Enhance Efficiency</span> in Loan
              Processing
            </h5>
            <p>
              The FIA Onboarding app empowers financial institutions to
              effortlessly navigate the loan initiation process for new
              borrowers. With customizable onboarding forms and automated
              workflows, it simplifies and streamlines the experience.
            </p>
            <h6 className="fst-italic">Key Features:</h6>
            <p className="fst-italic">
              Customizable forms, Automated workflows
            </p>
          </div>
        </div>
        <div id="intake" className="row">
          <div className="d-block d-md-none py-5">
            <div className="d-flex justify-content-center w-100">
              <div className="circleRev">
                <img src={prod2} alt="prod1" className="img-fluid" />
                <h6 className="prodName">
                  FIA <span className="text-success">Intake</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-5 d-flex justify-content-center flex-column greenborder">
            <h5 className="prodHeading">
              <span className="text-success">Streamlined Loan</span> Application
              Workflow
            </h5>
            <p>
              The FIA Intake app automates internal loan application workflows,
              enabling financial institutions to swiftly and effectively process
              loan applications and seamlessly route them to the right personnel
              or departments.
            </p>
            <h6 className="fst-italic">Key Features:</h6>
            <p className="fst-italic">
              Automated workflow, Efficient processing
            </p>
          </div>
          <div className="col-md-6 py-5 d-none d-md-block">
            <div className="d-flex justify-content-center w-100 connectorRev">
              <div className="circleRev">
                <img src={prod2} alt="prod1" className="img-fluid" />
                <h6 className="prodName">
                  FIA <span className="text-success">Intake</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div id="pricing" className="row">
          <div className="col-md-6 greenborder">
            <div className="d-flex justify-content-center w-100 py-5 connector">
              <div className="circle">
                <img src={prod3} alt="prod1" className="img-fluid" />
                <h6 className="prodName">
                  FIA <span className="text-success">Pricing</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-5 d-flex justify-content-center flex-column">
            <h5 className="prodHeading">
              Data-Driven <span className="text-success">Decision Making</span>
            </h5>
            <p>
              The FIA Pricing app harnesses data analysis to automate
              decision-making processes, allowing financial institutions to
              promptly and precisely assess borrower risk, resulting in faster,
              more accurate evaluations.
            </p>
            <h6 className="fst-italic">Key Features:</h6>
            <p className="fst-italic">Data analysis, Risk assessment</p>
          </div>
        </div>
        <div id="underwriting" className="row">
          <div className="d-block d-md-none py-5">
            <div className="d-flex justify-content-center w-100">
              <div className="circleRev">
                <img src={prod4} alt="prod1" className="img-fluid" />
                <h6 className="prodName">
                  FIA <span className="text-success">Underwriting</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-5 d-flex justify-content-center flex-column greenborder">
            <h5 className="prodHeading">
              Informed <span className="text-success">Loan Approvals</span>
            </h5>
            <p>
              The FIA Underwriting app provides valuable insights into
              borrowers' creditworthiness and debt-to-income ratios. This
              empowers financial institutions to make well-informed decisions
              about loan approvals and interest rates.
            </p>
            <h6 className="fst-italic">Key Features:</h6>
            <p className="fst-italic">Credit analysis, Informed decisions</p>
          </div>
          <div className="col-md-6 py-5 d-none d-md-block">
            <div className="d-flex justify-content-center w-100 connectorRev">
              <div className="circleRev">
                <img src={prod4} alt="prod1" className="img-fluid" />
                <h6 className="prodName">
                  FIA <span className="text-success">Underwriting</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div id="funding" className="row">
          <div className="col-md-6 greenborder">
            <div className="d-flex justify-content-center w-100 py-5 connector">
              <div className="circle">
                <img src={prod5} alt="prod1" className="img-fluid" />
                <h6 className="prodName">
                  FIA <span className="text-success">Funding</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-5 d-flex justify-content-center flex-column">
            <h5 className="prodHeading">
              Effortless{" "}
              <span className="text-success">Loan Funding Management</span>
            </h5>
            <p>
              The FIA Funding app offers a comprehensive suite of features that
              simplifies loan funding management for financial institutions.
              With the ability to use multiple warehouses, it streamlines the
              funding process.
            </p>
            <h6 className="fst-italic">Key Features:</h6>
            <p className="fst-italic">
              Multiple warehouse support, Comprehensive suite
            </p>
          </div>
        </div>
        <div id="servicing" className="row">
          <div className="d-block d-md-none py-5">
            <div className="d-flex justify-content-center w-100">
              <div className="circleRev">
                <img src={prod6} alt="prod1" className="img-fluid" />
                <h6 className="prodName">
                  FIA <span className="text-success">Servicing</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-5 d-flex justify-content-center flex-column greenborder">
            <h5 className="prodHeading">
              Efficient <span className="text-success">Loan Management</span>
            </h5>
            <p>
              The FIA Servicing app simplifies the loan management process for
              both lenders and borrowers. With automated loan management,
              real-time payment tracking, invoice generation, and more, it
              enhances the overall loan servicing experience.
            </p>
            <h6 className="fst-italic">Key Features:</h6>
            <p className="fst-italic">
              Automated loan management, Real-time payment tracking
            </p>
          </div>
          <div className="col-md-6 py-5 d-none d-md-block">
            <div className="d-flex justify-content-center w-100 connectorRev">
              <div className="circleRev">
                <img src={prod6} alt="prod1" className="img-fluid" />
                <h6 className="prodName">
                  FIA <span className="text-success">Servicing</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RequestCall title="Improve Your Small Business Lending with Our Dynamic Solutions" />
      <Faq />
    </div>
  );
};

export default Products;
